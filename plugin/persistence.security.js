
(function(){
	if(!persistence){
		alert("persistence library is not loaded");
		return;
	}
	
	persistence.encrypt = function(obj, key){
		if(!obj)
			return;
			
		for(var p in obj._data) {
			if(obj._data.hasOwnProperty(p)) {
				console.log("property: " + p + " " + obj._data[p]);
				
				var data = Crypto.AES.encrypt(obj._data[p], key);
				obj._data[p] = data;
				
				persistence.propertyChanged(obj, p, undefined, obj._data[p]);
            }
        }
	}
	
	persistence.decrypt = function(obj, key){
		if(!obj)
			return;
			
		for(var p in obj._data) {
			if(obj._data.hasOwnProperty(p)) {
				var data = Crypto.AES.decrypt(obj._data[p], key);
				obj._data[p] = data;
            }
        }	
	}
})()