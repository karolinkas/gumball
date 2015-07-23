'use strict';

var randRadius = Math.floor(Math.random() * (100 - 0) + 0); 
var randPos = Math.floor(Math.random() * (500 - 0) + 0);


var SVGbubble = React.createClass({

		getInitialState: function(){
			return { bubbleData:''
							}
		},
		componentDidMount: function() {
			var self = this;
		  $.getJSON(this.props.source, function(result) {
		  	var bubbleData = result.data;

		    if (this.isMounted()) {
		      this.setState(bubbleData);
		    }
		  }.bind(this));
		},

    render: function() {
    	var bubble = this.state;	
    	console.log(bubble);
      		return (
              
      					<svg {...this.props}>{this.props.children}
	      					<svg viewBox="0 0 500 700">

	      							<text x="250" y="150" fontFamily="Verdana" fontSize="55">{bubble.id}</text>
											<circle cx={randPos} cy={randPos} r={randRadius} fill="tomato"/>
									</svg>
	      		// 			<svg viewBox="0 0 500 500">
	      		// 					<text x="250" y="150" fontFamily="Verdana" fontSize="55">{bubble}</text>
									// 		<circle cx={randPos} cy={randPos} r={randRadius} fill="blue"/>
									// </svg>
								</svg>

							);
    }
});

React.render(
    <SVGbubble height="500" width="700" source="https://gist.githubusercontent.com/sixofhearts/615f4373988e62eb25c0/raw/a76b17359ea7c8aa46bcd4f6f759a8fca73a9497/bubble-gum-blue"/>,
    document.getElementById('bubblecontainer')
);

