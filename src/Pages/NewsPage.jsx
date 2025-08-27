import NavBar from '../Components/NavBar';
import NewsPostGrid from '../Components/NewsPostGrid';
import Footer from '../Components/Footer';
import NewsSection from '../Components/NewsSection';

const newsPostsData = [
    { id: 1, title: "Reimagining Digital Design", description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.", date: "Jan 12, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 2, title: "Another Design Perspective", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "Feb 1, 2025", image: '/assets/img/projects/project2.webp' },
    { id: 3, title: "The Future of Branding", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "Mar 10, 2025", image: '/assets/img/projects/Designer.jpeg' },
    { id: 4, title: "Innovation in UX", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "Apr 5, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 5, title: "Digital Marketing Trends", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: "May 20, 2025", image: '/assets/img/projects/project2.webp' },
    { id: 6, title: "Creative Agency Insights", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", date: "Jun 1, 2025", image: '/assets/img/projects/Designer.jpeg' },
    { id: 7, title: "Visual Storytelling", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.", date: "Jul 15, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 8, title: "Web Development Best Practices", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.", date: "Aug 1, 2025", image: '/assets/img/projects/project2.webp' },
];

function News() {
    return (
        <>
            <NavBar />
            <NewsSection />
            <section className="mt-5">
                <div className="container py-5">
                    <NewsPostGrid filteredPosts={newsPostsData} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default News;
