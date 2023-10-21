import { NavLink } from "react-router-dom";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Follow from "../../Components/Follow/Follow";
import { PiCoffeeDuotone } from 'react-icons/Pi';
import Coffees from "../../Components/Coffees/Coffees";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <div className="bg-[url('src/assets/images/more/4.png')] bg-no-repeat bg-left">
                <div className="bg-[url('src/assets/images/more/5.png')] bg-no-repeat bg-right">
                    <div className="text-center py-28 px-36">
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