var React = require('react');
var User = require('../components/User.jsx'); 

var Home = React.createClass({
    render() {
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <User/>
                    <script src="js/app.js"></script>
                </body>
            </html>
        )
    }
});

module.exports = Home;

