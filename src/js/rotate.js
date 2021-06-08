const rotate = (elementSelector) => {
    let active = false,
        angle = 0,
        rotation = 0,
        startAngle = 0,
        center = {
            x: 0,
            y: 0
        },
        R2D = 360 / Math.PI;

    const rot = document.querySelector(elementSelector);

    const start = function(e) {
        e.preventDefault();
        const bb = this.getBoundingClientRect(),
              t = bb.top,
              l = bb.left,
              h = bb.height,
              w = bb.width,
              center = {
                  x: l + (w / 2),
                  y: t + (h / 2)
              };
        
        let x = e.clientX - center.x, 
            y = e.clientY - center.y;
        
        startAngle = R2D * Math.atan2(y, x);
        return active = true;
    };

    const rotate = function(e) {
        e.preventDefault();
        const x = e.clientX - center.x,
              y = e.clientY - center.y,
              d = R2D * Math.atan2(y, x);

        rotation = d - startAngle;
        return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
    };

    const stop = () => {
        angle += rotation;
        return active = false;
    };

    const init = () => {
        rot.addEventListener('mousedown', start);
        document.addEventListener('mousemove', (e) => {
            if (active) {
                e.preventDefault();
                rotate(e);
            }
        });
        document.addEventListener('mouseup', (e) => {
            e.preventDefault();
            stop(e);
        });
    };

    init();
};

export { rotate };