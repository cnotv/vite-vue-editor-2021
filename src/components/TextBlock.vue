<template>
  <div class="text-block__wrapper">
    <div class="text-block" :class="{ 'text-block--focused': isFocused }">
      <div class="text-block__content">
        <div class="text-block__char">{{ char }}</div>
        <div class="text-block__text">{{ text }}</div>
      </div>
    </div>
    <DelButton v-if="isDeletable" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DelButton from './../components/DelButton.vue'

export default defineComponent({
  name: "TextBlock",
  props: {
    char: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isDeletable: {
      type: Boolean,
    },
    isFocused: {
      type: Boolean,
    },
  },
  components: {
    DelButton
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
  }

  &__char {
    text-transform: uppercase;
    text-align: center;
  }
}
</style>