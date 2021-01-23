const path = "js\\JScriptManualExtender\\data.csv";

function Aging_Table(table_id) {
    $(document).ready(function () {
        $.ajax({
            url: path,
            dataType: "text",
            success: function (data) {
                var csv_data = data.split(/\r?\n|\r/);
                //console.log(csv_data);
                var csv_table_data = '<table class="table table-bordered table-striped">';
                for (var count = 0; count < csv_data.length; count++) {
                    //for (var count = 0; count < 8; count++) {

                    var cell_data = csv_data[count].split(",");
                    csv_table_data += '<tr>';

                    //for (var cell_Count = 0; cell_Count < cell_data.length; cell_Count++) {
                    for (var cell_Count = 0; cell_Count < 2; cell_Count++) {

                        if (count === 0) {
                            csv_table_data += '<th>' + 'ID' + '</th>';
                            //csv_table_data += '<th>' + 'Count' + '</th>';
                            // if (cell_Count === cell_Count_Field_1 || cell_Count === cell_Count_Field_2) {
                            //     //csv_table_data += '<th>' + cell_data[cell_Count] + '</th>';                                
                            // }


                        } else if (count === 1) {
                            //csv_table_data += '<th>' + 'Count' + '</th>';
                        }
                        else {
                            // if (cell_Count === cell_Count_Field_1 || cell_Count === cell_Count_Field_2) {
                            //     csv_table_data += '<td>' + cell_data[cell_Count] + '</td>';
                            // }
                            csv_table_data += '<td>' + cell_data[cell_Count] + '</td>';

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

function Random_Number(table_id) {
    //var number = Math.floor((Math.random() * 10) + 1);
    var number = Math.floor((Math.random() * 100) + 1);

    $(document).ready(function () {
        //$(`#${table_id}`).html('<a href="#">' + number + '</a>');
        $(`#${table_id}`).html(number);
    });

}


window.onclick = e => {
    //console.dir(e.target);  // use this in chrome
    //console.log(e.target);  // use this in firefox - click on tag name to view
    if (e.target.id !== null) {
        console.log(e.target.id);
    }
}
