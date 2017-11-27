<template>
  <div>
    <h3>Some User Details</h3>
    <p> User loaded has ID : {{$route.params.id}}</p>
    <router-link class="btn btn-primary" tag="button" :to="'/user/'+$route.params.id+'/edit'">Edit User V1</router-link>
    <router-link class="btn btn-primary" tag="button" :to="{name:'userEdit', params: {id : $route.params.id}, query: {locale:'en', q:100}}">Edit User V2</router-link>
  </div>
</template> 