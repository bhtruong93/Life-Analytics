var React = require('react');
var ReactDOM = require('react-dom');
var SignUpForm = require('./signUpForm.jsx');
var LoginForm = require('./logInForm.jsx')
var Questionnaire = require('./questionnaire.jsx')

var SignInPage = React.createClass({
  render: function() {
    // var signUp = <SignUpForm signUpStatus={this.state.signUpStatus} createUser = {this.createUser} demos={this.demoSignIn}/>;
    // var login = <LoginForm loginStatus={this.state.loginStatus} createUser = {this.createUser} demos={this.demoSignIn}/>;

    // console.log(signUp);

    return (
      <div>
        <div className="form">
          <ul className="tab-group">
            <li><a href="#signup">Sign Up</a></li>
            <li><a href="#login">Log In</a></li>
          </ul>
          <div className="tab-content">
          // <SignUpForm />
          </div>
          <script src="js/index.js"></script>
      </div>

    </div>
    )
  }
});

module.exports = SignInPage;
