//1.导入的{}中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
        console.log('小明是天才，好家伙')
    console.log(sum(20,30))
}

//2.直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1+height)

//3.导入 export的function
import {mul,Person} from "./aaa.js";

console.log(mul(1, 1));

const p=new Person();
p.run()

//默认只能有一个
//导入export default 中的内容
// import addr from "./aaa.js";
//
// console.log(addr)
import addr from "./aaa.js"
addr('1')

//5.统一全部导入
import * as aaa from "./aaa.js"

console.log(aaa.flag)