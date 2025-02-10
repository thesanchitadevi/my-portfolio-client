import ProductCard from "@/components/Product/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  // Data fetching
  const res = await fetch("http://localhost:5000/products", {
    // Data fetching with cache control
    // cache: "force-cache", // this will fetch the data and store it in the cache as CDN (Content Delivery Network) cache for future use

    // Data revalidation => after deploying the app, the data will be revalidated every 5 seconds means build/update the data manually. ISR (Incremental Static Regeneration) will be used. It only works in fetch function.
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();

  /* 
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  }; */

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold py-5">Welcome to Next JS Project</h1>

      {/* <button
        onClick={handleNavigation}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded"
      >
        Dashboard
      </button> */}

      <div className="container mx-auto grid grid-cols-3 gap-4 my-5">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        href={`/products`}
        className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View More
      </Link>
    </div>
  );
};

export default HomePage;
