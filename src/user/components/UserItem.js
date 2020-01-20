
import React from 'react'
import {Link} from 'react-router-dom'
import defaultProfileImage from '../../images/default-user-image.jpg'

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
    <div style={{flex: "0 1 360px"}} className="flex userItem ba b--light-gray pa3 ma2 br2">
        <img src={props.imageUrl} onError={i => (i.target.src = `${defaultProfileImage}`)} className="br-100 w4 h4 db mr3" alt={props.alt}/>
        <div>
            <Link className="link" to={`user/${props.profile}`}>
                <h1 className="link lh-copy fw3 f4 mb0 dark-gray ttc">{props.name}</h1>
            </Link>
            <p className="fw3 mt0 lh-copy light-silver">
                {props.date}
            </p>
        </div>
        {console.log(props.message)}
    </div>
)


export default UserItem