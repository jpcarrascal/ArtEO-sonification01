var numWaves = 8;
var offset = [0, 0];
var picker = document.getElementById('picker');

let row = document.getElementById("palette-row");
for (let i = 0; i < numWaves; i++) {
    let cell = row.insertCell(-1);
    cell.className = "palette-color";
    cell.id = "color-" + (i);
}

// Populate the dropdown with image options from the active collection
function populateImageDropdown() {
    const selectElement = document.getElementById('select-img');
    
    // Clear any existing options except the first default option
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
    
    // Get the appropriate image paths based on the active collection
    const activePaths = activeCollection === 'esa' ? esaImagePaths : nasaImagePaths;
    const categories = imageCategories[activeCollection];
    
    // Add image options grouped by category
    for (const category in categories) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        categories[category].forEach(path => {
            const option = document.createElement('option');
            option.value = path;
            // Extract the filename from the path
            const filename = path.split('/').pop().replace('.jpg', '').replace('.jpeg', '').replace('.gif', '');
            option.textContent = filename.replace(/_/g, ' ');
            optgroup.appendChild(option);
        });
        
        selectElement.appendChild(optgroup);
    }
    
    console.log(`Populated dropdown with ${activePaths.length} images from the ${activeCollection.toUpperCase()} collection`);
}

// Note: The dropdown is populated in the window.load event handler

// Add event listener for the image selection dropdown
document.getElementById('select-img').addEventListener('change', function(e) {
    if (this.value) {
        var selectedImg = new Image();
        selectedImg.setAttribute('id', 'img');
        selectedImg.onload = function() {
            processLoadedImage(selectedImg);
        };
        selectedImg.src = this.value;
    }
});

document.body.addEventListener('mousemove', function(e) {
    e.preventDefault();
});

document.getElementById('areaSize').addEventListener('change', function(e) {
    var areaSize = parseInt(this.value);
    console.log(areaSize);
    //picker.style.width = areaSize + "px";
    //picker.style.height = areaSize + "px";
}); 

document.getElementById('imageUpload').addEventListener('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.setAttribute('id', 'img');
        img.onload = function() {
            processLoadedImage(img);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

function pickerPosition(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    picker.style.left = (x) + 'px';
    picker.style.top  = (y) + 'px';
}

function mapNumber(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function getColorData(context, e, img) {
                
    var pixelData = context.getImageData(e.offsetX, e.offsetY, 1, 1).data;
    
    var areaSize = parseInt(document.getElementById('areaSize').value);
    var totalR = 0, totalG = 0, totalB = 0, totalA = 0, totalPixels = 0;
    for (var y = Math.max(0, e.offsetY - areaSize); y <= Math.min(img.height - 1, e.offsetY + areaSize); y++) {
        for (var x = Math.max(0, e.offsetX - areaSize); x <= Math.min(img.width - 1, e.offsetX + areaSize); x++) {
            var areaPixelData = context.getImageData(x, y, 1, 1).data;
            totalR += areaPixelData[0];
            totalG += areaPixelData[1];
            totalB += areaPixelData[2];
            totalA += areaPixelData[3];
            totalPixels++;
        }
    }
    var pixelColor = 'rgba(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ',' + pixelData[3] + ')';
    var averageColor = 'rgba(' + Math.round(totalR / totalPixels) + ',' + Math.round(totalG / totalPixels) + ',' + Math.round(totalB / totalPixels) + ',' + Math.round(totalA / totalPixels) + ')';
    document.getElementById('hoveredColor').style.backgroundColor = pixelColor;
    document.getElementById('averageColor').style.backgroundColor = averageColor;
    document.getElementById('picker').style.backgroundColor = averageColor;
    var rgb = [parseInt(totalR / totalPixels), parseInt(totalG / totalPixels), parseInt(totalB / totalPixels)];
    var cc = window.colorConvert;
    var hsl = cc.rgb2hsl(totalR / totalPixels, totalG / totalPixels, totalB / totalPixels);
    return({rgb: rgb, hsl: hsl});
}

function hsl2osc(hsl) {
    const pitches = [16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87, 32.70];
    var pitch = pitches[Math.round(hsl[0]/30)];
    var octIndex = Math.floor((hsl[1]/25));
    var oct = Math.pow(2, octIndex)*4*Math.sign(hsl[1]);
    return [pitch*oct, hsl[2]/100, 0.1, 10000];
}

var ambOsc = [];
for (var i = 0; i < numWaves; i++) {
    const tremolo = new Tone.Tremolo(9, 1).toDestination().start();    
    tremolo.spread.value = 180;
    tremolo.frequency.value = 0.01*(Math.pow(2, i));
    ambOsc[i] = new Tone.Oscillator(0, "triangle8").connect(tremolo);
    ambOsc[i].volume.value = -100;
}

// Help popup functionality moved to help.js

// Process loaded image function - to be used by both file upload and dropdown selection
function processLoadedImage(img) {
    console.log('Processing image:', img.src);
    document.getElementById('image-container').innerHTML = '';
    document.getElementById('image-container').appendChild(img);

    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(img, 0, 0, img.width, img.height);
    
    var isDragging = false;
    // Create a new oscillator for this image
    const reverb = new Tone.Reverb().toDestination();
    reverb.wet.value = 0.5;
    var imgOsc = new Tone.Oscillator(0, "triangle4").connect(reverb).start();
    imgOsc.volume.value = -100; // Start silent
    
    img.addEventListener('mousedown', function(e) {
        Tone.start();
        e.preventDefault();
        isDragging = true;
        img.style.cursor = "crosshair";
        pickerPosition(e);
    });

    img.addEventListener('mouseup', function(e) {
        isDragging = false;
        imgOsc.volume.rampTo(-100, 2);
        img.style.cursor = "auto";
    });

    img.addEventListener("mouseleave", function(e) {
        imgOsc.volume.rampTo(-100, 2);
    });

    img.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        var {rgb, hsl} = getColorData(context, e, this);
        var [frequency, volume, attack, filterF] = hsl2osc(hsl);
        imgOsc.frequency.rampTo(frequency);
        imgOsc.volume.rampTo(20*Math.log10(volume/2), 0.1);
        pickerPosition(e);
    });

    // Reset all ambient oscillators to silent
    for (var i = 0; i < numWaves; i++) {
        ambOsc[i].volume.rampTo(-100, 0.1);
    }

    // Process the image with ColorThief
    const colorThief = new ColorThief();
    var palette = colorThief.getPalette(img, numWaves);
    for (var i = 0; i < palette.length; i++) {
        document.getElementById('color-' + i).style.backgroundColor = 'rgb(' + palette[i][0] + ',' + palette[i][1] + ',' + palette[i][2] + ')';
        var hslTmp = colorConvert.rgb2hsl(palette[i][0], palette[i][1], palette[i][2]);
        var [frequency, volume, attack, filterF] = hsl2osc(hslTmp);
        ambOsc[i].frequency.value = frequency/2;
        ambOsc[i].volume.rampTo(20*Math.log10(volume/(numWaves*1.5)), 2);
        ambOsc[i].start();
    }
}

