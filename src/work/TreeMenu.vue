<template>
  <li><a href="javascript:void(0);" @click="toggle" :class="getClass">{{ item.name }}</a>
    <ul v-show="item.isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :defOpen="defOpen"
        @clickMenu="recursiveClickMenu"
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
  watch: { 
    defOpen: function(newVal, oldVal) { // watch it
      //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.item.isOpen = newVal;
    }
  },  
  data: function () {
    return {
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    },
    getClass: function(){
     if (this.isFolder) {
        if(this.item.isOpen){
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
    recursiveClickMenu: function(item){
      this.$emit('clickMenu', item);
    },
    toggle: function () {
      if (this.isFolder) {
        this.item.isOpen = !this.item.isOpen;
      }else{
        console.log("clickMenu!!");
        this.$emit('clickMenu', this.item);
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-folder', this.item);
        this.item.isOpen = true;
      }
    }
  },
	mounted() {
  }
}
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
  background: url(http://data.krx.co.kr/templets/mdc/img/blit_5dep_off.png) no-repeat;
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