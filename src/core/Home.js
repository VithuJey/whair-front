import React from 'react'
import {Link} from 'react-router-dom'
import { isAuthenticated } from '../auth'
import {read} from '../user/apiUser'


// import talent from '../data/talent'
// import Search from '../core/Search'
// import TalentItem from '../core/TalentItem'

class  Home extends React.Component {
    constructor(){
        super()
        this.state = {
            user: "",
        }
    }

    init = (userId) => {
        const token = isAuthenticated().token
        read(userId, token)
        .then(data => {
            if(data){
                if(data.error){
                    this.setState({
                        redirectToSignIn: true
                    })
                } else {
                    this.setState({
                        user: data
                    })
                }
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


    render(){
        const {user} = this.state
        return(
                <div className="page w-100 flex flex-column items-center">
                <section className="w-60 inter flex flex-column items-center justify-center">
                    {/* {isAuthenticated() && (
                        <h1 className="fw2 mb3 silver">
                            Hello {isAuthenticated().user.name}
                        </h1>
                    )} */}
                    <h1 className="fw3 mt6 tc lh-title">
                    Whair is a directory, and networking platform for the hair industry built to help reuninte your clients with you 🎉
                    </h1>
                    <p className="fw3 bluee-50 measure silver tc mb4 lh-copy">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Allat enim optio, s perferendis deserunt animi suscipit ex non sunt magnam quasi facilis!
                    </p>
                    <button className="mb5 db">
                        <Link to="/signup" className="link black db">Join now</Link>
                    </button>
                </section>
                <section className="bt pt4 b--moon-gray w-80 inter items-start justify-between">
                    <h1 className="w-40 f3 fw3 lh-title">Allow past clients to find you</h1>
                    <p className="fw3 bluee-50 measure silver mb4 lh-copy">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Allat enim optio, s perferendis deserunt animi suscipit ex non sunt magnam quasi facilis!
                    </p>
                </section>
                <section className="bt pt4 b--moon-gray w-80 inter items-start justify-between">
                    <h1 className="w-40 f3 fw3 lh-title">Access to special offers and discounts</h1>
                    <p className="fw3 bluee-50 measure silver mb4 lh-copy">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Allat enim optio, s perferendis deserunt animi suscipit ex non sunt magnam quasi facilis!
                    </p>
                </section>


                </div>
        )
                    }
        

}

export default Home