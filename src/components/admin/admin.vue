<template>
	<div>
		<fchead></fchead>
		<!--系统人员：导航，功能，数据展示的table-->
		<div class="adminListContent">
			<span>首页</span>
			<span>用户管理</span>
			<span>系统人员</span>
			<div class="fc_section_wrap">
				<ul>
					<li class="admin_top_input">
						<input type="text" v-model="searchInput" placeholder="姓名查询" />
					</li>
					<li class="admin_top_input">
						<button @click="search" class='btn_class btn-info'>查询</button>
					</li>
					<li class="admin_top_add">
						<button @click="add" class='btn_class btn-success'>添加</button>
					</li>
				</ul>
			</div>
			<!--列表-->
			<div class="functional_block">
				<div class="functional_block_top">
				<div class="functional_block_left"></div>
				<div class="functional_block_right">系统人员列表</div>
				</div>
				<div class="functional_block_bottom">
					<table-list></table-list>
				</div>
			</div>
		</div>
		<!--注册人员组件-->
		<div v-bind:style="vuexBtnFlag">
		<admin-alert></admin-alert>
		</div>
	</div>
</template>

<script>
	import tableList from './table.vue'
	import fchead from '../fchead.vue'
	import store from '../../vuex/adminStore.js'
	import adminAlert from './adminAlert'
	export default{
		store,
		components:{fchead,tableList,adminAlert},
		data(){
			return{
				searchInput:'',
				addBtnFlag:{
					display:'none'
				}
			}
		},
		methods:{
			search(){
				this.$store.state.searchText=this.searchInput;
				this.$store.state.tableList.getListData()
			},
			add(){
//				this.addBtnFlag.display='block';   父子组件传值

                //vuex
                this.$store.commit('setAddBtnFlag','block')
                
                this.$store.commit('setTitle','添加管理员')
                
			},
			
		},
		computed:{
			vuexBtnFlag(){
				return this.$store.state.addBtnFlag
			}
		}
	}
</script>

<style scoped>
	.btn-info {
	    background: #3cadcf;
	  
    }
    .btn-success {
	    background: #5cb85c;
	   
	 }
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
		height: 35px;
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
		background: url(../../assets/assets/functional_block.png) no-repeat center;
	}
	
	.functional_block_right {
		padding-left: 40px;
	}
	
	.functional_block_bottom {
		overflow: hidden;
	}	
</style>