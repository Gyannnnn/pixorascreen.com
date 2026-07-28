import type { BootScreenConfig } from '../boot-screens';

export const ubuntuBootScreen: BootScreenConfig = {
  background: '#300A24',
  logo: {
    type: 'image',
    src: '/assets/logos/ubuntu.logo.png',
    width: 265,
    height: 82,
    alt: 'Ubuntu',
  },
  loader: {
    type: 'dots',
    count: 5,
    colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
    size: 7,
    gap: 34,
    animation: 'ubuntuBoot',
    duration: 5000,
    loop: true,
  },
  layout: {
    justify: 'center',
    align: 'center',
    spacing: 20,
  },
};
