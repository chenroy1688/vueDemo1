export default{
    //添加todolist计划
    addTodoList(state,payload){
        //新增一筆計畫
        state.todoLists.push(
          {
            id     : state.todoLists.length + 1,
            name   : payload.input, //輸入內容
            status : false
          }
        )
      },
      //删除计划
      ReduceList(state,chkDel){
        //chkDel 为对象
        // console.log('333',chkDel)
        //删除当下数据
        state.todoLists.splice(chkDel.index,1); //删除
        state.newLists = state.todoLists
        state.residence = false
      },
      //切换所有/已完成/未完成数据
      chgtodoList(state,valObj){

        state.curVal = valObj.keys  //所有/已完成/未完成 判断值
        //判断载入哪种数据
        switch(valObj.keys){
            case 1:  //所有
                state.newLists = state.todoLists
                break;
            case 2:  //已完成
                state.newLists = state.todoLists.filter( item => {
                  return item.status //腮选status为true
                })
                console.log(state.newLists);
                break;
            case 3:  //未完成
                state.newLists = state.todoLists.filter( item => {
                  return !item.status
                })
                break;
            default:
                return;
        }
        
      },
      //取得json -- 表单数据
      getTabData(state,tableObj){
        state.tableData = tableObj.TabData
      },
      //实现全选
      checkAll(state,chkAll){
        state.tableData.forEach(function(item){
          item.check = chkAll.val
        })
      },
      increment (state, payload) {
        // state.count += payload.amount 
        state.count += 100
        alert('store的数据 ---' + state.count)
      },
      decrement: state => state.count -= 50,
      addText: state => alert(state.gameText + '增加这些文字！！'),
      getTimes: state => {
        //更新todos的状态
        state.todos[1].done = true;
      }
}