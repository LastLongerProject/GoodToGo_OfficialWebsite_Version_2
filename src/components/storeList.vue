<script>
import axios from 'axios';
import taiwanCountyList from '../assets/address.json';

export default {
  data(){
    return {
      storeList: [],
      resultList: [],
      todayDay: 0,
      tomorrowDay: 1,
      dayList: ['日', '一', '二', '三', '四', '五', '六'],
      showAmount: 12,
      dropdownCountys: [],
      region: '',
      search: '',
    }
  },
  mounted(){
    const _t = this
    _t.storeList = new Array(6)

    // 取得今日星期
    const today = new Date();
    _t.todayDay = today.getDay()
    _t.tomorrowDay = _t.todayDay + 1
    if (_t.tomorrowDay > 6) {
        _t.tomorrowDay = 0;
    };

    // 正常的縣市名稱
    let totalCountyList = Object.keys(taiwanCountyList);
    totalCountyList = Array.from(totalCountyList, c => c.replace('臺', '台'));

    axios.get('https://app.goodtogo.tw/test/stores/list/forOfficialPage')
    .then(function (response) {
      // 初步處理取得的店家列表資料
      const storeList = Array.from(response.data.storeList, (s) => {
        s.address.replace('臺', '台')
        if(!totalCountyList.some(county => s.address.includes(county))){
          s.address = '台灣金門縣' + s.address
        }
        if(!s.photo){
          s.photo = 'https://app.goodtogo.tw/test/images/store/636?ref=AfLeUgNyyzgsp_L88Ht6Wn7vOklj-Y40ivZzITnbDo5u-hotTIgMwNteu6TdLx4ZhBvDZgJ7qJJLBdV07y_gtD-QYAckhABzpNsLuJ1oBI0H05Wmp4R5f9dwqdGAfY4k42Fb8AZRoPRsxSLKd6iYI2it-Z230gVb-5IDqhQ3j6l6G_251Hvf'
        }
        return s
      });

      return storeList
    })
    .then(function(list) {
      // 取合作店家地址當縣市名稱
      let countyListFromStoreAddress = Array.from(list, s => s.address.substring(2,5));
      countyListFromStoreAddress = [...new Set(countyListFromStoreAddress)];

      _t.dropdownCountys = countyListFromStoreAddress.filter(c => totalCountyList.includes(c));
      _t.storeList = list

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });      
  },
  methods: {
    getOpenTimeString(store) {
        const _t = this
        const period = store.opening_hours.periods[this.todayDay]
        if(period){
          return '今日營業時間：' + period.open.time + ' - ' + period.close.time
        } else {
          return '今日休息中'
        }
    },
    defaultImg(store) {
      if(!store.tryimg){
        store.tryimg = 0
      } else {
        store.tryimg ++
      }
      let src = store.photo
      store.photo = 'https://app.goodtogo.tw/test/images/store/636?ref=AfLeUgNyyzgsp_L88Ht6Wn7vOklj-Y40ivZzITnbDo5u-hotTIgMwNteu6TdLx4ZhBvDZgJ7qJJLBdV07y_gtD-QYAckhABzpNsLuJ1oBI0H05Wmp4R5f9dwqdGAfY4k42Fb8AZRoPRsxSLKd6iYI2it-Z230gVb-5IDqhQ3j6l6G_251Hvf'
      if(store.tryimg < 3){
        setTimeout(() => {
          store.photo = src
        }, 100)
      }
    },
    hasKeywords(store, searchList){
      if(searchList.every(keyword => store.address.includes(keyword) || store.name.includes(keyword))){
        return true
      }else {
        return false
      }
    }
  },
  computed: {
    showList() {
      if(this.region.length == 0){
        this.resultList = this.storeList
      } else {
        let result = this.storeList.filter(store => store.address.includes(this.region));
        this.resultList = result
      }

      if(this.search != ''){
        let searchList = this.search.split(' ')
        this.resultList = this.resultList.filter(store => this.hasKeywords(store, searchList))
      }

      return this.resultList.slice(0, this.showAmount);
    }
  }
}

