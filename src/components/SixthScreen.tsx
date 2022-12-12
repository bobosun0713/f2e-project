import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: ' SixthScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="sixth-screen w-full h-screen fixed top-0 left-0 hidden">
        <div class="sixth-screen-content-one relative w-full h-full">
          <img
            class="sixth-screen-decorate-one absolute top-[40%] left-[-10%] translate-y-[-1/2]"
            src={getImage('other/bg_decorate_03.png')}
            alt="bg_decorate_03"
          />
          <h2 class="sixth-screen-title-one absolute top-[20%] left-[50%] translate-x-[-50%] opacity-0 scale-150 text-[60px] font-bold text-highlight">
            區區修煉已經無法滿足了嗎？
          </h2>
          <img
            class="sixth-screen-decorate-two absolute top-[30%] right-[-10%] translate-y-[-1/2]"
            src={getImage('other/bg_decorate_07.png')}
            alt="bg_decorate_07"
          />
        </div>
        <div class="sixth-screen-content-two w-full h-full hidden opacity-0">
          <div class="sixth-screen-title relative w-[650px] mx-auto mt-[30px] mb-[60px]">
            <img class="object-contain" src={getImage('other/bg_talking_long.png')} />
            <h2 class="w-full absolute top-[3%] left-1/2 translate-x-[-50%]  text-[60px] fw-700 text-center text-primary">還有比賽等著你！</h2>
          </div>
          <div class="sixth-screen-trophy flex justify-center translate-x-[-30px]">
            <div class="relative w-[375px]">
              <img src={getImage('other/award_trophy.png')} alt="award_trophy" />
              <img class="sixth-screen-light absolute z-[-1] top-0 left-0" src={getImage('other/award_light.png')} alt="award_light" />
            </div>
            <div class="ml-[60px]">
              <h3 class="text-[32px] font-bold text-highlight mb-[4px]">評審機制</h3>
              <p class="text-primary text-[18px] font-medium mb-[32px]">
                初選： 將由六角學院前端、UI 評審進行第一波篩選。
                <br />
                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
              </p>
              <h3 class="text-[32px] font-bold text-highlight mb-[4px]">獎項 </h3>
              <p class="text-primary text-[18px] font-medium">
                1. 初選佳作 共六十位 數位獎狀
                <br />
                2. 個人企業獎 共六位 NTD <span class="text-highlight text-[24px]">3,000</span> /位
                <br />
                3. 團體企業獎 共三組 NTD <span class="text-highlight text-[24px]">10,000</span> /組
                <br />
                4. 以上皆提供完賽數位獎狀
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
