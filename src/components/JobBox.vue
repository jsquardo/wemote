<template>
  <div class="container">
    <ul id="v-for-object">
      <li v-for="job in jobData" v-bind:key="job.id">
        <div class="box mt-2 mb-2">
          <div class="box-flex">
            <div class="left">
              <img :src="job.company_logo" alt />
              <p>{{ job.company }}</p>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "JobBox",
  mounted() {
    this.$store.dispatch("loadJobs");
  },
  computed: mapState(["jobData"])
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.box-flex {
  display: flex;
  flex-direction: row;
}

.left {
  display: flex;
  width: 50%;
}

.right {
  display: flex;
  width: 50%;
}
</style>