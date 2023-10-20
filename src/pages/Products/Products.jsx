import { useState, useEffect } from "react";
import Product from "../../entities/Product/ui/Product/Product";
import useFetch from "../../shared/lib/hooks/useFetch";
import Loader from "../../shared/ui/Loader/Loader";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [trouble, setTrouble] = useState(false);
  const { get, loading } = useFetch(
    "http://localhost:3500/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setTrouble(false)
        setProducts(data);
      })
      .catch((error) => {
        setTrouble(true)
        console.log("Could not load products", error)
      })
  }, [get]);

  return (
    <div className="products-layout">
      {trouble ? (<p>Could not load products. <br/> Please check your internet connection and try again later.</p>) : (<>
        <h1>Products</h1>
        <p>Explore our products for a delightful selection</p>
        </>
      )}

      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}
