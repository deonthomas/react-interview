import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>
  	{
  		props.shoes.map((shoeItem)=>
  			<div>
	  			<ul>
	  				<Shoe item={shoeItem}/>
	  			</ul>
  			</div>	
  		)
  	}
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;