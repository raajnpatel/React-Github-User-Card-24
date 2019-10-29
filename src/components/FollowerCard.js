import React from 'react';
import axios from 'axios';

class FollowerCard extends React.Component {
    constructor(){
        super();
        this.state = {
            followers: []
            };
        };

    componentDidMount() {
        this.fetchFollowers();
    }

    fetchFollowers = () => {
        axios
            .get('https://api.github.com/users/RaajnPatel/followers')
            .then(response => {
                this.setState({followers: response.data});
            })
            .catch(err=> console.log(err));
    }

    render(){
        return(
            <div className = "fetchFollowers">
                {this.state.followers.map(follower => {
                    return (
                        <div className = "followers" key = {follower.id}>
                            <img src = {follower.avatar_url} alt = {follower.login} />
                            <h4>{follower.login}</h4>
                            <a href = {follower.html_url}>{follower.html_url}</a>
                            <br/><br/><br/><br/><br/><br/>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default FollowerCard;