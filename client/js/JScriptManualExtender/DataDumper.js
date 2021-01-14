//const Papa = "../PapaParse/papaparse.min.js";

const parser_Object = "../PapaParse/papaparse.min.js";

function callbackFunction(data) {        
    
     console.log(data);    
     return data;
}

function dataParser(url, callbackfunction) {    
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {

            callbackfunction(results.data);
        }
    });
}
dataParser("js\\JScriptManualExtender\\data.csv", callbackFunction);

