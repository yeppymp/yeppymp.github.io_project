<template>
  <div class="home">
    <div class="promo-block parallax-window">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="promo-block-divider">
                        <h1 class="promo-block-title">{{ fname }} <br/> {{ lname }}</h1>
                        <p class="promo-block-text">{{ work }}</p>
                    </div>
                    <ul class="list-inline">
                        <li><a href="https://www.facebook.com/yeppymp" class="social-icons"><i class="icon-social-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/yeppymp" class="social-icons"><i class="icon-social-instagram"></i></a></li>
                        <li><a href="https://www.github.com/yeppymp" class="social-icons"><i class="icon-social-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/yeppy-mangun-puspitajudin-05a361120/" class="social-icons"><i class="icon-social-linkedin"></i></a></li>
                    </ul>
                </div>
                <div class="col-sm-6">
                  <img src="../../static/img/yp.png" alt="" class="home-image">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      fname: 'Yeppy',
      lname: 'Mangun Puspitajudin',
      work: 'Software Developer',
      router: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.router.push({
        name: route.name,
        path: route.path,
      });
    });
  },
  mounted() {
    document.body.classList.remove('page-on-scroll');
    this.$Progress.finish();
  },
  destroyed() {
    document.body.classList.add('page-on-scroll');
  },
};
</script>

<style scoped>
  .promo-block {
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center
  }
  .parallax-window {
    background-color: #7CE1FE;
    text-align: left
  }
  .promo-block-title {
    font-size: 3.5em;
  }
  .home-image {
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
  }
</style>
