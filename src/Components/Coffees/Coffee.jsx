import PropTypes from 'prop-types'
import { AiFillEye } from 'react-icons/Ai';
import { HiPencil } from 'react-icons/Hi';
import { MdDelete } from 'react-icons/Md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee }) => {

    const { _id, name, chef, supplier, photoURL } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-express-server-ecru.vercel.app/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted successfully.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className='bg-black bg-opacity-10 p-5 rounded-lg flex flex-col lg:flex-row items-center justify-between'>
            <img className='w-32' src={photoURL} alt="nai" />
            <div className='text-left font-semibold'>
                <p>Name: <span className='font-normal'>{name}</span></p>
                <p>Chef; <span className='font-normal'>{chef}</span></p>
                <p>Supplier: <span className='font-normal'>{supplier}</span></p>
            </div>
            <div className='flex flex-row lg:flex-col justify-center gap-2 lg:space-y-2 my-4 lg:my-0 lg:mr-6'>
                <Link to={`coffeeDetails/${_id}`}>
                    <button className='btn text-2xl bg-btn-bg text-white border-none hover:bg-slate-400'><AiFillEye></AiFillEye></button>
                </Link>
                <Link to={`updateCoffee/${_id}`}>
                    <button className='btn text-2xl bg-edit-btn text-white border-none hover:bg-slate-400'><HiPencil></HiPencil></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className='btn text-2xl bg-dlt-btn text-white border-none hover:bg-slate-400'><MdDelete></MdDelete></button>
            </div>

        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object,

}

export default Coffee;