'use client'
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { categories, dishes } from "@/_constants/categories";
import { useParams } from "next/navigation";
import CategoriesSlider from "@/_components/categories-slider";
import DishItem from "@/_components/dish-item";

const Page = () => {
    const params = useParams<{ id: string }>()
    const dish = dishes.find(dish => dish.id == params.id)
    const dishCategories = dish?.categories.map(cat => categories.find(c => c.id == cat))
    const category = dishCategories?.find(cat => cat?.id != '1' ? cat : '')
    const relatedDishes = dishes.filter(dish => dish.categories.includes(category?.id!) && dish.id != params.id).slice(0, 3)

    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <ArrowLeft />
                </Link>
                <h1 className="text-lg font-bold">Detalhes</h1>
                <span></span>
            </div>
            <div className="my-5">
                <Image
                    src={dish?.imageUrl!}
                    width={300}
                    height={200}
                    alt={dish?.name!}
                    className="object-cover h-[200px] w-full rounded-xl"
                />
            </div>
            <div className="my-5 flex justify-between items-center">
                <div>
                    <p className="text-sm font-light">{category?.name}</p>
                    <h2 className="text-xl font-bold mb-3">{dish?.name}</h2>
                </div>
                <p className="text-2xl font-bold">${dish?.price}</p>
            </div>
            <p className="font-light">
                {dish?.description}
            </p>
            <div className="my-5">
                <h3 className="text-md font-semibold mb-3">Você também pode gostar</h3>
                <div className="my-2">
                    {
                        relatedDishes.map(related => (
                            <DishItem dish={related} key={related.id} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
}

export default Page;