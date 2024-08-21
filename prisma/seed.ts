const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

async function seedDatabase() {
    try {


        // const categories = [
        //     { name: 'Burgers', imageUrl: 'https://utfs.io/f/6a3357cf-8ea7-4a0d-94fd-aeeaeb4d7227-jh3axs.jpg' },
        //     { name: 'Chicken', imageUrl: 'https://utfs.io/f/2ebb4116-7dbb-4b95-87c7-4ebae16513d5-rfi504.jpg' },
        //     { name: 'Peixes', imageUrl: 'https://utfs.io/f/df1c8a02-4015-444e-94a5-86e977562c9e-l2olqd.jpg' },
        //     { name: 'Hot Dogs', imageUrl: 'https://utfs.io/f/f5cdf2b0-47d3-4e36-a149-ed8b1434fb25-t59za9.jpgvg' },
        //     { name: 'Carnes', imageUrl: 'https://utfs.io/f/cc4b3280-2adc-408f-a6af-c392476837dc-htvo7m.jpg' },
        //     { name: 'Massas', imageUrl: 'https://utfs.io/f/9630b6c0-2e19-4ca1-860d-9921108efe7f-d3jqfi.jpg' },
        //     { name: 'Saladas', imageUrl: 'https://utfs.io/f/5b05ffdc-cca7-49dc-ab7c-d17f09c8beda-utghk4.jpg' },
        //     { name: 'Sanduíches', imageUrl: 'https://utfs.io/f/3a724c4e-b81f-4aae-a403-564eca6c412c-2e9z4u.jpg' },
        //     { name: 'Snacks', imageUrl: 'https://utfs.io/f/9fd6158e-624a-4e9a-a54f-6fb7751bc2c5-4ibl8p.jpg' },
        // ];

        // const restaurants = [];

        // const restaurant = await prisma.restaurant.create({
        //     data: {
        //         name: "Jump Foods",
        //         email: "jefferson@jumpsites.com.br",
        //         image: "https://utfs.io/f/22997d5a-72fd-4811-88bb-9c3c14fb1bb5-rrx2mi.png",
        //     }
        // });

        // for (const category of categories) {

        //     const c = await prisma.foodCategories.create({
        //         data: {
        //             name: category.name,
        //             image: category.imageUrl,
        //             Restaurant: {
        //                 connect: {
        //                     id: 'cm042j41700008r8y5uz72ssr'
        //                 }
        //             }
        //         }
        //     });
        // }
        // await prisma.$disconnect();
    } catch (error) {
        console.error("Erro ao criar Tudo:", error);

    }
}

seedDatabase();