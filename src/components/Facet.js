import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (

		<div>
		<ul>
		{
			countByKey(props.items,'brand').map((item)=>
		  		  <li>{item.brand} ({item.count})</li>
			)
		}
			</ul>
		  </div>
);


Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;