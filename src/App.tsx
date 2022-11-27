import { defineComponent, ref } from 'vue';
import { gsap } from 'gsap';
import Loading from '@/components/Loading';
import Home from '@/views/Index';

export default defineComponent({
  name: 'App',
  setup() {
    const homePageState = ref<boolean>(false);
    const onLoadingState = (state: boolean): void => {
      homePageState.value = state;
      gsap.to('.home', {
        clipPath: 'circle(100%)',
        duration: 1
      });
    };
    return { homePageState, onLoadingState };
  },
  render() {
    return (
      <main class="h-full w-full bg-secondary flex items-center justify-center">
        <Loading onState={this.onLoadingState} />
        <Home v-show={this.homePageState} class="home"></Home>
      </main>
    );
  }
});
