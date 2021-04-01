<template>
  <button class="del-button">
    <img src="./../assets/images/delete.svg" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DelButton",
});
</script>

<style lang="scss">
$button-size: 32px;
$btn-bg-color: #2f3a3d;

.del-button {
  background: $btn-bg-color;
  border: none;
  outline: none;
  width: $button-size;
  height: $button-size;
  padding: 0;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: lighten($btn-bg-color, 3%);
  }

  &:active {
    background-color: darken($btn-bg-color, 3%);
  }

  /* Shadow_Dark 4 DP */
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.19), 0px 1px 10px rgba(0, 0, 0, 0.16),
    0px 2px 4px rgba(0, 0, 0, 0.27);
  border-radius: 3px;
}
</style>