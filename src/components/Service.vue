<script>
import storeList from '../components/storeList.vue'
export default {
  components: {
    storeList
  },
  mounted(){
    const collapseTogglers = document.querySelectorAll('.collapse-toggler')
    collapseTogglers.forEach( (toggler) => {
      const targetID = toggler.getAttribute('data-target')
      const target = document.querySelector(targetID)
      toggler.addEventListener('click', () => this.toggleCollapse(toggler, target))
    })
  },
  methods: {
    toggleCollapse(toggler, target){
      const collapseGroupName = toggler.getAttribute( 'data-collapse-group' )
      const togglerPrev = document.querySelector(`.collapse-toggler.active[data-collapse-group='${collapseGroupName}']`)
      togglerPrev.classList.remove('active')
      toggler.classList.add('active')
      const collapsePrev = document.querySelector(`.collapse-block.active[data-collapse-group='${collapseGroupName}']`)
      collapsePrev.classList.remove('active')
      target.classList.add('active')
    }
  }
}

</script>

<template>
  <div class="anime-bg absolute inset-0 overflow-hidden z-0 pointer-events-none">
    <div id="capsule_sv_01" class="capsule bg-blue"></div>
    <div id="capsule_sv_02" class="capsule bg-yellow"></div>
    <div id="capsule_sv_03" class="capsule bg-blue"></div>
    <div id="capsule_sv_04" class="capsule bg-yellow"></div>
    <div id="capsule_sv_05" class="capsule bg-blue"></div>
  </div>
  <section id="top" class="bg-blue service-top">
    <div class="container pt-8 md:pt-4">
      <div class="flex flex-col md:flex-row items-center justify-center gap-5">
        <h1 class="text-3xl lg:text-4xl text-white font-bold">關於循環杯的一切<br />通通告訴你！</h1>
        <img class="img-mascot" src="/img/mascot_s.png">
      </div>
    </div>
  </section>
  <div class="relative">
    <section id="cup">
      <div class="container pt-32 pb-16">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">循環杯</h2>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <img class="" src="/img/info_cups_2x.png" alt="小器杯: 480ml/16oz | 大器杯: 660ml/22oz"/>
          </div>
          <div>
            <ul class="list-plus text-lg sm:text-2xl md:text-3xl">
              <li>杯身：食品級PP<br />杯蓋：食品級PP、矽膠</li>
              <li>耐溫：-15°C - 120°C</li>
              <li>可重複使用300次以上</li>
              <li>可100%回收再製</li>
              <li>台灣製</li>
            </ul>
            <p>*部分合作店家搭配免洗杯蓋使用或無提供杯蓋</p>
          </div>
        </div>
      </div>
    </section>
    <section id="clean">
      <div class="container pt-24 pb-16">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">專業清洗</h2>
        </div>
        <div class="flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
          <div class="text-center text-white">
            <h3 class="text-3xl font-extrabold mb-2">鼓動浸泡</h3>
            <p>以鼓泡/超音波技術<br />將污垢軟化剝離</p>
          </div>
          <span class="material-symbols-rounded text-6xl text-blue-100 text-w-half rotate-90 lg:rotate-0">arrow_right</span>
          <div class="text-center text-white">
            <h3 class="text-3xl font-extrabold mb-2">隧道式機洗</h3>
            <p>高溫高壓水柱洗淨</p>
          </div>
          <span class="material-symbols-rounded text-6xl text-blue-100 text-w-half rotate-90 lg:rotate-0">arrow_right</span>
          <div class="text-center text-white">
            <h3 class="text-3xl font-extrabold mb-2">消毒乾燥</h3>
            <p>90-98°C蒸汽/遠紅外線<br />消毒烘乾</p>
          </div>
          <span class="material-symbols-rounded text-6xl text-blue-100 text-w-half rotate-90 lg:rotate-0">arrow_right</span>
          <div class="text-center text-white">
            <h3 class="text-3xl font-extrabold mb-2">品質檢驗</h3>
            <p>強光源下逐一檢視<br />密封裝箱保存</p>
          </div>
        </div>
      </div>
    </section>
    <section id="safe">
      <div class="container pt-24 pb-16 relative">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">食品安全檢驗</h2>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="">
            <img src="/img/info_report.png"/>
          </div>
          <div>
            <div class="mb-8 md:mb-5">
              <h3 class="text-3xl highlighter highlighter-blue-250">符合 <span class="font-extrabold">食品器具容器包裝衛生標準</span></h3>
              <p class="mb-2 pt-2 text-justify">通過SGS產品檢驗，符合中華民國食品器具容器包裝衛生標準。通過SGS產品耐熱性測試，在 120°C 環境下，產品功能正常。</p>
              <p class="flex gap-4 flex-wrap">
                <a href="https://drive.google.com/drive/folders/1ScrSe6YH9EbWjLETPmUBypC08PaDyTvm?usp=sharing" target="_blank" class="link link-blue">SGS食器檢驗報告</a>
              </p>
            </div>
            <div class="mb-8 md:mb-5">
              <h3 class="text-3xl highlighter highlighter-blue-250">符合 <span class="font-extrabold">餐具清洗良好作業指引</span></h3>
              <p class="mb-2 pt-2 text-justify">每季委由SGS檢驗清洗殘留物，合格率100%<br />確保容器清洗後之餐具無脂肪、澱粉、大腸桿菌、洗潔劑之殘留</p>
              <p class="flex gap-4 flex-wrap">
                <a href="https://drive.google.com/drive/folders/1SUgi7vbuEeMo5tnajfQZDmV2IsAXroFo?usp=sharing" target="_blank" class="link link-blue">SGS清洗檢驗報告</a>
              </p>
            </div>
            <div class="">
              <h3 class="text-3xl highlighter highlighter-blue-250">投保 <span class="font-extrabold">產品責任險</span></h3>
              <p class="mb-2 pt-2 text-justify">根據衛生福利部《食品安全衛生管理法》授權訂定之《食品業者投保產品責任保險》規定，定期投保產品責任保險</p>
              <p class="flex gap-4 flex-wrap">
                <a href="https://drive.google.com/drive/folders/1SOb-KkY213Ng5vOyIjdTs2GMms_zI4av?usp=sharing" target="_blank" class="link link-blue">產品責任保險單</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="member">
      <div class="container pt-24 pb-16">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">會員權益</h2>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-4">
          <div class="text-center md:w-1/3">
            <h3 class="text-3xl font-extrabold mb-2">免費註冊</h3>
            <p>加入好盒器LINE<br />驗證手機號碼</p>
          </div>
          <div class="text-center md:w-1/3">
            <h3 class="text-3xl font-extrabold mb-2">使用3天</h3>
            <p>容器請於借用後3日內歸還<br />逾期歸還帳號將被停權</p>
          </div>
          <div class="text-center md:w-1/3">
            <h3 class="text-3xl font-extrabold mb-2">同時6杯</h3>
            <p>可借用多件容器<br />每帳號最多同時借用6杯</p>
          </div>
        </div>
      </div>
    </section>
    <section id="rent">
      <div class="container-wide pt-24">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">４種借用方式</h2>
        </div>
        <div class="flex items-end justify-center gap-1 md:gap-5">
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">店舖外帶</h3>
            <button class="collapse-toggler toggler-circle toggler-circle-blue active" data-target="#rent_01" data-collapse-group="rent">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_rent_takeout.jpg"/>
                <div class="img-tape">外帶飲料<br />直接選用循環杯</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">自助借杯<span class="hidden sm:inline">站</span></h3>
            <button class="collapse-toggler toggler-circle toggler-circle-blue" data-target="#rent_02" data-collapse-group="rent">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_rent_machine.jpg"/>
                <div class="img-tape">在借杯機借杯至<br />其他店家使用</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">外送平台</h3>
            <button class="collapse-toggler toggler-circle toggler-circle-blue" data-target="#rent_03" data-collapse-group="rent">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_rent_foodpanda.jpg"/>
                <div class="img-tape">在外送平台點餐<br />選擇使用循環杯</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">電話外送</h3>
            <button class="collapse-toggler toggler-circle toggler-circle-blue" data-target="#rent_04" data-collapse-group="rent">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_rent_grouporder.jpg"/>
                <div class="img-tape">外帶飲料<br />直接選用循環杯</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
        </div>
      </div>
      <div class="container-wide pt-8 pb-16">
        <div class="collapse-list relative">
          <div id="rent_01" class="collapse-block card-drop card-drop-blue active" data-collapse-group="rent">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_01.svg"/>
                  </div>
                  <p>加入好盒器LINE完成<br class="hidden xl:block"/>手機號碼綁定</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_02.svg"/>
                  </div>
                  <p>點餐時主動提出<br class="hidden xl:block"/>「我要使用循環杯！」</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">3</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>店員以循環杯<br class="hidden xl:block"/>盛裝飲品</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">4</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>取餐時<br class="hidden xl:block"/>由使用者登記借出</p>
                </div>
              </div>
            </div>
          </div>
          <div id="rent_02" class="collapse-block card-drop card-drop-blue" data-collapse-group="rent">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_01.svg"/>
                  </div>
                  <p>加入好盒器LINE完成<br class="hidden xl:block"/>手機號碼綁定</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_02.svg"/>
                  </div>
                  <p>於借杯機<br class="hidden xl:block"/>登記借出循環杯</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">3</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>帶到餐飲店家<br class="hidden xl:block"/>以自備杯方式消費</p>
                </div>
              </div>
            </div>
          </div>
          <div id="rent_03" class="collapse-block card-drop card-drop-blue" data-collapse-group="rent">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_01.svg"/>
                  </div>
                  <p>加入好盒器LINE完成<br class="hidden xl:block"/>手機號碼綁定</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_02.svg"/>
                  </div>
                  <p>至foodpanda選擇「循環容器外送」店家</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">3</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>勾選「循環容器」並在備註欄留下手機號碼</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">4</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>等待外送夥伴<br class="hidden xl:block"/>送達餐點</p>
                </div>
              </div>
            </div>
          </div>
          <div id="rent_04" class="collapse-block card-drop card-drop-blue" data-collapse-group="rent">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_01.svg"/>
                  </div>
                  <p>加入好盒器LINE完成<br class="hidden xl:block"/>手機號碼綁定</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src="/img/info_rent_takeout_02.svg"/>
                  </div>
                  <p>致電合作店家訂購，並提供會員手機號碼</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-blue font-extrabold leading-none mr-2">3</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>等待餐點送達</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="return">
      <div class="container-wide pt-24">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">２種歸還方式</h2>
        </div>
        <div class="flex items-end justify-center gap-1 md:gap-5">
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">自助歸還<span class="hidden sm:inline">站</span></h3>
            <button class="collapse-toggler toggler-circle active" data-target="#return_02" data-collapse-group="return">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_return_machine.jpg"/>
                <div class="img-tape">歸還到<br />24H自助歸還站</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
          <div class="text-center w-1/4">
            <h3 class="text-base sm:text-xl lg:text-3xl font-extrabold mb-4">店鋪歸還</h3>
            <button class="collapse-toggler toggler-circle" data-target="#return_01" data-collapse-group="return">
              <div class="img-rounded border-4 border-white relative">
                <img src="/img/info_rent_takeout.jpg"/>
                <div class="img-tape">歸還到<br />任一合作店家</div>
              </div>
              <span class="material-symbols-rounded">arrow_drop_down</span>
            </button>
          </div>
        </div>
      </div>
      <div class="container-wide pt-8">
        <div class="collapse-list relative">
          <div id="return_01" class="collapse-block card-drop" data-collapse-group="return">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-yellow font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>使用者將循環杯<br class="hidden xl:block"/>歸還予店員</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-yellow font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>店員營業結束前<br class="hidden xl:block"/>掃描當日歸還之循環杯</p>
                </div>
              </div>
            </div>
          </div>
          <div id="return_02" class="collapse-block card-drop active" data-collapse-group="return">
            <div class="flex flex-wrap flex-col md:flex-row justify-center gap-4 lg:gap-8">
              <div class="flex">
                <h4 class="text-3xl text-yellow font-extrabold leading-none mr-2">1</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>使用者於歸還站<br class="hidden xl:block"/>掃描循環杯QRcode</p>
                </div>
              </div>
              <div class="flex">
                <h4 class="text-3xl text-yellow font-extrabold leading-none mr-2">2</h4>
                <div class="w-40 xl:w-48 text-center">
                  <div class="h-32 m-2">
                    <img class="h-full w-auto" src=""/>
                  </div>
                  <p>將循環杯<br class="hidden xl:block"/>投入歸還站</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="map">
      <div class="container pt-40 pb-40">
        <div class="text-center mb-24">
          <h2 class="text-4xl font-extrabold highlighter">合作站點</h2>
        </div>
        <div>
          <storeList />
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped>
.service-top {
  height: 280px;
}
.img-mascot {
  max-width: 200px;
}
.list-plus li {
  padding-left: 1.5em;
  @apply relative mb-6
}
.list-plus li::before {
  content: '';
  width: 1em;
  height: 1em;
  top: 0.25em;
  background: url('../assets/img/icon_list_dec.svg') no-repeat;
  background-size: contain;
  @apply inline-block absolute left-0
}
@media screen and (min-width: 480px) {
  .service-top {
    height: 260px;
  }
}
@media screen and (min-width: 768px) {
  .service-top {
    height: 280px;
  }
  .img-mascot {
    max-width: 280px;
  }
}
@media screen and (min-width: 1024px) {
  .service-top {
    height: 360px;
  }
  .img-mascot {
    @apply max-w-sm
  }
}
.toggler-circle {
  max-width: 250px;
  border-radius: 50%;
  border-style: solid;
  box-sizing: content-box;
  transition: border-width 0.4s ease;
  @apply relative border-yellow bg-yellow
}
.toggler-circle.toggler-circle-blue {
  @apply border-blue bg-blue
}
.toggler-circle.active {
  border-width: 6px;
  margin-top: 2px;
  margin-bottom: 5px;
}
.toggler-circle .material-symbols-rounded {
  font-size: 60px;
  bottom: -37px;
  opacity: 0;
  transform: translateY(-5px);
  pointer-events: none;
  transition: all 0.4s ease;
  @apply absolute text-yellow inset-x-0 m-auto
}
.toggler-circle.toggler-circle-blue .material-symbols-rounded {
  @apply text-blue
}
@media screen and (min-width: 768px) {
  .toggler-circle.active {
    border-width: 13px;
    margin: 0;
  }
  .toggler-circle .material-symbols-rounded {
    font-size: 120px;
    bottom: -76px;
    transform: translateY(-10px);
  }
}
.toggler-circle.active .material-symbols-rounded {
  opacity: 1;
  transform: translateY(0px);
}
.img-tape {
  @apply absolute bg-white-op-80 w-full bottom-4 p-1
}
.toggler-circle .img-tape {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  @apply hidden md:block text-sm lg:text-base
}
.toggler-circle:hover .img-tape {
  opacity: 1;
  transform: translateY(0px);
}
.toggler-circle img {
  pointer-events: none;
  transition: all 0.4s ease;
}
.toggler-circle:hover img {
  transform: scale(1.1);
}
.collapse-block {
  position: absolute;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  @apply inset-x-0 top-0 m-auto
}
.collapse-block.active {
  position: relative;
  pointer-events: initial;
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s ease 0.2s;
}
.card-drop {
  width: fit-content;
  margin: auto;
  padding: 16px 24px;
  border: 2px solid var(--color-yellow);
  box-shadow: 0px 11px 0px var(--color-yellow);
  border-radius: 21px;
  @apply bg-white
}
.card-drop.card-drop-blue {
  border: 2px solid var(--color-blue);
  box-shadow: 0px 11px 0px var(--color-blue);
}
@media screen and (min-width: 768px) {
  .toggler-circle:hover img {
    transform: none;
  }
}
@media screen and (min-width: 1024px) {
  .card-drop {
    padding: 24px 36px;
  }
}
@media screen and (min-width: 1280px) {
  .card-drop {
    padding: 48px 60px;
  }
}

