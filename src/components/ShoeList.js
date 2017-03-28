import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => {
  return(
  <div>
  	<ul>
  	{	
  		props.shoes.map((shoeItem)=>
	  	<li key={shoeItem.id}>
	  		<Shoe {...shoeItem} onShoeSelect={props.onShoeSelect}    />
	  	</li>
  		)
  	}
  	</ul>
  </div>
  )
}

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;