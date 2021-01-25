//var path = "js\\JScriptManualExtender\\data-temp.csv";

var dict = {};

//Color definition for pie chart 20 colors
var backgroundColor = ["#0D47A1", "#FFD54F", "#2196F3", "#A16045",
    "#8AA715", "#3943CF", "#E1BDDE", "#C743C2",
    "#DA8A11", "#43C971", "#65DF08", "#37E8D6",
    "#D1A4C0", "#882810", "#87603F", "#289005",
    "#84B6E2", "#3FA5A2", "#4F58D7", "#69E4EB"];

var hoverBackgroundColor = [];
var borderColor = [];



//To create the initial dictionary
function createDictionary(data) {

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

    for (var i = 0; i < loop_time; i++) {

        //generate a random color

        //var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
        var color = "rgba(" + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + ",";

        // backgroundColor.push(color + "0.2)");
        // hoverBackgroundColor.push(color + "0.5)");
        // borderColor.push(color + "1)");

        //backgroundColor.push(color + "0.7)");
        hoverBackgroundColor.push(color + "0.5)");
        borderColor.push(color + "1)");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function CustomChart_Category() {
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 8) {
                            //Category_Wise_Data(cell_data[cell_Count]);
                            createDictionary(cell_data[cell_Count]);
                        }
                    }
                }


                var canvasP = document.getElementById("initial_Chart_Display");
                var ctxP = canvasP.getContext('2d');

                var initial_Chart = new Chart(ctxP, {
                    // type: 'bar',
                    type: 'pie',
                    data: {
                        labels: [],

                        datasets: [{                            
                            data: [],
                            backgroundColor: backgroundColor,
                            //hoverBackgroundColor: ["#0097A7", "#FFCCBC", "#4DD0E1"]                            
                        }]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: true,                            
                        },                        
                        title: {
                            display: false,
                            text: 'Categorical Display'
                        }
                    }
                });
                var keys = Object.keys(dict);

                for (var i = 0; i < keys.length; i++) {
                    initial_Chart.data.labels.push([keys[i]]);
                    randomColorPick_Function(100);
                    initial_Chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(dict[keys[i]]);
                        dataset.hoverBackgroundColor = (hoverBackgroundColor[getRndInteger(0, hoverBackgroundColor.length)]);
                    });                   
                }

                initial_Chart.update();
                // var initial_Chart = new Chart(ctxP, {
                //     // type: 'bar',
                //     type: 'pie',
                //     data: {
                //         labels: ["Infrastructure", "Product", "Other"],

                //         datasets: [{
                //             // data: [10, 5, 10, 20, 50, 70, 50],
                //             //data: [weekly_Count, monthly_Count, quarterly_Count, half_Yearly_Count, yearly_Count, 7],
                //             label: ['CSV Entries'],
                //             data: [Infrastructure_Count, Product_Count, Other_Count],
                //             backgroundColor: ["#0D47A1", "#FFD54F", "#2196F3"],
                //             hoverBackgroundColor: ["#0097A7", "#FFCCBC", "#4DD0E1"]
                //             // backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1"],
                //             // hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
                //         }]
                //     },
                //     options: {
                //         responsive: true,
                //         legend: {
                //             display: true,
                //             //position: "right",
                //         },
                //         scales: {
                //             // yAxes: [{
                //             //     ticks: {
                //             //         beginAtZero: true
                //             //     }
                //             // }]
                //         },
                //         title: {
                //             display: false,
                //             text: 'Historical Chart'
                //         }
                //     }
                // });

                // canvasP.onclick = function (e) {
                //     var slice = initial_Chart.getElementAtEvent(e);
                //     if (!slice.length) return;

                //     if (confirm('Open Table for Category Tab?')) {
                //         window.open('Category_Table.html');
                //     }

                // }
            }
        });
    });
}

// var weekly_Count = 0;
// var monthly_Count = 0;
// var quarterly_Count = 0;
// var half_Yearly_Count = 0;
// var yearly_Count = 0;
// var all_Count = 0;

// function CompareDate(target_date) {
//     var todayDate = new Date(); //Today Date
//     var dateOne = new Date(target_date);


//     var date = new Date();
//     var weekly = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
//     var monthly = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
//     var quarterly = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());
//     var halfyearly = new Date(date.getFullYear(), date.getMonth() - 6, date.getDate());
//     var morethanyear = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());


