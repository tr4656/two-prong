/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

//Function


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
					format: {
						decimals: 0
					}
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
					format: {
						decimals: 0
					}
				})
			],
		},
		format: {
			decimals: 0
		}

	});

	function calcTwo() {
		var twoAmount = $("#two-prong-slider").val();
		var chainAmount = $("#chain-slider").val();
		var multi = 0;
		if (twoAmount == 0 && chainAmount == 1) { multi = 7.50; }
		else if (twoAmount == 0 && chainAmount == 2) { multi = 18.75; }
		else if (twoAmount == 0 && chainAmount == 3) { multi = 33.75; }
		else if (twoAmount == 0 && chainAmount == 4) { multi = 52.50; }
		else if (twoAmount == 1 && chainAmount == 1) { multi = 8.13; }
		else if (twoAmount == 1 && chainAmount == 2) { multi = 20.31; }
		else if (twoAmount == 1 && chainAmount == 3) { multi = 36.56; }
		else if (twoAmount == 1 && chainAmount == 4) { multi = 56.88; }
		else if (twoAmount == 2 && chainAmount == 1) { multi = 8.75; }
		else if (twoAmount == 2 && chainAmount == 2) { multi = 20.31; }
		else if (twoAmount == 2 && chainAmount == 3) { multi = 36.56; }
		else if (twoAmount == 2 && chainAmount == 4) { multi = 61.25; }
		document.getElementById('two-prong-multiplier').innerHTML = multi;
	}

	$('#two-prong-slider').on('slide', function(){
		calcTwo();
	});
	$('#chain-slider').on('slide', function(){
		calcTwo();
	});


});
