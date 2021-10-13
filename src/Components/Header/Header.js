import React from 'react'
import logo from '../../image/nl-logo.svg'
import search from '../../image/Search.svg'
import support from '../../image/support.svg'
import user from '../../image/user.svg'
import shoping from '../../image/shoping.svg'
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    let cotegory_item = [
        {item:"Мужское",
         path:"/menPage"
        },
        {item:"Женское",
         path:"/womenPage"
        },
        {item:"Детское",
         path:"/kidPage"
        },
        {item:"Custom Polo",
         path:"/customPage"
        },
        {item:"Le Club",
         path:"/clubPage"
        },
        {item:"Lacoste Inside",
         path:"/brandPage"
        },
    ]
    return (
        <div className="header">
            <ul className="category">
                <div className="header_logo">
                    <NavLink to="/">
                    <img src={logo} alt="" />
                    </NavLink>
                </div>
                {
                    cotegory_item.map((el)=>{
                        return(
                            <li className="category_item"><NavLink to={el.path}>{el.item}</NavLink></li>
                        )
                    })
                }
                <li>
                    <NavLink to="/search"><img src={search} alt="" /></NavLink>
                </li>
                        <ol className="category_ol">
                            <li>
                            <NavLink to="/supportPage"><img src={support} alt="" /></NavLink>
                            </li>
                            <li>
                            <NavLink to="/userPage"><img src={user} alt="" /></NavLink>
                            </li>
                            <li>
                            <NavLink to="/shopingPage"><img src={shoping} alt="" /></NavLink>
                            </li>
                        </ol>
            </ul>
        </div>
    )
}

export default Header
