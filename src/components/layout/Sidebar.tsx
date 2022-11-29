import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const sidebar = ref();
    const isOpen = ref<boolean>(false);

    const toggleHandler = (): void => {
      isOpen.value = !isOpen.value;
    };

    const autoHide = (e: Event): void => {
      if (sidebar.value && !sidebar.value.contains(e.target)) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', autoHide);
    });
    onUnmounted(() => {
      document.removeEventListener('click', autoHide);
    });

    return { sidebar, isOpen, toggleHandler };
  },
  render() {
    return (
      <div ref="sidebar" class={`fixed z-[100] top-0 h-screen flex transition-all ease-in-out ${this.isOpen ? 'left-0' : 'left-[-135px]'}`}>
        <div class="w-[135px] bg-primary flex items-center flex-col">
          <a class="mt-[40px] group" href="https://2022.thef2e.com/news" target="_blank">
            <div class="w-full h-[60px] bg-[url('/src/assets/images/btn/btn_menu_info.svg')] bg-center bg-no-repeat group-hover:bg-[url('/src/assets/images/btn/btn_menu_info_h.svg')]"></div>
            <p class="mt-[4px] font-normal text-secondary  group-hover:text-secondary-tint">關卡資訊</p>
          </a>
          <a class="mt-[40px] group" href="https://2022.thef2e.com/works" target="_blank">
            <div class="w-full h-[60px] bg-[url('/src/assets/images/btn/btn_menu_list.svg')] bg-center bg-no-repeat group-hover:bg-[url('/src/assets/images/btn/btn_menu_list_h.svg')]"></div>
            <p class="mt-[4px] font-normal text-secondary group-hover:text-secondary-tint">作品列表</p>
          </a>
          <a class="mt-[40px] group" href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="_blank">
            <div class="w-full h-[60px] bg-[url('/src/assets/images/btn/btn_menu_strategy.svg')] bg-center bg-no-repeat group-hover:bg-[url('/src/assets/images/btn/btn_menu_strategy_h.svg')]"></div>
            <p class="mt-[4px] font-normal text-secondary group-hover:text-secondary-tint">攻略資源</p>
          </a>
          <a class="mt-[40px] group" href="https://2022.thef2e.com/jobs" target="_blank">
            <div class="w-full h-[60px] bg-[url('/src/assets/images/btn/btn_menu_job.svg')] bg-center bg-no-repeat group-hover:bg-[url('/src/assets/images/btn/btn_menu_job_h.svg')]"></div>
            <p class="mt-[4px] font-normal text-secondary group-hover:text-secondary-tint">求職專區</p>
          </a>
        </div>
        <div class="relative w-[20px] bg-[url('/src/assets/images/menu/bg_menu_side.svg')] bg-center bg-no-repeat">
          {this.isOpen ? (
            <div
              class="h-[60px] w-[60px] absolute top-0 bottom-0 left-[14px] right-0 m-auto bg-[url('/src/assets/images/btn/btn_burger_close.svg')] bg-center bg-no-repeat bg-contain hover:bg-[url('/src/assets/images/btn/btn_burger_close_h.svg')] active:bg-[url('/src/assets/images/btn/btn_burger_close_p.svg')]"
              onClick={this.toggleHandler}
            ></div>
          ) : (
            <div
              class="h-[60px] w-[60px] absolute top-0 bottom-0 left-[14px] right-0 m-auto bg-[url('/src/assets/images/btn/btn_burger_open.svg')] bg-center bg-no-repeat bg-contain hover:bg-[url('/src/assets/images/btn/btn_burger_open_h.svg')] active:bg-[url('/src/assets/images/btn/btn_burger_open_p.svg')]"
              onClick={this.toggleHandler}
            ></div>
          )}
        </div>
      </div>
    );
  }
});
