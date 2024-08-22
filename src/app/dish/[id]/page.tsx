import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { db } from "@/_lib/prisma";
import DishItem from "@/_components/dish-item";

interface DishPageProps {
    params: {
        id: string,
    },
}

const DishPage = async ({ params }: DishPageProps) => {
    // const dish = await db.dishes.findUnique({
    //     where: {
    //         id: params.id,
    //     },
    // })

    // const category = await db.foodCategories.findUnique({
    //     where: {
    //         id: dish?.categoryId
    //     },
    //     include: {
    //         dishes: true
    //     }

    // })

    // const relatedDishes = category?.dishes.filter(related => related.id != params.id).slice(0, 3)

    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                {/* <Link href={`/category/${category?.id}`}> */}
                <ArrowLeft />
                {/* </Link> */}
                <h1 className="text-lg font-bold">Detalhes</h1>
                <span></span>
            </div>
            <div className="my-5">
                {/* <Image
                    src={dish?.image!}
                    width={300}
                    height={200}
                    alt={dish?.name!}
                    className="object-cover h-[200px] w-full rounded-xl"
                /> */}
            </div>
            <div className="my-5 flex justify-between items-center">
                <div>
                    {/* <p className="text-sm font-light">{category?.name}</p>
                    <h2 className="text-xl font-bold mb-3">{dish?.name}</h2> */}
                </div>
                {/* <p className="text-2xl font-bold">${dish?.price}</p> */}
            </div>
            <p className="font-light">
                {/* {dish?.description} */}
            </p>
            <div className="my-5">
                <h3 className="text-md font-semibold mb-3">Você também pode gostar</h3>
                <div className="my-2">
                    {/* {relatedDishes?.map(related =>
                        <DishItem dish={related} key={related.id} />
                    )} */}
                </div>
            </div>
        </div>

    );
}

export default DishPage;