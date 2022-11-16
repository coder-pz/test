<template>
  <view :class="styles.foodConatiner">
    <view :class="styles.tabsContainer">
      <nut-tabs
        :class="styles.nutTabs"
        v-model="state.tabsValue"
        @change="tabChange"
        size="large"
        background="#fff"
      >
        <template v-for="item in state.tabsList" :key="item.id">
          <nut-tabpane :class="styles.nutTabpane" :title="item.title" :pane-key="item.id">
            <goods-list
              :goodsList="state.goodsList"
              @addGoodsClick="addGoods"
              @minusGoodsClick="minusGoods"
            />
          </nut-tabpane>
        </template>
      </nut-tabs>
    </view>
    <view :class="styles.footer">
      <view :class="styles.totalPrice">
        <text> 合计：</text>
        <text :class="styles.money">
          20元
          <text :class="styles.num">12</text>
        </text>
      </view>
      <nut-button type="primary" @click="confirm">确认预约</nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import styles from './home.module.scss';
import { reactive } from 'vue';
import goodsList from '@/components/goodsList/index.vue';
const state = reactive({
  tabsValue: 1,
  tabsList: [
    {
      id: 1,
      title: '早餐'
    },
    {
      id: 2,
      title: '午餐'
    },
    {
      id: 3,
      title: '晚餐'
    }
  ],
  goodsList: [
    {
      id: 11,
      name: '涮羊肉',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 10,
      selectNum: 10,
      money: 12
    },
    {
      id: 22,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    },
    {
      id: 33,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    },
    {
      id: 44,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    },
    {
      id: 55,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    },
    {
      id: 66,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    },
    {
      id: 77,
      name: '铁锅炖',
      goodsImageUrl: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      surplusNum: 21,
      selectNum: 10,
      money: 12
    }
  ]
});
const tabChange = ({ paneKey }: { title: String; paneKey: String; disabled: String }) => {
  console.log(paneKey);
};
const confirm = () => {
  console.log('确认预约');
};
const addGoods = (id: Number) => {
  console.log('添加商品', id);
};
const minusGoods = (id: Number) => {
  console.log('减少商品', id);
};
</script>
<style lang="scss">
.nut-tabs__content {
  height: calc(100% - 46px);
}
</style>
