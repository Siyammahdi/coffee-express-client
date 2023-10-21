import { useEffect, useState } from "react";
import Coffee from "./Coffee";


const Coffees = () => {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])

    const {_id} = coffees

    

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
            }
        </div>
    );
};

export default Coffees;