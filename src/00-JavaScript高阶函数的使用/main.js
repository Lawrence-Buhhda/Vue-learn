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
        for(let i=0;i<this.books.length;i++){
            totalPrice+=this.books[i].price*this.books[i].count;
        }
        //for(let i in/of this.books)
        //reduce
        return totalPrice;
    }
},
    filters:{//过滤器
        showPrice(price){
            return '$'+price.toFixed(2);
        }
    },

})