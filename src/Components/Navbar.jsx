import { useState } from 'react';
import PauinLogo from "../img/pauinLogo.png";



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`fixed py-16 top-0 left-0 w-full z-50 bg-blue-700 ${menuOpen ? 'shadow-md' : 'md:shadow-none'}`}>
            <div className="flex items-center justify-between p-4">
                <div className="flex justify-center items-center ">
                    <img data-aos="fade-right" data-aos-duration="3000" src={PauinLogo} alt="Logo" className=" h-32 w-32 mr-2 rounded-full" />
                    <span data-aos="zoom-im" data-aos-duration="3000" className="text-white font-semibold p-4 text-2xl">Pauin Tech Development</span>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-red-600 focus:outline-none" onClick={toggleMenu}>
                        {/* Coloca tu botón de menú aquí */}
                    </button>
                </div>
                {/* Coloca tu lista de enlaces aquí */}
            </div>
        </div>
    );
}

export default Navbar;
