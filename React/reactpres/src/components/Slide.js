import { PropTypes } from 'prop-types'
import { Component } from 'react'

export class Slide extends Component {
	render() {
		var components = [];
		var notes = [];

		//components
		for (var i = 0; i < this.props.components.length; i++) {
			var component = this.props.components[i];
			var element = React.createElement(component['element'],
																				{className: component['class']+' component component-'+i,
																				 key: i},
																				component['content']);
			components.push(element);

			//notes
			if (this.props.notes[i].length>0) {
				var note_element = React.createElement('li',
																					{className: 'note',
																					 key: i},
																					this.props.notes[i]);
				notes.push(note_element);
			}

		}
		console.log('rendering slide');
		return (
			<div className="slide-container">
				<div className="slide">
					<div className="slide-content"> {components} </div>
				</div>
				<ul className="slide-metadata">
					<li> Slide Number: {this.props.slidenumber}</li>
					<li> Slide Type: {this.props.slidetype}</li>
				</ul>
				notes
				<ul>
					{notes}
				</ul>
			</div>
		)
	}
}
