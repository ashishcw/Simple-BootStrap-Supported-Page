const path = "js\\JScriptManualExtender\\data.csv";

var priority_Dict = {};

function create_Priority_Dictionary(data) {

    var key = data.replace(" ", "");
    if (priority_Dict[key] >= 0) {
        priority_Dict[key] = priority_Dict[key] + 1;
    } else {
        priority_Dict[key] = 1;
    }

    //result
    //key:value
    //count: 5
}




var Priority_1 = 0;
var Priority_2 = 0;
var Priority_3 = 0;
var Priority_4 = 0;

function Priority_Count_Handler(priority_Type){
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 6) {                            
                            
                            //create_Priority_Dictionary(cell_data[cell_Count]);
                            var label = cell_data[cell_Count] + '';

                            switch(label){
                                case '1':
                                    Priority_1++;
                                break;

                                case '2':
                                    Priority_2++;
                                break;

                                case '3':
                                    Priority_3++;
                                break;

                                case '4':
                                    Priority_4++;
                                break;
                            }                            
                        }
                    }
                }
                //console.log(priority_Dict);
                //$(`#${table_id}`).html(csv_table_data);                
                //$(`#priority_1_Card`).html('Total Count : ' + Priority_1);
                
                switch(priority_Type){
                    case 1:
                        $(`#priority_1_Card`).html('Total Count : ' + Priority_1);
                    break;

                    case 2:
                        $(`#priority_2_Card`).html('Total Count : ' + Priority_2);
                    break;

                    case 3:
                        $(`#priority_3_Card`).html('Total Count : ' + Priority_3);
                    break;

                    case 4:
                        $(`#priority_4_Card`).html('Total Count : ' + Priority_4);
                    break;
                }

                Priority_1 = 0;
                Priority_2 = 0;
                Priority_3 = 0;
                Priority_4 = 0;
            }
        });
    });    
}

var Status_Open = 0;
var Status_Inprogress = 0;
var Status_Closed = 0;

function Status_Count_Handler(Status_Type){
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                for (var count = 1; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 7) {

                            var label = cell_data[cell_Count] + '';

                            switch(label){
                                case 'Open':
                                    Status_Open++;
                                break;

                                case 'Closed':
                                    Status_Closed++;
                                break;

                                case 'In-Progress':
                                    Status_Inprogress++;
                                break;
                            }                            
                        }
                    }
                }
                //$(`#${table_id}`).html(csv_table_data);                
                //$(`#priority_1_Card`).html('Total Count : ' + Priority_1);
                switch(Status_Type){
                    case 'Open':
                        $(`#status_Open_Card`).html('Total Count : ' + Status_Open);
                    break;

                    case 'Closed':
                        $(`#status_Closed_Card`).html('Total Count : ' + Status_Closed);
                    break;

                    case 'Inprogress':
                        $(`#status_InProgress_Card`).html('Total Count : ' + Status_Inprogress);
                    break;
                }

                Status_Open = 0;
                Status_Closed = 0;
                Status_Inprogress = 0;
            }
        });
    });    
}