//     if (dateOne > weekly) {
//         weekly_Count += 1;
//     }
//     else if (dateOne > monthly) {
//         monthly_Count += 1;
//     }
//     else if (dateOne > quarterly) {
//         quarterly_Count += 1;
//     }
//     else if (dateOne > halfyearly) {
//         half_Yearly_Count += 1;
//     }
//     else if (dateOne > morethanyear) {
//         yearly_Count += 1;
//     }

//     all_Count++;


//     if (todayDate < dateOne) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function CustomChart() {
//     $(document).ready(function () {
//         $.ajax({
//             url: "js\\JScriptManualExtender\\data.csv",
//             dataType: "text",
//             success: function (data) {
//                 var csv_data = data.split(/\r?\n|\r/);
//                 for (var count = 1; count < csv_data.length; count++) {

//                     var cell_data = csv_data[count].split(",");

//                     for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

//                         if (cell_Count === 6) {
//                             if (CompareDate(cell_data[cell_Count])) {
//                                 console.log(cell_data[cell_Count]);
//                             }
//                         }
//                     }
//                 }


//                 var canvasP = document.getElementById("initial_Chart_Display");
//                 var ctxP = canvasP.getContext('2d');
//                 var initial_Chart = new Chart(ctxP, {
//                     // type: 'bar',
//                     type: 'pie',
//                     data: {
//                         labels: ["Week", "Month", "Last 3 Months", "Last 6 Months", "Last 1 Year", "All"],

//                         datasets: [{
//                             // data: [10, 5, 10, 20, 50, 70, 50],
//                             //data: [weekly_Count, monthly_Count, quarterly_Count, half_Yearly_Count, yearly_Count, 7],
//                             label: ['CSV Entries'],
//                             data: [weekly_Count, monthly_Count, quarterly_Count, half_Yearly_Count, yearly_Count, all_Count],
//                             backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1"],
//                             hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
//                         }]
//                     },
//                     options: {
//                         responsive: true,
//                         legend: {
//                             display: true,
//                             //position: "right",
//                         },
//                         scales: {
//                             // yAxes: [{
//                             //     ticks: {
//                             //         beginAtZero: true
//                             //     }
//                             // }]
//                         },
//                         title: {
//                             display: true,
//                             text: 'Historical Chart'
//                         }
//                     }
//                 });

//                 canvasP.onclick = function (e) {
//                     var slice = initial_Chart.getElementAtEvent(e);
//                     if (!slice.length) return;
//                     var label = slice[0]._model.label;
//                     switch (label) {
//                         case 'Week':
//                             //alert('Open Table for Week Tab?');
//                             if (confirm('Open Table for Week Tab?')) {
//                                 window.open('Weekly_Table.html');
//                             }
//                             break;

//                         case 'Month':
//                             if (confirm('Open Table for Month Tab?')) {
//                                 window.open('Monthly_Table.html');
//                             }
//                             break;

//                         case 'Last 3 Months':
//                             if (confirm('Open Table for Last 3 Months Tab?')) {
//                                 window.open('Last_3_Months_Table.html');
//                             }
//                             break;

//                         case 'Last 6 Months':
//                             if (confirm('Open Table for Last 6 Months Tab?')) {
//                                 window.open('Last_6_Months_Table.html');
//                             }
//                             break;

//                         case 'Last 1 Year':
//                             if (confirm('Open Table for Last 1 Year Tab?')) {
//                                 window.open('Last_1_Year_Table.html');
//                             }
//                             break;

//                         case 'More Than 1 Year':
//                             if (confirm('Open Table for More Than 1 Year Tab?')) {
//                                 window.open('More_Than_1_Year_Table.html');
//                             }
//                             break;

//                         case 'All':
//                             if (confirm('Open Table for All Tabs?')) {
//                                 window.open('All_Table.html');
//                             }
//                             break;

//                     }
//                 }
//             }
//         });
//     });
// }


//var dictionary = {};

// var Infrastructure_Count = 10;
// var Product_Count = 0;
// var Other_Count = 0;

// function Category_Wise_Data(target_data) {

//     if (target_data == "Infrastructure") {
//         Infrastructure_Count++;
//     }

//     if (target_data == "Product") {
//         Product_Count++;
//     }

//     if (target_data == "Other") {
//         Other_Count++;
//     }


//     return Infrastructure_Count, Product_Count, Other_Count;

// }


