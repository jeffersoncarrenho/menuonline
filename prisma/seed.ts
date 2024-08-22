const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function seedDatabase() {
    try {

        const burgers = [
            {
                name: 'Jump Burger',
                price: '60',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/ac4fa33c-0e9d-4436-8786-e6dda4028b0c-jh3axz.jpg',
            },
            {
                name: 'Jump Mini Burgers',
                price: '65',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/3da5a8c3-ef1d-4bdb-9c91-9a2427dd4469-zgxzex.jpg',
            },
            {
                name: 'Jump Special Burger',
                price: '70',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/7af6b9f7-3efc-41c6-b009-18841a87b51a-jh3axy.jpg',
            },
            {
                name: 'Jump Combo Burger',
                price: '80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/4c7e3ca1-5d1f-4346-8443-9b461dcd4c4e-jh3ay0.jpg',
            },
            {
                name: 'Jump Cheese Salad Burger',
                price: '60',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/8eb69226-2978-42c5-ac94-00266137990e-jh3axv.jpg',
            },
            {
                name: 'Jump Family Combo Burger',
                price: '150',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/77c6f5fa-4898-4414-98b1-0ec474135185-jh3axr.jpg',
            },
            {
                name: 'Jump Beer Combo Burger',
                price: '95',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/6b208a04-ae44-49ea-a072-408abb196965-jh3axt.jpg',
            },
            {
                name: 'Jump Tasty Burger',
                price: '60',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/241ecfb0-8ac2-4085-a06a-4cabdf7e5d9e-jh3axu.jpg',
            },
            {
                name: 'Jump Big Burger',
                price: '70',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/66b0424f-ffca-47cf-954c-f46e1b15d6ba-jh3axw.jpg',
            },
            {
                name: 'Jump Combo Mini Burgers',
                price: '100',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/13a01d26-dec2-475b-b0bf-fef2e555e392-jh3axx.jpg',
            },
            {
                name: 'Jump Combo Mini Burgers',
                price: '70',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/13a01d26-dec2-475b-b0bf-fef2e555e392-jh3axx.jpg',
            },
        ];



        for (const burger of burgers) {

            const c = await prisma.dishes.create({
                data: {
                    name: burger.name,
                    price: burger.price,
                    description: burger.description,
                    image: burger.image,
                    FoodCategories: {
                        connect: {
                            id: 'cm04fa0hs0000a36cahf644zr'
                        }
                    }
                }
            });
        }



        await prisma.$disconnect();



    } catch (error) {
        console.error("Erro ao criar Tudo:", error);

    }
}

seedDatabase();