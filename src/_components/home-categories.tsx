import Link from "next/link";

interface HomeCategoriesProps {
    category: {
        id: string | null | undefined,
        name: string | null | undefined,
        image: string | null | undefined,
    },
}

const HomeCategories = async ({ category }: HomeCategoriesProps) => {

    return (
        <div className="flex justify-between mt-5 mb-2">
            <h2 className="font-bold">{category.name}</h2>
            <Link href={`/category/${category.id}`}>
                <p className="text-xs">Ver todos</p>
            </Link>
        </div>
    );
}

export default HomeCategories;