// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
    return parseFloat(b.Total15) - parseFloat(a.Total15);
  });
  
  // Slice the first 25 objects for plotting
  //data = data.slice(0, 25);
  
  // Reverse the array due to Plotly's defaults
  // data = data.reverse();
  
  // Trace1 for the Greek Data
  var trace1 = {
      x: data.map(row => row.State),
      y: data.map(row => row.Total15),
      text: data.map(row => row.State),
      name: "2015",
      type: "bar"
    };
    
    // Trace 2 for the Roman Data
    var trace2 = {
      x: data.map(row => row.State),
      y: data.map(row => row.Total16),
      text: data.map(row => row.State),
      name: "2016",
      type: "bar"
    };
    
    // Trace 3 for the Roman Data
    var trace3 = {
      x: data.map(row => row.State),
      y: data.map(row => row.Total17),
      text: data.map(row => row.State),
      name: "2017",
      type: "bar"
      };
    // Combining both traces
    var data = [trace1, trace2, trace3];
    
    // Apply the group barmode to the layout
    var layout = {
      title: "State Total Crimes per Year",
      barmode: "group"
    };
    
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", data, layout);
