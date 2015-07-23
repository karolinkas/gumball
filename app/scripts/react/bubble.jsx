'use strict';

var randRadius = Math.floor(Math.random() * (100 - 0) + 0); 
var randPos = Math.floor(Math.random() * (500 - 0) + 0);

var SVGbubble = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}
        					<svg viewBox="0 0 500 700">
 										<circle cx={randPos} cy={randPos} r={randRadius} fill="tomato"/>
									</svg>
        					<svg viewBox="0 0 500 500">
 										<circle cx={randPos} cy={randPos} r={randRadius} fill="blue"/>
									</svg>
								</svg>;
    }
});

React.render(
    <SVGbubble height="500" width="700" />,
    document.getElementById('bubblecontainer')
);

