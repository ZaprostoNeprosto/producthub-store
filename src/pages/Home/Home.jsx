import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-layout">
            <div>
                <h1>Online shopping simplified</h1>
                <p>
                    Discover the ultimate shopping experience with
                    {' '}
                    <em>ProductHub</em>
                    ! Seamlessly order your favorite groceries through our intuitive app and have
                    them delivered right to your doorstep, making your life easier than ever before.
                </p>
                <Link to="/products" className="btn btn-default">
                    Start shopping
                </Link>
            </div>
            <img
                src="/images/groceries.jpg"
                width="350"
                height="240"
                className="rounded home-image"
                alt="grocery bag"
            />
        </div>
    );
}
