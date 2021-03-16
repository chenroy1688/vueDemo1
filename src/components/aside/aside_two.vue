<template>
   <div class="pc_wrap">
        <el-row>
            <!-- 主标题 -->
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                <span>篮球直播</span>
                <span>aside_two</span>
            </el-col>
        </el-row>
        <el-row>
            <!-- 主标题 -->
            <el-col :span="24" class="">
               <ul>
                   <li v-for="(item, index) in proData" :key="index"> 
                       <label for="">
                           <input type="checkbox" :value="index" v-model="selectArr"/>
                       </label>{{ item.name }}
                   </li>
               </ul>
            </el-col>
        </el-row>

        <button type="button" @click="del">删除</button>
        <span v-if=" selectArr.length ">{{ selectArr }}</span>
        <label><button type="button" @click="selAll">全选</button></label>
        <label><button type="button" @click="testClick($event)">测试事件</button></label>
        
        <!-- 待办事项列表 -->
        <div class="todolist">
            <h1>待办事项 / todoList demo</h1>
            <el-row>
                <el-col class="el_div" :span="24">
                    <!-- 新增事项 -->
                    <div class="">
                        <input type="text" v-model="TodoText" v-on:keyup.enter="add" placeholder="请新增待办事项"/>
                        <button type="button" @click="add">确定新增</button>
                    </div>
                    <!-- 数据列表 判断if已完成数量不为0 且 filter状态不为 show_all -->
                    <ul class="todo-list" v-if="!(incompleteCount === 0 && filter === 'show_all')">
                        <subTodos
                            v-for="(todoss,index) in list"
                            :todoss = todoss
                            :key="index"
                            :keyss="index"
                            :filter="filter"
                            @remove="delBtn(index)"
                        ></subTodos>
                    </ul>
                </el-col>
                <!-- 全部完成 判断if已完成数量为0 且 filter状态为 show_all -->
                <el-col class="el_div" :span="24" v-if="incompleteCount === 0 && filter === 'show_all'">
                    恭喜您已经完成所有待办事项罗！！
                </el-col>
            </el-row>
            <!-- 按钮选择 -->
            <button type="button" @click="setFilter('show_all')" :class="{active : filter === 'show_all'}">全部({{ allCount }})</button>
            <button type="button" @click="setFilter('show_completed')" :class="{active : filter === 'show_completed'}">已完成({{ completedCount }})</button>
            <button type="button" @click="setFilter('show_incomplete')" :class="{active : filter === 'show_incomplete'}">未完成({{ incompleteCount }})</button>
        </div>
   </div>
</template>

<script>
import subTodos from '@/components/sub_todo' //todosList

var proData = []

export default {
    components:{
        subTodos
    },
   data(){
       return{
           proData : proData,
           selectArr:[],
           todoList: [
            {
                "uuid": 1,
                "text": "第一笔数据",
                "isCompleted": false,
                "isEdit": false
            },
            {
                "uuid": 2,
                "text": "第二笔数据",
                "isCompleted": true,
                "isEdit": false
            },
            {
                "uuid": 3,
                "text": "第三笔数据",
                "isCompleted": false,
                "isEdit": false
            },
            {
                "uuid": 4,
                "text": "第四笔数据",
                "isCompleted": true,
                "isEdit": false
            },
            {
                "uuid": 5,
                "text": "第5笔数据",
                "isCompleted": true,
                "isEdit": false
            },
            {
                "uuid": 6,
                "text": "第6笔数据",
                "isCompleted": true,
                "isEdit": false
            }
           ],
           TodoText: '',
           filter: 'show_all'
       }
   },
   created(){ //DOM还未载入就执行
       //取得待办事项 -- (后端传入)json数据
       this.$http.get("https://jsonplaceholder.typicode.com/users")
       .then(response => {
           console.log(response);
           this.proData = response.data
       })
       .catch(response => {
           console.log('error')
       })
   },
   computed:{
       //每次click事件 更新filter的value 重新载入对应的数据更新
       list(){
           if(this.filter === 'show_all'){
               return this.todoList //展示全部事项
           }else if(this.filter === 'show_completed'){
               return this._getTodos(true) //展示已完成事项
           }else{
               return this._getTodos(false)
           }
       },
       allCount(){ //返回所有事项数量
           return this.todoList.length
       },
       completedCount(){ //返回已完成事项数量
           return this.todoList.filter(function(value){
               return value.isCompleted
           }).length
       },
       incompleteCount(){ //返回未完成事项的数量
            return this.todoList.filter(function(value){
                //value传入整笔todoList数据
                return !value.isCompleted
            }).length
       }
   },
   methods:{
       del(){
            // let arr = []
            // var len = this.proData.length
            // for (var i = 0; i < len; i  ) {
            //     if (this.selectArr.indexOf(i)>=0) {
            //         console.log(this.selectArr.indexOf(i))
            //     }else{
            //         arr.push(proData[i])
            //     }
            // }
            // this.proData = arr;
            // this.selectArr = []
       },
       setFilter(filter){ //改變filter的vlue 對應的item
           this.filter = filter
       },
       _getTodos(isCompleted){
           let listItem = {}

           for(var i in this.todoList){
               if(this.todoList[i].isCompleted === isCompleted){
                   listItem[i] = this.todoList[i] 
               }
           }
        //    console.log(listItem)
           return listItem
       },
       selAll(event){ //全选
            var _this = this;
            console.log(event.currentTarget)
            
            if (!event.currentTarget.checked) {
                this.selectArr = [];
            } else { //實現全選
                _this.selectArr = [];
                _this.proData.forEach(function(item, i) {
                _this.selectArr.push(i);
            });
            }
       },
       testClick(e){
           console.log(e.target)
       },
       add(){ //新增一笔待办事项
            if(this.TodoText === '') {
                alert('请输入待办理事项内容喔')
                return
            } 

            let id = this._uuid()
            // console.log(this.todoList)

            this.TodoText = ''
       },
       delBtn(index){ //删除数据
           console.log('father lebal',index)
           //删除该笔数据
           this.todoList.splice(index,1)
       },
       _uuid(){
           this.todoList.push({
               uuid:this.todoList.uuid + 1,
               text: this.TodoText,
               isCompleted:false,
               isEdit:false
           })
       }
   }
}
</script>

<style scoped>
h1{
    padding:0 0 20px 0;
}
.active{
    background-color:#ff0000;
}
button{ margin:0 10px; }
input[type="checkbox"]{
    width:20px;
    height:20px;
}
ul li{
    padding:8px 0;
    border-bottom:1px solid #999;
}

.todolist{
    margin:30px 0;
    padding:20px;
}
</style>