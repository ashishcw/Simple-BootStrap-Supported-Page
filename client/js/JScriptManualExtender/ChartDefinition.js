//var path = "js\\JScriptManualExtender\\data-temp.csv";

var dict = {};

var legend_Dictionary = {};

//Color definition for pie chart 20 colors
// var backgroundColor = ["#0D47A1", "#FFD54F", "#2196F3", "#A16045",
//     "#8AA715", "#3943CF", "#E1BDDE", "#C743C2",
//     "#DA8A11", "#43C971", "#65DF08", "#37E8D6",
//     "#D1A4C0", "#882810", "#87603F", "#289005",
//     "#84B6E2", "#3FA5A2", "#4F58D7", "#69E4EB"];


var backgroundColor = [
    "#0D47A1", "#FFD54F", "#2196F3", "#A16045", "#84B6E2", "#3FA5A2", "#4F58D7", "#69E4EB", "#636bdc", "#4d6bce", "#540200", "#bca04e", "#7a0262", "#a1b9d0", "#8e3085", "#18cb6a", "#a69334", "#2fbbfa", "#5a7b2d", "#1d5f2b", "#b39b74", "#100a39", "#ac1911", "#1cae85", "#01d7d1", "#a8b76d", "#ea6e14", "#81592e", "#d97c44", "#bdb3fa", "#9bc58a", "#089712", "#8fa8e1", "#ec6e5d", "#2b3607", "#ec8eda", "#ad566b", "#1cc02f", "#f1b6c9", "#79a084", "#3fe904", "#e554fd", "#e3ea16", "#2630db", "#f4c5b6", "#6b631a", "#1ef182", "#1e11c1", "#1753eb", "#5eebc5", "#daa1db", "#31fdeb", "#f7836e", "#d8bc5c", "#7a8a65", "#f32c70", "#5399ad", "#32579a", "#29aecb", "#bb018b", "#277f6f", "#dcaf33", "#70875a", "#641c46", "#71107a", "#4f4d48", "#677502", "#249867", "#d64c11", "#79f34c", "#c85191", "#25a082", "#484259", "#fdf40f", "#fa329d", "#0e9bb2", "#a6994a", "#9e3cf2", "#adbef8", "#03fda6", "#60f53a", "#466dc0", "#5b6bdb", "#a42feb", "#068c3b", "#f154fc", "#2bfa76", "#959034", "#72843e", "#fe210c", "#1ff6af", "#70f742", "#fd3c26", "#69a173", "#fa3270", "#81324b", "#9e2c99", "#73e695", "#d563cb", "#76103b", "#8cb3c1", "#46af45", "#d709a1", "#467fd8", "#998dd4", "#36ec00", "#6440cf", "#965e5e", "#695bcc", "#45fd9e", "#7147f7", "#4b7a9c", "#e150f1", "#e8e700", "#9b4fe6", "#2a8b7b", "#b04533", "#eb739e", "#caf307", "#d479f3", "#bff55e", "#c049e9", "#cd24f2", "#f633e6", "#b09718", "#c10a80", "#2dc66a", "#fe5496", "#26318e", "#10a3a1", "#5f3791", "#22784c", "#6168c7", "#b756a6", "#053b6f", "#e4bb27", "#80436b", "#a4cf3b", "#b536dc", "#fe986d", "#1212cc", "#9f9f6a", "#29083a", "#4ccd3a", "#6ac16f", "#0cc5ae", "#3a7504", "#a8e0bb", "#637c95", "#eecf8c", "#ac0908", "#e04b6e", "#f73057", "#597978", "#d619b7", "#4a6177", "#657908", "#c485ee", "#c0f1bb", "#faef43", "#3a1edf", "#a6e11e", "#44a0d5", "#9c8543", "#ebb176", "#50b23b", "#14b420", "#f4a2a7", "#b3eb97", "#9ed79f", "#ed149b", "#17216b", "#82158b", "#9ffbbd", "#08640f", "#402e9e", "#b0b51f", "#da14ef", "#5e6453", "#f74318", "#487d16", "#9e4f38", "#35fe7f", "#4b3c2a", "#197ee6", "#390e0c", "#fa0870", "#10d23b", "#cf1608", "#6f2711", "#d1b836", "#721701", "#a2ecb9", "#7c2ec1", "#4c3349", "#ce9e3d", "#f0ec6e", "#d63ffc", "#128fb1", "#9e4e76", "#71d6c0", "#baeda7", "#4f7a1d", "#39da0f", "#98b0c9", "#3c258a", "#2fba3e", "#ea4990", "#b767ec", "#9c5aeb", "#808ed3", "#0d2ee2", "#914e73", "#7b7d72", "#333e84", "#78d264", "#f9b307", "#420b97", "#90f527", "#497850", "#c184a0", "#3ee2ab", "#5a8157", "#c17199", "#e4b6df", "#f0e943", "#4e2af3", "#5c92c6", "#ba68ce", "#0dfa1a", "#8c1c4a", "#65618d", "#be2181", "#206f67", "#556078", "#1920f4", "#b65d20", "#061a82", "#40657a", "#90283f", "#327d44", "#991d08", "#444931", "#f04e0a", "#4e0e66", "#cca405", "#9d5069", "#25bd6a", "#c852c5", "#351b2b", "#0604a9", "#7de66b", "#a39b70", "#8cd1fe", "#7ce079", "#c7403f", "#bfb32e", "#2d007c", "#b079b8", "#86c8e4", "#543121", "#d24d54", "#077711", "#5a7b45", "#fee6b7", "#e23d2d", "#7fb3cf", "#e2f924", "#12cac7", "#bc425d", "#cbecb6", "#6f8b59", "#78924c", "#74eca8", "#7b0681", "#71dcf1", "#e3936c", "#47d342", "#e2a2a2", "#849486", "#6485a6", "#5abff0", "#421056", "#9a26ed", "#d0ebde", "#298031", "#32f2a2", "#a66287", "#78295e", "#e3a8d7", "#15fb64", "#9fc2de", "#c6f4ba", "#56d812", "#3e1f41", "#7bb2ae", "#524993", "#ad9d0a", "#8372fb", "#5a0212", "#c8ec65", "#b0b966", "#24e7f0", "#c64f86", "#1e6710", "#3c097a", "#c96273", "#235969", "#b41eb1", "#904d56", "#b3ad15", "#e77290", "#f5dcc7", "#b5b4a4", "#951880", "#bbe15f", "#349f74", "#a0c687", "#b53cac", "#a7b4b0", "#b09317", "#ab14ed", "#4c2dd2", "#f6bbff", "#2aa3d2", "#8934a7", "#63aefd", "#f7ea5e", "#1b1bc8", "#ce8181", "#b05271", "#8fe82a", "#e46664", "#c19a59", "#6a9623", "#18abdf", "#4281c7", "#ae17d6", "#271d32", "#8842e8", "#e61d14", "#f68cdf", "#48d5f5", "#cd130b", "#6b2758", "#4d6f89", "#ac421a", "#449c3a", "#220aec", "#6a7417", "#0edb6c", "#738347", "#60d50a", "#3227e3", "#1e5f2a", "#c0cc87", "#78ee5d", "#ae55dd", "#758d5e", "#ba582d", "#9fa811", "#983062", "#0e3aa3", "#66e073", "#105198", "#15e16f", "#471217", "#d09c3b", "#e990db", "#32c4eb", "#4d2888", "#4910f7", "#e61520", "#ba668d", "#a2ee49", "#0c72ad", "#f7b344", "#d6fe79", "#ecb5ee", "#7e5753", "#ded859", "#05b034", "#8ede9b", "#6d064e", "#6b3c15", "#2e2963", "#103c52", "#a54b5b", "#1af4e4", "#30c460", "#21f6ad", "#c07c44", "#20cbf4", "#f322ba", "#e6afa0", "#0f2f6b", "#544650", "#e9ad1b", "#e38ab4", "#bf5cf5", "#f2227a", "#2748e9", "#3de98b", "#cea4a1", "#fc4698", "#b6c21c", "#50a5db", "#24a6fa", "#0423dd", "#b9ef71", "#1760f3", "#ff8181", "#4ece51", "#669980", "#6bd549", "#6585bf", "#a23733", "#2619de", "#832ace", "#b5c562", "#c75e59", "#29e2b8", "#679677", "#2837e7", "#fb856e", "#5a1d7e", "#beb4d4", "#1ed9ec", "#560bc3", "#21291f", "#3e51a6", "#894208", "#e2aff8", "#b22fb4", "#8bcd7f", "#2bdd0c", "#d458cd", "#6ff4a9", "#2f74f2", "#aedf84", "#c88723", "#612ee8", "#c1a0df", "#7968f2", "#d9b39e", "#033213", "#036923", "#1a3524", "#10c584", "#3ba044", "#d4bf71", "#20f2bf", "#99622a", "#fb5c8a", "#89d23f", "#87d585", "#a1e4ea", "#d7158c", "#22aa44", "#8d6484", "#3244d6", "#6edbe2", "#001a9c", "#4b605f", "#8c0a02", "#258ab7", "#978117", "#53c880", "#31256c", "#51c9e4", "#6d2680", "#49a33d", "#8d0893", "#77165e", "#ffb842", "#d25678", "#478289", "#5bf97b", "#0666d9", "#e40cec", "#2dc00f", "#4ffb02", "#a98b3d", "#1ed9a4", "#60135b", "#015491", "#1440fc", "#6d6000", "#1a1de4", "#ffaeb4", "#47d0d9", "#def287", "#0e215b", "#1ffc0c", "#d33ee6", "#4e83dc", "#aae662", "#be69f5", "#6cfd17", "#99c450", "#fe4fa0", "#f74934", "#c3dbc3", "#1f0379", "#829215", "#a131f2", "#263c0f", "#edea92", "#2e0f43", "#11689c", "#631f91", "#2af292", "#7ed2ff", "#be88c5", "#a1995e", "#3d363e", "#eb2145", "#656b6c", "#4fd768", "#15444d", "#05c900", "#8fe81f", "#c6cb8c", "#b977ce", "#a18c60", "#65b707", "#8b9cfc", "#19f09d", "#52248e", "#3d5192", "#144716", "#cbeaee", "#fdaeaf", "#6e1d13", "#7c8eb9", "#7c7100", "#ec4d10", "#a06d48", "#e120c6", "#42c4ba", "#7be72e", "#e8f98f", "#dd491a", "#60833c", "#a25c7b", "#8fbd5b", "#2b9529", "#86755b", "#286ede", "#cf0d22", "#ea0b72", "#2f5ab3", "#12be9c", "#b1123a", "#a1cf7f", "#e09ca6", "#a3d872", "#5d0699", "#b6ab0e", "#07f92b", "#232546", "#8f5bd2", "#7bc130", "#6c3ab6", "#d67249", "#e910ed", "#4d1cf5", "#64c812", "#8f0cda", "#2e44c5", "#374e2a", "#3d1ad0", "#1e13f4", "#0c66cb", "#784f86", "#1080bf", "#b89e4a", "#4ac44a", "#743552", "#3cb46b", "#00d93d", "#3970ae", "#3d1647", "#29bee6", "#ae236d", "#9575ce", "#a71c5e", "#746f7b", "#a9a9da", "#ae0c58", "#b83d3b", "#17c64f", "#51f241", "#502e2d", "#1d4f55", "#9e9a9b", "#23dbea", "#a7daa7", "#15afca", "#6fd56c", "#1e740c", "#8d72cb", "#8553db", "#5870bf", "#905126", "#1aa15b", "#d2119a", "#c63aa0", "#9ce9e5", "#34acbe", "#93914e", "#61f01e", "#a6de12", "#bb23db", "#b04c36", "#3cadf8", "#87f72f", "#e96864", "#9cc0f6", "#dee8ec", "#508160", "#d3bf93", "#e2e720", "#ec8f3a", "#e70b75", "#a7f4cb", "#5c69a5", "#e0183c", "#ae4c8a", "#4f90f3", "#fba2b3", "#35b7c1", "#f12faa", "#b107d9", "#224fcc", "#8d65e3", "#950572", "#c2c465", "#9fef17", "#9cf02a", "#9b7d55", "#81cdb5", "#f49f6c", "#c17aed", "#3935b5", "#78ed3b", "#05e986", "#bfc8ad", "#527e31", "#5606a4", "#455c27", "#aac0bd", "#840eb1", "#e3018c", "#2902f1", "#92594f", "#ab357a", "#d2cde7", "#0168ca", "#dd7734", "#9cca9b", "#cb0694", "#b8d8bb", "#836c57", "#393078", "#be8754", "#5577cf", "#3b976c", "#31c106", "#05a309", "#17a7a9", "#297e8d", "#90823a", "#95f1b0", "#020b68", "#4f7b6d", "#ccc4f9", "#861956", "#2e591c", "#509724", "#3f9a74", "#e3ee5a", "#1c5996", "#faa9e1", "#7007eb", "#2b404a", "#8f16ea", "#25f333", "#514d71", "#3fc0fe", "#db58e9", "#198b4b", "#ac2836", "#c0b39a", "#a86dfc", "#5bee13", "#32963c", "#aa31eb", "#7f09a3", "#86b6ae", "#2c2e85", "#52b717", "#ac4e68", "#e70b61", "#b11c01", "#367bb4", "#b534d2", "#bd6ca1", "#f27a9f", "#5f7b32", "#12f571", "#b72387", "#7fdc62", "#3bd252", "#4e08ff", "#bd6ccf", "#923110", "#ebdd4e", "#296884", "#98de19", "#0b8386", "#9c409a", "#959ffc", "#e4d04a", "#88be0e", "#61e1b7", "#e174bd", "#7bac85", "#9e5823", "#c82f90", "#5003bb", "#73f30f", "#91c88c", "#fea139", "#a88e55", "#4c1f15", "#387dd7", "#ac9729", "#4c815b", "#f2050b", "#627a35", "#2b91a5", "#f4159b", "#b44dfc", "#31c169", "#22707e", "#79ca28", "#638c4f", "#5ce62d", "#4ae3f0", "#9b467f", "#8f75dc", "#e1f31f", "#10491b", "#c84649", "#025c09", "#8f83cc", "#847049", "#6a0e2e", "#5df866", "#a0a97f", "#fe23dd", "#ecd5f9", "#e9daf3", "#c4baa6", "#dcc9e4", "#a13193", "#6c8b81", "#1624c6", "#da943b", "#608067", "#623862", "#bc3762", "#9217a0", "#2af5c2", "#a987ed", "#3ce8b4", "#67f648", "#b84f79", "#7ff062", "#147782", "#754b07", "#d402a9", "#9b8d1e", "#cf3754", "#2df0b9", "#af3f2c", "#f63d8a", "#b31a80", "#b525bd", "#83f982", "#e66eb9", "#7e4e87", "#b632d6", "#ede34e", "#b62a65", "#b30cf4", "#f964ab", "#543c33", "#426f76", "#884eec", "#bb510d", "#6e0ef4", "#96c63e", "#d8b729", "#7ab55a", "#af70a3", "#623ec4", "#0d5b31", "#b03775", "#6878d8", "#d0c7b5", "#86ea34", "#5f8a1a", "#8c1fa9", "#731101", "#5c554a", "#f70b6a", "#e14ac1", "#6b1113", "#d3d603", "#f9431e", "#c2710a", "#84170f", "#c67d0e", "#448f00", "#bf99a5", "#5803db", "#87b8f2", "#694c39", "#90bfd2", "#8d8039", "#b1e07d", "#5008eb", "#aa99ea", "#7aa322", "#5b09ad", "#328087", "#714646", "#7c13f8", "#5a3452", "#806419", "#7d6ce3", "#3c41fe", "#1f49d9", "#d5110a", "#20a5cb", "#302e75", "#f63ed8", "#9d0bcf", "#389a57", "#870a79", "#d14465", "#359713", "#172c17", "#96745b", "#905818", "#35dcda", "#59974e", "#a8ca33", "#7ec482", "#f4d7bb", "#209e88", "#f0c391", "#e0bf27", "#7af25a", "#bde43c", "#d071fd", "#c3ecbf", "#1ac02a", "#cb0295", "#b48c61", "#4fe684", "#334dfc", "#2e9b92", "#5323e7", "#42eea4", "#83eb3d", "#a6db45", "#cb5e32", "#03398f", "#481cd0", "#3b62fa", "#8c7349", "#13a521", "#5e664f", "#ebc1e7", "#a6265b", "#338fa2", "#a0e560", "#657469", "#04e59a", "#6ba0e5", "#30ff89", "#33ed67", "#a6cc51", "#19bd71", "#2cdd7f", "#0ab515", "#9859b4", "#c456d9", "#0b94f2", "#d4dfec", "#073375", "#2bc1c7", "#db33c3", "#15696c", "#1bde01", "#b77148", "#b827f1", "#fff054", "#6216b6", "#5af59d", "#e54cf3", "#b9a6da", "#b50a42", "#023dd4", "#cf6dc0", "#79d5b8", "#21e2e0", "#189b59", "#fd6ffb", "#c0c18f", "#eb644d", "#91e484", "#4c89e5", "#5eb233", "#a2b20a", "#4005c5", "#b9209d", "#1cb9f9", "#376db6", "#3e3111", "#c42c91", "#f653ad", "#dd8c09", "#4a550e", "#48b419", "#7c4767", "#08bfd0", "#64af18", "#cf7e1e", "#d4c8f8", "#fb4c88", "#4d73ba", "#033306", "#8f0d71", "#f94d0f", "#4e17ca", "#0882aa", "#e07efd", "#4de240", "#cac42f", "#161093", "#12a1f0", "#c2c6b2", "#f28c3d", "#5b5d59", "#65f244", "#723299", "#a4632e", "#f83b07", "#2007af", "#1cc276", "#849e84", "#bfef30", "#82c003", "#108d58", "#588202", "#925522", "#9d53bc", "#aedee5", "#722450", "#e4fc2e", "#558df7", "#c38685", "#a5e42c", "#9fae8a", "#92c39a", "#747c6e", "#6b4f47", "#e8f16e", "#471542", "#2a339f", "#90a3bd", "#b49a9f", "#8bc43a", "#47e195", "#ae6d2a", "#7724b5", "#d2c785", "#936c01", "#6364d7", "#af8335", "#0f1d50", "#3379a8", "#0117e5", "#459062", "#4e3159", "#4b0f50", "#f9d23c", "#a1884d", "#177628", "#4602d7", "#62110f", "#37f3fa", "#e1951c"
];

