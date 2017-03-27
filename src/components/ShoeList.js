import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>
  	<ul>
  	{	
  		props.shoes.map((shoeItem)=>
	  	<li key={shoeItem.id}>
	  		<Shoe {...shoeItem} />
	  	</li>
  		)
  	}
  	</ul>
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;