</script>

<template>
    <div class="store-list-wrap rounded-xl overflow-hidden border-2 border-blue">
      <div class="store-list-header pt-6 pb-4 px-4 lg:px-8 bg-blue">
        <div class="flex gap-4 flex-col lg:flex-row items-stretch justify-between">
          <div class="bg-white rounded-md px-4 py-1 font-bold flex justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <select v-model="region" class="w-full">
                  <option value="">全台</option>
                  <option v-for="addr in dropdownCountys" >{{ addr }}</option>
            </select>
          </div>
          <div class="flex flex-wrap items-stretch gap-4 order-3 lg:order-none">
            <button class="bg-blue-100 hover:bg-blue-250 px-4 py-2 font-bold rounded-md" @click="search='自助'">自助</button>
            <button class="bg-blue-100 hover:bg-blue-250 px-4 py-2 font-bold rounded-md" @click="search='麥當勞'">麥當勞</button>
            <button class="bg-blue-100 hover:bg-blue-250 px-4 py-2 font-bold rounded-md" @click="search='全家'">全家</button>
            <button class="bg-blue-100 hover:bg-blue-250 px-4 py-2 font-bold rounded-md" @click="search='7-11'">7-11</button>
          </div>
          <div class="bg-white rounded-md pl-4 pr-2 py-1 font-bold flex justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input v-model="search" size="3" class="w-full" />
          </div>
        </div>
        <div class="pt-2">
          <span class="text-sm font-bold text-white"><span v-if="search">「{{search}}」的</span>搜尋結果：{{ region == '' ? '全台':region }}有 {{ resultList.length }} 個合作站點</span>
        </div>
      </div>
      <div class="store-list-body pr-2 ">
        <div class="store-list-content px-4 lg:pl-8 lg:pr-6 py-6 scrollbar-light">
          <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
            <li v-for="(store, index) in showList" :key="index" class="flex gap-3">
                <template v-if="store">
                  <div class="store-photo-wrap">
                    <img :src="store.photo" @error="defaultImg(store)" loading="lazy" />
                  </div>
                  <div class="grow overflow-hidden">
                      <h4 class="text-lg font-black ellipse-1">{{ store.name }}</h4>
                      <p class="text-2xs ellipse-1 leading-6">{{ store.address }}</p>
                      <p class="text-2xs text-gray-900 ellipse-1">{{ getOpenTimeString(store) }}</p>
                  </div>
                </template>
                <template v-else>
                  <div class="store-photo-wrap animate-pulse">
                    <div class="bg-gray w-full h-full"></div>
                  </div>
                  <div class="grow overflow-hidden animate-pulse">
                    <div class="h-5 bg-gray rounded-full w-full mb-3"></div>
                    <div class="h-3 bg-gray rounded-full w-full mb-3"></div>
                    <div class="h-3 bg-gray rounded-full w-full"></div>
                  </div>
                </template>
            </li>
          </ul>
          <div v-if="resultList.length <= 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 stroke-gray mx-auto mb-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <p class="text-center text-gray-900">目前的搜尋條件查無合作站點，請試試其他條件。</p>
          </div>
          <div v-if="resultList.length > showList.length" class="text-center flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 stroke-blue-250 my-3 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            <button @click="showAmount+=24" class="btn btn-bg-blue">載入更多</button>
          </div>
        </div>
      </div>
    </div>
    
    
</template>

<style scoped>
.ellipse-1 {
    @apply whitespace-nowrap overflow-ellipsis overflow-hidden w-full
}
.store-photo-wrap {
    width: 72px;
    min-width: 72px;
    height: 72px;
    overflow: hidden;
    border-radius: 9999px;
}
.store-photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.store-list-wrap {
  box-shadow: 0 11px 0px var(--color-blue);
}
.store-list-content {
}
</style>