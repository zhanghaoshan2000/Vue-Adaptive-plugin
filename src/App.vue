<!--
 * @Author: xiangyang
 * @Date: 2023-01-26 08:14:21
 * @LastEditors: xiangyang
 * @LastEditTime: 2023-01-26 09:26:26
 * @Description: 
-->
<template>
  <div id="app">
    <SacleBox>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </SacleBox>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import SacleBox from "./package/ScaleBox/SacleBox.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    // SacleBox,
  },
};
</script>

<style>

</style>