var hoverBackgroundColor = [];
var borderColor = [];



//To create the initial dictionary
function createDictionary(data) {

    var key = data.replace(" ", "");
    if (dict[key] >= 0) {
        dict[key] = dict[key] + 1;
    } else {
        dict[key] = 1;
    }
    //result
    //key:value
    //count: 5
}

function randomColorPick_Function(loop_time) {

    for (var i = 0; i < loop_time; i++) {

        //generate a random color

        //var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
        var color = "rgba(" + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + "," + getRndInteger(0, 256) + ",";

        // backgroundColor.push(color + "0.2)");
        // hoverBackgroundColor.push(color + "0.5)");
        // borderColor.push(color + "1)");

        //backgroundColor.push(color + "0.7)");
        hoverBackgroundColor.push(color + "0.5)");
        borderColor.push(color + "1)");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//var labels = keys;



function CustomChart_Category() {
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
                            //Category_Wise_Data(cell_data[cell_Count]);
                            createDictionary(cell_data[cell_Count]);
                        }
                    }
                }



                Chart.pluginService.register({
                    beforeDraw: function (chart) {
                        if (chart.config.options.elements.center) {
                            // Get ctx from string
                            var ctx = chart.chart.ctx;

                            // Get options from the center object in options
                            var centerConfig = chart.config.options.elements.center;
                            var fontStyle = centerConfig.fontStyle || 'Arial';
                            var txt = centerConfig.text;
                            var color = centerConfig.color || '#000';
                            var maxFontSize = centerConfig.maxFontSize || 75;
                            var sidePadding = centerConfig.sidePadding || 20;
                            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                            // Start with a base font of 30px
                            ctx.font = "30px " + fontStyle;

                            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                            var stringWidth = ctx.measureText(txt).width;
                            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

                            // Find out how much the font can grow in width.
                            var widthRatio = elementWidth / stringWidth;
                            var newFontSize = Math.floor(30 * widthRatio);
                            var elementHeight = (chart.innerRadius * 2);

                            // Pick a new font size so it will not be larger than the height of label.
                            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
                            var minFontSize = centerConfig.minFontSize;
                            var lineHeight = centerConfig.lineHeight || 25;
                            var wrapText = false;

                            if (minFontSize === undefined) {
                                minFontSize = 20;
                            }

                            if (minFontSize && fontSizeToUse < minFontSize) {
                                fontSizeToUse = minFontSize;
                                wrapText = true;
                            }

                            // Set font settings to draw it correctly.
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
                            ctx.font = fontSizeToUse + "px " + fontStyle;
                            ctx.fillStyle = color;

                            if (!wrapText) {
                                ctx.fillText(txt, centerX, centerY);
                                return;
                            }

                            var words = txt.split(' ');
                            var line = '';
                            var lines = [];

                            // Break words up into multiple lines if necessary
                            for (var n = 0; n < words.length; n++) {
                                var testLine = line + words[n] + ' ';
                                var metrics = ctx.measureText(testLine);
                                var testWidth = metrics.width;
                                if (testWidth > elementWidth && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                } else {
                                    line = testLine;
                                }
                            }

                            // Move the center up depending on line height and number of lines
                            centerY -= (lines.length / 2) * lineHeight;

                            for (var n = 0; n < lines.length; n++) {
                                ctx.fillText(lines[n], centerX, centerY);
                                centerY += lineHeight;
                            }
                            //Draw text in center
                            //console.log(line);
                            ctx.fillText(line, centerX, centerY);
                        }
                    }
                });



                var canvasP = document.getElementById("initial_Chart_Display");
                var ctxP = canvasP.getContext('2d');

                var initial_Chart = new Chart(ctxP, {
                    // type: 'bar',
                    //type: 'pie',
                    //type: 'doughnut',

                    type: 'doughnut',
                    data: {
                        labels: [],

                        datasets: [{
                            data: [],
                            backgroundColor: backgroundColor,
                            //hoverBackgroundColor: ["#0097A7", "#FFCCBC", "#4DD0E1"]                            
                        }]
                    },
                    options: {
                        responsive: true,
                        elements: {
                            center: {
                                text: '',
                                //color: '#FF6384', // Default is #000000
                                fontStyle: 'Arial', // Default is Arial
                                sidePadding: 20, // Default is 20 (as a percentage)
                                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                                lineHeight: 25 // Default is 25 (in px), used for when text wraps
                            }
                        },
                        legend: {
                            display: true,
                            responsive: true,
                            position: 'left',
                            labels: {
                                padding: 20,
                                fontColor: 'black',
                                fontSize: 15,
                                generateLabels: function (chart) {

                                    var data = chart.data;
                                    if (data.labels.length && data.datasets.length) {
                                        return data.labels.map(function (label, i) {
                                            var meta = chart.getDatasetMeta(0);
                                            var ds = data.datasets[0];
                                            var arc = meta.data[i];
                                            var custom = arc && arc.custom || {};
                                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                            var arcOpts = chart.options.elements.arc;
                                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                            // We get the value of the current label
                                            var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

                                            return {
                                                // Instead of `text: label,`
                                                // We add the value to the string
                                                text: label + " : " + value,
                                                fillStyle: fill,
                                                strokeStyle: stroke,
                                                lineWidth: bw,
                                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                                index: i
                                            };
                                        });
                                    } else {
                                        return [];
                                    }
                                }
                            },
                            // onClick: function (event, elem) {
                            //     alert(elem.text);
                            // },

                            ////onClick: (e) => e.stopPropagation(),
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        },
                        title: {
                            display: false,
                            text: 'Categorical Display'
                        }
                    },
                    plugins: [{
                        beforeInit: function (chart, options) {
                            chart.legend.afterFit = function () {
                                //this.height += 100; // must use `function` and not => because of `this`
                                this.width -= 120;
                            };
                        },
                    }],

                });


                // Create legend_Keys array
                var legend_Keys = Object.keys(dict).map(function (key) {
                    return [key, dict[key]];
                });

                // Sort the array based on the second element
                legend_Keys.sort(function (first, second) {
                    return second[1] - first[1];
                });

                // Create a new array with only the first 5 legend_Keys
                //console.log(legend_Keys.length);

                for (var i = 0; i < legend_Keys.length; i++) {
                    //console.log(legend_Keys[i][i]);
                    initial_Chart.data.labels.push(legend_Keys[i][0]);
                }

                var keys = Object.keys(dict);
                var total = 0;

                for (var i = 0; i < keys.length; i++) {
                    //console.log(legend_Keys[i][i]);
                    //initial_Chart.data.labels.push([keys[i]]);
                    randomColorPick_Function(100);
                    initial_Chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(dict[keys[i]]);
                        total += dict[keys[i]];
                        dataset.hoverBackgroundColor = (hoverBackgroundColor[getRndInteger(0, hoverBackgroundColor.length)]);
                    });
                }

                canvasP.onclick = function (e) {
                    var slice = initial_Chart.getElementAtEvent(e);
                    if (!slice.length) return; // return if not clicked on slice
                    var label = slice[0]._model.label;

                    for (let index = 0; index < keys.length; index++) {
                        var element = keys[index];

                        if (label == element) {
                            alert('clicked on slice ' + element);
                            window.open('https://www.google.com');
                        }

                    }

                    // switch (label) {
                    //     // add case for each label/slice
                    //     case keys[0]+'':
                    //         alert('clicked on slice ' + keys[0]);
                    //         window.open('www.google.com');
                    //     break;

                    //     case keys[5]:
                    //         alert('clicked on slice ' + keys[5]);
                    //         window.open('www.youtube.com');
                    //     break;
                    // }


                }

                initial_Chart.options.elements.center.text = ('Count : ' + total);

                $(`#chart_Total_Label`).html('Total : ' + total);


                // initial_Chart.options.legend.onClick = function (ev, legendItem) {
                //     console.log(legendItem.text);                    
                //     //initial_Chart.update();
                // }

                // initial_Chart.options.legend.onLeave = function(ev, legendItem){
                //     initial_Chart.update();                    
                // }

                initial_Chart.update();


                var original = initial_Chart.options.legend.onClick;
                var temp_Total = 0;
                initial_Chart.options.legend.onClick = function (e, legendItem) {
                    //console.log(legendItem.text);

                    var legend_Name = legendItem.text.split(":");                    
                    create_Legend_Dictionary(legend_Name[0]);

                    var text = legendItem.text.split(":").pop();

                    temp_Total = parseInt(text);
                    
                    
                    //calling the legend as per the name
                    if(legend_Dictionary[legend_Name[0].replace(" ", "")] == true){
                        total = total - temp_Total;
                    }else{
                        total = total + temp_Total;
                    } 

                    //console.log(total);             

                    initial_Chart.options.elements.center.text = ('Count : ' + total);
                    original.call(this, e, legendItem);                                        
                    $(`#chart_Total_Label`).html('Total : ' + total);
                };
            }
        });
    });
}


function create_Legend_Dictionary(data) {

    var key = data.replace(" ", "");
    if (legend_Dictionary[key] == true) {
        legend_Dictionary[key] = false;
    } else {
        legend_Dictionary[key] = true;
    }
    //result
    //key:value
    //count: 5
}


window.onclick = e => {
    //console.log(e.target);
};

$(document).click(function (event) {
    //var text = $(event.target).text();
    //console.log(text);
});