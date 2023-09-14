import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";


const Home = () => {
    return (
        <div className="flex gap-5 container mx-auto">
            <Cards></Cards>
            <Cart></Cart>
        </div>
    );
};

export default Home;