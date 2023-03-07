const maindiv =document.createElement('div');
maindiv.className="container"
const searchdiv =document.createElement('div')
const Searchlabel= document.createElement('label')
Searchlabel.setAttribute("for","tablesearch")
Searchlabel.class="searchbox"
Searchlabel.innerText="Search"
Searchlabel.style="background-color:white"
const input = document.createElement('input')
input.type="Search"
input.id="tablesearch"
input.className="box"
input.setAttribute("onkeyup","handleSearch(this)")
searchdiv.append(Searchlabel)
searchdiv.append(input);
maindiv.append(searchdiv);

document.body.prepend(maindiv)

const searchinput = document.querySelector('.box')
var newarray = []
console.log(newarray)

searchinput.addEventListener("input",e =>{
  const value =e.target.value
  console.log(newarray)
})
const printdata =document.querySelector(".container")
async function getdata(){
const responsedata= await fetch("https://www.anapioficeandfire.com/api/books");
const newdata= await responsedata.json();
    
    newarray = newdata.map((element) => {
    console.log(element)
    const bookcard=document.createElement('div');
    bookcard.classList.add("bookcard")
    bookcard.style="width:100px: height:100px: background-Color: light blue"
     const cardHTML = 
     `<div class="bookname">${element.name}</div>
      <div class="bookbody">
     <h2>Authors:</h2>
     <label>${element.authors}</label>
     <h2>Publisher Name:</h2>
     <label>${element.publisher}</label>
     <h2>Release date:</h2>
     <label>${element.released.toString().slice(0,10)}</label>
     <h2></h2>
     <label></label>
     <button class="btn btn-primary" src=""; 
      onclick="submit(this)">click to open</button>
     </diV>
     <div id="number" >
     <div class="pages">${element.numberOfPages}<br>
     pages</div></div>
     `

     
      bookcard.innerHTML= cardHTML;

      
      printdata.append(bookcard)


    
      
  });
} 
getdata();

// fetch("https://www.anapioficeandfire.com/api/books")
// .then((res)=>res.json())
// .then((data)=>{
//     newarray = data.map(user={

//     })


// })