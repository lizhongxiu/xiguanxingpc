<template>
  <el-button
    :class="$style['custom-button']"
    :type="type ? type : 'primary'"
    :size="size ? size : 'small'"
    @click="clickFunc"
  >
    <div :class="$style['button-content']">
      <div
        class="button-icon"
        :class="icon"
        :style="{ marginRight: dropdown ? '5px' : '10px' }"
      ></div>
      <div>{{ text }}</div>
      <i v-show="dropdown" class="el-icon-arrow-down el-icon--right"></i>
    </div>
  </el-button>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    type: String,
    size: String,
    dropdown: Boolean
  },
  data() {
    return {};
  },
  methods: {
    clickFunc() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" module>
.custom-button {
  width: 76px;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.button-content {
  display: flex;
  justify-content: center;
  align-items: center;

  :global .button-icon {
    width: 12px;
    height: 12px;
    background-size: 100% 100% !important;
  }

  :global .add {
    background: url("../../../assets/svg/add.svg");
  }
}
</style>
