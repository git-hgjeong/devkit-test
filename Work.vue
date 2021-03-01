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
					<li class="CI-MDI-TAB on2"><a href="#" title="[41001] 주가지수 월별 추이" class="CI-MDI-TAB-NAME"><span>[41001] 주가지수 월별 추이</span><button type="button" title="닫기" class="CI-MDI-TAB-CLOSE"></button></a>
					</li>
					<li class="CI-MDI-TAB"><a href="#" title="[42001] 종합정보(일)" class="CI-MDI-TAB-NAME"><span>[42001] 종합정보(일)</span><button type="button" title="닫기" class="CI-MDI-TAB-CLOSE"></button></a>
					</li>
					<li class="CI-MDI-TAB"><a href="#" title="[43001] 종합정보(일)" class="CI-MDI-TAB-NAME"><span>[43001] 종합정보(일)</span><button type="button" title="닫기" class="CI-MDI-TAB-CLOSE"></button></a>
					</li>
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
import Header from './WorkHeader';
import LeftMenu from './LnbWork';
import router from './routes';

export default {
	router,
    components: {
       'header-component':Header,
       'lnb-component':LeftMenu
    }
}
</script>