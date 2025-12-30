import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries/categories";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });

  console.log("categories", categories);

  return (
    <div className="">
      {/* Feature Produtcs Carousel */}

      {/* Page Banner */}

      {/* Category Title */}

      {/* Products Sectio */}
    </div>
  );
}
