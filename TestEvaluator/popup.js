var totalCorrect = 0,totalQuestions=0;

var evaluationHandler = function(){
	var passwd=document.getElementById('passwd').value;
	if(passwd === 'nn'){		
		var strCode="var scriptOptions = {role:'blank'};";
		chrome.tabs.executeScript(null, {code: strCode,allFrames:true}, function(){
			chrome.tabs.executeScript(null, {file: "jquery-1.9.1.js",allFrames:true});		
			chrome.tabs.executeScript(null, {file: "content_script_evaluate.js",allFrames:true});		
		});
	}else{
		alert("Incorrect Password");
	}
};

document.getElementById('evaluateResults').addEventListener('click', evaluationHandler);
$("#passwd").keypress(function(event){
	if(event.keyCode===13){
		evaluationHandler();
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(request);
	var ul = document.getElementById('results');
	var li = document.createElement('li');
	li.innerHTML = request.testName + " - " + (request.testResult?"Correct":"Wrong");
	ul.appendChild(li);
	totalQuestions++;
	request.testResult && totalCorrect++;
	$("#score").html(totalCorrect + "/"+ totalQuestions);
});
