<template>
  <BaseLayout class="right">
    <TextBlock text="placeholder text :)" />
    <TextBlock text="placeholder text :)" />
    <TextBlock text="placeholder text :)" />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from './../layout/BaseLayout.vue'
import TextBlock from './../components/TextBlock.vue'

export default defineComponent({
  name: 'Right',
  components: {
    BaseLayout,
    TextBlock
  }
})
</script>

<style>
.right {
  background-color: #0F1C1F;
}
</style>