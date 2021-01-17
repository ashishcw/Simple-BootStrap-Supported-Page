function callbackFunction(data) {        
    
     console.log(data);
}

function dataParser(url, callbackfunction) {    
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {

            callbackfunction(results.data);
            return results.data;
            
        }
    });
}


function Table_Formation(){
    $(document).ready(function () {
        $.ajax({
            url: "js\\JScriptManualExtender\\data.csv",
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                var csv_table_data = '<table class="table table-bordered table-striped">';
                for (var count = 0; count < csv_data.length; count++) {

                    var cell_data = csv_data[count].split(",");
                    csv_table_data += '<tr>';

                    for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {

                        if (cell_Count === 0) {
                            csv_table_data += '<th>' + cell_data[cell_Count] + '</th>';

                        } else {
                            csv_table_data += '<td>' + cell_data[cell_Count] + '</td>';
                        }
                    }
                    csv_table_data += '</tr>';
                }

                csv_table_data += '</table>';
                $('#main_table').html(csv_table_data);

            }
        });
    });

}

//var data = dataParser("js\\JScriptManualExtender\\data.csv", callbackFunction);
//console.log(data);