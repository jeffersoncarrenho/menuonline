import { db } from "./prisma";


export async function getRestaurants() {
    const restaurants = await db.restaurant.findMany();
    return restaurants;
}

export const getRestaurantById = async (restaurantId: string) => {
    try {
        const restaurant = await db.restaurant.findUnique({
            where: {
                id: restaurantId,
            }
        });

        return restaurant;

    } catch (error) {
        return error;
    }
}

export async function getFoodCategories(restaurantId: string) {
    try {
        const foodCategories = await db.foodCategories.findMany({
            where: {
                restaurantId: restaurantId,
            },
            include: {
                dishes: true,
            },
        });

        return foodCategories;

    } catch (error) {
        return error;
    }
}

