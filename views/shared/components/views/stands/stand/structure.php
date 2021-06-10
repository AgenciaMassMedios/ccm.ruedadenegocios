<div id="vtcontainer">
    <div id="ui">

        <img id="render" src="resources/images/stands/stand.png" alt="Stands">
        <div id="space">
            <div id="container-space">
                <a id="a-1" class="gallery" href="resources/images/stands/loading.gif" data-lightbox="example-set"><img id="img-1" class="gallery" src="resources/images/stands/loading.gif"></a>
                <a id="a-2" class="gallery" href="resources/images/stands/loading.gif" data-lightbox="example-set"><img id="img-2" class="gallery" src="resources/images/stands/loading.gif"></a>
                <a id="a-3" class="gallery" href="resources/images/stands/loading.gif" data-lightbox="example-set"><img id="img-3" class="gallery" src="resources/images/stands/loading.gif"></a>
                <img id="img-logo" src="resources/images/stands/loading-logo.gif">
                <a id="banner" href="resources/images/auditorio/main.jpg" data-lightbox="example-set"></a>
                <a class="toggle out" href="stands?pabellon=naranja"><img src="resources/images/inicio/salir.png"></a>
            </div>
        </div>

    </div>
</div>

<div id="rotate">
    <img src="resources/images/rotatedevice.gif" alt="rotate device">
</div>

<div class="box" id="social">

</div>

<div id="gallery">
    <div class="content">
        <div id="gallery-content">

        </div>
    </div>
</div>

<script>
    function toggleGallery() {
        document.getElementById('gallery').classList.toggle('active');
    }
    window.addEventListener('click', function(e) {
        if (!document.getElementById('gallery-content').contains(e.target) && document.getElementById('gallery').classList.contains('active')) {
            toggleGallery();
        }
    })
</script>