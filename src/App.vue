<template>
  <Editor
    class="left"
    :blocks="data"
    :isDeletable="true"
    @update="update($event)"
  />
  <Editor
    class="right"
    :blocks="data"
    :isDeletable="false"
    :isEditable="true"
    :canFocus="true"
    @update="update($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Editor from "./components/Editor.vue";
import data from "./assets/data/VueChallenge2021.json";
import { DataText } from "./models/data-text.interface";

export default defineComponent({
  name: "App",
  components: {
    Editor,
  },
  data() {
    return {
      data: data as DataText[],
    };
  },
  methods: {
    update(data: DataText[]) {
      this.data = data
    }
  }
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;

  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;

  background-color: #217485;
}

.left {
  background-color: #18262B;
}

.right {
  background-color: #0F1C1F;
}
</style>