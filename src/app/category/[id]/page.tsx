'use client'

import DishItem from "@/_components/dish-item";
import { categories, dishes } from "@/_constants/categories";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams<{ id: string }>()
    const category = categories.filter((cat) => cat.id == params.id).map((cat) => cat.name)

    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <ArrowLeft />
                </Link>
                <h1 className="text-lg font-bold">{category}</h1>
                <span></span>
            </div>

            <div className="my-5">
                {
                    dishes.map((dish) => (
                        dish.categories.includes(params.id) ?
                            <DishItem dish={dish} key={dish.id} />
                            : ''
                    ))
                }
            </div>
        </div>
    );
}

export default Page;