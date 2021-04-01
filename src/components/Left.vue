<template>
  <BaseLayout class="left">
    Left
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from './../layout/BaseLayout.vue'

export default defineComponent({
  name: 'Left',
  components: {
    BaseLayout
  }
})
</script>

<style>
.left {
  background-color: #18262B;
}
</style>