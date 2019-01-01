<template>
  <div class="page">
    <section id="about" class="section">
      <div class="container">
          <div class="row">
            <div class="about-wrapper">

              <div class="col-md-6 col-sm-6 photo">
                <div class="about-photo">
                  <img src="../../static/img/man.png" alt="About Photo" />
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12 col-sm-12">
                <div class="about-content">
                  <h4>{{ greeting }}</h4>
                  <p class="text-justify" v-for="d in desc" :key="d"> {{ d }}</p>
                  <a href="" class="btn btn-default">Hire Me !</a>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      greeting: '',
      desc: [],
    };
  },
  mounted() {
    this.desc = this.$store.state.abouts.desc;
    this.greeting = this.$store.state.abouts.greeting;
    this.$Progress.finish();
  },
};
</script>

<style scoped>
.section {
  padding-top: 75px;
  position: relative;
  overflow: hidden;
}
.about-content {
  margin-top: 70px;
}
.about-content h4 {
  font-size: 18px;
}
.about-content .btn {
  background-color: #29C5FF;
  border-color: transparent;
  transition: all .25s;
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 15px;
  color: white;
}
.about-content .btn:hover {
  background-color: #fff;
  border-color: #757575;
  color: #757575
}

@media screen and (max-width: 768px) {
  .col-md-6.col-sm-6.photo {
    display: none
  }
}
</style>


