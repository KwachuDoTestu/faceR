import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {



		if (isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='higher f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Wyloguj się</p>
				</nav>);
			} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className='higher f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Zaloguj się</p>
					<p className='higher f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Zarejestruj się</p>
				</nav>
		);
		}
		
}

export default Navigation;