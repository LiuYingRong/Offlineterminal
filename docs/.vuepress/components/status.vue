<template>
  <span :class="[type,vertical]">{{text}}</span>
</template>

<script>
export default {
  props: ['type', 'text', 'vertical'],
}
</script>

<style lang="less" scoped>
.commonCss(@bg-color,@color:#FDFFFF) {
  display: inline-block;
  background-color: @bg-color;
  color: @color;
  border-radius: 3px;
  padding: 0px 6px;
  font-size: 14px;
}

.verticalCss() {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}

// 未开始
.start {
  .commonCss(#177ddc);
}
// 进行中
.processing {
  .commonCss(#e7c000);
}
// 已完成
.completed {
  .commonCss(#42b983);
}
// 错误
.error {
  .commonCss(#da5961);
}
// 废弃、终止
.abort {
  .commonCss(#bfbfbf);
}
.top {
  .verticalCss();
  vertical-align: top;
}
.bottom {
  .verticalCss();
  vertical-align: bottom;
}
</style>