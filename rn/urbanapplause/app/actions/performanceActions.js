import * as actions from './actionTypes';
import _ from 'lodash';

export function addPerformance(name) {
  return {
    type: actions.ADD_PERFORMANCE,
    performance: {
      id: _.uniqueId('performance_'),
      name: name
    }
  };
}