import React from "react";
import hs from "./Header.module.css"

const Header = () => {
    return (
        <header className={hs.header}>
            <img
                src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
                alt=""
            />
        </header>
    );
};

export default Header;