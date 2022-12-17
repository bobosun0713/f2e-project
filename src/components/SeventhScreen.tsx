import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'SeventhScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="seventh-screen w-full h-screen fixed top-0 left-0 hidden">
        <div class="seventh-screen-title relative w-[465px] mx-auto mt-[30px] mb-[30px] opacity-0">
          <img class="object-contain" src={getImage('other/bg_talking_short.png')} />
          <h2 class="w-full absolute top-[10%] left-1/2 translate-x-[-50%]  text-[60px] fw-700 text-center text-primary">贊助單位</h2>
        </div>
        <div class="seventh-screen-content flex justify-center opacity-0">
          <div class="seventh-screen-item inline-block text-center">
            <div class="relative">
              <img src={getImage('btn/btn_sponsor.png')} alt="btn_sponsor" />
              <img
                class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={getImage('logo/logo_blockstudio.png')}
                alt="logo_blockstudio"
              />
            </div>
            <p class="p-[4px_24px] inline-block mt-[16px] border-[2px] border-secondary-dark rounded-[60px] text-secondary-dark">#版塊設計</p>
          </div>

          <div class="seventh-screen-item translate-y-[20px] inline-block mx-[120px] text-center">
            <div class="relative">
              <img src={getImage('btn/btn_sponsor.png')} alt="btn_sponsor" />
              <img
                class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={getImage('logo/logo_titansoft.png')}
                alt="logo_titansoft"
              />
            </div>
            <p class="p-[4px_24px] inline-block mt-[16px] border-[2px] border-secondary-dark rounded-[60px] text-secondary-dark">#鈦坦科技</p>
          </div>

          <div class="seventh-screen-item translate-y-[40px] inline-block text-center">
            <div class="relative">
              <img src={getImage('btn/btn_sponsor.png')} alt="btn_sponsor" />
              <img
                class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={getImage('logo/logo_kdanmobile.png')}
                alt="logo_kdanmobile"
              />
            </div>
            <p class="p-[4px_24px] inline-block mt-[16px] border-[2px] border-secondary-dark rounded-[60px] text-secondary-dark">#凱鈿科技</p>
          </div>
        </div>
        <img
          class="seventh-screen-bg absolute z-[-1] top-[30%] left-[-10%] w-[25%]"
          src={getImage('other/bg_decorate_04.png')}
          alt="bg_decorate_04"
        />
        <img
          class="seventh-screen-bg absolute z-[-1] top-[30%] right-[-10%] w-[25%]"
          src={getImage('other/bg_decorate_08.png')}
          alt="bg_decorate_08"
        />
      </section>
    );
  }
});
