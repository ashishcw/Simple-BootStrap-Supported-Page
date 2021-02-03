var Table_Header = [];

var priority_Dictionary_Main_Page = [];
var status_Dictionary_Main_Page = [];
var combined_Count_Main_Page = [];


function createCustomDictionaryNew(dict, data) {

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

function sort_object(obj) {
    items = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
    items.sort(function (first, second) {
        return second[1] - first[1];
    });
    sorted_obj = {}
    $.each(items, function (k, v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return (sorted_obj)
}

function Table_Load() {
    setTimeout(function () {

        Papa.parse(path, {
            download: true,
            dynamicTyping: true,
            complete: function (results) {

                results.data.forEach((item, index) => {
                    if (item) {

                        //Priority
                        Table_Header.push(item[07]);                        
                    }

                });

                for (var i = 1; i < Table_Header.length; i++) {
                    //Priority
                    createCustomDictionaryNew(priority_Dictionary_Main_Page, Table_Header[i]);
                }
                priority_Dictionary_Main_Page = sort_object(priority_Dictionary_Main_Page);

                var priority_dict_keys = Object.keys(priority_Dictionary_Main_Page);

                Table_Header = [];

                results.data.forEach((item, index) => {
                    if (item) {

                        //Status
                        Table_Header.push(item[08]);
                    }

                });

                for (var i = 1; i < Table_Header.length; i++) {
                    //Status
                    createCustomDictionaryNew(status_Dictionary_Main_Page, Table_Header[i]);
                }                

                var status_dict_keys = Object.keys(status_Dictionary_Main_Page);

                var csv_table_data = '<table id="target_data_table" class="table table-striped table-bordered" style="width:100%">';
                csv_table_data += '<tr>';

                csv_table_data += `<th>` + 'Status/Priority' + '</th>';

                for (var i = 0; i < priority_dict_keys.length; i++) {
                    csv_table_data += `<th id="${[priority_dict_keys[i]]}_Column">` + [priority_dict_keys[i]] + '</th>';
                }

                csv_table_data += '</tr>';

                for (var i = 0; i < status_dict_keys.length; i++) {
                    csv_table_data += '<tr>';
                    csv_table_data += `<td id="${[status_dict_keys[i]]}_Row">` + [status_dict_keys[i]] + '</td>';

                    for (var x = 0; x < priority_dict_keys.length; x++) {
                        csv_table_data += `<td id=${[status_dict_keys[i]]}_${[priority_dict_keys[x]]}>` + 0 + '</td>';
                    }

                    csv_table_data += '</tr>';

                }
                csv_table_data += '</table>';

                $(`#main_table`).html((csv_table_data));

                for (var u = 0; u < results.data.length; u++) {
                    for (var i = 0; i < status_dict_keys.length; i++) {
                        for (var x = 0; x < priority_dict_keys.length; x++) {

                            if(results.data[u][08] === status_dict_keys[i] && results.data[u][07] === priority_dict_keys[x]){
                                createCustomDictionaryNew(combined_Count_Main_Page, (status_dict_keys[i] + "_" + [priority_dict_keys[x]]));
                            }                            
                        }
                    }
                }

                var combined_Keys = Object.keys(combined_Count_Main_Page);
                for (var i = 0; i < combined_Keys.length; i++) {
                    document.getElementById(combined_Keys[i]).innerHTML = combined_Count_Main_Page[combined_Keys[i]];
                }

                console.log(combined_Count_Main_Page);
            }
        });

    }, 100);



}