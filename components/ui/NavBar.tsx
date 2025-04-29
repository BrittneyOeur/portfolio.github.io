import React from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white py-4 px-6 flex justify-between items-center z-50 border-b-2">
            <a href="/"><img src="/star-icon.png" width="25" height="25"/></a>
            {/*<h1 className="text-lg font-bold"><a href="/" className="text-black hover:text-orange duration-100 ease-in-out">Brittney Oeur</a></h1>*/}
            <ul className="flex gap-6">
                <li>
                    <a href="/" className="text-black hover:text-orange duration-75 ease-in-out">
                        home
                    </a>
                </li>
                <li>
                    <a href="./about" className="text-black hover:text-orange duration-75 ease-in-out">
                        about
                    </a>
                </li>
                <li>
                    <a href="/Brittney Oeur, Resume (2025).pdf" target="_blank" className="text-black hover:text-orange duration-75 ease-in-out">
                        resume
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