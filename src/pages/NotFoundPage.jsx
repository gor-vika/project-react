import { Link } from "react-router-dom"
export default function NotFoundPage(){
    return (
        <main>
            <section className="hero-section flex not-found">
            <h1 className="title">404<span>Page not found</span></h1>
            <div className="title-desc">
                <Link to='/'>Go to Home Page</Link>
            </div>
            </section>
        </main>
    )
}