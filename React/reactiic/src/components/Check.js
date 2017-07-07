import { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Item } from './Item'
import 'array-includes'

const matches = {
    potato: ['potatoes', 'potato'],
    corn: ['corn'],
    seafood: ['salmon', 'halibut', 'swordfish', 'mussels', 'clams'],
    dairy: ['milk', 'cream', 'dairy'],
    tomato: ['tomato', 'tomatoes'],
    blacklist: ['plums']
}

export class Check extends Component {
    render() {
      var checks = check(this.props.itemList, matches)['checks'];
      var matched = check(this.props.itemList, matches)['matched'];
      var html = '';
      console.log(matched);
      if (checks['length']) {
        html =
        <div>
          {(checks['potato'])?
            <div className="alert alert-success" role="alert">
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              <strong>{matched['potato']}!</strong> Your chowder has potatoes.
            </div>:

            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              <strong>Missing Potatoes!</strong> Your chowder needs potatoes.
            </div> }

          {(checks['orCornSeafood'])?
            <div className="alert alert-success" role="alert">
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              <strong>{matched['corn']} {matched['seafood']}!</strong> Your chowder has fulfilled the corn-or-seafood criteria.
            </div>:
            <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              <strong>Missing corn or seafood!</strong> Add at least one.
            </div>}

          {(!checks['nandDairyTomato'])?
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              <strong>Both {matched['tomato']} and {matched['dairy']}!</strong> Chowders do not mix tomato and dairy.
            </div>:

            (checks['orDairyTomato'])?
            <div className="alert alert-success" role="alert">
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              <strong>{matched['dairy']}{matched['tomato']}!</strong> Your corn has fulilled the dairy-or-tomato requirement.
            </div>:

            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              <strong>Missing dairy or tomato!</strong> Add one - but not both.
            </div>}

          {(checks['blacklist'])?
            <div className="alert alert-success" role="alert">
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
              <strong>No un-chowderlike items!</strong> So far, your chowder does not have any weird ingredients in it.
            </div>:
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
              <strong>No!</strong> "You put blacklisted items in your chowder. Chowders do not have: "{matched['blacklist']}
            </div>}
          </div>
        } else {
          html = <div className="alert alert-info" role="alert">
                  <strong>Add some ingredients to get started!</strong>
                </div>
        }

    return (
      <div> {html} </div>
    )
  }
}
function check(inputList, matches) {// one arrya, one dictionary of arrays
  var hits = {};
  var checks = {};
  for (var item in matches) {
    if (matches.hasOwnProperty(item)) {
      hits[item] = matchesInLists(inputList, matches[item]);
    }
  }
  (inputList.length > 0) ? checks['length'] = true: checks['length'] = false;
  (hits['potato'].length > 0) ? checks['potato'] = true: checks['potato'] = false;
  ((hits['corn'].length > 0)|(hits['seafood'].length > 0)) ? checks['orCornSeafood'] = true: checks['cornOrSeafood'] = false;
  ((hits['tomato'].length > 0)|(hits['dairy'].length > 0)) ? checks['orDairyTomato'] = true: checks['orDairyTomato'] = false;
  !((hits['tomato'].length > 0)&&(hits['dairy'].length > 0)) ? checks['nandDairyTomato'] = true: checks['nandDairyTomato'] = false;
  (hits['blacklist'].length == 0) ? checks['blacklist'] = true: checks['blacklist'] = false;

  return {checks: checks, matched: hits};
  }

function matchesInLists(inputList, matchList) { //two arrays
  var matches = [];
  for (var i = 0; i < inputList.length; i++) {
    if (matchList.indexOf(inputList[i].toLowerCase())>-1) {
      matches.push(inputList[i]);
    }
  }
  return matches;
}
