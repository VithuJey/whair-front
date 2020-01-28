import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signin, authenticate } from '../auth'
import SocialLogin from "./SocialLogin";

export default class Signin extends Component {
    constructor() {
        super()
    
        this.state = {
             email: "",
             password: "",
             error: "",
             redirectToReferer: false,
             loading: false
        }
    }
    
    handleChange = (input) => (event) => {
        this.setState({error: ""})
        this.setState({ [input]: event.target.value})
    }

    clickSubmit = event => {
        event.preventDefault()
        this.setState({ loading: true})
        const { email, password } = this.state
        const user = {
            email,
            password
        }
        // console.log(user)
        signin(user)
            .then(data => {
                if(data.error) this.setState({error: data.error, loading: false })
                     else {
                        authenticate(data, () => {
                            this.setState({ redirectToReferer: true })
                        })
                    }                    
            })
        }

    render() {
        const {email, password, error, loading, redirectToReferer} = this.state

        if(redirectToReferer){
            return <Redirect to={`/`}/>
        }
        return (
            <div className="container flex flex-wrap" >
                <div className="ba br1 b--light-gray pa4 ma5" style={{width: "360px"}}>
                <h1 className="fw3 mt2 mb4 dark-gray ">Sign in</h1>
                <form>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 db mb2 mid-gray">Email</label>
                        <input 
                            onChange={this.handleChange("email")} 
                            type="email"
                            value={email}
                            className="input-reset br1 ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 db mb2 mid-gray">Password</label>
                        <input 
                            onChange={this.handleChange("password")} 
                            type="password" 
                            value={password}
                            className="input-reset br1 ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    
                    <span onClick={this.clickSubmit} className="br1 link ba b--moon-gray mid-gray ph3 pv2 mt2 mb4 dib">Sign in</span>
                    <Link to="/forgot-password" className="ml4 link moon-gray">{" "}Forgot password</Link>
                    <SocialLogin />
                </form>
                
                <div className="f6 alert dark-red" style={{display: error ? '' : 'none'}}>{error}</div>
                {loading ? <div> <h2 className="f6 alert dark-green">Loading</h2></div> : ""}
                </div>
                <div className="measure mh5 mt5">
                    <h1 className="f5 fw3">Why?</h1>
                    <p className="fw3 mt0 silver lh-copy">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min.
                    </p>
                    <p className="fw3 silver lh-copy">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min.
                    </p>
                    
                </div>
                
            </div>
        )
    }
}
