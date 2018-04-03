<template>
  <div class="home">
  	<div class="la"></div>
    <div class="logo">
    	<img src="../assets/2.jpg.jpg" />
    </div>
    <div class="h_content">
    	<div class="h_content_left">
    		<div class="left_one">
    			<div class="left_one_top">
    				<div class="left_one_top_left">
    					<img src="../assets/4_03.png" />
    				</div>
    				<div class="left_one_top_right">
    					<img src="../assets/5_05.png" />
    				</div>
    			</div>
    			<div class="left_one_bottom">
    				<div class="left_one_bottom_left">
    					<img src="../assets/6_09.png" />
    				</div>
    				<div class="left_one_bottom_right">
    					<img src="../assets/7_10.png" />
    				</div>
    			</div>
    		</div>
    		<div class="left_two">
    			<div class="left_two_top">
    				全新楼盘<br /><span>-New Apartment-</span>
    			</div>
    			<div class="left_two_center">
    				<div class="ltc" v-for="i in state">
    					<div class="ltc_top"><img :src="i.img"/></div>
    					<div class="ltc_bottom">{{i.name}}<br/>地区：{{i.di}}<br/>户型：{{i.hu}}<br/>价格：{{i.price}}</div>
    				</div>
    			</div>
    			<div class="left_two_bottom">
    				<div class="Liulan">
    					浏览更多新楼盘
    				</div>
    			</div>
    		</div>
    		
    		
    	</div>
    	
    	
    	<!--右边-->
    	<div class="h_content_right">
    		<div class="Loushi">
    			<div class="Yuedu">
    				<div class="Yuedu_left"></div>
    				<div class="Yuedu_center">
    					楼市动向 - NEWS
    				</div>
    				<div class="Yuedu_right">
    					<span>阅读更多</span>
    				</div>
    			</div>
    			<div class="Yd_one">
    				佣金31億元！中山第四季度成...<br /><span>In this chapter in our series...</span>
    			</div>
    			<div class="Yd_two">
    				商业地产差异化服务军营将成为商业....<br /><span>In this chapter in our series...</span>
    			</div>
    			<div class="Yd_three">
    				远洋地产3.26億竞得中山南头5...<br /><span>In this chapter in our series...</span>
    			</div>
    			<div class="Yd_for">
    				中山VS珠海 未来大湾区你更看好...<br /><span>In this chapter in our series...</span>
    			</div>
    			<div class="Yd_fifr">
    				降息、现货松绑加上申中通道利好中...<br /><span>In this chapter in our series...</span>
    			</div>
    			<div class="Yd_six">
    				上半年固定资产投资 中山居珠三角...<br /><span>In this chapter in our series...</span>
    			</div>
    		</div>
    		<div class="Lianxi">
    			<div class="Women">
    				<div class="Women_left"></div>
    				<div class="Women_center">
    					联系我们 - CONTACT
    				</div>
    			</div>
    			<div class="tom"></div>
    		</div>
    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
      return {
        state:[]
      }
    },
  
    watch:{
     '$route'(){
       this.$http.post('http://localhost:8005/limit/limit',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
     }
   },
    created(){
      this.$http.post('http://localhost:8005/limit/limit',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
    }
}
</script>
<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
.la{
	height: 80px;
}
.logo{
	width: 1260px;
	height: 600px;
	margin: 0 auto;
	clear: both;
}
img{
	width: 100%;
	height: 100%;
}
.h_content{
	width: 1110px;
	height: 2000px;
	margin: 110px auto;
}
.h_content_left{
	width: 820px;
	height: 2000px;
	float: left;
}
.left_one{
	width: 820px;
	height: 285px;
}
.left_one_top{
	width: 820px;
	height: 138px;
}
.left_one_top_left{
	width: 405px;
	height: 138px;
	float: left;
}.left_one_top_right{
	width: 405px;
	height: 138px;
	float: right;
}
.left_one_bottom{
	width: 820px;
	height: 138px;
	margin-top: 10px;
}
.left_one_bottom_left{
	width: 405px;
	height: 138px;
	float: left;
}
.left_one_bottom_right{
	width: 405px;
	height: 138px;
	float: right;
}
.left_two{
	width: 817px;
	height: 500px;
	border: 1px solid #e1e1e1;
	margin-top: 40px;
	background-color: #f6f6f6;
}
.left_two_top{
	width: 817px;
	height: 67px;
	font-size: 22px;
	text-align: center;
	padding-top: 29px;
	font-weight: 800;
}
.left_two_center{
	width: 817px;
	height: 316px;
}
.ltc{
	width: 270px;
	height: 316px;
	float: left;
	margin-left: 1px;
	background-color: white;
}
.ltc_top{
	
}
.ltc_bottom{
	
}
.left_two_bottom{
	width: 817px;
	height: 89px;
	overflow: hidden;
}
.Liulan{
	width: 134px;
	height: 36px;
	border: 1px solid #3c79e6;
	margin: 26px auto;
	text-align: center;
	line-height: 36px;
}




/*右边*/
.h_content_right{
	width: 270px;
	height: 2000px;
	float: right;
}
.Loushi{
	width: 270px;
	height: 487px;
	background-color: #f6f6f6;
}
.Yuedu{
	width: 240px;
	height: 24px;
	margin: 0 auto;
	padding-top: 25px;
}
.Yuedu_left{
	width: 18px;
	height: 19px;
	background-color: #000;
	float: left;
	margin-left: 15px;
	margin-top: 4px;
}
.Yuedu_center{
	width: 105px;
	height: 24px;
	float: left;
	margin-left: 9px;
	font-size: 12px;
	line-height: 24px;
}
.Yuedu_right{
	width: 64px;
	height: 22px;
	float: right;
	border: 1px solid #000;
	font-size: 11px;
	text-align: center;
	line-height: 22px;
}
.Yd_one{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 22px;
	font-size: 12px;
	padding-top: 15px;
}
span2{
	font-size: 10px;
	color: #98afd2;
}
.Yd_two{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 8px;
	font-size: 12px;
	padding-top: 15px;
}
.Yd_three{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 8px;
	font-size: 12px;
	padding-top: 15px;
}
.Yd_for{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 8px;
	font-size: 12px;
	padding-top: 15px;
}
.Yd_fifr{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 8px;
	font-size: 12px;
	padding-top: 15px;
}
.Yd_six{
	width: 222px;
	height: 41px;
	margin-left: 32px;
	margin-top: 8px;
	font-size: 12px;
	padding-top: 15px;
}
.Lianxi{
	width: 270px;
	height: 266px;
	background-color: #f6f6f6;
	margin-top: 10px;
}
.Women{
	width: 240px;
	height: 24px;
	margin: 0 auto;
	padding-top: 25px;
}
.Women_left{
	width: 18px;
	height: 19px;
	background-color: #000;
	float: left;
	margin-left: 15px;
	margin-top: 4px;
}
.Women_center{
	width: 120px;
	height: 24px;
	float: left;
	margin-left: 9px;
	font-size: 12px;
	line-height: 24px;
}
.tom{
	width: 270px;
	height: 40px;
	background-color: burlywood;
	margin-top: 22px;
}
</style>
