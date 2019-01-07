/**
 * 封装了一个获取标签之间的文本信息兼容版本函数
 * @param element 标签对象
 * @returns {*}
 */
function getText(element) {
  if(element.innerText) {
    return element.innerText;   //IE8及之前的浏览器支持，现在两者都支持
  }else {
    return element.textContent; //低版本的火狐支持
  }
}