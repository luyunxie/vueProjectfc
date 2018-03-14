//下载vuex

import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
Vue.use(Vuex);
axios.defaults.withCredentials=true;

//去服务器获取人员数据
var tableAdminList=function(){
	axios({
		url:'/VueHandler/AdminHandler?action=show',
		method:'get',
		params:{
			searchText:state.searchText,
			pageStart:state.pageStart
		}
	}).then(function(response){
		console.log(response);
		state.maxPage=Math.ceil(response.data.data.count/3);
		console.log()
		state.tableList.list=[];//清空里面的内容，方便储存[{userName:'',pws:''},{}{}]
		for(var i=0;i<response.data.data.list.length;i++){//获取请求到的每一条数据
			var obj={
				userName:response.data.data.list[i].userName,
				turename:response.data.data.list[i].turename,
				power:response.data.data.list[i].power,
				phone:response.data.data.list[i].phone,
				upDateAt:response.data.data.list[i].upDateAt,
				ID:response.data.data.list[i].tokenId,
			};
			state.tableList.list.push(obj)
		};
		console.log('我是整理出来的数据');
		console.log(state.tableList.list)
	})
}

const state={//储存状态
	addTitle:'',//控制弹窗‘添加/编辑管理员’
	
	addBtnFlag:{//控制弹窗组件的显示隐藏
		'display':'none'
	},
	//注册人员的初始表格
	userInfor:{
		userName:'',
		turename:'',
		phone:'',
		power:'',
		tokenId:''//为了修改操作
	},
	
	pageStart:1,//请求的页数
	searchText:'',//搜索框条件
	maxPage:1,
	pageSize:3,//每页的条数
	tableList:{
		count:1,
		list:[],//容器
		getListData:tableAdminList,//我将上面is请求人员数据的函数的名字储存进来了
	}
};

const mutations={
	setTitle(state,title){
		state.addTitle=title
	},
	
	setAddBtnFlag(state,str){
		state.addBtnFlag.display=str
	},
	//控制弹窗组件
	clearInfor(state,data){
		if(data){//编辑操作
			state.userInfor.userName=data.userName;
			state.userInfor.turename=data.turename;
			state.userInfor.phone=data.phone;
			state.userInfor.power=data.power;
			state.userInfor.tokenId=data.ID;
		}else{//添加操作之后清空弹窗
			state.userInfor.userName='';
			state.userInfor.turename='';
			state.userInfor.phone='';
			state.userInfor.power='';
			state.userInfor.tokenId='';
		}
		
	},
	
	//首页跳转
	subFirst(state){
		state.pageStart=1;
	},
	//上一页
	subPreve(state){
		if(state.pageStart>1){
			state.pageStart--
		}else{
			state.pageStart=1
		}
	},
	
	//下一页
	subNext(state){//最大页数 来限制 你的下一页是多少
		if(state.pageStart>=state.maxPage){
			
			state.pageStart = state.maxPage
			
		}else{
			state.pageStart++
		}
		
	},
	//末尾页
	subLast(state){
		state.pageStart=state.maxPage
	}
}



export default new Vuex.Store({
	state,mutations
})
