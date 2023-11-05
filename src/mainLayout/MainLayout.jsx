
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
         {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;