import Image from "next/image";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface HeaderProps {
    restaurant: {
        name: string | null,
        image: string | null,
    }
}

const Header = ({ restaurant }: HeaderProps) => {
    return (
        <Card className="flex flex-row items-center justify-between border-0 p-5">
            <div>
                <CardDescription className="text-xs">Bem vindo ao</CardDescription>
                <CardTitle className="text-lg">{restaurant.name!}</CardTitle>
            </div>
            <div>
                <Image src={restaurant.image!} width={50} height={50} alt={restaurant.name!} />
            </div>
        </Card>
    );
}

export default Header;