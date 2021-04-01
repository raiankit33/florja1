
// csv file we want to load
var filename = './assets/data/data.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
  // let's see if our data loaded correctly

  // empty lists for our data and the labels
  let data =   [];
  let labels = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<loadedData.length; i++) {
    // console.log(loadedData[i]);
    
    // get the year and mean temp for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let year =     loadedData[i].year;
    let meanTemp = loadedData[i].rcp45_weighted_mean;
    // console.log(meanTemp);
    
    // add the year to our labels
    labels.push(year);
    
    // and mean temp to the data
    data.push(meanTemp);    
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      
      labels: labels,  // the labels we loaded!
      datasets: [{
       
        data: data,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(100,100,100)',
        backgroundColor:'red'
      }]
    }
  };
  
  // with all that done, we can create our chart!
  let chart = new Chart(document.getElementById('canvas'), options);
});

