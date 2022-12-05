import { defineComponent, onMounted } from 'vue';
import { getImage } from '@/utils/common';
import { firsScreenAnimation } from '@/plugins/gsap';

export default defineComponent({
  name: 'FirstScreen',
  setup() {
    onMounted(() => {
      firsScreenAnimation();
    });
    return {};
  },
  render() {
    return (
      <section class="first-screen absolute w-full">
        <div class="logo fixed left-1/2 translate-x-[-50%] z-[1] w-[80%] h-full">
          <img class="absolute top-0 left-0 right-0 mx-auto" src={getImage('other/start.png')} alt="start" />
          <img class="absolute top-[7%] left-0 right-0 mx-auto" src={getImage('other/logo_text.png')} alt="logo" />
          <h1 class="absolute top-[29%] left-0 right-0 mx-auto bg-highlight w-[300px] h-[55px] leading-[55px] text-[32px] text-gray-0 text-center rounded-[100px]">
            互動式網頁設計
          </h1>
        </div>

        <div class="bg-decoration w-[80vw]  fixed top-[40%] left-[50%]  translate-x-[-50%] flex justify-between">
          <img src={getImage('other/bg_decorate_cloud_01.svg')} alt="bg_decorate_cloud_01" />
          <img src={getImage('other/bg_decorate_cloud_02.svg')} alt="bg_decorate_cloud_02" />
        </div>

        <div class="traffic-light w-[275px] h-[100px] fixed  z-[2] top-[45%] right-0">
          <img class="traffic-light-ready absolute top-[-35px] left-[40%] translate-x-[-40%]" src={getImage('other/ready.svg')} alt="ready" />
          <img class="traffic-light-go hidden  absolute top-[-35px] left-[40%] translate-x-[-40%]" src={getImage('other/go.svg')} alt="go" />
          <img class="absolute z-[5] top-[50%] translate-y-[-50%]" src={getImage('other/ready_frame.svg')} alt="ready_frame" />
          <img class="traffic-light-red absolute top-[50%] translate-y-[-50%] left-[35px]" src={getImage('other/ready_red.svg')} alt="ready_red" />
          <img
            class="traffic-light-orange absolute top-[50%] translate-y-[-50%] left-[100px]"
            src={getImage('other/ready_orange.svg')}
            alt="ready_orange"
          />
          <img
            class="traffic-light-green absolute top-[50%] translate-y-[-50%] left-[165px]"
            src={getImage('other/ready_green.svg')}
            alt="ready_green"
          />
        </div>
      </section>
    );
  }
});
