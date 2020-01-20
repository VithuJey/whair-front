import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import { remove } from './apiUser'
import { signout} from '../auth'
import { Redirect } from 'react-router-dom'

export default class DeleteUser extends Component {
    state = {
        redirect: false
    }
    
    deleteAccount = () => {
        const token = isAuthenticated().token
        const userId = this.props.userId
        remove(userId, token)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                // signout user
                signout(() => console.log('user is deleted'))
                // redirect
                this.setState({
                    redirect: true
                })
            }
        })
    }
    
    deleteConfirm = () => {
        let answer = window.confirm("Are you sure you want to delete your account?")
        if(answer){
            this.deleteAccount()
        }
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        return (
            <React.Fragment>
                <Link onClick={this.deleteConfirm} to={'#'} className="link mh1 fw3 dib f6 hover-red light-silver mb2">Delete</Link>
            </React.Fragment>
        )
    }
}
