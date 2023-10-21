import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/Bs';

const UpdateCoffee = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    };

    return (
        <div className="my-32 text-center">
            <div className="flex justify-start mt-10 font-rancho ml-36 my-10">
                <button onClick={handleBack} className="text-2xl text-primary-color flex items-center gap-2 font-semibold hover:bg-block-btn-bg px-2 py-4 rounded-lg"> <BsArrowLeftShort></BsArrowLeftShort> Back to home</button>
            </div>
            <div className="bg-card-bg mx-36 py-20">
                <h1 className="text-3xl drop-shadow-xl font-semibold">Update Existing Coffee Details</h1>
                <p className="font-sans w-3/4 m-auto my-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form>
                    <div className="mx-28 font-sans font-semibold">
                        <div className="grid grid-cols-2 grid-rows-3 gap-5 ">
                            <label>
                                <h3 className="text-left my-2 text-lg">Name</h3>
                                <input type="text" name="name" placeholder="Enter coffee name" className="input w-full" required />
                            </label>
                            <label>
                                <h3 className="text-left my-2 text-lg">Chef</h3>
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input w-full" required />
                            </label>
                            <label>
                                <h3 className="text-left my-2 text-lg">Supplier</h3>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input w-full" required />
                            </label>
                            <label>
                                <h3 className="text-left my-2 text-lg">Taste</h3>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input w-full" />
                            </label>
                            <label>
                                <h3 className="text-left my-2 text-lg">Category</h3>
                                <input type="text" name="category" placeholder="Enter coffee category" className="input w-full" />
                            </label>
                            <label>
                                <h3 className="text-left my-2 text-lg">Details</h3>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input w-full" />
                            </label>
                        </div>
                        <label>
                            <h3 className="text-left mt-5 mb-2 text-lg">Photo</h3>
                            <input type="text" name="photoURL" placeholder="Enter photo URL" className="input w-full" required />
                        </label>
                        <input type="submit" className="btn btn-block my-5 bg-block-btn-bg text-primary-color border-2 border-primary-color font-rancho hover:bg-primary-color hover:text-block-btn-bg hover:border-block-btn-bg" value="Update Coffee Details" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;