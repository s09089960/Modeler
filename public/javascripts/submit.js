String.prototype.allReplace = function(obj) {
  var retStr = this
  for (var x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
  }
  return retStr
}

//Click ControlTask
$(function(){
  $('#control_task_submit').click(function(){
	    var parameters = { value: 'ControlTask' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({'id=': 'id="' + $('#id').val() + '"', 
	      	'name=': 'name="' + $('#name').val() + '"', 
	      	'scriptFormat=': 'scriptFormat="' + $('#scriptFormat').val() + '"', 
	      	'activiti:autoStoreVariables=': 'activiti_autoStoreVariables="' + $('#activiti_autoStoreVariables').val() + '"',
	      	'<script>': '<script>' + $('#script').val()})
	      $('#results').text(update_data);
	    });
  });
});

//Click NoneStartTemperatureEvent
$(function(){
  $('#none_start_temp_event_submit').click(function(){
	    var parameters = { value: 'NoneStartTemperatureEvent' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({'id=': 'id="' + $('#id').val() + '"', 
	      	'name=': 'name="' + $('#name').val() + '"'})
	      $('#results').text(update_data);
	    });
  });
});

//Click ReadCarbonMonoxideTask
$(function(){
  $('#read_co_task_submit').click(function(){
	    var parameters = { value: 'ReadCarbonMonoxideTask' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({'id=': 'id="' + $('#id').val() + '"', 
	      	'name= ': 'name="' + $('#name').val() + '" ', 
	      	'Co-01': $('#activiti_string').val()})
	      $('#results').text(update_data);
	    });
  });
});

//Click ReadSmokeTask
$(function(){
  $('#read_smoke_task_submit').click(function(){
	    var parameters = { value: 'ReadSmokeTask' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({'id=': 'id="' + $('#id').val() + '"', 
	      	'name= ': 'name="' + $('#name').val() + '" ', 
	      	'Smoke-01': $('#activiti_string').val()})
	      $('#results').text(update_data);
	    });
  });
});

//Click sequenceFlow
$(function(){
  $('#sequence_flow_submit').click(function(){
	    var parameters = { value: 'sequenceFlow' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({'id=': 'id="' + $('#id').val() + '"', 
	      	'>=50ppm': $('#name').val(), 
	      	'sourceRef=': 'sourceRef="' + $('#sourceRef').val() + '"', 
	      	'targetRef=': 'targetRef="' + $('#targetRef').val() + '"', 
	      	'ppm>=50': $('#conditionExpression').val()})
	      $('#results').text(update_data);
	    });
  });
});

//Click StartTemperatureEvent
$(function(){
  $('#start_temp_event_submit').click(function(){
	    var parameters = { value: 'StartTemperatureEvent' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({ 
	      	'<mode>': '<mode>' + $('#mode').val(), 
	      	'<condition>': '<condition>' + $('#condition').val(),
	      	'<time>': '<time>' + $('#time').val(),
	      	'<sensor_id>': '<sensor_id>' + 'Temp-001'})
	      $('#results').text(update_data);
	    });
  });
});

//Click SwitchTask
$(function(){
  $('#switch_task_submit').click(function(){
	    var parameters = { value: 'switchTask' };
	    $.get( '/submit',parameters, function(data) {
	      var update_data = data.allReplace({ 
	      	'<mode>': '<mode>' + $('#mode').val()})
	      $('#results').text(update_data);
	    });
  });
});