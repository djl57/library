/**
 * createTime: 2018.10.29
 * @desc: 实现重复字符串 
 * @param: str: 字符串;n: 重复次数
 * @example: repeatString('hi',3) // hihihi
 */
function repeatString (str, n) {
  return new Array(n + 1).join(str);
}