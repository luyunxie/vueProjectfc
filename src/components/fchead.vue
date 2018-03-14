<template>
	<div class='bg'>
		<div class="header_wrap">
			<div class="logo_wrap">
				<a href="#">
					<img src="../assets/assets/back_logo.png" alt="" />
				</a>
			</div>
				<ul class="header_nav">
					<li>
						<a href="#">
						<i class='fa fa-globe'>卓新思创</i>
					    </a>
					</li>
					<li>
						<a href="#">
						<i class='fa fa-comment-o'>在线客服</i>
					    </a>
					</li>
					<li>
						<a href="#">
						<i class='fa fa-pencil-square-o'>常见问题</i>
					    </a>
					</li>
					<li @click="safeShow">
						<a href="#">
						<i class='fa fa-unlock'>安全中心</i>
					    </a>
					</li>
					
					<li @click="quit">
						<a href="#">
						<i class='fa fa-step-backward'>退出</i>
					    </a>
					</li>
					<li>
						<a href="#">
							<span class="name">请登录</span>
						</a>
						<img src="../assets/assets/touxiang.jpg" style="float: right;" alt="" />
					</li>
				</ul>
			
		</div>
		<!--切换导航栏-->
		<div>
			<div class="nav">
				<ul>
					<li>
						<div class='navName'>
							<i class='icon icon-user'></i>
							<span>用户管理</span>
						</div>
						<div class='navItem'>
							<div class='Item'>
								<a href="#">
									<span>系统人员</span>
								</a>
							</div>
							<div class="Item">
								<a href="#">
									<span>学员管理</span>
								</a>
							</div>
						</div>
					</li>
					<li>
						<div class='navName'>
							<i class='icon icon-user'></i>
							<span>课程管理</span>
						</div>
						<div class='navItem'>
							<div class='Item'>
								<a href="#">
									<span>课程管理</span>
								</a>
							</div>
							<div class="Item">
								<a href="#">
									<span>课程编辑</span>
								</a>
							</div>
							<div class="Item">
								<a href="#">
									<span>视频管理</span>
								</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div v-show="isShow">
		   <safe-alert v-on:kfc='isClose'></safe-alert>
		</div>
	
	</div>
</template>

<script>
	import safeAlert from './saferAlert.vue'
	export default{
		
		components:{safeAlert},
		data(){
			return{
				isShow:false
			}
		},
		
		methods:{
			isClose(){
				this.isShow=false;
			},
			safeShow(){
			this.isShow = !this.isShow;
			},
			quit(){//使用axios请求退出接口 get 不需要参数传递
				this.$axios({
					url:'/VueHandler/AdminHandler?action=quit',
					method:'get',
				}).then(function(response){
					console.log(response);
					if(response.data.success){
						alert('退出成功');
						window.location.href='/login'
					}else{
						alert('退出失败');
					}
				}).catch(function(err){
					alert('请求失败')
				})
			}
		}
	}
</script>

<style scoped>
  .header_nav a{text-decoration: none;}
  ul li {
    list-style: none;
  }

  .bg {
    background: url(../assets/assets/images/index_body_bg.jpg);
    height: 100px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .header_wrap {
    height: 50px;
    background: #222222;
    font-size: 12px;
  }

  .logo_wrap {
    margin: 4px 0 0 18px;
    float: left;
  }

  .header_nav {
    float: right;
    color: #9d9d9d;
  }

  .header_nav li {
    float: left;
    line-height: 50px;
    padding: 0 15px;
  }

  .header_nav li a:hover {
    color: #fff;
    cursor: pointer;
  }

  .header_nav li a {
    color: #9D9D9D;
    position: relative;
  }

  .header_nav li a .icon {
    top: 0;
    border: none;
    left: -20px;
  }

  .header_nav i, .header_nav .name {
    margin-right: 6px;
  }
  ul li {
    list-style: none;
  }

  .nav {
    width: 100%;
    height: 50px;
    background: url(../assets/assets/images/white_opacity_bg.png);
    position: relative;
  }

  .nav ul {
    /*padding-left: 500px;*/
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
  }

  .nav ul li .navName {
    font-size: 16px;
    float: left;
    padding: 0 30px;
    color: whitesmoke;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    position: relative;
  }

  .nav ul li .navName i {
    margin-right: 10px;
  }

  /*  上下白   设置基本属性  用css 伪类 设置*/
  .nav ul li .navName::before, .nav ul li .navName::after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    transition: .3s ease;
    opacity: 0;
  }

  /* 设置位置 颜色 */
  .nav ul li .navName::before {
    top: 20px;
    left: 66px;
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
  }

  .nav ul li .navName::after {
    bottom: 20px;
    right: 66px;
    border-bottom: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
  }

  /*白色的那个条*/
  .nav .navItem {
    position: absolute;
    z-index: 200;
    /*left: -80px;*/
    top: 50px;
    width: 100%;
    height: 144px;
    background-color: white;
    border: 1px solid #ececec;
    display: none;
  }

  /* 白条中内容 */
  .nav .navItem .Item {
    float: left;
    margin: 52px 40px;
    width: 249px;
    height: 40px;
    border: 1px solid #ececec;
    font-size: 15px;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
    transition: .2s ease;
  }

  .nav .navItem .Item:hover {
    background: #4c5c9c;
    color: white;
    font-size: 16px;

  }

  .nav .navItem .Item i {
    margin-right: 13px;
  }

  /*控制显示的移入*/
  .nav ul li:hover > .navItem {
    display: block;
  }

  /* 鼠标移入时 显示的 上下白 */
  .nav ul li:hover > .navName::before {
    top: 2px;
    left: 2px;
    opacity: 1;
    /*transition: .3s ease;*/
  }

  .nav ul li:hover > .navName::after {
    bottom: 2px;
    right: 2px;
    opacity: 1;
    /*transition: .3s ease;*/
  }
</style>
