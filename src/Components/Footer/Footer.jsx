import Contact from "../Contact/Contact";


const Footer = () => {
    return (

        <div>
            <Contact></Contact>
            <div className="bg-[url('src/assets/images/more/24.jpg')] h-14 flex justify-center items-center">
                <h4 className="text-white text-sm lg:text-lg">Copyright Coffee Express ! All Rights Reserved</h4>
            </div>
        </div>
    );
};

export default Footer;