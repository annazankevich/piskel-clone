let mode = '';
let frames =  [];
let framePosition = 0;
let sizeX = 1;
let sizeY = 1;

document.getElementById('pen').addEventListener('click', function () {
    mode = 'draw-mode';

});
document.getElementById('colorPicker').addEventListener('click', function () {
    mode = 'piker-mode';
});
document.getElementById('eraser').addEventListener('click', function () {
    mode = 'erase-mode';
});
document.getElementById('bucket').addEventListener('click', function () {
    mode = 'paint-mode';
});


document.getElementById('size-picker-1').addEventListener('click', function () {
    sizeX = 1;
    sizeY = 1;
});

document.getElementById('size-picker-2').addEventListener('click', function () {
    sizeX = 2;
    sizeY = 2;
});
document.getElementById('size-picker-3').addEventListener('click', function () {
    sizeX = 3;
    sizeY = 3;
});
document.getElementById('size-picker-4').addEventListener('click', function () {
    sizeX = 4;
    sizeY = 4;
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridBtn = document.getElementById('gridBtn');
const sizeWidthInput = document.getElementById('sizeWidthInput');
const sizeHeightInput = document.getElementById('sizeHeightInput');
const sizeAspectRatioInput = document.getElementById('sizeAspectRatioInput');
const colorInput = document.getElementById('colorInput');
const clearBtn = document.getElementById('clearBtn');

//App variables
let mouseX = null, mouseY = null;
let size = {
    width: sizeWidthInput.value,
    height: sizeHeightInput.value
};
let showGrid = false;
let mousedown = false;
let lastPoint = null;
let gridMem =  localStorage.getItem('frames') || [];
let color = colorInput.value;

if(gridMem.length > 0) {
    console.log('frames', gridMem);
    const tempMem = [];
    for (let row = 0; row < size.width; row++) {
        tempMem[row] = [];
        for (let col = 0; col < size.height; col++) {
            tempMem[row][col] = gridMem[row][col];
            if (tempMem[row][col]) {
                console.log('1', );
                let x = row, y = col;
                gridMem = tempMem;
                updateGrid(x, y);
            }
        }
    }
    draw();
}

//Update canvas aspect ratio
//updateCanvas();

//Populate the gridMem
initGridMem();
//animation();

//Canvas drawing function
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (showGrid) {
        drawGrid()
    }

    for (let row = 0; row < size.width; row++) {
        for (let col = 0; col < size.height; col++) {
            if (gridMem[row][col]) {
                let x = row, y = col;
                ctx.beginPath();
                let ratio = {
                    x: canvas.width / size.width,
                    y: canvas.height / size.height,
                };

                ctx.rect(x * ratio.x, y * ratio.y, ratio.x, ratio.y);
                ctx.fillStyle = gridMem[row][col];
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    for (let y = 0; y < gridMem.length; y++) {
        for (let x = 0; x < gridMem[y].length; x++) {
            if (gridMem[y][x] === 1) {

            }
        }
    }

    if (mouseX !== null && mouseY !== null) {
        drawPixelAt(mouseX, mouseY)
    }

    requestAnimationFrame(draw)

}

draw();

//Drawing functions
function drawGrid() {
    //vertical lines
    for (let i = 1; i < size.width; i++) {
        ctx.beginPath();
        ctx.moveTo(i * (canvas.width / size.width), 0);
        ctx.lineTo(i * (canvas.width / size.width), canvas.height);
        ctx.strokeStyle = 'rgba(0,0,0,0.25)';
        ctx.stroke();
        ctx.closePath()
    }
    //horizontal lines
    for (let i = 1; i < size.height; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * (canvas.height / size.height));
        ctx.lineTo(canvas.width, i * (canvas.height / size.height));
        ctx.stroke();
        ctx.closePath()
    }
}

function drawPixelAt(x, y) {
    let position = {
        x: Math.floor(x / (canvas.width / size.width)) * (canvas.width / size.width),
        y: Math.floor(y / (canvas.height / size.height)) * (canvas.height / size.height),
    };

    ctx.beginPath();
    ctx.rect(position.x, position.y, 19 * sizeX, 19 * sizeY);
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fill();
    ctx.closePath()
}

//Helper functions
function toggleGrid() {
    showGrid = !showGrid
}

function updateGrid(x, y) {
    let position = {
        x: Math.floor(x / (canvas.width / size.width)),
        y: Math.floor(y / (canvas.height / size.height)),
    };
    let value = (mode === "erase-mode") ? false : color;

    if (lastPoint !== null &&
        (Math.abs(lastPoint.x - position.x) > 1 ||
            Math.abs(lastPoint.y - position.y) > 1)) {
        let difference = {
            x: lastPoint.x - position.x,
            y: lastPoint.y - position.y,
        };
        while (Math.abs(difference.x) > 1 || Math.abs(difference.y) > 1) {
            if (difference.x < -1) {
                difference.x += 1
            } else if (difference.x > 1) {
                difference.x -= 1
            }

            if (difference.y < -1) {
                difference.y += 1
            } else if (difference.y > 1) {
                difference.y -= 1
            }

            //gridMem[lastPoint.x - difference.x][lastPoint.y - difference.y] = value
            fillBySize(lastPoint.x - difference.x, lastPoint.y - difference.y, difference, value)
        }
    }

    //Check for right click to erase
    //gridMem[position.x][position.y] = value;
    fillBySize(position.x, position.y, null, value);
    lastPoint = position;
    saveSession(gridMem);
};

function fillBySize(x, y, difference, value) {
    let cursorX = sizeX;
    let cursorY = sizeY;
    for (let incX = 0; incX < cursorX; incX++) {
        for (let incY = 0; incY < cursorY; incY++) {
            if (gridMem[x + incX] !== undefined && gridMem[x + incX][y + incY] !== undefined) {
                gridMem[x + incX][y + incY] = value;
            }

        }
    }

}

function updateSizeWidth(e) {
    let aspectRatio = size.height / size.width;
    size.width = e.target.value;
    if (sizeAspectRatioInput.checked) {
        size.height = Math.floor(size.width * aspectRatio);
        sizeHeightInput.value = size.height
    } else {
        updateCanvas()
    }
    initGridMem()
}

function updateSizeHeight(e) {
    let aspectRatio = size.width / size.height;
    size.height = e.target.value;
    if (sizeAspectRatioInput.checked) {
        size.width = Math.floor(size.height * aspectRatio);
        sizeWidthInput.value = size.width
    } else {
        updateCanvas()
    }
    initGridMem()
}

function initGridMem() {
    let tempMem = [];
    //Populate the grid's memory
    for (let row = 0; row < size.width; row++) {
        tempMem[row] = [];
        for (let col = 0; col < size.height; col++) {
            tempMem[row][col] = 0
        }
    }
    gridMem = tempMem;

}


function updateCanvas() {
    let aspectRatio = size.width / size.height;
    canvas.width = Math.floor(canvas.height * aspectRatio)
}

function updateColor(e) {
    color = e.target.value;
    return color;
}

//Event functions

function saveState() {
    if (!frames[framePosition]) {
        frames[framePosition] = {};
    }
    frames[framePosition].base64img = canvas.toDataURL();
    frames[framePosition].gridMem = gridMem;
}

function mouseDownHandler(e) {

    if (mode !== "erase-mode" && mode !== "draw-mode") {
        return;
    }
    saveState();
    var rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left,
        y = e.clientY - rect.top
    ;
    //Check if on canvas
    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        mousedown = true;
        updateGrid(x, y, e)
    }
}

function mouseMoveHandler(e) {
    if (mode !== "erase-mode" && mode !== "draw-mode") {
        return;
    }
    saveState();
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    //Check if on canvas
    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        if (mousedown) {
            updateGrid(x, y, e)
        }
        mouseX = x;
        mouseY = y
    } else {
        mouseX = mouseY = null
    }
}


function mouseUpHandler() {
    if (frames[framePosition]) {
        document.getElementById('frame-preview-' + framePosition).style.backgroundImage = `url('${frames[framePosition].base64img}')`;
    }
    mousedown = false;
    lastPoint = null
}

let animationFramePosition = 0;
const element = document.querySelector('.animation');
let timer = setInterval(() => drawAnimation(element), getAnimationMs());

function drawAnimation(element) {
    if (frames[animationFramePosition]) {
        element.style.backgroundImage = `url(${frames[animationFramePosition].base64img})`;
    }
    animationFramePosition++;
    if (animationFramePosition >= frames.length) {
        animationFramePosition = 0;
    }
}

function getAnimationMs() {
    let inputFps = document.getElementById('preview-fps').value;
    let fps = parseInt(inputFps);
    return 1000 / fps;
}

function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return {x: curleft, y: curtop};
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}


