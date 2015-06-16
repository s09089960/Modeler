$(function(){
  $('#ControlTask').click(function(){
      var parameters = { value: 'ControlTask' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#NoneStartTemperatureEvent').click(function(){
     var parameters = { value: 'NoneStartTemperatureEvent' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#ReadCarbonMonoxideTask').click(function(){
      var parameters = { value: 'ReadCarbonMonoxideTask' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#ReadSmokeTask').click(function(){
      var parameters = { value: 'ReadSmokeTask' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#sequenceFlow').click(function(){
      var parameters = { value: 'sequenceFlow' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#StartTemperatureEvent').click(function(){
      var parameters = { value: 'StartTemperatureEvent' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});

$(function(){
  $('#switchTask').click(function(){
      var parameters = { value: 'switchTask' };
      $.get( '/event',parameters, function(data) {
        $('#results').text(data);
      });
  });
});