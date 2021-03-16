<template>
    <!-- product/連繫我們 -->
    <div class="card text-dark bg-light mb-3 contact_wrap">
         <div class="card-body">
            <h4><span class="icon-home"></span>關於音速 / ABOUT INFO</h4>
            <div class="card-img"></div>
            <p class="card-text">
               北京时间4月23日，NBCS消息，2月8日，胡安-托斯卡诺-安德森跟勇士签下一份到赛季结束的合同。他选择了95号，
               成为NBA历史上第二位穿95号的球员。
               谈到为何选这个号码时，安德森说：“我本来想选5号或者10号的，10号是我的最爱，我在G联盟打球时穿的5号，这两
               个号码被雅各布-埃文斯和卢尼穿走了，所以我想，为什么不挑95号呢？我来自奥克兰，来自95号大街。”
            </p>
            <p class="card-text">
               北京时间4月23日，NBCS消息，2月8日，胡安-托斯卡诺-安德森跟勇士签下一份到赛季结束的合同。他选择了95号，
               成为NBA历史上第二位穿95号的球员。
               谈到为何选这个号码时，安德森说：“我本来想选5号或者10号的，10号是我的最爱，我在G联盟打球时穿的5号，这两
               个号码被雅各布-埃文斯和卢尼穿走了，所以我想，为什么不挑95号呢？我来自奥克兰，来自95号大街。”
            </p>
            <p class="card-text">
               北京时间4月23日，NBCS消息，2月8日，胡安-托斯卡诺-安德森跟勇士签下一份到赛季结束的合同。他选择了95号，
               成为NBA历史上第二位穿95号的球员。
               谈到为何选这个号码时，安德森说：“我本来想选5号或者10号的，10号是我的最爱，我在G联盟打球时穿的5号，这两
               个号码被雅各布-埃文斯和卢尼穿走了，所以我想，为什么不挑95号呢？我来自奥克兰，来自95号大街。”
            </p>
            <p class="card-text">
               北京时间4月23日，NBCS消息，2月8日，胡安-托斯卡诺-安德森跟勇士签下一份到赛季结束的合同。他选择了95号，
               成为NBA历史上第二位穿95号的球员。
               谈到为何选这个号码时，安德森说：“我本来想选5号或者10号的，10号是我的最爱，我在G联盟打球时穿的5号，这两
               个号码被雅各布-埃文斯和卢尼穿走了，所以我想，为什么不挑95号呢？我来自奥克兰，来自95号大街。”
            </p>
         </div>

         <div class="test_data">
            <a href="#" class="link_a">載入資料</a>

            <!-- <ul class="main-content-list">
               <li v-for="(item,index) in newData[0]" :key="index">
                  <a href="javascript:void(0)">
                     <img :src="item.picAdress"/>
                  </a>
                  <span>
                     <p class="tittleTxt">{{ item.newsTxt }}</p>
                     <p>
                        發布時間 : <span>{{ item.time }}</span>
                     </p>
                  </span>
               </li>
            </ul> -->

             <ul class="main-content-list demo2"></ul>
         </div>
   </div>
</template>

<script>

export default {
   data(){
      return{
          show:true,
          newData:[]
      }
   },
   methods:{
      getData(){
         this.$http.get("../static/newsDatas.json").then(res => {
            this.newData = res.data[0]
            let _ul = $('.demo2');

            for(var i=0; i < this.newData.length; i++){
               _ul.append(
                  $('<li>',{
                     // class : 'test_li'
                  }).append(
                     [
                        $('<a>',{
                           href : 'javascript:void(0)',
                        }).append(
                           $('<img>',{
                              src : this.newData[i]["picAdress"] //圖片路徑
                           })
                        ),
                        $('<span>',{
                           // class : 'span_demo'
                        }).append(
                           [
                              $('<p>',{
                                 class : 'tittleTxt',
                                 text  : this.newData[i]["newsTxt"] //標題文字
                              }),
                              $('<p>',{
                                 text : '發布時間:'
                              }).append(
                                 $('<span>',{
                                    text : this.newData[i]["time"] //發布時間
                                 })
                              ),
                           ]
                        )
                     ]

                  ) //end of li.append
               ) //end of _ul.append
            }

         }).catch((res) => {
            console.log('error')
         })
      },
      appendData(){
         console.log('321',this.newData)
      }
   },
   mounted(){
      this.getData()

      // this.$nextTick(function(){
      //    this.appendData()
      // })
   }
}
</script>

<style>
   .test_data{
      margin-top:30px;
   }
   .test_data a{
      display:block;
      width:150px;
      height:40px;
      text-align: center;
      font-size:14px;
      line-height: 30px;
   }
   .test_data a:hover{
      color:#fff;
      background-color:#d84555;
      border-style:none;
   }
   ul.main-content-list{
      display:flex;
      flex-flow:column nowrap;
      margin:0;
      padding:0;
      list-style:none;
      border:1px solid #bbafaf;
   }
   ul.main-content-list li{
      overflow:hidden;
      height:120px;
      border-bottom:1px solid #999;
   }
   ul.main-content-list li a{
      display:block;
      text-decoration: none;
      float:left;
      transition: all 0.5s;
   }
   ul.main-content-list li a > img{
      display:inline-block;
      height:85px;
      margin-top:18px;
      background-color:#000;
   }
   ul.main-content-list li a > span:last-child{
      display:inline-block;
      width:100%;
      margin-left:40px;
      flex-flow:column wrap;
      border:1px solid #ff0000;
   }
   ul.main-content-list span p.tittleTxt{
      line-height:80px;
      margin:13px 0 0 180px;
      color:#666;
   }
   ul.main-content-list span p:last-child{
      margin:0;
      text-align:right;
      color:#bbafaf;
   }

   .contact_wrap{
      margin:20px;
   }
   .contact_wrap h4{
      font-size:18px;
      color:#d84555;
      padding:0 0 20px 0;
      /* line-height:70px; */
   }
   .contact_wrap .mail_info{
      font-size:18px;
      padding:10px;
      background-color:#e2dfdf;
   }
</style>