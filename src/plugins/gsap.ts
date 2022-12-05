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
  const cloud = gsapTimeline('.first-screen', {
    scrub: true
    // markers: true
  });
  cloud
    .to('.bg-decoration', {
      scale: 1
    })
    .to('.bg-decoration', {
      scale: '.8'
    })
    .to('.bg-decoration', {
      opacity: '0.6',
      scale: '.4'
    })
    .to('.bg-decoration', {
      opacity: '0',
      scale: '.2'
    });
  const trafficLight = gsapTimeline('.first-screen', {
    scrub: true
    // markers: true
  });
  trafficLight //* 紅
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
    });
};
