//mixin 方法
export const MixData01 = {
  created(){
     this.band()
  },
  data(){
      return{
          show : false,
          msgText:'做个测试呀 看能不能执行'
      }
  },
  methods: {
    band(){
          this.show = !this.show
          console.log('hello from Mixin');
     }
  }
}

export const MixData02 = {
  created(){
      this.twoFun()
      this.hello()
  },
  data(){
      return{
          twoTxt : '这儿还有个数据'
      }
  },
  methods:{
      twoFun(){
          console.log('都输了呢')
      },
      hello(){
          console.log('一次调用两个函式')
      }
  }
}








