import { db } from "./prisma";


export async function getRestaurants() {
    const restaurants = await db.restaurant.findMany();
    return restaurants;
}


export async function getRestaurantById(restaurantId: string) {
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