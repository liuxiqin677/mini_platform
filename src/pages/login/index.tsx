import { Button, Input, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { login } from "../../services/auth/login";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim()) {
      Taro.showToast({
        title: "请输入用户名",
        icon: "none",
      });
      return;
    }
    if (!password) {
      Taro.showToast({
        title: "请输入密码",
        icon: "none",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await login({ username, password });
      if (res.code === 200 && res.data) {
        Taro.setStorageSync("token", res.data.access_token);
        Taro.setStorageSync("token_type", res.data.token_type);
        Taro.showToast({
          title: "登录成功",
          icon: "success",
          duration: 1500,
        });
        setTimeout(() => {
          Taro.redirectTo({
            url: "/pages/home/index",
          });
        }, 1500);
      } else {
        Taro.showToast({
          title: res.message || "登录失败",
          icon: "none",
        });
      }
    } catch (error: any) {
      Taro.showToast({
        title: error.message || "登录失败",
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="login-page">
      {/* Logo区域 */}
      <View className="login-header">
        <View className="logo-wrapper">
          <Text className="logo-icon">🧩</Text>
        </View>
        <Text className="app-title">奇域</Text>
        <Text className="app-subtitle">开启你的奇域之旅</Text>
      </View>

      {/* 登录表单 */}
      <View className="login-card">
        <View className="card-header">
          <Text className="card-title">登录</Text>
          <Text className="card-subtitle">如果没有账户将自动为您注册</Text>
        </View>

        {/* 用户名输入 */}
        <View className="form-item">
          <Text className="form-label">用户名</Text>
          <View className="input-wrapper">
            <Text className="input-icon">🧑</Text>
            <Input
              className="form-input"
              placeholder="请输入用户名（20字符以内）"
              value={username}
              onInput={(e) => setUsername(e.detail?.value || "")}
              maxlength={20}
            />
            <Text className="input-counter">{username.length}/20</Text>
          </View>
        </View>

        {/* 密码输入 */}
        <View className="form-item">
          <Text className="form-label">密码</Text>
          <View className="input-wrapper">
            <Text className="input-icon">🔒</Text>
            <Input
              className="form-input"
              placeholder="请输入密码"
              value={password}
              onInput={(e) => setPassword(e.detail?.value || "")}
              password={!showPassword}
            />
            <Text
              className="input-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </Text>
          </View>
        </View>

        {/* 登录按钮 */}
        <Button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          <Text className="login-btn-text">
            {loading ? "登录中..." : "登录 / 注册"}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
