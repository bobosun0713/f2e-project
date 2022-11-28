import { defineComponent, ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar';

export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  },
  render() {
    return (
      <div class="h-full w-full overflow-y-auto">
        <Sidebar></Sidebar>
      </div>
    );
  }
});
