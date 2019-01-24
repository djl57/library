/* 
1. 模块导出
  可以导出的对象：
  - 最外层函数
  - 最外层的类
  - var、let、const声明的变量

  注意：es6模块是`静态`的导出和导入，所以只能在模块的最外层作用
      作用域使用import和export，不能在条件语句或函数作用域中使
      用。

  导出分为两类：
  （1）名字导出[name export]
      - 可一次导出多个 (在main.js中导入)
      - 导入的名字必须和导出的名字一样

  （2）默认导出[default export]
      - 一个模块（js文件）只能有一个默认导出
      - 导入的名字可以和导出的名字不一样（对导出匿名函数和类有用）

  还有两种：
  （1）重命名导出
      as
  （2）中转模块导出
*/

// 名字导出：
export const name = 'djlun'
export const age = 18
export const sex = 'female'
// 或者直接导出一个列表：
const name2 = 'zwenj'
const age2 = 24
const sex2 = 'male'
export {
  name2, age2, sex2
}

// 默认导出
export default (a, b) => a + b

// 重命名导出
export {
  name2 as sname
}
