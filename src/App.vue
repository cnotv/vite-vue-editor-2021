<template>
  <Left />
  <Right />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";

export default defineComponent({
  name: "App",
  components: {
    Left,
    Right,
  },
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
</style>