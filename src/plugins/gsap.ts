import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export const gsapTimeline: Function = (ele: string, opt: object) =>
  gsap.timeline({
    scrollTrigger: {
      // @ts-ignore
      target: ele,
      ...opt
    }
  });

export const firsScreenAnimation = () => {
  const cloud = gsapTimeline('.entry', {
    start: 'top top',
    // end: '+=15000px',
    scrub: 1
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
    //* Running
    .to('.running-content', {
      scale: 0.6,
      bottom: '-110px'
    })
    .to(
      '.running-logo',
      {
        opacity: 1
      },
      '<'
    )
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(1)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(2)', {
      display: 'block'
    })
    .to('.second-screen-title', {
      display: 'block'
    })
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
    .to('.second-screen', {
      display: 'none'
    })
    //* Running
    .to('.running-content', {
      scale: 1,
      bottom: '0px'
    })
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(2)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(3)', {
      display: 'block'
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
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(3)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(4)', {
      display: 'block'
    })
    .to('.fourth-screen', {
      display: 'flex'
    })
    .to('.fourth-screen-title', {
      opacity: '1'
    })
    //* Running
    .to(
      '.running-content',
      {
        scale: 0.6,
        bottom: '-110px'
      },
      '<'
    )
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
        y: 0
      },
      '<'
    )
    .to('.third-screen-item-b', {
      opacity: '1'
    })
    .to('.third-screen-item-b', {
      y: -300,
      opacity: '.2'
    })
    .to(
      '.third-screen-item-a',
      {
        y: -600,
        opacity: 0
      },
      '<'
    )
    .to(
      '.third-screen-item-c',
      {
        opacity: '.6',
        y: 0
      },
      '<'
    )
    .to('.third-screen-item-c', {
      opacity: '1'
    })
    .to('.third-screen-item-c', {
      opacity: '.2',
      y: -300
    })
    .to(
      '.third-screen-item-b',
      {
        opacity: '0',
        y: -600
      },
      '<'
    )
    .to('.third-screen-item-c', {
      opacity: '0',
      y: -600
    })
    .to('.fourth-screen-title', {
      opacity: '.6'
    })
    .to('.fourth-screen-title', {
      opacity: '0'
    })
    .to('.fourth-screen', {
      display: 'none'
    })
    // FifthScreen
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(4)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(5)', {
      display: 'block'
    })
    .to('.fifth-screen', {
      display: 'flex'
    })
    .to('.fifth-screen-line', {
      left: '100%'
    })
    .to('.fifth-screen-item-a', {
      opacity: 1,
      y: 0
    })
    .to(
      '.fifth-screen-circle-a',
      {
        display: 'block'
      },
      '<'
    )
    .to(
      '.fifth-screen-bar-a',
      {
        opacity: 1,
        height: 140
      },
      '<'
    )
    .to('.fifth-screen-item-b', {
      opacity: 1,
      y: 0
    })
    .to(
      '.fifth-screen-bar-b',
      {
        opacity: 1,
        height: 60
      },
      '<'
    )
    .to(
      '.fifth-screen-circle-b',
      {
        display: 'block'
      },
      '<'
    )
    .to('.fifth-screen-item-c', {
      opacity: 1,
      y: 0
    })
    .to(
      '.fifth-screen-bar-c',
      {
        opacity: 1,
        height: 100
      },
      '<'
    )
    .to(
      '.fifth-screen-circle-c',
      {
        display: 'block'
      },
      '<'
    )
    .to('.fifth-screen', {
      display: 'none',
      opacity: 0
    })
    // SixthScreen
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(5)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(6)', {
      display: 'block'
    })
    .to('.sixth-screen', {
      display: 'block'
    })
    .to(
      '.sixth-screen-decorate-one',
      {
        left: '-5%'
      },
      '<'
    )
    .to(
      '.sixth-screen-decorate-two',
      {
        right: '-5%'
      },
      '<'
    )
    .to('.sixth-screen-title-one', {
      opacity: 1,
      scale: '1'
    })
    .to(
      '.sixth-screen-decorate-one',
      {
        left: '10%'
      },
      '<'
    )
    .to(
      '.sixth-screen-decorate-two',
      {
        right: '10%'
      },
      '<'
    )
    .to('.sixth-screen-title-one', {
      opacity: 0
    })
    .to(
      '.sixth-screen-decorate-one',
      {
        opacity: 0
      },
      '<'
    )
    .to(
      '.sixth-screen-decorate-two',
      {
        opacity: 0
      },
      '<'
    )
    .to(
      '.sixth-screen-content-one',
      {
        display: 'none'
      },
      '<'
    )
    .to('.sixth-screen-content-two', {
      display: 'block',
      opacity: '1'
    })
    .to(
      '.sixth-screen-trophy',
      {
        x: '0'
      },
      '<'
    )
    .to(
      '.sixth-screen-light',
      {
        rotate: '180deg'
      },
      '<'
    )
    .to('.sixth-screen-light', {
      rotate: '360deg'
    })
    .to(
      '.sixth-screen-trophy',
      {
        x: '30px'
      },
      '<'
    )
    .to(
      '.sixth-screen-content-two',
      {
        opacity: 0
      },
      '<'
    )
    .to(
      '.sixth-screen',
      {
        display: 'none'
      },
      '<'
    )
    // SeventhScreen
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(6)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.running-map__current:nth-of-type(7)', {
      display: 'block'
    })
    .to('.seventh-screen', {
      display: 'block'
    })
    .to(
      '.seventh-screen-title',
      {
        opacity: 1
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(1)',
      {
        left: '0%'
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(2)',
      {
        right: '0%'
      },
      '<'
    )
    .to('.seventh-screen-content', {
      opacity: 1
    })
    .to(
      '.seventh-screen-item:nth-child(2)',
      {
        y: '0px'
      },
      '<'
    )
    .to(
      '.seventh-screen-item:nth-child(3)',
      {
        y: '0px'
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(1)',
      {
        left: '10%',
        scale: 0.7
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(2)',
      {
        right: '10%',
        scale: 0.7
      },
      '<'
    )
    .to('.seventh-screen-content', {
      opacity: 0,
      y: '10px'
    })
    .to(
      '.seventh-screen-title',
      {
        opacity: 0
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(1)',
      {
        left: '20%',
        scale: 0.4,
        opacity: 0
      },
      '<'
    )
    .to(
      '.seventh-screen-bg:nth-of-type(2)',
      {
        right: '20%',
        scale: 0.4,
        opacity: 0
      },
      '<'
    )
    .to(
      '.seventh-screen',
      {
        display: 'none'
      },
      '<'
    )
    // EighthScreen
    //* Running Map
    .to(
      '.running-map__current:nth-of-type(7)',
      {
        display: 'none'
      },
      '<'
    )
    .to('.eighth-screen', {
      display: 'block',
      opacity: 1
    })

    .to('.running-map__current:nth-of-type(8)', {
      display: 'block'
    })
    .to(
      '.eighth-screen-bg:nth-of-type(1)',
      {
        left: '0%'
      },
      '<'
    )
    .to(
      '.eighth-screen-bg:nth-of-type(2)',
      {
        right: '0%'
      },
      '<'
    )
    .to('.eighth-screen-bg:nth-of-type(3)', {
      display: 'block',
      opacity: 1
    })
    .to(
      '.eighth-screen-finish',
      {
        display: 'flex',
        opacity: 1
      },
      '<'
    )
    //* Running
    .to(
      '.running-content',
      {
        scale: 0.9,
        bottom: '-25px'
      },
      '<'
    )
    .to('.eighth-screen-bg:nth-of-type(3)', {
      scale: 1
    })
    .to(
      '.eighth-screen-finish',
      {
        bottom: '20%'
      },
      '<'
    )
    .to('.eighth-screen-bg:nth-of-type(1)', {
      left: '10%',
      scale: 0.7,
      opacity: 0
    })
    .to(
      '.eighth-screen-bg:nth-of-type(2)',
      {
        right: '10%',
        scale: 0.7,
        opacity: 0
      },
      '<'
    )
    .to(
      '.eighth-screen-finish__line:nth-of-type(1)',
      {
        rotate: '-5deg',
        x: '-15'
      },
      '<'
    )
    .to(
      '.eighth-screen-finish__line:nth-of-type(2)',
      {
        rotate: '5deg',
        x: '15'
      },
      '<'
    )
    //* Running
    .to(
      '.running-content',
      {
        scale: 1,
        bottom: '0px'
      },
      '<'
    )
    .to('.eighth-screen-finish__line:nth-of-type(1)', {
      x: '-1000px',
      opacity: 0
    })
    .to(
      '.eighth-screen-finish__line:nth-of-type(2)',
      {
        x: '1000px',
        opacity: 0
      },
      '<'
    )
    //* Running
    .to(
      '.running-people',
      {
        scale: 1.4
      },
      '<'
    )
    .to('.running-people', {
      scale: 2,
      opacity: 0
    })
    .to(
      '.eighth-screen-bg:nth-of-type(1)',
      {
        left: '20%',
        opacity: 0,
        scale: 0
      },
      '<'
    )
    .to(
      '.eighth-screen-bg:nth-of-type(2)',
      {
        right: '20%',
        opacity: 0,
        scale: 0
      },
      '<'
    )
    .to('.eighth-screen-bg:nth-of-type(3)', {
      opacity: 0
    })
    .to('.eighth-screen-join', {
      display: 'block',
      opacity: 1
    })
    //* Running
    .to(
      '.running-logo',
      {
        opacity: 0
      },
      '<'
    );
};
