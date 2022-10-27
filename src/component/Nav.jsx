import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;   
    height:80px;
    width: 100vw;
    display:flex;
    justify-content:flex-start;;
    padding:0.5rem calc((100vw-1000px)/2);
    z-index:10;
    position: relative;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    &.active{
        color: #fc4415;
    }
    &:hover {
        transition: all 0.2s ease-in-out;
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
export const NavBtnLink = styled.button`
    border-radius:4px;
    padding:10px 22px;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    background: none;
`
export const Boton = styled.button`
    width: 35px;
    height: 35px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3,3,3,0,9), inset 0 --3em 3em rgba(3,3,3,0,5);
    transform: translate(0,-50%);
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        
    }
`