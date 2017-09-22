import React from 'react';
import ZipForm from './ZipForm';
import { get } from 'axios';
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
 constructor(props){
	super(props);
	this.state = {
		count: 0,
		zipcode: '',
		city: {},
		dates: [],
		selectedDate: null
	};

	this.onFormSubmit = this.onFormSubmit.bind(this);
   }
   render(){
	return (
		<div className='zipBlock'>
	<button
	 onClick={() => {
		this.setState({ count: this.state.count + 1 });
	}}
	>
	Count: {this.state.count}


	</button>
	
	<ZipForm onSubmit={this.onFormSubmit} />
	</div>
	);
    }

    onFormSubmit(zipcode){

    	get('http://localhost:3000/weather/${zipcode}')
    	.then(({data}) =>{
    		const { city, list:dates} = data;

    		this.setState({zipcode, city, dates, selectedDate:null});
    	});

    	
    }
}
export default Counter;
