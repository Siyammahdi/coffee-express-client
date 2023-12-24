import Contact from "../Contact/Contact";
import footerBg from "../../assets/images/more/24.jpg"


const Footer = () => {
    return (

        <div>
            <Contact></Contact>
            <div style={{backgroundImage: `url(${footerBg})`}} className=" h-14 flex justify-center items-center">
                <h4 className="text-white text-sm lg:text-lg">Copyright Coffee Express ! All Rights Reserved</h4>
            </div>
        </div>
    );
};

export default Footer;