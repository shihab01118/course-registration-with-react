/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'


const Home = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    
    const handleSelect = course => {
        const isExist = selectedCourses.find(item => item.id === course.id);
        if (isExist) {
            return Swal.fire({
                title: 'Oops...',
                text: "You've already selected this course."   
              })
        }
        setSelectedCourses([...selectedCourses, course])
    }
    return (
        <div className="flex gap-5 container mx-auto">
            <Cards handleSelect={handleSelect}></Cards>
            <Cart selectedCourses={selectedCourses}></Cart>
        </div>
    );
};

export default Home;