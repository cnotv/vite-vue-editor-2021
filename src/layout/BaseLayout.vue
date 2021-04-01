<template>
  <div class="base-layout">
    <div class="base-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseLayout",
});
</script>

<style lang="scss">
.base-layout {
  padding-top: 49px;

  &__wrapper {
    width: 736px;
    margin: 0 auto;
  }
}

</style>