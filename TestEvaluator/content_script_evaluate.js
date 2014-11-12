function appendFunctionToBody(f){
	var script = document.createElement('script');
	script.appendChild(document.createTextNode('('+ f +')();'));
	(document.body || document.head || document.documentElement).appendChild(script);
}

switch(document.title){
	case 'Solution1':
	case 'Test1':
		var testSolution1 = function() {		
			try{
			var abc=new MyConstructor("Random",vehicle);
			}catch(e){}
		}
		
		appendFunctionToBody(testSolution1);
		
		setTimeout(function(){
			var testName = 'Solution1';
			if(document.getElementById('ans').innerHTML==='Random'){
				chrome.runtime.sendMessage({testName:testName,testResult:true}, function(response) {
				  //console.log(response.farewell);
				});
			}else{
				chrome.runtime.sendMessage({testName:testName,testResult:false}, function(response) {
				  //console.log(response.farewell);
				});
			}
		},1500);
		
		break;
	case 'Solution2':
	case 'Test2':
		var testFunction2 = function(){
			try{
			person.Dave = new namespace.abc.form();

			person.Dave.setName("Dave");


			person.Mitchell = new namespace.abc.form();

			person.Mitchell.setName('Mitchell');
			person.Mitchell.setSalutation('Howdy');

			commonObj = new namespace.abc.common();

			commonObj.registerArr(person);
			var input = document.createElement('input');
			document.body.appendChild(input);
			input.id = 'solution2';
			input.type='hidden';
			input.value =  JSON.stringify(commonObj.getArr());
			}catch(e){}
		};
		appendFunctionToBody(testFunction2);
		
		setTimeout(function(){
			var testName = "Solution2";
			
			var arraysEqual = function(a1,a2) {
				return JSON.stringify(a1)==JSON.stringify(a2);
			}
			var result = false;
			try{
				result = arraysEqual(["Dave","Mitchell"],JSON.parse(document.getElementById('solution2').value));
			}catch(e){}
			chrome.runtime.sendMessage({testName:testName,testResult:result}, function(response) {
			  //console.log(response.farewell);
			});
		},1000);
		break;
	case 'Solution3':
	case 'Test3':
		var testFunction3 = function(){
			try{
				function isElementHidden(ele){
					return ele.offsetParent==null;
				}
				var verifyClick = function(idValue){
					try{
						document.getElementById(idValue).click();
					}catch(e){}
					
					var selector = "[data-id]:not([data-id='"+idValue+"'])";
					var elements = document.querySelectorAll(selector);
					
					for(var index=0;index<elements.length;index++){
						if(!isElementHidden(elements[index])){
							return false;
						}
					}
					elements = document.querySelectorAll("[data-id='"+idValue+"']");
					for(var index=0;index<elements.length;index++){
						if(isElementHidden(elements[index])){
							return false;
						}
					}
					return true;
				};
			
				var input = document.createElement('input');
				document.body.appendChild(input);
				input.id = 'solution3';
				input.type='hidden';
				var result = verifyClick("programming-languages") && verifyClick("js-framework");
				input.value =  result;
			}catch(e){}
		};
		
		appendFunctionToBody(testFunction3);
		
		setTimeout(function(){
			var testName = "Solution3";
		
			var result = document.getElementById('solution3').value=="true";		//to convert result into boolean
			chrome.runtime.sendMessage({testName:testName,testResult:result}, function(response) {
			  //console.log(response.farewell);
			});
		},1500);
		break;
	case 'Solution4':
	case 'Test4':
		var testFunction4 = function(){
			var path = ["green"].concat("lightgreen/floragreen".split('/'));
			var finArr = extract(path);
			var input = document.createElement('input');
			document.body.appendChild(input);
			input.id = 'solution41';
			input.type='hidden';
			input.value =  JSON.stringify(finArr);
			
			path = ["green","lightgreen"];
			finArr = extract(path);
			input = document.createElement('input');
			document.body.appendChild(input);
			input.id = 'solution42';
			input.type='hidden';
			input.value =  JSON.stringify(finArr);
		};
		
		appendFunctionToBody(testFunction4);
		
		setTimeout(function(){
			var testName = "Solution4";
			
			var arraysEqual = function(a1,a2) {
				return JSON.stringify(a1)==JSON.stringify(a2);
			}
			var correctAnswer41 = [{"label":"green","url":"greenController.js"},{"label":"lightgreen","url":"lightGreenController.js"},{"label":"floragreen","url":"floragreenController.js"}];
			var correctAnswer42 = [{"label":"green","url":"greenController.js"},{"label":"lightgreen","url":"lightGreenController.js"}];
			
			var result = false;
			try{
				result = arraysEqual(correctAnswer41,JSON.parse(document.getElementById('solution41').value)) && arraysEqual(correctAnswer42,JSON.parse(document.getElementById('solution42').value));
			}catch(e){}
			chrome.runtime.sendMessage({testName:testName,testResult:result}, function(response) {
			  //console.log(response.farewell);
			});
			
		},1000);
		break;
	case 'Solution5':
	case 'Test5':
		var testFunction5 = function(){
			var jsonString = document.getElementsByTagName('a')[0].onclick();
			
			var input = document.createElement('input');
			document.body.appendChild(input);
			input.id = 'solution5';
			input.type='hidden';
			input.value = jsonString;
		}
		
		appendFunctionToBody(testFunction5);
		
		setTimeout(function(){
			var testName = "Solution5";
			
			var result = false;
			try{
				JSON.parse(document.getElementById('solution5').value);
				result = true;
			}catch(e){	}
			try{
				JSON.parse(unescape(document.getElementById('solution5').value));
				result = true;
			}catch(e){	}
			try{
				JSON.parse(_.unescape(document.getElementById('solution5').value));
				result = true;
			}catch(e){	}
			
			chrome.runtime.sendMessage({testName:testName,testResult:result}, function(response) {
			  //console.log(response.farewell);
			});
			
		},1000);
		
		break;
}