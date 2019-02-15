<template>
  <div>
  
  </div>
</template>

<script>
  export default {
  
    data() {
      return {
        minSize: 5,
        maxSize: 50,
        newOn: 300
      };
    },
    methods: {
  
      mySnow() {
        var flake = "<div id='snowbox'></div>";
        var documentHeight = document.body.clientHeight();
        var documentWidth = document.body.clientWidth();
        defaults = {
          minSize: 10,
          maxSize: 20,
          newOn: 1000,
          flakeColor: "#ff0000"
        }
        options = this.extend({}, de, options);
        var interval = setInterval(c);
        var f = function() {
          var startPositionLeft = Math.random() * documentWidth - 100,
            startOpacity = 0.5 + Math.random(),
            sizeFlake = options.minSize + Math.random() * options.maxSize,
            endPositionTop = documentHeight - 200,
            endPositionLeft = startPositionLeft - 500 + Math.random() * 5000,
            durationFall = documentHeight * 10 + Math.random() * 5000;
          flake.clone().appendTo('body'.css({
              left: startPositionLeft,
              opacity: startOpacity,
              'font-size': sizeFlake,
              color: options.flakeColor
            })).animate({
              top: endPositionTop,
              left: endPositionLeft,
              opacity: 0.2
            }, durationFall, 'linear', function() {
              this.remove();
            })
          };
      }
  
  
  
    }
  };
</script>

<style>
  body {
    background-color: #000;
  }
  
  #snowbox {
    position: absolute;
    z-index: 99;
    top: -90px;
  }
</style>


