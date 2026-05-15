import Taro from '@tarojs/taro';

/**
 * 获取当前小程序的 AppID
 * 说明：此方法仅在微信小程序环境下有效。
 * Taro.getAccountInfoSync() 会返回当前小程序的帐号信息。
 */
export const getAppId = (): string => {
  // 确保在微信小程序环境下执行
  if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
    try {
      const accountInfo = Taro.getAccountInfoSync();
      return accountInfo.miniProgram.appId || '';
    } catch (error) {
      console.error('获取 AppID 失败:', error);
      return '';
    }
  }
  console.warn('当前非微信小程序环境，无法获取 AppID');
  return '';
};