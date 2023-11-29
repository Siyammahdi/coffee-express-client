import { BsArrowLeftShort } from "react-icons/Bs";
import { useLoaderData, useNavigate } from "react-router-dom";


const CoffeeDetails = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/")
    };

    const coffeeData = useLoaderData();
    console.log(coffeeData);
    const { name, chef, category, supplier, taste, details, photoURL } = coffeeData;

    return (
        <div className="bg-[url('src/assets/images/more/4.png')] bg-no-repeat bg-left">
            <div className="w-3/4 mx-auto">
                <button onClick={handleBack} className="text-2xl text-primary-color flex items-center gap-2 font-semibold hover:bg-block-btn-bg px-2 py-4 rounded-lg mt-8"> <BsArrowLeftShort></BsArrowLeftShort> Back to home</button>
                <div className=" bg-gray-200 py-16 px-2 my-10 bg-opacity-15">
                    <div className="flex flex-col lg:flex-row items-center ">
                        <div className="w-1/2">
                            <img src={photoURL} className="w-2/3 mx-auto" />
                        </div>
                        <div>
                            <h2 className="text-2xl text-primary-color font-semibold my-5">Niceties</h2>
                            <div className="font-sans space-y-1">
                                <p className="font-semibold">Name: <span className="font-normal px-2 text-gray-600">{name}</span></p>
                                <p className="font-semibold">Chef: <span className="font-normal px-2 text-gray-600">{chef}</span></p>
                                <p className="font-semibold">Supplier: <span className="font-normal px-2 text-gray-600">{supplier}</span></p>
                                <p className="font-semibold">Taste: <span className="font-normal px-2 text-gray-600">{taste}</span></p>
                                <p className="font-semibold">Category: <span className="font-normal px-2 text-gray-600">{category}</span></p>
                                <p className="font-semibold">Details: <span className="font-normal px-2 text-gray-600">{details}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;