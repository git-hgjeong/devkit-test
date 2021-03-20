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
	:defOpen="treeDefOpen"
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
			<button type="button" class="btn_lnb" id="jsMdiMenuButton" name="메뉴 열기/닫기"></button>        
    </div>    
</template>
<script>


const menu_test = [
				{"data-menu-id":"MDC0201", "name":"기본 통계"},
					{"data-menu-id":"MDC020101", "name":"지수"},
						{"data-menu-id":"MDC02010101", "name":"주가지수"},
							{"data-menu-id":"MDC0201010101", "name":"전체지수 시세"},
							{"data-menu-id":"MDC0201010102", "name":"전체지수 등락률"},
							{"data-menu-id":"MDC0201010103", "name":"개별지수 시세 추이"},
							{"data-menu-id":"MDC0201010104", "name":"전체지수 기본정보"},
							{"data-menu-id":"MDC0201010105", "name":"개별지수 종합정보"},
							{"data-menu-id":"MDC0201010106", "name":"지수구성종목"},
							{"data-menu-id":"MDC0201010107", "name":"PER/PBR/배당수익률"},

						{"data-menu-id":"MDC02010102", "name":"채권지수"},
							{"data-menu-id":"MDC0201010201", "name":"전체지수 시세"},
							{"data-menu-id":"MDC0201010202", "name":"개별지수 시세 추이"}
            ];

const menu = [
				{"data-menu-id":"MDC0201", "name":"기본 통계"},
					{"data-menu-id":"MDC020101", "name":"지수"},
						{"data-menu-id":"MDC02010101", "name":"주가지수"},
							{"data-menu-id":"MDC0201010101", "name":"전체지수 시세"},
							{"data-menu-id":"MDC0201010102", "name":"전체지수 등락률"},
							{"data-menu-id":"MDC0201010103", "name":"개별지수 시세 추이"},
							{"data-menu-id":"MDC0201010104", "name":"전체지수 기본정보"},
							{"data-menu-id":"MDC0201010105", "name":"개별지수 종합정보"},
							{"data-menu-id":"MDC0201010106", "name":"지수구성종목"},
							{"data-menu-id":"MDC0201010107", "name":"PER/PBR/배당수익률"},

						{"data-menu-id":"MDC02010102", "name":"채권지수"},
							{"data-menu-id":"MDC0201010201", "name":"전체지수 시세"},
							{"data-menu-id":"MDC0201010202", "name":"개별지수 시세 추이"},
						
						{"data-menu-id":"MDC02010103", "name":"파생 및 기타지수"},
							{"data-menu-id":"MDC0201010301", "name":"전체지수 시세"},
							{"data-menu-id":"MDC0201010302", "name":"전체지수 등락률"},
							{"data-menu-id":"MDC0201010303", "name":"개별지수 시세 추이"},
							{"data-menu-id":"MDC0201010304", "name":"전체지수 기본정보"},
							{"data-menu-id":"MDC0201010305", "name":"개별지수 종합정보"},

                {"data-menu-id":"MDC020102", "name":"주식"},
					{"data-menu-id":"MDC02010201", "name":"종목시세"},
						{"data-menu-id":"MDC0201020101", "name":"전종목 시세"},
						{"data-menu-id":"MDC0201020102", "name":"전종목 등락률"},
						{"data-menu-id":"MDC0201020103", "name":"개별종목 시세 추이"},
						{"data-menu-id":"MDC0201020104", "name":"개별종목 시세 추이(월)"},
					{"data-menu-id":"MDC02010202", "name":"종목정보"},
					{"data-menu-id":"MDC0201020201", "name":"전종목 기본정보"},
					{"data-menu-id":"MDC0201020202", "name":"전종목 지정내역"},
					{"data-menu-id":"MDC0201020203", "name":"개별종목 종합정보"},
					{"data-menu-id":"MDC02010203", "name":"거래실적"},
						{"data-menu-id":"MDC0201020301", "name":"투자자별 거래실적"},
						{"data-menu-id":"MDC0201020302", "name":"투자자별 거래실적(개별종목)"},
						{"data-menu-id":"MDC0201020303", "name":"투자자별 순매수상위종목"},
						{"data-menu-id":"MDC0201020304", "name":"대량매매(전일)"},
						{"data-menu-id":"MDC0201020305", "name":"프로그램매매"},
					{"data-menu-id":"MDC02010204", "name":"기타증권"},
						{"data-menu-id":"MDC0201020401", "name":"REITs 시세"},
						{"data-menu-id":"MDC0201020402", "name":"뮤추얼펀드 시세"},
						{"data-menu-id":"MDC0201020403", "name":"선박투자회사 시세"},
						{"data-menu-id":"MDC0201020404", "name":"인프라투융자회사 시세"},
						{"data-menu-id":"MDC0201020405", "name":"수익증권 시세"},
						{"data-menu-id":"MDC0201020406", "name":"신주인수권증권 시세"},
						{"data-menu-id":"MDC0201020407", "name":"신주인수권증서 시세"},

					{"data-menu-id":"MDC02010205", "name":"세부안내"},
						{"data-menu-id":"MDC0201020501", "name":"상장회사 상세검색"},
						{"data-menu-id":"MDC0201020502", "name":"PER/PBR/배당수익률(개별종목)"},
						{"data-menu-id":"MDC0201020503", "name":"외국인보유량 추이"},
						{"data-menu-id":"MDC0201020504", "name":"외국인보유량(개별종목)"},
						{"data-menu-id":"MDC0201020505", "name":"업종별 분포"},
						{"data-menu-id":"MDC0201020506", "name":"업종분류 현황"},

						{"data-menu-id":"MDC0201020507", "name":"대용가격"},
							{"data-menu-id":"MDC020102050701", "name":"주식 대용가"},
							{"data-menu-id":"MDC020102050702", "name":"수익증권 대용가"},
							{"data-menu-id":"MDC020102050703", "name":"뮤추얼펀드 대용가"}
            ];

function setChildMenu(arrMenu, item){
	//console.log("arrMenu:", JSON.stringify(arrMenu));
	var mid = item["data-menu-id"];
	var prevMenu = arrMenu;
	var prevMid =  prevMenu["data-menu-id"];
	var parentMid = mid.substr(0, mid.length-2);
	
	if(parentMid == prevMid){
		if(!prevMenu["children"]){
			prevMenu["children"] = [];
		}
		prevMenu["children"].push(item);
		return true;
	}else{
		var arr = prevMenu["children"];
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
			treeData: {},
			treeDefOpen: false
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
				setChildMenu(prevItem, item);
			}

		});
		console.log("arrMenu:", arrMenu);
		this.treeData = {name:arrMenu[0].name, children:arrMenu[0].children};
	}	
}

/*
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
*/
</script>
