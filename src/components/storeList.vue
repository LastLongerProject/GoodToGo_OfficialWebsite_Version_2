<script>
import axios from 'axios';

export default {
  data(){
    return {
      storeList: [],
      todayDay: 0,
      tomorrowDay: 1,
      dayList: ['日', '一', '二', '三', '四', '五', '六'],
      showAmount: 12,
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
      _t.storeList = response.data.storeList
      console.log(_t.storeList)
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
    isOpening(store) {
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
        return this.storeList.slice(0, this.showAmount)
    }
  }
}

</script>

<template>
    <div>
        <ul class="grid grid-cols-3 gap-6">
            <li v-for="(store, index) in showList" class="flex gap-3">
                <div class="store-photo-wrap">
                    <img :src="store.photo" />
                </div>
                <div class="store-info">
                    <h4 class="text-lg font-black ellipse-1">{{ store.name }}</h4>
                    <p class="text-2xs ellipse-1 leading-6">{{ store.address }}</p>
                    <p class="text-2xs text-gray-900 ellipse-1">{{ isOpening(store) }}</p>
                </div>
            </li>
        </ul>
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
}
.store-photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.store-info {
    max-width: calc(100% - 84px);
}
</style>