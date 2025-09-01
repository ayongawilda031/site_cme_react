import NavBar from '../Components/NavBar';
import LatestPosts from '../Components/LatestPosts';
import Footer from '../Components/Footer';
import HeaderBanner from '../Components/HeaderBanner'; 

function News() {
    return (
        <>
            <NavBar />
            <HeaderBanner 
                title="Actualités" 
                description="Restez informé des dernières actualités juridiques, des décisions importantes et des événements marquants de notre cabinet." 
            />
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