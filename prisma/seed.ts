const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function seedDatabase() {
    try {

        const hotdogs = [
            {
                name: 'Jump Hot Dog',
                price: '60',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/95a30511-f416-481b-aec3-d33abee6e071-t59zad.jpg',
            },
            {
                name: 'American Hot Dog',
                price: '65',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/665b2a6f-cdec-4558-a5d1-e2f6b386e69f-t59zae.jpg',
            },
            {
                name: 'Jump Double Dog',
                price: '70',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/8f98f8da-41ae-4598-a49f-a08be28b5f97-t59zaa.jpg',
            },
            {
                name: 'Jump Simple Hot Dog',
                price: '80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/7ec661bb-935d-4fe3-8071-bc381ba4858c-t59zac.jpg',
            },
            {
                name: 'Jump Vegan Hot Dog',
                price: '60',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'https://utfs.io/f/1f8dd4cc-ed39-4f15-ba77-a94bbd20ae78-t59zab.jpg',
            },
        ];



        for (const hotdog of hotdogs) {

            const c = await prisma.dishes.create({
                data: {
                    name: hotdog.name,
                    price: hotdog.price,
                    description: hotdog.description,
                    image: hotdog.image,
                    FoodCategories: {
                        connect: {
                            id: 'cm04fa5zu0003a36cveysham0'
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