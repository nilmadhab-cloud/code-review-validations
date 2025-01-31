const canvas = document.querySelector('.canvas');
const cursor = document.querySelector('.cursor');
const box = document.querySelector('.box');
const info = document.querySelector('.info');
const scaleInput = document.querySelector('.scale-input');

let scale = 1;
let transformOrigin = '0% 0%';

// Box's initial position and dimensions
const boxRect = {
    left: 100,
    top: 100,
    width: 128,
    height: 128
};

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Update cursor position
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Calculate relative position from box's top-left corner
    const relativeX = ((mouseX - boxRect.left) / boxRect.width) * 100;
    const relativeY = ((mouseY - boxRect.top) / boxRect.height) * 100;

    // Set transform origin as percentage values
    transformOrigin = `${relativeX}% ${relativeY}%`;
    
    // Apply transform origin
    box.style.transformOrigin = transformOrigin;
    
    // Update info display
    info.textContent = `Transform Origin: (${Math.round(relativeX)}%, ${Math.round(relativeY)}%)`;
});

scaleInput.addEventListener('input', (e) => {
    scale = Number(e.target.value);
    box.style.transform = `scale(${scale})`;
});