function updateColorPicker(hex) {
    colorInput.value = hex;
    color = hex;
}


function addFrame() {
    saveState();
    const frameWrapper = document.getElementsByClassName('frame-wrapper')[0];
    const canvas = document.createElement('div');
    const addFrame = document.getElementById('addFrame');
    canvas.classList.add('frame');
    canvas.id = 'frame-preview-' + frames.length;
    frameWrapper.insertBefore(canvas, addFrame);


    const buttonDeleteFrame = document.createElement('button');
    buttonDeleteFrame.classList.add('button-delete-frame');
    buttonDeleteFrame.id = 'button-delete-' + frames.length;
    frameWrapper.insertBefore(buttonDeleteFrame, addFrame);
    const buttonCopyFrame = document.createElement('button');
    buttonCopyFrame.id = 'button-copy-' + frames.length;
    buttonCopyFrame.classList.add('button-copy-frame');
    frameWrapper.insertBefore(buttonCopyFrame, addFrame);
    framePosition = frames.length;
    saveState();


    buttonDeleteFrame.addEventListener("click", function () {
        frameWrapper.removeChild(canvas);
        frameWrapper.removeChild(buttonDeleteFrame);
        frameWrapper.removeChild(buttonCopyFrame);
        frames = frames.filter((frames, index) => index !== framePosition);
        saveState();
    });


    buttonCopyFrame.addEventListener("click", function () {
        frameWrapper.cloneNode(canvas);
        saveState();
    });

    initGridMem();
}

