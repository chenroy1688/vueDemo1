export default{
    //调用mutations 的add函式
        // addListItem(context,payload){
        //   context.commit('addTodoList',payload)
        // },
        addListItem({commit},payload){
            commit('addTodoList',payload)
          },
          //删除当笔计划
          reduceList({commit},index){
            commit('ReduceList',index)
          },
          //判断所有/已完成/未完成 数据
          chgList({commit},keys){
            commit('chgtodoList',keys)
          },
          //获取 table 数据
          tableData({commit},tableData){
            commit('gettableData',tableData)
          },
          //透过mapActions函式调用
          decrements({commit}){
            commit('decrement')
          }, 
          //取得json -- 表单数据
          getTabData({commit},tabData){
            commit('getTabData',tabData)
          },
          //实现全选功能
          chkAll({commit},chkVal){
            commit('checkAll',chkVal)
          },
  
          //mix多个action 非同步操作
          //方法1 - 在组件里分发action
          actionA({commit}){ 
            return new Promise((reslove,reject) => {
              commit('increment')
              reslove()
            })
          },
          //方法2 - 在actionsB里分发另一个actionA
          actionB({dispatch,commit}){ 
            return dispatch('actionA').then(() => {
              //dispatch执行actionA 在执行actionB
              commit('addText')
            })
          },
          // async actionA({commit}){
          //   commit('gotData', await gotData())
          // },
          // async actionB({ dispatch,commit }){
          //   await dispatch('actionA')
          //   commit('gotOtherData', await gotOtherData())
          // }
}