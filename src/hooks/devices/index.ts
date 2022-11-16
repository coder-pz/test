import { computed } from "vue";
import Taro from "@tarojs/taro";
export function getNavBarHeight() {
  return computed(() => {
    let menuButtonObject = Taro.getMenuButtonBoundingClientRect(); //获取胶囊对象
    let sysinfo = Taro.getSystemInfoSync(); // 获取设备系统对象
    let statusBarHeight = sysinfo.statusBarHeight as number; //获取状态栏高度
    let menuBottonHeight = menuButtonObject.height; //获取胶囊顶部高度
    let menuBottonTop = menuButtonObject.top; // 获取胶囊距离顶部的高度
    let navBarAllHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2; //navbar整体高度
    let navBarHeight = navBarAllHeight - statusBarHeight; //navbar高度
    return { navBarAllHeight, statusBarHeight, navBarHeight };
  });
}
