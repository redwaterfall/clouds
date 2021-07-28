
console.clear();
let lakeQuote = document.querySelector('#lakeQuote');

let cloudTop = document.querySelector('#cloudTop');
let cloudTopMoutains = document.querySelector('#cloudTopMoutains');

let cloudOne = document.querySelector('#cloudOne');
let cloudTwo = document.querySelector('#cloudTwo');

window.addEventListener('scroll',()=>{
     let totalHeight = parseInt(document.documentElement.offsetHeight)  - parseInt(document.documentElement.clientHeight);
     let pros = window.pageYOffset/totalHeight;
     cloudTopFunction(pros)
     cloudTopMoutainsFunction(pros)
     
     cloudTwoFunction(pros);
     lakeQuoteFunction(pros)
})
function cloudTopFunction(pros){
    cloudTop.style.transition = '2s linear'
    if(pros > 0.05){
        cloudTop.style.height = `${130}%`
    }
    else{
        cloudTop.style.height = `${0}%`
    }
    
}
function cloudTopMoutainsFunction(pros){
    cloudTopMoutains.style.transition = '2s linear'
    if(pros > 0.45){
        cloudTopMoutains.style.height = `${10}%`
    }
    else{
        cloudTopMoutains.style.height = `${100}%`
    }
    
}

function cloudTwoFunction(pros){
    cloudTwo.style.transition = '2s ease'
    if(pros > 0.91){
        cloudTwo.style.height = `${0}%`
    }
    else{
        cloudTwo.style.height = `${100}%`
    }
    
}

function lakeQuoteFunction(pros){
    lakeQuote.style.transition = '2s ease'
    if(pros > 0.99){
        lakeQuote.style.opacity  = 1
    }
    else{
        lakeQuote.style.opacity = 0
    }
    
}