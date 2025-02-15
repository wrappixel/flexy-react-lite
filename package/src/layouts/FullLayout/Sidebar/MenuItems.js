import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus,IconAlignBoxLeftBottom,IconCheckbox,IconRadar,IconSlideshow,IconCaretUpDown,IconTable
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboards/dashboard1',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Autocomplete',
    icon: IconTypography,
    href: '/form-elements/autocomplete',
  },
  {
    id: uniqueId(),
    title: 'Buttons',
    icon: IconAlignBoxLeftBottom,
    href: '/form-elements/button',
  },
  {
    id: uniqueId(),
    title: 'Checkbox',
    icon: IconCheckbox,
    href: '/form-elements/checkbox',
  },
  {
    id: uniqueId(),
    title: 'Radio',
    icon: IconRadar,
    href: '/form-elements/radio',
  },
  {
    id: uniqueId(),
    title: 'Slider',
    icon: IconSlideshow,
    href: '/form-elements/slider',
  },
  {
    id: uniqueId(),
    title: 'Switch',
    icon: IconCaretUpDown,
    href: '/form-elements/switch',
  },
  {
    id: uniqueId(),
    title: 'Tables',
    icon: IconTable,
    href: '/tables/basic-table',
  },
  
];

export default Menuitems;
