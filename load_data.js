const { faker } = require('@faker-js/faker');

module.exports = () => {
    const data = {
        users: [],
        profiles: [],
        posts: []
    };

    // Create users
    for (let i = 0; i < 100; i++) {
        const user = {
            id: i,
            name: faker.person.fullName(),
            nickname: faker.internet.userName(),
            email: faker.internet.email(),
            ip: faker.internet.ip(),
            userAgent : faker.internet.userAgent(),
            isBaned: faker.datatype.boolean(),
        };
        data.users.push(user);

        // Create profile for each user
        const profile = {
            id: i,
            userId: user.id,
            image: faker.internet.avatar(),
            createdAt: faker.date.past()
        };
        data.profiles.push(profile);

        // Create posts for each user
        for (let j = 0; j < 10; j++) {
            const post = {
                id: (i * 10) + j,
                userId: user.id,
                text: faker.lorem.paragraph(),
                createdAt: faker.date.past(),

                 };
            data.posts.push(post);
        }
    }
    return data;
};