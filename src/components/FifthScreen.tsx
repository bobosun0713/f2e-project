import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: ' FifthScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="fifth-screen w-full h-full fixed top-0 left-0 flex flex-col items-center hidden">
        <div class="mt-[100px] flex justify-between items-center w-[70%] ">
          <div class="fifth-screen-item-a text-center opacity-0 translate-y-[20px]">
            <img class="mx-auto" src={getImage('btn/btn_join.svg')} alt="btn_join" />
            <h3 class="text-[60px] text-highlight">SIGN UP</h3>
            <p class="text-[32px] font-bold text-gray-0 p-[8px_28px] bg-primary rounded-[50px] mb-[12px]">10/13 - 11/6</p>
            <p class="text-[24px] font-bold text-secondary-dark">截止前可修改報名組別</p>
          </div>
          <div class="fifth-screen-item-b text-center opacity-0 translate-y-[20px]">
            <img class="mx-auto" src={getImage('dateline/date_start.png')} alt="" />
            <h3 class="text-[60px] text-highlight">START</h3>
            <p class="text-[32px] font-bold text-gray-0 p-[8px_28px] bg-primary rounded-[50px] mb-[12px]">10/31 - 11/28</p>
            <p class="text-[24px] font-bold text-secondary-dark">10/31(一) UI、團體組開賽</p>
            <p class="text-[24px] font-bold text-secondary-dark"> 11/7(一) 前端組開賽</p>
          </div>
          <div class="fifth-screen-item-c text-center opacity-0 translate-y-[20px]">
            <img class="mx-auto" src={getImage('dateline/date_upload.png')} alt="" />
            <h3 class="text-[60px] text-highlight">UPLOAD</h3>
            <p class="text-[32px] font-bold text-gray-0 p-[8px_28px] bg-primary rounded-[50px] mb-[12px]">10/31 - 11/28</p>
            <p class="text-[24px] font-bold text-secondary-dark">依賽程登錄作品</p>
            <p class="text-[16px] text-highlight">額外競賽： 主題豐厚獎金等著你</p>
          </div>
        </div>
        <div class="absolute top-[60%]  w-full">
          <div class="w-[60%] absolute left-0 right-0 top-[18px] mx-auto flex justify-between">
            <div class="relative w-[32px] mb-[-41px]">
              <div class="fifth-screen-bar-a w-[8px] h-[140px] h-[0] opacity-0 absolute bottom-0 left-0 right-0 mx-auto  bg-primary"></div>
              <div class="fifth-screen-circle-a hidden absolute bottom-0 w-full h-[32px]  bg-primary rounded-[50%]"></div>
            </div>
            <div class="w-[32px] relative">
              <div class="fifth-screen-bar-b w-[8px] h-[60px] h-[0] opacity-0 absolute bottom-0 left-0 right-0 mx-auto  bg-primary"></div>
              <div class="fifth-screen-circle-b hidden absolute bottom-0 w-full h-[32px]  bg-primary rounded-[50%]"></div>
            </div>
            <div class="relative w-[32px] mb-[-41px]">
              <div class="fifth-screen-bar-c w-[8px] h-[100px] h-[0] opacity-0 absolute bottom-0 left-0 right-0 mx-auto  bg-primary"></div>
              <div class="fifth-screen-circle-c hidden absolute bottom-0 w-full h-[32px]  bg-primary rounded-[50%]"></div>
            </div>
          </div>
          <div class="fifth-screen-line absolute left-0 h-[100px] w-full bg-secondary"></div>
          <img class="mx-auto" src={getImage('dateline/date_line.png')} alt="date_line" />
        </div>
      </section>
    );
  }
});
