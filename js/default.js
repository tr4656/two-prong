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
			'max': 12
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
	$("#chain-slider").noUiSlider({
		start: 1,
		step: 1,
		range: {
			'min': 1,
			'max': 4
		},
		serialization: {
			lower: [
			// Write the values to
			// an input with id 'field'
				$.Link({
					target: $("#numChain"),
					decimals: 0
				})
			],
		},
		format: {
			decimals: 0
		}

	});
});
