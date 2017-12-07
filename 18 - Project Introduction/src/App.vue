<template>
  <div class="container">
    <router-view name="header-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
