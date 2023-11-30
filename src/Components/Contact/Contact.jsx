import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { HiPhone} from 'react-icons/Hi';
import { MdEmail} from 'react-icons/Md';

const Contact = () => {
    return (
        <div className="bg-[url('src/assets/images/more/13.jpg')] px-5 lg:px-32 leading-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-32 pt-8 lg:pt-28 pb-6">
            <div className=''>
                <img className='w-14 py-5' src="/src/assets/images/more/logo1.png" alt="" />
                <h2 className="text-2xl font-semibold">Coffee Express</h2>
                <p className="text-sm font-sans py-4">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-3 text-4xl text-primary-color'>
                    <FaFacebookSquare></FaFacebookSquare>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    <FaLinkedin></FaLinkedin>
                </div>
                <h2 className='text-2xl font-semibold py-5'>Get in Touch</h2>
                <div>
                    <p className='flex items-center gap-2'><HiPhone></HiPhone> +880 1774 010 501 </p>
                    <p className='flex items-center gap-2'><MdEmail></MdEmail> siyammahdi1@gmail.com </p>
                    <p className='flex items-center gap-2'><FaMapMarkerAlt></FaMapMarkerAlt> 72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div>
                <h2 className='text-primary-color text-2xl font-semibold py-6'>Connect with Us</h2>
                <div className='flex flex-col gap-5 lg:w-96'>
                    <input className='px-4 hover:drop-shadow-lg duration-200 outline-gray-300' type="text" name="name" id="" placeholder='Name' />
                    <input className='px-4 hover:drop-shadow-lg duration-200 outline-gray-300' type="email" name="email" id="" placeholder='Email' />
                    <textarea className="textarea h-24 hover:drop-shadow-lg duration-200 " placeholder="Massage"></textarea>
                </div>
                <button className="btn btn-outline rounded-full border-2 border-primary-color text-primary-color my-6 hover:bg-primary-color">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;