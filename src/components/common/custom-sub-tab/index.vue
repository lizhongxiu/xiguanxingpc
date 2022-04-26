<template>
  <div class="custom-sub-tab">
    <div class="tab-pane">
      <div ref="activeLine" class="active-line"></div>
      <div
        class="tab-item"
        v-for="item in options"
        :ref="item.name"
        :class="item.index === selectIndex ? 'active-tab' : ''"
        @click="clickTab(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-sub-tab",

  props: {
    // v-model 默认绑定 input事件
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectIndex: 1,
      tabLabelWidth: []
    };
  },

  watch: {
    value: function(val) {
      this.selectIndex = this.options.find(item => {
        return item.name === val;
      }).index;
      this.moveLine();
    }
  },

  mounted() {
    for (let i = 0; i < this.options.length; i++) {
      let tabItem = this.options[i];
      if (this.$refs[tabItem.name]) {
        this.tabLabelWidth.push(this.$refs[tabItem.name][0].offsetWidth);
      }
    }
    this.setLineWidth();
  },

  methods: {
    clickTab(item) {
      this.selectIndex = item.index;
      this.moveLine();
      this.$emit("input", item.name);
      this.$emit("tab-click", item);
    },
    setLineWidth() {
      let lineWidth = this.tabLabelWidth[this.selectIndex - 1] - 40;
      this.$refs.activeLine.style.width = `${lineWidth}px`;
    },
    moveLine() {
      this.setLineWidth();
      let xVal = 0;
      for (let i = 1; i < this.selectIndex; i++) {
        xVal += this.tabLabelWidth[i - 1];
      }
      xVal += 20;
      this.$refs.activeLine.style.transform = `translateX(${xVal}px)`;
    }
  }
};
</script>

<style lang="scss" module>
.custom-sub-tab {
  width: 100%;
  height: 50px;

  :global .tab-pane {
    width: 100%;
    height: 50px;
    display: flex;
    padding-top: 10px;
    position: relative;

    .tab-item {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;

      &:hover {
        color: #1890ff;
      }
    }

    .active-tab {
      color: #1890ff;
    }

    .active-line {
      width: 84px;
      height: 2px;
      background-color: #1890ff;
      position: absolute;
      bottom: 0;
      transform: translateX(20px);
      transition: transform 0.4s;
    }
  }
}
</style>
