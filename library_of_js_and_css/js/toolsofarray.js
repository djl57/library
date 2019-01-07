
/**
 * createTime: 2018.10.29
 * @desc: 比较函数，用于sort()传参，对数组进行降序排序
 * @example: arr.sort(descend)
 */
function descend (val1, val2) {
  if (val1 < val2) { return 1; } 
  else if (val2 < val1) { return -1; } 
  else { return 0; }
}
/**
 * createTime: 2018.10.29
 * @desc: 比较函数，用于sort()传参，对数组进行升序排序
 * @example: arr.sort(ascend)
 */
function ascend (val1, val2) {
  if (val1 < val2) { return -1; } 
  else if (val2 < val1) { return 1; } 
  else { return 0; }
}
/**
 * createTime: 2018.10.30
 * @desc: 求数组最大元素
 * @example: maxIndex(arr)
 */
function maxInArray (arr) {
  return Math.max(...arr);
}
/**
 * createTime: 2018.10.30
 * @desc: 往arr1中批量增加arr2中的元素
 * @example: pushArray(arr1,arr2)
 */
function pushArray (arr1, arr2) {
  arr1.push(...arr2);
  return arr1;
}
/**
 * createTime: 2018.10.30
 * @desc: 传一个数组，创建一个任意的时间
 * @example: let arr = [2018,10,30,13,08,59] 年月必须，其他参数可选
 */
function createDate (arr) {
  arr[1]--;
  return new Date(...arr);
}
/**
 * createTime: 2018.10.30
 * @desc: 返回类似数据 2018年10月30号 礼拜二 13时08分59秒
 * @example: date = new Date() formatDate(date) // "2018年10月30号 礼拜二 13时38分15秒"
 */
function formatDate (date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var week = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  month++;
  var oWeek = ['日','一','二','三','四','五','六'];
  week = oWeek[week];
  if (hour < 10) { hour = '0' + hour; }
  if (minute < 10) { minute = '0' + minute; }
  if (second < 10) { second = '0' + second; }
  return year + '年' + month + '月' + day + '号'+ ' ' + '礼拜' + week + ' ' + hour + '时' + minute + '分' + second + '秒';
}
/**
 * createTime: 2018.10.30
 * @desc: 获得当前时间戳
 */
function getTimestamp () {
  return new Date().getTime();
}
/**
 * createTime: 2018.10.30
 * @desc: 复制数组（浅克隆）     ,简单arr2=arr1克隆的只是指针，改变arr2的值arr1的值也会发生变化
 */
function cloneArray (arr) {
  var cloneArr = [...arr];
  return cloneArr;
}