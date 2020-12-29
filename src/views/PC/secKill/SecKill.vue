<template>
  <el-row :gutter="10" class="secKillBox">
    <!-- 倒计时 -->
    <el-col :span="4" class="fullHeight">
      <img
        src="/static/images/secKill.png"
        alt="图片"
        width="190px"
        height="260px"
      />
      <div class="des">
        <div class="box white" style="font-size: 14px">
          <span style="font-size: 20px; color: #fff; font-weight: 600"
            >限时促销</span>

        </div>
      </div>
    </el-col>
    <!-- /倒计时 -->
    <!-- 滚动跑马灯 -->
    <el-col :span="20" class="bgWhite fullHeight">
      <div class="box fullWidth fullHeight">
        <el-carousel
          class="fullHeight"
          indicator-position="none"
          :interval="5000"
        >
          <el-carousel-item
            class="fullHeight carousel"
            v-for="item in 4"
            :key="item"
            style="
              display: flex;
              justify-content: space-around;
              align-items: center;
            "
          >
            <div
              v-for="(element, index) in getLists(item)"
              :key="index"
              class="rotationBox pointer"
              @click="toDetail(element)"
            >
              <el-image
                style="width: 140px; height: 140px"
                :src="element['图片地址']"
                fit="fill"
              >
              </el-image>

              <span class="text">
                {{ element['商品名称'].substring(0, 15) + '...' }}
              </span>
              <value
                :newValue="element['价格'] - 123"
                :oldValue="element['价格']"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>
 
<script>
import Value from './SecKillValue';

export default {
  name: 'SecKill',
  components: {
    Value,
  },
  data() {
    return {
      hour: '01',
      min: '02',
      sec: '03',
      lists: [],
    };
  },
  methods: {
    getLists(index) {
      return this.lists.slice(index, index + 5);
    },
    toDetail(element) {
      console.log(element);
      this.$router.push('/PC/detail/' + element.sku);
    },
  },
  computed: {
    currentTime() {
      return new Date().getHours() + ':00';
    },
  },
  beforeMount() {
    // 加载数据
    this.$axios({
      url: '/static/data/goodsLists.json',
    }).then((res) => {
      this.lists = res.data.slice(0, 20);
      console.log(this.lists);
    });
  },

};
</script>

<style scoped>
.secKillBox {
  height: 260px;
  position: relative;
  top: 0;
  left: 0;
}

.secKillBox .des {
  position: absolute;
  top: 0;
  width: 190px;
  height: 260px;
}

.secKillBox .des .box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.secKillBox .des .time {
  display: flex;
  align-items: center;
}

.secKillBox .des .loadingTime {
  text-align: center;
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.secKillBox .des .loadingTime .box {
  background-color: #2f3430;
  width: 30px;
  height: 30px;
  margin: 0 4px;
}

.secKillBox .rotationBox {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
}

.secKillBox .rotationBox .text {
  margin: 10px 0;
}
</style>