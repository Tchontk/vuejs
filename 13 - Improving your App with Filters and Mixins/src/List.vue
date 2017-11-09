<template>
  <div class="container">
    <div class="row">
      <h1>Filters & Mixins</h1>
      <input v-model="filterText" type="text" />
      <ul>
        <li v-for="fruit in filteredFruits">{{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin]
};
</script>

<style>

</style>
