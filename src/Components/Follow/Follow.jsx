import instaImg9 from "../../assets/images/cups/Rectangle 9.png"
import instaImg10 from "../../assets/images/cups/Rectangle 10.png"
import instaImg11 from "../../assets/images/cups/Rectangle 11.png"
import instaImg12 from "../../assets/images/cups/Rectangle 12.png"
import instaImg13 from "../../assets/images/cups/Rectangle 13.png"
import instaImg14 from "../../assets/images/cups/Rectangle 14.png"
import instaImg15 from "../../assets/images/cups/Rectangle 15.png"
import instaImg16 from "../../assets/images/cups/Rectangle 16.png"

const Follow = () => {
    return (
        <div className="px-4 md:px-16 lg:px-32 py-8 lg:py-24 text-center">
            <p>---Follow Us Now---</p>
            <h2 className="text-primary-color
            text-3xl font-semibold pb-10">Follow on Instagram</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-2 gap-5">
                <img src={instaImg9} alt="" />
                <img src={instaImg10} alt="" />
                <img src={instaImg11} alt="" />
                <img src={instaImg12} alt="" />
                <img src={instaImg13} alt="" />
                <img src={instaImg14} alt="" />
                <img src={instaImg15} alt="" />
                <img src={instaImg16} alt="" />
                
            </div>
        </div>
    );
};

export default Follow;