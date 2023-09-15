/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Cart = ({selectedCourses, newCredit, newPrice, newremainingCredit}) => {
    let count = 0;
    return (
        <div className="w-1/4 p-4 bg-base-100 h-fit shadow-2xl rounded-xl">
            <h1 className="text-xl font-bold text-[#2F80ED]">Remaining Credit: {newremainingCredit} hr</h1>
            <hr className="my-4" />
            <div>
                <h1 className="text-xl font-bold mb-2">Course Name</h1>
                <p id="command" className="text-gray-600">Please select your course</p>
                {
                    selectedCourses.map((course, idx) => <p className="leading-8 text-gray-600" key={idx}>{++count}. {course.title}</p>)
                }
            </div>
            <hr className="mt-6 mb-4"/>
            <h3 className="font-medium">Total Credit Hour: {newCredit} hr</h3>
            <hr className="my-4" />
            <h3 className="font-semibold">Total Price: {newPrice} USD</h3>
        </div>
    );
};

export default Cart;