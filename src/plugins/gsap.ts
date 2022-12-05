import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export const gsapTimeline: Function = (el: any, opt: object) =>
  gsap.timeline({
    scrollTrigger: {
      target: el,
      ...opt
    }
  });

export const firsScreenAnimation = () => {
  const cloud = gsapTimeline('.entry', {
    start: 'top top',
    // end: '+=10000px',
    scrub: true,
    markers: true
  });
  cloud
    .to('.bg-decoration', {
      scale: 1
    })
    //* 紅
    .to('.traffic-light-red', {
      display: 'block'
    })
    .to(
      '.traffic-light-orange',
      {
        display: 'none'
      },
      '<'
    )
    .to(
      '.traffic-light-green',
      {
        display: 'none'
      },
      '<'
    )
    .to(
      '.traffic-light-ready',
      {
        display: 'none'
      },
      '<'
    )

    //* 黃
    .to('.bg-decoration', {
      scale: '.8'
    })
    .to('.traffic-light-red', {
      display: 'none'
    })
    .to('.traffic-light-orange', {
      display: 'block'
    })
    .to('.traffic-light-green', {
      display: 'none'
    })

    //* 綠
    .to('.bg-decoration', {
      opacity: '0.6',
      scale: '.4'
    })
    .to('.traffic-light-red', {
      display: 'none'
    })
    .to('.traffic-light-orange', {
      display: 'none'
    })
    .to('.traffic-light-green', {
      display: 'block'
    })
    .to(
      '.traffic-light-go',
      {
        display: 'block'
      },
      '<'
    )
    .to('.traffic-light', {
      opacity: '0'
    })
    .to('.running-title', { opacity: '0' }, '<')
    .to('.logo', {
      opacity: '0'
    })
    .to('.bg-decoration', {
      opacity: '0',
      scale: '0'
    })
    // SecondScreen
    .to('.second-screen', {
      display: 'flex'
    })
    .to(
      '.second-screen-title',
      {
        opacity: '.6'
      },
      '<'
    )
    .to('.second-screen-title', {
      opacity: '1'
    })
    .to('.second-screen-question_a', {
      opacity: '.6',
      scale: '.6'
    })
    .to('.second-screen-question_a', {
      opacity: '1',
      scale: '1'
    })
    .to('.second-screen-question_b', {
      opacity: '.6',
      scale: '.6'
    })
    .to('.second-screen-question_b', {
      opacity: '1',
      scale: '1'
    })
    .to('.second-screen-question_c', {
      opacity: '.6',
      scale: '.6'
    })
    .to('.second-screen-question_c', {
      opacity: '1',
      scale: '1'
    })
    // SecondScreen 收
    .to('.second-screen-title', {
      scale: '.6',
      opacity: '.6'
    })
    .to(
      '.second-screen-question_a',
      {
        opacity: '.6',
        scale: '.6'
      },
      '<'
    )
    .to(
      '.second-screen-question_b',
      {
        opacity: '.6',
        scale: '.6'
      },
      '<'
    )
    .to(
      '.second-screen-question_c',
      {
        opacity: '.6',
        scale: '.6'
      },
      '<'
    )
    .to('.second-screen-title', {
      scale: '0',
      opacity: '0'
    })
    .to(
      '.second-screen-question_a',
      {
        opacity: '0',
        scale: '0'
      },
      '<'
    )
    .to(
      '.second-screen-question_b',
      {
        opacity: '0',
        scale: '0'
      },
      '<'
    )
    .to(
      '.second-screen-question_c',
      {
        opacity: '0',
        scale: '0'
      },
      '<'
    )
    // SecondScreen end
    .to('.second-screen', {
      display: 'none'
    });
};
