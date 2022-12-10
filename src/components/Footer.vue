<script>

</script>

<template>
  <footer class="bg-blue text-white">
    <div class="container py-6 text-center">
        <div class="mt-5 mb-8 flex gap-5 justify-center">
            <a href="https://www.facebook.com/goodtogo.tw" target="_blank" class="link-img"><img src="../assets/img/icon_facebook_circle.svg" class="social-media-icon" /></a>
            <a href="https://www.instagram.com/goodtogo.tw/" target="_blank" class="link-img"><img src="../assets/img/icon_instagram_circle.svg" class="social-media-icon" /></a>
            <a href="mailto:hi@goodtogo.tw" target="_blank" class="link-img"><img src="../assets/img/icon_mail_circle.svg" class="social-media-icon" /></a>
        </div>
        <p class="text-blue-100">© 2022 人嶼物股份有限公司</p>
    </div>
  </footer>
</template>

<style scoped>
.social-media-icon {
    display: inline-block;
}
.link-img {
  opacity: 0.9;
  @apply transition
}
.link-img:hover {
  opacity: 1;
}
</style>
