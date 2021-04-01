<template>
  <BaseLayout>
    <TextBlock
      v-for="(block, i) in blocks"
      :char="block.Character"
      v-bind:key="i"
      :text="block.Text"
      :isDeletable="isDeletable"
      :isFocused="canFocus && selected === i"
      @click="focus(i)"
    />
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '../layout/BaseLayout.vue'
import TextBlock from './TextBlock.vue'
import { DataText } from "../models/data-text.interface";

export default defineComponent({
  name: 'Editor',
  components: {
    BaseLayout,
    TextBlock
  },
  props: {
    isEditable: {
      type: Boolean,
    },
    isDeletable: {
      type: Boolean,
    },
    canFocus: {
      type: Boolean,
    },
    blocks: {
      type: Object as DataText[],
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    focus(i: number) {
      this.selected = i;
    }
  }
})
</script>

<style>
</style>