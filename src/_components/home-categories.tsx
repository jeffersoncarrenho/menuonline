import { dishes } from "@/_constants/categories";
import Link from "next/link";
import DishItem from "./dish-item";

interface HomeCategoriesProps {
    category: {
        id: string | null,
        name: string | null,
        image: string | null,
    },
}

const HomeCategories = ({ category }: HomeCategoriesProps) => {
    const showDishes = dishes.filter(dish => dish.categories.includes(category.id!)).slice(0, 3)
    return (
        <>
            <div className="flex justify-between mt-5 mb-2">
                <h2 className="font-bold">{category.name}</h2>
                <Link href={`/category/${category.id}`}>
                    <p className="text-xs">Ver todos</p>
                </Link>
            </div>
            <div className="my-5">
                {showDishes.map(dish =>
                    <DishItem dish={dish} key={dish.id} />
                )}
            </div>
        </>
    );
}

export default HomeCategories;