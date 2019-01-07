/**
 * 兼容 
 */
/**
 * createTime: 2018.10.30
 * @desc: es6的Array.from()方法，如果没有这个方法，就用call
 */
function toArray (arrLike) {
  return Array.from()? Array.from(arrLike) : [].slice.call(arrLike)
}
// const toArray = (() =>
//   Array.from ? Array.from : obj => [].slice.call(obj)
// )();
