/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";


const Home = () => {
    const [selectedCourses, setSelectedCourses] = useState([])
    const handleSelect = course => {
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