<script>
import axios from 'axios';
import address from '../assets/address.json';

export default {
  data(){
    return {
      storeList: [],
      resultList: [],
      todayDay: 0,
      tomorrowDay: 1,
      dayList: ['日', '一', '二', '三', '四', '五', '六'],
      showAmount: 24,
      dropdownCountys: [],
      region: ''
    }
  },
  mounted(){
    const _t = this

    const today = new Date();
    _t.todayDay = today.getDay()
    _t.tomorrowDay = _t.todayDay + 1
    if (_t.tomorrowDay > 6) {
        _t.tomorrowDay = 0;
    };

    axios.get('https://app.goodtogo.tw/test/stores/list/forOfficialPage')
    .then(function (response) {
      // handle success
      _t.storeList = response.data.storeList;

      // 取合作店家地址當縣市名稱
      let countyListFromStoreAddress = Array.from(response.data.storeList, s => s.address.substring(2,5));
      countyListFromStoreAddress = [...new Set(countyListFromStoreAddress)];

      // 正常的縣市名稱
      let totalCountyList = Object.keys(address);
      countyListFromStoreAddress = Array.from(countyListFromStoreAddress, c => c.replace('臺', '台'));
      totalCountyList = Array.from(totalCountyList, c => c.replace('臺', '台'));

      _t.dropdownCountys = countyListFromStoreAddress.filter(c => totalCountyList.includes(c));

      console.log(_t.storeList)
      _t.storeList.forEach((store) => {
        if(!store.photo){
          store.photo = 'https://app.goodtogo.tw/test/images/store/636?ref=AfLeUgNyyzgsp_L88Ht6Wn7vOklj-Y40ivZzITnbDo5u-hotTIgMwNteu6TdLx4ZhBvDZgJ7qJJLBdV07y_gtD-QYAckhABzpNsLuJ1oBI0H05Wmp4R5f9dwqdGAfY4k42Fb8AZRoPRsxSLKd6iYI2it-Z230gVb-5IDqhQ3j6l6G_251Hvf'
        }
      })
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
            return '營業時間：週' + this.dayList[this.todayDay] + ' ' + period.open.time + ' - ' + period.close.time
        } else {
            console.log(store)
        }
    }
  },
  computed: {
    showList() {
      if(this.region.length == 0){
        this.resultList = this.storeList
      } else {
        let result = [];
        this.storeList.forEach(element => {        
          let county = element.address.substring(2,5);
          if(county.match(this.region))
            result.push(element);
        });

        this.resultList = result
      }
      
      return this.resultList.slice(0, this.showAmount);;
    }
  }
}

</script>

<template>
    <div class="store-list-wrap rounded-xl overflow-hidden border-2 border-blue">
      <div class="store-list-header pt-6 pb-4 px-8 bg-blue">
        <div class="flex">
          <div class="bg-white rounded-md px-4 py-1 inline-block font-bold">
            <span class="material-symbols-rounded text-2xl mr-4">location_on</span>
            <select v-model="region" class="align-super">
                  <option value="">全部</option>
                  <option v-for="addr in dropdownCountys" >{{ addr }}</option>
            </select>
          </div>
        </div>
        <div class="pt-2">
          <span class="text-sm font-bold text-white">搜尋結果：{{ region == '' ? '全部':region }}有 {{ region == '' ? storeList.length:resultList.length }} 個合作站點</span>
        </div>
      </div>
      <div class="store-list-body pr-2 ">
        <div class="store-list-content pl-8 pr-6 py-6 scrollbar-light">
          <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
            <li v-for="(store, index) in showList" :key="index" class="flex gap-3">
                <div class="store-photo-wrap">
                    <img :src="store.photo" />
                </div>
                <div class="flex-shrink overflow-hidden">
                    <h4 class="text-lg font-black ellipse-1">{{ store.name }}</h4>
                    <p class="text-2xs ellipse-1 leading-6">{{ store.address }}</p>
                    <p class="text-2xs text-gray-900 ellipse-1">{{ getOpenTimeString(store) }}</p>
                </div>
            </li>
          </ul>
          <div v-if="resultList.length > showList.length" class="text-center flex flex-col items-center justify-center">
            <span class="material-symbols-rounded mt-2 text-3xl text-blue-250">more_vert</span>
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
  max-height: 450px;
  overflow-y: auto;
}
</style>