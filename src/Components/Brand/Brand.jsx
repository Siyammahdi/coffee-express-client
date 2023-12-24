import brandImg from "../../assets/images/more/15.jpg"
import logo from "../../assets/images/more/logo1.png"

const Brand = () => {
    return (
        <div className="md:h-20 bg-center font-rancho" style={{backgroundImage: `url(${brandImg})`}}>
            <div className="flex justify-center items-center gap-4 py-1">
                <img className="w-8 md:w-14" src={logo} alt="logo" />
                <h1 className="text-white text-2xl md:text-4xl">Coffee Express</h1>
            </div>
        </div>
    );
};

export default Brand;