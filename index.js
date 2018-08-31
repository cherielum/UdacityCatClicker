// MODEL

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Claire',
            imgSrc: 'img/1.jpg',
            imgAttribution : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        },
        {
            clickCount : 0,
            name : 'Chewie',
            //imgSrc: 'img/2.jpg',
            imgAttribution : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        },
        {
            clickCount : 0,
            name : 'Connor',
            //imgSrc: 'img/3.jpg',
            imgAttribution : 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/12_December/what+do+Russian+Blue+cats+look+like+_+cat+resting+on+a+sofa.jpg'
        },
        {
            clickCount : 0,
            name : 'Fish',
            //imgSrc: 'img/4.jpg',
            imgAttribution : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        },
        {
            clickCount : 0,
            name : 'Howard',
            //imgSrc: 'img/5.jpg',
            imgAttribution : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
        },
    ]
};

//Octopus
var octopus = {
    init: function() {
        // setting current cat to be first cat
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    getCats: function() {
        return model.cats;
    },
    //setting currently selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    //increment counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};

//The View
var catView = {
    init: function() {
        //store pointers to our DOM elements for access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        //on click, iuncrememnt the current cat's counter
        this.catImageElem.addEventListener('click', function() {
            octopus.incrementCounter();
        });

        //Updating DOM elements w/ right values
        this.render();
    },
    render: function() {
        //update the DOM elements with values from current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgAttribution;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();

// var i = 0;
// var x =0;
// var y =0;
// var z =0;
// var a =0;

// function buttonClick() {
//     i++;
//     //document.getElementById('number1').value = i;
//     document.getElementById('number1').innerText = i;
// }

// function buttonClick2() {
//     x++;
//     //document.getElementById('number2').value = x;
//     document.getElementById('number2').innerText = x;
// }

// function buttonClick3() {
//     y++;
//     //document.getElementById('number2').value = x;
//     document.getElementById('number3').innerText = y;
// }

// function buttonClick4() {
//     z++;
//     //document.getElementById('number2').value = x;
//     document.getElementById('number4').innerText = z;
// }

// function buttonClick5() {
//     a++;
//     //document.getElementById('number2').value = x;
//     document.getElementById('number5').innerText = a;
// }


// <h2>Name: Claire </h2>
// <h2> Number of Clicks: <span type="text" id="number1" value="0" class = "clicks"> 0 </span> </h2>

// <input type="image" id="image1" class="images" onclick="buttonClick()" src="" />


// <h2>Name: Chewie </h2>
// <h2> Number of Clicks: <span type="text" id="number2" value="0" class = "clicks"> 0 </span> </h2>


// <input type="image" id="image2" class="images" onclick="buttonClick2()" src="" />


// <h2>Name: Connor </h2>
// <h2> Number of Clicks: <span type="text" id="number3" value="0" class = "clicks"> 0 </span> </h2>


// <input type="image" id="image3" class="images" onclick="buttonClick3()" src=""/>


// <h2>Name: Fish </h2>
// <h2> Number of Clicks: <span type="text" id="number4" value="0" class = "clicks"> 0 </span> </h2>


// <input type="image" id="image4" class="images" onclick="buttonClick4()" src="" />


// <h2>Name: Howard </h2>
// <h2> Number of Clicks: <span type="text" id="number5" value="0" class = "clicks"> 0 </span> </h2>


// <input type="image" id="image5" class="images" onclick="buttonClick5()" src="" />