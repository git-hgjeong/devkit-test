<template>
		<section class="header">
			<div class="headertop">
				<button type="button" class="allMenuBtn CI-ALL-MENU-LAYER-OPEN">
					<img src="http://data.krx.co.kr/templets/mdc/img/btn_headertop.png" title="전체메뉴" />
				</button>
				<h1>
					<a href="/contents/MDC/MAIN/main/index.cmd"><img src="http://data.krx.co.kr/templets/mdc/img/logo.png" title="정보데이터시스템" /></a>
				</h1>
				<div class="totalSearchBoxWrap jsTotSchBlock">
					<dl id="jsSchTp">	<dt data-type="isu">종목검색</dt>
						<dd>
							<ul>
								<li data-type="tot">통합검색</li>
								<li data-type="isu">종목검색</li>
								<li data-type="menu">화면검색</li>
								<li data-type="dict">용어검색</li>
							</ul>
						</dd>
					</dl>
					<input id="jsTotSch" type="text" placeholder="검색어를 입력해주세요.">
					<button id="jsTotSchBtn">
						<img src="http://data.krx.co.kr/templets/mdc/img/btn_search.png" title="검색" />
					</button>
				</div>
				<article id="jsTotSchArea" class="jsTotSchBlock">
					<div class="pop_searching_txt">
						<ul>
							<li data-type="STK" class="on"><a href="javascript:void(0);">주식</a>
							</li>
							<li data-type="BND"><a href="javascript:void(0);">채권</a>
							</li>
							<li data-type="SECU"><a href="javascript:void(0);">증권상품</a>
							</li>
							<li data-type="DRV"><a href="javascript:void(0);">파생상품</a>
							</li>
							<li data-type="GEN"><a href="javascript:void(0);">일반상품</a>
							</li>
							<li data-type="RECENT"><a href="javascript:void(0);">최근검색</a>
							</li>
						</ul>
						<!--
						<p><img src="img/ico_feel_pupple.png" alt=""> 화면검색은 메뉴를 기준으로 결과 제공됩니다.</p>
            -->
					</div>
					<div class="pop_opened_type01">
						<div class="overflowyauto">
							<div class="sample_tb cm">
								<table>
									<colgroup>
										<col style="width:100%;">
									</colgroup>
									<tbody id="jsSchRsTbl"></tbody>
								</table>
							</div>
						</div>
					</div>
				</article>
				<div class="btn_header_wrap">
					<a href="/contents/MDC/COMS/client/MDCCOMS001.cmd" class="btn_header_right1">
						<img src="http://data.krx.co.kr/templets/mdc/img/btn_header_right1.png" title="로그인">
					</a>
					<a href="/contents/MDC/COMS/client/MDCCOMS002_S1.cmd" class="btn_header_right2">
						<img src="http://data.krx.co.kr/templets/mdc/img/btn_header_right2.png" title="회원가입">
					</a>
				</div>
			</div>
			<!-- Global Navigation Bar -->
			<div class="headerbottom" id="jsGnbArea">
				<ol>
					<li><a href="javascript:void(0);">서비스 소개</a>
					</li>
					<li><a href="javascript:void(0);">통계</a>
					</li>
					<li><a href="javascript:void(0);">쉽게 보는 통계</a>
					</li>
					<li><a href="javascript:void(0);">깊이 있는 통계</a>
					</li>
					<li><a href="javascript:void(0);">간행물</a>
					</li>
					<li><a href="javascript:void(0);">데이터 상품</a>
					</li>
				</ol>
				<div>
					<ol>
						<li><a href="/contents/MDC/INFO/informationController/MDCINFO001.cmd" title="서비스 소개">서비스 소개</a><span></span>
						</li>
						<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0201" title="통계" data-depth-menu-id="MDC02" class="jsMenuLink">통계</a><span></span>
						</li>
						<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0301" title="쉽게 보는 통계" data-depth-menu-id="MDC03" class="jsMenuLink">쉽게 보는 통계</a><span></span>
						</li>
						<li><a href="/contents/MDC/HARD/hardController/MDCHARD001.cmd" title="깊이 있는 통계" target="_blank">깊이 있는 통계</a><span></span>
						</li>
						<li><a href="/contents/MDC/MGZN/publication/MDCMGZN001.cmd?menuId=MDCMGZN001" title="간행물">간행물</a><span></span>
						</li>
						<li><a href="/contents/MDC/DATA/datasale/index.cmd?viewNm=MDCDATA001" title="데이터 상품">데이터 상품</a><span></span>
						</li>
					</ol>
					<ul>
						<li>
							<ul>
								<li><a href="/contents/MDC/INFO/informationController/MDCINFO001.cmd" title="정보데이터시스템 소개">정보데이터시스템 소개</a>
								</li>
								<li><a href="/contents/MDC/INFO/informationController/MDCINFO002.cmd" title="이용안내">이용안내</a>
								</li>
								<li><a href="http://open.krx.co.kr/contents/OPN/05/05000000/OPN05000000.jsp" title="보도자료" target="_blank">보도자료</a>
								</li>
								<li><a href="/contents/MDC/COMS/board/MDCCOMS010_S1.cmd?boardId=MDCINFO004" title="공지사항">공지사항</a>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0201" title="기본 통계" data-depth-menu-id="MDC0201" class="jsMenuLink">기본 통계</a>
								</li>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0202" title="이슈 통계" data-depth-menu-id="MDC0202" class="jsMenuLink">이슈 통계</a>
								</li>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0203" title="공매도 통계" data-depth-menu-id="MDC0203" class="jsMenuLink">공매도 통계</a>
								</li>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0204" title="통계DB 정보" data-depth-menu-id="MDC0204" class="jsMenuLink">통계DB 정보</a>
								</li>
								<li><a href="javascript:window.open('/contents/MDC/STAT/dataDic/dictionary/index.cmd?menuId=MDC0205', 'MDC0205', 'width=1000,height=800,resizable=yes'); void(0);" title="정보데이터 종합사전">정보데이터 종합사전</a>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0301" title="주요 통계" data-depth-menu-id="MDC0301" class="jsMenuLink">주요 통계</a>
								</li>
								<li><a href="/contents/MDC/MDI/mdiLoader/index.cmd?menuId=MDC0302" title="순위 통계" data-depth-menu-id="MDC0302" class="jsMenuLink">순위 통계</a>
								</li>
								<li><a href="/contents/MDC/EASY/visualController/MDCEASY001.cmd" title="시각화 통계">시각화 통계</a>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li><a href="/contents/MDC/HARD/hardController/MDCHARD002.cmd" title="기업분석보고서" target="_blank">기업분석보고서</a>
								</li>
								<li><a href="/contents/MDC/HARD/hardController/MDCHARD008.cmd" title="투자분석정보">투자분석정보</a>
								</li>
								<li><a href="/contents/MDC/HARD/hardController/MDCHARD054.cmd" title="이용안내" target="_blank">이용안내</a>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li><a href="/contents/MDC/MGZN/publication/MDCMGZN001.cmd?menuId=MDCMGZN001" title="시장동향">시장동향</a>
								</li>
								<li><a href="/contents/MDC/MGZN/publication/MDCMGZN001.cmd?menuId=MDCMGZN014" title="발간자료">발간자료</a>
								</li>
							</ul>
						</li>
						<li>
							<ul>
								<li><a href="/contents/MDC/DATA/datasale/index.cmd?viewNm=MDCDATA001" title="데이터 구입">데이터 구입</a>
								</li>
								<li><a href="/contents/MDC/DATA/datasale/index.cmd?viewNm=MDCDATA400" title="데이터 분배">데이터 분배</a>
								</li>
								<li><a href="/contents/MDC/DATA/datasale/index.cmd?viewNm=MDCDATA403" title="지수 라이센스">지수 라이센스</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- //Global Navigation Bar -->
		</section>
</template>