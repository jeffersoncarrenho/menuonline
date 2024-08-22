import { categories, dishes } from "@/_constants/categories"
import HomeCategories from "@/_components/home-categories";
import Header from "@/_components/header";
import CategoriesSlider from "@/_components/categories-slider";
import { db } from "@/_lib/prisma";


interface RestaurantPageProps {
    params: {
        id: string
    }
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const restaurant = await db.restaurant.findUnique({
        where: {
            id: params.id,
        },
        include: {
            categories: true,
        },
    });

    return (
        <main>
            <Header restaurant={restaurant!} />
            <div className="flex w-full items-center gap-4 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">
                {restaurant?.categories.map((cat) => (
                    <CategoriesSlider category={cat} key={cat.id} />
                ))}
            </div>
            <div className="px-5">
                {restaurant?.categories.map((cat) => (
                    <HomeCategories category={cat} key={cat.id} />
                ))}
            </div>

        </main>
    );
}

export default RestaurantPage