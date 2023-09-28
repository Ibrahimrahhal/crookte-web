// component
import t from '../../../utils/i18n';
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: t('dashboard'),
    path: '/dashboard/app',
    icon: <Iconify icon="material-symbols:dashboard" />,
  },
  {
    title: t('users'),
    path: '/dashboard/user',
    icon: <Iconify icon="clarity:users-solid" />,
  },
  {
    title: t('policeUnitRequests'),
    path: '/dashboard/unit-requests',
    icon: <Iconify icon="emojione-monotone:police-car-light" />,
  },
  {
    title: t('pendingAccidentReports'),
    path: '/dashboard/accident-reports',
    icon: <Iconify icon="material-symbols:car-crash-rounded" />,
  },
];

export default navConfig;
