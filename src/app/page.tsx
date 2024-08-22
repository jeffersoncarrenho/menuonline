import { categories, dishes } from "@/_constants/categories"
import HomeCategories from "@/_components/home-categories";
import Header from "@/_components/header";
import CategoriesSlider from "@/_components/categories-slider";
import { getRestaurants } from "@/_lib/data";
import { Card } from "@/_components/ui/card";
import Image from "next/image";


export default async function Home() {
  const restaurants = await getRestaurants()

  return (
    <main>

      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1>Jump Foods</h1>
        {restaurants.map(restaurant => (
          <Card key={restaurant?.id!}>
            <Image src={restaurant?.image!} width={100} height={100} alt={restaurant?.name!} />
          </Card>
        ))}
      </div>

    </main>
  );
}
