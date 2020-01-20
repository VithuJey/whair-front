import React, { Component } from 'react'
import { signup } from '../auth'
import {Redirect} from 'react-router-dom'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
             name: "",
             email: "",
             password: "",
             error: "",
             open: false        }
    }
    handleChange = (input) => (event) => {
        this.setState({error: ""})
        this.setState({ [input]: event.target.value})
    }
    clickSubmit = event => {
        event.preventDefault()
        const {name, email, password} = this.state
        const user = {
            name,
            email,
            password
        }
        console.log(user)
        signup(user)
            .then(data => {
                if(data.error) this.setState({error: data.error })
                    else this.setState({
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        open: true
                    })
                    
            })
    }
    
    
    render() {
        const {name, email, password, error, open} = this.state

        // Redirect to Signin on successful sign up
        if(open){
            return <Redirect to={`/signin`}/>
        }
        return (
            <div className="container flex w-100 items-center justify-start">
                <div className="form pa4 ma5 ba b--light-gray h-40" style={{width: "360px"}}>
                <h1 className="fw3 mt2 mb4 dark-gray">Sign up</h1>
                <form>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Name</label>
                        <input 
                            onChange={this.handleChange("name")} 
                            type="text" 
                            value={name}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100"
                        />
                        
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Email</label>
                        <input 
                            onChange={this.handleChange("email")} 
                            type="email"
                            value={email}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                        
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Password</label>
                        <input 
                            onChange={this.handleChange("password")} 
                            type="password" 
                            value={password}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <span onClick={this.clickSubmit} className="link ba b--moon-gray mid-gray ph3 pv2 mt2 mb4 dib">Submit</span>
                </form>
                <div className="f6 alert dark-red" style={{display: error ? '' : 'none'}}>{error}</div>
                <div className="alert green" style={{display: open ? '' : 'none'}}>Congrats</div>
            </div>
            </div>
        )
    }
}
