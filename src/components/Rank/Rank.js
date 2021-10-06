import React from 'react';


const Rank = ({name, entries})=> {

	return(
		<div>
			<div className='white f3'>
				{name + ', ilość załadowanych przez Ciebie obrazów to'}
			</div>
			<div className='white f1'>
				{'#' + entries}
			</div>
		</div>
		)
}

export default Rank;