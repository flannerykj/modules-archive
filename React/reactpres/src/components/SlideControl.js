import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/lib/ti'

export const SlideControl = ({previousSlide, nextSlide, current, total}) => {
	const previous = (e) => {
 		e.preventDefault()
    previousSlide()
 	}
	const next = (e) => {
		e.preventDefault()
		nextSlide()
	}
	return(
	<div className="slide-control">
  <button onClick={previous} type="button" className="btn btn-default btn-lg arrow" aria-label="Left Align">
    <span className='glyphicon glyphicon-arrow-left' aria-hidden="true"></span>
  </button>
		<span className="slide-index"> {current}/{total}</span>
    <button onClick={next} type="button" className="btn btn-default btn-lg arrow" aria-label="Left Align">
      <span className='glyphicon glyphicon-arrow-right' aria-hidden="true"></span>
    </button>
	</div>
)
}
