<template>
  <footer class="footer">
    <el-divider></el-divider>


    <div class="box">
      <div class="second-line" v-for="(item, index) in arr1" :key="index">
        <img src="/static/logo.png" alt="" width="12px" height="12px" />
        <span class="text">{{ item }}} </span>
        <el-divider
          direction="vertical"
          v-if="index != arr1.length - 1"
        ></el-divider>
      </div>
    </div>
  </footer>
</template>
 
<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      arr1: [
        '092218228','dyy'
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background: #fff;
}

.footer .box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer .first-line {
  color: #666;
  font-size: 14px;
}

.footer {
  color: #999;
  font-size: 13px;
  padding-bottom: 18px;
}
</style>