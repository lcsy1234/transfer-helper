<template>
  <div v-for="aiList in aiLists" class="list" @click="intoEach">
    {{ aiList.bot_name }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { aiListreq } from "../../request/chat";
interface AiList {
  id: string;
  bot_info: string;
  bot_name: string;
  user_info: string;
  user_name: string;
}

const aiLists = ref<Array<AiList>>([]);
const intoEach = function () {
  uni.navigateTo({
    // test?id=1&name=uniapp
    url: "/pages/detail/index",
  });
  debugger;
};
onMounted(async () => {
  let res = await aiListreq({});
  aiLists.value = res.aiList;
});
</script>

<style lang="scss" scoped>
.list {
  width: 100vw;
  height: 50px;
  background-color: rgb(237, 245, 245);
  border-bottom: 2px solid #92d7ee;
}
</style>
