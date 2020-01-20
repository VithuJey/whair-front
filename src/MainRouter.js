import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Profile from './user/Profile'
import Menu from './core/Menu'
// import Footer from './core/Footer'
import Users from './user/Users'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'
import ForgotPassword from "./user/ForgotPassword"
import ResetPassword from "./user/ResetPassword"


const MainRouter = () => (
    <div className="flex flex-column w-100">
    <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword}/>
            <Route exact path="/directory" component={Users} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
             {/* Remove Private route */}
            <Route exact path="/user/edit/:userId" component={EditProfile} />
            <Route exact path="/user/:userId" component={Profile} />
        </Switch>
        {/* <Footer/> */}
    </div>
)

export default MainRouter