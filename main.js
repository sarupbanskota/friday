dayScore = {
		"1": 4, 
		"2": 3, 
		"3": 2, 
		"4": 1, 
		"5": 0, 
		"6": 6, 
		"0": 5
	}
today = new Date;
today = today.getDay();
fridayScore = ((6 - dayScore[today]) / 6).toFixed(2);
console.log(fridayScore);

var circle = new ProgressBar.Circle('#progressbar-container', {
    color: '#FCB03C',
    strokeWidth: 10,
    trailWidth: 3,
    duration: 1500,
    text: {
      value: '0'
    },
    step: function(state, bar) {
      bar.setText("Today's Fridaaay score: " + fridayScore);
    }
});

circle.animate(fridayScore);