import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'FourthScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="fourth-screen fixed top-0 left-0 w-full flex flex-col items-center hidden">
        <div class="fourth-screen-title w-[875px] relative mt-[30px] mb-[100px] opacity-0">
          <img class="object-contain" src={getImage('other/bg_talking_long.png')} alt="week_1" />
          <h2 class="w-full absolute top-[8%] left-1/2 translate-x-[-50%]  text-[60px] fw-700  text-center  text-primary">
            年度最強合作，三大主題來襲
          </h2>
          <p class="text-center text-[24px] text-secondary-dark font-bold">各路廠商強強聯手</p>
          <p class="text-center text-[24px] text-secondary-dark font-bold">共同設計出接地氣的網頁互動挑戰關卡</p>
        </div>
        <div class="fourth-screen-list flex flex-col w-[65%] justify-between">
          <div class="third-screen-item-a flex  items-start  translate-y-[240px] opacity-0">
            <img class="mr-[40px]" src={getImage('week/week_1.png')} alt="btn_join_h" />
            <div>
              <h3 class="text-[60px] text-highlight font-bold">WEEK 1</h3>
              <p class="text-[44px] text-primary mb-[20px]">The F2E 活動網站設計</p>
              <div class="flex mb-[20px]">
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold mr-[12px]">
                  Parallax Scrolling
                </div>
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold">#版塊設計</div>
              </div>
              <a
                href="javascript:;"
                class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] bg-secondary-dark text-[18px] font-medium  text-gray-0"
              >
                查看關卡細節
              </a>
            </div>
          </div>

          <div class="third-screen-item-b flex items-start ml-auto translate-y-[240px] opacity-0">
            <div class="text-right">
              <h3 class="text-[60px] text-highlight font-bold">WEEK 2</h3>
              <p class="text-[44px] text-primary mb-[20px]">今晚，我想來點點簽</p>
              <div class="flex flex-row-reverse mb-[20px]">
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold">
                  #凱鈿行動科技
                </div>
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold mr-[12px]">
                  Canvas
                </div>
              </div>
              <a
                href="javascript:;"
                class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] bg-secondary-dark text-[18px] font-medium  text-gray-0"
              >
                查看關卡細節
              </a>
            </div>
            <img class="ml-[40px]" src={getImage('week/week_2.png')} alt="week_2" />
          </div>

          <div class="third-screen-item-c flex items-start translate-y-[240px] opacity-0">
            <img class="mr-[40px]" src={getImage('week/week_3.png')} alt="week_3" />
            <div>
              <h3 class="text-[60px] text-highlight font-bold">WEEK 3</h3>
              <p class="text-[44px] text-primary mb-[20px]">Scrum 新手村</p>
              <div class="flex mb-[20px]">
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold mr-[12px]">
                  JS draggable
                </div>
                <div class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] text-[24px] text-secondary-dark font-bold">#鈦坦科技</div>
              </div>
              <a
                href="javascript:;"
                class="p-[4px_24px] border-[2px] border-secondary-dark rounded-[60px] bg-secondary-dark text-[18px] font-medium  text-gray-0"
              >
                查看關卡細節
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
