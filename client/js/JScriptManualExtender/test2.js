const table = document.getElementById('tbl-data');
var timeLines = ['#', '1 Day', '2 Days', '5 Days', '1 Week', '2 Weeks', '3 Weeks', '1 Month', '2 Months', '3 Months', '6 Months', '9 Months', '1 Year', '2 Years'];
var timeLines_internal = ['#', '1_Day', '2_Days', '5_Days', '1_Week', '2_Weeks', '3_Weeks', '1_Month', '2_Months', '3_Months', '6_Months', '9_Months', '1_Year', '2_Years'];


var delete_this_after_use = [0];

var product_Name_Dict = {};
const product_Name_Dict_2 = {};
const product_Name_Dict_Final = {};

const array_1 = [];

function create_Initial_Empty_Dictionary(dict, data) {
    if (typeof (data) === undefined) {
    } else {

        var key = data.replace(" ", "");
        if (dict[key] >= 0) {
            //dict[key] = dict[key] + 1;
        } else {
            dict[key] = 0;
        }
        return dict;
    }
}

function CompareDate(category_Name, target_date) {

    var targetDate = new Date(target_date);

    var date = new Date();
    var Day_1 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    var Day_2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 2);
    var Day_5 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 5);
    var one_Week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
    var Two_Weeks = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 14);
    var monthly = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    var quarterly = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate());
    var halfyearly = new Date(date.getFullYear(), date.getMonth() - 6, date.getDate());
    var morethanyear = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());


    if (targetDate < Day_1 && targetDate > Day_2) {
        //console.log('24 Hours found');
        //console.log(category_Name + '_1_Day');

    }
    else if (targetDate < one_Week && targetDate > monthly) {
        //console.log('Weekly Found');
        //console.log('Target Date : ' + targetDate.toDateString());
        //console.log('Weekly Date : ' + weekly.toDateString());
        //console.log('1 week found');
        //console.log(category_Name + '_1_Day');
    }
    else if (targetDate < monthly && targetDate > quarterly) {
        //console.log('Monthly Found');
        //console.log('Target Date : ' + targetDate.toDateString());
        //console.log('Monthly Date : ' + monthly.toDateString());
    }

    if (date < targetDate) {
        return true;
    } else {
        return false;
    }
}

function createDictionary(dict, data) {

    if (data) {
        var key = data.replace(" ", "");
        if (dict[key] >= 0) {
            dict[key] = dict[key] + 1;
        } else {
            dict[key] = 1;
        }
        return dict;
    }
}

function generate_Table_Head(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.append(text);
        row.appendChild(th);
    }
}

function generate_Table_Rows(table, data) {
    let newRow = table.insertRow(-1);
    data.map((row, index) => {
        if (index === 0) {
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(row);
            newCell.appendChild(newText);
        }

    });

}


