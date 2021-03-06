import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => {

return(
				<div >
				<ul >
						{
							countByKey(props.items,'brand').map((item,index)=>
				  		  <li className="chip" onClick={()=>props.onFacetSelect(item)}
									key={index}>{item.brand} ({item.count})
								</li>)
						}
					</ul>
				</div>)
	};

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;
