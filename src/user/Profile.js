import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { Redirect, Link } from 'react-router-dom'
import {read} from './apiUser'
import DeleteUser from './DeleteUser'
import defaultProfileImage from '../images/default-user-image.png'

 class Profile extends Component {
    constructor(){
        super()
        this.state = {
            user: "",
            redirectToSignIn: false
        }
    }
    init = (userId) => {
        const token = isAuthenticated().token
        read(userId, token)
        .then(data => {
            if(data.error){
                this.setState({
                    redirectToSignIn: true
                })
            } else {
                
                this.setState({
                    user: data
                    
                })
            }
        })
    }
    
    componentDidMount(){
        const userId = this.props.match.params.userId
        this.init(userId)        
    }
    componentWillReceiveProps(props){
        const userId = props.match.params.userId
        this.init(userId)
    }

    render() {
        const {redirectToSignIn, user} = this.state
        if(redirectToSignIn) return <Redirect to="/signin"/>


        const photoUrl = user._id
            ? `${process.env.REACT_APP_API_URL}/user/photo/${user._id}?${new Date().getTime()}` 
            : defaultProfileImage
        return (
            <div className="container pa5 bg-near-white flex flex-wrap">
                <div className="form w-40-ns w-100-m pa5 bg-white br1">
                    <div className="w-100 mb3 flex justify-center-m">
                        <img src={photoUrl} alt={user.name} className="w4 h4 br-100"  onError={i => (i.target.src = `${defaultProfileImage}`)}/>
                    </div>
                    <div className="flex flex-wrap w-100-ns w-100-m items-center justify-between">
                        <div className="tc-m w-100-m">
                            <h2 className="fw3 f2 f3-m black-80 mv0 ttc ">{user.name}</h2>
                            <h2 className="fw3 f2 f3-m light-silver mv0">{user.currentSalonName}</h2>
                        </div>
                        <div className="pl2 pr0 flex align-center justify-center mt3-m tc-m w-100-m">
                            {isAuthenticated().user && isAuthenticated().user._id === user._id && (
                                <React.Fragment>
                                    <Link 
                                        to={`/user/edit/${user._id}`}
                                        className="link  fw3 mh1 dib f6 hover-gray light-silver mb2">Edit</Link>
                                    <DeleteUser userId={user._id} />
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    <div className="flex mt4">
                        <div className="w-100-ns w-100-m pv3">
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">Phone: </span>{user.contactPhone}</h2>
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">Email: </span>{user.email}</h2>
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">Instagram: </span>@{user.contactInsta}</h2>
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">Currently at: </span>{user.currentSalonName}</h2>
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">About: </span>{user.about}</h2>
                            <h2 className="fw3 f6 bt b--light-gray pv1 ma0 gray"><span className="black-80">Joined Whair: </span> {new Date(user.created).toDateString()}</h2>
                        </div>
                    </div>
                </div>
                <div className="w-60 flex justify-center items-center">
                    <div className="measure">
                    <h1 className="fw3">Hello</h1>
                        <p className="lh-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile