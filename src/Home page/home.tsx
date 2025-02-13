import './home.css'

const Homepage = () => {
    return (
        <div className="home-page">
            <header>
                <h1>Fresh Vegetable Market</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">Login</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h2>Welcome to Our Vegetable Store!</h2>
                    <p>We offer the freshest and organic vegetables for your healthy lifestyle.</p>
                    <button>Shop Now</button>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Fresh Vegetable Products. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Homepage;