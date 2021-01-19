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


function Table_Formation(table_id, cell_Count_Field_1, cell_Count_Field_2){
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

                        if (count === 0) {
                            if(cell_Count === cell_Count_Field_1 || cell_Count === cell_Count_Field_2){
                                csv_table_data += '<th>' + cell_data[cell_Count] + '</th>';
                            }
                            

                        } else {
                            if(cell_Count === cell_Count_Field_1 || cell_Count === cell_Count_Field_2){
                                csv_table_data += '<td>' + cell_data[cell_Count] + '</td>';
                            }
                            //csv_table_data += '<td>' + cell_data[cell_Count] + '</td>';
                            
                        }
                    }
                    csv_table_data += '</tr>';
                }

                csv_table_data += '</table>';
                $(`#${table_id}`).html(csv_table_data);

            }
        });
    });

}


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("main_table");    
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

//var data = dataParser("js\\JScriptManualExtender\\data.csv", callbackFunction);
//console.log(data);