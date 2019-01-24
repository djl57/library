// 导入 名字导出 时，导入的变量名必需和导入的名字一样
import { name, age, sex, age2, sex2 } from './read.js'
console.log(`${name} ${age} ${sex}
 ${age2} ${sex2}
`)
// 或者可以直接导入一个模块
import * as read from './read.js'
// console.log(`${read}`) // 报错：Cannot convert object to primitive value（数据类型转换不成功）
console.log(`${read.name}`) // djlun

// 导入 默认导出
import add from './read.js'
console.log(add(2,3)) // 5

// 导入 混合导出
import add2, { name2 } from './read.js'
console.log(add2(4,5)) // 9
console.log(name2) // zwenj

// 当两个模块通过 名字导出 导出的变量名一样时，es6提供了重命名的方法来解决这个问题
import {name as aname} from './read1.js'
import {name as bname} from './read2.js'
console.log(aname) // djlun
console.log(bname) // zwenj

// 导入 重命名导出
import { sname } from './read.js'
console.log(sname) // zwenj

import aage from './read1.js'
console.log(aage) // 18

// add是m3.js导出的，由m2.js中转
import add3, {num1, num2} from './m2.js'
console.log(add3(num1, num2)) // 3