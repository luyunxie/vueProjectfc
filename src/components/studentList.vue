<template>
    <div> 
      	<div>
			<!-- 头部栏 -->
			<fchead></fchead>
		</div>
		<div class="adminListContent">
			<span style="color:#2880E4">首页/</span> <span>用户管理/</span> <span>学员列表</span>
		    <div class="fc_section_wrap">
		    	<!-- 搜索框 -->
		    	<ul>
					<li class="admin_top_input">
						<input type="text" placeholder="用户名" />
						<input type="text" placeholder="邮箱" />
						<input type="text" placeholder="手机号" />
					</li>
					<li>
						<button class="btn_class"  style="background: #5cb85c;">查询</button>
					</li>
					<p style="height: 5px;"></p>
					<li class="admin_top_input">
						<input type="text" placeholder="用户名" v-model="add_use" />
						<input type="text" placeholder="邮箱" v-model="add_email" />
						<input type="text" placeholder="手机号" v-model="add_phone" />
					</li>	
					<li >
						<button @click="addStudent" class="btn_class" style="background:#4F66B3;">+ 添加</button>
					</li>
				</ul>
		    </div>
		   <!-- 表格 -->
			<div class="functional_block">
				<div class="functional_block_top">
					<div class="functional_block_left"></div>
					<div class="functional_block_right">学员列表</div>
				</div>
				<div class="functional_block_bottom">
					<!--<tables :listStore='listStore'></tables>-->
					<!--<tables v-bind:tableListData="tableListDataStore"></tables>-->
				</div>
			</div> 
		</div>
    </div>  
</template>

<script>
import fchead from './fchead'
export default {
	components:{fchead},
	data(){
		return {
			//搜索内容
		search_use:'',
		search_email:'',
		search_phone:'',
		//注册内容
		add_use:'',
		add_email:'',
		add_phone:''
		
	}	
	},
	methods:{
		addStudent(){
			this.$axios({
			url:'/VueHandler/AdminHandler?action=adduser',
			method:'post',
			data:{
				adduserName:this.add_use,
				addemail:this.add_email,
				addphone:this.add_phone
			}
			
		}).then(function(res){
			console.log(res);
			if(res.data.success){
				alert('添加成功')
			}else{
				alert('添加失败')
			}
		})
		}
		
	}
  
}
</script>
<style>
	ul li {
		list-style: none
	}
	
	.adminListContent {
		padding-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
		background: #F5F5F5;
		min-width: 1100px;
		height: 100%;
	}
	
	.admin_top_input input {
		width: 250px;
		height: 25px;
		padding-left: 5px;
	}
	
	.fc_section_wrap {
		height: 100px;
		padding: 10px;
		border: 1px solid #C0C0C0;
		background: #FFFFFF;
		margin-top: 15px;
		margin-botton: 15px;
	}
	
	.fc_section_wrap ul {
		margin: 0;
		padding: 0;
	}
	
	.fc_section_wrap ul li {
		display: inline-block;
		margin: 0;
		margin-right: 5px;
		padding: 0;
	}
	
	.admin_top_add {
		float: right;
	}
	
	.btn_class {
		width: 80px;
		height: 32px;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer;
		color: #fff;
		margin-right: 10px;
	}
	
	.functional_block {
		width: 100%;
		line-height: 34px;
		background: #fff;
		text-align: left;
		margin-top: 15px;
		border: 1px solid #C0C0C0;
	}
	
	.functional_block_top {
		height: 34px;
		position: relative;
		border-bottom: 1px solid #C0C0C0;
	}
	
	.functional_block_left {
		position: absolute;
		width: 34px;
		height: 34px;
		border-right: 1px solid #C0C0C0;
		background: url(../assets/assets/functional_block.png) no-repeat center;
	}
	
	.functional_block_right {
		padding-left: 40px;
	}
	
	.functional_block_bottom {
		overflow: hidden;
	}
</style>


    