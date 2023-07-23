
import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <nav className="rounded-lg bg-[#D8BFD8]">
            <header className="bg-blue-500">
                <header className="relative px-4 py-4 flex justify-between items-center bg-white">
                    <a className="font-bold leading-none bg-[white] flex pl-7 items-center rounded-lg p-1" href="#">
                        <img src={logo} alt="" className="w-[70%] h-[50%]"/>
                    </a>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <li><a className="text-base font-bold" href="#">Home</a></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><a className="text-base  hover:text-[gray]" href="#">About Us</a></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><a className="text-base text-gray-400 hover:text-gray-500 hover:text-[gray]" href="#">Services</a></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><a className="text-base text-gray-400 hover:text-gray-500  hover:text-[gray]" href="#">Contact</a></li>
                    </ul>
                    <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 border bg-[skyblue] bg-gray-50 hover:bg-[gray] text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
                    <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-[gray] border bg-[skyblue] text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
                </header>
            </header>
        </nav>
    )
}

export default Navbar