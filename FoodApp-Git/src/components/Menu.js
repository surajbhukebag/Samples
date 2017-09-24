import React, {Component} from 'react';
import Item from './Item';

class Menu extends Component {

	render() {

		let initialState = [
	        "Pasta,$12.00",
	        "Pizza,$27.00",
	        "Mushroom,$16.00",
	        "Panzenella,$10.00",
	        "Brushcheta,$10.00",
	        "Tiramisu,$6.00"
			];

		 return(
			 <div className="panel panel-default">

			    <div className="panel-body">
				    {
					
                        initialState.map((item) => {
                        	   return(
                                    <Item name={item} source="add" />
                                );
                        })
                         
                   	}
			    </div>
	  		</div>
  		);
	}
}

export default Menu;