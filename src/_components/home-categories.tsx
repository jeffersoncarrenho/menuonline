import Link from "next/link";
import { db } from "@/_lib/prisma";

interface HomeCategoriesProps {
    category: {
        id: string | null,
        name: string | null,
        image: string | null,
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
            <div className="flex justify-between mt-5 mb-2">
                <h2 className="font-bold">{category.name}</h2>
                <Link href={`/category/${category.id}`}>
                    <p className="text-xs">Ver todos</p>
                </Link>
            </div>
        </>
    );
}

export default HomeCategories;