import DishItem from "@/_components/dish-item";
import { db } from "@/_lib/prisma";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


interface FoodCategoryPageProps {
    params: {
        id: string
    }
}


const FoodCategoryPage = async ({ params }: FoodCategoryPageProps) => {
    const category = await db.foodCategories.findUnique({
        where: {
            id: params.id
        },
        include: {
            dishes: true,
            Restaurant: true,
        }
    })

    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <Link href={`/restaurant/${category?.Restaurant.id}`}>
                    <ArrowLeft />
                </Link>
                <h1 className="text-lg font-bold">{category?.name}</h1>
                <span></span>
            </div>

            <div className="my-5">
                {category?.dishes.map(dish =>
                    <DishItem dish={dish} key={dish.id} />
                )}
            </div>
        </div>
    );
}

export default FoodCategoryPage;