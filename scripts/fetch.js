import {injectInfo} from "./creatingElements.js";

let allPeople;

function fetchData(){
    return fetch("../data/data.json").then(
        response => response.json()
    ).then(
        data => {
            allPeople = data.People;
            // console.log(allPeople);
        }
    )
    return allPeople;
}

// fetchData();


export {fetchData, allPeople}