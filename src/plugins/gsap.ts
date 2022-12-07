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
    // end: '+=15000px',
    scrub: 2
    // markers: true
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
    })
    // ThirdScreen
    .to('.third-screen', {
      display: 'flex'
    })
    .to(
      '.third-screen-title',
      {
        opacity: '.6'
      },
      '<'
    )
    .to('.third-screen-title', {
      opacity: '1'
    })
    .to('.third-screen-join', {
      opacity: '1',
      y: '0px'
    })
    // ThirdScreen 收
    .to('.third-screen-title', {
      opacity: '.6'
    })
    .to(
      '.third-screen-join',
      {
        opacity: '.6',
        y: '40px'
      },
      '<'
    )
    .to('.third-screen-title', {
      opacity: '0'
    })
    .to(
      '.third-screen-join',
      {
        opacity: '0',
        y: '40px'
      },
      '<'
    )
    .to('.third-screen', {
      display: 'none'
    })
    // FourthScreen
    .to('.fourth-screen', {
      display: 'flex'
    })
    .to('.fourth-screen-title', {
      opacity: '0.6'
    })
    .to('.fourth-screen-title', {
      opacity: '1'
    })
    .to('.third-screen-item-a', {
      opacity: '0.6',
      y: 0
    })
    .to('.third-screen-item-a', {
      opacity: '1'
    })
    .to('.third-screen-item-a', {
      y: -300,
      opacity: '.2'
    })
    .to(
      '.third-screen-item-b',
      {
        opacity: '0.6',
        y: -270
      },
      '<'
    )
    .to('.third-screen-item-b', {
      opacity: '1'
    })
    .to('.third-screen-item-b', {
      y: -580,
      opacity: '.2'
    })
    .to(
      '.third-screen-item-a',
      {
        y: -580,
        opacity: 0
      },
      '<'
    )
    .to(
      '.third-screen-item-c',
      {
        y: -550,
        opacity: '.6'
      },
      '<'
    )
    .to('.third-screen-item-c', {
      opacity: '1'
    })
    .to('.third-screen-item-c', {
      opacity: '.2',
      y: -850
    })
    .to(
      '.third-screen-item-b',
      {
        opacity: '0',
        y: -850
      },
      '<'
    )
    .to('.third-screen-item-c', {
      opacity: '0',
      y: -1150
    })
    .to('.fourth-screen-title', {
      opacity: '.6'
    })
    .to('.fourth-screen-title', {
      opacity: '0'
    })
    .to('.fourth-screen', {
      display: 'none'
    });
};
