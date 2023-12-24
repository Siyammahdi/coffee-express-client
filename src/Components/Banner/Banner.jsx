import BannerBg from "../../assets/images/more/3.png"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-content text-center text-neutral-content lg:justify-end">
                    <div className="lg:px-20 lg:ml-96 text-left w-3/5">
                        <h1 className="mb-5 text-2xl lg:text-3xl text-white font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-xs font-sans">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button  className="btn-sm lg:btn normal-case text-xl rounded-none bg-btn-bg text-btn-text hover:bg-transparent hover:text-white border-2 hover:border-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;