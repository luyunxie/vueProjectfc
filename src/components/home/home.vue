<template>
	<div>
		<fchead></fchead>
		<div class='index_body'>
			<!--页面主体-->
			<div class="quick_links">
				<!--快捷按钮-->
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>课程列表</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>课程添加</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>用户注册</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>视频管理</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>用户注册</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
				<div class="quicklinks_one">
					<!--单个按钮-->
					<h1>用户注册</h1>
					<h2>Course List</h2>
					<div class='icon_wrap'>
						<i class='fa fa-th-large'></i>
					</div>
					<p>查询所有课程</p>
				</div>
			</div>
			
			<div class="charts_wrap">
				<div style="background-color: #fff;padding-top: 20px;height: 340px;">
					<div ref='echarts01' style="width: 400px;height: 370px;background-color: white;"></div>
				</div>
				<div style="background-color: #fff;padding-top: 20px;height: 340px;">
					<div ref='echarts02' style="width: 570px;height: 370px;background-color: white;"></div>
				</div>
				<div style="background-color: #fff;padding-top: 20px;height: 340px;">
					<div ref='echarts03' style="width: 570px;height: 370px;background-color: white;"></div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import fchead from '../fchead' //头部组件
	import echarts from 'echarts'  //引入插件
	
	export default{
		components:{fchead},
		mounted:function(){
			var mychart01=echarts.init(this.$refs.echarts01);//初始化一个echarts表盘到div
			var mychart02=echarts.init(this.$refs.echarts02);
			var mychart03=echarts.init(this.$refs.echarts03);
			mychart01.setOption({
					tooltip : {
					        formatter: "{a} <br/>{b} : {c}%"
					},
					toolbox: {
					        feature: {
					            restore: {},
					            saveAsImage: {}
					        }
				    },
					series: [
					        {
					            name: '业务指标',
					            type: 'gauge',
					            detail: {formatter:'{value}%'},
					            data: [{value: 50, name: '完成率'}]
					        }
					]
			})
			
			mychart02.setOption({
				xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		        },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line',
			        areaStyle: {}
			    }]
			})
			mychart03.setOption({
				xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		        },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line',
			        areaStyle: {}
			    }]
			})
		}
	}
</script>

<style scoped>
  .index_body {
    background: url(../../assets/assets/images/index_body_bg.jpg);
    padding-top: 65px;
    color: #fff;
    min-width: 1100px;
  }

  .quick_links {
    overflow: hidden;
  }

  .quicklinks_one {
    width: 12%;
    height: 202px;
    background: url(../../assets/assets/images/white_opacity_bg.png);
    position: relative;
    text-align: center;
    cursor: pointer;
    float: left;
    margin-left: 4%;
    margin-bottom: 54px;
  }

  .quicklinks_one h1 {
    font-size: 24px;
    font-family: "方正大标宋", "宋体";
    padding-top: 38px;
  }

  .quicklinks_one h2 {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 12px;
    font-weight: normal;
  }

  .quicklinks_one p {
    font-size: 12px;
    padding: 5px 22px 0;
    display: none;
    line-height: 21px;
  }

  .quicklinks_one .icon_wrap {
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
  }

  .quicklinks_one i {
    font-size: 40px;
  }

  .quicklinks_one i {
    border: none;
    height: 20px;
  }

  .quicklinks_one .icon-plus {
    border: 4px solid #fff;
    border-radius: 2px;
  }

  .quicklinks_one .icon::before {
    position: absolute;
    left: -25px;
    top: -10px;
  }

  .quicklinks_one .icon-plus:before {
    width: 20px;
    border: 4px solid #fff;
    border-radius: 2px;
    left: -13px;
    top: 5px;

  }

  .quicklinks_one:hover {
    background-color: #27a9e3;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover .icon_wrap {
    top: 22px;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover h1 {
    padding-top: 78px;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover h2 {
    display: none;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one:hover p {
    display: block;
    transition: all 0.5s ease 0s;
  }

  .quicklinks_one.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /*图表*/
  .charts_wrap {
    margin-left: 4%;
    margin-right: 4%;
    background: url(../../assets/assets/images/white_opacity_bg.png);
    padding-top: 50px;
    overflow: hidden;
  }

  .charts_wrap > div {
    float: left;
    margin-left: 4%;
    overflow: hidden;
    margin-bottom: 50px;
  }

</style>