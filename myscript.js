/**********************************************
          Readable lines
**********************************************/
/* choose theme from
- forest
- winter
- retro 
- sunset
- castle
- xmas
- cloudy
- greece
- neon
- bali
- firefly
- candy */
/* const theme = "firefly"; */

// Get theme from session storage if it exists
var theme = sessionStorage.getItem("theme");

// If no theme in session storage, select a random one and store it
if (!theme) {
  var themes = ["forest", "winter", "retro", "sunset", "castle", "xmas", "cloudy", "greece", "neon", "bali", "firefly", "candy"];
  //theme = themes[Math.floor(Math.random() * themes.length)];
  var now = new Date();
    
  // Get the day of the year (0-365)
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  
  // Use the day of the year to get a theme
  theme = themes[day % themes.length];
  sessionStorage.setItem("theme", theme); // Store the theme in session storage
}
/**********************************************
            Change Theme code
**********************************************/

/************** the color(i) applies to all the following classes: 
color1: 
- full-length-devider1 (in index, academic, diary, and /_notes/data) 
- upper-icon (in /_includes/nav) 
- footer (in /_includes/footer)
color2: 
- full-length-devider2 
- background-box (in /_pages/index)
color3: 
- full-length-devider3
- home-decoration-string (in /_pages/index)
color4: 
- full-length-devider4 
- diary-decoration-string (in /_pages/diary)
- diary-box-content
****************/




const color1 = {
  winter: "#293B5F",
  forest: "#064635",
  retro: "#464660",
  sunset: "#0F2C67",
  castle: "#542E71",
  xmas: "#AA3A3A",
  cloudy: "#333C83",
  greece: "#178fd6",
  neon: "#060047",
  bali: "#AE431E",
  firefly: "#184D47",
  candy: "#FF55BB"
};

const color2 = {
  winter: "#47597E",
  forest: "#519259",
  retro: "#368B85",
  sunset: "#CD1818",
  castle: "#EFB1FF",
  xmas: "#A4B787",
  cloudy: "#F24A72",
  greece: "#ccdde8",
  neon: "#B3005E",
  bali: "#D06224",
  firefly: "#96BB7C",
  candy: "#FFD3A3"
};

const color3 = {
  winter: "#DBE6FD", 
  forest: "#F0BB62",
  retro: "#B4B897",
  sunset: "#F3950D",
  castle: "#F4F4F4",
  xmas: "#FCC88A",
  cloudy: "#FDAF75",
  greece: "#edece8",
  neon: "#E90064",
  bali: "#8A8635",
  firefly: "#FAD586",
  candy: "#B6EAFA"
};
const color4 = {
  winter: "#B2AB8C", 
  forest:"#F4EEA9",
  retro: "#F1E9E5",
  sunset: "#F4E185",
  castle: "#FFF5E1",
  xmas: "#fdf6e8",
  cloudy: "#f9f9d5",
  greece: "#fffcf6",
  neon: "#FF5F9E",
  bali: "#E9C891",
  firefly: "#ECF9E4",
  candy: "#FCFFB2"
};
const background_home = {
  winter: "url(/assets/figure_background/home_background_winter.jpg)", 
  forest: "url(/assets/figure_background/home_background_forest.jpg)",
  retro: "url(/assets/figure_background/home_background_retro.jpg)",
  sunset: "url(/assets/figure_background/home_background_sunset.jpg)",
  castle: "url(/assets/figure_background/home_background_castle.jpg)",
  xmas: "url(/assets/figure_background/home_background_xmas.jpg)",
  cloudy: "url(/assets/figure_background/home_background_cloudy.jpg)",
  greece: "url(/assets/figure_background/home_background_greece.jpg)",
  neon: "url(/assets/figure_background/home_background_neon.jpg)",
  bali: "url(/assets/figure_background/home_background_bali.jpg)",
  firefly: "url(/assets/figure_background/home_background_firefly.jpg)",
  candy: "url(/assets/figure_background/home_background_candy.jpg)"
};
  const background_academic = {
  winter: "url(/assets/figure_background/academic_background_winter.jpg)", 
  forest:"url(/assets/figure_background/academic_background_forest.jpg)",
  retro:"url(/assets/figure_background/academic_background_retro.jpg)",
  sunset: "url(/assets/figure_background/academic_background_sunset.jpg)",
  castle: "url(/assets/figure_background/academic_background_castle.jpg)",
  xmas: "url(/assets/figure_background/academic_background_xmas.jpg)",
  cloudy: "url(/assets/figure_background/academic_background_cloudy.jpg)",
  greece: "url(/assets/figure_background/academic_background_greece.jpg)",
  neon: "url(/assets/figure_background/academic_background_neon.jpg)",
  bali: "url(/assets/figure_background/academic_background_bali.jpg)",
  firefly: "url(/assets/figure_background/academic_background_firefly.jpg)",
  candy: "url(/assets/figure_background/academic_background_candy.jpg)"
};
const background_excerption = {
  winter: "url(/assets/figure_background/excerption_background_winter.jpg)", 
  forest:"url(/assets/figure_background/excerption_background_forest.jpg)",
  retro:"url(/assets/figure_background/excerption_background_retro.jpg)",
  sunset: "url(/assets/figure_background/excerption_background_sunset.jpg)",
  castle: "url(/assets/figure_background/excerption_background_castle.jpg)",
  xmas: "url(/assets/figure_background/excerption_background_xmas.jpg)",
  cloudy: "url(/assets/figure_background/excerption_background_cloudy.jpg)",
  greece: "url(/assets/figure_background/excerption_background_greece.jpg)",
  neon: "url(/assets/figure_background/excerption_background_neon.jpg)",
  bali: "url(/assets/figure_background/excerption_background_bali.jpg)",
  firefly: "url(/assets/figure_background/excerption_background_firefly.jpg)",
  candy: "url(/assets/figure_background/excerption_background_candy.jpg)"
};

