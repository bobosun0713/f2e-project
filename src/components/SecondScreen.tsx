import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'SecondScreen',
  setup() {
    return {};
  },
  render() {
    return (
      <section class="second-screen fixed top-0 left-0 w-full flex flex-col items-center hidden">
        <div class="second-screen-title w-[700px] h-[150px] relative mt-[30px] mb-[40px] opacity-0">
          <img class="object-contain" src={getImage('other/bg_talking.png')} alt="" />
          <h2 class="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[60px] fw-700  text-center  text-primary">
            你是否也有以下困擾？
          </h2>
        </div>
        <div class="flex w-[80%]">
          <div class="second-screen-question_a text-center opacity-0 scale-0">
            <p class="text-[32px] mb-[16px] font-bold text-highlight">羨慕別人的酷酷網頁動畫？</p>
            <img src={getImage('question/question_1.png')} alt="question_1" />
          </div>
          <div class="second-screen-question_b text-center mx-[8px] opacity-0 scale-0">
            <p class="text-[32px] mb-[16px] font-bold text-highlight">滿足不了同事的許願？</p>
            <img src={getImage('question/question_2.png')} alt="question_1" />
          </div>
          <div class="second-screen-question_c text-center opacity-0 scale-0">
            <p class="text-[32px] mb-[16px] font-bold text-highlight">動畫技能樹太雜無從下手？</p>
            <img src={getImage('question/question_3.png')} alt="question_1" />
          </div>
        </div>
      </section>
    );
  }
});
