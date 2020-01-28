
import React from 'react'
import {Link} from 'react-router-dom'
import defaultProfileImage from '../../images/default-user-image.png'

// const UserItem = (props) => (
//     <div style={{flex: "0 1 360px"}} className="ba b--light-gray pa3 ma0">
//         <Link className="link" to={`user/${props.profile}`}>
//             <h1 className="link fw3 f3 dark-gray ttc">{props.name}</h1>
//         </Link>
//         <p className="fw3 light-silver">{props.email}</p>
//         <p className="fw3 light-silver">{props.message}</p>
//         {console.log(props.message)}
//     </div>
// )

const UserItem = (props) => (
    <div style={{flex: "0 1 320px"}} className="flex userItem bg-white  ml0 pa3 ma3 br2">
        <Link className="link" to={`user/${props.profile}`}>
            <img 
                src={props.imageUrl} 
                onError={i => (i.target.src = `${defaultProfileImage}`)} 
                className="br-100 w4 h4 db mr3" 
                alt={props.alt}
                style={{width: "72px", height: "72px"}}
            />
        </Link>
        <div className="flex flex-column justify-start">
            <Link className="link" to={`user/${props.profile}`}>
                <h1 className="link lh-copy fw3 f5 ma0 dark-gray ttc">{props.name}</h1>
            </Link>
            <p className="fw3 ma0 f5 light-silver">{props.currentSalonName}</p>
            <p className="fw3 ma0 f7 pt3 mid-gray">Member since: {props.date}</p>
        </div>
        {console.log(props.about)}
    </div>
)


export default UserItem