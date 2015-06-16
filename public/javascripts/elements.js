function elements(type){
      var parameters = { value: type };
      $.get( '/elements',parameters, function(data) {
        $('#elements').html(data);
      });
}

// $(function(){
//   $('#smoke').click(function(){
//       var parameters = { value: 'smoke' };
//       $.get( '/elements',parameters, function(data) {
//         $('#elements').html(data);
//       });
//   });
// });

// $(function(){
//   $('#thermometer').click(function(){
//       var parameters = { value: 'thermometer' };
//       $.get( '/elements',parameters, function(data) {
//         $('#elements').html(data);
//       });
//   });
// });