<template>
  <div class="container">
    <figure class="image">
      <img src="../assets/desk-illustration.svg" alt />
    </figure>

    <h2 class="mt-1 is-size-3 has-text-centered has-text-weight-semibold">Find a Remote Job!</h2>
    <section class="mt-1">
      <b-field>
        <b-input
          placeholder="Search..."
          v-model="search"
          type="search"
          icon="magnify"
          icon-clickable
          @icon-click="searchIconClick"
        ></b-input>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchIconClick() {
      alert("You want to search?");
      this.search = "";
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
}

.mt-1 {
  margin-top: 1rem;
}
</style>