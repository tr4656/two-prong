$(function(){
	//two prong sliders
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
	});
	//row enhance slider
		$("#row-enhance-slider").noUiSlider({
		start: 4,
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
					target: $("#numRowEnhance"),
					format: {
						decimals: 0
					}
				})
			],
		},
	});
	$("#row-slider").noUiSlider({
		start: 1,
		step: 1,
		range: {
			'min': 1,
			'max': 3
		},
		serialization: {
			lower: [
			// Write the values to
			// an input with id 'field'
				$.Link({
					target: $("#numRow"),
					format: {
						decimals: 0
					}
				})
			],
		},
	});

	//mutliply two prong calc
	function calcTwo() {
		var twoAmount = $("#two-prong-slider").val();
		var chainAmount = $("#chain-slider").val();
		var multi = 0;
		if (twoAmount == 0 && chainAmount == 1) { multi = 7.50; }
		else if (twoAmount == 1 && chainAmount == 1) { multi = 8.13; }
		else if (twoAmount == 2 && chainAmount == 1) { multi = 8.75; }
		else if (twoAmount == 3 && chainAmount == 1) { multi = 9.38; }
		else if (twoAmount == 4 && chainAmount == 1) { multi = 10.00; }
		else if (twoAmount == 5 && chainAmount == 1) { multi = 10.63; }
		else if (twoAmount == 6 && chainAmount == 1) { multi = 11.25; }
		else if (twoAmount == 7 && chainAmount == 1) { multi = 12.19; }
		else if (twoAmount == 8 && chainAmount == 1) { multi = 13.13; }
		else if (twoAmount == 9 && chainAmount == 1) { multi = 14.06; }
		else if (twoAmount == 10 && chainAmount == 1) { multi = 15.00; }
		else if (twoAmount == 11 && chainAmount == 1) { multi = 15.94; }
		else if (twoAmount == 12 && chainAmount == 1) { multi = 16.88; }
		else if (twoAmount == 0 && chainAmount == 2) { multi = 18.75; }
		else if (twoAmount == 1 && chainAmount == 2) { multi = 20.31; }
		else if (twoAmount == 2 && chainAmount == 2) { multi = 21.88; }
		else if (twoAmount == 3 && chainAmount == 2) { multi = 23.44; }
		else if (twoAmount == 4 && chainAmount == 2) { multi = 25.00; }
		else if (twoAmount == 5 && chainAmount == 2) { multi = 26.56; }
		else if (twoAmount == 6 && chainAmount == 2) { multi = 28.13; }
		else if (twoAmount == 7 && chainAmount == 2) { multi = 30.47; }
		else if (twoAmount == 8 && chainAmount == 2) { multi = 32.81; }
		else if (twoAmount == 9 && chainAmount == 2) { multi = 35.16; }
		else if (twoAmount == 10 && chainAmount == 2) { multi = 37.50; }
		else if (twoAmount == 11 && chainAmount == 2) { multi = 39.84; }
		else if (twoAmount == 12 && chainAmount == 2) { multi = 42.19; }
		else if (twoAmount == 0 && chainAmount == 3) { multi = 33.75; }
		else if (twoAmount == 1 && chainAmount == 3) { multi = 36.56; }
		else if (twoAmount == 2 && chainAmount == 3) { multi = 39.38; }
		else if (twoAmount == 3 && chainAmount == 3) { multi = 42.19; }
		else if (twoAmount == 4 && chainAmount == 3) { multi = 45.00; }
		else if (twoAmount == 5 && chainAmount == 3) { multi = 47.81; }
		else if (twoAmount == 6 && chainAmount == 3) { multi = 50.63; }
		else if (twoAmount == 7 && chainAmount == 3) { multi = 54.85; }
		else if (twoAmount == 8 && chainAmount == 3) { multi = 59.06; }
		else if (twoAmount == 9 && chainAmount == 3) { multi = 63.28; }
		else if (twoAmount == 10 && chainAmount == 3) { multi = 67.50; }
		else if (twoAmount == 11 && chainAmount == 3) { multi = 71.72; }
		else if (twoAmount == 12 && chainAmount == 3) { multi = 75.94; }
		else if (twoAmount == 0 && chainAmount == 4) { multi = 52.50; }
		else if (twoAmount == 1 && chainAmount == 4) { multi = 56.88; }
		else if (twoAmount == 2 && chainAmount == 4) { multi = 61.25; }
		else if (twoAmount == 3 && chainAmount == 4) { multi = 65.63; }
		else if (twoAmount == 4 && chainAmount == 4) { multi = 70.00; }
		else if (twoAmount == 5 && chainAmount == 4) { multi = 73.38; }
		else if (twoAmount == 6 && chainAmount == 4) { multi = 78.75; }
		else if (twoAmount == 7 && chainAmount == 4) { multi = 85.31; }
		else if (twoAmount == 8 && chainAmount == 4) { multi = 91.88; }
		else if (twoAmount == 9 && chainAmount == 4) { multi = 98.44; }
		else if (twoAmount == 10 && chainAmount == 4) { multi = 105.00; }
		else if (twoAmount == 11 && chainAmount == 4) { multi = 111.56; }
		else if (twoAmount == 12 && chainAmount == 4) { multi = 118.13; }
		document.getElementById('two-prong-multiplier').innerHTML = multi;
	}
	//mutliply row enhance
	function calcRow() {
		var rowAmount = $("#row-enhance-slider").val();
		var rowsAmount = $("#row-slider").val();
		var rowMulti = 0;
		if (rowAmount == 0 && rowsAmount == 1) { rowMulti = 10.50; }
		else if (rowAmount == 1 && rowsAmount == 1) { rowMulti = 11.55; }
		else if (rowAmount == 2 && rowsAmount == 1) { rowMulti = 12.60; }
		else if (rowAmount == 3 && rowsAmount == 1) { rowMulti = 13.65; }
		else if (rowAmount == 4 && rowsAmount == 1) { rowMulti = 14.70; }
		else if (rowAmount == 5 && rowsAmount == 1) { rowMulti = 15.75; }
		else if (rowAmount == 6 && rowsAmount == 1) { rowMulti = 16.80; }
		else if (rowAmount == 7 && rowsAmount == 1) { rowMulti = 17.85; }
		else if (rowAmount == 8 && rowsAmount == 1) { rowMulti = 18.90; }
		else if (rowAmount == 9 && rowsAmount == 1) { rowMulti = 19.95; }
		else if (rowAmount == 0 && rowsAmount == 2) { rowMulti = 26.25; }
		else if (rowAmount == 1 && rowsAmount == 2) { rowMulti = 31.50; }
		else if (rowAmount == 2 && rowsAmount == 2) { rowMulti = 36.75; }
		else if (rowAmount == 3 && rowsAmount == 2) { rowMulti = 42.00; }
		else if (rowAmount == 4 && rowsAmount == 2) { rowMulti = 47.25; }
		else if (rowAmount == 5 && rowsAmount == 2) { rowMulti = 52.50; }
		else if (rowAmount == 6 && rowsAmount == 2) { rowMulti = 57.75; }
		else if (rowAmount == 7 && rowsAmount == 2) { rowMulti = 63.00; }
		else if (rowAmount == 8 && rowsAmount == 2) { rowMulti = 68.25; }
		else if (rowAmount == 9 && rowsAmount == 3) { rowMulti = 73.50; }
		else if (rowAmount == 0 && rowsAmount == 3) { rowMulti = 47.25; }
		else if (rowAmount == 1 && rowsAmount == 3) { rowMulti = 61.43; }
		else if (rowAmount == 2 && rowsAmount == 3) { rowMulti = 75.60; }
		else if (rowAmount == 3 && rowsAmount == 3) { rowMulti = 89.78; }
		else if (rowAmount == 4 && rowsAmount == 3) { rowMulti = 103.95; }
		else if (rowAmount == 5 && rowsAmount == 3) { rowMulti = 118.13; }
		else if (rowAmount == 6 && rowsAmount == 3) { rowMulti = 132.30; }
		else if (rowAmount == 7 && rowsAmount == 3) { rowMulti = 146.48; }
		else if (rowAmount == 8 && rowsAmount == 3) { rowMulti = 160.65; }
		else if (rowAmount == 9 && rowsAmount == 3) { rowMulti = 174.83; }
		document.getElementById('row-multiplier').innerHTML = rowMulti;
	}
	function twoVsRow() {
		var row = $("#row-multiplier").text();
		var two = $("#two-prong-multiplier").text();
		if (row > two) { 
			document.getElementById('choice').innerHTML = "Row";
		}
		else if (row < two) { 
			document.getElementById('choice').innerHTML = "Two-Prong Attack";
		}
		else if (row == two) {
			document.getElementById('choice').innerHTML = "Either. Both happen to the be the same.";
		}
	}


	$('#two-prong-slider').on('slide', function(){
		calcTwo();
		twoVsRow();
	});
	$('#chain-slider').on('slide', function(){
		calcTwo();
		twoVsRow();
	});
	$('#row-enhance-slider').on('slide', function(){
		calcRow();
		twoVsRow();
	});
	$('#row-slider').on('slide', function(){
		calcRow();
		twoVsRow();
	});


});
