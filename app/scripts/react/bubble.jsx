'use strict';

var SVGComponent = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}</svg>;
    }
});

React.render(
    <SVGComponent height="50" width="50" />,
    document.getElementById('bubblecontainer')
);

window.HelloComponent = React.createClass({
	  propTypes: {
	    fname : React.PropTypes.string.isRequired,
	    lname : React.PropTypes.string.isRequired
	  },
	  render: function() {
	    return <span>Hello {this.props.fname} {this.props.lname}</span>;
	  }
	})

angular
  .module('gumballApp').value('HelloComponent', HelloComponent);
