<template>
  <div style="position: relative;">
      <input ref="comboInput" type="text" name="" value="" size="100" @click="showComboDiv">
      <div ref="comboDiv" v-show="comboOpen" style="position: absolute;background-color: #fff;z-index:99;padding:10px;border:1px solid #b3b7c4;" :style="{ left: '0px', top: comboTop + 'px' }" @mouseleave = "hideComboDiv">
          <ul>
              <li v-for="(item, index) in list" v-bind:key="list.code"><input type="checkbox" name="chk1" id="chk1" :value="item.code"><label for="chk1">{{item.codeName}}</label></li>
          </ul>
          <button type="button" @click="applyCombo">적용</button>
          <button type="button" @click="hideComboDiv">닫기</button>
      </div>
  </div>
</template>  
<script>

export default {  
  props: {
    list: Array
  },
  data: function () {
    return {
      comboWidth:0,
      comboLeft:0,
      comboTop:0,
      comboOpen:false
    }
  },
  computed: {
    
  },
  methods: {
    showComboDiv:function(){
        let height = this.$refs.comboInput.getBoundingClientRect().height;
        console.log("comboInput:", this.$refs.comboInput.getBoundingClientRect());
        this.comboTop = height;
        this.comboOpen = true;
    },
    applyCombo:function(){
        this.hideComboDiv();
    },
    hideComboDiv:function(){
        this.comboOpen = false;
    },
    handleResize:function(){
        this.hideComboDiv();
    }
  },
	mounted() {
    window.addEventListener('resize', this.handleResize);
  }
}
//{key:"", value=""}
</script>