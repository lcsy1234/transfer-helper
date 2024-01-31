<template>
  <div class="chatInputOut">
    <scroll-view scroll-y="true" class="scroll-y">
      <div v-for="dialog in contentArr" :class="dialog.source">
        <span>{{ dialog.value }}</span>
      </div>
    </scroll-view>
    <div class="chatInput">
      <input
        type="text"
        class="input"
        placeholder="请输入......"
        v-model="contentLog"
      /><button @click="send" class="send2">发送</button>
    </div>
    <div class="chatInput2">
      <input
        type="text"
        class="input"
        placeholder="请输入......"
        v-model="contentLog2"
      /><button @click="send2" class="send">发送</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
interface Message {
  source: string;
  value: string;
}

const contentLog = ref<string>("");
const contentLog2 = ref<string>("");
const contentArr = ref<Message[]>([
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
  { source: "rightDialog", value: "you" },
]);
// const dialogClass = ref("");
const send = () => {
  if (contentLog.value) {
    contentArr.value.push({ source: "leftDialog", value: contentLog.value });
    contentLog.value = "";
  }
};
const send2 = () => {
  console.log("%c Line:43 🍆 contentLog2", "color:#ffdd4d", contentLog2);

  if (contentLog2.value) {
    contentArr.value.push({ source: "rightDialog", value: contentLog2.value });
    contentLog2.value = "";
  }
};
</script>
<style lang="scss" scoped>
.chatInputOut {
  position: relative;
}
.chatInput2 {
  position: fixed;
  bottom: 15vh;
  width: 100vw;
  height: 15vh;
  background-color: #d2ecf9;
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    width: 90%;
    height: 50%;
    border: 1px solid rgb(159, 214, 244);
    border-radius: 5px;
    box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
  }
  .send {
    padding: 4px, 0, 0, 0;
    // line-height: %;

    margin-left: 3px;
    height: 50%;
    font-size: small;
    box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
  }
}
.chatInput {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 15vh;
  background-color: #d2ecf9;
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    width: 90%;
    height: 50%;
    border: 1px solid rgb(159, 214, 244);
    border-radius: 5px;
    box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
  }
  .send {
    padding: 4px, 0, 0, 0;
    // line-height: %;

    margin-left: 3px;
    height: 50%;
    font-size: small;
    box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
  }
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
  height: 70vh;
}
</style>
