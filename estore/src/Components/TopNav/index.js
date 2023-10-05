import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './_top-nav.scss';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState } from 'react';



const TopNav = ()=>{
    const cartItemCount = useSelector(state=>state.cr.totalItems);
    const [userDetail, setUserDetails] = useState();

    const successHandler = ()=>{

    }

    return(
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                <div className='brand my-1'>
                    <h1> eStore </h1>
                </div>
                <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
                    <div className='dropdown m-0 p-0'>
                    <select className='select-btn w-100 p-0 m-0'>
                        <option> Men </option>
                        <option> Women </option>
                        <option> Kids </option>
                    </select>
                    </div>
                    <input className='form-control ' placeholder='Search...'/>
                    <button> <i className='fa fa-search'/> </button>
                </div>
                <div className='login-container p-0'>
                    <i className='fa fa-user-circle user-icon'/>
                    <GoogleOAuthProvider clientId='578972643297-losiubloo15rafgrq1r05l0abdfpb453.apps.googleusercontent.com'>
                    <GoogleLogin className="login"
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
/>
                    </GoogleOAuthProvider>
                </div>
                <div className='cart-wishlist'>
                    <ul className='p-0'>
                        <li className='list-icon'> <i className='fa fa-heart'/></li>
                        <Link to="/cart">
                            <li className='list-icon'>
                                <i className='fa fa-shopping-cart'/>
                                {
                                    cartItemCount!==0 ?
                                        <div id='cart-item-count'>
                                            <p> {cartItemCount} </p>
                                        </div>
                                    : <></>
                                }
                            </li>
                        </Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;