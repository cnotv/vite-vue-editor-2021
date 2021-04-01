<template>
  <div class="base-layout">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseLayout",
});
</script>

<style>
.base-layout {
  padding-top: 49px;
}

</style>