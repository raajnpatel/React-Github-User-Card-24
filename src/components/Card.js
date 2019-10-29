import React from 'react';

const Card = props => {
    return (
        <div>
            <img src = {props.user.avatar_url} alt = {`This is ${props.user.name}`} />
            <h1>This is: {props.user.name}</h1>
            <p>User Bio: {props.user.bio}</p>
            <p>User Name: {props.user.login}</p>
            <h4>Location: {props.user.location}</h4>
            <h3>Here are {props.user.name}'s {props.user.followers} Followers: </h3>
        </div>
    )
}

export default Card;