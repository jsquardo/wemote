<template>
  <div>
    <Navbar />
    <Search />
    <JobBox />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import JobBox from "../components/JobBox";

export default {
  name: "Home",
  components: {
    Navbar,
    Search,
    JobBox
  }
};
</script>