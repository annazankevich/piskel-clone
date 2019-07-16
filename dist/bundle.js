/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ \"./src/components/index.js\");\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test */ \"./src/components/test.js\");\n\n\n\nfunction initial() {\n    // index();\n    Object(_components_test__WEBPACK_IMPORTED_MODULE_1__[\"test\"])();\n}\n\ninitial();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let mode = '';\nlet frames =  [];\nlet framePosition = 0;\nlet sizeX = 1;\nlet sizeY = 1;\n\ndocument.getElementById('pen').addEventListener('click', function () {\n    mode = 'draw-mode';\n\n});\ndocument.getElementById('colorPicker').addEventListener('click', function () {\n    mode = 'piker-mode';\n});\ndocument.getElementById('eraser').addEventListener('click', function () {\n    mode = 'erase-mode';\n});\ndocument.getElementById('bucket').addEventListener('click', function () {\n    mode = 'paint-mode';\n});\n\n\ndocument.getElementById('size-picker-1').addEventListener('click', function () {\n    sizeX = 1;\n    sizeY = 1;\n});\n\ndocument.getElementById('size-picker-2').addEventListener('click', function () {\n    sizeX = 2;\n    sizeY = 2;\n});\ndocument.getElementById('size-picker-3').addEventListener('click', function () {\n    sizeX = 3;\n    sizeY = 3;\n});\ndocument.getElementById('size-picker-4').addEventListener('click', function () {\n    sizeX = 4;\n    sizeY = 4;\n});\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nconst gridBtn = document.getElementById('gridBtn');\nconst sizeWidthInput = document.getElementById('sizeWidthInput');\nconst sizeHeightInput = document.getElementById('sizeHeightInput');\nconst sizeAspectRatioInput = document.getElementById('sizeAspectRatioInput');\nconst colorInput = document.getElementById('colorInput');\nconst clearBtn = document.getElementById('clearBtn');\n\n//App variables\nlet mouseX = null, mouseY = null;\nlet size = {\n    width: sizeWidthInput.value,\n    height: sizeHeightInput.value\n};\nlet showGrid = false;\nlet mousedown = false;\nlet lastPoint = null;\nlet gridMem =  localStorage.getItem('frames') || [];\nlet color = colorInput.value;\n\nif(gridMem.length > 0) {\n    console.log('frames', gridMem);\n    const tempMem = [];\n    for (let row = 0; row < size.width; row++) {\n        tempMem[row] = [];\n        for (let col = 0; col < size.height; col++) {\n            tempMem[row][col] = gridMem[row][col];\n            if (tempMem[row][col]) {\n                console.log('1', );\n                let x = row, y = col;\n                gridMem = tempMem;\n                updateGrid(x, y);\n            }\n        }\n    }\n    draw();\n}\n\n//Update canvas aspect ratio\n//updateCanvas();\n\n//Populate the gridMem\ninitGridMem();\n//animation();\n\n//Canvas drawing function\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    if (showGrid) {\n        drawGrid()\n    }\n\n    for (let row = 0; row < size.width; row++) {\n        for (let col = 0; col < size.height; col++) {\n            if (gridMem[row][col]) {\n                let x = row, y = col;\n                ctx.beginPath();\n                let ratio = {\n                    x: canvas.width / size.width,\n                    y: canvas.height / size.height,\n                };\n\n                ctx.rect(x * ratio.x, y * ratio.y, ratio.x, ratio.y);\n                ctx.fillStyle = gridMem[row][col];\n                ctx.fill();\n                ctx.closePath();\n            }\n        }\n    }\n\n    for (let y = 0; y < gridMem.length; y++) {\n        for (let x = 0; x < gridMem[y].length; x++) {\n            if (gridMem[y][x] === 1) {\n\n            }\n        }\n    }\n\n    if (mouseX !== null && mouseY !== null) {\n        drawPixelAt(mouseX, mouseY)\n    }\n\n    requestAnimationFrame(draw)\n\n}\n\ndraw();\n\n//Drawing functions\nfunction drawGrid() {\n    //vertical lines\n    for (let i = 1; i < size.width; i++) {\n        ctx.beginPath();\n        ctx.moveTo(i * (canvas.width / size.width), 0);\n        ctx.lineTo(i * (canvas.width / size.width), canvas.height);\n        ctx.strokeStyle = 'rgba(0,0,0,0.25)';\n        ctx.stroke();\n        ctx.closePath()\n    }\n    //horizontal lines\n    for (let i = 1; i < size.height; i++) {\n        ctx.beginPath();\n        ctx.moveTo(0, i * (canvas.height / size.height));\n        ctx.lineTo(canvas.width, i * (canvas.height / size.height));\n        ctx.stroke();\n        ctx.closePath()\n    }\n}\n\nfunction drawPixelAt(x, y) {\n    let position = {\n        x: Math.floor(x / (canvas.width / size.width)) * (canvas.width / size.width),\n        y: Math.floor(y / (canvas.height / size.height)) * (canvas.height / size.height),\n    };\n\n    ctx.beginPath();\n    ctx.rect(position.x, position.y, 19 * sizeX, 19 * sizeY);\n    ctx.fillStyle = \"rgba(0,0,0,0.4)\";\n    ctx.fill();\n    ctx.closePath()\n}\n\n//Helper functions\nfunction toggleGrid() {\n    showGrid = !showGrid\n}\n\nfunction updateGrid(x, y) {\n    let position = {\n        x: Math.floor(x / (canvas.width / size.width)),\n        y: Math.floor(y / (canvas.height / size.height)),\n    };\n    let value = (mode === \"erase-mode\") ? false : color;\n\n    if (lastPoint !== null &&\n        (Math.abs(lastPoint.x - position.x) > 1 ||\n            Math.abs(lastPoint.y - position.y) > 1)) {\n        let difference = {\n            x: lastPoint.x - position.x,\n            y: lastPoint.y - position.y,\n        };\n        while (Math.abs(difference.x) > 1 || Math.abs(difference.y) > 1) {\n            if (difference.x < -1) {\n                difference.x += 1\n            } else if (difference.x > 1) {\n                difference.x -= 1\n            }\n\n            if (difference.y < -1) {\n                difference.y += 1\n            } else if (difference.y > 1) {\n                difference.y -= 1\n            }\n\n            //gridMem[lastPoint.x - difference.x][lastPoint.y - difference.y] = value\n            fillBySize(lastPoint.x - difference.x, lastPoint.y - difference.y, difference, value)\n        }\n    }\n\n    //Check for right click to erase\n    //gridMem[position.x][position.y] = value;\n    fillBySize(position.x, position.y, null, value);\n    lastPoint = position;\n    saveSession(gridMem);\n};\n\nfunction fillBySize(x, y, difference, value) {\n    let cursorX = sizeX;\n    let cursorY = sizeY;\n    for (let incX = 0; incX < cursorX; incX++) {\n        for (let incY = 0; incY < cursorY; incY++) {\n            if (gridMem[x + incX] !== undefined && gridMem[x + incX][y + incY] !== undefined) {\n                gridMem[x + incX][y + incY] = value;\n            }\n\n        }\n    }\n\n}\n\nfunction updateSizeWidth(e) {\n    let aspectRatio = size.height / size.width;\n    size.width = e.target.value;\n    if (sizeAspectRatioInput.checked) {\n        size.height = Math.floor(size.width * aspectRatio);\n        sizeHeightInput.value = size.height\n    } else {\n        updateCanvas()\n    }\n    initGridMem()\n}\n\nfunction updateSizeHeight(e) {\n    let aspectRatio = size.width / size.height;\n    size.height = e.target.value;\n    if (sizeAspectRatioInput.checked) {\n        size.width = Math.floor(size.height * aspectRatio);\n        sizeWidthInput.value = size.width\n    } else {\n        updateCanvas()\n    }\n    initGridMem()\n}\n\nfunction initGridMem() {\n    let tempMem = [];\n    //Populate the grid's memory\n    for (let row = 0; row < size.width; row++) {\n        tempMem[row] = [];\n        for (let col = 0; col < size.height; col++) {\n            tempMem[row][col] = 0\n        }\n    }\n    gridMem = tempMem;\n\n}\n\n\nfunction updateCanvas() {\n    let aspectRatio = size.width / size.height;\n    canvas.width = Math.floor(canvas.height * aspectRatio)\n}\n\nfunction updateColor(e) {\n    color = e.target.value;\n    return color;\n}\n\n//Event functions\n\nfunction saveState() {\n    if (!frames[framePosition]) {\n        frames[framePosition] = {};\n    }\n    frames[framePosition].base64img = canvas.toDataURL();\n    frames[framePosition].gridMem = gridMem;\n}\n\nfunction mouseDownHandler(e) {\n\n    if (mode !== \"erase-mode\" && mode !== \"draw-mode\") {\n        return;\n    }\n    saveState();\n    var rect = canvas.getBoundingClientRect();\n    let x = e.clientX - rect.left,\n        y = e.clientY - rect.top\n    ;\n    //Check if on canvas\n    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {\n        mousedown = true;\n        updateGrid(x, y, e)\n    }\n}\n\nfunction mouseMoveHandler(e) {\n    if (mode !== \"erase-mode\" && mode !== \"draw-mode\") {\n        return;\n    }\n    saveState();\n    let rect = canvas.getBoundingClientRect();\n    let x = e.clientX - rect.left,\n        y = e.clientY - rect.top;\n\n    //Check if on canvas\n    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {\n        if (mousedown) {\n            updateGrid(x, y, e)\n        }\n        mouseX = x;\n        mouseY = y\n    } else {\n        mouseX = mouseY = null\n    }\n}\n\n\nfunction mouseUpHandler() {\n    if (frames[framePosition]) {\n        document.getElementById('frame-preview-' + framePosition).style.backgroundImage = `url('${frames[framePosition].base64img}')`;\n    }\n    mousedown = false;\n    lastPoint = null\n}\n\nlet animationFramePosition = 0;\nconst element = document.querySelector('.animation');\nlet timer = setInterval(() => drawAnimation(element), getAnimationMs());\n\nfunction drawAnimation(element) {\n    if (frames[animationFramePosition]) {\n        element.style.backgroundImage = `url(${frames[animationFramePosition].base64img})`;\n    }\n    animationFramePosition++;\n    if (animationFramePosition >= frames.length) {\n        animationFramePosition = 0;\n    }\n}\n\nfunction getAnimationMs() {\n    let inputFps = document.getElementById('preview-fps').value;\n    let fps = parseInt(inputFps);\n    return 1000 / fps;\n}\n\nfunction findPos(obj) {\n    var curleft = 0, curtop = 0;\n    if (obj.offsetParent) {\n        do {\n            curleft += obj.offsetLeft;\n            curtop += obj.offsetTop;\n        } while (obj = obj.offsetParent);\n        return {x: curleft, y: curtop};\n    }\n    return undefined;\n}\n\nfunction rgbToHex(r, g, b) {\n    if (r > 255 || g > 255 || b > 255)\n        throw \"Invalid color component\";\n    return ((r << 16) | (g << 8) | b).toString(16);\n}\n\n\nfunction updateColorPicker(hex) {\n    colorInput.value = hex;\n    color = hex;\n}\n\n\nfunction addFrame() {\n    saveState();\n    const frameWrapper = document.getElementsByClassName('frame-wrapper')[0];\n    const canvas = document.createElement('div');\n    const addFrame = document.getElementById('addFrame');\n    canvas.classList.add('frame');\n    canvas.id = 'frame-preview-' + frames.length;\n    frameWrapper.insertBefore(canvas, addFrame);\n\n\n    const buttonDeleteFrame = document.createElement('button');\n    buttonDeleteFrame.classList.add('button-delete-frame');\n    buttonDeleteFrame.id = 'button-delete-' + frames.length;\n    frameWrapper.insertBefore(buttonDeleteFrame, addFrame);\n    const buttonCopyFrame = document.createElement('button');\n    buttonCopyFrame.id = 'button-copy-' + frames.length;\n    buttonCopyFrame.classList.add('button-copy-frame');\n    frameWrapper.insertBefore(buttonCopyFrame, addFrame);\n    framePosition = frames.length;\n    saveState();\n\n\n    buttonDeleteFrame.addEventListener(\"click\", function () {\n        frameWrapper.removeChild(canvas);\n        frameWrapper.removeChild(buttonDeleteFrame);\n        frameWrapper.removeChild(buttonCopyFrame);\n        frames = frames.filter((frames, index) => index !== framePosition);\n        saveState();\n    });\n\n\n    buttonCopyFrame.addEventListener(\"click\", function () {\n        frameWrapper.cloneNode(canvas);\n        saveState();\n    });\n\n    initGridMem();\n}\n\nconst addBtn = document.getElementById('addFrame');\n//Event listeners\ndocument.addEventListener(\"mousemove\", mouseMoveHandler, false);\ndocument.addEventListener(\"mousedown\", mouseDownHandler, false);\ndocument.addEventListener(\"mouseup\", mouseUpHandler, false);\ngridBtn.addEventListener(\"click\", toggleGrid, false);\nsizeWidthInput.addEventListener('change', updateSizeWidth, false);\nsizeHeightInput.addEventListener('change', updateSizeHeight, false);\ncolorInput.addEventListener('change', updateColor, false);\nclearBtn.addEventListener('click', initGridMem, false);\naddBtn.addEventListener('click', addFrame, false);\ndocument.getElementById('canvas').addEventListener('click', function (e) {\n    if (mode !== 'piker-mode') {\n        return;\n    }\n    let pos = findPos(this);\n    let x = e.pageX - pos.x;\n    let y = e.pageY - pos.y;\n    let c = this.getContext('2d');\n    let p = c.getImageData(x, y, 1, 1).data;\n    let hex = \"#\" + (\"000000\" + rgbToHex(p[0], p[1], p[2])).slice(-6);\n    updateColorPicker(hex);\n    mode = '';\n});\ndocument.getElementsByClassName(\"frame-wrapper\")[0].addEventListener(\"click\", function (event) {\n    if (event.target.className !== 'frame') {\n        return\n    }\n\n    let clickedFramePosition = parseInt(event.target.id.split(\"frame-preview-\")[1]);\n    framePosition = clickedFramePosition;\n    gridMem = frames[framePosition].gridMem;\n});\n\ndocument.getElementById(\"preview-fps\").addEventListener(\"change\", function (event) {\n    clearInterval(timer);\n    if (getAnimationMs() !== Infinity) {\n        timer = setInterval(() => drawAnimation(element), getAnimationMs());\n    }\n    document.getElementById(\"display-fps\").textContent = event.target.value + \" FPS\";\n});\n// let stack = [];\n// function pixelBucket(hex,color,) {\n//     let stack = [];\n//     while (stack.length) {\n//         const newPosition = stack.pop();\n//         const x = newPosition[0];\n//         const y = newPosition[1];\n//     }\n//\n//         }\n\ndocument.getElementById(\"newWindow\").addEventListener(\"click\", function () {\n    const template = `<div class=\"element-window\"></div><script>\n    let animationFramePosition = 0;\n    let timer = setInterval(drawAnimation, 60);\n    const element = document.querySelector('.element-window');\n    element.style.height = '100%';\n\n    function drawAnimation() {\n        if (frames[animationFramePosition]) {\n            element.style.background = 'url(' + frames[animationFramePosition].base64img + ') no-repeat'\n        }\n        animationFramePosition++;\n        if (animationFramePosition >= frames.length) {\n            animationFramePosition = 0;\n        }\n    }\n</script>`;\n\n    let myWindow = window.open('', '', 'width=620,height=600');\n    window.innerHeight; //to display height\n    window.innerWidth; //to display width\n    myWindow.frames = frames;\n    let doc = myWindow.document;\n    doc.open();\n    doc.write(template);\n    doc.close();\n});\n\nfunction saveSession(gridMem) {\n    let serialObj = JSON.stringify(gridMem);\n    localStorage.setItem(\"gridMem\", serialObj);\n}\n\n// function bucket(gridMem, startX, startY, color) {\n//     // const stack = [[startX, startY]];\n//     if (baseColor !== color) {\n//\n//     }\n//     //     while (stack.length) {\n//     //         const position = stack.pop();\n//     //         const x = position[0];\n//     //         const y = position[1];\n//     //\n//     //         if ((x >= 0 && x < size) && (y >= 0 && y < size)) {\n//     //             const curColor = arr[x][y];\n//     //             if (baseColor === curColor) {\n//     //                 arr[x][y] = color;\n//     //                 stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);\n//     //             }\n//     //         }\n//     //     }\n//     // }\n// }\n\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\nfunction test() {\n    console.log('test', );\n}\n\n\n//# sourceURL=webpack:///./src/components/test.js?");

/***/ })

/******/ });