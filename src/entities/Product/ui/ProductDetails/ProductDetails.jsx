import { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import useFetch from '../../../../shared/lib/hooks/useFetch';

const baseUrl = process.env.REACT_APP_BASE_URL || 'https://producthub-store-server.vercel.app/';

export default function ProductDetails(props) {
    const [product, setProduct] = useState({});
    const { get } = useFetch(baseUrl);
    const params = useParams();

    useEffect(() => {
        get(`productinfo/id${params.id}.json`)
            .then((data) => {
                setProduct(data);
            })
            // eslint-disable-next-line no-console
            .catch((error) => console.log('Could not load product details', error));
    }, [get, params.id]);

    return (

        <div className="product-details-layout">
            <div>
                <NavLink to="/products">&#8249; Back</NavLink>
                <h2>{product.name}</h2>
                <img
                    src={product.image}
                    width="125"
                    height="125"
                    className="product-details-image"
                    alt={product.name}
                />
            </div>
            <div>
                <div className="tabs">
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                                to=""
                                end
                            >
                                Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                                to="nutrition"
                            >
                                Nutrition
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'tab-active' : '')}
                                to="storage"
                            >
                                Storage
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Outlet context={product} />
            </div>
        </div>

    );
}
