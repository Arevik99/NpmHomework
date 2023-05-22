import { faker } from '@faker-js/faker';
import _ from 'lodash'
function createFaker() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.exampleEmail(),
        phone: faker.phone.number()
    }
}
const fakeUsers = faker.helpers.multiple(createFaker, {
    count: 10,
});
function logUsers(users) {
    users.forEach((user) => {
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone} \n`);
    })
}
console.log("Fake users");
logUsers(fakeUsers);
let sortedFakers = _.sortBy(fakeUsers, ['name']);
console.log("Sorted fake users");
logUsers(sortedFakers);


