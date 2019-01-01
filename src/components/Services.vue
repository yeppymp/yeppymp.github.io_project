<template>
  <div class="page">
    <section id="services" class="services-section section-space-padding">
      <i class="icon-close" @click="close()" title="Close"></i>

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="section-title text-center">
              <h2>My Services.</h2>
                <div class="divider dark">
                <i class="icon-drop"></i>
              </div>
              <p>{{ desc }}</p>
            </div>
          </div>
        </div>
            
        <div class="row margin-top-30">
          <div class="col-md-4 col-sm-6" v-for="s in services" :key="s">
            <div class="services-detail">
              <i :class="[ s.icon ]" :style="{ color: s.color }"></i>
              <h3>{{ s.title }}</h3>
              <hr>
            </div>
          </div>            
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'services',
    data() {
      return {
        services: [],
        desc: 'Here are the services i can provide',
      };
    },
    mounted() {
      this.$Progress.finish();
      this.services = this.$store.state.services;
    },
    methods: {
      close() {
        this.$Progress.start();
        this.$router.push('/');
      },
    },
  };
</script>

<style scoped>
.page {
  margin: 0;
  height: 100vh;
}
.services-section {
  background-color: #eee;
}

.services-section hr {
  border-bottom: 2px solid #22A7F0;
  width: 42px;
  margin: 0 auto;
}

.services-section .services-detail {
  border-radius: 100%;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(90, 91, 95, 0.15);
  transition: all 0.3s ease-in-out;
  position: relative;
  width: 300px;
  height: 300px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 30px;
}

.services-section .services-detail:hover {
  border-bottom-right-radius: 4px;
  box-shadow: 0px 16px 22px 0px rgba(90, 91, 95, 0.3);
  top: -5px;
}

.services-section .services-detail i {
  font-size: 42px;
  margin-top: 88px;
  display: inline-block;
  vertical-align: middle;
}

 .margin-top-30 {
   margin-top: 30px;
 }
</style>

