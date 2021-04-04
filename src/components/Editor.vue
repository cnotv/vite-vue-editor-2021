<template>
  <BaseLayout>
    <TextBlock
      v-for="(block, i) in blocks"
      v-bind:key="i"
      :isFocused="canFocus && selected === i"
      @click="focus(i)"
    >
      <template #char>
        <div
          :contenteditable="isEditable"
        >{{ block.Character }}</div>
      </template>
      <template #text>
        <div
          :contenteditable="isEditable"
        >{{ block.Text }}</div>
      </template>
      <template #delete>
        <DelButton v-if="isDeletable" />
      </template>
    </TextBlock>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLayout from '../layout/BaseLayout.vue'
import TextBlock from './TextBlock.vue'
import { DataText } from "../models/data-text.interface";
import DelButton from './../components/DelButton.vue'

export default defineComponent({
  name: 'Editor',
  components: {
    BaseLayout,
    TextBlock,
    DelButton
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