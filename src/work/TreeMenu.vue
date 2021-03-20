<template>
  <li><a href="javascript:void(0);" @click="toggle" :class="getClass">{{ item.name }}</a>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :defOpen="defOpen"
      ></tree-item>
    </ul>
  </li>
</template>
<script>

export default {  
  props: {
    item: Object,
    defOpen: Boolean
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    },
    getClass: function(){
     if (this.isFolder) {
        if(this.isOpen){
          return "tree tree-on";
        }else{
          return "tree tree-off";
        }        
      }else{
        return "tree";
      }
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-folder', this.item);
        this.isOpen = true;
      }
    }
  },
	mounted() {
    console.log("defOpen:", this.defOpen);
    this.isOpen = this.defOpen;
  }
}

			/*
			https://kr.vuejs.org/v2/examples/tree-view.html
			//Depth Start


											//1st Depth
											<li><a href="javascript:void(0);">지수</a>
												<ul>

													//2nd Depth
													<li> <a href="javascript:void(0);">주가지수</a>
														<ul>
															//last Depth
															<li class="CI-MDI-MENU-NO-CHILD"><a href="javascript:void(0);" data-menu-id="MDC0201010101">전체지수 시세</a></li>
														</ul>
													</li>
													
												</ul>
											</li>

			*/
</script>
<style scoped>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
.tree {
  padding-left:18px;
  font-size: 14px;
  color: #dddddd;
}
.tree-off{
  background: url(http://data.krx.co.kr/templets/mdc/img/blit_4dep_off.png) no-repeat;
}
.tree-on{
  background: url(http://data.krx.co.kr/templets/mdc/img/blit_4dep_on.png) no-repeat;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>