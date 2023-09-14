/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourses}) => {
    let count = 0;
    return (
        <div className="w-1/4 p-4 bg-base-100 h-fit shadow-2xl rounded-xl">
            <h1 className="text-xl font-bold text-[#2F80ED]">Remaining Course Credit: </h1>
            <hr className="my-4" />
            <div>
                <h1 className="text-xl font-bold">Course Name</h1>
                {
                    selectedCourses.map((course, idx) => <p key={idx}>{++count}. {course.title}</p>)
                }
            </div>
            <hr className="mt-6 mb-4"/>
            <h3 className="font-medium">Total Credit Hour: </h3>
            <hr className="my-4" />
            <h3 className="font-semibold">Total Price: </h3>
        </div>
    );
};

export default Cart;