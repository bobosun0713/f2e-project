import { defineComponent, watch } from 'vue';
import Sidebar from '@/components/layout/Sidebar';
import Running from '@/components/Running';
import FirstScreen from '@/components/FirstScreen';
import SecondScreen from '@/components/SecondScreen';
import { firsScreenAnimation } from '@/plugins/gsap';

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Running,
    FirstScreen,
    SecondScreen
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    watch(
      () => props.isLoading,
      () => {
        firsScreenAnimation();
      }
    );

    return {};
  },
  render() {
    return (
      <div class="h-full w-full">
        <Sidebar></Sidebar>
        <div class="entry h-[1000vh] w-full relative">
          {/* <Running></Running> */}
          <FirstScreen></FirstScreen>
          <SecondScreen></SecondScreen>
        </div>
      </div>
    );
  }
});
