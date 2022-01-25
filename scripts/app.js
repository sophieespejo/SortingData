import {fetchData, allPeople} from "./fetch.js";
import {sortByFirstNameAsc, sortByIdAsc, sortByIdDesc, sortByLastNameAsc, sortByLastNameDesc, sortByFirstNameDesc, sortByEmailAsc, sortByEmailDesc, sortByHeightAsc, sortByHeightDesc, sortByAgeAsc, sortByAgeDesc} from "./sort.js";
import {injectInfo, injectHere, makeSlide} from "./creatingElements.js";

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
    btn10 = document.getElementById('btn10'),
    rowNum = document.getElementById('rowNum');

    sortIdBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isIDClicked == true)
    {
        sortByIdDesc();
        sortIdBtn.className = "fas fa-sort-numeric-down";
    }
    else {
        sortByIdAsc();
        sortIdBtn.className = "fas fa-sort-numeric-down-alt";
    }
    isIDClicked = !isIDClicked;
})

rowNum.addEventListener('keydown', function(e){
    injectHere.innerHTML = "";
    sortByIdAsc();
})

sortFNameBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isFNameClicked == true)
    {
        sortByFirstNameAsc();
        sortFNameBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByFirstNameDesc();
        sortFNameBtn.className = "fas fa-sort-alpha-down";
    }
    isFNameClicked = !isFNameClicked;
})

sortLNameBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isLNameClicked == true)
    {
        sortByLastNameAsc();
        sortLNameBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByLastNameDesc();
        sortLNameBtn.className = "fas fa-sort-alpha-down";
    }
    isLNameClicked = !isLNameClicked;
})

sortEmailBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isEmailClicked == true)
    {
        sortByEmailAsc();
        sortEmailBtn.className = "fas fa-sort-alpha-down-alt";
    }
    else {
        sortByEmailDesc();
        sortEmailBtn.className = "fas fa-sort-alpha-down";
    }
    isEmailClicked = !isEmailClicked;
})

sortHeightBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isHeightClicked == true)
    {
        sortByHeightAsc();
        sortHeightBtn.className = "fas fa-sort-numeric-down-alt";
    }
    else {
        sortByHeightDesc();
        sortHeightBtn.className = "fas fa-sort-numeric-down";
    }
    isHeightClicked = !isHeightClicked;
})

sortAgeBtn.addEventListener('click', function (e){
    injectHere.innerHTML = "";
    if(isAgeClicked == true)
    {
        sortByAgeAsc();
        sortAgeBtn.className = "fas fa-sort-numeric-down-alt";
    }
    else {
        sortByAgeDesc();
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

sortByIdAsc();

// sortByIdDesc();



