<template>
  <div>
    <h3>Some User Details</h3>
    <p> User loaded has ID : {{$route.params.id}}</p>
    <router-link class="btn btn-primary" tag="button" :to="'/user/'+$route.params.id+'/edit'">Edit User V1</router-link>
    <router-link class="btn btn-primary" tag="button" :to="{name:'userEdit', params: {id : $route.params.id}, query: {locale:'en', q:100}}">Edit User V2</router-link>
    <router-link class="btn btn-primary" tag="button" :to="link">Edit User V3</router-link>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter");
    //  La data n'est pas accessible avant le next() !
    /*next(vm => {
      // Function de callBack
      vm.link;
    });*/
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>