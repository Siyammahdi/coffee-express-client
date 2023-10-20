import { Outlet } from "react-router-dom";
import Brand from "../Components/Brand/Brand";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="font-rancho">
            <Brand></Brand>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;