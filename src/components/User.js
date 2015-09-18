var React = require('react');

var User = React.createClass({
    getInitialState : function(){
        return {
            username : "@LeonidasEsteban",
            avatar : "twitter.jpg",
            description : "Lider de equipo frontend en @platzi"
        }
    },
    changeUser : function(){
        this.setState({
            username : "Leonidas Esteban",
            avatar : "facebook.jpg",
            description : "Lider de equipo frontend en @platzi"
        })
    },
    render : function(){
        var image = "./images/"+this.state.avatar;
        return (
            <article className="User" onClick={this.changeUser}>
                <img src={image} className="User-avatar" width="100"/>
                <div className="User-description">
                    <p className="User-name">{this.state.username}</p>
                    <p>{this.state.description}</p>
                </div>
            </article>
        )
    }
})

module.exports = User;