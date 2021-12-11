jQuery(document).ready(function(){
    jQuery(".select-step").each(function(){
      jQuery(this).selectStep({
        incrementLabel: "+",
        decrementLabel: "-",
        onChange: function(value) {
          console.log(value, "value");
        }
      });
    });
  });