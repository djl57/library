// 浏览器视口宽度高度的封装
export function client () {
  if (window.innerWidth !==null) { // 兼容 IE9以上 及 现代的浏览器
    return {
      width : window.innerWidth,
      height : window.innerHeight
    }
  } else if(document.compatMode === "CSS1Compat") { // 标准浏览器，有<!DOCTYPE html>声明的
    return {
      width : document.documentElement.clientWidth,
      height : document.documentElement.clientHeight
    }
  } else { // 怪异浏览器，没有<!DOCTYPE html>声明的
    return {
      width : document.body.clientWidth,
      height : document.body.clientHeight
    }
  }
}