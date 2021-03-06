import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from '../components/slider/Slider'


const Home = () => {
    return <div>
        <Announcement/>
        {/* <Navbar/> */}
        <Slider />
        <Categories />
        <Products />
        <NewsLetter/>
        <Footer/>
    </div>;
};

export default Home;
