<template>
	<div :style='alertStyle'>
		<div :style='alertAll'>
			<!-- 容器 -->
			<div class="alert-head">
				<span class="head-title" v-text='$store.state.addTitle'></span>
				<img   src="../../assets/assets/images/x.png" alt="" />
			</div>
			<ul class="alert-body">
				<li>
					<span>用户名：</span>
					<input type="text" v-model="userInfor.userName" />
				</li>
				<li>
					<span>姓名：</span>
					<input type="text" v-model="userInfor.turename" />
				</li>
				<li>
					<span>手机号：</span>
					<input type="text" v-model="userInfor.phone" />
				</li>
				<li>
					<span>权限选择：</span>
					<select v-model="userInfor.power">
						<option >系统管理员</option>
						<option >课程管理员</option>
					</select>
				</li>
			</ul>
			<div style="padding-top:15px;">
				<button @click="enter" class="btn btn-success" >确定</button>
				<button @click="close" class="btn btn-info" >取消</button>
			</div>
		</div>
	</div>
</template>

<script>
       import store from '../../vuex/adminStore.js'
	export default {
		store,
		data(){
			return{
				alertStyle:{
					'width':window.innerWidth+'px',
					'height':window.innerHeight+'px',
					'position':'absolute',
					'top':0,
					'left':0,
					'background':'rgba(255,255,255,0.8)'
				},
				alertAll:{
					'position':'relative',
					'width':'410px',
					'height':'250px',
					'top':window.innerHeight/2 -250/2 +'px',
					'left':window.innerWidth/2 -410/2 +'px',
					'background':'#fff',
					'border':'5px solid red'
				},
				
			}
		},
//		props:['m'],
		methods:{
			close(){
				this.$store.commit('setAddBtnFlag','none')
				//清空弹窗内容
				this.$store.commit('clearInfor')
			},
			enter(){
				//注册和编辑功能==》注册没有tokenId
				var url='';
				
				//准备的数据
				var data={
					userName:this.userInfor.userName,//adminStore里面的数据
					turename:this.userInfor.turename,
					phone:this.userInfor.phone,
					power:this.userInfor.power,
//					password:'123456',//编辑操作的时候没有pasword
					
				};
				if(this.userInfor.tokenId){//调用编辑功能
					
					data.tokenId=this.userInfor.tokenId;
					url='/VueHandler/AdminHandler?action=update'
				}else{
					
					data.password='123456';
					url='/VueHandler/AdminLoginAndRegHandler?action=add'
				}
				
				var that=this;
				this.$axios({
					url:url,
					method:'post',
					data:data
				}).then(function(response){
					console.log(response);
					if(response.data.success){
						alert('注册成功')
						that.close();
						//清空弹窗组件的内容
						that.$store.commit('clearInfor')
						that.$store.state.tableList.getListData();
					}else{
						alert('注册失败')
					}
					
				})
			}
			
		},
		computed:{
			//...mapState(['userInFOR'])
			userInfor(){
				return this.$store.state.userInfor
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
    float: left
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

  ul.alert-body li select {
    width: 204px;
    height: 24px
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



