import { Button, Input, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { login } from "../../services/auth/login";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // 动画序列
    const timers: any[] = [];

    // Phase 1: Logo 出现
    timers.push(setTimeout(() => setIntroPhase(1), 300));
    // Phase 2: 标题出现
    timers.push(setTimeout(() => setIntroPhase(2), 800));
    // Phase 3: 副标题出现
    timers.push(setTimeout(() => setIntroPhase(3), 1300));
    // Phase 4: 动画完成，开始过渡
    timers.push(setTimeout(() => setIntroPhase(4), 2000));
    // Phase 5: 显示表单
    timers.push(setTimeout(() => {
      setShowIntro(false);
      setShowForm(true);
    }, 2500));

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleLogin = async () => {
    if (Taro.getStorageSync('token')) {
      Taro.redirectTo({
        url: "/pages/home/index",
      });
      return;
    }
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
      {/* Logo 和标题区域 */}
      <View className={`login-header ${showForm ? "login-header--compact" : ""}`}>
        {/* Logo */}
        <View className={`logo-wrapper ${introPhase >= 1 ? "logo-wrapper--visible" : ""} ${showForm ? "logo-wrapper--compact" : ""}`}>
          <View className="logo-pulse" />
          <View className="logo-inner">
            <Text className="logo-icon">🧩</Text>
          </View>
          <View className={`logo-halo ${introPhase >= 1 ? "logo-halo--animating" : ""}`} />
        </View>

        {/* 标题 */}
        <Text className={`app-title ${introPhase >= 2 ? "app-title--visible" : ""} ${showForm ? "app-title--compact" : ""}`}>
          奇域
        </Text>

        {/* 副标题 */}
        <Text className={`app-subtitle ${introPhase >= 3 ? "app-subtitle--visible" : ""} ${showForm ? "app-subtitle--compact" : ""}`}>
          开启你的奇域之旅
        </Text>
      </View>

      {/* 登录表单区域 */}
      <View className={`login-card-wrapper ${showForm ? "login-card-wrapper--visible" : ""}`}>
        <View className="login-card">
          <View className="card-header">
            <Text className="card-title">登录</Text>
            <Text className="card-subtitle">如果没有账户将自动为您注册</Text>
          </View>

          {/* 用户名输入 */}
          <View className="form-item">
            <Text className="form-label">用户名</Text>
            <View className="input-wrapper">
              <Text className="input-icon">{username ? "😺" : "👤"}</Text>
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

      {/* 介绍动画遮罩 */}
      {showIntro && introPhase >= 4 && (
        <View className="intro-overlay" />
      )}
    </View>
  );
};

export default Login;
