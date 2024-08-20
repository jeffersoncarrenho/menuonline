import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

interface DishItemProps {
    dish: {
        id: string,
        name: string,
        imageUrl: string,
        price: string,
        description: string,
        categories: [...any[]],
    },
}


const DishItem = ({ dish }: DishItemProps) => {
    return (
        <Link href={`/dish/${dish.id}`}>
            <Card className="border-0 flex items-center rounded-xl gap-3 my-3 p-3">

                <div className="w-[100px] h-[70px]">
                    <Image src={dish.imageUrl} width={100} height={70} className="rounded-lg object-cover w-[100px] h-[70px]" alt="image-1" />
                </div>
                <div>
                    <h3 className="text-[14px]">{dish.name}</h3>
                    <p className="text-[10px] font-light">
                        {dish.description}
                    </p>
                    <p>${dish.price}</p>
                </div>
            </Card>
        </Link>
    );
}

export default DishItem;