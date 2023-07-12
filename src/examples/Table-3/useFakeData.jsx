import { faker } from '@faker-js/faker'

const createRandomUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 3, max: 70 }),
    visits: faker.number.int({ min: 0, max: 200 }),
    status: faker.lorem.words({ min: 1, max: 3 }),
    progress: faker.number.int({ min: 0, max: 100 })
  }
}

const useFakeData = () => {
  return {
    users: faker.helpers.multiple(createRandomUser, {
      count: 50
    })
  }
}

export default useFakeData
