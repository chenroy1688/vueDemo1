//mixin 方法
// export const modal = {
//   template:'#modal',
//   data(){
//       return{
//           isshow : false,
//           msgText:'做个测试呀 看能不能执行'
//       }
//   },
//   methods: {
//         toggleShow(){
//             this.isshow = !this.isshow
//      }
//   },
//   component: {
//         appChild : child
//   }
// }

//提示框
export const tooltip = {
  data(){
      return{
          isshow : false,
          msg : 'give me a book'
      }
  },
  methods:{
      toggleShow(){
          this.isshow = !this.isshow
      }
  }
}


export const toggle = {
    data(){
        return {
            isshow : true
        }
    },
    methods: {
        toggleShow(){
            this.isshow = !this.isshow
        }
    }
}








