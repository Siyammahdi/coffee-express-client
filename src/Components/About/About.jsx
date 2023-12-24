import AboutImg1 from "../../assets/images/icons/1.png"
import AboutImg2 from "../../assets/images/icons/2.png"
import AboutImg3 from "../../assets/images/icons/3.png"
import AboutImg4 from "../../assets/images/icons/4.png"

const About = () => {
    return (
        <div className="bg-card-bg text-primary-color px-16 lg:px-32 flex flex-col lg:flex-row  gap-10 py-10">
            <div>
                <img src={AboutImg1} alt="" />
                <h3 className="text-xl font-semibold">Awesome Aroma</h3>
                <p className="font-sans text-xs">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={AboutImg2} alt="" />
                <h3 className="text-xl font-semibold">Awesome Aroma</h3>
                <p className="font-sans text-xs">We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={AboutImg3} alt="" />
                <h3 className="text-xl font-semibold">Awesome Aroma</h3>
                <p className="font-sans text-xs">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={AboutImg4} alt="" />
                <h3 className="text-xl font-semibold">Awesome Aroma</h3>
                <p className="font-sans text-xs">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default About;