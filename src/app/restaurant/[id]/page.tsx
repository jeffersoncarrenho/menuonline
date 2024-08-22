import HomeCategories from "@/_components/home-categories";
import Header from "@/_components/header";
import CategoriesSlider from "@/_components/categories-slider";
import { db } from "@/_lib/prisma";
import { getRestaurantById } from "@/_lib/data";

interface RestaurantPageProps {
    params: {
        id: string
    }
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {

    const restaurant = await getRestaurantById(params.id)

    return (
        <main>
            <Header restaurant={restaurant!} />
            <div className="flex w-full items-center gap-4 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">

            </div>
            <div className="px-5">

            </div>

        </main>
    );
}

export default RestaurantPage