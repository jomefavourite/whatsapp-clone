import { faker } from '@faker-js/faker/locale/en';

faker.seed(10);

export const chatData = [...Array(20).keys()].map((i) => ({
  id: faker.string.uuid(),
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  date: faker.date.future().toISOString(),
  lastMessage: faker.lorem.paragraph(2),
  image: faker.image.url(),
}));