const addBtn = document.getElementById('addFrame');
//Event listeners
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);
gridBtn.addEventListener("click", toggleGrid, false);
sizeWidthInput.addEventListener('change', updateSizeWidth, false);
sizeHeightInput.addEventListener('change', updateSizeHeight, false);
colorInput.addEventListener('change', updateColor, false);
clearBtn.addEventListener('click', initGridMem, false);
addBtn.addEventListener('click', addFrame, false);
document.getElementById('canvas').addEventListener('click', function (e) {
    if (mode !== 'piker-mode') {
        return;
    }
    let pos = findPos(this);
    let x = e.pageX - pos.x;
    let y = e.pageY - pos.y;
    let c = this.getContext('2d');
    let p = c.getImageData(x, y, 1, 1).data;
    let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    updateColorPicker(hex);
    mode = '';
});
document.getElementsByClassName("frame-wrapper")[0].addEventListener("click", function (event) {
    if (event.target.className !== 'frame') {
        return
    }

    let clickedFramePosition = parseInt(event.target.id.split("frame-preview-")[1]);
    framePosition = clickedFramePosition;
    gridMem = frames[framePosition].gridMem;
});

document.getElementById("preview-fps").addEventListener("change", function (event) {
    clearInterval(timer);
    if (getAnimationMs() !== Infinity) {
        timer = setInterval(() => drawAnimation(element), getAnimationMs());
    }
    document.getElementById("display-fps").textContent = event.target.value + " FPS";
});
// let stack = [];
// function pixelBucket(hex,color,) {
//     let stack = [];
//     while (stack.length) {
//         const newPosition = stack.pop();
//         const x = newPosition[0];
//         const y = newPosition[1];
//     }
//
//         }

document.getElementById("newWindow").addEventListener("click", function () {
    const template = `<div class="element-window"></div><script>
    let animationFramePosition = 0;
    let timer = setInterval(drawAnimation, 60);
    const element = document.querySelector('.element-window');
    element.style.height = '100%';

    function drawAnimation() {
        if (frames[animationFramePosition]) {
            element.style.background = 'url(' + frames[animationFramePosition].base64img + ') no-repeat'
        }
        animationFramePosition++;
        if (animationFramePosition >= frames.length) {
            animationFramePosition = 0;
        }
    }
</script>`;

    let myWindow = window.open('', '', 'width=620,height=600');
    window.innerHeight; //to display height
    window.innerWidth; //to display width
    myWindow.frames = frames;
    let doc = myWindow.document;
    doc.open();
    doc.write(template);
    doc.close();
});

function saveSession(gridMem) {
    let serialObj = JSON.stringify(gridMem);
    localStorage.setItem("gridMem", serialObj);
}

// function bucket(gridMem, startX, startY, color) {
//     // const stack = [[startX, startY]];
//     if (baseColor !== color) {
//
//     }
//     //     while (stack.length) {
//     //         const position = stack.pop();
//     //         const x = position[0];
//     //         const y = position[1];
//     //
//     //         if ((x >= 0 && x < size) && (y >= 0 && y < size)) {
//     //             const curColor = arr[x][y];
//     //             if (baseColor === curColor) {
//     //                 arr[x][y] = color;
//     //                 stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
//     //             }
//     //         }
//     //     }
//     // }
// }
