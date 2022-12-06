import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: ' ThirdScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="third-screen fixed top-0 left-0 w-full flex flex-col items-center hidden">
        <div class="third-screen-title w-[875px] relative mt-[30px] mb-[100px] opacity-0">
          <img class="object-contain" src={getImage('other/bg_talking_long.png')} alt="" />
          <h2 class="w-full absolute top-[12%] left-1/2 translate-x-[-50%]  text-[60px] fw-700  text-center  text-primary">
            本屆主題：互動式網頁設計
          </h2>
          <p class="text-center text-[24px] text-secondary-dark font-bold">以下兩個角色進行攜手合作</p>
        </div>
        <div class="third-screen-join flex w-[55%] justify-between translate-y-[40px]">
          <div class="third-screen-join flex flex-col items-center opacity-0">
            <img src={getImage('btn/btn_join.svg')} alt="btn_join_h" />
            <p class="text-[32px] mb-[16px] font-bold text-primary">前端工程師</p>
          </div>
          <div class="third-screen-join flex flex-col items-center mx-[8px] opacity-0">
            <img src={getImage('btn/btn_join.svg')} alt="btn_join_h" />
            <p class="text-[32px] mb-[16px] font-bold text-primary">ＵＩ設計師</p>
          </div>
          <div class="third-screen-join flex flex-col items-center opacity-0">
            <img src={getImage('btn/btn_join.svg')} alt="btn_join_h" />
            <p class="text-[32px] mb-[16px] font-bold text-primary">團體組(UI+前端)</p>
          </div>
        </div>
      </section>
    );
  }
});
