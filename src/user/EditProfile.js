import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { read, update, updateUser } from './apiUser'
import {Redirect} from 'react-router-dom'
import defaultProfileImage from '../images/default-user-image.jpg'



export default class EditProfile extends Component {
    constructor(){
        super()
        this.state = {
            id: "",
            name: "",
            email : "",
            photo: "",
            currentSalonName : "",
            currentSalonDateStart : "", 
            contactInsta : "",
            contactPhone : "",
            redirectToProfile: false,
            error: ""
        }
    }
    init = (userId) => {
        const token = isAuthenticated().token
        read(userId, token)
        .then(data => {
            if(data.error){
                this.setState({
                    redirectToProfile: true
                })
            } else {
                this.setState({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    contactInsta: data.contactInsta,
                    contactPhone: data.contactPhone,
                    currentSalonName: data.currentSalonName,
                    currentSalonDateStart: data.currentSalonDateStart,
                    error: '',
                    fileSize: '',
                    loading: false
                })
            }
        })
    }
    componentDidMount(){
        this.userData = new FormData()
        const userId = this.props.match.params.userId
        this.init(userId)
    }    
    isValid = () => {
        const { name, email, fileSize } = this.state
        if(fileSize > 100000){
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            })
            return false
        }
        if(name.length === 0){
            this.setState({
                error: "Name is required",
                loading: false
            })
            return false
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({
              error: "A valid email is required",
              loading: false
            });
            return false;
          }
        return true
    }
    handleChange = (input) => (event) => {
        this.setState({error: ""})
        const value = input === 'photo' ? event.target.files[0] : event.target.value

        const fileSize = input === 'photo' ? event.target.files[0].size : 0;
        this.userData.set(input, value)
        this.setState({ [input]: value, fileSize})

    }
    clickSubmit = event => {
        event.preventDefault()
        this.setState({loading: true})
            
        if(this.isValid()){  
        
        const userId = this.props.match.params.userId
        const token = isAuthenticated().token

        update(userId, token, this.userData)
            .then(data => {
                if(data.error) this.setState({error: data.error })
                    else 
                    updateUser(data, () => {
                        this.setState({
                            redirectToProfile: true
                        })
                    })
                    
              })
        }
    }

    render() {
        const {
                id,
                error, 
                name, 
                email,
                about,
                currentSalonName, 
                currentSalonDateStart,  
                contactInsta, 
                contactPhone, 
                redirectToProfile, 
                loading 
            } = this.state

        if(redirectToProfile){
            return <Redirect to={`/user/${id}`} />
        }

        const photoUrl = id 
            ? `${process.env.REACT_APP_API_URL}/user/photo/${id}?${new Date().getTime()}` 
            : defaultProfileImage

        return (
            <div className="container flex w-100 items-center justify-start">
                <div className="form pa4 ma5 h-40" style={{width: "360px"}}>
                <h1 className="fw3 mt2 mb4 dark-gray">Edit profile</h1>
                <div className="f6 alert dark-red" style={{display: error ? '' : 'none'}}>{error}</div>
                {loading ? <div> <h2 className="f6 alert dark-green">Loading</h2></div> : ""}
                <img src={photoUrl} alt={name} onError={i => (i.target.src = `${defaultProfileImage}`)}/>
                <form>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Profile photo</label>
                        <input 
                            onChange={this.handleChange("photo")} 
                            type="file"
                            accept="image/*" 
                            className="input-reset ba b--light-gray pa2 mb2 db w-100"
                        />
                    </div>
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
                        <label className="f6 b db mb2 mid-gray">About</label>
                        <textarea 
                            onChange={this.handleChange("about")} 
                            type="text" 
                            value={about}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100"
                        />
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Current salon</label>
                        <input 
                            onChange={this.handleChange("currentSalonName")} 
                            type="text"
                            value={currentSalonName}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Current salon start date</label>
                        <input 
                            onChange={this.handleChange("currentSalonDateStart")} 
                            type="text"
                            value={currentSalonDateStart}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Phone</label>
                        <input 
                            onChange={this.handleChange("contactPhone")} 
                            type="text"
                            value={contactPhone}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <div className="w-100 mt2 mb3">
                        <label className="f6 b db mb2 mid-gray">Instagram</label>
                        <input 
                            onChange={this.handleChange("contactInsta")} 
                            type="text"
                            value={contactInsta}
                            className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                        />
                    </div>
                    <span onClick={this.clickSubmit} className="link ba b--moon-gray mid-gray ph3 pv2 mt2 mb4 dib">Update</span>
                </form>
            </div>
        </div>
        )
    }
}
