<template>
  <BaseLayout>
    <TextBlock
      v-for="(block, i) in blocks"
      v-bind:key="i"
      :isFocused="focused === i || selected === i"
      @click="onFocus(i)"
    >
      <template #char>
        <div
          :contenteditable="isEditable"
          @input="onInput($event.target.innerText, i, 'Character')"
        >{{ block.Character }}</div>
      </template>
      <template #text>
        <div
          :contenteditable="isEditable"
          @input="onInput($event.target.innerText, i, 'Text')"
        >{{ block.Text }}</div>
      </template>
      <template #delete>
        <DelButton
          v-if="isDeletable"
          @click="onDelete(i)"
        />
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
  emits: ['delete', 'update', 'focus'],
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
    focused: {
      type: Number,
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
    onFocus(i: number) {
      if (!this.canFocus) {
        return;
      }

      this.selected = i;
      this.$emit('focus', i);
    },
    onInput(value: string, i: number, target: keyof DataText) {
      this.$emit('update', {value, i, target});
    },
    onDelete(i: number) {
      const blocks = this.blocks.filter((x: DataText, index: number) => index !== i)
      this.$emit('delete', blocks);
    }
  }
})
</script>

<style>
</style>