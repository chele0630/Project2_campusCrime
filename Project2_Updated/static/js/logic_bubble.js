// Defining graph area and margins
var svgWidth = 1000;
var svgHeight = 500;
var margin = {top: 20, right: 40, bottom: 150, left: 100};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//append a div classed chart, svg element and group to scatter chart
var chart = d3.select("#dataviz");
var svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//initial axis parameters
var chosen_xAxis = "Overall Crime Rate";
var chosen_yAxis = "Total";

//function: update xScale variable when clicking on particular axis label
function xScale(censusDB, chosen_xAxis) {
    var X_linearScale = d3.scaleLinear()
        .domain([d3.min(censusDB, d => d[chosen_xAxis]) * 0.8,
            d3.max(censusDB, d => d[chosen_xAxis]) * 1.2])
        .range([0, width]);

    return X_linearScale;
}

//function: update yScale variable when clicking on particular axis label
function yScale(censusDB, chosen_yAxis) {
    var Y_linearScale = d3.scaleLinear()
        .domain([d3.min(censusDB, d => d[chosen_yAxis]) * 0.8,
            d3.max(censusDB, d => d[chosen_yAxis]) * 1.2])
        .range([height, 0]);

    return Y_linearScale;
}

// Add a scale for bubble size
var z = d3.scaleLinear()
.domain([200000, 13100000000])
.range([ 15, 40000]);

// Add a scale for bubble color
var myColor = d3.scaleOrdinal()
.domain(["5 stars", "4 stars", "3 stars", "2 stars", "1 star"])
.range(d3.schemeSet2);

//function: update X axis when clicking on particular axis label
function xAxisRender(newXScale, x_axis) {
    var axisX = d3.axisBottom(newXScale);
    x_axis.transition()
        .duration(1000)
        .call(axisX);

    return x_axis;
}

//function: update Y axis when clicking on particular axis label
function YAxisRender(newYScale, y_axis) {
    var axisY = d3.axisLeft(newYScale);
    y_axis.transition()
        .duration(1000)
        .call(axisY);

    return y_axis;
}

//function: update circles data with transition 
function renderCircles(circlesGroup, newXScale, chosen_xAxis, newYScale, chosen_yAxis) {

    circlesGroup.transition()
        .duration(555)
        .attr("cx", CrimeDataSum => newXScale(CrimeDataSum[chosen_xAxis]))
        .attr("cy", CrimeDataSum => newYScale(CrimeDataSum[chosen_yAxis]));

    return circlesGroup;
}

//function: update state labels with a transition to new 
function renderText(textGroup, newXScale, chosen_xAxis, newYScale, chosen_yAxis) {

    textGroup.transition()
        .duration(555)
        .attr("x", d => newXScale(d[chosen_xAxis]))
        .attr("y", d => newYScale(d[chosen_yAxis]));

    return textGroup;
}
//function: X axis style tooltip
function styleX(value, chosen_xAxis) {

    //style update upon label selection
    //poverty
    if (chosen_xAxis === 'Overall Crime Rate') {
        return `${value}`;
    }
    //income
    else if (chosen_xAxis === 'Personal Crime Rate') {
        return `${value}`;
    }
    //age 
    else {
        return `${value}`;
    }
}

// function: update circles with new tooltip
function updateToolTip(chosen_xAxis, chosen_yAxis, circlesGroup) {

    //select x label
    //poverty
    if (chosen_xAxis === 'Overall Crime Rate') {
        var xLabel = "Overall Crime Rate:";
    }
    //household income 
    else if (chosen_xAxis === 'Personal Crime Rate') {
        var xLabel = "Personal Crime Rate:";
    }
    //age
    else {
        var xLabel = "Property Crime Rate:";
    }

    //select y label
    //percentage without healthcare
    if (chosen_yAxis === 'Total') {
        var yLabel = "Reported Incidents 17:"
    }
    //percentage obese
    else if (chosen_yAxis === 'Total') {
        var yLabel = "Reported Incidents 16:"
    }
    //smoking percentage
    else {
        var yLabel = "Reported Incidents 15:"
    }

    //create tooltip
    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        //.style("fill", function (d) { return myColor(d.Rating); } )
        .offset([-8, 0])
        .html(function(d) {
            //return (`${d.State}<br>${xLabel} ${styleX(d[chosen_xAxis], chosen_xAxis)}<br>${yLabel} ${d[chosen_yAxis]}`);
            return (`${d.State}<br>${xLabel} ${d[chosen_xAxis]}`);
        });

    circlesGroup.call(toolTip);

    //add events
    circlesGroup.on("mouseover", toolTip.show)
    .on("mouseout", toolTip.hide);

    return circlesGroup;
}

