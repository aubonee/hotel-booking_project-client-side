
import FeaturedRooms from '../../components/home/FeaturedRooms';
import Newsletter from '../../components/home/Newsletter';
import Banner from '../../components/home/banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
           
        </div>
    );
};

export default Home;