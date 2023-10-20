import { useNavigate } from "react-router-dom";
import Brand from "../../Components/Brand/Brand";
import Footer from "../../Components/Footer/Footer";
import { BsArrowLeftShort } from 'react-icons/Bs';




const ErrorPage = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    };

    return (
        <div>
            <Brand></Brand>
            <div className="flex justify-center mt-10 font-rancho">
                <button onClick={handleBack} className="text-2xl text-primary-color flex items-center gap-2 font-semibold"> <BsArrowLeftShort></BsArrowLeftShort> Back to home</button>
            </div>
            <img className=" m-auto" src="/src/assets/images/404/404.gif" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;