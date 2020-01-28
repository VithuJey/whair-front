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
        console.log(this.state.users)
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
            <div className="w-100 pa5" style={{background: "#F4F4F4"}}>
                <h1 className="fw2 dark-gray mb4 tc-m">People <span className="black-10">—</span> {users.length}</h1>
                <div className="flex justify-center-m flex-wrap">
                    { users.map((user, i) => (
                        <UserItem 
                            name={user.name} 
                            imageUrl={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}
                            key={i} 
                            profile={user._id}
                            alt={user.name}
                            date={new Date(user.created).toDateString()}
                            currentSalonName={user.currentSalonName}
                        />
                        
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default Users