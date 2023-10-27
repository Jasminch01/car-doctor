import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    console.log(services)
    return (
        <div>
            
        </div>
    );
};

export default Services;