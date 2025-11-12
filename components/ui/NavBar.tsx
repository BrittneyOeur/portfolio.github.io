import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white py-4 px-6 flex justify-between items-center z-50 border-b-2">
            <a href="/"><p className="font-bold text-second">B.</p></a>
            <ul className="flex gap-6">
                <li>
                    <a href="/" className="text-black hover:text-second duration-75 ease-in-out">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="./about" className="text-black hover:text-second duration-75 ease-in-out">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="/Brittney Oeur, Resume (2025).pdf" target="_blank" className="text-black hover:text-second duration-75 ease-in-out">
                        RESUME
                    </a>
                </li>
            </ul>
            <ul className="flex gap-6 items-center">
                <li>
                    <a href="mailto:oeur.brittney@gmail.com"><img src="/email.svg" width="18" height="18" className="bg-white"/></a>
                </li>
                <li>
                    <a href="https://github.com/BrittneyOeur" target="_blank"><img src="/github.svg" width="18" height="18" className="bg-white"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brittney-oeur/" target="_blank"><img src="/linkedin.svg" width="23" height="23" className="bg-white"/></a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;