/* anime bg */
.capsule {
  @apply rounded-full absolute m-auto
}
#capsule_sv_01 {
  width: 67%;
  max-width: 377px;
  aspect-ratio: 233 / 377;
  left: 11%;
  right: 0;
  top: 565px;
}
#capsule_sv_02 {
  width: 38%;
  max-width: 210px;
  aspect-ratio: 233 / 377;
  left: 0%;
  right: 55%;
  top: 684px;
}
#capsule_sv_03 {
  height: 877px;
  width: 277px;
  left: 0;
  right: 0;
  top: 1563px;
}
#capsule_sv_04 {
  height: 377px;
  width: calc(100% + 600px);
  left: -167%;
  top: 4866px;
  transform: rotate(-30deg)
}
#capsule_sv_05 {
  height: 377px;
  width: calc(100% + 600px);
  right: -159%;
  top: 6081px;
  transform: rotate(-30deg)
}
@media screen and (orientation: landscape) {
  #capsule_sv_03 {
    top: 1775px;
  }
  #capsule_sv_04 {
    left: -123%;
    top: 5215px;
  }
  #capsule_sv_05 {
    right: -122%;
    top: 6346px;
  }
}
@media screen and (min-width: 768px) {
  #capsule_sv_01 {
    max-width: 450px;
    left: 3%;
    top: 635px;
  }
  #capsule_sv_02 {
    max-width: 281px;
    right: 44%;
    top: 839px;
  }
  #capsule_sv_03 {
    height: 950px;
    width: 377px;
    left: 0;
    right: 0;
    top: 2119px;
  }
  #capsule_sv_04 {
    height: 466px;
    left: -110%;
    top: 5438px;
  }
  #capsule_sv_05 {
    height: 466px;
    right: -87%;
    top: 6081px;
  }
}
@media screen and (min-width: 1024px) {
  #capsule_sv_01 {
    max-width: 377px;
    left: calc( 50vw - 512px - 12px );
    right: 50%;
    top: 672px;
  }
  #capsule_sv_02 {
    max-width: 233px;
    left: calc( 50vw - 512px - 298px );
    right: 50%;
    top: 818px;
  }
  #capsule_sv_03 {
    height: 233px;
    width: 120%;
    left: -22%;
    right: auto;
    top: 1505px;
  }
  #capsule_sv_04 {
    height: 610px;
    left: -90%;
    top: 3472px;
  }
  #capsule_sv_05 {
    height: 610px;
    right: -79%;
    top: 4049px;
  }
}
@media screen and (min-width: 1280px) {
  #capsule_sv_01 {
    max-width: 410px;
    left: calc( 50vw - 640px + 24px );
  }
  #capsule_sv_02 {
    max-width: 300px;
    left: calc( 50vw - 640px - 349px );
  }
  #capsule_sv_03 {
    left: -25%;
    top: 1578px;
  }
  #capsule_sv_04 {
    left: -84%;
    top: 3625px;
  }
  #capsule_sv_05 {
    right: -69%;
    top: 4122px;
  }
}

</style>
