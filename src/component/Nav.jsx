import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;   
    height:80px;
    display:flex;
    justify-content:flex-start;;
    padding:0.5rem calc((100vw-1000px)/2);
    z-index:10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        color: #fc4415;
    }
`
export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;
    width: 100vw;
    white-space: nowrap;
    
`
export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;
    justify-content: flex-end;
    width: 100vw;
    
`
export const NavBtnLink = styled(Link)`
    border-radius:4px;
    padding:10px 22px;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
`