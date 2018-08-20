/**
 *BubbleView.js
 */
'use strict';
var React = require('react');
var {
  PropTypes,
} = React;
var {
 View,
 requireNativeComponent,
} = require('react-native');

var BubbleTextView = requireNativeComponent('BubbleView', BubbleView);
var createReactClass = require("create-react-class");
var BubbleView = createReactClass({

  propTypes: {
    ...View.propTypes,
    text: PropTypes.string,
    type: PropTypes.bool,
  },

  render() {
    return (
      <BubbleTextView {...this.props}/>
    );
  },
});

module.exports = BubbleView;
