window.onmessage = (e) => {
    if (e.data.hasOwnProperty("frameHeight")) {
        document.getElementById("iframe").style.height = `${e.data.frameHeight + 30}px`;
    } 55
    // get framewidth
    if (e.data.hasOwnProperty("frameWidth")) {
        document.getElementById("iframe").style.width = `${e.data.frameWidth}px`;
    }
};