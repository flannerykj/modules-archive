import { Component } from 'react'
import { Slide } from './Slide'
import { SlideControl } from './SlideControl'

export class Presentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
        currentslide: 0
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }
  nextSlide(){
    if (this.state.currentslide+1 < this.props.slides.length) {
      this.setState({
        currentslide: this.state.currentslide + 1
      })
    }
  }
  previousSlide(){
    if (this.state.currentslide > 0) {
      this.setState({
        currentslide: this.state.currentslide - 1
      })
    }
  }
	render() {
		return (
			<div className="presentation">
				<div className="page-content container">
              <SlideControl previousSlide={this.previousSlide}
                            nextSlide={this.nextSlide}
                            current={this.state.currentslide+1}
                            total={this.props.slides.length}/>

              <Slide slidenumber={this.state.currentslide}
                     slidetype={this.props.slides[this.state.currentslide]['slidetype']}
                     components={this.props.slides[this.state.currentslide]['components']}
                     notes={this.props.slides[this.state.currentslide]['notes']}/>
      </div>
		</div>
		)
	}
}
