<template>
  <div style="position: relative;">
      <input ref="comboInput" type="text" name="" value="" size="100" @click="showComboDiv">
      <div ref="comboDiv" v-show="comboOpen" style="position: absolute;background-color: #fff;z-index:99;padding:10px;border:1px solid #b3b7c4;" :style="{ left: '0px', top: comboTop + 'px' }" @mouseleave = "hideComboDiv">
          <ul>
              <li><input type="checkbox" name="chk1" id="chk1" value="1"><label for="chk1">테스트1</label></li>
              <li><input type="checkbox" name="chk2" id="chk2" value="2"><label for="chk2">테스트2</label></li>
              <li><input type="checkbox" name="chk3" id="chk3" value="3"><label for="chk3">테스트3</label></li>
              <li><input type="checkbox" name="chk4" id="chk4" value="4"><label for="chk4">테스트4</label></li>
          </ul>
          <button type="button" @click="applyCombo">적용</button>
          <button type="button" @click="hideComboDiv">닫기</button>
      </div>
  </div>
</template>  
<script>

export default {  
  props: {
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