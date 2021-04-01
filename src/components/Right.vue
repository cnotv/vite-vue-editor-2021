<template>
  <BaseLayout class="right">
    Right
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from './../layout/BaseLayout.vue'

export default defineComponent({
  name: 'Right',
  components: {
    BaseLayout
  }
})
</script>

<style>
.right {
  background-color: #0F1C1F;
}
</style>