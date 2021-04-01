<template>
  <BaseLayout class="left">
    <TextBlock
      char="man 1"
      text="placeholder text :)"
      isDeletable="true"
    />
    <TextBlock
      char="man 1"
      text="placeholder text :)"
      focused="true"
      isDeletable="true"
      isFocused="true"
    />
    <TextBlock
      char="man 1"
      text="placeholder text :)"
      isDeletable="true"
    />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from './../layout/BaseLayout.vue'
import TextBlock from './../components/TextBlock.vue'

export default defineComponent({
  name: 'Left',
  components: {
    BaseLayout,
    TextBlock
  },
})
</script>

<style>
.left {
  background-color: #18262B;
}
</style>