// function CustomChart() {
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });

// }

// var weekly_Count = [];
// var monthly_Count = [];
// var quarterly_Count = [];
// var half_Yearly_Count = [];


var weekly_Count = 0;
var monthly_Count = 0;
var quarterly_Count = 0;
var half_Yearly_Count = 0;
var yearly_Count = 0;
var all_Count = 0;

function CompareDate(target_date) {    
    var todayDate = new Date(); //Today Date
    var dateOne = new Date(target_date);
    
    
    var date = new Date();
    var weekly = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
    var monthly = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    var quarterly = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());
    var halfyearly = new Date(date.getFullYear(), date.getMonth() - 6, date.getDate());
    var morethanyear = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
    

    if(dateOne > weekly){
        weekly_Count += 1;
    }
    else if(dateOne > monthly){
        monthly_Count += 1;
    }
    else if(dateOne > quarterly){
        quarterly_Count += 1;
    }
    else if(dateOne > halfyearly){
        half_Yearly_Count += 1;
    }
    else if(dateOne > morethanyear){
        yearly_Count += 1;
    }

    all_Count++;


    if (todayDate < dateOne) {    
         return true;
     }else {    
        return false;
     }
 }    

function CustomChart() {
    $(document).ready(function () {
        $.ajax({
            url: "js\\JScriptManualExtender\\data.csv",
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 6) {
                            if(CompareDate(cell_data[cell_Count])){
                                console.log(cell_data[cell_Count]);
                            }               
                        }
                    }
                }

                console.log("Weekly Count : " + weekly_Count);
                console.log("Monthly Count : " + monthly_Count);
                console.log("Quarterly Count : " + quarterly_Count);
                console.log("Half-Yearly Count : " + half_Yearly_Count);           




                var canvasP = document.getElementById("myChart");
                var ctxP = canvasP.getContext('2d');
                var myPieChart = new Chart(ctxP, {
                    type: 'bar',
                    data: {
                        labels: ["Week", "Month", "Last 3 Months", "Last 6 Months", "Last 1 Year", "All"],
                        datasets: [{
                            // data: [10, 5, 10, 20, 50, 70, 50],
                            //data: [weekly_Count, monthly_Count, quarterly_Count, half_Yearly_Count, yearly_Count, 7],
                            data: [weekly_Count, monthly_Count, quarterly_Count, half_Yearly_Count, yearly_Count, all_Count],
                            backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1"],
                            hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: "right"
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });

                canvasP.onclick = function (e) {
                    var slice = myPieChart.getElementAtEvent(e);
                    if (!slice.length) return; // return if not clicked on slice
                    var label = slice[0]._model.label;
                    switch (label) {
                        // add case for each label/slice
                        case 'Week':
                            alert('Open Table for Week Tab?');
                            //TODO: Add Table page link here
                            window.open('Weekly_Table.html');
                            break;

                        case 'Month':
                            alert('Open Table for Month Tab?');
                            //TODO: Add Table page link here
                            window.open('Monthly_Table.html');
                            break;

                        case 'Last 3 Months':
                            alert('Open Table for Last 3 Months Tab?');
                            //TODO: Add Table page link here
                            window.open('Last_3_Months_Table.html');
                            break;

                        case 'Last 6 Months':
                            alert('Open Table for Last 6 Months Tab?');
                            //TODO: Add Table page link here
                            window.open('Last_6_Months_Table.html');
                            break;

                        case 'Last 1 Year':
                            alert('Open Table for Last 1 Year Tab?');
                            //TODO: Add Table page link here
                            window.open('Last_1_Year_Table.html');
                            break;

                        case 'More Than 1 Year':
                            alert('Open Table for More Than 1 Year Tab?');
                            //TODO: Add Table page link here
                            window.open('More_Than_1_Year_Table.html');
                            break;

                        case 'All':
                            alert('Open Table for All Tabs?');
                            //TODO: Add Table page link here
                            window.open('All_Table.html');
                            break;


                    }
                }
            }
        });
    });
}

