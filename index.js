var Alexa = require('alexa-sdk');


var handlers = {
    
	'LaunchRequest': function() {
        
		this.response.speak('Do you want to add, subtract or divide?').listen();

        	this.emit(':responseReady');

        
    
	},
  
	'AddIntent': function() {

   	 	this.response.speak('What are the two numbers you want to add?').listen();

    		this.emit(':responseReady');

	},
  
	'SetNumIntent': function() {

    		var num1 = parseInt(this.event.request.intent.slots.firstNum.value,10);

    		var num2 = parseInt(this.event.request.intent.slots.secondNum.value,10);
    
    		var sum = num1 + num2;

    		this.emit(':tell','The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);

	}

};


exports.handler = function(event, context, callback){

    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);

    alexa.execute();

};