$(document).ready(function () {
    Papa.parse(path, {
        download: true,
        dynamicTyping: true,
        complete: function (results) {


            //console.log(results.data.length);
            //fetching all the entries which doesn't have a status as closed            
            for (var i = 1; i < results.data.length; i++) {

                //Creating a dictionary on the basis of product names
                //console.log(results.data[i][8]);
                createDictionary(product_Name_Dict, results.data[i][9]);
            }

            var keys = Object.keys(product_Name_Dict);

            keys.forEach((item, index) => {

                for (var i = 0; i < results.data.length; i++) {
                    if (item === results.data[i][9]) {
                        if (results.data[i][8] !== 'Closed') {
                            array_1.push(results.data[i]);
                        }
                    }
                }
            });

            //console.log(array_1);

            array_1.forEach((item, index) => {
                for (var i = 1; i < timeLines_internal.length; i++) {
                    create_Initial_Empty_Dictionary(product_Name_Dict_2, item[9] + '_' + timeLines_internal[i]);
                }
            });

            array_1.forEach((item, index) => {
                var key = '_';
                switch (item[5]) {
                    case timeLines[1]://'1 Day':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[1]);
                        //console.log(item[8]+key+timeLines_internal[1]);
                    break;

                    case timeLines[2]://'2 Days':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[2]);
                        //console.log(item[8]+key+timeLines_internal[2]);
                    break;

                    case timeLines[3]://'5 Days':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[3]);
                        //console.log(item[8]+key+timeLines_internal[3]);
                    break;

                    case timeLines[4]://'1 Week':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[4]);
                        //console.log(item[8]+key+timeLines_internal[4]);
                    break;

                    case timeLines[5]://'2 Weeks':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[5]);
                        //console.log(item[8]+key+timeLines_internal[5]);
                    break;

                    case timeLines[6]://'3 Weeks':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[6]);
                        //console.log(item[8]+key+timeLines_internal[6]);
                    break;

                    case timeLines[7]://'1 Month':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[7]);
                        //console.log(item[8]+key+timeLines_internal[7]);
                    break;

                    case timeLines[8]://'2 Months':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[8]);
                        //console.log(item[8]+key+timeLines_internal[8]);
                    break;

                    case timeLines[9]://'3 Months':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[9]);
                        //console.log(item[8]+key+timeLines_internal[9]);
                    break;

                    case timeLines[10]://'6 Months':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[10]);
                        //console.log(item[8]+key+timeLines_internal[10]);
                    break;

                    case timeLines[11]://'9 Months':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[11]);
                        //console.log(item[8]+key+timeLines_internal[11]);
                    break;

                    case timeLines[12]://'1 Year':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[12]);
                        //console.log(item[8]+key+timeLines_internal[12]);
                    break;

                    case timeLines[13]://'2 Years':
                        createDictionary(product_Name_Dict_2, item[9]+key+timeLines_internal[13]);
                        //console.log(item[8]+key+timeLines_internal[13]);
                    break;
                }
                //console.log(item[5]);
            });

            //console.log(product_Name_Dict_2);

            //console.log(product_Name_Dict_2);
            //console.log(array_1);

            array_1.forEach((item, index) => {
                //CompareDate(item[8], item[6]);
            });

            results.data.map((data, index) => {
                if (index > 0) {
                    if (data[7] !== 'Closed') {
                        //console.log(data[8]);
                    }
                }

                if (index === 0) {
                    //generate_Table_Head(table, data);
                    //generate_Table_Head(table, timeLines);
                } else {
                    //generate_Table_Rows(table, data);

                    //generate_Table_Head(table, keys);
                }
            });

            Tabel_Creation_From_Scratch();
        }
    });
});

function Tabel_Creation_From_Scratch() {
    //console.log(product_Name_Dict_2);

    var csv_table_data = '<table id="example" class="table table-striped table-bordered" style="width:100%">';
    csv_table_data += '<tr>';

    // csv_table_data += '<th>' + '#' + '</th>';


    for (var i = 0; i < timeLines.length; i++) {
        csv_table_data += `<th id="${[timeLines[i]]}_Column">` + [timeLines[i]] + '</th>';
    }

    csv_table_data += '</tr>';

    array_1.forEach((item, index) => {
        if (item[8]) {
            createDictionary(product_Name_Dict_Final, item[9]);
        }
    });

    //console.log(product_Name_Dict_Final);

    var keys = Object.keys(product_Name_Dict_Final);

    for (var i = 0; i < keys.length; i++) {
        csv_table_data += '<tr>';
        csv_table_data += `<td id="${[keys[i]]}_Row">` + [keys[i]] + '</td>';

        for (var x = 1; x < timeLines.length; x++) {
            csv_table_data += `<td><a id=${[keys[i]]}_${[timeLines_internal[x]]} href="#">` + 150 + '</a></td>';

        }

        csv_table_data += '</tr>';

    }
    csv_table_data += '</table>';

    $(`#main_table_3`).html((csv_table_data));

    //console.log(product_Name_Dict_2);

    var keys_2 = Object.keys(product_Name_Dict_2);

    for (var i = 0; i < keys_2.length; i++) {
        if(keys_2[i]){
            //console.log(keys_2[i]);
            document.getElementById(keys_2[i]).innerHTML = [product_Name_Dict_2[keys_2[i]]];
        }
    }
}



window.onclick = e => {

    if (e.target.id !== null) {
        console.log(e.target.id);

        var keys_2 = Object.keys(product_Name_Dict_2);

        if (keys_2.includes(e.target.id)) {
            var id = e.target.id;
            // for (var i = 0; i < keys_2.length; i++) {
            //     document.getElementById(e.target.id).innerHTML = [product_Name_Dict_2[keys_2[i]]];
            // }
        } else {
            //console.log(product_Name_Dict_2);
        }
    }
}