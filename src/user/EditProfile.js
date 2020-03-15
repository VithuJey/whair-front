import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { read, update, updateUser } from './apiUser'
import {Redirect} from 'react-router-dom'
import defaultProfileImage from '../images/default-user-image.png'
import CurrentSalon from './components/CurrentSalon'
import PreviousSalon from './components/PreviousSalon'


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
            prevSalon: [],
            error: "",
            authorized: false,
            currentSalonComponentList : [].concat(<CurrentSalon />),
            previousSalonComponentList : [].concat(<PreviousSalon />)
        }

        this.createCurrentSalon = this.createCurrentSalon.bind(this);
        
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
                    prevSalon: data.prevSalon,
                    prevSalonName: data.prevSalon.prevSalonName,
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
        // check to see if the user id from the JWT token matches the user id in the URL
        if(isAuthenticated().user && isAuthenticated().user._id === this.props.match.params.userId){
         console.log('they match')
         this.setState({
             authorized: true
         })
        } else{
            console.log('they do not match')
            this.setState({
                authorized: false
            })
        }
        this.userData = new FormData()
        const userId = this.props.match.params.userId
        this.init(userId)
    }    
    isValid = () => {
        const { name, email, fileSize } = this.state
        if(fileSize > 250000){
            this.setState({
                error: "File size should be less than 250kb",
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
    ////////////////////
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

    createCurrentSalon = event => {
        event.preventDefault()
        const currentSalonComponentList = this.state.currentSalonComponentList;
        this.setState({
            currentSalonComponentList: currentSalonComponentList.concat(<CurrentSalon key= 
             {currentSalonComponentList.length} />)
        });
      }

      createPreviousSalon = event => {
        event.preventDefault()
        const previousSalonComponentList = this.state.previousSalonComponentList;
        this.setState({
            previousSalonComponentList: previousSalonComponentList.concat(<PreviousSalon key= 
             {previousSalonComponentList.length} />)
        });
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
                prevSalon,
                prevSalonName,
                loading,
                authorized
            } = this.state

        if(redirectToProfile){
            return <Redirect to={`/user/${id}`} />
        }

        // if(authorized !== true){
        //     return <Redirect to={`/`}/>
        // } 

        const photoUrl = id 
            ? `${process.env.REACT_APP_API_URL}/user/photo/${id}?${new Date().getTime()}` 
            : defaultProfileImage


        if(isAuthenticated().user && isAuthenticated().user._id === this.props.match.params.userId){
            const initials = name.replace(/\s/g, "+")
            return (
                <div className="container flex w-100 items-center justify-start bg-near-white pa5">
                    <div className="form bg-white w-40-ns w-100-m pa5" >
                        <div className="f6 alert dark-red" style={{display: error ? '' : 'none'}}>{error}</div>
                        {loading ? <div> <h2 className="f6 alert dark-green">Loading</h2></div> : ""}
                        <img src={photoUrl} alt={name} className="w4 h4 br-100 mb5"  onError={i => (i.target.src = `https://eu.ui-avatars.com/api/?name=${initials}&size=128&background=999999&color=000000`)}/>
                        <form>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">Profile photo</label>
                                <input 
                                    onChange={this.handleChange("photo")} 
                                    type="file"
                                    accept="image/*" 
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100"
                                />
                            </div>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">Name</label>
                                <input 
                                    onChange={this.handleChange("name")} 
                                    type="text" 
                                    value={name}
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100"
                                />
                            </div>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">Email</label>
                                <input 
                                    onChange={this.handleChange("email")} 
                                    type="email"
                                    value={email}
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                                />
                            </div>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">About</label>
                                <textarea 
                                    onChange={this.handleChange("about")} 
                                    type="text" 
                                    value={about}
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100"
                                />
                            </div>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">Phone</label>
                                <input 
                                    onChange={this.handleChange("contactPhone")} 
                                    type="text"
                                    value={contactPhone}
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                                />
                            </div>
                            <div className="w-100 mt2 mb3">
                                <label className="f6 db mb2 mid-gray">Instagram</label>
                                <input 
                                    onChange={this.handleChange("contactInsta")} 
                                    type="text"
                                    value={contactInsta}
                                    className="input-reset ba b--light-gray pa2 mb2 db w-100" 
                                />
                            </div>
                            
                            {
                                this.state.currentSalonComponentList.map(function(component, index) {
                                    return component;
                                })
                            }
                            
                            {
                                this.state.previousSalonComponentList.map(function(component, index) {
                                    return component;
                                })
                            }
                            
                            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", width:"100%", marginTop:"50px" }}> 
                                <button className="link ba b--moon-gray mid-gray ph3 pv2 mt2 mb4 dib" onClick={this.createCurrentSalon}>Add current salon</button>
                                <button className="link ba b--moon-gray mid-gray ph3 pv2 mt2 mb4 dib" onClick={this.createPreviousSalon}>Add previous salon</button>
                                <button onClick={this.clickSubmit} className="link ba white bg-black ph3 pv2 mt2 mb4 dib">Update</button>
                            </div>
                            

                        </form>
                    </div>
                </div>
            )
    }else {
        return(
            <div className="container flex flex-column w-100 items-center justify-center">
                <h1 className="fw1 mv5">You're not authorised to do this you naughty hacker</h1>
                {/* <img src="https://media.giphy.com/media/w1XrYq5PsCbyE/giphy.gif"/> */}
                <img src="https://media.giphy.com/media/gNzDiRiZS3SXS/giphy.gif"/>
                {/* <img src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif"/> */}
            </div>
        )

        }
    }
}
