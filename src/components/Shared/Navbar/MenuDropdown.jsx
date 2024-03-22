import { Link } from "react-router-dom";

const MenuDropdown = () => {
    return (
        <div className="text-teal-300 text-sm md:text-md lg:text-lg flex gap-2 md:ml-24 md:gap-5 font-serif">
            <Link className="hover:text-white hidden md:block duration-200">New Order</Link>
            <Link className="hover:text-white hidden md:block duration-200">Order</Link>
            <Link className="hover:text-white hidden md:block duration-200">Services</Link>
            <Link className="hover:text-white hidden md:block duration-200">Add Funds</Link>
            <Link className="hover:text-white hidden md:block duration-200">Ticket</Link>
        </div>
    );
};

export default MenuDropdown;