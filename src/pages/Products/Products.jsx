import { useState, useEffect } from 'react';
import Product from '../../entities/Product/ui/Product/Product';
import useFetch from '../../shared/lib/hooks/useFetch';
import Loader from '../../shared/ui/Loader/Loader';

const baseUrl = process.env.REACT_APP_BASE_URL || 'https://producthub-store-server.vercel.app/';

export default function Products(props) {
    const {
        cart,
        onProductAdd,
        onProductDelete,
    } = props;
    const [products, setProducts] = useState([]);
    const [trouble, setTrouble] = useState(false);
    const { get, loading } = useFetch(
        baseUrl,
    );

    useEffect(() => {
        get('supermarket.json')
            .then((data) => {
                setTrouble(false);
                setProducts(data);
            })
            .catch((error) => {
                setTrouble(true);
                // eslint-disable-next-line no-console
                console.log('Could not load products', error);
            });
    }, [get]);

    return (
        <div className="products-layout">
            {trouble ? (
                <p>
                    Could not load products.
                    <br />
                    {' '}
                    Please check your internet connection and try again later.
                </p>
            ) : (
                <>
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
                            cart={cart}
                            onProductAdd={onProductAdd}
                            onProductDelete={onProductDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
