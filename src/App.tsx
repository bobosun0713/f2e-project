import { defineComponent, ref } from 'vue';
import { gsap } from 'gsap';
import Home from '@/views/Index';
import Loading from '@/components/Loading';

export default defineComponent({
  name: 'App',
  setup() {
    const homePageState = ref<boolean>(false);
    const onLoadingState = (state: boolean): void => {
      homePageState.value = state;
      gsap.to('.init-screen', {
        clipPath: 'circle(0%)',
        duration: 1
      });
    };
    return { homePageState, onLoadingState };
  },
  render() {
    return (
      <main class="h-full w-ful flex items-center justify-center">
        <Loading onState={this.onLoadingState} />
        <div class="init-screen h-full w-full fixed top-0 left-0 z-[50] bg-secondary"></div>
        <Home v-show={this.homePageState} isLoading={this.homePageState}></Home>
        {/* <Home></Home> */}
      </main>
    );
  }
});
