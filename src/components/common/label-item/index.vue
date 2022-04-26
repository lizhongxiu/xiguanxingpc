<template>
  <div :class="$style['label-item']">
    <div
      :class="$style['label']"
      :style="labelWidth > 0 ? { width: labelWidth + 'px' } : ''"
    >
      <span v-if="required" class="red">* </span>{{ label }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "label-item",

  props: {
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" module>
.label-item {
  display: inline-flex;
  justify-content: center;
  align-items: baseline;
}

.label {
  margin-right: 12px;
  word-break: keep-all;
  text-align: right;
}
</style>
