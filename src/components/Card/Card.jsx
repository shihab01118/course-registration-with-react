/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Card = ({course}) => {
    const {cover_img, title, credit, details, price} = course;
    return (
        <div>
            <div className="base-100 shadow-2xl p-4 rounded-xl">
                <figure><img src={cover_img} alt="thumbnail" className="rounded-xl h-[144px] w-full mb-4" /></figure>
                <div className="">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p className="text-sm">{details}</p>
                    <div className="flex justify-between font-medium mt-1 mb-2">
                        <p>Price: {price}</p>
                        <p>Credit: {credit} hr</p>
                    </div>
                    <button className="btn btn-sm btn-primary w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;