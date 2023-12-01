import { useEffect, useState } from "react";
import Coffee from "./Coffee";


const Coffees = () => {

    const [coffees, setCoffees] = useState([]);


    useEffect(() => {
        fetch('https://coffee-express-server-ecru.vercel.app/coffee')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
            }
        </div>
    );
};

export default Coffees;