import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {

	return(
		<div>
			<p className='f3'>
				{'Załącz zdjęcie - aplikacja wykryje na nim twarz'}
			</p>
			<div className='center'>
		    	<div className='form center pa4 br3 shadow-5'>
					<input className='higher f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='higher w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>{'Wykryj twarz'}</button>
				</div>
			</div>
		</div>




		)
}

export default ImageLinkForm;