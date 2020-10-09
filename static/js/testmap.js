
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0YXN0cjBwaGljIiwiYSI6ImNrZmVqbDd0NjAybXoydG83ejU2aGx3cHMifQ.MtO9FDp8gOFPc3KamOV4hg'
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/katastr0phic/ckg2iqg5u0icm1ao1uhrrjbwh'
    })
    map.on('load', function () {
        var layers = ['0-100', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
        var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
    for (i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var color = colors[i];
      var item = document.createElement('div');
      var key = document.createElement('span');
      key.className = 'legend-key';
      key.style.backgroundColor = color;

  
    }
    map.on('click', function (e) {
      var states = map.queryRenderedFeatures(e.point, {
        layers: ['state-data']
      });

      if (states.length > 0) {
        document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> Sexual Assault Cases</em></p>';
      } else {
        document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
      }
    });
    map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);
    });