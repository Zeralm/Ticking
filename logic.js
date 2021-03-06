google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(watchout);

function watchout(){
	drawChart();
	setInterval(drawChart,5000);
};

function drawChart() {
  console.log("wut");
  var dato = new Date();
  var raw_hours = dato.getHours();
  var raw_minutes = dato.getMinutes();
  var raw_seconds = dato.getSeconds();
  var mew = raw_minutes-0;
  let how = raw_hours-9+mew/60+raw_seconds/3600;
  if (how < 0){
		how = 0;
  };
  var remaining = 15-how-1
  
  if (remaining < 0){
		var cooldown = remaining +1;	
		remaining = 0;
		
  }else{
	var cooldown = 1;
  };
  console.log(remaining)
  
  console.log(remaining)
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Used', how],
  ['Remaining', remaining],
  ['Cooldown', cooldown]
  
]);

  var options = {'width':window.innerWidth*0.9, 'height':window.innerHeight*0.9, 'chartArea':{'top':20,'width':'100%','height':'90%'},'colors':['transparent','#ccff00','cyan'], 'legend':{'position':'none'},'backgroundColor':{'fill':'#1E1E1E', 'stroke':'#000000'},'pieSliceBorderColor':{"color":'#1E1E1E' }, 'pieSliceTextStyle':{"color":"#1E1E1E" }};

  
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
 
};