import { categories, dishes } from "@/_constants/categories"
import HomeCategories from "@/_components/home-categories";
import Header from "@/_components/header";
import DishItem from "@/_components/dish-item";
import CategoriesSlider from "@/_components/categories-slider";

export default function Home() {

  return (
    <main>
      <Header />
      <div className="flex w-full items-center gap-4 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => (
          <CategoriesSlider category={cat} key={cat.id} />
        ))}
      </div>
      <div className="px-5">
        {categories.map((cat) => (
          <>
            <HomeCategories category={cat} key={cat.id} />
          </>
        ))}
      </div>

    </main>
  );
}
