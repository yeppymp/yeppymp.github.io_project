<template>
  <div>
    <div class="container content-lg">
      <div class="row">
        <div class="col-sm-2 sm-margin-b-30">
          <div class="text-right sm-text-left">
            <h2 class="margin-b-0">Welcome</h2>
            <p>{{ welcome }}</p>
          </div>
        </div>
        <div class="col-sm-8 col-sm-offset-1">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blog',
    data() {
      return {
        welcome: 'This is my blog. Enjoy reading!',
      };
    },
    mounted() {
      this.$Progress.finish();
    },
  };
</script>

<style scoped>
.content-lg {
  margin-top: 10vh;
}
</style>
