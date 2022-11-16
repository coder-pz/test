<template>
  <view :class="styles.indexContainer">
    <view :class="styles.swiperNavbarContainer" :style="{ height: computedHeight.navBarAllHeight + 'px' }">
      <view :style="{ height: computedHeight.statusBarHeight + 'px' }"> </view>
      <view :class="styles.navbarContent" :style="{ height: computedHeight.navBarHeight + 'px' }"> 洗衣订餐</view>
    </view>
    <view :class="styles.content">
      <view :class="styles.swiperContainer">
        <nut-swiper
          :class="styles.nutSwiper"
          :init-page="state.page"
          :pagination-visible="true"
          loop
          pagination-color="#426543"
          auto-play="2000"
        >
          <template v-for="item in state.swiperList" :key="item.id">
            <nut-swiper-item :class="styles.nutSwiperItem">
              <img :class="styles.image" :src="item.imageSrc" alt="" />
            </nut-swiper-item>
          </template>
        </nut-swiper>
      </view>
      <view :class="styles.infoBlockContainer">
        <template v-for="item in state.fucList" :key="item.id">
          <view :class="styles.everyBlock" @click="jumpView(item.viewRouter)">
            <image :class="styles.image" :src="item.imageSrc" />
            <view :class="styles.text">{{ item.text }}</view>
          </view>
        </template>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import styles from './index.module.scss';
import { reactive } from 'vue';
import { getNavBarHeight } from '@/hooks';
import food from '@/assets/images/index/food.png';
import foodHistory from '@/assets/images/index/food-history.png';
import clothing from '@/assets/images/index/clothing.png';
import clothingHistory from '@/assets/images/index/clothing-history.png';
import personalData from '@/assets/images/index/personal-data.png';
import { navigateTo } from '@tarojs/taro';

const computedHeight = getNavBarHeight();
const state = reactive({
  page: 0,
  swiperList: [
    {
      id: 1,
      imageSrc: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
    },
    {
      id: 2,
      imageSrc: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
    }
  ],
  fucList: [
    {
      id: 1,
      imageSrc: food,
      text: '预约订餐',
      viewRouter: '/pages/food/home/home'
    },
    {
      id: 2,
      imageSrc: clothing,
      text: '洗衣预约',
      viewRouter: '/pages/clothing/home/home'
    },
    {
      id: 3,
      imageSrc: foodHistory,
      text: '订餐记录',
      viewRouter: '/pages/foodHistory/home/home'
    },
    {
      id: 4,
      imageSrc: clothingHistory,
      text: '洗衣历史',
      viewRouter: '/pages/clothingHistory/home/home'
    },
    {
      id: 5,
      imageSrc: personalData,
      text: '个人资料',
      viewRouter: '/pages/personalData/home/home'
    }
  ]
});
const jumpView = (url: string) => {
  navigateTo({
    url
  });
};
</script>
