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

//var data = dataParser("js\\JScriptManualExtender\\data.csv", callbackFunction);
//console.log(data);