import { Link } from 'react-router'

const Header = () => {

    console.log('>>>> Header ......')

    return (
        <section className="container">
            <h1 id="greet" >Welcome to NC News</h1>
            <nav >
                <Link id="ln" to="/" className="link">Home</Link>
                <Link id="ln" to="/api/articles" className="link">List All Articles</Link>
                <Link id="ln" to="/api/topics" className="link">List All Topics</Link>
            </nav>
        </section>
    )
};

export default Header