import { defineComponent, onMounted, ref } from 'vue';
import { getImage } from '@/utils/common';
import { gsap } from 'gsap';

export default defineComponent({
  name: 'Loading',
  emits: ['state'],
  setup(props, { emit }) {
    const progressNum = ref<string | number>(0);
    const onLoadingHandler = () => emit('state', true);

    onMounted(() => {
      gsap
        .timeline()
        .to('#progress-bar', {
          width: '100%',
          duration: 2,
          onUpdate() {
            const currentWidth: string | number = Number(gsap.getProperty('#progress-bar', 'width')).toFixed(0);
            progressNum.value = currentWidth;
          }
        })
        .to('#loading', {
          opacity: '0',
          duration: 0.5
        })
        .to('#loading', {
          display: 'none',
          duration: 0,
          onUpdate() {
            onLoadingHandler();
          }
        });
    });
    return {
      progressNum
    };
  },
  render() {
    return (
      <div id="loading" class="fixed z-[100] bg-secondary top-0 left-0  h-screen w-full flex items-center justify-center flex-col">
        <img class="w-[190px] h-[120px]" src={getImage('gif/loading.gif')} alt="loading" />
        <div class="w-[466px] h-[16px] border-2 rounded-[20px] border-primary">
          <div id="progress-bar" class="w-0 h-full  bg-primary"></div>
        </div>
        <p class="text-primary">{this.progressNum}%</p>
      </div>
    );
  }
});
