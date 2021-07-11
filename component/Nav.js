import Link from 'next/link'
import { useState } from 'react';
import style from "../styles/Nav.module.css"
import { Container } from 'react-bootstrap';

const Nav = () => {
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);

    const NavLink = [
        {href: "/", name: "Home"},
        {href: "/products", name: "products"},
        {href: "/brands", name: "Brands"},
    ]


    return (
        <>
            <header className={style.header}>
                <Container>
                    <nav className={style.navbar}>
                        <Link href='/'>
                        <a className={style.navlogo}>[BrandLogo]</a>
                        </Link>
                    <ul className={isOpen === false ? 
                            style.navmenu : style.navmenu +' '+ style.active}>
                        
                        {NavLink.map((val, index) => {
                            return(
                            <li className={style.navitem} key={val.name}>
                                <Link href={val.href} >
                                <a className={isOpen === false ? 
                                            style.navlink : style.navlink+' '+style.active}
                                            onClick={openMenu}>{val.name}</a>
                                </Link>
                            </li>
                            )
                        })}

                    </ul>
                    <button className={isOpen === false ? 
                                        style.hamburger : style.hamburger+' '+style.active}
                                        onClick={openMenu}
                                        >
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </button>
                    </nav>
                    </Container>
            </header>
        </>
    );
}

export default Nav;