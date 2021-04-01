<template>
  <div style="position: relative;">
      <input ref="comboInput" type="text" name="" value="" size="100" @click="showComboDiv">
      <div ref="comboDiv" v-show="comboOpen" style="position: absolute;background-color: #fff;z-index:99;padding:10px;border:1px solid #b3b7c4;" :style="{ left: '0px', top: comboTop + 'px' }">
          <ul>
              <li><input type="checkbox" value="1"><label>테스트1</label></li>
              <li><input type="checkbox" value="2"><label>테스트2</label></li>
              <li><input type="checkbox" value="3"><label>테스트3</label></li>
              <li><input type="checkbox" value="4"><label>테스트4</label></li>
          </ul>
          <button type="button" @click="doApplyCombo">적용</button>
          <button type="button" @click="doCloseCombo">닫기</button>
      </div>
  </div>
</template>  
<script>

export default {  
  props: {
    comboWidth:0,
    comboLeft:0,
    comboTop:0,
    comboOpen:false
  },
  data: function () {
    return {
      
    }
  },
  methods: {
    showComboDiv:function(){
        let height = this.$refs.comboInput.getBoundingClientRect().height;
        console.log("comboInput:", this.$refs.comboInput.getBoundingClientRect());
        this.comboTop = height;
        this.comboOpen = true;
    },
    doApplyCombo:function(){
        this.doCloseCombo();
    },
    doCloseCombo:function(){
        this.comboOpen = false;
    },
    handleResize:function(){
        this.doCloseCombo();
    }
  },
	mounted() {
    window.addEventListener('resize', this.handleResize);
  }
}
//{key:"", value=""}
</script>