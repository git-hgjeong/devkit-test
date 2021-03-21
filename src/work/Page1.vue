<template>
<div class="CI-MDI-CONTENT active">
    <h2 class="tit_h2">
      <p>[41001] 전체지수 시세</p>
      <p class="address_top">
          <span><img src="http://data.krx.co.kr/templets/mdc/img/ico_house.png" alt="홈으로 이동" /></span>
          <span>쉽게 보는 통계</span>
          <span>주요 통계</span>
          <span>지수</span>
          <span>주가지수 월별 추이</span>
      </p>
    </h2>
      <div class="search_tb">
          <div data-component="search">
              <table>
                  <colgroup>
                      <col class="fix_w_s5" />
                      <col />
                  </colgroup>
                  <tbody>
                      <tr>
                          <th scope="row">지수구분</th>
                          <td>
                              <input type="radio" name="indTpCd" id="indTpCd_0_0" value="2" checked="" /><label for="indTpCd_0_0">KRX</label><input type="radio" name="indTpCd" id="indTpCd_0_1" value="3" />
                              <label for="indTpCd_0_1">KOSPI</label><input type="radio" name="indTpCd" id="indTpCd_0_2" value="4" /><label for="indTpCd_0_2">KOSDAQ</label><input type="radio" name="indTpCd" id="indTpCd_0_3" value="T" />
                              <label for="indTpCd_0_3">테마</label>
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">지수명</th>
                          <td>
                              <select class="selectbox" name="idxTpCd" id="idxTpCd">
                                  <option value="5300">KRX 300</option>
                                  <option value="5600">KTOP 30</option>
                                  <option value="5042">KRX 100</option>
                                  <option value="5301">KRX Mid 200</option>
                                  <option value="5043">KRX 자동차</option>
                                  <option value="5044">KRX 반도체</option>
                                  <option value="5045">KRX 헬스케어</option>
                                  <option value="5046">KRX 은행</option>
                                  <option value="5048">KRX 에너지화학</option>
                                  <option value="5049">KRX 철강</option>
                                  <option value="5051">KRX 방송통신</option>
                                  <option value="5052">KRX 건설</option>
                                  <option value="5054">KRX 증권</option>
                                  <option value="5055">KRX 기계장비</option>
                                  <option value="5056">KRX 보험</option>
                                  <option value="5057">KRX 운송</option>
                                  <option value="5061">KRX 경기소비재</option>
                                  <option value="5062">KRX 필수소비재</option>
                                  <option value="5063">KRX 미디어&amp;엔터테인먼트</option>
                                  <option value="5064">KRX 정보기술</option>
                                  <option value="5065">KRX 유틸리티</option>
                                  <option value="5351">KRX 300 정보기술</option>
                                  <option value="5352">KRX 300 금융</option>
                                  <option value="5353">KRX 300 자유소비재</option>
                                  <option value="5354">KRX 300 산업재</option>
                                  <option value="5355">KRX 300 헬스케어</option>
                                  <option value="5356">KRX 300 커뮤니케이션서비스</option>
                                  <option value="5357">KRX 300 소재</option>
                                  <option value="5358">KRX 300 필수소비재</option>
                              </select>

                              <input type="hidden" name="idx_upclss_cd" value="01" />
                              <input type="hidden" name="idx_midclss_cd" value="01" />
                          </td>
                      </tr>
                      <tr>
                          <th scope="row">조회기간</th>
                          <td>
                              <input type="radio" name="CI-DATE-RADIO_strtYy_0" id="CI-DATE-RADIO-MONTH_strtYy_0" value="month" checked="" /><label for="CI-DATE-RADIO-MONTH_strtYy_0">월</label>
                              <input type="radio" name="CI-DATE-RADIO_strtYy_0" id="CI-DATE-RADIO-YEAR_strtYy_0" value="year" checked="" /><label for="CI-DATE-RADIO-YEAR_strtYy_0">년</label>
                              <div class="CI-DATE-SELECT-WRAP">
                                  <select name="strtYy">
                                      <option value="2021">2021</option>
                                      <option value="2020" selected="">2020</option>
                                      <option value="2019">2019</option>
                                      <option value="2018">2018</option>
                                      <option value="2017">2017</option>
                                      <option value="2016">2016</option>
                                      <option value="2015">2015</option>
                                      <option value="2014">2014</option>
                                      <option value="2013">2013</option>
                                      <option value="2012">2012</option>
                                      <option value="2011">2011</option>
                                      <option value="2010">2010</option>
                                  </select>
                                  <select name="basMm1">
                                      <option value="01">01</option>
                                      <option value="02" selected="">02</option>
                                      <option value="03">03</option>
                                      <option value="04">04</option>
                                      <option value="05">05</option>
                                      <option value="06">06</option>
                                      <option value="07">07</option>
                                      <option value="08">08</option>
                                      <option value="09">09</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                  </select>
                                  <span class="span-middle">~</span>
                                  <select name="endYy">
                                      <option value="2021" selected="">2021</option>
                                      <option value="2020">2020</option>
                                      <option value="2019">2019</option>
                                      <option value="2018">2018</option>
                                      <option value="2017">2017</option>
                                      <option value="2016">2016</option>
                                      <option value="2015">2015</option>
                                      <option value="2014">2014</option>
                                      <option value="2013">2013</option>
                                      <option value="2012">2012</option>
                                      <option value="2011">2011</option>
                                      <option value="2010">2010</option>
                                  </select>
                                  <select name="basMm2">
                                      <option value="01">01</option>
                                      <option value="02" selected="">02</option>
                                      <option value="03">03</option>
                                      <option value="04">04</option>
                                      <option value="05">05</option>
                                      <option value="06">06</option>
                                      <option value="07">07</option>
                                      <option value="08">08</option>
                                      <option value="09">09</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                  </select>
                              </div>

                              <input type="hidden" name="pdTpCd" value="M" />
                          </td>
                      </tr>
                  </tbody>
              </table>

              <a href="javascript:void(0);" class="btn_black btn_component_search" name="search" id="jsSearchButton">조회</a>

              <button type="button" class="CI-MDI-COMPONENT-BUTTON btn_close_tggle">Close</button>
          </div>
      </div>
          <div class="CI-MDI-UNIT-WRAP">
              <div class="time CI-MDI-UNIT" data-view-sequence="0" data-index="0">
                  <p class="CI-MDI-UNIT-TIME"><img src="http://data.krx.co.kr/templets/mdc/img/ico_clock.png" alt="시계" />2021.02.21 PM 06:01:04&nbsp;<span>(20분 지연 정보)</span></p>

                  <p>
                      <select class="CI-MDI-UNIT-SHARE" name="share" style="display: inline-block;">
                          <option value="1">주</option>
                          <option value="2" selected="">천주</option>
                          <option value="3">백만주</option>
                      </select>

                      <select class="CI-MDI-UNIT-MONEY" name="money" style="display: inline-block;">
                          <option value="1">원</option>
                          <option value="2">천원</option>
                          <option value="3" selected="">백만원</option>
                          <option value="4">십억원</option>
                          <option value="5">조원</option>
                      </select>

                      <button type="button" class="CI-MDI-UNIT-FILTER"><img src="http://data.krx.co.kr/templets/mdc/img/btn_time2.png" title="컬럼필터 팝업" /></button>
                      <button type="button" class="CI-MDI-UNIT-DOWNLOAD"><img src="http://data.krx.co.kr/templets/mdc/img/btn_time1.png" title="다운로드 팝업" /></button>
                  </p>
              </div>
          </div>

          <input type="hidden" name="csvxls_isNo" value="false" />

          <div class="CI-GRID-AREA CI-GRID-ON-WINDOWS CI-GRID-CLICKED" style="display: block;">
              <div class="CI-GRID-WRAPPER" style="padding-right: 15px; padding-bottom: 15px;">
                  <div class="CI-GRID-MAIN-WRAPPER" style="overflow: hidden; position: relative; z-index: 3;">
                      <div class="CI-GRID-HEADER-WRAPPER">
                          <div class="CI-GRID-HEADER-SCROLLER" style="overflow: hidden; width: 883px;">
                              <div class="CI-GRID-HEADER-INNER" style="position: relative; width: 1060px;">
                                  <table class="CI-GRID-HEADER-TABLE" aria-hidden="true">
                                      <thead class="CI-GRID-HEADER-TABLE-THEAD">
                                          <tr style="height: 34px; max-height: 34px;">
                                              <td scope="col" rowspan="2" data-name="BAS_YYMM" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">연월</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MMEND_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">종가</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="CMP_IDX" style="width: 70px; min-width: 70px; max-width: 70px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">대비</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="FLUC_RT" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">등락률</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" colspan="2" data-name="CLSPRC_BAS" style="width: 160px; min-width: 160px; max-width: 160px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">종가기준</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS"></div>
                                                  </div>
                                              </td>
                                              <td scope="col" colspan="2" data-name="REBULSS_BAS" style="width: 160px; min-width: 160px; max-width: 160px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">장중기준</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS"></div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MM_ACC_TRDVOL" style="width: 100px; min-width: 100px; max-width: 100px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">거래량</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MM_ACC_TRDVAL" style="width: 150px; min-width: 150px; max-width: 150px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">거래대금</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MKTCAP" style="width: 180px; min-width: 180px; max-width: 180px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">시가총액</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                          <tr style="height: 34px; max-height: 34px;">
                                              <td scope="col" data-parent="CLSPRC_BAS" data-name="HGST_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최고</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="CLSPRC_BAS" data-name="LWST_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최저</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="REBULSS_BAS" data-name="HGSTPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최고</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="REBULSS_BAS" data-name="LWSTPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최저</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                      </thead>
                                  </table>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 155px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 225px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 305px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 725px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 875px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 1050px; height: 68px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 34px; left: 385px; height: 34px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 34px; left: 465px; height: 34px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 34px; left: 545px; height: 34px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 34px; left: 620px; height: 34px;"></div>
                              </div>
                          </div>
                      </div>
                      <div class="CI-GRID-BODY-WRAPPER">
                          <div class="CI-GRID-BODY-SCROLLER" style="overflow: hidden; position: relative; height: 473px;">
                              <div class="CI-GRID-BODY-INNER" style="position: relative; min-height: 1px; width: 1060px;">
                                  <table class="CI-GRID-BODY-TABLE" style="z-index: 1; position: relative; top: 0px;">
                                      <thead class="CI-GRID-BODY-TABLE-THEAD">
                                          <tr>
                                              <th scope="col" data-origin="BAS_YYMM" data-name="BAS_YYMM" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">연월</th>
                                              <th scope="col" data-origin="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">종가</th>
                                              <th scope="col" data-origin="CMP_IDX" data-name="CMP_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 70px; min-width: 70px; max-width: 70px;">대비</th>
                                              <th scope="col" data-origin="FLUC_RT" data-name="FLUC_RT" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">등락률</th>
                                              <th scope="col" data-parent="CLSPRC_BAS" data-name="HGST_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최고</th>
                                              <th scope="col" data-parent="CLSPRC_BAS" data-name="LWST_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최저</th>
                                              <th scope="col" data-parent="REBULSS_BAS" data-name="HGSTPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최고</th>
                                              <th scope="col" data-parent="REBULSS_BAS" data-name="LWSTPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최저</th>
                                              <th scope="col" data-origin="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 100px; min-width: 100px; max-width: 100px;">거래량</th>
                                              <th scope="col" data-origin="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 150px; min-width: 150px; max-width: 150px;">거래대금</th>
                                              <th scope="col" data-origin="MKTCAP" data-name="MKTCAP" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 180px; min-width: 180px; max-width: 180px;">시가총액</th>
                                          </tr>
                                      </thead>
                                      <tbody class="CI-GRID-BODY-TABLE-TBODY">
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2021/02</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,916.64</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">69.29</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+3.75</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,954.74</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,899.51</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,970.60</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,831.07</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">3,964,244</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">217,445,927</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">2,034,082,511</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2021/01</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,847.35</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">52.54</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+2.93</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,996.98</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,837.76</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">2,049.48</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,790.09</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">8,465,525</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">487,975,614</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,957,804,667</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/12</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,794.81</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">201.75</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+12.66</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,794.81</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,622.07</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,798.14</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,606.11</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">7,397,846</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">373,053,079</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,901,558,532</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/11</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,593.06</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">200.85</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+14.43</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,621.35</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,412.34</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,630.93</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,390.71</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">7,023,595</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">274,478,601</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,677,918,559</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/10</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,392.21</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown2.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-DOWN">43.54</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-DOWN">-3.03</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,480.20</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,392.21</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,490.11</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,392.12</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">3,664,592</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">167,860,577</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,468,149,555</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/09</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,435.75</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">6.66</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+0.47</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,504.02</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,401.33</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,509.07</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,397.94</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">7,016,384</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">275,878,298</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,511,331,474</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/08</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,429.09</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">41.59</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+3.00</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,495.85</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,390.09</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,509.00</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,380.08</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">6,465,180</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">315,606,997</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,513,453,217</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/07</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,387.50</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">92.66</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+7.16</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,398.36</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,293.16</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,408.71</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,289.67</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">6,283,263</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">282,396,620</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,454,379,655</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/06</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,294.84</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">56.78</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+4.59</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,345.95</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,237.04</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,360.23</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,237.04</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">7,501,815</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">286,114,387</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,366,141,955</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/05</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,238.06</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">50.62</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+4.26</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,238.06</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,154.69</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,252.82</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,153.71</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">4,824,531</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">183,288,026</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,297,448,765</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/04</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,187.44</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown1.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-UP">98.10</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-UP">+9.01</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,187.44</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,041.83</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,194.22</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,028.58</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">6,705,318</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">210,918,113</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,242,529,172</td>
                                          </tr>
                                          <tr class="CI-GRID-ODD">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/03</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,089.34</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown2.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-DOWN">131.31</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-DOWN">-10.76</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,282.50</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">907.07</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,285.56</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">895.67</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">6,975,414</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">240,903,307</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,126,564,066</td>
                                          </tr>
                                          <tr class="CI-GRID-EVEN">
                                              <td class="CI-GRID-ALIGN-CENTER" data-bind="BAS_YYMM" data-name="BAS_YYMM">2020/02</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX">1,220.65</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="CMP_IDX" data-name="CMP_IDX">
                                                  <img class="CI-GRID-UPDOWN-IMG" src="http://data.krx.co.kr/templets/mdc/img/ico_updown2.png" alt="등락구분" /><span class="CI-GRID-UPDOWN-DOWN">71.16</span>
                                              </td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="FLUC_RT" data-name="FLUC_RT"><span class="CI-GRID-UPDOWN-DOWN">-5.51</span></td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGST_CLSPRC_IDX" data-name="HGST_CLSPRC_IDX">1,376.79</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWST_CLSPRC_IDX" data-name="LWST_CLSPRC_IDX">1,220.65</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="HGSTPRC_IDX" data-name="HGSTPRC_IDX">1,383.26</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="LWSTPRC_IDX" data-name="LWSTPRC_IDX">1,216.81</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL">3,273,565</td>
                                              <td class="CI-GRID-ALIGN-RIGHT" data-bind="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL">135,298,700</td>
                                              <td class="CI-GRID-ALIGN-RIGHT CI-GRID-CELL-LAST" data-bind="MKTCAP" data-name="MKTCAP">1,265,094,547</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="CI-FREEZE-SCROLLER" style="position: absolute; top: 68px; left: 0px; z-index: 2; overflow: scroll; width: 898px; height: 488px;">
                      <div class="CI-FREEZE-SCROLLER-INNER" style="min-height: 1px; width: 1060px; height: 364px;"></div>
                  </div>
                  <div class="CI-GRID-RECT-RIGHT-TOP" style="position: absolute; top: 0px; right: -1px; z-index: 4; width: 16px; height: 68px;"></div>
                  <div class="CI-GRID-BORDER-RIGHT" style="position: absolute; top: 0px; bottom: 0px; right: 15px; z-index: 3;"></div>
                  <div class="CI-GRID-BORDER-BOTTOM" style="position: absolute; left: 0px; right: 0px; bottom: 15px; z-index: 3;"></div>
              </div>
              <div class="CI-FREEZE-INDICATOR-LEFT"></div>
              <div class="CI-FREEZE-INDICATOR-RIGHT"></div>
              <a href="#" class="CI-GRID-FOCUS-ESCAPER">그리드에서 빠져나오시려면 ESC키를 눌러주세요.</a>
          </div>

          <div class="CI-GRID-AREA CI-GRID-ON-WINDOWS" style="display: none;">
              <div class="CI-GRID-WRAPPER" style="padding-right: 15px; padding-bottom: 15px;">
                  <div class="CI-GRID-MAIN-WRAPPER" style="overflow: hidden; position: relative; z-index: 3;">
                      <div class="CI-GRID-HEADER-WRAPPER">
                          <div class="CI-GRID-HEADER-SCROLLER" style="overflow: hidden; width: 0px;">
                              <div class="CI-GRID-HEADER-INNER" style="position: relative; width: 1060px;">
                                  <table class="CI-GRID-HEADER-TABLE" aria-hidden="true">
                                      <thead class="CI-GRID-HEADER-TABLE-THEAD">
                                          <tr style="height: 34px; max-height: 34px;">
                                              <td scope="col" rowspan="2" data-name="BAS_YY" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">연도</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MMEND_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">종가</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="CMP_IDX" style="width: 70px; min-width: 70px; max-width: 70px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">대비</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="FLUC_RT" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">등락률</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" colspan="2" data-name="CLSPRC_BAS" style="width: 160px; min-width: 160px; max-width: 160px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">종가기준</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS"></div>
                                                  </div>
                                              </td>
                                              <td scope="col" colspan="2" data-name="REBULSS_BAS" style="width: 160px; min-width: 160px; max-width: 160px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">장중기준</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS"></div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MM_ACC_TRDVOL" style="width: 100px; min-width: 100px; max-width: 100px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">거래량</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MM_ACC_TRDVAL" style="width: 150px; min-width: 150px; max-width: 150px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">거래대금</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" rowspan="2" data-name="MKTCAP" style="width: 180px; min-width: 180px; max-width: 180px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">시가총액</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                          <tr style="height: 34px; max-height: 34px;">
                                              <td scope="col" data-parent="CLSPRC_BAS" data-name="HGST_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최고</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="CLSPRC_BAS" data-name="LWST_CLSPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최저</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="REBULSS_BAS" data-name="HGSTPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최고</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td scope="col" data-parent="REBULSS_BAS" data-name="LWSTPRC_IDX" style="width: 80px; min-width: 80px; max-width: 80px;">
                                                  <div style="position: relative; display: table; width: 100%;">
                                                      <span class="CI-GRID-HEADER-TITLE">최저</span>
                                                      <div class="CI-GRID-HEADER-MICELINOUS">
                                                          <a
                                                              href="#"
                                                              class="CI-GRID-SORTER CI-GRID-SORTER-NONE"
                                                              title="이 컬럼을 소트 하려면 클릭해 주세요.
          (쉬프트키를 누르면서 클릭하면 멀티소팅이 됩니다.)"
                                                          >
                                                              ↕
                                                          </a>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                      </thead>
                                  </table>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 65px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 95px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 145px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 170px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 75px; height: 0px;"></div>
                                  <div class="CI-GRID-RESIZER ui-draggable ui-draggable-handle" style="top: 0px; left: 70px; height: 0px;"></div>
                              </div>
                          </div>
                      </div>
                      <div class="CI-GRID-BODY-WRAPPER">
                          <div class="CI-GRID-BODY-SCROLLER" style="overflow: hidden; position: relative; height: 541px;">
                              <div class="CI-GRID-BODY-INNER" style="position: relative; min-height: 1px; width: 1060px;">
                                  <table class="CI-GRID-BODY-TABLE" style="z-index: 1; position: relative;">
                                      <thead class="CI-GRID-BODY-TABLE-THEAD">
                                          <tr>
                                              <th scope="col" data-origin="BAS_YY" data-name="BAS_YY" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">연도</th>
                                              <th scope="col" data-origin="MMEND_CLSPRC_IDX" data-name="MMEND_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">종가</th>
                                              <th scope="col" data-origin="CMP_IDX" data-name="CMP_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 70px; min-width: 70px; max-width: 70px;">대비</th>
                                              <th scope="col" data-origin="FLUC_RT" data-name="FLUC_RT" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">등락률</th>
                                              <th scope="col" data-parent="CLSPRC_BAS" data-name="HGST_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최고</th>
                                              <th scope="col" data-parent="CLSPRC_BAS" data-name="LWST_CLSPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최저</th>
                                              <th scope="col" data-parent="REBULSS_BAS" data-name="HGSTPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최고</th>
                                              <th scope="col" data-parent="REBULSS_BAS" data-name="LWSTPRC_IDX" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 80px; min-width: 80px; max-width: 80px;">최저</th>
                                              <th scope="col" data-origin="MM_ACC_TRDVOL" data-name="MM_ACC_TRDVOL" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 100px; min-width: 100px; max-width: 100px;">거래량</th>
                                              <th scope="col" data-origin="MM_ACC_TRDVAL" data-name="MM_ACC_TRDVAL" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 150px; min-width: 150px; max-width: 150px;">거래대금</th>
                                              <th scope="col" data-origin="MKTCAP" data-name="MKTCAP" class="CI-GRID-BODY-TABLE-THEAD-CELL" colspan="1" style="width: 180px; min-width: 180px; max-width: 180px;">시가총액</th>
                                          </tr>
                                      </thead>
                                      <tbody class="CI-GRID-BODY-TABLE-TBODY"></tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="CI-FREEZE-SCROLLER" style="position: absolute; top: 0px; left: 0px; z-index: 2; overflow: scroll; width: 15px; height: 556px;">
                      <div class="CI-FREEZE-SCROLLER-INNER" style="min-height: 1px; width: 1060px; height: 0px;"></div>
                  </div>
                  <div class="CI-GRID-RECT-RIGHT-TOP" style="position: absolute; top: 0px; right: -1px; z-index: 4; width: 16px; height: 0px;"></div>
                  <div class="CI-GRID-BORDER-RIGHT" style="position: absolute; top: 0px; bottom: 0px; right: 15px; z-index: 3;"></div>
                  <div class="CI-GRID-BORDER-BOTTOM" style="position: absolute; left: 0px; right: 0px; bottom: 15px; z-index: 3;"></div>
              </div>
              <div class="CI-FREEZE-INDICATOR-LEFT"></div>
              <div class="CI-FREEZE-INDICATOR-RIGHT"></div>
              <a href="#" class="CI-GRID-FOCUS-ESCAPER">그리드에서 빠져나오시려면 ESC키를 눌러주세요.</a>
          </div>

          <div class="result_bottom CI-MDI-COMPONENT-FOOTER on2">
              <button type="button" class="CI-MDI-COMPONENT-BUTTON">Open</button>

              <div data-component="footer" style="display: none;">
                  <span><dfn>컨텐츠 문의</dfn>&nbsp;:&nbsp;(경)인덱스사업부, &nbsp;고객센터 (1577-0088)</span>

                  <p>
                      <span class="">주</span><span><em>1.</em><dfn>종가/시가총액은 조회기간 말일 기준입니다.</dfn><em>2.</em><dfn>거래량/거래대금은 조회기간 동안의 누적 규모에 해당합니다.</dfn></span>
                  </p>

                  <p><img src="http://data.krx.co.kr/templets/mdc/img/blit_feel.png" alt="" />&nbsp;본 정보는 투자참고 사항이며, 오류가 발생하거나 지연될 수 있습니다. 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다.</p>
              </div>
          </div>
      </div>
      
</div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods : {

    }    
}
</script>

<style scoped>

</style>