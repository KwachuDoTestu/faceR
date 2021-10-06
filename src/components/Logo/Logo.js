import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Logopic from './brain.png';

const Logo = () => {

	return(
		  <div className="ma4 mt0" style={{display: 'flex'}}>
			<Tilt className='Tilt br2 shadow-2' style={{height:200, width: 200}} glareEnable={true} glareMaxOpacity={0.7} glareColor="lightblue" glarePosition="all">
           		<img alt='Logo' src={Logopic} style={{width: '80%', paddingTop:'18px'}}/>	
    		</Tilt>
    	  </div>			
		)




}

export default Logo;