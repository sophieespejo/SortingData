import {finalArr} from "./sort.js";

let injectHere = document.getElementById('injectHere');

function injectInfo(finalArr, amount)
{
    for(let i = 0; i < amount; i++)
    {
        //create tr
        let mainTR = document.createElement('tr');
        //create all elements inside that tablerow
        let id = document.createElement('th');
        id.scrope = "row";
        id.textContent = finalArr[i].Id;
        //create nameTR
        let fNameTD = document.createElement('td');
        fNameTD.textContent = finalArr[i].FirstName;
        //create lname
        let lNameTD = document.createElement('td');
        lNameTD.textContent = finalArr[i].LastName;
        //create email
        let emailTD = document.createElement('td');
        emailTD.textContent = finalArr[i].Email;
        //lcreate height
        let heightTD = document.createElement('td');
        heightTD.textContent = finalArr[i].Height;
        //create age
        let ageTD = document.createElement('td');
        ageTD.textContent = finalArr[i].Age;
        //append all
        mainTR.append(id);
        mainTR.append(fNameTD);
        mainTR.append(lNameTD);
        mainTR.append(emailTD);
        mainTR.append(heightTD);
        mainTR.append(ageTD);
        injectHere.append(mainTR);
    }
}

function makeSlide(totalSlides)
{
    
}

export {injectInfo, injectHere, makeSlide}