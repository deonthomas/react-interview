import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (

		<div >
		<ul >
		{
			countByKey(props.items,'brand').map((item,index)=>
		  		  <li className="chip" onClick={props.handleSelect} key={index}>{item.brand} ({item.count})</li>
			)
		}
			</ul>
		  </div>
);


Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func,
  handleSelect:React.PropTypes.func
};

export default Facet;