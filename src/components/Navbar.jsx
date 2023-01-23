import Data from '../Data.json';
import "../style/navbar.css"
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
// import Logo from "../image/site_;ogo.png";
const Navbar = () => {
    const [current, setCurrent] = useState(true);
    const checkSearchInput = () => {
        const check = !current;
        setCurrent(check);
    }
    return (

        <nav className='navbar'>
            <div className='header-outer-container'>
                <div id='logo-div'>
                    <img src={require('../image/site_logo.png')} alt="Site Logo" />
                </div>
                {
                    current &&
                    <div className='header-list'>
                        <nav>
                            {
                                Data.header.map((item, index) => {
                                    return <a key={index} href="https://web.dev/" alt="websit-link">{item}</a>
                                })
                            }
                        </nav>
                    </div>
                }
                {
                    current &&
                    <div className='search' onClick={checkSearchInput}>
                        <BiSearch id="search-icon" />
                    </div>
                }
                {
                    !current &&
                    <input type="text" autoFocus onBlur={checkSearchInput} className="input-bar"
                    />
                }
            </div>
        </nav>
    )
};

export default Navbar;