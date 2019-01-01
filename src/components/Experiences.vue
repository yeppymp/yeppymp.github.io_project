<template>
  <div class="page">
    <section class="section-space-padding">
      <i class="icon-close" @click="close()" title="Close"></i>

      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="section-title text-center">
              <h2>My Experience.</h2>
              <div class="divider dark">
                <i class="icon-graduation"></i>
              </div>
            </div>
          </div>
        </div>
            
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="experience">

              <div class="experience-item" v-for="s in schools" :key="s">
                <div class="experience-circle">
                  <i class="icon-graduation"></i> 
                  <p>{{ s.years }}</p>
                </div>
                <div class="experience-content experience-color-blue">
                  <h4>{{ s.title }}</h4>
                  <h6>{{ s.name }}</h6>
                  <p>{{ s.desc }}</p>
                </div>
              </div>
            
            </div>
          </div>

          <div class="col-md-6 col-sm-6">
            <div class="experience">
            
              <div class="experience-item" v-for="a in archievements" :key="a">
                <div class="experience-circle experience-company pink-color-bg">
                  <i class="icon-energy"></i>
                </div>
                <div class="experience-content">
                  <h4>{{ a.title }}</h4>
                  <h6>{{ a.years }}</h6>
                  <p>{{ a.desc }}</p>
                </div>
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
    name: 'experiences',
    data() {
      return {
        schools: [],
        archievements: [],
      };
    },
    mounted() {
      this.$Progress.finish();
      this.schools = this.$store.state.experiences.schools;
      this.archievements = this.$store.state.experiences.archievements;
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
body {
  overflow: hidden !important;
}
.page {
  margin: 0;
  height: 100vh;
}
.experience {
	margin-left: 70px;
	padding: 10px 0px;
}

.experience-item {
	position: relative;
	margin: 40px 0px;
}

.experience-circle {
	width: 120px;
	height: 120px;
	text-align: center;
	line-height: 35px;
	font-size: 14px;
	border-radius: 100%;
	position: absolute;
	left: -60px;
	color: #fff;
  background: #22A7F0;
	padding-top: 25px;
  box-shadow: -5px 6px 4px 0px rgba(90, 91, 95, 0.3);
}

.experience-circle i {
	display: block;
	font-size: 40px;
}

.experience-company i {
	font-size: 40px !important;
	margin-top: 15px !important;
}

.experience-circle p {
	font-size: 11px;
	margin-top: 5px;
  color: #fff
}

.experience-content {
	margin-left: 80px;
	position: relative;
	background: #fff;
	border: 2px solid #22A7F0;
	border-radius: 6px;
	padding: 20px 25px;
}

.experience-content h4 {
	line-height: 30px;
}

.experience-content:after, 
.experience-content:before {
	right: 100%;
	top: 35%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.experience-content:after {
	border-color: rgba(255, 255, 255, 0);
	border-right-color: #ffffff;
	border-width: 12px;
	margin-top: -20px;
}

.experience-content:before {
	border-color: rgba(238, 238, 238, 0);
	border-right-color: #22A7F0;
	border-width: 16px;
	margin-top: -21px;
}

.experience-content p {
	color: #696969;
}

.experience-color-blue {
	border: 2px solid #22A7F0 !important;
}

.experience-color-blue:before {
	border-right-color: #22A7F0 !important;
}
</style>

