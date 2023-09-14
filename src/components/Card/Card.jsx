/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Card = ({course, handleSelect}) => {
    const {cover_img, title, credit, details, price} = course;
    return (
        <div>
            <div className="bg-base-100 shadow-2xl p-4 rounded-xl">
                <figure><img src={cover_img} alt="thumbnail" className="rounded-xl h-[144px] w-full mb-3" /></figure>
                <div className="">
                    <h2 className="font-semibold text-lg h-12">{title}</h2>
                    <p className="text-sm mt-2 h-[60px] text-justify text-gray-600">{details}</p>
                    <div className="flex justify-between font-medium mt-2 mb-3">
                        <p>Price: $ {price}</p>
                        <p>Credit: {credit} hr</p>
                    </div>
                    <button onClick={() => handleSelect(course)} className="btn btn-sm bg-[#2F80ED] text-white w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;