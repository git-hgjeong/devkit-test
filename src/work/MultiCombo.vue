<template>
  <div style="position: relative;">
      <input ref="comboInput" type="text" name="" :value="comboText" size="100" @click="showComboDiv" readonly>
      <div ref="comboDiv" v-show="comboOpen" style="position: absolute;background-color: #fff;z-index:99;padding:10px;border:1px solid #b3b7c4;" :style="{ left: '0px', top: comboTop + 'px' }" @mouseleave = "hideComboDiv">
          <button type="button" @click="clearCombo">←</button>&nbsp;<button type="button" @click="hideComboDiv">X</button>
          <ul>
              <li v-for="(item, index) in list" :key="index"><input type="checkbox" :name="getComboId(index)" :id="getComboId(index)" :value="item.code" v-model="item.isChecked" @change="changeCombo"><label :for="getComboId(index)">{{item.codeName}}</label></li>
          </ul>
      </div>
  </div>
</template>  
<script>

export default {  
  props: {
    list: Array,
    id: String
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
    comboText : function(){
      let text = "";
      this.list.forEach(function(item, index) {
        if(item.isChecked){
          text += "," + item.codeName;
        }
      });
      if(text){
        text = text.substring(1);
      }
      return text;
    }
  },
  methods: {
    getComboId:function(idx){
      return this.id + idx;
    },    
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
    },
    changeCombo:function(){
      console.log("changed:", this.list);
    },
    clearCombo:function(){
      this.list.forEach(function(item, index) {
        if(item.isChecked){
          item.isChecked = false;
        }
      });
    },
    getData:function(){
      let res = this.list.filter(it => it.isChecked);
      return res;
    },
  },
	mounted() {
    window.addEventListener('resize', this.handleResize);
    this.list.forEach(function(value, index) {

    });
  }
}
//{key:"", value=""}
</script>