<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | to-lowercase}}</p>
        <input v-model="filterText" type="text" />
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
        <applist></applist>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  data() {
    return {
      text: "Hello ! YhjkhJKYuiyhjkhjkh ",
      fruits: ["Apple", "Banana", "Mango", "Melon", "Lemon"],
      filterText: ""
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  components: {
    applist: List
  }
};
</script>

<style>

</style>
