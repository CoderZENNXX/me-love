import { Link } from "react-router";

const Home = () => {
    return (
        <>
        <div className="webpage-title">
            <h2>Me-Love</h2>
        </div>

        <div className="home">
            <div className="love-quote-preview">
                <Link to="/loveQuote" className="link love-quote-link">
                    <h2 className="explaination">Get a love quote to sent to your partner 💗📖</h2>
                </Link>
            </div>

            <div className="couple-animation-preview">
                <Link to="/coupleAnimation" className="link couple-animation-link">
                    <h2 className="explaination">Let's create an animation with your and your partnar's inatials 💗💗</h2>
                </Link>
            </div>
        </div>
        </>
    );
}
 
export default Home;