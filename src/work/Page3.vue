<template>
      <div class="CI-MDI-CONTENT active">
          <h2 class="tit_h2">
              <p>[43001] 개별지수 시세 추이</p>
              <p class="address_top">
                  <span><img src="http://data.krx.co.kr/templets/mdc/img/ico_house.png" alt="홈으로 이동" /></span>

                  <span>쉽게 보는 통계</span>

                  <span>주요 통계</span>

                  <span>증권상품</span>

                  <span>종합정보(일)</span>
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
                              <th scope="row">조회일자</th>
                              <td>
                                  <div class="cal-wrap">
                                      <div class="cal-area">
                                          <input type="text" name="trdDd" id="trdDd" value="20210221" maxlength="8" /><button type="button" class="cal-btn-open" data-calendar-module="true" data-calendar-display="false">달력열기</button>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <th scope="row">조회구분</th>
                              <td>
                                  <input type="radio" name="searchType" id="searchType_2_0" value="0" checked="" /><label for="searchType_2_0">상장정보</label><input type="radio" name="searchType" id="searchType_2_1" value="1" />
                                  <label for="searchType_2_1">거래정보</label>
                              </td>
                          </tr>
                      </tbody>
                  </table>

                  <a href="javascript:void(0);" class="btn_black btn_component_search" name="search" id="jsSearchButton">조회</a>
              </div>

              <button type="button" class="CI-MDI-COMPONENT-BUTTON btn_close_tggle">Close</button>
          </div>

          <div class="CI-MDI-UNIT-WRAP">
              <div class="time CI-MDI-UNIT" data-view-sequence="2" data-index="0">
                  <p class="CI-MDI-UNIT-TIME"><img src="http://data.krx.co.kr/templets/mdc/img/ico_clock.png" alt="시계" />2021.02.21 PM 06:01:04&nbsp;<span>(20분 지연 정보)</span></p>

                  <p>
                      <select class="UNIT-SHARE" name="share" style="">
                          <option value="1">좌/증권</option>
                          <option value="2" selected="">천좌/천증권</option>
                          <option value="3">백만좌/백만증권</option>
                      </select>

                      <select class="UNIT-MONEY" name="money" style="">
                          <option value="1">원</option>
                          <option value="2">천원</option>
                          <option value="3" selected="">백만원</option>
                          <option value="4">십억원</option>
                          <option value="5">조원</option>
                      </select>

                      <button type="button" class="CI-MDI-UNIT-FILTER" style="display: none;"><img src="http://data.krx.co.kr/templets/mdc/img/btn_time2.png" title="컬럼필터 팝업" /></button>
                      <button type="button" class="CI-MDI-UNIT-DOWNLOAD"><img src="http://data.krx.co.kr/templets/mdc/img/btn_time1.png" title="다운로드 팝업" /></button>
                  </p>
              </div>
          </div>

          <input type="hidden" name="csvxls_isNo" value="false" />

          <div class="COMPST-INFO-GRID" id="jsGrid_MDCEASY007_0">
              <div class="CI-GRID">
                  <div class="CI-SCROLL-WRAPPER">
                      <div class="CI-THEAD-WRAPPER" style="padding-right: 0px;">
                          <table aria-hidden="true" style="width: 100%;">
                              <caption>
                                  구분,운용사수(발행사수),종목수,상장좌(증권)수,시가총액,순자산총액(지표가치총액)
                              </caption>
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 17%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row" style="width: 17%;">구분</th>
                                      <th scope="row" style="width: 16%;">
                                          운용사수<br />
                                          (발행사수)
                                      </th>
                                      <th scope="row" style="width: 16%;">종목수</th>
                                      <th scope="row" style="width: 17%;">상장좌(증권)수</th>
                                      <th scope="row" style="width: 17%;">시가총액</th>
                                      <th scope="row" style="width: 17%;">
                                          순자산총액<br />
                                          (지표가치총액)
                                      </th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                      <div class="CI-TBODY-WRAPPER" style="height: 537px;">
                          <table id="jsTable_MDCEASY007_0" data-grid="{databind: true, emptyData: true, scroll: true}" summary="상장정보" style="width: 100%;">
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 17%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row">구분</th>
                                      <th scope="row">
                                          운용사수<br />
                                          (발행사수)
                                      </th>
                                      <th scope="row">종목수</th>
                                      <th scope="row">상장좌(증권)수</th>
                                      <th scope="row">시가총액</th>
                                      <th scope="row">
                                          순자산총액<br />
                                          (지표가치총액)
                                      </th>
                                  </tr>
                              </thead>
                              <tbody data-keepdata="true">
                                  <tr tabindex="0">
                                      <td class="text-center">ETF</td>
                                      <td class="text-right">15</td>
                                      <td class="text-right">473</td>
                                      <td class="text-right" data-name="LIST_SHRS">4,119,577</td>
                                      <td class="text-right" data-name="MKTCAP">56,923,141</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">0</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">ETN</td>
                                      <td class="text-right">8</td>
                                      <td class="text-right">182</td>
                                      <td class="text-right" data-name="LIST_SHRS">1,919,250</td>
                                      <td class="text-right" data-name="MKTCAP">7,511,125</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">0</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">ELW</td>
                                      <td class="text-right">5</td>
                                      <td class="text-right">3,994</td>
                                      <td class="text-right" data-name="LIST_SHRS">61,206,670</td>
                                      <td class="text-right" data-name="MKTCAP">74,821,363</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">-</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(240, 240, 240);">합계</td>
                                      <td class="text-right" style="background-color: rgb(240, 240, 240);">28</td>
                                      <td class="text-right" style="background-color: rgb(240, 240, 240);">4,649</td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(240, 240, 240);">67,245,497</td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(240, 240, 240);">139,255,629</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL" style="background-color: rgb(240, 240, 240);">0</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                                  <tr tabindex="0" class="CI-EMPTY-ROW">
                                      <td class="text-center">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right">&nbsp;</td>
                                      <td class="text-right" data-name="LIST_SHRS">&nbsp;</td>
                                      <td class="text-right" data-name="MKTCAP">&nbsp;</td>
                                      <td class="text-right" data-name="NUM_ITM_VAL">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>

          <div class="COMPST-INFO-GRID" id="jsGrid_MDCEASY007_1" style="display: none;">
              <div class="CI-GRID">
                  <div class="CI-SCROLL-WRAPPER">
                      <div class="CI-THEAD-WRAPPER">
                          <table aria-hidden="true" style="width: 100%;">
                              <caption>
                                  구분,조회일자,연누계,거래량,거래대금,거래량,거래대금,합계,일평균,합계,일평균
                              </caption>
                              <colgroup>
                                  <col style="width: 15%;" />
                                  <col style="width: 12%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 13%;" />
                                  <col style="width: 12%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 15%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="col" rowspan="3" style="width: 15%;">구분</th>
                                      <th scope="col" colspan="2" data-name="INQ_DD" style="width: 28%;">조회일자</th>
                                      <th scope="col" colspan="4" data-name="YY_ACC" style="width: 57%;">연누계</th>
                                  </tr>
                                  <tr>
                                      <th scope="col" rowspan="2">거래량</th>
                                      <th scope="col" rowspan="2">거래대금</th>
                                      <th scope="col" colspan="2">거래량</th>
                                      <th scope="col" colspan="2">거래대금</th>
                                  </tr>
                                  <tr>
                                      <th scope="row">합계</th>
                                      <th scope="row">일평균</th>
                                      <th scope="row">합계</th>
                                      <th scope="row">일평균</th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                      <div class="CI-TBODY-WRAPPER">
                          <table id="jsTable_MDCEASY007_1" data-grid="{databind: true, emptyData: true, scroll: true}" summary="거래정보" style="width: 100%;">
                              <colgroup>
                                  <col style="width: 15%;" />
                                  <col style="width: 12%;" />
                                  <col style="width: 16%;" />
                                  <col style="width: 13%;" />
                                  <col style="width: 12%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 15%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="col" rowspan="3">구분</th>
                                      <th scope="col" colspan="2" data-name="INQ_DD">조회일자</th>
                                      <th scope="col" colspan="4" data-name="YY_ACC">연누계</th>
                                  </tr>
                                  <tr>
                                      <th scope="col" rowspan="2">거래량</th>
                                      <th scope="col" rowspan="2">거래대금</th>
                                      <th scope="col" colspan="2">거래량</th>
                                      <th scope="col" colspan="2">거래대금</th>
                                  </tr>
                                  <tr>
                                      <th scope="row">합계</th>
                                      <th scope="row">일평균</th>
                                      <th scope="row">합계</th>
                                      <th scope="row">일평균</th>
                                  </tr>
                              </thead>
                              <tbody data-keepdata="true"></tbody>
                          </table>
                          <div class="CI-EMPTY-ROW" style="width: 898px; text-align: center; line-height: 392px;"></div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="result_bottom CI-MDI-COMPONENT-FOOTER on2">
              <button type="button" class="CI-MDI-COMPONENT-BUTTON">Open</button>

              <div data-component="footer" style="display: none;">
                  <span><dfn>컨텐츠 문의</dfn>&nbsp;:&nbsp;(유)증권상품시장부, &nbsp;고객센터 (1577-0088)</span>

                  <p>
                      <span class="">주</span><span><dfn>ETF는 운용사수/순자산총액, ETN는 발행사수/지표가치총액, ELW는 발행사수입니다.</dfn></span>
                  </p>

                  <p><img src="http://data.krx.co.kr/templets/mdc/img/blit_feel.png" alt="" />&nbsp;본 정보는 투자참고 사항이며, 오류가 발생하거나 지연될 수 있습니다. 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다.</p>
              </div>
          </div>
      </div>
      <!-- //page3 -->
</template>

<script>
export default {
    data(){
        return {}
    },
    methods : {

    },
    created: function () {
        //this.$emit('openPage', {"mid":"MDC0201010103", "name":"개별지수 시세 추이", isOpen:false, link:"page3"});
    }  
}
</script>

<style scoped>

</style>