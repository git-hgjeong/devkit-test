<template>
<div class="CI-MDI-CONTENT active">
    <!-- table영역 -->
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
    <!-- 검색조건 영역 -->
    <div class="search_tb">
        <div data-component="search" v-show="searchArea.isOpen">
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
                                <comp-multi-combo id="chk" :list="comboList" ref="compMultiCombo"></comp-multi-combo>
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
        </div><!-- //search -->
        <button type="button" class="CI-MDI-COMPONENT-BUTTON btn_close_tggle" :class="{on2 : !searchArea.isOpen}" @click="toggleSearchArea">{{searchArea.btnText}}</button>
    </div><!-- //search_tb -->
    
    <!-- 테이블 버튼영역 -->
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
    </div><!-- //CI-MDI-UNIT-WRAP -->

        <input type="hidden" name="csvxls_isNo" value="false" />
        
    <!-- Table 영역 -->
    <div class="CI-MDI-UNIT-WRAP">

            <table class="grid">
            <thead>
            <tr>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
                <th><span>asdfasdfasdasdf</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
            </tr>        
            </thead>
            <tbody>
            <tr>
                <td class="center">11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
            </tr>
            <tr>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
            </tr>
            <tr>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td>11111</td>
                <td class="right">11111</td>
            </tr>                        
            </tbody>
            </table>    

    </div>
    <!-- //Table 영역 -->



    <div class="result_bottom CI-MDI-COMPONENT-FOOTER on2">
            <button type="button" class="CI-MDI-COMPONENT-BUTTON" @click="toggleBottomArea">{{bottomArea.btnText}}</button>

            <div data-component="footer" v-show="bottomArea.isOpen">
                <span><dfn>컨텐츠 문의</dfn>&nbsp;:&nbsp;(경)인덱스사업부, &nbsp;고객센터 (1577-0088)</span>

                <p>
                    <span class="">주</span><span><em>1.</em><dfn>종가/시가총액은 조회기간 말일 기준입니다.</dfn><em>2.</em><dfn>거래량/거래대금은 조회기간 동안의 누적 규모에 해당합니다.</dfn></span>
                </p>

                <p><img src="http://data.krx.co.kr/templets/mdc/img/blit_feel.png" alt="" />&nbsp;본 정보는 투자참고 사항이며, 오류가 발생하거나 지연될 수 있습니다. 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다.</p>
            </div>
    </div>
    
      
</div><!-- //CI-MDI-CONTENT -->
</template>

<script>

import MultiCombo from './MultiCombo';

export default {
    components: {
       'comp-multi-combo':MultiCombo
    },    
    data(){
        return {
            searchArea:{isOpen:true, btnText:"Close"},
            bottomArea:{isOpen:false, btnText:"Open"},
            comboList:[
                {code:"CD01", codeName:"코드1", isChecked:false},
                {code:"CD02", codeName:"코드2", isChecked:true},
                {code:"CD03", codeName:"코드3", isChecked:false},
                {code:"CD04", codeName:"코드4", isChecked:true},
                {code:"CD05", codeName:"코드5", isChecked:false},
            ]
        }
    },
    methods : {
        toggleSearchArea: function () {
            this.toggleArea(this.searchArea);
        },        
        toggleBottomArea: function () {
            this.toggleArea(this.bottomArea);
        },
        toggleArea:function(objArea){
            if(objArea.isOpen){
                objArea.isOpen = false;
                objArea.btnText = "Close";
            }else{
                objArea.isOpen = true;
                objArea.btnText = "Open";                
            } 
        },
    },
    created: function () {
    },
	mounted() {
        // 자식 컴포넌트의 함수를 호출
        let comboData = this.$refs.compMultiCombo.getData(); 
        console.log("comboData:", comboData);
	}    
}

</script>

<style scoped>
.grid {
    width:100%;
}
.grid thead th {
    background: #667491;
    color: #fff;
    font-weight: 400;
    border: 1px solid #465A72;
    padding:10px;
}
.grid tbody tr {
    line-height: 35px;
}
.right {
    text-align: right;
}
.center {
    text-align: center;
}
</style>