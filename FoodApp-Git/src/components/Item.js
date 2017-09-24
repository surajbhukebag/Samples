import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addItem} from "../actions/index";

import {removeItem} from "../actions/index";

class Item extends Component {

	render() {
		
    return (

			<div className="panel panel-default">
    			
          {this.props.name !== undefined && isNaN(this.props.name) ?
            <div className="row panel-body">
              <div className="col-xs-7"><strong>{this.props.name.split(',')[0]}</strong></div>
              <div className="col-xs-2"><strong>{this.props.name.split(',')[1]}</strong></div>

              {this.props.source === 'add' ?
                <div className="col-xs-3"><button onClick={() => {
                                      this.props.addToOrder(this.props.name);}}><strong>Add</strong></button></div> :

                <div className="col-xs-3"><button onClick={() => {
                                      this.props.removeFromOrder(this.props.name);}}><strong>Remove</strong></button></div>
              }
            </div>
          : ''}  				
    		
  			</div>
  		);
	}

}

function mapDispatchToProps(dispatch) {
    return {
        addToOrder : (data) => dispatch(addItem(data)),
        removeFromOrder : (data) => dispatch(removeItem(data))
    };
}

export default connect(null, mapDispatchToProps)(Item);