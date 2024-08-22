import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

interface DishItemProps {
    dish: {
        id: string | null | undefined,
        name: string | null | undefined,
        image: string | null | undefined,
        price: string | null | undefined,
        description: string | null | undefined,
    },
}


const DishItem = ({ dish }: DishItemProps) => {
    return (
        <Link href={`/dish/${dish?.id}`}>
            <Card className="flex items-center justify-start rounded-xl gap-3 my-3 p-3">
                <div>
                    <Image src={dish?.image!} width={100} height={70} className="rounded-lg object-cover" alt={dish?.name!} />
                </div>
                <div>
                    <h3 className="text-[14px]">{dish?.name}</h3>
                    <p className="text-[10px] font-light">
                        {dish.description?.substring(0, 35)!}
                    </p>
                    <p>${dish?.price!}</p>
                </div>
            </Card>
        </Link>
    );
}

export default DishItem;