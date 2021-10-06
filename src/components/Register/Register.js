import React, { Component } from 'react';

class Register extends Component {

	constructor(props) {

		super()
		this.state = {
			name: '',
			email: '',
			password: ''

		}

	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	// fetch() defaultowo wykonuje GET request, musimy go zmienic na POST (wysylamy haslo!) i wyslac dane
	// w body - JSON.stringify zmieni dane na jsona (http obsluguje tekst).
	onSubmitRegister = () => {

		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
				})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id){
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}


			})




	}



	render() {

	const { onRouteChange } = this.props;
	return (
	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
		<main className="higher pa4 black-80">
  			<div className="measure">
    			<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
     				 <legend className="f1 fw6 ph0 mh0">Rejestracja</legend>
      				 <div className="mt3">
        				<label className="db fw6 lh-copy f6" htmlFor="email-address">Imię</label>
       					<input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
      				 </div>
      				 <div className="mt3">
        				<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
       					<input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email"/>
      				 </div>
      				 <div className="mv3">
        				<label className="db fw6 lh-copy f6" htmlFor="password">Hasło</label>
        				<input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      				 </div>
    			</fieldset>
    			<div className="">
     				 <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Zarejestruj się"/>
    			</div>
  			</div>
		</main>
	</article>
		);

	}


}

export default Register;