import { db } from "./prisma";

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