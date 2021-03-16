<template>
  <div class="pc_wrap layout_prac">
      <!-- 主标题 -->
      <el-row>
          <el-col :span="24" class="contnet_main_topic topicOne NumberPosition2">
            <span>赛事直播</span>
            <span>Element UI</span>
         </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" id="demo" class="content">
            <!-- todoItem 区块 -->
            <h1>✪ TodoList</h1>
            <div class="todolist">
                <input type="text" v-model="infos">
                <el-button type="success" icon="el-icon-medal-1" plain @click.enter="todoClick">提交</el-button>
                <el-button type="success" icon="el-icon-medal-1"></el-button>
                <el-button type="success">右边<i class="el-icon-present"></i></el-button>
                <ul>
                    <todoItem v-for="item in itemList" :key="item">
                        <template v-slot:title="props">
                            <p>{{ props.value }}</p>
                        </template>
                        <!-- 作用域插槽 props接收子组件传入的值 -->
                        <template v-slot:itemss="props">
                            <span class="listStyle" :style="{ color: props.checked ? 'red' : 'blue'}">
                                {{ item }}
                            </span>
                        </template>
                    </todoItem>
                </ul>
              </div>

              <!-- 删除按钮 -->
              <conFirmBtn :isShow.sync="showModal" :options="optionsObj" :callback="modalCallback"></conFirmBtn>
              <!-- 删除确认组件 -->
              <el-row>
                  <el-col :span="24">
                    <el-button type="danger" icon="el-icon-loading" round @click="confirm">删除数据</el-button>
                  </el-col>
              </el-row>

              <div class="elBox">
                  <el-button @click="qshow = !qshow">点击</el-button>
                  <div class="eldiv">
                      <transition name="el-zoom-in-top">
                          <div v-show="qshow" class="transition-box">el-fade-in-linear</div>
                      </transition>
                      <transition name="el-fade-in">
                          <div v-show="qshow" class="transition-box">el-fade-in</div>
                      </transition>
                  </div>
                  <!-- el摺叠 -->
                  <el-button @click="show3 = !show3">点击</el-button>
                  <div class="eldiv">
                      <el-collapse-transition>
                          <div v-show="show3">
                              <div class="transition-box">el-collapse-transition</div>
                              <div class="transition-box">el-collapse-transition</div>
                          </div>
                      </el-collapse-transition>
                  </div>
              </div>
        </el-col>
      </el-row>
      <!-- end of content -->

      <h1>✪ layout布局</h1>
      <el-row :gutter="20"> <!-- 增加间隔20px -->
          <el-col :span="6"><div class="el_div">left data</div></el-col>
          <el-col :span="6"><div class="el_div">right data</div></el-col>
          <el-col :span="6"><div class="el_div">right data</div></el-col>
          <el-col :span="6"><div class="el_div">right data</div></el-col>
      </el-row>
      <!-- offset偏移 -->
      <el-row :gutter="20">
        <el-col :span="6"><div class="el_div">offset01</div></el-col>
        <el-col :span="6" :offset="6"><div class="el_div">offset02</div></el-col>
      </el-row>

      <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div class="el_div">offset01</div></el-col>
          <el-col :span="6" :offset="6"><div class="el_div">offset02</div></el-col>
      </el-row>

      <el-row>
          <el-col :span="6" :offset="6"><div class="el_div">offset01</div></el-col>
          <el-col :span="6"><div class="el_div">offset02</div></el-col>
      </el-row>
      <!-- flex -->
      <el-row type="flex">
        <el-col :span="6" :push="3"><div class="el_div">flex</div></el-col>
        <el-col :span="6"><div class="el_div">flex</div></el-col>
        <el-col :span="6"><div class="el_div">flex</div></el-col>
      </el-row>
      <!-- justify=center -->
      <el-row type="flex" justify="center">
        <el-col :span="6"><div class="el_div">justify=center</div></el-col>
        <el-col :span="6"><div class="el_div">justify=center</div></el-col>
        <el-col :span="6"><div class="el_div">justify=center</div></el-col>
      </el-row>
      <!-- justify=end -->
      <el-row type="flex" justify="end">
        <el-col :span="6" ><div class="el_div">justify=end</div></el-col>
        <el-col :span="6"><div class="el_div">justify=end</div></el-col>
        <el-col :span="6"><div class="el_div">justify=end</div></el-col>
      </el-row>
      <!-- justify=space-between -->
      <el-row type="flex" justify="space-between">
        <el-col :span="6"><div class="el_div">justify=space-between</div></el-col>
        <el-col :span="6"><div class="el_div">justify=space-between</div></el-col>
        <el-col :span="6" :pull="3"><div class="el_div">justify=space-between</div></el-col>
      </el-row>
      <!-- justify=space-around -->
      <el-row type="flex" justify="space-around" class="hidden-sm-and-up">
        <el-col :span="6"><div class="el_div">justify=space-around</div></el-col>
        <el-col :span="6"><div class="el_div">justify=space-around</div></el-col>
        <el-col :span="6"><div class="el_div">justify=space-around</div></el-col>
      </el-row>
      <!-- 响应布局 -->
      <el-row class="hidden-xs-only" align="bottom">
        <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="el_div">响应布局</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="el_div">响应布局</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="el_div">响应布局</div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="el_div">响应布局</div></el-col>
      </el-row>

      <!-- container布局 -->
      <h1>✪ container布局</h1>
      <!-- <el-container>
          <el-header>header</el-header>
          <el-container>
              <el-aside width="180px">aside</el-aside>
              <el-main>main</el-main>
          </el-container>
          <el-footer>footer</el-footer>
      </el-container> -->

      <!-- table表格 -->
      <el-container class="">
          <el-header style="text-align:right; font-size:12px;">
              <!-- 设置功能 -->
              <el-dropdown>
                  <i class="el-icon-edit" style="margin-right:15px;"></i>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>查看</el-dropdown-item>
                      <el-dropdown-item>新增</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
              <span>功能设置</span>
          </el-header>

          <!-- el-table -->
          <el-main class="bos">
            <el-table :data="tableData"> <!-- 渲染table -->
                <el-table-column prop="id" label="日期" width="60"></el-table-column>
                <!-- el-table 图片设置 -->
                <el-table-column label="图片" width="60">
                    <template scope="scope">
                        <img :src="scope.row.image" width:="60" height="60"/>
                    </template>
                </el-table-column>

                <el-table-column label="姓名" width="180">
                      <!-- el-table 滑鼠hover show资料 -->
                     <template scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag>{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                
                <el-table-column prop="address" label="地址" width="380"></el-table-column>
                <el-table-column prop="name" label="操作" width="150"></el-table-column>
            </el-table>
          </el-main>

      </el-container>


      <!-- 按钮组 -->
      <el-button-group>
          <el-button type="info" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="info" icon="el-icon-arrow-right">上一页</el-button>
      </el-button-group>
      <el-button-group>
          <el-button type="warning" icon="el-icon-edit"></el-button>
          <el-button type="warning" icon="el-icon-share"></el-button>
          <el-button type="warning" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-button type="primary" size="small" :loading="true">loading</el-button>

      <el-link href="yahoo.com.tw" type="primary" icon="el-icon-edit">1234</el-link>

      <el-row>
          <el-col :span="24" class="el_div">
            <!-- 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，
              label可以是String、Number或Boolean -->
              <el-radio v-model="radio" label="1" border>被选项111</el-radio>
              <el-radio v-model="radio" label="2" border>被选项222</el-radio>
              <!-- 群组按钮 -->
              <el-radio-group v-model="radios">
                  <el-radio label="3" border>被选项1</el-radio>
                  <el-radio label="6" border>被选项2</el-radio>
                  <el-radio label="9" border>被选项3</el-radio>
              </el-radio-group>

              <el-radio-group v-model="radio1" size="small">
                  <el-radio-button label="上海"></el-radio-button>
                  <el-radio-button label="北京"></el-radio-button>
                  <el-radio-button label="广州"></el-radio-button>
              </el-radio-group>

              <el-checkbox v-model="checked">checked</el-checkbox>
              <el-checkbox-group v-model="checkList">
                  <el-checkbox label="1">checked11</el-checkbox>
                  <el-checkbox label="2">checked22</el-checkbox>
                  <!-- label的val 没在数组理 没有选中 -->
                  <el-checkbox label="选中并禁用" disabled="">选中并禁用</el-checkbox>
              </el-checkbox-group>
          </el-col>
      </el-row>

      <!-- 全选 checkbox组件 -->
      <div class="el_div">
        <!-- v-on:change事件 改变checkbox执行 -->
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin:10px 0"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" :min="1" :max="3">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>

      <!-- input 密码可视-->
      <div class="el_div">
          <el-input v-model="input" placeholder="输入内容" show-password clearable></el-input>
      
          <div class="demo-input-suffix">
              属性方式
              <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
              <el-input placeholder="请选择内容" prefix-icon="el-icon-search" v-model="input1"></el-input>
          </div>
          <div class="demo-input-suffix">
              slot方式
              <el-input placeholder="请选择日期" v-model="input1">
                  <i slot="suffix" class="el-input__icon el-icon-date"></i>
              </el-input>
              <el-input placeholder="请选择内容" v-model="input1">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
          </div>
          <div>
              <el-input placeholder="请输入内容" v-model="input">
                  <template slot="prepend">http://</template>
              </el-input>
              <el-input placeholder="请输入内容" v-model="input">
                  <template slot="append">.com</template>
              </el-input>
          </div>
          <div>
              <el-input placeholder="请输入内容" v-model="input" class="input-width-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
          </div>

          <!-- input输入带建议内容 -- 组件 -->
          <el-row class="demo-autocomplete" style="margin:15px 0">
              <el-col :span="12">
                  <div class="sub-title">激活即列出输入建议</div>
                  <el-autocomplete
                      class="inline-input"
                      v-model="input"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入内容"
                      @select="handleSelect"
                  ></el-autocomplete>
              </el-col>

              <el-col :span="12">
                  <div class="sub-title">输入后匹配输入建议</div>
                  <el-autocomplete
                      class="inline-input"
                      v-model="input"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入内容"
                      :trigger-on-focus="false"
                      @select="handleSelect"
                  ></el-autocomplete>
              </el-col>
          </el-row>

          <el-row>
              <el-col :span="12">
                  <el-input-number 
                    v-model="num" 
                    @change="handleChange" 
                    :min="1" 
                    :max="100" 
                    :step="5" 
                    controls-position="right"
                    label="描述文字">
                  </el-input-number>
              </el-col>
          </el-row>
          <div>
              <el-select v-model="input" clearable placeholder="请选择">
                  <el-option
                    v-for="selItem in selects"
                    :key="selItem.value"
                    :label="selItem.label"
                    :value="selItem.value"
                    :disabled="selItem.disabled">
                  </el-option>
              </el-select>
          </div>

      </div>

  <div class="el_div">
      <el-switch
        style="display:block"
        v-model="valuess"
        active-color="#00DD00"
        inactive-color="#ff0000"
        active-text="按月付费"
        inactive-text="按年付费"
      ></el-switch>

      <div class="block">
          <span class="demonstration">默认</span>
          <el-slider v-model="tip1"></el-slider>
      </div>
      <div class="block">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="tip2" :show-tooltip="true"></el-slider>
      </div>
      <div class="block">
          <span class="demonstration">不显示断点</span>
          <el-slider
            v-model="valuess"
            :step="10"
          ></el-slider>
      </div>
      <!-- 显示输入框 -->
      <div class="block">
          <el-slider 
            v-model="valuess"
            show-input>
          </el-slider>
      </div>
      <div class="block">
          <el-slider
            v-model="valuess"
            vertical
            height="200px">
          </el-slider>
      </div>
  </div>
  <!-- timepicker日期选择器 -->
  <div class="el_div">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="picker"
      type="date" 
      placeholder="选择日期">
    </el-date-picker>

    <span class="demonstration">周</span>
    <el-date-picker
      v-model="picker"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周">
    </el-date-picker>

    <span class="demonstration">月</span>
    <el-date-picker
      v-model="picker"
      type="month"
      placeholder="选择月">
    </el-date-picker>
  </div>

  <div class="el_div">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="rate" show-text></el-rate>
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="rate" :colors="rateColor"></el-rate>
  </div>
  <!-- transfer穿梭框 -->
  <div class="el_div">
    <span>transfer穿梭框</span>
      <el-transfer v-model="dataVal" :data="data"></el-transfer>
  </div>
  <!-- 表单验证 -->
  <div class="el_div">
    <span>表单数据验证</span>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" size="mini">
        <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shangha1"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            {{ ruleForm.region }}
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食区" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题" name="type"></el-checkbox>
                <el-checkbox label="单品曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>

  </div> <!-- end of pc_wrap -->
</template> 

<script>
import conFirmBtn from './confirm.vue'
import todoItem from './todoItem.vue' //todoList
//局部引入mixin 
import { toggle } from '../mixin/tooltip.js'
//引入封装api接口
import { gamePlayApi } from '@/api/api'

const cityOptions = ['上海','北京','广州','深圳'];

export default {
  //引入组件
  components:{
      conFirmBtn, //确认删除按钮
      todoItem
  },
  //引入mixin
  mixins:[ toggle ],
  data() {
      // transfer穿梭框 
      const generateData = _ =>{
        const data = []
        for(let i = 1; i <= 15; i++){
          data.push({
            key:i,
            label:`备选项${ i }`,
            disabled: i % 4 === 0
          })
        }
        return data
      }

      return {
        tableData: [
          {
            id:1,
            image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, 
          {
            id:2,
            image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
            name: '礼小明',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:3,
            image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
            name: '宸小钧',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:4,
            image: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
            name: '王小美',
            address: '上海市普陀区金沙江路 1517 弄'
          }
        ],
        showModal: false, 
        qshow:true,
        show3:true,
        radio: '1',
        radios: '3',
        radio1: '上海',
        checked: true,
        checkList:['1','2','选中并禁用'],

        //全选--checkbox组件
        checkAll: false,
        checkedCities: ['上海'],
        cities: cityOptions,
        isIndeterminate: true,

        input:'',
        input1:'',
        select:'',
        restaurants: [],
        num:1,
        selects: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶',
            disabled:true
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        valuess:true,
        tip1:0,
        tip2:50,
        picker:'',
        time_val:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],
        //日期选择器
        rate:null,
        rateColor:['#99a9bf','#f7ba2a','#ff0000'],
        //Transfer 穿梭框
        data:generateData(),
        dataVal:[1,4], //绑定初始值
        //form 表单
        ruleForm:{
          name:'',
          region:'',
          delivery: false,
          desc:'',
          type:[]
        },
        rules:{ //验证规则
          name:[
            {required:true,message:'请输入活动名称',trigger:'blur'},
            {min:3,max:5,message:'长度在3到5个字符',trigger:'blur'}
          ],
          region:[
            {required:true,message:'请选择活动区域',trigger:'change'}
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          desc:[
            {required:true,message:'请填写活动形式',trigger:'blur'}
          ]
        },
        //删除视窗数据
        optionsObj: { 
            title:{
                text : '这是标题',
                isStyle : 'background-color:#d74554; color:#fff',
            },
            content : {
                text : '<span class="cofirmTxt">确认要删除这个数据嘛？</span>'
            },
            btns :['取消','确认']
        },
        itemList:[],
        infos:''
      };
  },
  methods: {
    submitForm(formName){ //验证表单
      console.log('999',formName)
      this.$refs[formName].validate((valid) => {
          if(valid){ //验证成功
            alert('submit')
          }else{
            console.log('error submit')
            return false
          }
      })
    },
    resetForm(formName){ //重置表单
      this.$refs[formName].resetFields()
    },
    handleChange(val){
      if(val == 5) alert(val)
    },
    querySearch(queryString, cb){
      console.log(queryString,cb)

      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString){
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
        { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
        { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
        { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
        { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
        { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
        { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
      ];
    },
    handleSelect(item){
      console.log('item',item)
    },
    handleCheckAllChange(val) {
      console.log('val',val) // true or false
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log('value',value)
      let checkedCount = value.length; //数组的length

      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length; //> 0 为false 
    },
    confirm(){
      //打开确认视窗
      this.showModal = true
    },
    modalCallback(index){
      //秀出确认的值
      if(index === 1 ){
        alert('按下"确认"~~已经移除数据')
      }else{
        alert('按下"取消"~~取消移除数据')
      }

      this.showModal = false //关闭弹窗
    },
    //todoItem
    todoClick(){
        this.itemList.push(this.infos)
        this.infos = ''
    }
  },
  mounted(){ //DOM载入完成后就执行
    this.restaurants = this.loadAll()
  },
  created() { //DOM还未载入时就执行
      gamePlayApi()
        .then(res => {
          console.log(res)
        })
  }
};
</script>

<style scoped>
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input{
  width:25%;
  margin-left:10px;
}
.layout_prac h1{
  color:#ff0000;
  padding-bottom:15px;
}
.todolist{
  padding:15px;
  margin:20px 0;
  background-color:#999;
}
.todolist ul{
    margin:15px 0;
}
.todolist ul li{
    padding:10px;
    font-size:16px;
    color:red;
    border:1px solid #999;
}
.el_boder{
  border:1px solid #999;
}
.el_div{
  padding:15px;
  margin-bottom:20px;
  border:1px solid #999;
}
.eldiv{
  display:flex; 
  margin-top:20px;
}
.elBox{
  border:1px solid #999;
  padding:15px;
  margin:0 0 40px 0;
}
.transition-box {
    width: 150px;
    height: 60px;
    line-height:60px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    box-sizing: border-box;
    margin-right: 20px;
}

header{
  height:60px !important;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>