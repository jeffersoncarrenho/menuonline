import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Header = () => {
    return (
        <Card className="flex flex-row items-center justify-between border-0 p-5">
            <div>
                <CardDescription className="text-xs">Bom dia</CardDescription>
                <CardTitle className="text-lg">Restaurante</CardTitle>
            </div>
            <div>
                <Image src="/callback.svg" width={32} height={38} alt="logo" />
            </div>
        </Card>
    );
}

export default Header;