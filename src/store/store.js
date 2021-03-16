import Vue from 'vue'
import Vuex from 'vuex'
// import MainStore from '@/router/MainStore'

//使用vuex
Vue.use( Vuex )

//定义store容器的数据
const store = new Vuex.Store({
    state:{ 
      count:100,
      gameText : '1111111111',
      curVal:1, //载入初始数据
      residence:false,
      todos:[
        {
          id:1,
          name:'roy',
          content:'soniclive.cn',
          done:true
        },
        {
          id:2,
          name:'well',
          content:'bootstrat.com.tw',
          done:false
        },
        {
          id:3,
          name:'bob',
          content:'yahoo.com.tw',
          done:true
        },
        {
          id:4,
          name:'jane',
          content:'stand168.com',
          done:true
        }
      ],
      //计划数据
      todoLists:[
          {
              id:1,
              name:'“我一直认为，乔丹第一次退役，并选择去打棒球的真正原因',
              status:true
          },
          {
              id:2,
              name:'前公牛球员史蒂夫-科尔近日在采访中谈及了迈克尔-乔丹第一次退役的缘由',
              status:true
          },
          {
              id:3,
              name:'沃顿：即使赛季取消 国王今年也算得上成功',
              status:false
          }
      ],
      //真实要渲染的数据
      newLists:[],
      tableData:[]
    },
    getters:{ //类似store的computed
      evenOrOdd( state ){ //判断为奇数,偶数
        state.conut % 2 === 0 ? '偶数' : '奇数'
      },
      count : state => state.count + 103,
      //过滤todos.done 为true的数据
      doneTodos: state => { //过滤
        return state.todos.filter(item => item.done)
      },
      //参数state->原始数据,参数getters->所有处理后的数据
      doneTodesCount: (state,getters) => {
        return getters.doneTodos[1]
      },
      getTodoById:(state) => (id) => { //绑定方法 导入id参数筛选符合的数据
        return state.todos.find(todo => todo.id === id)
      }
    },
    mutations:{ // 直接更新state函式的对象 同步方式更新数据
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
                // console.log(state.newLists);
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
    },
    actions:{ //类似mutations功能 非同步方式处理数据
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
    },
    modules:{
      //  模块化 store, 把需要 store 的数据导入到这里即可
      // store 格式参考 /src/Frame/MainStore.js
      // MainStore
    }
  })

//用export default 封装程式码,让外部可以引用
export default store 
