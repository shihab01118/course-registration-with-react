/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'


const Home = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [newCredit, setnNewCredit] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    
    const handleSelect = course => {
        const isExist = selectedCourses.find(item => item.id === course.id);
        let totalCredit = course.credit;
        let totalPrice = course.price;
        if (isExist) {
            return Swal.fire({
                title: 'Oops...',
                text: "You've already selected this course."   
              })
        }
        else {
            selectedCourses.forEach(course => totalCredit += course.credit);
            selectedCourses.forEach(course => totalPrice += course.price);
            if (totalCredit > 20) {
                return Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: "You can't add more than 20 credits."   
                  })
            }
            setnNewCredit(totalCredit);
            setNewPrice(totalPrice);
            setSelectedCourses([...selectedCourses, course])
        }
    }
    return (
        <div className="flex gap-5 container mx-auto">
            <Cards handleSelect={handleSelect}></Cards>
            <Cart selectedCourses={selectedCourses} newCredit={newCredit} newPrice={newPrice}></Cart>
        </div>
    );
};

export default Home;