const colorSet = {color1: color1,color2: color2, color3: color3, color4: color4}; // set of color
const backgroundSet = {backgroundOfHome: background_home, backgroundOfAcademic: background_academic, backgroundOfExcerption: background_excerption};


var tableElements = document.getElementsByTagName('table');
var colorElements = {
  color1: document.getElementsByClassName("color1"),
  color2: document.getElementsByClassName("color2"),
  color3: document.getElementsByClassName("color3"),
  color4: document.getElementsByClassName("color4")
};
var backgroundElements = {
  backgroundOfHome: document.getElementsByClassName("home-background"), 
  backgroundOfAcademic: document.getElementsByClassName("academic-background"),
  backgroundOfExcerption: document.getElementsByClassName("excerption-background")
};

for (let i in colorElements){        // loop among all classes that should be dyed
  for (let j = 0; j< (colorElements[i].length);j++){   // loop among elements within a class
    if (colorElements[i][j].className.includes("string")){
      colorElements[i][j].style.color = colorSet[i][theme];
    } else{
      colorElements[i][j].style.backgroundColor = colorSet[i][theme];
    }
  }
};

for (let i=0; i< tableElements.length; i++){
  let table = tableElements[i];
  table.children[0].children[0].style.backgroundColor = colorSet['color1'][theme];
}


for (let i in backgroundElements){
  if (backgroundElements[i].length){     // see if this page contains background i
    backgroundElements[i][0].style.background = backgroundSet[i][theme];
    backgroundElements[i][0].style.backgroundSize = "cover";
  } 
};


/**********************************************
            Onscroll action
**********************************************/

window.onscroll = function(){scrollFunction()};
var shrinkheader = document.getElementById("shrinkheader");
var diaryBox = document.getElementById("diary-head-box");
console.log(shrinkheader==null);

function scrollFunction() {
  if (shrinkheader != null){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      shrinkheader.style.fontSize = "0.7em";
    } else {
      shrinkheader.style.fontSize = "1em";
    }
  } 
  if (diaryBox!= null){
    if (document.documentElement.scrollTop > 600 || document.documentElement.scrollTop > 600){
      diaryBox.style.top = "0";
      diaryBox.style.opacity = "1";
    }
  }
}

/**********************************************
            password protected
**********************************************/

var protectedList = document.getElementsByClassName("protected");
const protectedHRefs = ["","",""]
for (let i = 0; i < protectedList.length; i++) {
  protectedHRefs[i] = protectedList[i].getAttribute("href");
  protectedList[i].removeAttribute("href");
  protectedList[i].addEventListener("click", function(event) {
    protectedElementOnClick(protectedList[i], protectedHRefs[i]);
});
}

function protectedElementOnClick(ele, ref){
    var password = prompt(ele.getAttribute("type"));
    const correct_password = ele.getAttribute("hreflang");
    if (password != correct_password) {
      alert("密码错误");
      event.preventDefault();
    }
    else {ele.setAttribute("href",ref)}
}

/**********************************************
            Hidden paragraph
**********************************************/

var hiddenList = document.getElementsByClassName("hidden");

function revealHidden(){
  var input = prompt("输入密码");
  var correct_pass = 519109;
  if (input != correct_pass) {
    alert("密码错误");
    event.preventDefault();
  }
  else {
    for (let i = 0; i < hiddenList.length; i++) {
        hiddenList[i].style.display = "inline"
      }
    };
}