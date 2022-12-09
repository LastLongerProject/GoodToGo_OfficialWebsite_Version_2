<script setup>

</script>

<template>
  <header>
    <div class="container py-8">
      <div class="flex justify-between items-center">
        <img src="../assets/img/logo_goodtogo.svg" class="logo" alt="GoodToGo logo" />
        <nav class="flex items-center gap-8">
          <ul class="primary-menu">
            <li>
              <router-link to="/service">
                服務內容<span class="material-symbols-rounded">arrow_drop_down</span>
              </router-link>
              <ul class="dropdown-menu">
                <li><router-link to="/service">循環杯</router-link></li>
                <li><router-link to="/service">專業清洗</router-link></li>
              </ul>
            </li>
          </ul>
          <router-link to="/" class="btn btn-bg-yellow">加入會員</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  max-width: 205px;
}
.primary-menu {
  @apply flex items-center gap-4
}
.primary-menu a {
  @apply px-4 py-4 text-lg block font-medium transition
}
.primary-menu li:hover a,
.primary-menu li.hover a
.primary-menu a.router-link-active {
  @apply text-blue
}
.primary-menu li {
  @apply relative
}
.primary-menu a .material-symbols-rounded {
  vertical-align: sub;
}
.dropdown-menu {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 0.4s ease;
  @apply absolute right-4 bg-white py-1 text-right
}
.primary-menu li:hover .dropdown-menu,
.primary-menu li.hover .dropdown-menu {
  opacity: 1;
  transform: translateY(0px);
  pointer-events: initial;
}
.dropdown-menu a {
  @apply py-1 text-xs
}
</style>
