<template>
  <div class="chatInputOut">
    <div class="chatInput">
      {{ contentLog }}
      <input
        type="text"
        class="input"
        placeholder="请输入"
        v-model="contentLog"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const contentLog = ref("you");
console.log("%c Line:17 🍢 contentLog", "color:#465975", contentLog);
</script>

<style lang="scss" scoped>
.chatInput {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 15vh;
  background-color: #d2ecf9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input {
  width: 90%;
  height: 50%;
  border: 1px solid rgb(82, 178, 229);
  border-radius: 5px;
  box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
}
</style>
