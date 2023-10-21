import { useState } from 'react';
// import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartValueSelector } from '../../app/providers/Store/store';
import Input from '../../shared/ui/Input/Input';
import Button from '../../shared/ui/Button/Button';

// const stripeLoadedPromise = loadStripe('pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate');

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartValueSelector);
    const [email, setEmail] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        const lineItems = cart.map((product) => {
            return { price: product.price_id, quantity: product.quantity };
        });
    }

    return (
        <div className="cart-layout">
            <div>
                <h1>Your Cart</h1>
                {cart.length === 0 && (
                    <>
                        <p>You have not added any product to your cart yet.</p>
                        <br />
                        <Link to="/products" className="btn btn-default">
                            Start shopping
                        </Link>
                    </>
                )}
                {cart.length > 0 && (
                    <>
                        <table className="table table-cart">
                            <thead>
                                <tr>
                                    <th width="25%" className="th-product">
                                        Product
                                    </th>
                                    <th width="20%">Unit price</th>
                                    <th width="10%">Quanity</th>
                                    <th width="25%">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>
                                                <img
                                                    src={product.image}
                                                    width="30"
                                                    height="30"
                                                    alt=""
                                                />
                                                {' '}
                                                {product.name}
                                            </td>
                                            <td>
                                                $
                                                {product.price}
                                            </td>
                                            <td>{product.quantity}</td>
                                            <td>
                                                <strong>
                                                    $
                                                    {product.price * product.quantity}
                                                </strong>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                                    <th colSpan="2" />
                                    <th className="cart-highlight">Total</th>
                                    <th className="cart-highlight">
                                        $
                                        {totalPrice}
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <form className="pay-form" onSubmit={handleFormSubmit}>
                            <p>
                                Enter your email and then click on pay and your products will be
                                delivered to you on the same day!
                            </p>
                            <Input
                                placeholder="Email"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                type="email"
                                required
                            />
                            <Button type="submit">Pay</Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
