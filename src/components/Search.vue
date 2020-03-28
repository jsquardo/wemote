<template>
  <div class="container">
    <figure class="image">
      <img src="../assets/Group.png" alt />
    </figure>
    <section>
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
</style>