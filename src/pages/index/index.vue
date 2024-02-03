<template>
  <div class="chatInputOut">
    <scroll-view scroll-y="true" class="scroll-y">
      <div v-for="dialog in contentArr" :class="dialog.source">
        <span>{{ dialog.value }}</span>
      </div>
      <ChatInput v-model:modelValue="contentLog" @send="send" />
    </scroll-view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ChatInput from "@/component/ChatInput.vue";
import { chatText } from "@/request/chat";
interface Message {
  source: string;
  value: string;
}

const contentLog = ref<string>("");
const contentArr = ref<Message[]>([
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
]);
const send = async () => {
  if (contentLog.value) {
    contentArr.value.push({ source: "leftDialog", value: contentLog.value });
    const text = contentLog.value;
    contentLog.value = "";
    uni.showLoading({
      title: "加载中",
    });
    const res = await chatText({ text });
    contentArr.value.push({ source: "rightDialog", value: res.text });
    uni.hideLoading();
  }
};
console.log(uni.request, "uni");
</script>
<style lang="scss" scoped>
.chatInputOut {
  position: relative;
}
.leftDialog {
  // height: 20px;
  margin-left: 6px;
  margin-bottom: 10px;
  padding: 4px;
  width: auto;
  max-width: 50vw;
  min-width: 10vw;
  background-color: rgb(82, 178, 229);
  border: 1px solid black;
  border-radius: 8px;
}
.rightDialog {
  // height: 20px;
  // position: absolute;
  // right: 0;
  margin-left: 50vw;
  margin-bottom: 10px;
  padding: 4px;
  width: auto;
  max-width: 50vw;
  min-width: 10vw;
  background-color: rgb(82, 178, 229);
  border: 1px solid black;
  border-radius: 8px;
}
.scroll-y {
  height: 85vh;
}
</style>
