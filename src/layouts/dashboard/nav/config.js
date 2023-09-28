// component
import t from '../../../utils/i18n';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: t('dashboard'),
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: t('users'),
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: t('policeUnitRequests'),
    path: '/dashboard/unit-requests',
    icon: icon('ic_cart'),
  },
  {
    title: t('pendingAccidentReports'),
    path: '/dashboard/accident-reports',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
