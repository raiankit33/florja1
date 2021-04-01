
// csv file we want to load
var filename = './assets/data/data.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(lodData) {
  
  // let's see if our data loaded correctly

  // empty lists for our data and the labels
  let data =   [];
  let labels = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<lodData.length; i++) {
    // console.log(loadedData[i]);
    
    // get the year and mean temp for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let year =     lodData[i].year;
    let meanTemp = lodData[i].rcp45_weighted_mean;
    // console.log(meanTemp);
    
    // add the year to our labels
  
    labels.push(year);
    // and mean temp to the data
    data.push(meanTemp);    
  }
  
  // basic line chart settings
  let options = {
    type: 'bar',
    data: {
        labels: labels,  // the labels we loaded!
      datasets: [{
        data: data,  
           // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'blue',
        backgroundColor:'skyblue'

      }]
    }
  };
  
  // with all that done, we can create our chart!
  let mChart = new Chart(document.getElementById('myChart'), options);
});

