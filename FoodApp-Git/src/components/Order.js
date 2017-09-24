import React, {Component} from 'react';

import {connect} from 'react-redux';
import Item from './Item';

class Order extends Component {

	render() {
	
		return(
 				<div className="panel panel-default">
			 
				    <div className="panel-body">
					   	
					    {this.props.itemArr !== undefined && this.props.itemArr.length > 1 ?
			
                        	this.props.itemArr.map((item) => {
                        		   return(<Item name={item.item} source="remove" />);
                        	}) : ''
                         
                   		}

				    </div>
				    <div className="panel-footer">
				    	<div className="row">
				    	<div className="col-xs-10"><strong>Total:</strong></div>
    					<div className="col-xs-2"><strong>${this.props.itemArr[0].item}</strong></div>
    					</div>
				    </div>

	  			</div>

			);
	}
}

function mapStateToProps(items) {
	if(items != null) {
	    const itemArr = Object.keys(items).map((item) => (
	        {
	            item : items[item]            
	        }
	    ));

	    return {itemArr};
	}
    
}

export default connect(mapStateToProps, null)(Order);