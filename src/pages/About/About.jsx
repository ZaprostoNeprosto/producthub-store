export default function About() {
    return (
        <div className="about-layout">
            <div>
                <h1>About Us</h1>
                <p>
                    Since 2023,
                    {' '}
                    <em>ProductHub</em>
                    {' '}
                    has been dedicated to exceptional service, guaranteeing the
                    freshness and finest quality of our products.
                    Shop conveniently on our user-friendly app and save valuable time.
                    <br />
                    <br />
                    <em>
                        Rest assured, your payment is securely processed through
                        Stripe for seamless transactions.
                    </em>
                </p>
            </div>
            <img
                src="/images/grocery-bag.jpg"
                height="275"
                width="183"
                className="rounded"
                alt="grocery"
            />
        </div>
    );
}
