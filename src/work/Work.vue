<template>
<div>
	<div id="accessibility"> <a href="#container">본문내용 바로가기</a>
	</div>
	<div class="wrap wrap_nodata">
		<!-- HEADER -->
		<header-component></header-component>
		<!-- //HEADER -->
		<!-- CONTAINER -->
		<section id="container" class="container">
			<!-- LBN -->
			<lnb-component></lnb-component>
			<!-- //LNB -->
			<!-- CONTENT -->
			<section class="content CI-MDI-WRAP" style="">
				<!--b:s-->
				<!-- CONTENT IN-->
				<ul class="tab1 CI-MDI-TAB-WRAP" id="jsMdiTab">
					<li v-for="(item, index) in midMenuList" v-bind:key="item" v-bind:class="item.tabClass"><a href="javascript:void(0);" @click="onClickMdiTap(item, index)"  v-bind:title="'['+item.mid+']'+' '+item.title" class="CI-MDI-TAB-NAME"><span>[{{item.mid}}] {{item.title}}</span><button type="button" title="닫기" class="CI-MDI-TAB-CLOSE"></button></a></li>
				</ul>
				<section class="contents_in">
					<div id="jsMdiContent" class="CI-MDI-CONTENT-WRAP">
						<!-- Page -->
						<router-view></router-view>
						<!-- //Page-->
					</div>
				</section>
				<button type="button" class="btn_tab_all_close" id="jsCloseAllViewsButton" title="탭 전체닫기"></button>
				<button type="button" class="btn_tab_list_btn" id="jsMdiTabListButton" title="탭 목록"></button>
				<button type="button" class="btn_content_size_btn" id="jsViewSizeButton" title="컨텐츠 확대/축소"></button>
				<div class="mdi_tab_list CI-MDI-TAB-LIST">
					<ul></ul>
				</div>
				<!-- //CONTENT IN-->
				<!--b:e-->
			</section>
			<!-- //CONTENT -->
		</section>
		<!-- //CONTAINER -->
	</div>
	<div id="sitemap"></div>
	<form id="TEMPLET_FORM" name="TEMPLET_FORM" method="post" onsubmit="return false;"></form>    
</div>    
</template>
<script>
import router from './routes';
//components
import Header from './WorkHeader';
import LeftMenu from './LnbWork';

export default {
	router,
    components: {
       'header-component':Header,
       'lnb-component':LeftMenu
    },
	data(){
		return {
			midMenuList:[ {mid:"41001", title:"주가지수 월별 추이", link:"page1", tabClass:"CI-MDI-TAB"},
					{mid:"42001", title:"종합정보(월)", link:"page2", tabClass:"CI-MDI-TAB"},
					{mid:"43001", title:"종합정보(일)", link:"page3", tabClass:"CI-MDI-TAB"} 
			]
		}
	},
	methods: {
		onClickMdiTap(item, index){
			console.log("link", index, item.link);
			//router.push({ path: link, query: { plan: 'private' }})

			//MDI 메뉴탭 초기화
			this.midMenuList.forEach(element => {
				var cssClass = element.tabClass;
				if(cssClass && cssClass.indexOf("on2") != -1){
					element.tabClass = "CI-MDI-TAB";
				}
			});
			item.tabClass = "CI-MDI-TAB on2";

			//라우터 이동
			router.push({ path: item.link});
		}
	},
	mounted() {
		//console.log(this.$router);
		//console.log(this.$route);
		//Get 파라메터 획득
		console.log("Query String:", this.$route.query);
		
		/*
			https://router.vuejs.org/kr/guide/
			1) Code Split.(Lazy Loading)
			2) Hash router vs History router
			   SEO, URL... -> History router.
			3) History router reload problem.
		*/
	}	
}
</script>