
// column1chart
function fetchDataAndUpdateChart()
    {
        fetch('/get-data/chart-1')         //initiates a request to the server to get data.
        .then(response => response.json())    //processes the response by parsing it as JSON.
        .then(data => {
            updateChart(data);   // takes the parsed JSON data and calls updateChart with it.
        })
        .catch(error => console.error('Error:', error));   //Handles errors if any occur during the fetch operation.
    }
    function updateChart(data){

      am5.ready(function() {

        // Create root element
       
        var root = am5.Root.new("chartdiv");
        
        // Set themes
       
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        // Create chart
       
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true,
          paddingLeft:0,
          paddingRight:1
        }));
        
        // Add cursor
        
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        
        
        // Create axes
        
        var xRenderer = am5xy.AxisRendererX.new(root, { 
          minGridDistance: 30, 
          minorGridEnabled: true
        });
        
        xRenderer.labels.template.setAll({
          rotation: -90,
          centerY: am5.p50,
          centerX: am5.p100,
          paddingRight: 15
        });
        
        xRenderer.grid.template.setAll({
          location: 1
        })
        
        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "status",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {})
        }));
        
        var yRenderer = am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
        
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          renderer: yRenderer
        }));
        
        // Create series
        
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "status",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
          })
        }));
        
        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        series.columns.template.adapters.add("stroke", function (stroke, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        
       
        
        xAxis.data.setAll(data);
        series.data.setAll(data);
        
        
        // Make stuff animate on load
        
        series.appear(1000);
        chart.appear(1000, 100);
        
        });



      }

  
    // chart2column
    function fetchDataAndUpdateChart2()
    {
        fetch('/get_data_chart_2')         //initiates a request to the server to get data.
        .then(response => response.json())    //processes the response by parsing it as JSON.
        .then(data => {
            updateChart2(data);   // takes the parsed JSON data and calls updateChart with it.
        })
        .catch(error => console.error('Error:', error));   //Handles errors if any occur during the fetch operation.
    }
    function updateChart2(data){

      am5.ready(function() {

        var root = am5.Root.new("chartdiv2");
var chart = root.container.children.push( 
  am5percent.PieChart.new(root, {
    layout: root.verticalHorizontal
  }) 
);



// Create series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "value",
    categoryField: "status"
  })
);
series.data.setAll(data);

// Add legend
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  layout: root.horizontalLayout
}));

legend.data.setAll(series.dataItems);

       
        
        });



      }

  




// chart3column

    function fetchDataAndUpdateChart3()
    {
        fetch('/get_data_chart_3')         //nitiates a request to the server to get data.
        .then(response => response.json())    //processes the response by parsing it as JSON.
        .then(data => {
            updateChart3(data);   // takes the parsed JSON data and calls updateChart with it.
        })
        .catch(error => console.error('Error:', error));   //Handles errors if any occur during the fetch operation.
    }
    function updateChart3(data){

      am5.ready(function() {

        // Create root element
    
        var root = am5.Root.new("chartdiv3");
        
        
        // Set themes
       
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        
        // Create chart
        
        var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
          layout: root.verticalLayout
        }));
        
        
        // Create series
        
        var series = chart.series.push(am5percent.PyramidSeries.new(root, {
          orientation: "vertical",
          valueField: "value",
          categoryField: "status"
        }));
        
        series.data.setAll(data);
        // Play initial series animation
     
        series.appear();
        
        
        // Create legend
       
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          marginTop: 15,
          marginBottom: 15
        }));
        
        legend.data.setAll(am5.array.copy(series.dataItems).reverse());
        
        
        // Make stuff animate on load
      
        chart.appear(1000, 1000);
       
        
      


      });
    

          }
      
  

 


// chart4column

function fetchDataAndUpdateChart4()
    {
        fetch('/get_data_chart_4')         //initiates a request to the server to get data.
        .then(response => response.json())    //processes the response by parsing it as JSON.
        .then(data => {
            updateChart4(data);   // takes the parsed JSON data and calls updateChart with it.
        })
        .catch(error => console.error('Error:', error));   //Handles errors if any occur during the fetch operation.
    }
    function updateChart4(data){

      am5.ready(function() {

        // Create root element
        
        var root = am5.Root.new("chartdiv4");
        
        // Set themes
        
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        // Create chart
       
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true,
          paddingLeft:0,
          paddingRight:1
        }));
        
        // Add cursor
      
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        
        
        // Create axes
        
        var xRenderer = am5xy.AxisRendererX.new(root, { 
          minGridDistance: 30, 
          minorGridEnabled: true
        });
        
        xRenderer.labels.template.setAll({
          rotation: -90,
          centerY: am5.p50,
          centerX: am5.p100,
          paddingRight: 15
        });
        
        xRenderer.grid.template.setAll({
          location: 1
        })
        
        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "status",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {})
        }));
        
        var yRenderer = am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
        
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          renderer: yRenderer
        }));
        
        // Create series
       
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "status",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
          })
        }));
        
        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        series.columns.template.adapters.add("stroke", function (stroke, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target));
        });
        
        
       
        
        xAxis.data.setAll(data);
        series.data.setAll(data);
        
        
        // Make stuff animate on load
        
        series.appear(1000);
        chart.appear(1000, 100);
        
        });



      }

   
      

document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart()
});

document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart3()
});

document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart2()
});

document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart4()
});