function loadRandomImage() {
    // Get the select element
    const selectElement = document.getElementById('select-img');
    
    // Get all option elements that have a value (exclude the default "Select an image" option)
    const options = Array.from(selectElement.querySelectorAll('option'))
        .filter(option => option.value && option.value.trim() !== '');
    
    // If there are no valid options, return
    if (options.length === 0) {
        console.error('No images available in the dropdown');
        return;
    }
    
    // Select a random option from the list
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    
    // Set the select value to the random option
    selectElement.value = randomOption.value;
    
    // Create and load the image
    const img = new Image();
    img.crossOrigin = "anonymous"; // To avoid CORS issues
    img.setAttribute('id', 'img');
    img.onload = function() {
        processLoadedImage(img);
    };
    img.onerror = function() {
        console.error('Error loading image:', randomOption.value);
    };
    img.src = randomOption.value;
    
    console.log('Loading random image:', randomOption.value);
}

// Load a random image from the dropdown on page load
window.addEventListener('load', function() {
    populateImageDropdown();
    loadRandomImage();
});

/**
 * Loads the next image from the dropdown list
 * If the last image is currently selected, it will loop back to the first image
 */
function loadNextImage() {
    // Get the select element
    const selectElement = document.getElementById('select-img');
    
    // Get all option elements that have a value (exclude the default "Select an image" option)
    const options = Array.from(selectElement.querySelectorAll('option'))
        .filter(option => option.value && option.value.trim() !== '');
    
    // If there are no valid options, return
    if (options.length === 0) {
        console.error('No images available in the dropdown');
        return;
    }
    
    // Find the index of the currently selected option
    const currentIndex = options.findIndex(option => option.value === selectElement.value);
    
    // Calculate the index of the next option, looping back to the beginning if needed
    const nextIndex = (currentIndex >= 0 && currentIndex < options.length - 1) ? currentIndex + 1 : 0;
    const nextOption = options[nextIndex];
    
    // Set the select value to the next option
    selectElement.value = nextOption.value;
    
    // Create and load the image
    const img = new Image();
    img.crossOrigin = "anonymous"; // To avoid CORS issues
    img.setAttribute('id', 'img');
    img.onload = function() {
        processLoadedImage(img);
    };
    img.onerror = function() {
        console.error('Error loading image:', nextOption.value);
    };
    img.src = nextOption.value;
    
    console.log('Loading next image:', nextOption.value);
}

// Add event listener for the next image button
document.getElementById('next-image').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    loadNextImage();
});