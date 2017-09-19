<template>
  <div class="container">
    <form v-if="!isSubmited">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" class="form-control" v-model="userData.firstName">
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" class="form-control" v-model="userData.lastName">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
          </div>
          <app-switch v-model="storeData"></app-switch>
          <button class="btn btn-primary" @click.prevent="submited">Submit!</button>
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue';
export default {
  data() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      storeData: true,
      isSubmited: false
    }
  },
  methods: {
    submited() {
      this.isSubmited = true
    }
  },
  components: {
    'app-switch': Switch
  }
}
</script>

<style>

</style>
