import { defineComponent, watch } from 'vue';
import { firsScreenAnimation } from '@/plugins/gsap';
import Sidebar from '@/components/layout/Sidebar';
import Running from '@/components/Running';
import FirstScreen from '@/components/FirstScreen';
import SecondScreen from '@/components/SecondScreen';
import ThirdScreen from '@/components/ThirdScreen';
import FourthScreen from '@/components/FourthScreen';
import FifthScreen from '@/components/FifthScreen';
import SixthScreen from '@/components/SixthScreen';
import SeventhScreen from '@/components/SeventhScreen';
import EighthScreen from '@/components/EighthScreen';

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Running,
    FirstScreen,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
    FifthScreen,
    SixthScreen,
    SeventhScreen,
    EighthScreen
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
          <Running></Running>
          <FirstScreen></FirstScreen>
          <SecondScreen></SecondScreen>
          <ThirdScreen></ThirdScreen>
          <FourthScreen></FourthScreen>
          <FifthScreen></FifthScreen>
          <SixthScreen></SixthScreen>
          <SeventhScreen></SeventhScreen>
          <EighthScreen></EighthScreen>
        </div>
      </div>
    );
  }
});
