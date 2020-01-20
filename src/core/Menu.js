import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path) 
        return { color: 'blue'}
            else return { color: '#2b2b2b'};
}

const Menu = ({ history }) => (
    <nav className="flex justify-between w-100 bb b--light-gray border-box pa3 ph5-ns">
        <Link exact="true" to="/" className="digestive link dim mid-gray f6 fw3" style={isActive(history, "/")}>WHAIR</Link>
        <Link exact="true" to="/directory" className="link dim mid-gray f6 fw3" style={isActive(history, "/directory")}>Directory</Link>

        
        {!isAuthenticated() && (
            <React.Fragment>
                <Link to="/signin" className="link  dim mid-gray f6 fw3" style={isActive(history, "/signin")} >Sign in</Link>
                <Link to="/signup" className="link dim mid-gray f6 fw3" style={isActive(history, "/signup")}>Sign up</Link>
            </React.Fragment>
        )}
        
        {isAuthenticated() && ( 
            <React.Fragment>
                <Link 
                    to={`/user/${isAuthenticated().user._id}`}
                    className="link dim mid-gray f6 fw3 mh3 ttc">
                        Profile
                </Link>
                <span className="link dim mid-gray f6 fw3" onClick={() => signout(() => history.push('/'))} >Sign out</span>
            </React.Fragment>
        )}


    </nav>
)


export default withRouter(Menu)