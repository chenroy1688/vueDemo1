export default{
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
}