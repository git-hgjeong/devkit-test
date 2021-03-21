<template>
<div id="root">
	<div id="accessibility"> <a href="#container">본문내용 바로가기</a>
	</div>
	<div class="wrap wrap_nodata">
		<!-- HEADER -->
		<header-component></header-component>
		<!-- //HEADER -->
		<!-- CONTAINER -->
		<section id="container" class="container">
			<!-- LBN -->
			<lnb-component :menu="menuList"></lnb-component>
			<!-- //LNB -->
			<!-- CONTENT -->
			<section class="content CI-MDI-WRAP" style="">
				<!--b:s-->
				<!-- CONTENT IN-->
				<ul class="tab1 CI-MDI-TAB-WRAP" id="jsMdiTab">
					<li v-for="(item, index) in midMenuList" v-bind:key="item" class="CI-MDI-TAB"><a href="javascript:void(0);" @click="onClickMdiTap(item, index)"  v-bind:title="'['+item.mid+']'+' '+item.title" class="CI-MDI-TAB-NAME"><span>{{item.name}}</span><button type="button" title="닫기" class="CI-MDI-TAB-CLOSE"></button></a></li>
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

const dataMenu = [
				{"mid":"MDC0201", "name":"기본 통계", isOpen:true},
					{"mid":"MDC020101", "name":"지수", isOpen:true},
						{"mid":"MDC02010101", "name":"주가지수", isOpen:true},
							{"mid":"MDC0201010101", "name":"전체지수 시세", isOpen:false, link:"page1"},
							{"mid":"MDC0201010102", "name":"전체지수 등락률", isOpen:false, link:"page2"},
							{"mid":"MDC0201010103", "name":"개별지수 시세 추이", isOpen:false, link:"page3"},
							{"mid":"MDC0201010104", "name":"전체지수 기본정보", isOpen:false},
							{"mid":"MDC0201010105", "name":"개별지수 종합정보", isOpen:false},
							{"mid":"MDC0201010106", "name":"지수구성종목", isOpen:false},
							{"mid":"MDC0201010107", "name":"PER/PBR/배당수익률", isOpen:false},

						{"mid":"MDC02010102", "name":"채권지수", isOpen:false},
							{"mid":"MDC0201010201", "name":"전체지수 시세", isOpen:false},
							{"mid":"MDC0201010202", "name":"개별지수 시세 추이", isOpen:false},
						
						{"mid":"MDC02010103", "name":"파생 및 기타지수", isOpen:false},
							{"mid":"MDC0201010301", "name":"전체지수 시세", isOpen:false},
							{"mid":"MDC0201010302", "name":"전체지수 등락률", isOpen:false},
							{"mid":"MDC0201010303", "name":"개별지수 시세 추이", isOpen:false},
							{"mid":"MDC0201010304", "name":"전체지수 기본정보", isOpen:false},
							{"mid":"MDC0201010305", "name":"개별지수 종합정보", isOpen:false},

                {"mid":"MDC020102", "name":"주식", isOpen:false},
					{"mid":"MDC02010201", "name":"종목시세", isOpen:false},
						{"mid":"MDC0201020101", "name":"전종목 시세", isOpen:false},
						{"mid":"MDC0201020102", "name":"전종목 등락률", isOpen:false},
						{"mid":"MDC0201020103", "name":"개별종목 시세 추이", isOpen:false},
						{"mid":"MDC0201020104", "name":"개별종목 시세 추이(월)", isOpen:false},
					{"mid":"MDC02010202", "name":"종목정보", isOpen:false},
					{"mid":"MDC0201020201", "name":"전종목 기본정보", isOpen:false},
					{"mid":"MDC0201020202", "name":"전종목 지정내역", isOpen:false},
					{"mid":"MDC0201020203", "name":"개별종목 종합정보", isOpen:false},
					{"mid":"MDC02010203", "name":"거래실적", isOpen:false},
						{"mid":"MDC0201020301", "name":"투자자별 거래실적", isOpen:false},
						{"mid":"MDC0201020302", "name":"투자자별 거래실적(개별종목)", isOpen:false},
						{"mid":"MDC0201020303", "name":"투자자별 순매수상위종목", isOpen:false},
						{"mid":"MDC0201020304", "name":"대량매매(전일)", isOpen:false},
						{"mid":"MDC0201020305", "name":"프로그램매매", isOpen:false},
					{"mid":"MDC02010204", "name":"기타증권", isOpen:false},
						{"mid":"MDC0201020401", "name":"REITs 시세", isOpen:false},
						{"mid":"MDC0201020402", "name":"뮤추얼펀드 시세", isOpen:false},
						{"mid":"MDC0201020403", "name":"선박투자회사 시세", isOpen:false},
						{"mid":"MDC0201020404", "name":"인프라투융자회사 시세", isOpen:false},
						{"mid":"MDC0201020405", "name":"수익증권 시세", isOpen:false},
						{"mid":"MDC0201020406", "name":"신주인수권증권 시세", isOpen:false},
						{"mid":"MDC0201020407", "name":"신주인수권증서 시세", isOpen:false},

					{"mid":"MDC02010205", "name":"세부안내", isOpen:false},
						{"mid":"MDC0201020501", "name":"상장회사 상세검색", isOpen:false},
						{"mid":"MDC0201020502", "name":"PER/PBR/배당수익률(개별종목)", isOpen:false},
						{"mid":"MDC0201020503", "name":"외국인보유량 추이", isOpen:false},
						{"mid":"MDC0201020504", "name":"외국인보유량(개별종목)", isOpen:false},
						{"mid":"MDC0201020505", "name":"업종별 분포", isOpen:false},
						{"mid":"MDC0201020506", "name":"업종분류 현황", isOpen:false},

						{"mid":"MDC0201020507", "name":"대용가격", isOpen:false},
							{"mid":"MDC020102050701", "name":"주식 대용가", isOpen:false},
							{"mid":"MDC020102050702", "name":"수익증권 대용가", isOpen:false},
							{"mid":"MDC020102050703", "name":"뮤추얼펀드 대용가", isOpen:false}
            ];

//{mid:"41001", title:"주가지수 월별 추이", link:"page1", tabClass:"CI-MDI-TAB"},
export default {
	router,
    components: {
       'header-component':Header,
       'lnb-component':LeftMenu
    },
	data(){
		return {
			menuList: dataMenu,
			midMenuList: []
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