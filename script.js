const images = [ '/images/popular-burger-big.png','/images/pchick.png', '/images/popular-burger-classic.png', '/images/popular-burger-grill.png','./images/popular-burger-meat.png'];
const colors = ['#B0C4DE','#27E42E','#F5F5F5','#D3D3D3'];
const text1  =[`Big Platte Burger`,`Chicken Burger`,`Classic Burger`,`Grilled Burger`,`Meat Burger`]
let currentImageIndex = 0;
let currentColorIndex = 0;
let currentText1=0

function changeStyle() {
    // Update image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.product').src = images[currentImageIndex];
    
    // Update background color of the section
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.querySelector('.sec').style.backgroundColor = colors[currentColorIndex];

    //text change 
    currentText1 = (currentText1 + 1) % text1.length;
    document.querySelector('.names1').innerHTML = text1[currentText1];

    //text colour change


}

document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    document.querySelectorAll('.search-item').forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
