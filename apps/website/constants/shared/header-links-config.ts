import type { HeaderLink } from '~/types';

export const HEADER_LINKS_CONFIG: HeaderLink[] = [
  {
    label: 'Indoor Monitor',
    path: 'https://www.airgradient.com/indoor/',
    openBlank: true
  },
  {
    label: 'Outdoor Monitor',
    path: 'https://www.airgradient.com/outdoor/',
    openBlank: true
  },
  {
    label: 'Map',
    path: '/',
    openBlank: false
  },
  {
    label: 'Documentation',
    path: 'https://www.airgradient.com/documentation/',
    openBlank: true
  },
  {
    label: 'Research',
    path: 'https://www.airgradient.com/research/',
    openBlank: true
  },
  {
    label: 'Perspectives',
    path: 'https://www.airgradient.com/blog',
    openBlank: false
  },
  {
    label: 'Support',
    path: 'https://www.airgradient.com/support/',
    openBlank: true
  },
  {
    label: 'Shop',
    path: 'https://www.airgradient.com/shop/',
    openBlank: true
  }
];
