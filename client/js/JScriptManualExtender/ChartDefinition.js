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


                Chart.pluginService.register({
                    beforeDraw: function (chart) {
                        if (chart.config.options.elements.center) {
                            // Get ctx from string
                            var ctx = chart.chart.ctx;

                            // Get options from the center object in options
                            var centerConfig = chart.config.options.elements.center;
                            var fontStyle = centerConfig.fontStyle || 'Arial';
                            var txt = centerConfig.text;
                            var color = centerConfig.color || '#000';
                            var maxFontSize = centerConfig.maxFontSize || 75;
                            var sidePadding = centerConfig.sidePadding || 20;
                            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                            // Start with a base font of 30px
                            ctx.font = "30px " + fontStyle;

                            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                            var stringWidth = ctx.measureText(txt).width;
                            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

                            // Find out how much the font can grow in width.
                            var widthRatio = elementWidth / stringWidth;
                            var newFontSize = Math.floor(30 * widthRatio);
                            var elementHeight = (chart.innerRadius * 2);

                            // Pick a new font size so it will not be larger than the height of label.
                            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
                            var minFontSize = centerConfig.minFontSize;
                            var lineHeight = centerConfig.lineHeight || 25;
                            var wrapText = false;

                            if (minFontSize === undefined) {
                                minFontSize = 20;
                            }

                            if (minFontSize && fontSizeToUse < minFontSize) {
                                fontSizeToUse = minFontSize;
                                wrapText = true;
                            }

                            // Set font settings to draw it correctly.
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
                            ctx.font = fontSizeToUse + "px " + fontStyle;
                            ctx.fillStyle = color;

                            if (!wrapText) {
                                ctx.fillText(txt, centerX, centerY);
                                return;
                            }

                            var words = txt.split(' ');
                            var line = '';
                            var lines = [];

                            // Break words up into multiple lines if necessary
                            for (var n = 0; n < words.length; n++) {
                                var testLine = line + words[n] + ' ';
                                var metrics = ctx.measureText(testLine);
                                var testWidth = metrics.width;
                                if (testWidth > elementWidth && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                } else {
                                    line = testLine;
                                }
                            }

                            // Move the center up depending on line height and number of lines
                            centerY -= (lines.length / 2) * lineHeight;

                            for (var n = 0; n < lines.length; n++) {
                                ctx.fillText(lines[n], centerX, centerY);
                                centerY += lineHeight;
                            }
                            //Draw text in center
                            ctx.fillText(line, centerX, centerY);
                        }
                    }
                });



                var canvasP = document.getElementById("initial_Chart_Display");
                var ctxP = canvasP.getContext('2d');

                var initial_Chart = new Chart(ctxP, {
                    // type: 'bar',
                    //type: 'pie',
                    //type: 'doughnut',

                    type: 'doughnut',
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
                        elements: {
                            center: {
                                text: '',
                                //color: '#FF6384', // Default is #000000
                                fontStyle: 'Arial', // Default is Arial
                                sidePadding: 20, // Default is 20 (as a percentage)
                                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                                lineHeight: 25 // Default is 25 (in px), used for when text wraps
                            }
                        },
                        legend: {
                            display: true,
                            position: 'left',
                            labels: {
                                padding: 20,
                                fontColor: 'black',
                                fontSize: 15,
                                generateLabels: function (chart) {

                                    var data = chart.data;
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map(function (label, i) {
                                            var meta = chart.getDatasetMeta(0);
                                            var ds = data.datasets[0];
                                            var arc = meta.data[i];
                                            var custom = arc && arc.custom || {};
                                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                            var arcOpts = chart.options.elements.arc;
                                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                            // We get the value of the current label
                                            var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

                                            return {
                                                // Instead of `text: label,`
                                                // We add the value to the string
                                                text: label + " : " + value,
                                                fillStyle: fill,
                                                strokeStyle: stroke,
                                                lineWidth: bw,
                                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                                index: i
                                            };
                                        });
                                    } else {
                                        return [];
                                    }
                                }
                            }
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        title: {
                            display: false,
                            text: 'Categorical Display'
                        }
                    },
                    plugins: [{
                        beforeInit: function (chart, options) {
                            chart.legend.afterFit = function () {
                                //this.height += 100; // must use `function` and not => because of `this`
                                this.width -= 120;
                            };
                        },
                    }],

                    // plugins: [{
                    //     beforeInit: function(chart, options) {
                    //       chart.legend.afterFit = function() {
                    //         this.height = this.height + 10;
                    //         this.width = this.width - 200;
                    //       };
                    //     }
                    //   }],
                });
                var keys = Object.keys(dict);
                var total = 0;

                for (var i = 0; i < keys.length; i++) {
                    initial_Chart.data.labels.push([keys[i]]);
                    randomColorPick_Function(100);
                    initial_Chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(dict[keys[i]]);
                        total += dict[keys[i]];
                        dataset.hoverBackgroundColor = (hoverBackgroundColor[getRndInteger(0, hoverBackgroundColor.length)]);
                    });
                }

                initial_Chart.options.elements.center.text = ('Count : ' + total);

                $(`#chart_Total_Label`).html('Total : ' + total);
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


