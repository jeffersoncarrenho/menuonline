import HomeCategories from "@/_components/home-categories";
import Header from "@/_components/header";
import CategoriesSlider from "@/_components/categories-slider";
import { db } from "@/_lib/prisma";
import { getFoodCategories, getRestaurantById } from "@/_lib/data";
import DishItem from "@/_components/dish-item";

interface RestaurantPageProps {
    params: {
        id: string
    }
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {

    const restaurant = await db.restaurant.findUnique({
        where: {
            id: params.id,
        }
    })

    const categories = await db.foodCategories.findMany({
        where: {
            restaurantId: params.id,
        },
        include: {
            dishes: true,
        }
    })

    return (
        <main>
            <Header restaurant={restaurant!} />
            <div className="flex w-full items-center gap-4 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">
                {categories.map(categ => (
                    <CategoriesSlider category={categ} key={categ.id} />
                ))}
            </div>
            <div className="px-5">
                {categories.map(categ => categ.dishes.length > 0 && (
                    <>
                        <HomeCategories category={categ} key={categ.id} />
                        {categ.dishes.map(dish => (
                            <DishItem dish={dish} key={dish.id} />
                        )).slice(0, 3)}
                    </>
                ))}
            </div>

        </main>
    );
}

export default RestaurantPage