<template>
  <div id="app">
    <div class="content">
      <el-row type="flex" align="middle" class="row">
        <el-col :span="4">
          <router-link to="/PC/">
            <div>
              <img src="/static/logo.png" alt="" />
            </div>
          </router-link>
        </el-col>
        <el-col :span="20">
          <!-- 搜索框第一行 -->
          <el-row>
            <el-col :span="12" :push="1">
              <el-row>
                <el-col>
                  <div style="margin-top: 4px">
                    <el-autocomplete
                      v-model="searchData"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入内容"
                      :trigger-on-focus="true"
                      @select="handleSelect"
                      style="display: block"
                    >
                      <el-button
                        slot="append"
                        icon="el-icon-search"
                      ></el-button>
                    </el-autocomplete>
                  </div>
                </el-col>
              </el-row>
              <el-row
                :gutter="0"
                type="flex"
                justify="space-between"
                style="margin-top: 4px"
              >
              
              </el-row>
            </el-col>
            <!-- 购物车 -->
            <el-col :span="4" :push="2" style="margin-top: 4px">
              <router-link to="/PC/cart">
                <el-badge :value="getCartsLength" :max="99" class="item">
                  <el-button icon="el-icon-shopping-cart-full" size="medium">
                    我的购物车</el-button
                  >
                </el-badge>
              </router-link>
            </el-col>
            <!-- /购物车 -->
          </el-row>
          <!-- /搜索栏第一行 -->
          <!-- 搜索栏第二行 -->
          <el-row class="searchList" :gutter="8">
            <el-col v-for="(item, index) in lists" :key="index" :span="2">
              <el-link :underline="false">
                {{ item }}
              </el-link>
            </el-col>
          </el-row>
          <!-- /搜索栏第二行 -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Search',
  data() {
    return {
      searchData: '',
      restaurants: [],
      lists: [
        '秒杀',
        '优惠券',
        '超级会员',
        '品牌闪购',
        '京东拍卖',
        '京东家电',
        '京东超市',
        '京东生鲜',
        '京东国际',
      ],
    };
  },
  computed: {
    getCartsLength() {
      if (this.$store.state.userInfo === null) {
        return 0;
      } else {
        return this.$store.state.userInfo.carts.length || 0;
      }
    },
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        let patt = new RegExp(queryString.toLowerCase());
        // console.log (patt);
        // console.log (queryString.toLowerCase());
        return patt.test(restaurant.value.toLowerCase());
      };
    },
    loadAll() {
      return [
        { value: '手机 | 小米手机' },
        { value: '手机 | 三星手机' },
        { value: '手机 | 苹果手机' },
        { value: '手机 | 华为手机' },
     
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        {
          value: '豪大大香鸡排超级奶爸',
          address: '上海市嘉定区曹安公路曹安路1685号',
        },
        {
          value: '茶芝兰（奶茶，手抓饼）',
          address: '上海市普陀区同普路1435号',
        },
        {
          value: '浮生若茶（凌空soho店）',
          address: '上海长宁区金钟路968号9号楼地下一层',
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
      this;
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
#app {
  background-color: #fff;
  height: 200px;
  box-shadow: 0 4px 4px #ccc;
}

.content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.row {
  height: 100%;
}

.searchList {
  position: relative;
  top: 38px;
}

.searchList .el-link {
  font-size: 16px;
}
</style>