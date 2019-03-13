<template>
  <div>
    <div class="container content-lg">
      <div class="row">
        <div class="col-sm-2 sm-margin-b-30">
          <div class="text-right sm-text-left">
            <h2 class="margin-b-0">Intro</h2>
            <p>What I am all about.</p>
          </div>
        </div>
        <div class="col-sm-8 col-sm-offset-1">
          <div class="margin-b-30">
            <p>{{ desc }}</p>
          </div>

          <div v-for="(s, i) in skills" :key="i">
            <br v-if="i > 0">
            <h2 class="sub-skills">{{ s.title }}</h2>
            <div class="progress-box" v-for="(d, id) in s.data" :key="id">
              <h5>{{ d.name }} <span class="color-heading pull-right">{{ d.percentage }}</span></h5>
              <div class="progress">
                <div class="progress-bar bg-color-base" :style="{ width: d.percentage }"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    data() {
      return {
        skills: [],
        desc: 'I\'m Yeppy, because my hobby in the world of programming, and a high curiosity, I learn self-taught, and join the community out there',
      };
    },
    mounted() {
      this.$Progress.finish();
      this.skills = this.$store.state.skills;
    },
  };
</script>

<style scoped>
.content-lg {
  margin-top: 10vh;
}
.bg-color-base {
  background-color: #0ca;
}
.sub-skills {
  margin-top: 32px;
}
</style>
