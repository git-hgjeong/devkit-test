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
									<div class="">
										<ul style="padding:10px;">
											<!-- 트리메뉴 -->
											
<tree-item
    :item="treeData"
  ></tree-item>
										</ul>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div> 
				<div class="lnb_tree">
					<ul class="lnb_tree_wrap" id="lnb">
					</ul>
				</div>
				<span class="bottomround"></span>
			</aside>
			<button type="button" class="btn_lnb" id="jsMdiMenuButton" title="메뉴 열기/닫기"></button>        
    </div>    
</template>
<script>


const menu_test = [
				{"data-menu-id":"MDC0201", "title":"기본 통계"},
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
							{"data-menu-id":"MDC0201010202", "title":"개별지수 시세 추이"}
            ];

const menu = [
				{"data-menu-id":"MDC0201", "title":"기본 통계"},
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
					{"data-menu-id":"MDC02010202", "title":"종목정보"},
					{"data-menu-id":"MDC0201020201", "title":"전종목 기본정보"},
					{"data-menu-id":"MDC0201020202", "title":"전종목 지정내역"},
					{"data-menu-id":"MDC0201020203", "title":"개별종목 종합정보"},
					{"data-menu-id":"MDC02010203", "title":"거래실적"},
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

function setChildMenu(arrMenu, item){
	//console.log("arrMenu:", JSON.stringify(arrMenu));
	var mid = item["data-menu-id"];
	var prevMenu = arrMenu;
	var prevMid =  prevMenu["data-menu-id"];
	var parentMid = mid.substr(0, mid.length-2);
	
	if(parentMid == prevMid){
		if(!prevMenu["child"]){
			prevMenu["child"] = [];
		}
		prevMenu["child"].push(item);
		return true;
	}else{
		var arr = prevMenu["child"];
		if(!arr){
			//console.log("no child:", JSON.stringify(prevMenu));
			return false;
		}else{
			var cnt = arr.length;
			//console.log(">>", mid, prevMid, parentMid, cnt,JSON.stringify(arr));
			for(var i=0;i<cnt;i++){
				var chk = setChildMenu(arr[i], item);
				if(chk){
					return true;
				}
			}
		}
	}
	return false;
}

export default {
	data(){
		return {
			treeData: treeData
		}
	},
	methods: {

		makeFolder: function (item) {
			Vue.set(item, 'children', [])
			this.addItem(item)
		},
		addItem: function (item) {
				item.children.push({
				name: 'new stuff'
			})
		}
	},
	mounted() {
		//li > ul > li
		var tempMenu;
		var arrMenu = [];
		menu.forEach(function(item, index, arr){
			var arrIdx = arrMenu.length - 1;
			if(arrIdx == -1){
				//첫배열 저장
				arrMenu.push(item);
			}else{
				var prevItem = arrMenu[arrIdx];
				//console.log("prevItem:", prevItem);
				//console.log("test:", item, JSON.stringify(arrMenu));
				setChildMenu(prevItem, item);
			}

		});
		console.log("arrMenu:", arrMenu);
	}	
}

// demo data
var treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
</script>
