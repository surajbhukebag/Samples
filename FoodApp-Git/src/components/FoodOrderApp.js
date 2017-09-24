import React, {Component} from 'react';

import Menu from './Menu';
import Order from './Order';

class FoodOrderApp extends Component {

	render() {
		return (
			 <div className="container-fluid mt-5" >
			 	<div className="row justify-content-md-center">
			 		<div className="col-xs-4">
			 			<span className="text-center"><h3>Menu</h3></span>
            			<Menu />
        			</div>
        			<div className="col-xs-4">
        				<span className="text-center"><h3>Order</h3></span>
            			<Order />
        			</div>
    				
			 	</div>
			 </div>
		);
	}

}

export default FoodOrderApp;