import {allPeople, fetchData} from "./fetch.js";
import {injectInfo, injectHere} from "./creatingElements.js";

let finalArr;
let tempArr = [];
let rowNum = document.getElementById('rowNum');

async function sortByFirstNameAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, rowNum.value);
    return finalArr;

    // getFinalArr(allPeople, newArr, 'FirstName');
}

async function sortByFirstNameDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByLastNameAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;

    // console.log(newArr);
}

async function sortByLastNameDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByEmailAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByEmailDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}


async function sortByIdAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, rowNum.value);
    return finalArr;
}

async function sortByAgeAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByAgeDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}


async function sortByIdDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByHeightAsc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
}

async function sortByHeightDesc()
{
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
    let finalArr = Array.from(newSet.values());

    console.log(finalArr);
    injectInfo(finalArr, 20);
    return finalArr;
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



export {sortByFirstNameAsc, sortByIdAsc, sortByIdDesc, sortByLastNameAsc, sortByLastNameDesc, sortByFirstNameDesc, sortByEmailAsc, sortByEmailDesc, sortByHeightAsc, sortByHeightDesc, sortByAgeAsc, sortByAgeDesc, finalArr}