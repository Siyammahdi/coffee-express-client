import { NavLink } from "react-router-dom";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Follow from "../../Components/Follow/Follow";
import { PiCoffeeDuotone } from 'react-icons/Pi';
import Coffees from "../../Components/Coffees/Coffees";
import BgTex1 from "../../assets/images/more/4.png"
import BgTex2 from "../../assets/images/more/5.png"


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <div style={{backgroundImage: `url(${BgTex1})`}} className=" bg-no-repeat bg-left">
                <div style={{backgroundImage: `url(${BgTex2})`}}  className=" bg-no-repeat bg-right">
                    <div className="text-center py-16 lg:py-28 px-4 md:px-16 lg:px-36">
                        <p>--- Sip & Savor ---</p>
                        <h2 className="text-primary-color text-3xl font-semibold">Our Popular Products</h2>
                        <NavLink to="/addCoffee">
                            <button className="flex m-auto items-center gap-2 my-8 bg-btn-bg px-5 py-3 rounded-md border-2 border-primary-color">Add Coffee <PiCoffeeDuotone></PiCoffeeDuotone> </button>
                        </NavLink>
                        <Coffees></Coffees>
                    </div>
                </div>
            </div>
            <Follow></Follow>
        </div>
    );
};

export default Home;