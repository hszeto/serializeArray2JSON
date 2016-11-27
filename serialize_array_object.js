;(function(global, $){

  // Create a new object
  var SA = function(form_obj){
    return new SA.init(form_obj);
  }

  // The actual object creation
  SA.init = function(form_obj){
    var self = this;

    // Set default value
    self.form_obj = form_obj || {};

    // Return an object with all key/value pairs in the form object
    return (function(){
      var obj = {};
      var arr = self.form_obj.serializeArray();
      $.each(arr, function() {
          if (obj[this.name] !== undefined) {
              if (!obj[this.name].push) {
                  obj[this.name] = [obj[this.name]];
              }
              obj[this.name].push(this.value || '');
          } else {
              obj[this.name] = this.value || '';
          }
      });
      return obj;
    })();
  }

  // Attach SA to the global object and provide a shorthand '$SA'
  global.SA = $SA = SA;

})(window, jQuery);