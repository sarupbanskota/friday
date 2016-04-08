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

if(fridayScore == 1){
  var fridayMarkup = "<img class='friday-banner' src='images/friday.jpg'></img>";
  container = document.getElementById('progressbar-container');
  container.innerHTML += fridayMarkup;
} else{

  var circle = new ProgressBar.Circle('#progressbar-container', {
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
  circle.animate(fridayScore,
    {
      from: { color: '#eee' },
      to: { color: '#000' },
    }
  );
}
