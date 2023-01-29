var SEPARATION = 230,
        AMOUNTX = 70,
        AMOUNTY = 70;
 
    var container;
    var camera, scene, renderer;
 
    var particles, particle, count = 0;
 
    var mouseX = 5000,
        mouseY = -500;
 
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    if ( window.location.pathname == "/" || window.location.pathname == "/index" || window.location.pathname == "/indexUA" || window.location.pathname == "/indexRU"){
        $('div canvas').remove();
        init();
        animate();
    } 

    
 
    function init() {
 
        container = document.createElement('div');
        document.body.appendChild(container);
 
        camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 4000;
 
        scene = new THREE.Scene();
 
        particles = new Array();
 
        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({
 
            color: 0x525252,
            program: function(context) {
 
                context.beginPath();
                context.arc(0, 0, .4, 0, PI2, true);
                context.fill();
 
            }
 
        });
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
 
            }
 
        }
 
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
 
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('touchstart', onDocumentTouchStart, false);
        document.addEventListener('touchmove', onDocumentTouchMove, false);
 
        //
 
        window.addEventListener('resize', onWindowResize, false);
 
    }
 
    function onWindowResize() {
 
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
 
        camera.aspect = (window.innerWidth / 2) / (window.innerHeight / 2);
        camera.updateProjectionMatrix();
 
        renderer.setSize(window.innerWidth, window.innerHeight);
 
    }
 
    //
 
    function onDocumentMouseMove(event) {
 
        mouseX = (event.clientX + 4800) / 2;
        mouseY = -500;
 
    }
 
    function onDocumentTouchStart(event) {
      if( window.innerWidth >= 600 ){
        if (event.touches.length === 1) {
 
          event.preventDefault();

          mouseX = event.touches[0].pageX - windowHalfX;
          mouseY = event.touches[0].pageY - windowHalfY;

      }
       } 
        else {
        //не выполнять
      } 
    };
      
 
    
 
    function onDocumentTouchMove(event) {
      if( window.innerWidth >= 600 ){
        if (event.touches.length === 1) {
 
          event.preventDefault();

          mouseX = event.touches[0].pageX - windowHalfX;
          mouseY = event.touches[0].pageY - windowHalfY;

      }
       } 
        else {
        //не выполнять
      } 
    };
 
    //
 
    function animate() {
 
        requestAnimationFrame(animate);
 
        render();
 
 
    }
 
    function render() {
 
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);
 
        var i = 0;
 
        for (var ix = 0; ix < AMOUNTX; ix++) {
 
            for (var iy = 0; iy < AMOUNTY; iy++) {
 
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
 
            }
 
        }
 
        renderer.render(scene, camera);
 
        count += 0.1;
 
    }