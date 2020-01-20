import React, { Component } from 'react'
import {list} from './apiUser'
import UserItem from './components/UserItem'
import defaultProfileImage from '../images/default-user-image.jpg'

class Users extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        list().then(data => {
            if(data.error){
                console.log(data.error) 
            } else{
                this.setState({
                    users: data
                    
                })
                console.log(data)
            }
        })
    }
    render() {
        const {users} = this.state
        return (
            <div className="w-100 pa5">
                <h1 className="fw3 dark-gray mb5">Directory</h1>
                <div className="flex flex-wrap">
                    { users.map((user, i) => (
                        <UserItem 
                            name={user.name} 
                            imageUrl={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}
                            key={i} 
                            profile={user._id}
                            alt={user.name}
                            date={user.currentSalonName}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users