import Taro from "@tarojs/taro";
import { getAppId } from "./wechat";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8000/api/v1/";

interface RequestParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  header?: any;
}

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 标记是否正在跳转登录页，防止重复跳转
let isRedirectingToLogin = false;

export const request = <T = any>(
  params: RequestParams
): Promise<ApiResponse<T>> => {
  return new Promise((resolve, reject) => {
    const token = Taro.getStorageSync("token");
    const appId = getAppId();
    const header: any = {
      "Content-Type": "application/json",
      "X-Requests-App": appId,
      ...params.header,
    };

    if (token) {
      header["Authorization"] = `Bearer ${token}`;
    }

    Taro.request({
      url: `${BASE_URL}${params.url}`,
      method: params.method || "GET",
      data: params.data,
      header,
      success: (res) => {
        if (res.statusCode === 401 || res.statusCode === 403) {
          // 登录过期或未授权，跳转到登录页
          if (!isRedirectingToLogin) {
            isRedirectingToLogin = true;
            Taro.showToast({
              title: "登录过期，请重新登录",
              icon: "none",
              duration: 2000,
              complete() {
                Taro.removeStorageSync("token");
                Taro.redirectTo({
                  url: "/pages/login/index",
                });
                isRedirectingToLogin = false;
              },
            });
          }
          reject(new Error("登录过期，请重新登录"));
          return;
        }

        if (res.statusCode === 200) {
          const response = res.data as ApiResponse<T>;
          if (response.code === 401 || response.code === 403) {
            // 业务代码也是401或403，同样跳转登录
            if (!isRedirectingToLogin) {
              isRedirectingToLogin = true;
              Taro.showToast({
                title: "登录过期，请重新登录",
                icon: "none",
                duration: 2000,
                complete() {
                  Taro.removeStorageSync("token");
                  Taro.redirectTo({
                    url: "/pages/login/index",
                  });
                  isRedirectingToLogin = false;
                },
              });
            }
            reject(new Error("登录过期，请重新登录"));
            return;
          }
          resolve(response);
        } else {
          const serverMsg = (res.data as any)?.message;
          reject(new Error(serverMsg || `请求失败，状态码：${res.statusCode}`));
        }
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
