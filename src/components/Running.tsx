import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'Running',
  setup() {
    return {};
  },
  render() {
    return (
      <div class="running fixed z-[10] bottom-0 left-0 right-0 mx-auto flex flex-col justify-center">
        <div class="flex justify-center z-10 mb-[-120px]">
          <div class="text-center">
            <div class="running-title text-center">
              <p class="text-[20px] text-primary font-bold">前端工程師</p>
              <img class="inline-block mt-[8px]" src={getImage('common/users.svg')} alt="" />
            </div>
            <img class="h-[50vh]" src={getImage('gif/character_f2e.gif')} />
          </div>
          <div class="text-center">
            <div class="running-title text-center">
              <p class="text-[20px] text-primary font-bold">UI設計師</p>
              <img class="inline-block mt-[8px]" src={getImage('common/users.svg')} alt="" />
            </div>
            <img class="h-[50vh]" src={getImage('gif/character_ui.gif')} />
          </div>
          <div class="text-center">
            <div class="running-title text-center">
              <p class="text-[20px] text-primary font-bold">團體組</p>
              <img class="inline-block mt-[8px]" src={getImage('common/users.svg')} alt="" />
            </div>
            <img class="h-[50vh]" src={getImage('gif/character_team.gif')} />
          </div>
        </div>
        <img class="m-[0_auto]" src={getImage('other/road.svg')} alt="" />
      </div>
    );
  }
});
