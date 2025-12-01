import React from 'react';
import Navbar from './Navbar';

const Layout = ({ theme, setTheme, Toggletheme, children }) => {
    return (
        <div className={`flex w-screen h-screen justify-evenly ${theme ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`w-[20%] h-screen flex flex-col justify-start ${theme ? 'bg-gray-950' : 'bg-white'}`}>
                <Navbar theme={theme} settheme={setTheme} Toggletheme={Toggletheme} />
            </div>
            <div className={`w-[80%] min-h-screen flex flex-col justify-start border border-gray-500 ${theme ? 'text-white' : 'text-black'}`}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
