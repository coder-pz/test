<template>
  <view :class="styles.tabContent">
    <template v-for="goods in goodsList" :key="goods.id">
      <view :class="styles.foodItem">
        <image class="" :src="goods.goodsImageUrl" />
        <view :class="styles.goodsInfoContent">
          <view :class="styles.title">
            <view :class="styles.name">{{ goods.name }}</view>
            <view :class="styles.surplus" :style="getStatusColor(goods.surplusNum)"
              >剩余份数 {{ goods.surplusNum }}</view
            >
          </view>
          <view :class="styles.moneyAndHandle">
            <view :class="styles.moneyAndUnit">
              <text :class="styles.money">
                ￥<text :class="styles.num">{{ goods.money }}</text>
              </text>
              <text :class="styles.unit"> /个</text>
            </view>
            <view :class="styles.handle">
              <nut-icon
                @click="minusGoods(goods.id)"
                :class="styles.icon"
                font-class-name="customIcon"
                class-prefix="icon"
                name="minus"
                color="#ff8d1a"
              />
              <text :class="styles.selectNum"> {{ goods.selectNum }} </text>
              <nut-icon
                @click="addGoods(goods.id)"
                :class="styles.icon"
                font-class-name="customIcon"
                class-prefix="icon"
                name="jiahao-"
                color="#ff8d1a"
              />
            </view>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { defineComponent, computed, toRefs } from 'vue';
import styles from './index.module.scss';
interface goods {
  id: number;
  name: string;
  goodsImageUrl: string;
  surplusNum: number;
  selectNum: number;
  money: number;
}

export default defineComponent({
  props: {
    goodsList: {
      type: Array<goods>
    }
  },
  emits: ['addGoodsClick', 'minusGoodsClick'],
  setup(props, { emit }) {
    const { goodsList } = toRefs(props);
    const getStatusColor = computed(() => (num: number) => {
      if (num > 10) {
        return { color: '#78c348', background: '#f0f9eb' };
      } else {
        return { color: '#e6a23c', background: '#fdf6ec' };
      }
    });
    const addGoods = (id: number) => {
      emit('addGoodsClick', id);
    };
    const minusGoods = (id: number) => {
      emit('minusGoodsClick', id);
    };
    return {
      styles,
      goodsList,
      getStatusColor,
      addGoods,
      minusGoods
    };
  }
});
</script>
<style scoped></style>
