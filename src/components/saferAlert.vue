<template>
	<div v-bind:style='alertStyle'>
		<h1>我是遮罩层</h1>
		<div :style="alertAll">
			<div class='alert-head'>
				&nbsp;<span class='head-title'>修改密码</span>
				<img src="../assets/assets/images/x.png" alt="" />
			</div>
			<ul class="alert-body">
				<li>
					<span>当前密码：</span>
					<input type="text" v-model="password.old_pw" />
				</li>
				<li>
					<span>新密码：</span>
					<input type="text" v-model="password.new_pw" />
				</li>
				<li>
					<span>确认密码：</span>
					<input type="text" v-model="password.again_pw" />
				</li>
			</ul>
			<div>
				<button @click="enter" class="btn btn-success">确定</button>
				<button @click="close" class="btn btn-info">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			close(){
				this.$emit('kfc'); //如果不需要传递数据，可以通过事件控制
				
			},
			enter(){
				//  /VueHandler/AdminHandler?action=updatepass 调用post userPwd  newPwd
				if(this.password.new_pw==this.password.again_pw){
					var that=this;
					this.$axios({
						url:'/VueHandler/AdminHandler?action=updatepass',
						method:'post',
						data:{
							userPwd:this.password.old_pw,
							newPwd:this.password.new_pw
						}
					}).then(function(res){
						if(res.data.success){
							alert('密码修改成功')
							that.$emit('kfc')
						}else{
							alert('密码修改失败')
						}
					})
				}else{
					alert('两次输入密码不一致')
				}
			}
		},
		
		data(){
			return{
				password:{
					old_pw:'',
					new_pw:'',
					again_pw:''
				},
				alertStyle:{
					'width':window.innerWidth+'px',
					'height':window.innerHeight+'px',
					'position':'absolute',
					'top':0,
					'left':0,
					'background':'white',
					'opacity':0.9,
					'z-index':132
				},
				alertAll:{
					'width':'400px',
					'height':'300px',
					'position':'relative',
					'top':window.innerHeight/2-250+'px',
					'left':window.innerWidth/2-200+'px',
					'border':'5px solid red'
				}
			}
		}
	}
</script>

<style scoped>
  .alert-head {
    height: 30px;
    background: #4F66B3;
    margin-bottom: 10px

  }

  .head-title {
    color: white;
    line-height: 30px;
    font-size: 14px;
    display: inline-block;
    /*float: left*/
  }

  .alert-head img {
    display: inline-block;
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  ul.alert-body li {
    display: block;
    margin-bottom: 10px
  }

  ul.alert-body li span {
    display: inline-block;
    width: 80px;
    text-align: right;
  }

  ul.alert-body li input {
    width: 200px;
  }

  .btn {
    width: 80px;
    height: 30px;
    line-height: 20px;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .btn-info {
    background: #3cadcf;
    float: right;
    margin-right: 60px;

  }

  .btn-info:hover {
    background: #1f8fb0;
  }

  .btn-success {
    background: #5cb85c;
    float: left;
    margin-left: 60px;
  }

  .btn-success:hover {
    background: #449d44;
  }	
	
</style>
助教-李威威 2018/1/24 10:02:32

