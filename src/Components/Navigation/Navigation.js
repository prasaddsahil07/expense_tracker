import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { NavLink } from 'react-router-dom'

function Navigation() {
    
    return (
            <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>           
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                <li>
                    <NavLink 
                    to="/"
                    activeClassName= "active">
                            Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/history"
                    activeClassName= "active">
                            View Transactions
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/income"
                    activeClassName= "active">
                            Incomes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/expenses"
                    activeClassName= "active">
                            Expenses
                    </NavLink>
                </li>
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
            </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 320px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
    
        li {
            display: grid;
            grid-template-columns: 400px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 600; /* Increased font weight */
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            color: rgba(34, 34, 96, 0.8); /* Adjusted color */
            padding-left: 1rem;
            position: relative;
    
            /* Removed underline from anchor elements */
            a {
                text-decoration: none;
            }
    
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 3.4rem;
                transition: all 0.3s ease-in-out;
            }
    
            /* Added hover effect */
            &:hover {
                background-color: rgba(34, 34, 96, 0.1); /* Example background color */
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
        font-weight: 600; /* Increased font weight for active item */
        font-size: 1.8rem; /* Increased font size for active item */
        opacity: 1; /* Full opacity for active item */

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav{
        li{
            background-color: rgba(0, 0, 128, 0.75); 
            color: #ffffff;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;

            &:hover {
                background-color: #cc0000; /* Example hover background color */
            }
        }
    }
`;

export default Navigation