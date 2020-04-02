<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
body {
  background-color: #e5e6eb;
}

.container {
  max-width: 62rem;
}
</style>
