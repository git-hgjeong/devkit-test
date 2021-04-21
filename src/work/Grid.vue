<template>
<div>
  <table class="grid">
  <thead>
  <tr>
      <th v-for="(item, index) in header" :key="index"><span>{{item.text}}</span><a href="javascript:void(0);" class="" style="float:right">↕</a></th>
  </tr>        
  </thead>
  <tbody>
  <tr v-for="(item, index) in list" :key="index">
      <td v-for="(h_item, h_index) in header" :key="h_index">{{item[h_item.id]}}</td>
  </tr>      
  </tbody>
  </table>
</div>
</template>  
<script>

export default {  
  props: {
    list: Array,
    header: Array      
  },
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
	mounted() {
        console.log("header:", this.header);
        console.log("list:", this.list);
  }
}
//{key:"", value=""}
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