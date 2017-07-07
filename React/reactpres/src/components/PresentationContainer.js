import { Component } from 'react'
import { Presentation } from './Presentation'

export class PresentationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        slides: [{
          slidenumber: -1,
          slidetype: '',
          components: []
        }]
    }
  }
  componentWillMount(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         var json = JSON.parse(xhttp.response).feed.entry;
         //console.log(json);
         var data = compileSlides(json);
         this.setState({
           slides: data
         });
         //console.log(this.state.slides);
      }
    }.bind(this);
    xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1fTBhztCUD2Oau3JGtGWhd4jRbW2iE-0b2Q2KD-dBXd8/od6/public/values?alt=json", true);
    xhttp.send();
  }
  render() {
    return (
      <Presentation slides={this.state.slides}/>
    )
  }
}

function compileSlides(data) {
  //console.log(data);
  var slides = [];
  var currentSlideNo = 0;
  var workingSlide;
  //var data = eval(spData);
  //alert(JSON.parse(data[0]['content']['$t']));
  for (var i = 0; i < data.length; i++) {
    //row info
    var component = {
      element: data[i]['gsx$element']['$t'],
      class: data[i]['gsx$class']['$t'],
      content: data[i]['gsx$content']['$t']
    }
    var slidenumber = data[i]['gsx$slidenumber']['$t'];
    //console.log('row: '+i+', slidenumber: '+slidenumber+', currentSlideNo: '+currentSlideNo+'workingSlide: '+workingSlide);
    //new slide
    if (currentSlideNo==slidenumber) {
      if (currentSlideNo>0) {
        //push current working slide
        slides.push(workingSlide);
      }
      currentSlideNo++;
      var slide = { // start new slide
        slidenumber: slidenumber,
        slidetype: data[i]['gsx$slidelayout']['$t'],
        components: [component],
        notes: [data[i]['gsx$notes']['$t']]
      }
      workingSlide = slide;
    }
    //add to current slide
    else if (!slidenumber){
      workingSlide['components'].push(component);
      workingSlide['notes'].push(data[i]['gsx$notes']['$t']);
    }
    //slide out of order
    else {
      //alert('slide out of order. Slide: '+slidenumber);
    }
  }
  slides.push(workingSlide);//push final slide
  //console.log(slides);
  return slides;
}
