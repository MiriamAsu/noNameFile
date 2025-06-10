let heading = document.getElementById('heading');
let paragraph = document.getElementById('text');
let img = document.getElementById('Forestry image');

paragraph.textContent = 'The tropical rainorest was alive with the sights and sound of nature. The canopy above was a vibrant tapestry of greens, with sunlight filtering through the leaves in dapple patterns. The air was thick with the sweet scent of blooming flowers and the earthly smell of damp soil. The calls of exotic birds echoed through the forest, mingling with the rustling of leaves and the gentle patter of raindrops on the leaves.'

function changecolor(){
    if (paragraph.style.color === ' white'){
        paragraph.style.colr = 'yellow';
    }else if (paragraph.style.color === 'yellow'){
        paragraph.style.color = 'green';
    }else{
        paragraph.style.color = 'white';
    }
}
paragraph.addEventListener('mouseover', changecolor);