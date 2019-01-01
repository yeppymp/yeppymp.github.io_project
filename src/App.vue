<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>

    <header class="header navbar-fixed-top" v-show="experiences()">
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="menu-container js_nav-item">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="toggle-icon"></span>
                    </button>

                    <div class="logo">
                        <a class="logo-wrap" href="/">
                            <img class="logo-img logo-img-main" src="../static/img/logo.png" alt="Asentus Logo">
                            <img class="logo-img logo-img-active" src="../static/img/logo-dark.png" alt="Asentus Logo">
                        </a>
                    </div>
                </div>
                
                <div class="collapse navbar-collapse nav-collapse">
                    <div class="menu-container">
                        <ul class="nav navbar-nav navbar-nav-right">
                            <li class="js_nav-item nav-item" v-for="item in menuItems" :class="{ active: checkPath(item.path) }" :key="item">
                              <a @click.prevent="goTo(item.path)" class="nav-item-child nav-item-hover">{{ item.text }}</a>
                            </li>
                            <li class="js_nav-item nav-item">
                              <a href="https://yeppymp.github.io/portfolio" class="nav-item-child nav-item-hover" target="_blank">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuItems: [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/experiences', text: 'Experiences' },
        { path: '/services', text: 'Services' },
        { path: '/skills', text: 'Skills' },
        // { path: '/blog', text: 'Blog' },
      ],
    };
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$Progress.start();
        this.$router.push(path);
      }
    },
    checkPath(path) {
      if (this.$route.path !== path) return false;
      return true;
    },
    experiences() {
      if (this.$route.path === '/experiences' || this.$route.path === '/services') return false;
      return true;
    },
  },
};
</script>

<style>
.page {
  margin-top: 15vh;
  height: 85vh;
}

.nav-item-hover {
  cursor: pointer;
}

/* vue router transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

/* divider */

.divider > i {
	color: #22A7F0;
	font-size: 21px;
}

.divider {
	position: relative;
	width: 126px;
	margin: 0 auto;
	overflow: hidden;
	text-align: center;
}

.divider:after,
.divider:before {
	content: ' ';
	width: 43px;
	position: absolute;
	border-bottom: dotted 2px #ffffff;
	top: 50%;
	margin-top: -4px;
}

.divider:before {
	left: 0;
}

.divider:after {
	right: 0;
}

.divider.dark:after,
.divider.dark:before {
	border-color: #b2b2b2;
}

.icon-close {
  position: absolute;
  cursor: pointer;
  font-size: 2em;
  z-index: 9999;
  right: 5vw;
  top: 5vh;
}
.section-space-padding {
  padding: 50px 0px;
}
.section-title h2 {
  font-weight: 600;
  font-size: 30px;
  margin-top: 0;
}
</style>;