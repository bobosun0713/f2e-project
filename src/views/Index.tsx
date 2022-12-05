import { defineComponent, watch } from 'vue';
import Sidebar from '@/components/layout/Sidebar';
import Running from '@/components/Running';
import FirstScreen from '@/components/FirstScreen';
import { firsScreenAnimation } from '@/plugins/gsap';

export default defineComponent({
  name: 'Home',
  components: {
    Sidebar,
    Running,
    FirstScreen
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
        <Running></Running>
        <div class="w-full bg-secondary ">
          <FirstScreen></FirstScreen>
        </div>
      </div>
    );
  }
});
