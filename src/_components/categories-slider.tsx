import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

interface CategoriesSliderProps {
    category: {
        id: string | null,
        name: string | null,
        image: string | null,
    }
}

const CategoriesSlider = ({ category }: CategoriesSliderProps) => {
    return (
        <Link href={`/category/${category.id}`}>
            <Card className="relative max-h-[120px] min-h-[120px] min-w-[81px] rounded-xl">
                <Image src={category.image!} fill alt={category.name!} className="object-cover rounded-xl" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{category.name!}</p>
            </Card>
        </Link>
    );
}

export default CategoriesSlider;