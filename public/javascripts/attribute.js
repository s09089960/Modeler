$(function(){
  $('#ControlTask').click(function(){
      var parameters = { value: 'ControlTask' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#NoneStartTemperatureEvent').click(function(){
     var parameters = { value: 'NoneStartTemperatureEvent' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#ReadCarbonMonoxideTask').click(function(){
      var parameters = { value: 'ReadCarbonMonoxideTask' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#ReadSmokeTask').click(function(){
      var parameters = { value: 'ReadSmokeTask' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#sequenceFlow').click(function(){
      var parameters = { value: 'sequenceFlow' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#StartTemperatureEvent').click(function(){
      var parameters = { value: 'StartTemperatureEvent' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});

$(function(){
  $('#switchTask').click(function(){
      var parameters = { value: 'switchTask' };
      $.get( '/attribute',parameters, function(data) {
        $('#textbox').html(data);
      });
  });
});