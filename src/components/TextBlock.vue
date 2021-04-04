<template>
  <div class="text-block__wrapper">
    <div class="text-block" :class="{ 'text-block--focused': isFocused }">
      <div class="text-block__content">
        <div class="text-block__char">
          <slot name="char"></slot>
        </div>
        <div class="text-block__text">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
    <slot name="delete"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextBlock",
  props: {
    isFocused: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss">
$border-size: 3px;

.text-block {
  background-color: #e8eced;
  margin-left: $border-size;
  position: relative;
  flex-grow: 1;
  transition: background-color 250ms, box-shadow 250ms;

  &--focused {
    background-color: #ece2d9;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.19),
      0px 1px 10px rgba(0, 0, 0, 0.16),
      0px 2px 4px rgba(0, 0, 0, 0.27);
    border-left: $border-size solid #e68939;
    margin-left: 0;
    z-index: 1;
  }

  &__wrapper {
    display: flex;
    gap: 10px;
  }

  &__content {
    width: 292px;
    padding: 6px;
    margin: 0 auto;
    word-wrap: break-word;
  }

  &__char {
    text-transform: uppercase;
    text-align: center;
  }

  &__char,
  &__text {
    &:focus {
      outline: none;
    }
  }
}
</style>