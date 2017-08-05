<h3>run on tomcat server <h1><u>little-hard-way-to-run</u></h1></h3>

1.download tomCat server and apache (https://tomcat.apache.org/download-80.cgi) [*you'll need to set environment variables) 
2.download orientDB (https://orientdb.com/download/)
3.download this repository and go to DB folder and copy ApplicationData folder and go to orientDB folder > go to databases > and paste 
4.move downloaded repository folder to tomcatserver (go to tomcat server > webapps > paste)
5.go to downloaded orientDb folder > go to bin > then run server.bat ( if mac or linux server.sh  ) 
6.go to tomcat server folder > go to bin > run catalina.bat ( if mac or linux catalina.sh  ) 
7.go to your webbrowser and go to http://localhost:8080/myLogin 
         (if not working 

        1.install Allow-Control-Allow-Origin: * extention 
        (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog))
        *use ctrl+shift+R  to reload the login page 
        
8.use username= a and password= a 

 


<h1>run on http-server server <h1><u>easy</u></h1></h1>

1.install Allow-Control-Allow-Origin: * extention 
(https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog)

2.open cmd in this directry
3.npm install -g http-server
4.http-server -o. -o
