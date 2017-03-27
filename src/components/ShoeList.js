import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>
  	{
  		props.shoes.map((shoeItem)=>
  			<div>
	  			<ul>
	  				<Shoe/>
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