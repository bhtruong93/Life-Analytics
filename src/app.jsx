var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Questionnaire = require('./components/questionnaire.jsx');
var LoginForm = require('./components/logInForm.jsx');
var SignInPage = require('./components/signInPage.jsx');
var SignUpForm = require('./components/signUpForm.jsx');
// var Graph = require('./../client/components/graph.jsx')

console.log('app.jsx is working!');

var Page = React.createClass({
  getInitialState: function() {
    return {
      signInPage: true,
      signUpForm: true,
      logInForm: false,
      questionnaire: false,
      dashboard: false,
    };
  },
  getQuestions: function(a,b,c) {
    // this.setState({signInPage: false, questionnaire: true});
    console.log(a,b,c);
    // $.ajax({
    //   type: "POST",
    //   data: ,
    //   success: function(data) {
    //
    //   }.bind(this)
    // });
  },
  render: function() {
    if(!!this.state.signInPage) {
      console.log('here')
      return <div><SignInPage getQuestions={this.getQuestions} /></div>
    }
  }
});


ReactDOM.render(<Page />, document.getElementById('container'));
