const path = "js\\JScriptManualExtender\\data.csv";

var csv_table_data = '<table id="example" class="table table-striped table-bordered" style="width:100%">';

var timeLines = ['1 Day', '2 Day', '5 Days', '1 Week', '2 Weeks', '3 Weeks', '1 Month', '2 Months', '3 Months', '6 Months', '9 Months', '1 Year', '2 Years'];


const product_Name_Dict = {};
var product_Name_and_timeline_Dict = {};


arr = [];

var abc = 0;

// window.onclick = e => {
//     //console.dir(e.target);  // use this in chrome
//     //console.log(e.target);  // use this in firefox - click on tag name to view
//     if (e.target.id !== null) {
//         console.log(e.target.id);
//     }
// }

function createDictionary(dict, data) {

    var key = data.replace(" ", "");
    if (dict[key] >= 0) {
        dict[key] = dict[key] + 1;
    } else {
        dict[key] = 1;
    }

    return dict;

    //result
    //key:value
    //count: 5
}

function Product_Names_Dictionary() {
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
                            createDictionary(product_Name_Dict, cell_data[cell_Count]);
                        }



                        //check if the status is not equal to closed
                        if(cell_data[cell_Count] !== 'Closed') {
                            console.log(cell_data[cell_Count]);
                        }
                        
                    }
                }


                csv_table_data += '<tr>';

                csv_table_data += '<th>' + '#' + '</th>';


                for (var i = 0; i < timeLines.length; i++) {
                    csv_table_data += `<th id="${[timeLines[i]]}_Column">` + [timeLines[i]] + '</th>';
                }

                csv_table_data += '</tr>';

                var keys = Object.keys(product_Name_Dict);

                for (var i = 0; i < keys.length; i++) {
                    csv_table_data += '<tr>';
                    csv_table_data += `<td id="${[keys[i]]}_Row">` + [keys[i]] + '</td>';

                    for (var x = 0; x < 13; x++) {
                        //csv_table_data += `<td id="${[keys[i]]}_Row">` + [keys[i]] + '</td>';
                        abc += 1;
                        csv_table_data += `<td><a id=pos_${x}_${i} href="#">` + abc + '</a></td>';
                    }

                    csv_table_data += '</tr>';
                    //createDictionary(product_Name_and_timeline_Dict, cell_data[cell_Count]);

                }
                csv_table_data += '</table>';


                // $(`#timeline_main_table_2`).html((csv_table_data));

            }
        });
    });
}

function TimeLineRender() {
    $(document).ready(
        function () {

            Product_Names_Dictionary();

            //console.log(product_Name_Dict);
            

        }
    );
}







function dataParser(url, callbackfunction) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function (results) {
            callbackfunction(results.data);
        }
    });
}

function callbackFunction(data) {

    for (var count = 1; count < data.length; count++) {
        // code should go here
    }
    //console.log(data);    
    
    var arr = [];
    if(data.some(v => v.includes('Open'))){
        arr.push(data.some(v => v.includes('Open')));
    }
    console.log(arr);

    $(document).ready( function () {
        $('#timeline_main_table_2').DataTable();
    } );

}
dataParser(path, callbackFunction);
