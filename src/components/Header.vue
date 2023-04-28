<script>
export default {
  data(){
    return {
        scrollPosition: 0,
        scrollBottom: 1200,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted () {
    const body = document.body,
          html = document.documentElement;
    const docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    this.scrollBottom = docHeight - window.innerHeight

    this.$refs.header.addEventListener('click', (e) => {
      if(e.target.tagName === 'A'){
        this.toggleHeader(0)
      } else if (e.target.closest('a')) {
        this.toggleHeader(0)
      }
    })
  },
  methods: {
    handleScroll (event) {
      if(this.$refs.header){
        this.detachedHeader(this.scrollPosition, window.scrollY)
      }
      this.scrollPosition = window.scrollY
    },
    detachedHeader (prev, position) {
      if (position <= 0 ) {
            this.$refs.header.classList.remove('detached')
            this.$refs.header.classList.remove('detachedHide')
            this.$refs.header.classList.remove('show')
      }else{
          if (prev > position) {
              this.$refs.header.classList.add('show')
          }else if(prev < position) {
              this.$refs.header.classList.remove('show')
              this.$refs.header.classList.add('detached')
              this.$refs.header.classList.add('detachedHide')
          }
          if (position >= this.scrollBottom) {
              this.$refs.header.classList.add('show')
          }
      }
    },
    toggleHeader (open) {
      if(!open){
        this.$refs.header.classList.remove('active')
      } else {
        this.$refs.header.classList.toggle('active')
      }
    }
  }
}
</script>

<template>
  <header class="header" ref="header">
    <div class="container py-2 md:py-4 lg:py-6">
      <div class="md:flex justify-between items-center">
        <div class="relative">
          <router-link to="/">
            <img src="/img/logo_goodtogo.svg" class="logo" alt="GoodToGo logo" />
          </router-link>
          <button class="header-toggler md:hidden" @click="toggleHeader">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 stroke-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <nav class="navbar">
          <ul class="primary-menu">
            <li>
              <router-link to="/service/">
                服務內容
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block -mt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </router-link>
              <ul class="dropdown-menu">
                <li><router-link to="/service/#cup">循環杯</router-link></li>
                <li><router-link to="/service/#clean">專業清洗</router-link></li>
                <li><router-link to="/service/#safe">食品安全檢驗</router-link></li>
                <li><router-link to="/service/#member">會員權益</router-link></li>
                <li><router-link to="/service/#rent">借用方式</router-link></li>
                <li><router-link to="/service/#return">歸還方式</router-link></li>
                <li><router-link to="/service/#map">合作站點</router-link></li>
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
  max-width: 160px;
  transition: all 0.4s ease;
}
.header-toggler {
  @apply absolute right-0 top-0 p-1
}
.navbar {
  @apply flex flex-col items-end gap-8
}
@media screen and (min-width: 768px) {
  .logo {
    max-width: 205px;
  }
  .navbar {
    @apply flex-row items-center gap-8
  }
}
.router-link-active {
}
.primary-menu {
  width: 100%;
  @apply pt-2
}
.primary-menu li {
  width: 100%;
  @apply text-right
}
.primary-menu a {
  white-space: nowrap;
  @apply px-4 py-3 text-lg block font-medium transition
}
.primary-menu li:hover > a,
.primary-menu li.hover > a
.primary-menu a.router-link-active {
  @apply text-blue
}
.primary-menu li {
  @apply relative
}
.dropdown-menu {
  transition: all 0.4s ease;
  @apply text-right
}
.dropdown-menu a {
  @apply text-sm
}
@media screen and (min-width: 768px) {
  .primary-menu {
    width: auto;
    @apply flex items-center gap-4 pt-0
  }
  .primary-menu li:hover .dropdown-menu,
  .primary-menu li.hover .dropdown-menu {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: initial;
  }
  .dropdown-menu {
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    @apply absolute right-2 bg-white py-1 text-right
  }
  .dropdown-menu a {
    @apply py-1 text-xs
  }
}
.header {
  z-index: 99;
  height: 55px;
  overflow: hidden;
  transition: all 0.4s ease;
  @apply bg-white fixed top-0 w-full
}
.header.active {
  height: 100vh;
  overflow-y: scroll;
}
.header.detached {
}
.header.detached .container {
  @apply py-2
}
.header.detached .logo {
  max-width: 160px;
}
.header.detached .primary-menu > li > a,
.header.detached .btn {
  @apply text-base
}
@media screen and (min-width: 768px) {
  .header {
    height: auto;
    overflow: visible;
  }
  .header.detachedHide {
    transform: translateY(-100%);
  }
  .header.detached.show {
    transform: translateY(0%);
  }
}

</style>
