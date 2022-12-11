<script>
import axios from 'axios';

export default {
  data(){
    return {
        isStartCounter: false,
        totalCount: 218401
    }
  },
  mounted(){
    const _t = this;

    // 取得目前使用數
    axios.get('https://app.goodtogo.tw/test/containers/globalUsedAmount')
    .then(function (response) {
      // handle success
      _t.totalCount = +response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    // 監聽counter滑入事件
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting && !this.isStartCounter){
          this.isStartCounter = true;
          this.starCounter(this.$refs.counter, 200)
        }
      },
      {
        threshold: 0.5
      }
    );
    observer.observe(this.$refs.counter);
    
  },
  methods: {
    starCounter(t_counter, speed = 200, start = 0) {
      const value = +t_counter.getAttribute('data-target');
      const time = value / speed;
      if(start < value) {
        let now = Math.ceil(start + time)
        t_counter.innerText = now.toLocaleString("en-US");
        setTimeout(() => this.starCounter(t_counter, 200, now), 1);
      }else{
        t_counter.innerText = value.toLocaleString("en-US");
      }
    }
  }
};
</script>

<template>
  <section id="top" class="sec-top">
    <div class="main-bg">
      <img src="/img/home_banner.jpg"/>
    </div>
    <div class="container flex flex-col items-start">
      <h1 class="text-white text-4xl font-bold mb-5">
        好盒器<br />循環容器服務
      </h1>
      <p class="text-lg mb-5">
        與全台餐飲店家合作，<br />
        提供可重複使用的外帶循環容器，<br />
        享受美食，不用多產生一個垃圾！
      </p>
      <router-link to="/service/#rent" class="btn btn-border-yellow">開始使用</router-link>
    </div>
  </section>
  <section id="intro">
    <div class="container pt-32">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="img-rounded max-w-lg border-13 border-white mx-auto">
          <img src="/img/home_cups.jpg"/>
        </div>
        <div>
          <div class="mb-5">
            <h3 class="text-3xl mb-1 highlighter highlighter-blue-250">品質把關 <span class="font-extrabold">好安心</span></h3>
            <p class="mb-2">容器選用食品級PP材質，符合食藥署《食品器具容器包裝衛生標準》。清洗委託專業清洗廠，符合衛福部《餐具清洗良好作業指引》，每季SGS檢驗合格。</p>
            <p class="flex gap-4 flex-wrap">
              <router-link to="/service/#cup" class="link link-blue">容器介紹</router-link>
              <router-link to="/service/#clean" class="link link-blue">專業清洗流程</router-link>
              <router-link to="/service/#safe" class="link link-blue">SGS檢驗報告</router-link>
            </p>
          </div>
          <div class="mb-5">
            <h3 class="text-3xl mb-1 highlighter highlighter-blue-250">多點借還 <span class="font-extrabold">好方便</span></h3>
            <p class="mb-2">與全台餐飲店家合作，外帶外送直接使用循環容器盛裝你的餐點，享用完畢後，歸還到任一合作店家或自助歸還站。這裡借，那裡還，就是這麼方便！，每季SGS檢驗合格。</p>
            <p class="flex gap-4 flex-wrap">
              <router-link to="/service/#map" class="link link-blue">好盒器站點</router-link>
            </p>
          </div>
          <div>
            <h3 class="text-3xl mb-1 highlighter highlighter-blue-250">享受美食 <span class="font-extrabold">零廢棄</span></h3>
            <p class="mb-2">享受美食也可以不垃圾，循環容器透過清洗取代拋棄，邀請你一起選擇對環境更好的外帶方式！</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="how">
    <div class="container pt-32">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-extrabold highlighter">如何使用</h2>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-center">
          <div class="card border-gray mb-3">
            <h3 class="text-3xl font-extrabold">0<br />註冊</h3>
            <p>加入好盒器LINE好友<br />驗證手機號碼</p>
          </div>
          <p><router-link to="/service/#member" class="link link-yellow">會員權益</router-link></p>
        </div>
        <span class="material-symbols-rounded text-4xl mb-6 text-w-half">arrow_right</span>
        <div class="text-center">
          <div class="card border-black mb-3">
            <h3 class="text-3xl font-extrabold">1<br />借用</h3>
            <p>外帶時選用循環容器<br />並登記借出</p>
          </div>
          <p><router-link to="/service/#rent" class="link link-yellow">４種借用方式</router-link></p>
        </div>
        <span class="material-symbols-rounded text-4xl mb-6 text-w-half">arrow_right</span>
        <div class="text-center">
          <div class="card border-black mb-3">
            <h3 class="text-3xl font-extrabold">2<br />歸還</h3>
            <p>歸還到任一合作店家<br />或自助歸還站</p>
          </div>
          <p><router-link to="/service/#return" class="link link-yellow">２種歸還方式</router-link></p>
        </div>
        <span class="material-symbols-rounded text-4xl mb-6 text-w-half">arrow_right</span>
        <div class="text-center">
          <div class="card border-gray mb-3">
            <h3 class="text-3xl font-extrabold">∞<br />再來一次</h3>
            <p>累積環境影響力<br />謝謝你一起愛地球</p>
          </div>
          <p>　</p>
        </div>
      </div>
    </div>
  </section>
  <section id="partner">
    <div class="container pt-32">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-extrabold highlighter">響應夥伴</h2>
      </div>
      <div class="brands-list mb-8">
        <a class="w-28"><img src="/img/logo_partners/mcd_2x.png" alt="McDonald 麥當勞" /></a>
        <a class="w-28"><img src="/img/logo_partners/kfc_2x.png" alt="KFC 肯德基" /></a>
        <a class="w-28"><img src="/img/logo_partners/foodpanda_2x.png" alt="foodpanda" /></a>
      </div>
      <p class="text-center"><router-link to="/service/#map" class="link link-yellow">所有合作店家</router-link></p>
    </div>
  </section>
  <section id="total-reduce">
    <div class="container pt-24 pb-24 text-center">
      <h2 class="text-3xl mb-12">
        我們一起減少了<br />
          <span class="total-text" :data-target="totalCount" ref="counter">0</span><br />
        一次性容器
      </h2>
      <router-link to="/service/#rent" class="btn btn-bg-yellow">加入我們的行列</router-link>
    </div>
  </section>
</template>

<style scoped>
.sec-top {
  height: calc(100vh - var(--height-header));
  padding-top: 12vh;
  @apply relative flex items-center
}
.main-bg {
  z-index: -1;
  @apply absolute inset-0 overflow-hidden
}
.main-bg img {
  @apply w-full h-full object-cover
}
.brands-list {
  @apply flex flex-wrap items-center justify-center gap-10 max-w-2xl mx-auto
}
.total-text {
  @apply text-8xl text-blue font-extrabold mb-8 inline-block
}
</style>
