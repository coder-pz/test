<template>
  <nut-tabs v-model="state.tab1value">
    <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
    <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
    <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
  </nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0'
    });
    return { state };
  }
};
</script>
