import {fetchData, allPeople} from "./fetch.js";
import {sortByFirstNameAsc, sortedBy, sortByIdAsc, sortByIdDesc, sortByLastNameAsc, sortByLastNameDesc, sortByFirstNameDesc, sortByEmailAsc, sortByEmailDesc, sortByHeightAsc, sortByHeightDesc, sortByAgeAsc, sortByAgeDesc, finalArr} from "./sort.js";
import {injectInfo, injectHere} from "./creatingElements.js";

let sortIdBtn = document.getElementById("sortIdBtn"),
    sortFNameBtn = document.getElementById('sortFNameBtn'),
    sortLNameBtn = document.getElementById('sortLNameBtn'),
    sortEmailBtn = document.getElementById('sortEmailBtn'),
    sortHeightBtn = document.getElementById('sortHeightBtn'),
    sortAgeBtn = document.getElementById('sortAgeBtn'),
    isIDClicked = true,
    isFNameClicked = true,
    isLNameClicked = true,
    isEmailClicked = true,
    isHeightClicked = true,
    isAgeClicked = true,
    amount,
    pageRange = document.getElementById('pageRange');

    sortIdBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isIDClicked == true)
    {
        sortByIdDesc(20);
        sortIdBtn.className = "fas fa-sort-numeric-down";
    }
    else {
        sortByIdAsc(20);
        sortIdBtn.className = "fas fa-sort-numeric-down-alt";
    }
    isIDClicked = !isIDClicked;
})

// rowNum.addEventListener('keydown', function(e){
//     injectHere.innerHTML = "";
//     sortByIdAsc();
// })

sortFNameBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isFNameClicked == true)
    {
        sortByFirstNameAsc(10);
        sortFNameBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByFirstNameDesc(10);
        sortFNameBtn.className = "fas fa-sort-alpha-down";
    }
    isFNameClicked = !isFNameClicked;
})

sortLNameBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isLNameClicked == true)
    {
        sortByLastNameAsc(20);
        sortLNameBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByLastNameDesc(20);
        sortLNameBtn.className = "fas fa-sort-alpha-down";
    }
    isLNameClicked = !isLNameClicked;
})

sortEmailBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isEmailClicked == true)
    {
        sortByEmailAsc(20);
        sortEmailBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByEmailDesc(20);
        sortEmailBtn.className = "fas fa-sort-alpha-down";
    }
    isEmailClicked = !isEmailClicked;
})

sortHeightBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isHeightClicked == true)
    {
        sortByHeightAsc(20);
        sortHeightBtn.className = "fas fa-sort-numeric-down-alt";
    }
    else {
        sortByHeightDesc(20);
        sortHeightBtn.className = "fas fa-sort-numeric-down";
    }
    isHeightClicked = !isHeightClicked;
})

sortAgeBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isAgeClicked == true)
    {
        sortByAgeAsc(20);
        sortAgeBtn.className = "fas fa-sort-numeric-down-alt";
    }
    else {
        sortByAgeDesc(20);
        sortAgeBtn.className = "fas fa-sort-numeric-down";
    }
    isAgeClicked = !isAgeClicked;
})

// btn10.addEventListener('click', function(e){
//     injectInfo(100/btn10.value);
// })

// fetchData();

// setTimeout(() => {
//     injectInfo(allPeople)
// }, 3000);

sortByIdAsc(20);

// sortByIdDesc();

pageRange.addEventListener('input', function(e){
    injectHere.innerHTML = "";
    amount = this.value;
    injectInfo(finalArr, amount);
    let pagesLinks = Math.ceil(finalArr.length/amount);
    console.log(pagesLinks);
    displayPageData(amount);
})

let currentPage = 1;
let rows;

function displayPageData(finalArr, rows, current){
    injectHere.innerHTML = "";
    page ++;
    let loopStart = rows_per_page * page;
    let paginatedItems = finalArr.slice(loopStart, loopStart+rows_per_page);
    for(let i = loopStart; i < loopStart + numRowsPage; i++)
    {
        
    }
}

displayPageData(finalArr, amount, 1);


