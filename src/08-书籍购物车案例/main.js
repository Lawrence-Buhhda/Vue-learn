const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },{
                id:2,
                name:'《算法》',
                date:'2016-5',
                price:80.00,
                count:5
            }
        ]
    },
    methods:{
        getFinalPrice(item){
            return '$'+item.price.toFixed(2);
        },decrement(index){
            this.books[index].count--;
        },
        increment(index){
            this.books[index].count++;
        },
        removeHandler(index){
            this.books.splice(index,1)
        }
    },computed:{
    TotalPrice(){
        let totalPrice=0;
        // for(let i=0;i<this.books.length;i++){
        //     totalPrice+=this.books[i].price*this.books[i].count;
        // }

        //for(let i in/of this.books)
        // for(let i in this.books){
        //     totalPrice+=this.books[i].price*this.books[i].count;
        // }

        // for(let item of this.books){
        //     totalPrice+=item.price*item.count;
        // }

        //reduce
        return this.books.reduce((preValue,book)=>preValue+book.price*book.count,0)

        // return this.books.reduce(function (preValue,book) {
        //    return preValue+book.price*book.count;
        // },0)
    }
},
    filters:{//过滤器
        showPrice(price){
            return '$'+price.toFixed(2);
        }
    },

})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民:对象)/函数式编程(第一公民：函数)
//filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时。函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，
const nums=[10,20,111,222,30,40,444]


// let newNums=nums.filter(function (n) {
//     return n<100;
// })
// // console.log(newNums)
//
// //map函数的使用
// //20,40,80,100
// let new2Nums=newNums.map(function (n) {
//     return n*2
// })
// // console.log(new2Nums)
//
// //3.reduce函数的使用
// //reduce作用：对数组中所有的内容进行汇总
// let total=new2Nums.reduce(function (preValue,n) {
//     return preValue + n;
// },0)
// console.log(total)
// //第一次:preValue 0 n 20
// //第二次：preValue 0+20 n 40
// //第三次：preValue 20+40 0 n 60
// // 第四次：preValue 20+40+60 n 80
// //200

// let total=nums.filter(function (n) {
//     return n<100
// }).map(function (n) {
//     return n*2;
// }).reduce(function (preValue,n) {
//     return preValue+n;
// },0);
// console.log(total)

let total=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n);
console.log(total)


// //1.需求：取出所有小于100的数字
// let newNums=[]
// for(let n of nums){
//     if(n<100){
//         newNums.push(n)
//     }
// }
// //2.将所有小于100的数字进行转化：全部*2
// let new2Nums=[]
// for(let n of newNums){
//         new2Nums.push(n*2)
// }
// console.log(new2Nums);
// //3.将所有new2Nums数字相加，得到最终的结果
// let total=0
// for(let n of new2Nums){
//     total += n;
// }