import {allPeople, fetchData} from "./fetch.js";
import {injectInfo, injectHere} from "./creatingElements.js";

let finalArr;
let tempArr = [];
let pageRange = document.getElementById('pageRange');
let amount;
let sortedBy = "id";

async function sortByFirstNameAsc(amount)
{

    sortedBy = "firstNameAsc";
    await fetchData();
    let newArr = allPeople.map(obj => obj.FirstName).sort();

    // for(let i = 0; i < allPeople.length; i++)
    // {
    //     for(let j = 0; j < newArr.length; j++)
    //     {
    //         if(allPeople[i].FirstName == newArr[j])
    //         {
    //             tempArr.push(allPeople[i]);
    //         }
    //     }
    // }
    // let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].FirstName === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })


    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};

    // getFinalArr(allPeople, newArr, 'FirstName');
}

async function sortByFirstNameDesc(amount)
{
    sortedBy = "firstNameDesc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.FirstName).sort().reverse();
    
    // let finalArr = [];
    // for(let i = 0; i < allPeople.length; i++)
    // {
    //     for(let j = 0; j < newArr.length; j++)
    //     {
    //         if(allPeople[i].FirstName == newArr[j])
    //         {
    //             finalArr.push(allPeople[i]);
    //         }
    //     }
    // }

    // let newSet = new Set(finalArr);
    // let finalFinalArr = Array.from(newSet.values());
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].FirstName === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByLastNameAsc(amount)
{
    sortedBy = "lastNameAsc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.LastName).sort();

    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].LastName === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};

    // console.log(newArr);
}

async function sortByLastNameDesc(amount)
{
    sortedBy = "lastNameDesc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.LastName).sort().reverse();
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].LastName === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByEmailAsc(amount)
{
    sortedBy = "emailAsc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Email).sort();
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Email === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByEmailDesc(amount)
{
    sortedBy = "emailDesc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Email).sort().reverse();
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Email === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}


async function sortByIdAsc(amount)
{
    sortedBy = "idAsc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Id).sort(function(a,b) {return a - b});
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Id === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByAgeAsc(amount)
{
    sortedBy = "ageAsc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Age).sort(function(a,b) {return a - b});
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Age === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByAgeDesc(amount)
{
    sortedBy = "ageDesc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Age).sort(function(a,b) {return b - a});
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Age === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}


async function sortByIdDesc(amount)
{
    sortedBy = "idDesc";
    injectHere.innerHTML = "";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Id).sort(function(a,b) {return b - a});
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Id === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByHeightAsc(amount)
{
    sortedBy = "heightAsc";
    injectHere.innerHTML = "";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Height).sort();
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Height === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

async function sortByHeightDesc(amount)
{
    sortedBy = "heightDesc";
    await fetchData();
    console.log("worked");
    // let newArr = allPeople.map( person => {
    //     parseInt(person.Id);
    // });
    // console.log(Array.from(newArr).sort(function (a,b) {return a - b}));
    let newArr = allPeople.map(obj => obj.Height).sort().reverse();
    let tempArr = [];

    allPeople.map((person, idx) => {
        newArr.map((x, i) => {
            if (allPeople[i].Height === newArr[idx])
            {
                tempArr.push(allPeople[i])
            }
        })
    })

    let newSet = new Set(tempArr);
    finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, amount);
    return {finalArr, sortedBy};
}

// function getFinalArr(allPeople, newArr, whatever)
// {
//     debugger
//     // allPeople.map((person, idx) => {
//     //     newArr.map((x, i) => {
//     //         if (`allPeople[i].${whatever} === newArr[idx]`)
//     //         {
//     //             tempArr.push(allPeople[i])
//     //         }
//     //     })
//     // })

//     for(let i = 0; i < allPeople.length; i++)
//     {
//         for(let j = 0; j < newArr.length; j++)
//         {
//             if(allPeople[i].FirstName == newArr[j])
//             {
//                 console.log(Object.keys(allPeople[i])[1]);

//                 //Object.keys(allPeople[i])[1];
//                 // let keys = "";
//                 // keys =  Object.keys(allPeople[i]);
//                 // console.log(keys[1]);
//                 debugger
//                 tempArr.push(allPeople[i]);
//             }
//         }
//     }
//     // console.log(tempArr);

//     let newSet = new Set(tempArr);
//     let finalArr = Array.from(newSet.values());

//     console.log(finalArr);
//     return finalArr;
// }



export {sortByFirstNameAsc, sortedBy, sortByIdAsc, sortByIdDesc, sortByLastNameAsc, sortByLastNameDesc, sortByFirstNameDesc, sortByEmailAsc, sortByEmailDesc, sortByHeightAsc, sortByHeightDesc, sortByAgeAsc, sortByAgeDesc, finalArr}