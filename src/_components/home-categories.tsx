import Link from "next/link";
import { db } from "@/_lib/prisma";
import DishItem from "./dish-item";

interface HomeCategoriesProps {
    category: {
        id: string | null | undefined,
        name: string | null | undefined,
        image: string | null | undefined,
    },
}

const HomeCategories = async ({ category }: HomeCategoriesProps) => {

    const dishes = await db.dishes.findMany({
        where: {
            categoryId: category.id!
        }
    })

    return (
        <>
            {dishes.length > 1 &&
                <>
                    <div className="flex justify-between mt-5 mb-2">
                        <h2 className="font-bold">{category.name}</h2>
                        <Link href={`/category/${category.id}`}>
                            <p className="text-xs">Ver todos</p>
                        </Link>
                    </div>
                    <div className="my-5">
                        {dishes.map(dish =>
                            <DishItem dish={dish} key={dish.id} />
                        ).slice(0, 3)}
                    </div>
                </>
            }
        </>
    );
}

export default HomeCategories;