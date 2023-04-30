import { defineComponent } from 'vue';
import { getImage } from '@/utils/common';

export default defineComponent({
  name: 'Running',
  setup() {
    return {};
  },
  render() {
    return (
      <div class="running h-screen fixed z-[10] bottom-0 left-0 right-0 mx-auto flex flex-col justify-center">
        <div class="flex items-start justify-between absolute top-[20px] left-0 right-0 mx-auto">
          <img class="running-logo w-[200px] ml-[40px]" src={getImage('logo/logo.png')} alt="logo" />
          <div class="running-user w-[80px] h-[80px] mr-[40px] bg-[url('/src/assets/images/btn/btn_user.svg')] bg-contain hover:bg-[url('/src/assets/images/btn/btn_user_h.svg')] active:bg-[url('/src/assets/images/btn/btn_user_p.svg')]" />
        </div>
        <div class="running-content absolute bottom-0 left-0 right-0 mx-auto flex flex-col">
          <div class="running-people flex z-[2] justify-center my-[-100px]">
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
          <img class="mx-auto" src={getImage('other/road.svg')} alt="road" />
        </div>
        <div class="running-map absolute bottom-[20px] pl-[40px]">
          <img class="running-map__current w-[220px] mx-auto" src={getImage('map/map_start.png')} alt="map_start" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_01.png')} alt="map_01" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_02.png')} alt="map_02" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_03.png')} alt="map_03" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_04.png')} alt="map_04" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_05.png')} alt="map_05" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_06.png')} alt="map_06" />
          <img class="running-map__current w-[220px] hidden mx-auto" src={getImage('map/map_finish.png')} alt="map_finish" />
        </div>
      </div>
    );
  }
});
