function CustomChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

function CustomChart_2() {
    var canvasP = document.getElementById("myChart");
    var ctxP = canvasP.getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'bar',
        data: {
            labels: ["Week", "Month", "Last 3 Months", "Last 6 Months", "Last 1 Year", "More Than 1 Year", "All"],
            datasets: [{
                // data: [10, 5, 10, 20, 50, 70, 50],
                data: [1, 5, 3, 2, 5, 7, 8],
                backgroundColor: ["#64B5F6", "#FFD54F", "#2196F3", "#FFC107", "#1976D2", "#FFA000", "#0D47A1"],
                hoverBackgroundColor: ["#B2EBF2", "#FFCCBC", "#4DD0E1", "#FF8A65", "#00BCD4", "#FF5722", "#0097A7"]
            }]
        },
        options: {
            legend: {
                display: true,
                position: "right"
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