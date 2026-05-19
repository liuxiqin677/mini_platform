export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface PageResponse<T = any> {
  records: T[];
  total: number;
  page: number;
  size: number;
}

// 认证相关
export * from "./auth/login";

// 用户相关
export * from "./user";

// 世界相关
export * from "./world";

// 图鉴相关
export * from "./animal";
export * from "./plant";
export * from "./tool";
export * from "./food";

// 培养相关
export * from "./nurture";

// 足迹相关
export * from "./footprint";
