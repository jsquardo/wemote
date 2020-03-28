<template>
  <div class="container">
    <Navbar />
    <Search />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Search from "../components/Search";

export default {
  name: "Home",
  components: {
    Navbar,
    Search
  }
};
</script>