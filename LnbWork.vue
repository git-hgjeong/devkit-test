<template>
    <div>
			<aside class="lnb" id="jsMdiMenu">
				<div class="lnb_hide"></div>
				<div class="lnb_search">
					<input type="text" id="jsMdiMenuSearchValue" placeholder="화면번호/화면명 검색">
					<a href="javascript:void(0);" id="jsMdiMenuSearchButton">
						<img src="http://data.krx.co.kr/templets/mdc/img/btn_search2.png" />
					</a>
				</div>
				<div class="lnb_searched" style="display: none;">
					<ol id="jsMdiSearchResultWrap"></ol>
				</div>
				<div class="lnb_tree">
					<ul class="lnb_tree_wrap">
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0201"> <a href="javascript:void(0);">기본 통계</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li><a href="javascript:void(0);">지수</a>
												<ul>
													<li> <a href="javascript:void(0);">주가지수</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010101">전체지수 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010102">전체지수 등락률</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010103">개별지수 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010104">전체지수 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010105">개별지수 종합정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010106">지수구성종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010107">PER/PBR/배당수익률</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">채권지수</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010201">전체지수 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010202">개별지수 시세 추이</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">파생 및 기타지수</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010301">전체지수 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010302">전체지수 등락률</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010303">개별지수 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010304">전체지수 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201010305">개별지수 종합정보</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">주식</a>
												<ul>
													<li> <a href="javascript:void(0);">종목시세</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020101">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020102">전종목 등락률</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020103">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020104">개별종목 시세 추이(월)</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">종목정보</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020201">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020202">전종목 지정내역</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020203">개별종목 종합정보</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">거래실적</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020301">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020302">투자자별 거래실적(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020303">투자자별 순매수상위종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020304">대량매매(전일)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020305">프로그램매매</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">기타증권</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020401">REITs 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020402">뮤추얼펀드 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020403">선박투자회사 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020404">인프라투융자회사 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020405">수익증권 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020406">신주인수권증권 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020407">신주인수권증서 시세</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">세부안내</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020501">상장회사 상세검색</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020502">PER/PBR/배당수익률(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020503">외국인보유량 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020504">외국인보유량(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020505">업종별 분포</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201020506">업종분류 현황</a>
															</li>
															<li> <a href="javascript:void(0);">대용가격</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020102050701">주식 대용가</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020102050702">수익증권 대용가</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020102050703">뮤추얼펀드 대용가</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">증권상품</a>
												<ul>
													<li> <a href="javascript:void(0);">ETF</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030101">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030102">전종목 등락률</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030103">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030104">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030105">개별종목 종합정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030106">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030107">투자자별 거래실적(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030108">PDF(Portfolio Deposit File)</a>
															</li>
															<li> <a href="javascript:void(0);">세부안내</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010901">ETF 상세검색</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010902">액티브ETF 실적</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010903">액티브ETF 편입자산현황</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010904">추적오차율 추이</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010905">괴리율 추이</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010909">장마감 괴리율 추이</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010906">합성ETF 거래상대방 위험</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010907">합성ETF 기초지수 및 담보 관리</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103010908">분기별 LP평가</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">ETN</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030201">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030202">전종목 등락률</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030203">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030204">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030205">개별종목 종합정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030206">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030207">투자자별 거래실적(개별종목)</a>
															</li>
															<li> <a href="javascript:void(0);">세부안내</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020801">ETN 상세검색</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020802">기초지수 구성종목</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020803">발행사 신용등급 및 NCR</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020804">발행사 신용위험지표</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020805">손실제한ETN 조기상환 조건</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020806">손실제한ETN 레인지 어크루얼 참고사항</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020807">괴리율 추이</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020809">장마감 괴리율 추이</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103020808">월별 LP평가</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">ELW</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030301">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030302">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030303">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030304">개별종목 종합정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030305">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201030306">기초자산별 거래실적</a>
															</li>
															<li> <a href="javascript:void(0);">세부안내</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030701">개별종목 잔존만기현황</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030702">개별종목 만기손익현황</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030704">조기종료 접근도</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030705">조기종료 발생내역</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030706">기초자산별 상장현황</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030707">발행사별 상장현황</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030708">발행사 신용위험지표</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103030709">분기별 LP평가</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">채권</a>
												<ul>
													<li> <a href="javascript:void(0);">종목시세</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040101">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040102">개별종목 시세 추이</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">종목정보</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040201">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040202">개별종목 종합정보</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">거래실적</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040301">종류별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040302">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040303">국채지표종목 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040304">Repo 거래실적</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">세부안내</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040401">개별종목 시가평가 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201040402">소액채권 신고가격 추이</a>
															</li>
															<li> <a href="javascript:void(0);">상장현황</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040301">상장채권 상세검색</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040302">상장채권 발행정보</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040303">상장유형별 내역</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040304">상장금액조정 내역</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040305">중도상환</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040306">채권상장폐지</a>
																	</li>
																</ul>
															</li>
															<li> <a href="javascript:void(0);">채권수익률</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040401">장외 채권수익률</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040402">지표수익률</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040403">스트립 단기금리</a>
																	</li>
																</ul>
															</li>
															<li> <a href="javascript:void(0);">대용가격</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040501">채권 대용가</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040502">발행기관별 채권 대용가</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040503">유형별 채권 대용가</a>
																	</li>
																</ul>
															</li>
															<li> <a href="javascript:void(0);">신용등급</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040601">발행기관별 신용등급</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040602">신용등급별 상장현황</a>
																	</li>
																</ul>
															</li>
															<li> <a href="javascript:void(0);">주식관련채권</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040701">전환사채 투자지표</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040702">주식관련채권 권리행사</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104040703">주식관련채권 행사가액</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">파생상품</a>
												<ul>
													<li> <a href="javascript:void(0);">종목시세</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050101">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050102">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050103">최근월물 시세 추이(선물)</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">종목정보</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050201">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050202">개별종목 종합정보</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">거래실적</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050301">전체상품 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050302">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050303">협의대량거래실적 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050304">기초자산별 거래실적(주식선물/옵션)</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">세부안내</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050401">베이시스 추이(선물)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050402">내재변동성 추이(옵션)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050403">P/C Ratio 추이(옵션)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201050404">행사가격/만기별 가격표(옵션)</a>
															</li>
															<li> <a href="javascript:void(0);">외부기관지표</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020105040501">돈육시세 동향</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020105040502">국제금시세 동향</a>
																	</li>
																</ul>
															</li>
															<li> <a href="javascript:void(0);">투자유의사항</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020105040601">최종결제가격 급변</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020105040602">낮은 권리행사 비율</a>
																	</li>
																</ul>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="http://regulation.krx.co.kr/contents/RGL/06/06020800/RGL06020800.jsp" target="_blank">증거금률 및 산출변수 변경내역</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">일반상품</a>
												<ul>
													<li> <a href="javascript:void(0);">석유</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060101">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060102">유종별 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060103">참가자별 거래실적</a>
															</li>
															<li> <a href="javascript:void(0);">세부안내</a>
																<ul>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020106010401">국내유가(주유소) 동향</a>
																	</li>
																	<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020106010402">국제유가 동향</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">금</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060201">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060202">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060203">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060204">개별종목 종합정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060205">투자자별 거래실적</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060206">협의대량거래실적 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060207">국제금시세 동향</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">배출권</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060301">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060302">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060303">전종목 기본정보</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201060304">개별종목 종합정보</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">해외연계시장</a>
												<ul>
													<li> <a href="javascript:void(0);">EUREX</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070201">전종목 시세</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070202">개별종목 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070203">장개시전협의거래실적 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070204">권리유형별 거래실적 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070205">권리유형별 거래실적 추이(월)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070206">EURO STOXX 50 시세 추이</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070207">만기별 가격표(옵션)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070208">주요통계 추이(옵션)</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">동경거래소 시세</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0201070301">개별종목 종합정보</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0202" style="display: none;"> <a href="javascript:void(0);">이슈 통계</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li> <a href="javascript:void(0);">IPO 관련 통계</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020101">신규상장종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020102">상장이후 최고/최저가</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020103">공모가대비 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">자사주취득/처분</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020301">자사주취득/처분종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020302">자사주취득/처분 내역(개별종목)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020303">공시일전후 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">배당종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020401">배당종목 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">기업집단</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020501">기업집단별 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020502">기업집단별 기업 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">매매거래정지종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020601">매매거래정지종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020602">매매거래정지 내역(개별종목)</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">관리종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020701">관리종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020702">관리종목 지정 내역(개별종목)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020703">지정일전후 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">투자주의환기종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020801">투자주의환기종목(코) 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020802">투자주의환기종목(코) 지정 내역(개별종목)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020803">지정일전후 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">불성실공시법인</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020901">불성실공시법인 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020902">불성실공시법인 지정 내역(개별종목)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02020903">지정일전후 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">초저유동성종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021401">초저유동성종목 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">상장주식수 부족종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021601">상장주식수 부족 우선주 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">변동성완화장치 발동종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021501">변동성완화장치 발동종목 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">단기과열종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021001">단기과열종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021002">단기과열종목 지정 내역(개별종목)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021003">지정일전후 등락률</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">시장경보종목</a>
												<ul>
													<li> <a href="javascript:void(0);">투자주의종목</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110101">투자주의종목 현황</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110102">투자주의종목 지정 내역(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110103">지정일전후 등락률</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">투자경고종목</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110201">투자경고종목 현황</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110202">투자경고종목 지정 내역(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110203">지정일전후 등락률</a>
															</li>
														</ul>
													</li>
													<li> <a href="javascript:void(0);">투자위험종목</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110301">투자위험종목 현황</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110302">투자위험종목 지정 내역(개별종목)</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202110303">지정일전후 등락률</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">정리매매종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021201">정리매매종목 현황</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">상장폐지종목</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021301">상장폐지종목 현황</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02021302">상장폐지종목 시세 추이</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0203" style="display: none;"> <a href="javascript:void(0);">공매도 통계</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li> <a href="javascript:void(0);">공매도 종합정보</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030101">개별종목 공매도 종합정보</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">공매도 거래</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030201">개별종목 공매도 거래</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030202">개별업종 공매도 거래</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030203">투자자별 공매도 거래</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030204">공매도 거래 상위 50종목</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">공매도 잔고</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030301">개별종목 공매도 잔고</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030302">개별업종 공매도 잔고</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030303">공매도 잔고 대량보유자</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030304">공매도 잔고 상위 50종목</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">공매도 과열</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030401">공매도 과열종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030402">공매도 과열종목 지정기준</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">대차 정보</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="http://freesis.kofia.or.kr/stat/FreeSIS.do?parentDivId=MSIS10000000000000&serviceId=STATSCU0100000140" target="_blank">대차거래 추이</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="http://freesis.kofia.or.kr/stat/FreeSIS.do?parentDivId=MSIS10000000000000&serviceId=STATSCU0100000170" target="_blank">업종별 대차거래 추이</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="http://freesis.kofia.or.kr/stat/FreeSIS.do?parentDivId=MSIS10000000000000&serviceId=STATSCU0100000150" target="_blank">참여자별 대차거래 내역</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="http://freesis.kofia.or.kr/stat/FreeSIS.do?parentDivId=MSIS10000000000000&serviceId=STATSCU0100000180" target="_blank">대차거래 상위 10종목</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">공매도 제도</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030601">공매도 의의</a>
													</li>
													<li> <a href="javascript:void(0);">공매도 관리제도</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0203060201">결제불이행 방지를 위한 관리방안</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0203060202">시장불안 방지를 위한 관리방안</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0203060203">투명성 강화를 위한 관리방안</a>
															</li>
														</ul>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030603">공매도 규제연혁</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030604">공매도 법령체계</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC02030605">Q&A</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0204" style="display: none;"> <a href="javascript:void(0);">통계DB 정보</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li> <a href="javascript:void(0);">기본 통계</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020101_DB">지수</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020102_DB">주식</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020103_DB">증권상품</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020104_DB">채권</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020105_DB">파생상품</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020106_DB">일반상품</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC020107_DB">해외연계시장</a>
													</li>
												</ul>
											</li>
											<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0202_DB">이슈 통계</a>
											</li>
											<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0203_DB">공매도 통계</a>
											</li>
											<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0301_DB">주요 통계</a>
											</li>
											<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302_DB">순위 통계</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0301" style="display: none;"> <a href="javascript:void(0);">주요 통계</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li> <a href="javascript:void(0);">지수</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010101">주가지수 월별 추이</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">주식</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010201">종합정보(일)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010202">주요통계 추이</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010203">신규상장 추이(월)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010204">신규상장 유형별 추이(연)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010205">상장종목 주요기록</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">증권상품</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010301">종합정보(일)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010302">주요통계 추이</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">채권</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010401">종합정보(일)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010402">주요통계 추이</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">파생상품</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010501">종합정보(일)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010502">주요통계 추이</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">일반상품</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010601">종합정보(일)</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03010602">주요통계 추이</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="on CI-MDI-MENU-ALWAYS-ACTIVE" data-depth-menu-id="MDC0302" style="display: none;"> <a href="javascript:void(0);">순위 통계</a>
							<ul style="display: block;">
								<li class="freak">
									<button>
										<img src="http://data.krx.co.kr/templets/mdc/img/blit_all.png" /><span>전체열기</span>
									</button>
								</li>
								<li>
									<div class="lnb_tree_box">
										<ul class="lnb_tree_root">
											<li> <a href="javascript:void(0);">주식</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020101">주가등락률 상·하위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020102">거래 상·하위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020103">시가총액 상·하위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020104">상·하한가 종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020105">환산주가 상위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020106">회전율 상위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020107">외국인보유 상위 50종목</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">증권상품</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020201">주가등락률 상·하위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020202">거래 상·하위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020203">가치총액 상·하위 50종목</a>
													</li>
													<li> <a href="javascript:void(0);">ELW 내재변동성</a>
														<ul>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020401">LP별 내재변동성의 일관성 분포 현황</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020402">일중(패리티구간) 상위 종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020403">일중(기초자산) 상위 종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020404">전일(패리티구간) 상위 종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020405">전일(기초자산) 상위 종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020406">평균(패리티구간) 상위 종목</a>
															</li>
															<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC0302020407">평균(기초자산) 상위 종목</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">채권</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020301">수익률 상위 50종목</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020302">거래 상위 50종목</a>
													</li>
												</ul>
											</li>
											<li> <a href="javascript:void(0);">파생상품</a>
												<ul>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020401">거래 상·하위 상품</a>
													</li>
													<li class="CI-MDI-MENU-NO-CHILD"> <a href="javascript:void(0);" data-menu-id="MDC03020402">주식선물·옵션 거래 상·하위 상품</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div> <span class="bottomround"></span>
			</aside>
			<button type="button" class="btn_lnb" id="jsMdiMenuButton" title="메뉴 열기/닫기"></button>        
    </div>    
</template>
<script>
const menu = [
                {"data-menu-id":"MDC020101", "title":"지수"},
                {"data-menu-id":"MDC02010101", "title":"주가지수"},
                {"data-menu-id":"MDC0201010101", "title":"전체지수 시세"},
                {"data-menu-id":"MDC0201010102", "title":"전체지수 등락률"},
                {"data-menu-id":"MDC0201010103", "title":"개별지수 시세 추이"},
                {"data-menu-id":"MDC0201010104", "title":"전체지수 기본정보"},
                {"data-menu-id":"MDC0201010105", "title":"개별지수 종합정보"},
                {"data-menu-id":"MDC0201010106", "title":"지수구성종목"},
                {"data-menu-id":"MDC0201010107", "title":"PER/PBR/배당수익률"},

                {"data-menu-id":"MDC02010102", "title":"채권지수"},
                {"data-menu-id":"MDC0201010201", "title":"전체지수 시세"},
                {"data-menu-id":"MDC0201010202", "title":"개별지수 시세 추이"},
                
                {"data-menu-id":"MDC02010103", "title":"파생 및 기타지수"},
                {"data-menu-id":"MDC0201010301", "title":"전체지수 시세"},
                {"data-menu-id":"MDC0201010302", "title":"전체지수 등락률"},
                {"data-menu-id":"MDC0201010303", "title":"개별지수 시세 추이"},
                {"data-menu-id":"MDC0201010304", "title":"전체지수 기본정보"},
                {"data-menu-id":"MDC0201010305", "title":"개별지수 종합정보"},

                {"data-menu-id":"MDC020102", "title":"주식"},
                {"data-menu-id":"MDC02010201", "title":"종목시세"},
                {"data-menu-id":"MDC0201020101", "title":"전종목 시세"},
                {"data-menu-id":"MDC0201020102", "title":"전종목 등락률"},
                {"data-menu-id":"MDC0201020103", "title":"개별종목 시세 추이"},
                {"data-menu-id":"MDC0201020104", "title":"개별종목 시세 추이(월)"},
                {"data-menu-id":"", "title":"종목정보"},
                {"data-menu-id":"MDC0201020201", "title":"전종목 기본정보"},
                {"data-menu-id":"MDC0201020202", "title":"전종목 지정내역"},
                {"data-menu-id":"MDC0201020203", "title":"개별종목 종합정보"},
                {"data-menu-id":"", "title":"거래실적"},
                {"data-menu-id":"MDC0201020301", "title":"투자자별 거래실적"},
                {"data-menu-id":"MDC0201020302", "title":"투자자별 거래실적(개별종목)"},
                {"data-menu-id":"MDC0201020303", "title":"투자자별 순매수상위종목"},
                {"data-menu-id":"MDC0201020304", "title":"대량매매(전일)"},
                {"data-menu-id":"MDC0201020305", "title":"프로그램매매"},
                {"data-menu-id":"MDC02010204", "title":"기타증권"},
                {"data-menu-id":"MDC0201020401", "title":"REITs 시세"},
                {"data-menu-id":"MDC0201020402", "title":"뮤추얼펀드 시세"},
                {"data-menu-id":"MDC0201020403", "title":"선박투자회사 시세"},
                {"data-menu-id":"MDC0201020404", "title":"인프라투융자회사 시세"},
                {"data-menu-id":"MDC0201020405", "title":"수익증권 시세"},
                {"data-menu-id":"MDC0201020406", "title":"신주인수권증권 시세"},
                {"data-menu-id":"MDC0201020407", "title":"신주인수권증서 시세"},

                {"data-menu-id":"MDC02010205", "title":"세부안내"},
                {"data-menu-id":"MDC0201020501", "title":"상장회사 상세검색"},
                {"data-menu-id":"MDC0201020502", "title":"PER/PBR/배당수익률(개별종목)"},
                {"data-menu-id":"MDC0201020503", "title":"외국인보유량 추이"},
                {"data-menu-id":"MDC0201020504", "title":"외국인보유량(개별종목)"},
                {"data-menu-id":"MDC0201020505", "title":"업종별 분포"},
                {"data-menu-id":"MDC0201020506", "title":"업종분류 현황"},

                {"data-menu-id":"MDC0201020507", "title":"대용가격"},
                {"data-menu-id":"MDC020102050701", "title":"주식 대용가"},
                {"data-menu-id":"MDC020102050702", "title":"수익증권 대용가"},
                {"data-menu-id":"MDC020102050703", "title":"뮤추얼펀드 대용가"}
            ];

export default {
    
}
</script>