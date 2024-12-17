import React from "react";
import userCSS from "./User.module.css";
import userPhoto from './../../../../assets/logo192.png'

const User = (props) => {
    debugger
    return (
        <div className={userCSS.user}>
            <img className={userCSS.image} src = {props.user.small != null?props.user.small:userPhoto }/>
			<div className='block' >
                <div className={userCSS.userDescription}>
                    <div>{props.user.name}</div>
                    <div>
                        <div>{props.user.Country}</div>
                        <div>{props.user.City}</div>
                    </div>
                </div>
			</div>
            <div className={userCSS.buttonDiv}>
                {props.user.followed?<button onClick={() => { props.CallBackUnFollow(props.user.id)}} className={userCSS.button}>Отписаться</button>:<button onClick={() => { props.CallBackFollow(props.user.id)}} className={userCSS.button}>Подписаться</button>}
                
            </div>
        </div>
		)
}

export default User;