import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { Redirect, Link } from 'react-router-dom'
import {read} from './apiUser'
import DeleteUser from './DeleteUser'
import defaultProfileImage from '../images/default-user-image.jpg'



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
            <div className="container pa5">
            <div className="w-100 mb3 flex justify-center-m">
                <img src={photoUrl} alt={user.name} className="w4 h4 br-100"  onError={i => (i.target.src = `${defaultProfileImage}`)}/>
            </div>
                <div className="flex flex-wrap w-40-ns w-100-m items-center justify-between">
                    
                    <div className="tc-m w-100-m">
                        <h2 className="fw3 f2 mid-gray mv0 ttc ">{user.name}</h2>
                        <h2 className="fw3 f2 light-silver mv0">{user.currentSalonName}</h2>
                    </div>
                    <div className="pl2 pr0  flex justify-center mt3-m tc-m w-100-m">
                        {isAuthenticated().user && isAuthenticated().user._id === user._id && (
                            <React.Fragment>
                                <Link 
                                    to={`/user/edit/${user._id}`}
                                    className="link  fw3 mh1 dib f6 hover-mid-gray light-silver mb2">Edit</Link>
                                <DeleteUser userId={user._id} />
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="flex mt4">
                    <div className="w-40 w-100-m pv3">
                        <h2 className="fw3 f6 bt b--light-gray pv1 ma0 mid-gray">Phone: {user.contactPhone}</h2>
                        <h2 className="fw3 f6 bt b--light-gray pv1 ma0 mid-gray">Email: {user.email}</h2>
                        <h2 className="fw3 f6 bt b--light-gray pv1 ma0 mid-gray">Instagram: @{user.contactInsta}</h2>
                        <h2 className="fw3 f6 bt b--light-gray pv1 ma0 mid-gray">{user.about}</h2>
                        <h2 className="fw3 f6 bt b--light-gray pv1 ma0 mid-gray">
                            {`Joined ${new Date(user.created).toDateString()}`}
                        </h2>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Profile