//retrieve csv data & excute script...
d3.csv("../static/data/CrimeDataSum.csv").then(function(censusDB) {

    console.log(censusDB);

    //parse data
    censusDB.forEach(function(CrimeDataSum) {
        CrimeDataSum.Total = +CrimeDataSum.Total;
        CrimeDataSum.PERSONAL17 = +CrimeDataSum.PERSONAL17;
        CrimeDataSum.PROPERTY17 = +CrimeDataSum.PROPERTY17;
        CrimeDataSum.CrimeRate2017 = +CrimeDataSum.CrimeRate2017;
        CrimeDataSum.CrimeRate2016 = +CrimeDataSum.CrimeRate2016;
        CrimeDataSum.CrimeRate2015 = +CrimeDataSum.CrimeRate2015;
    });

    //create first linear scales
    var X_linearScale = xScale(censusDB, chosen_xAxis);
    var Y_linearScale = yScale(censusDB, chosen_yAxis);

    //create initial axis functions
    var axisX = d3.axisBottom(X_linearScale);
    var axisY = d3.axisLeft(Y_linearScale);

    //append x axis
    var x_axis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(axisX);

    //append y axis
    var y_axis = chartGroup.append("g")
        .classed("y-axis", true)
        .call(axisY);

    //append initial circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(censusDB)
        .enter()
        .append("circle")
        .classed("stateCircle", true)
        .attr("cx", d => X_linearScale(d[chosen_xAxis]))
        .attr("cy", d => Y_linearScale(d[chosen_yAxis]))
        .attr("r", function (d) { return z(d.Total); } )
        .style("fill", function (d) { return myColor(d.Rating); } )
        //.attr("r", 15)
        .attr("opacity", ".7");

    //append initial text
    // var textGroup = chartGroup.selectAll(".stateText")
    //     .data(censusDB)
    //     .enter()
    //     .append("text")
    //     .classed("stateText", true)
    //     .attr("x", d => X_linearScale(d[chosen_xAxis]))
    //     .attr("y", d => Y_linearScale(d[chosen_yAxis]))
    //     .attr("dy", 3)
    //     .attr("font-size", "10px")
    //     .text(function(d){return d.State});

    //create group for 3 x-axis labels
    var xLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20 + margin.top})`);

    var povertyLabel = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("active", true)
        .attr("x", 0)
        .attr("y", 20)
        .attr("value", "Overall Crime Rate")
        .text("Overall Crime Rate (per 1,000)");

    var incomeLabel = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 60)
        .attr("value", "Personal Crime Rate")
        .text("Personal Crime Rate")
        
    var ageLabel = xLabelsGroup.append("text")
        .classed("aText", true)
        .classed("inactive", true)
        .attr("x", 0)
        .attr("y", 40)
        .attr("value", "Property Crime Rate")
        .text("Property Crime Rate")

    
    //create group for 3 y-axis labels
    var yLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${0 - margin.left/1.5}, ${(height/2)})`);

    var healthcareLabel = yLabelsGroup.append("text")
        .classed("aText", true)
        .classed("active", true)
        .attr("x", 0)
        .attr("y", 0 - 20)
        .attr("dy", "1em")
        .attr("transform", "rotate(-90)")
        .attr("value", "Total")
        .text("Total Student Population");

    // var obesityLabel = yLabelsGroup.append("text")
    //     .classed("aText", true)
    //     .classed("inactive", true)
    //     .attr("x", 0)
    //     .attr("y", 0 - 60)
    //     .attr("dy", "1em")
    //     .attr("transform", "rotate(-90)")
    //     .attr("value", "Total")
    //     .text("Obese (%)");
        
    // var smokesLabel = yLabelsGroup.append("text")
    //     .classed("aText", true)
    //     .classed("inactive", true)
    //     .attr("x", 0)
    //     .attr("y", 0 - 40)
    //     .attr("dy", "1em")
    //     .attr("transform", "rotate(-90)")
    //     .attr("value", "Total")
    //     .text("Smokes (%)");

    //function: update tooltip data
    var circlesGroup = updateToolTip(chosen_xAxis, chosen_yAxis, circlesGroup);

    //x axis event listeners
    xLabelsGroup.selectAll("text")
        .on("click", function() {
            //get value of selected label
            var value = d3.select(this).attr("value");

            //if selected value is not equal to current value
            if (value != chosen_xAxis) {

                //update chosen_xAxis with true value
                chosen_xAxis = value;

                //update xScale with true value
                X_linearScale = xScale(censusDB, chosen_xAxis);

                //updated x_axis transition
                x_axis = xAxisRender(X_linearScale, x_axis);

                //update circles content with current selection value
                circlesGroup = renderCircles(circlesGroup, X_linearScale, chosen_xAxis, Y_linearScale, chosen_yAxis);

                //text data update
                textGroup = renderText(textGroup, X_linearScale, chosen_xAxis, Y_linearScale, chosen_yAxis);

                // //tooltip data update
                // circlesGroup = updateToolTip(chosen_xAxis, chosen_yAxis, circlesGroup);

                //tooltip data update
                circlesGroup = updateToolTip(chosen_xAxis, chosen_yAxis, circlesGroup);

                //text label class transition to bold
                if (chosen_xAxis === "Overall Crime Rate") {
                    povertyLabel.classed("active", true).classed("inactive", false);
                    ageLabel.classed("active", false).classed("inactive", true);
                    incomeLabel.classed("active", false).classed("inactive", true);
                }
                else if (chosen_xAxis === "Personal Crime Rate") {
                    povertyLabel.classed("active", false).classed("inactive", true);
                    ageLabel.classed("active", true).classed("inactive", false);
                    incomeLabel.classed("active", false).classed("inactive", true);
                }
                else {
                    povertyLabel.classed("active", false).classed("inactive", true);
                    ageLabel.classed("active", false).classed("inactive", true);
                    incomeLabel.classed("active", true).classed("inactive", false);
                }
            }
        });

    //y axis labels event listener
    yLabelsGroup.selectAll("text")
    .on("click", function() {
        //get value of selected label
        var value = d3.select(this).attr("value");

        //if selected value is not equal to current value
        if (value != chosen_yAxis) {

            //update chosen_yAxis with true value
            chosen_yAxis = value;

            //update yScale with true value
            Y_linearScale = yScale(censusDB, chosen_yAxis);

            //updated y_axis transition
            y_axis = YAxisRender(Y_linearScale, y_axis);

            //update circles content with current selection value
            circlesGroup = renderCircles(circlesGroup, X_linearScale, chosen_xAxis, Y_linearScale, chosen_yAxis);

            //text data update
            textGroup = renderText(textGroup, X_linearScale, chosen_xAxis, Y_linearScale, chosen_yAxis)

            //tooltip data update
            circlesGroup = updateToolTip(chosen_xAxis, chosen_yAxis, circlesGroup);

            //text label class transition to bold
            if (chosen_yAxis === "Total") {
                obesityLabel.classed("active", true).classed("inactive", false);
                smokesLabel.classed("active", false).classed("inactive", true);
                healthcareLabel.classed("active", false).classed("inactive", true);
            }
            else if (chosen_yAxis === "Total") {
                obesityLabel.classed("active", false).classed("inactive", true);
                smokesLabel.classed("active", true).classed("inactive", false);
                healthcareLabel.classed("active", false).classed("inactive", true);
            }
            else {
                obesityLabel.classed("active", false).classed("inactive", true);
                smokesLabel.classed("active", false).classed("inactive", true);
                healthcareLabel.classed("active", true).classed("inactive", false);
            }
        }
    });
  
});