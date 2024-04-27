// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    var url = "https://localhost:8080/"+"";
    if (name!="" || year!="") {
    	if (name!="" && year!="") {
    		url=url+"?name="+name+"&year="+year;
    	} 
		else if(name!=""){
			url=url+"?name="+name;
		}
		else {
    		url=url+"?year="+year;
    	}
    }
    document.getElementById('url').innerText = url;
});