/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

//Slider
$(function(){
	$("#two-prong-slider").noUiSlider({	
		start: 3,
		step: 1,
		range: {
			'min': 0,
			'max': 9
		},
		serialization: {
			lower: [
			// Write the values to
			// an input with id 'field'
				$.Link({
					target: $("#numTwo"),
					decimals: 0
				})
			],
		},
		format: {
			decimals: 0
		}

	});
});
