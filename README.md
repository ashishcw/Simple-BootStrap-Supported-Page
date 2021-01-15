"# Simple-BootStrap-Supported-Page" 
This is a simple page, made specifically for the client-side rendering. The purpose of this page is to fetch the data from any of the data-sources(e.g csv file), and then populate the data using JavaScript.

Please note, this is not an ideal practice to populate the data without any of the security measures, and perform all types of data handling processes at client side should strictly prohibited at all cost. You should always send the data which is applicable for the rendering purposes to the client side. However this project is aimed for an internal use only, and thus both, client and server(processing data) are getting used internally.


Additional Components used in this project.

1. BootStrap
2. BootStrap-Table
3. ChartJS
4. PapaParse - CSV Parser

P.S. In order to populate the data, you will have to use the 'HTTP' protocols, as file system protocols are not supported by modern browsers, you are more likely to face a CORS(Cross Origin Resource Sharing) restriction.