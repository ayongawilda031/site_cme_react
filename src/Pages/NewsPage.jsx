import NavBar from '../Components/NavBar';
import LatestPosts from '../Components/LatestPosts';
import Footer from '../Components/Footer';
import NewsSection from '../Components/NewsSection';

function News() {
    return (
        <>
            <NavBar />
            <NewsSection />
            <section className="mt-5">
                <div className="container py-5">
        
                    <LatestPosts isHomePage={false} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default News;