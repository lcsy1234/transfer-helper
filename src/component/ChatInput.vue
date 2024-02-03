<template>
  <div class="chatInput">
    <input
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @confirm="handleEnter"
      v-if="inputStatus !== InputStatus.Broast"
      type="text"
      class="input"
      placeholder="请输入......"
    />
    <div v-if="inputStatus === InputStatus.Broast" class="input">
      <div class="enter-speake">按住说话</div>
    </div>
    <div class="input-icon-wrapper">
      <image
        v-if="inputStatus === InputStatus.Broast"
        @click="inputStatus = InputStatus.Keyboard"
        src="@/static/images/keyboard.png"
        class="input-icon"
      />
      <image
        v-if="inputStatus === InputStatus.Keyboard"
        @click="inputStatus = InputStatus.Broast"
        src="@/static/images/broast.png"
        class="input-icon"
      />
      <image
        v-if="inputStatus === InputStatus.Keyboarding"
        @click="emit('send')"
        src="@/static/images/send.png"
        class="input-icon"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "send"]);
const handleEnter = (e) => {
  emit("send");
};
enum InputStatus {
  Keyboard, //键盘状态
  Broast, //语音状态
  Keyboarding, //键盘并且输入框有内容
}
const inputStatus = ref<InputStatus>(InputStatus.Keyboard);
watch(props, () => {
  if (props.modelValue) {
    inputStatus.value = InputStatus.Keyboarding;
  } else if (!props.modelValue) {
    inputStatus.value = InputStatus.Keyboard;
  }
});
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
  .input {
    padding-left: 16px;
    width: 90%;
    height: 50%;
    border: 1px solid rgb(131, 180, 229);
    border-radius: 5px;
    box-shadow: 0 5px 5px 3px rgb(131, 180, 229);
    .enter-speake {
      color: rgb(28, 71, 92);
      font-weight: 700;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.input-icon-wrapper {
  bottom: 36px;
  position: absolute;
  right: 30px;
  width: 25px;
  height: 25px;
  z-index: 10;
}
.input-icon {
  width: 25px;
  height: 25px;
}
</style>
