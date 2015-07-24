'use strict';

var randRadius = Math.floor(Math.random() * (80 - 50) + 50); 
var randPos = Math.floor(Math.random() * (300 - 0) + 0);
var exampleUrl = "https://gist.githubusercontent.com/sixofhearts/615f4373988e62eb25c0/raw/a76b17359ea7c8aa46bcd4f6f759a8fca73a9497/bubble-gum-blue";
var emailadressCount = 100;
var newPos = function (){ Math.floor(Math.random() * (500 - 0) + 0)};

var SVGbubble = React.createClass({

		getInitialState: function(){
			return { 
							}
		},
		componentDidMount: function() {
			var self = this;
		  $.getJSON(this.props.source, function(result) {
		  	var bubbleData = result.data;

		    if (this.isMounted()) {
		      this.setState(bubbleData.attributes);
		    }
		  }.bind(this));
		},

    render: function() {
    	var bubble = this.state;
  		return (       
  					<svg {...this.props}>{this.props.children}
    					<svg viewBox="0 0 500 700">
									<circle cx={randPos} cy={randPos} r={randRadius} fill="tomato"/>
    							<text x={randPos} y={randPos} fill="grey" fontFamily="Helvetica" fontSize="20">{bubble.flavor}</text>
							</svg>
    					<svg viewBox="0 0 500 500">
									<circle cx={randPos} cy={randPos} r={randRadius} fill={bubble.color}/>
    							<text x={randPos} y={randPos} fill="grey" fontFamily="Helvetica" fontSize="20">{bubble.flavor}</text>
							</svg>
						</svg>

					);
    }
});



React.render(
    <SVGbubble height="300" width="700" source="https://gist.githubusercontent.com/sixofhearts/615f4373988e62eb25c0/raw/a76b17359ea7c8aa46bcd4f6f759a8fca73a9497/bubble-gum-blue"/>,
    document.getElementById('bubblecontainer')
);

$("circle").velocity({ cx: randPos+50, cy: randPos+50 },{loop: true,duration: 5000});






