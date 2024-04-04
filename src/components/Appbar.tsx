import { useState } from "react";
import logo from '../assets/logo.svg'
function Appbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className="border-b border-black/20 h-20 flex justify-between px-8 items-center">
      <div className="flex items-center">
        <div>
          <img src={logo} alt="logo image" className="w-8" />
        </div>
        <div className="hidden lg:flex text-[#002e87] space-x-16 ml-16 items-center">
          <div className="cursor-pointer">Personel</div>
          <div className="cursor-pointer">Business</div>
          <div className="cursor-pointer">Developer</div>
          <div className="cursor-pointer">Help</div>
        </div>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-4xl focus:outline-none">
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg px-10 py-6 text-center ">
            <div className="text-[#002e87] text-lg cursor-pointer mb-4">
              Personel
            </div>
            <div className="text-[#002e87] text-lg cursor-pointer mb-4">
              Business
            </div>
            <div className="text-[#002e87] text-lg cursor-pointer mb-4">
              Developer
            </div>
            <div className="text-[#002e87] text-lg cursor-pointer mb-4">
              Help
            </div>
            <div className="flex justify-center mt-6">
              <button className="text-lg border-2 border-[#002e87] px-7 py-2 rounded-3xl text-[#002e87] cursor-pointer mr-4">
                Log In
              </button>
              <button className="text-lg bg-[#002e87] px-7 py-2 rounded-3xl text-white cursor-pointer">
                Sign Up
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className=" text-red-500 text-lg cursor-pointer mt-4 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="hidden lg:flex space-x-4">
        <div className="text-lg border-2 border-[#002e87] px-7 py-2 rounded-3xl text-[#002e87] cursor-pointer">
          Log In
        </div>
        <div className="text-lg bg-[#002e87] px-7 py-2 rounded-3xl text-white cursor-pointer">
          Sign Up
        </div>
      </div>
    </div>
  )
}

export default Appbar
