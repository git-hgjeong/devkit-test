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
									<button @click="toggleMenuAll">
										<img :src="menuAllIcon" /><span>{{menuAllText}}</span>
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

function setChildMenu(arrMenu, item){
	//console.log("arrMenu:", JSON.stringify(arrMenu));
	var mid = item["mid"];
	var prevMenu = arrMenu;
	var prevMid =  prevMenu["mid"];
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
///templets/mdc/img/blit_s.png

const menuAllCloseIcon = "http://data.krx.co.kr/templets/mdc/img/blit_all.png";
const menuAllCloseText = "전체 열기";
const menuAllOpenIcon = "http://data.krx.co.kr/templets/mdc/img/blit_s.png";
const menuAllOpenText = "전체 닫기";

export default {
	props: {
    	menu: Array,
  	},	
	data(){
		return {
			treeData: {},
			treeDefOpen: false,
			menuAllIcon: menuAllCloseIcon,
			menuAllText: menuAllCloseText
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
		},
		toggleMenuAll: function(){
			if(this.treeDefOpen){
				this.treeDefOpen = false;
				this.menuAllIcon = menuAllCloseIcon;
				this.menuAllText = menuAllCloseText;
				console.log("1");
			}else{
				this.treeDefOpen = true;
				this.menuAllIcon = menuAllOpenIcon;
				this.menuAllText = menuAllOpenText;
				console.log("2");
			}
		}
	},
	mounted() {
		//li > ul > li
		var tempMenu;
		var arrMenu = [];
		this.menu.forEach(function(item, index, arr){
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
		this.treeData = {name:arrMenu[0].name, children:arrMenu[0].children, isOpen:arrMenu[0].isOpen};
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
