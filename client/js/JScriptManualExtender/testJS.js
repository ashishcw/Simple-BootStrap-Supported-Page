const Path = "js\\JScriptManualExtender\\data.csv";

var chart_dict = {};

var priority_Dict = {};

var status_Dict = {};

//Color definition for pie chart
var backgroundColor = ["#0D47A1", "#FFD54F", "#2196F3", "#A16045",
    "#8AA715", "#3943CF", "#E1BDDE", "#C743C2",
    "#DA8A11", "#43C971", "#65DF08", "#37E8D6",
    "#D1A4C0", "#882810", "#87603F", "#289005",
    "#84B6E2", "#3FA5A2", "#4F58D7", "#69E4EB"];
var hoverBackgroundColor = [];
var borderColor = [];

function createDictionary(dict, data) {

    var key = data.replace(" ", "");
    if (dict[key] >= 0) {
        dict[key] = dict[key] + 1;
    } else {
        dict[key] = 1;
    }

    //result
    //key:value
    //count: 5
}

function randomColorPick_Function(loop_time) {



    // For every data we have ...
    for (var i = 0; i < loop_time; i++) {

        // We generate a random color
        //var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
        var color = "rgba(" + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + ",";

        // We push this new color to both background and border color arrays
        // .. a lighter color is used for the background

        // backgroundColor.push(color + "0.2)");
        // hoverBackgroundColor.push(color + "0.5)");
        // borderColor.push(color + "1)");

        //backgroundColor.push(color + "0.7)");
        hoverBackgroundColor.push(color + "0.5)");
        borderColor.push(color + "1)");
    }

    // We update the chart bars color properties
    // chart.config.data.datasets[0].backgroundColor = backgroundColor;
    // chart.config.data.datasets[0].backgroundColor = hoverBackgroundColor;
    // chart.config.data.datasets[0].borderColor = borderColor;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function ChartDefinition() {

    $(document).ready(function () {
        $.ajax({
            url: Path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 4) {
                            //Category_Wise_Data(cell_data[cell_Count]);
                            //console.log(cell_data[cell_Count]);
                            createDictionary(chart_dict, cell_data[cell_Count]);
                        }
                    }
                }

                //console.log(chart_dict);



                var canvasP = document.getElementById("initial_Chart_Display");
                var ctxP = canvasP.getContext('2d');

                var initial_Chart = new Chart(ctxP, {
                    // type: 'bar',
                    type: 'pie',
                    data: {
                        labels: [],
                        datasets: [{
                            data: [],
                            backgroundColor: ["#0D47A1", "#FFD54F", "#2196F3", "#37E8D6",
                                "#8AA715", "#A16045", "#E1BDDE", "#3943CF",
                                "#DA8A11", "#43C971", "#65DF08", "#37E8D6",
                                "#D1A4C0", "#882810", "#87603F", "#C743C2",
                                "#84B6E2", "#3FA5A2", "#4F58D7", "#69E4EB"],
                        }]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: true,
                        }
                    }
                });



                var keys = Object.keys(chart_dict);

                for (var i = 0; i < keys.length; i++) {
                    initial_Chart.data.labels.push([keys[i]]);
                    randomColorPick_Function(100);
                    initial_Chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(chart_dict[keys[i]]);
                        dataset.hoverBackgroundColor = (hoverBackgroundColor[getRndInteger(0, hoverBackgroundColor.length)]);
                    });
                }

                initial_Chart.update();
            }
        });
    });

}


function Priority_Count_Table_Handler(table_id) {
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                var csv_table_data = '<table class="table table-bordered table-striped">';
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    csv_table_data += '<tr>';

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 6) {
                            //Category_Wise_Data(cell_data[cell_Count]);
                            //console.log(cell_data[cell_Count]);
                            createDictionary(priority_Dict, cell_data[cell_Count]);
                        }
                    }
                }
                //console.log(priority_Dict);

                var keys = Object.keys(priority_Dict);

                for (var i = 0; i < keys.length; i++) {
                    //initial_Chart.data.labels.push([keys[i]]);
                    csv_table_data += '<td>' + [keys[i]] + '</td>';
                    csv_table_data += '<td>' + priority_Dict[keys[i]] + '</td>';
                    csv_table_data += '</tr>';
                }

                
                csv_table_data += '</table>';
                //tbl = $('#myTable').DataTable();
                $(`#${table_id}`).html(csv_table_data);


            }
        });
    });
}


function Status_Count_Table_Handler(table_id) {
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                var csv_table_data = '<table class="table table-bordered table-striped">';
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    csv_table_data += '<tr>';

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 7) {
                            //Category_Wise_Data(cell_data[cell_Count]);
                            //console.log(cell_data[cell_Count]);
                            createDictionary(status_Dict, cell_data[cell_Count]);
                        }
                    }
                }
                console.log(status_Dict);

                var keys = Object.keys(status_Dict);

                for (var i = 0; i < keys.length; i++) {
                    //initial_Chart.data.labels.push([keys[i]]);
                    csv_table_data += '<td>' + [keys[i]] + '</td>';
                    csv_table_data += '<td>' + status_Dict[keys[i]] + '</td>';
                    csv_table_data += '</tr>';
                }

                
                csv_table_data += '</table>';
                //tbl = $('#myTable').DataTable();
                $(`#${table_id}`).html(csv_table_data);


            }
        });
    });
}