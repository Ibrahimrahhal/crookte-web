import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_default.svg`,
  name: ['محمد السواعير', 'فيصل الزيود', 'حازم المعايطة', 'نجيب الرحاحلة', 'رحال الرحال', 'زيد قورشة'][index],
  status: sample(['فعال', 'موقف']),
  role: sample(['ملازم', 'ملازم اول', 'وكيل', 'نقيب', 'رائد']),
}));

export default users;
