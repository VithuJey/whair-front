import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path) 
        return { color: 'black'}
            else return { color: '#aaaaaa'};
}

const Menu = ({ history }) => (
    <div className="flex items-start justify-between bg-white w-100 bb b--light-gray border-box pv3 ph5-ns">
        <Link exact="true" to="/" className="link dim mid-gray tracked f6 fw2 pb1" style={{color: "black"}}>WHAIR</Link>
        <nav className="flex">
            <Link exact="true" to="/directory" className="ph3 link dim mid-gray f6 fw3" style={isActive(history, "/directory")}>Directory</Link>
            {!isAuthenticated() && (
                <React.Fragment>
                    <Link to="/signin" className="link  dim mid-gray f6 fw3 ph3" style={isActive(history, "/signin")} >Sign in</Link>
                    <Link to="/signup" className="link dim mid-gray f6 fw3" style={isActive(history, "/signup")}>Sign up</Link>
                </React.Fragment>
            )}
            {isAuthenticated() && ( 
                <React.Fragment>
                    <Link 
                        to={`/user/${isAuthenticated().user._id}`} style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                        className="link dim mid-gray f6 fw3 mr3 ">
                            My profile
                    </Link>
                    <span className="link dim mid-gray f6 fw3" onClick={() => signout(() => history.push('/'))} >Sign out</span>
                </React.Fragment>
            )}
        </nav>
    </div>
)


export default withRouter(Menu)