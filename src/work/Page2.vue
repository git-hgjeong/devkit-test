<template>
<div class="CI-MDI-CONTENT active">

          <h2 class="tit_h2">
              <p>[42001] 전체지수 등락률</p>
              <p class="address_top">
                  <span><img src="http://data.krx.co.kr/templets/mdc/img/ico_house.png" alt="홈으로 이동" /></span>

                  <span>쉽게 보는 통계</span>

                  <span>주요 통계</span>

                  <span>주식</span>

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
                                  <input type="radio" name="searchType" id="searchType_1_0" value="0" checked="" /><label for="searchType_1_0">상장정보</label><input type="radio" name="searchType" id="searchType_1_1" value="1" />
                                  <label for="searchType_1_1">거래정보</label>
                              </td>
                          </tr>
                      </tbody>
                  </table>

                  <a href="javascript:void(0);" class="btn_black btn_component_search" name="search" id="jsSearchButton">조회</a>
              </div>

              <button type="button" class="CI-MDI-COMPONENT-BUTTON btn_close_tggle">Close</button>
          </div>

          <div class="CI-MDI-UNIT-WRAP">
              <div class="time CI-MDI-UNIT" data-view-sequence="1" data-index="0">
                  <p style="top: 17px;"><input type="checkbox" name="viewDetail" id="viewDetail_1_0" value="1" /><label for="viewDetail_1_0">상세보기</label></p>

                  <p class="CI-MDI-UNIT-TIME" style="float: right; position: relative; top: -5px;"><img src="http://data.krx.co.kr/templets/mdc/img/ico_clock.png" alt="시계" />2021.02.21 PM 06:01:04&nbsp;<span>(20분 지연 정보)</span></p>

                  <p>
                      <select class="UNIT-SHARE" name="share" style="">
                          <option value="1">주</option>
                          <option value="2" selected="">천주</option>
                          <option value="3">백만주</option>
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

          <input type="hidden" name="choicYn" value="N" />

          <input type="hidden" name="csvxls_isNo" value="false" />

          <div class="COMPST-INFO-GRID" id="jsGrid_MDCEASY002_0">
              <div class="CI-GRID">
                  <div class="CI-SCROLL-WRAPPER">
                      <div class="CI-THEAD-WRAPPER" style="padding-right: 0px;">
                          <table aria-hidden="true" style="width: 100%;">
                              <caption>
                                  구분,회사수,종목수,상장주식수,자본금,시가총액
                              </caption>
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 19%;" />
                                  <col style="width: 19%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row" style="width: 17%;">구분</th>
                                      <th scope="row" style="width: 14%;">회사수</th>
                                      <th scope="row" style="width: 14%;">종목수</th>
                                      <th scope="row" style="width: 17%;">상장주식수</th>
                                      <th scope="row" style="width: 19%;">자본금</th>
                                      <th scope="row" style="width: 19%;">시가총액</th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                      <div class="CI-TBODY-WRAPPER" style="height: 550px;">
                          <table id="jsTable_MDCEASY002_0" data-grid="{databind: true, emptyData: true, scroll: true}" summary="상장정보" style="width: 100%;">
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 19%;" />
                                  <col style="width: 19%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row">구분</th>
                                      <th scope="row">회사수</th>
                                      <th scope="row">종목수</th>
                                      <th scope="row">상장주식수</th>
                                      <th scope="row">자본금</th>
                                      <th scope="row">시가총액</th>
                                  </tr>
                              </thead>
                              <tbody data-keepdata="true">
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(228, 228, 228);">유가증권시장</td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(228, 228, 228);"></td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">주권</td>
                                      <td class="text-right">780</td>
                                      <td class="text-right">898</td>
                                      <td class="text-right" data-name="LIST_SHRS">55,094,612</td>
                                      <td class="text-right" data-name="CAP">112,829,457</td>
                                      <td class="text-right" data-name="MKTCAP">2,134,070,595</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">기업인수목적회사</td>
                                      <td class="text-right">0</td>
                                      <td class="text-right">0</td>
                                      <td class="text-right" data-name="LIST_SHRS">0</td>
                                      <td class="text-right" data-name="CAP">0</td>
                                      <td class="text-right" data-name="MKTCAP">0</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">외국주권</td>
                                      <td class="text-right">1</td>
                                      <td class="text-right">1</td>
                                      <td class="text-right" data-name="LIST_SHRS">84,349</td>
                                      <td class="text-right" data-name="CAP">0</td>
                                      <td class="text-right" data-name="MKTCAP">368,603</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">주식예탁증권(DR)</td>
                                      <td class="text-right">1</td>
                                      <td class="text-right">1</td>
                                      <td class="text-right" data-name="LIST_SHRS">60,096</td>
                                      <td class="text-right" data-name="CAP">0</td>
                                      <td class="text-right" data-name="MKTCAP">2,277,644</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">투자회사</td>
                                      <td class="text-right">5</td>
                                      <td class="text-right">5</td>
                                      <td class="text-right" data-name="LIST_SHRS">752,747</td>
                                      <td class="text-right" data-name="CAP">3,329,714</td>
                                      <td class="text-right" data-name="MKTCAP">4,843,986</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">부동산투자회사</td>
                                      <td class="text-right">13</td>
                                      <td class="text-right">13</td>
                                      <td class="text-right" data-name="LIST_SHRS">807,323</td>
                                      <td class="text-right" data-name="CAP">692,006</td>
                                      <td class="text-right" data-name="MKTCAP">4,115,253</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">선박투자회사</td>
                                      <td class="text-right">3</td>
                                      <td class="text-right">3</td>
                                      <td class="text-right" data-name="LIST_SHRS">44,394</td>
                                      <td class="text-right" data-name="CAP">221,971</td>
                                      <td class="text-right" data-name="MKTCAP">80,523</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(248, 248, 248);">소계</td>
                                      <td class="text-right" style="background-color: rgb(248, 248, 248);">803</td>
                                      <td class="text-right" style="background-color: rgb(248, 248, 248);">921</td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(248, 248, 248);">56,843,522</td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(248, 248, 248);">117,073,149</td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(248, 248, 248);">2,145,756,604</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(228, 228, 228);">코스닥시장</td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(228, 228, 228);"></td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">주권</td>
                                      <td class="text-right">1,403</td>
                                      <td class="text-right">1,406</td>
                                      <td class="text-right" data-name="LIST_SHRS">42,613,910</td>
                                      <td class="text-right" data-name="CAP">18,511,032</td>
                                      <td class="text-right" data-name="MKTCAP">384,618,399</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">기업인수목적회사</td>
                                      <td class="text-right">54</td>
                                      <td class="text-right">54</td>
                                      <td class="text-right" data-name="LIST_SHRS">263,936</td>
                                      <td class="text-right" data-name="CAP">26,394</td>
                                      <td class="text-right" data-name="MKTCAP">595,338</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">외국주권</td>
                                      <td class="text-right">13</td>
                                      <td class="text-right">13</td>
                                      <td class="text-right" data-name="LIST_SHRS">1,231,881</td>
                                      <td class="text-right" data-name="CAP">0</td>
                                      <td class="text-right" data-name="MKTCAP">820,355</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">주식예탁증권(DR)</td>
                                      <td class="text-right">8</td>
                                      <td class="text-right">8</td>
                                      <td class="text-right" data-name="LIST_SHRS">229,832</td>
                                      <td class="text-right" data-name="CAP">0</td>
                                      <td class="text-right" data-name="MKTCAP">2,822,315</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(248, 248, 248);">소계</td>
                                      <td class="text-right" style="background-color: rgb(248, 248, 248);">1,478</td>
                                      <td class="text-right" style="background-color: rgb(248, 248, 248);">1,481</td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(248, 248, 248);">44,339,560</td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(248, 248, 248);">18,537,425</td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(248, 248, 248);">388,856,406</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(228, 228, 228);">코넥스시장</td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(228, 228, 228);"></td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(228, 228, 228);"></td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center">주권</td>
                                      <td class="text-right">140</td>
                                      <td class="text-right">140</td>
                                      <td class="text-right" data-name="LIST_SHRS">828,740</td>
                                      <td class="text-right" data-name="CAP">357,530</td>
                                      <td class="text-right" data-name="MKTCAP">5,923,531</td>
                                  </tr>
                                  <tr tabindex="0">
                                      <td class="text-center" style="background-color: rgb(240, 240, 240);">전체 합계</td>
                                      <td class="text-right" style="background-color: rgb(240, 240, 240);">2,421</td>
                                      <td class="text-right" style="background-color: rgb(240, 240, 240);">2,542</td>
                                      <td class="text-right" data-name="LIST_SHRS" style="background-color: rgb(240, 240, 240);">102,011,822</td>
                                      <td class="text-right" data-name="CAP" style="background-color: rgb(240, 240, 240);">135,968,105</td>
                                      <td class="text-right" data-name="MKTCAP" style="background-color: rgb(240, 240, 240);">2,540,536,541</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>

          <div class="COMPST-INFO-GRID" id="jsGrid_MDCEASY002_1" style="display: none;">
              <div class="CI-GRID">
                  <div class="CI-SCROLL-WRAPPER">
                      <div class="CI-THEAD-WRAPPER" style="padding-right: 0px;">
                          <table aria-hidden="true" style="width: 100%;">
                              <caption>
                                  구분,회사수,종목수,상장주식수,자본금,시가총액
                              </caption>
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 19%;" />
                                  <col style="width: 19%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row" style="width: 17%;">구분</th>
                                      <th scope="row" style="width: 14%;">회사수</th>
                                      <th scope="row" style="width: 14%;">종목수</th>
                                      <th scope="row" style="width: 17%;">상장주식수</th>
                                      <th scope="row" style="width: 19%;">자본금</th>
                                      <th scope="row" style="width: 19%;">시가총액</th>
                                  </tr>
                              </thead>
                          </table>
                      </div>
                      <div class="CI-TBODY-WRAPPER">
                          <table id="jsTable_MDCEASY002_1" data-grid="{databind: true, emptyData: true, scroll: true}" summary="상장정보(상세보기)" style="width: 100%;">
                              <colgroup>
                                  <col style="width: 17%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 14%;" />
                                  <col style="width: 17%;" />
                                  <col style="width: 19%;" />
                                  <col style="width: 19%;" />
                              </colgroup>
                              <thead>
                                  <tr>
                                      <th scope="row">구분</th>
                                      <th scope="row">회사수</th>
                                      <th scope="row">종목수</th>
                                      <th scope="row">상장주식수</th>
                                      <th scope="row">자본금</th>
                                      <th scope="row">시가총액</th>
                                  </tr>
                              </thead>
                              <tbody data-keepdata="true"></tbody>
                          </table>
                          <div class="CI-EMPTY-ROW" style="width: 898px; text-align: center; line-height: 728px;"></div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="COMPST-INFO-GRID" id="jsGrid_MDCEASY002_2" style="display: none;">
              <div class="CI-GRID">
                  <div class="CI-SCROLL-WRAPPER">
                      <div class="CI-THEAD-WRAPPER" style="padding-right: 0px;">
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
                          <table id="jsTable_MDCEASY002_2" data-grid="{databind: true, emptyData: true, scroll: true}" summary="거래정보" style="width: 100%;">
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
                          <div class="CI-EMPTY-ROW" style="width: 898px; text-align: center; line-height: 476px;"></div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="result_bottom CI-MDI-COMPONENT-FOOTER on2">
              <button type="button" class="CI-MDI-COMPONENT-BUTTON">Open</button>

              <div data-component="footer" style="display: none;">
                  <span><dfn>컨텐츠 문의</dfn>&nbsp;:&nbsp;(유)주식시장부, &nbsp;(유)상장부, &nbsp;(코)코스닥시장부, &nbsp;(코)상장부, &nbsp;(넥)코넥스시장부, &nbsp;고객센터 (1577-0088)</span>

                  <p><img src="http://data.krx.co.kr/templets/mdc/img/blit_feel.png" alt="" />&nbsp;본 정보는 투자참고 사항이며, 오류가 발생하거나 지연될 수 있습니다. 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다.</p>
              </div>
          </div>

      <!-- //page2 -->
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