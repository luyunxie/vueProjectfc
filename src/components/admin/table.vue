<template>
	<div class="box">
		<table class="tableList_table">
			<thead>
			<tr>
				<th>用户名</th>
				<th>姓名</th>
				<th>后台权限</th>
				<th>手机号码</th>
				<th>编辑日期</th>
				<th>操作</th>
			</tr>
			</thead>
			<tbody>
				<!--<tr>
				<td>admin</td>
				<td>王亚兰</td>
				<td>123</td>
				<td>12345678901</td>
				<td>2018大雪前</td>
				<td>
					<button>删除</button>
					<button>编辑</button>
				</td>
			</tr>-->
			<tr v-for='(data,index) in lists'>
				<td>{{data.userName}}</td>
				<td>{{data.turename}}</td>
				<td>{{data.power}}</td>
				<td>{{data.phone}}</td>
				<td>{{data.upDateAt}}</td>
				
				<td>
					<button @click='deleteD(data)'>删除</button>
					<!--data.ID就是删除操作需要的tokenID值，如何对于单条数据操作-->
					<button @click="updateD(data)">编辑</button>
				</td>
			</tr>
			</tbody>
			<tfoot>
				<td class="paging_class" colspan="6" style="border:1px solid blue;">
					<div class="pageTheLi">
						<ul>
							<li>
								<a @click="onFirst()">
									<img src="../../assets/assets/first.png" alt="" />
								</a>
							</li>
							<li>
								<a @click="onPreve()">
									<img src="../../assets/assets/prev.png" alt="" />
								</a>
							</li>
							
							<li>
								{{$store.state.pageStart}}
							</li>
							
							<li>
								<a @click="onNext()">
									<img src="../../assets/assets/next.png" alt="" />
								</a>
							</li>
							<li>
								<a @click="onLast()">
									<img src="../../assets/assets/last.png" alt="" />
								</a>
							</li>
						</ul>
					</div>
				</td>
			</tfoot>
		</table>
	</div>
</template>

<script>
	import store from '../../vuex/adminStore.js'
	export default{
		store,
		mounted(){
			this.$store.state.tableList.getListData()
		},
		computed:{//动态计算
			lists(){//[{userName:'',pws:''},{}{}]
				return this.$store.state.tableList.list
			}
	},
	methods:{
		updateD(data){
			//1.显示弹窗组件
			this.$store.commit('setAddBtnFlag','block')
			//2.将当前数据的所有内容显示在弹窗里面
			this.$store.commit('clearInfor',data)
			
			 this.$store.commit('setTitle','编辑管理员')
			
		},
		deleteD(data){
			//console.log(data);//交互发送数据，发送的内容是ID
			var that=this;
			this.$axios({
				url:'/VueHandler/AdminHandler?action=delete',
				method:'get',
				params:{
					tokenId:data.ID
				}
			}).then(function(res){
				//重新加载页面，查看删除成功了吗
				console.log(res)
				if(res.data.success){
					alert('删除成功');
					//重新加载数据
					that.$store.state.tableList.getListData()
				}else{
					alert('请稍后再尝试')
				}
			})
		},
		
		//首页
		onFirst(){
			this.$store.commit('subFirst');
			this.$store.state.tableList.getListData();
			//alert('首页')
		},
		onPreve(){
			this.$store.commit('subPreve');
			this.$store.state.tableList.getListData();
			//alert('上一页')
		},
		
		onNext(){//点击下一页
			this.$store.commit('subNext');//修改了state.pageStart的值
			this.$store.state.tableList.getListData();
			//alert('下一页')
		},
		onLast(){//点击下一页
			this.$store.commit('subLast');//修改了state.pageStart的值
			this.$store.state.tableList.getListData();
			//alert('最后一页')
		},
	}
	}
</script>

<style scoped>
  ul li{
    list-style: none;
  }
  *{
    margin: 0;
    padding: 0
  }
  .tableList_table {
    width:100%;
    /*height:400px;*/
    background-color:#FFFFFF;
    border-collapse:collapse;
  }
  .tableList_table thead tr{
    color:#666666;
    background-color:#EFEFEF;
    border:1px solid #C0C0C0;
    height:34px;
    font-size:13px;
  }
  .tableList_table tbody tr{
    height:34px;
    font-size:14px;
  }
  .tableList_table tbody tr td{
    padding-left: 10px;
    height:34px;
    font-size:14px;
  }
  .tableList_table thead tr{
    border-right:none;
  }
  .tableList_table thead tr th{
    padding-left:10px;
    border-right:1px solid #C0C0C0;
  }
  .tableList_tr_black {
    background-color:#FAFAFA;
  }
  .tableList_table tbody tr:hover { /*鼠标移入时的背景颜色*/
    background-color:#ECF4FF;
  }
  .tableList_table tbody button {
    margin:0;
    padding:0;
    list-style-type:none;
    color:blue;
    background:none;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    width:50px;
    height:30px;
    line-height:30px;
  }
  .tableList_table tbody button:hover{
    cursor:pointer;
  }
  #tableList_table_tbody_tr_click {
    border:1px solid #C0C0C0;
  }
  .tableList_table tfoot {
    width:100%;
  }
  .tableList_table tfoot tr {
    width:100%;
    height:30px;
    border:1px solid #C0C0C0;
  }
  .tableList_table tfoot tr td{
    height:30px;
  }
  .tableList_table tfoot tr td li{
    border:none;
  }
  .tableList_table tfoot tr td li img{
    vertical-align: bottom;
    margin-bottom:3px;
  }
  .tableList_table tfoot tr td li img:hover{
    cursor:pointer;
  }
  .paging_class {
    text-align:left;
  }
  .box {
    padding: 0;
  }
  .pageTheLi li{
    float: left;
    margin-left: 30px;
  }
</style>