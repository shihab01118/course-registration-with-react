/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";


const Cards = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fake_data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="w-3/4 grid grid-cols-3 gap-5">
            {
                courses.map((course, idx) => <Card key={idx} course={course} handleSelect={handleSelect}></Card>)
            }
        </div>
    );
};

export default Cards;