<template>
	<div class='content'>
		<bg-canvas></bg-canvas>
		<div class='login_wrap'>
		    <img src="../../assets/assets/back_logo.png" class="logo" alt="" />
		    
		    <form>
		    	<div class='oneinput_box'>
		    		<span class='icon'>
		    			<i class='fa fa-user'></i>
		    		</span>
		    		<input ref='input_user' type="text" placeholder="请输入用户名" />
		    	</div>
		    	
		    	<div class='oneinput_box'>
		    		<span class='icon'>
		    			<i class='fa fa-unlock'></i>
		    		</span>
		    		<input ref='input_pwd' type="text" placeholder="请输入密码" />
		    	</div>
		    	
		    	<div class='oneinput_box'>
		    		<span class='icon'>
		    			<i class='fa fa-heart'></i>
		    		</span>
		    		<input ref='input_veri' type="text" style="width: 300px;" placeholder="请输入验证码" />
		    		<!--<div style="width: 100px;height: 37px;background: green;">放置验证码</div>-->
		    		<veri ref='veriR'></veri>
		    	</div>
		    </form>
		   
		    <button class='btn btn-info'>忘记密码</button>
		    <button class='btn btn-success' @click="login">用户登录</button>
		</div>
		
	</div>
</template>

<script>
	import bgCanvas from './bgCanvas.vue'
	import veri from './verification.vue' //引入验证码组件 （36-49使用的交互）
	export default{
		components:{
			bgCanvas,veri
		},
		methods:{
			login(){
				//1.获取前端输入的验证码
				//2.发送给服务器
				//1. ref=‘xxx’ + this.$refs.xxx 获取任意标签
				console.log(this.$refs.input_veri.value) //获取了验证码输入框的值
				var veri=this.$refs.input_veri.value.trim();//.trim去掉字符串里面的前后空格
				var use110=this.$refs.input_user.value.trim(); //获得的是账号
				var pwd110=this.$refs.input_pwd.value.trim();//获取的密码的输入框的值
				//2.检验验证码
				var that=this;  //在交互的，then里面this会丢失指向
				this.$axios({
					url:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',
					method:'get',
					params:{veri:veri}
				}).then(function(response){
					console.log(response)
					if(response.data.success){
						alert('验证成功')
						//登录功能
						that.$axios({
							url:'/VueHandler/AdminLoginAndRegHandler?action=login',//?action=login
							method:'post',
							data:{
								userName:use110,
								password:pwd110
							}
						}).then(function(response){
							console.log(response);//查看响应回来的数据结构
							if(response.data.success){
								alert('登录成功');
							}else{
								alert('账号或密码错误');
								use110='';
								passward=''
							}
						}).catch(function(err){
							console.log(err);
						})
					}else{
						alert('验证失败');
						//1.清空输入框里面的数据
						//2.重新获取验证码
						that.$refs.input_veri.value='';
						//验证码组件 changeVeri()  获取验证码
						that.$refs.veriR.changeVeri();//调用组件里面的函数
					}
				}).catch(function(err){
					alert('请求失败')
				})
				
			
				
			}
		}
	}
</script>

<style scoped>
	/** scoped 声明css样式只在当前被使用 ***/
*{
	margin: 0;
	padding: 0;
}
  .content {
    background: #0d1953;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .content img {
    border: none;
  }

  .content bg-cavas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .login_wrap {
    width: 560px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -280px;
    z-index: 3;
    color: #fff;
  }

  .login_wrap .logo {
    margin-left: 180px;
    margin-bottom: 29px;
  }

  .login_wrap form {
    margin-left: 50px;
  }

  .login_wrap input {
    background: #0d1953;
    width: 413px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #3c498a;
    margin-left: 0px;
    padding-left: 5px;
    color: #fff;
  }

  input:focus {
    outline: none;
  }

  .oneinput_box {
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    width: 457px;
    padding-left: 10px;
  }

  .oneinput_box * {
    float: left;
  }

  .oneinput_box span {
    background: #0d1953;
    border: 1px solid #3c498a;
    padding: 11px 9px;
    border-right: none 0;
    height: 12px;
    width: 10px;
    padding-left: 10px;
    overflow: hidden;

  }

  .oneinput_box .icon {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
  }

  .oneinput_box .fa-lock {
    top: 0;
    left: 10px;
    font-size: 10px;
    width: 9px;
    height: 12px;
    z-index: 1000000000;
  }

  .erwei_code {
    width: 91px;
    height: 34px;
    float: right;
    cursor: pointer;
  }

  .btn {
    width: 113px;
    height: 34px;
    line-height: 34px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: left;
  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: right;
  }

  .btn-success:hover {
    background: #449d44;
  }	
</style>
