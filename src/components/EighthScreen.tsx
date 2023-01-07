import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'EighthScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="eighth-screen  w-full h-screen fixed top-0 left-0 hidden opacity-0">
        <img
          class="eighth-screen-bg absolute z-[-1] top-1/2 left-[-10%] w-[30%] scale-[1]"
          src={getImage('other/bg_decorate_cloud_01.svg')}
          alt="bg_decorate_cloud_01"
        />
        <img
          class="eighth-screen-bg absolute z-[-1] top-1/2 right-[-10%] w-[30%] scale-[1]"
          src={getImage('other/bg_decorate_cloud_02.svg')}
          alt="bg_decorate_cloud_02"
        />
        <img
          class="eighth-screen-bg absolute z-[-1] top-0 left-1/2 translate-x-[-50%] scale-[2] w-[75%] hidden opacity-0"
          src={getImage('other/finish.png')}
          alt="bg_decorate_cloud_02"
        />
        <div class="eighth-screen-finish flex absolute bottom-0 hidden opacity-0">
          <img class="eighth-screen-finish__line w-1/2 translate-x-[23px] rotate-0" src={getImage('other/finishLine_l.png')} alt="finishLine_l" />
          <img class="eighth-screen-finish__line w-1/2  translate-x-[-8px] rotate-0" src={getImage('other/finishLine_r.png')} alt="finishLine_r" />
        </div>
        <div class="eighth-screen-join absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden opacity-0">
          <img class="w-[450px]" src={getImage('logo/logo.png')} alt="logo" />
          <div class="eighth-screen-button mt-[24px] flex flex-col items-center">
            <img class="w-[60px]" src={getImage('gif/btn_join.gif')} alt="btn_join_gif" />
            <img class="w-[130px] mt-[16px]" src={getImage('btn/btn_join.svg')} alt="btn_join" />
            <p class="text-[60px] mt-[8px] font-bold text-highlight">立即報名</p>
          </div>
        </div>
      </section>
    );
  }
});
