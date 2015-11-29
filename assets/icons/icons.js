(function(){
	var container = document.getElementById('icon-container');
	if (container) {
		container.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol viewBox=\"0 0 20 20\" id=\"icon-chevronDown\"><title>chevronDown</title> <path d=\"M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0\r\n\tc0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335\r\n\tc0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z\"/> </symbol></svg>";
	} else {
		throw new Error("Can't find element: #" + container);
	}
})();