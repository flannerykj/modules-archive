import { Component } from 'react'
import { ItemList } from './ItemList'
import { AddItem } from './AddItem'
import { About } from './About'
import { Whoops } from './Whoops404'
import { Reader } from './Reader'
import { Writer } from './Writer'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'

const matches = {
    potato: ['potatoes', 'potato'],
    corn: ['corn'],
    seafood: ['salmon', 'halibut', 'swordfish', 'mussels', 'clams'],
    dairy: ['milk', 'cream', 'dairy'],
    tomato: ['tomato', 'tomatoes'],
    blacklist: ['plums']
}
export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemList: [],
      updatedList: [],
      count: 0
		}
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
    this.submitList = this.submitList.bind(this);
    this.clearList = this.clearList.bind(this);
	}
	addItem(newItem) {
		this.setState({
			itemList: [newItem['item'], ...this.state.itemList]
		})
	}
	removeItem(index) {
		var item = this.state.itemList[index];
		var array = this.state.itemList
		array.splice(index, 1)
		this.setState({
			itemList: array
		})
	}
  submitList() {
    var i = this.state.count;
    this.setState({
      updatedList: this.state.itemList,
      count: i + 1
    })
  }
  clearList() {
    this.setState({
      itemList: [],
      updateList: []
    })
  }
	render() {
		return (
			<div className="app">
				<div className="page-content container">
					{(this.props.location.pathname === "/") ?
					<div>
							<div> home </div> 
							
					</div> :

					(this.props.location.pathname === "/about") ?
						<About/>:

					(this.props.location.pathname === "/reader") ?
							<Reader/>:

						(this.props.location.pathname === "/writer") ?
							<Writer/>:

						<Whoops404/>
					}
			</div>
		</div>
		)
	}
}
