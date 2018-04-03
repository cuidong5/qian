<template>
  <div id="app">
    <div id="nav">
    	<div class="top_left">
    		<div id="images">
    			<img src="./assets/1.jpg.png">
    		</div>
    	</div>
      <router-link to="/" style="margin-left: 200px">首页</router-link>
      <router-link to="/about/1">全新楼盘</router-link>
      <router-link to="/about/2">二手楼盘</router-link>
      <router-link to="/about/3">全新商铺</router-link>
      <router-link to="/a">楼市动态</router-link>
      <router-link to="/b">联系我们</router-link>
      <div class="top_right">
      	<div class="top_right_one">
      		<img src="./assets/3_03.png" />
      	</div>
      	<div class="top_right_center">008-6666-6666</div>
      	<button><span>咨询电话</span></button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.top_left{
		width: 150px;
		height: 50px;
		float: left;
	}
	#images img{
		width: 100%;
		height: 100%;
		z-index: 10;
		margin-left: 50px;
	}
	a{
		display: block;
		float: left;
		margin-left: 40px;
		margin-top: 20px;
		text-decoration: none;
		color: black;
	}
	.top_right{
		width: 277px;
		height: 50px;
		float: left;
		margin-left: 150px;
	}
	.top_right_one{
		width: 17px;
		height: 15px;
		margin-top: 22px;
		float: left;
	}
	.top_right_center{
		font-size: 12px;
		text-align: center;
		float: left;
		margin-top: 22px;
		margin-left: 10px;
	}
	button{
		width: 80px;
		height: 30px;
		margin-top: 15px;
		margin-left: 10px;
		border-radius: 5%;
		background-color: #3c79e6;
	}
	span{
		color: white;
	}
</style>
