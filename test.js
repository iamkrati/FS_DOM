


// document.querySelector(".btn").addEventListener("click",(e)=>show(e));
//   show());
function show() {
    //   e.preventDefault();
      let search=document.getElementById("searchi");
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`).then(response => {
        return response.json();
    }).then(data => {
        let html = "";
        // console.log(data);
        data.forEach(d => {
            // console.log(d.name);
            let url=d.show.image.original;
            // console.log(url);
            let h = `<img src=${url}>`;
            html += h;
        });
        document.querySelector(".imager").innerHTML = html;
    })
        .catch(error => {
            console.log(error);
        });
}

const gray = document.querySelector('.circle1');
const pink = document.querySelector('.circle2');
const blue = document.querySelector('.circle3');
const green = document.querySelector('.circle4');
const black = document.querySelector('.circle5');

gray.addEventListener('click', () => changeTheme('gray'));
pink.addEventListener('click', () => changeTheme('pink'));
blue.addEventListener('click', () => changeTheme('blue'));
green.addEventListener('click', () => changeTheme('green'));
black.addEventListener('click', () => changeTheme('black'));

function changeTheme(color) {
    document.body.style.backgroundColor = color;
    // document.querySelector(".color").display=none;
    if (color == "gray") {
        document.querySelector(".container").style.border="2px solid black";
        document.querySelector(".color1").style.backgroundColor = color;
    }
    if (color == "green") {
        document.querySelector(".container").style.border="2px solid black";
        document.querySelector(".color2").style.backgroundColor = color;
    }
    if (color == "pink") {
        // document.querySelector(".color").display="block";
        document.querySelector(".container").style.border="2px solid black";
        document.querySelector(".color3").style.backgroundColor = color;
    }
    if (color == "blue") {
        // document.querySelector(".color").display="block";
        document.querySelector(".container").style.border="2px solid black";
        document.querySelector(".color4").style.backgroundColor = color;
    }
    if (color == "black") {
        // document.querySelector(".color").display="block";
   document.querySelector(".container").style.border="2px solid white";
        document.querySelector(".color5").style.backgroundColor = color;
        // document.getElementById("text").style.color=white;
    }

}

