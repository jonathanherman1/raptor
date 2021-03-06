function renderAddClass(target,className){
    document.querySelector(target).classList.add(className);
}

function renderRemoveClass(target,className){
    document.querySelector(target).classList.remove(className);
}

function renderRemove(parent, child){
    parent.removeChild(child);
} // for removing elements


function renderBootstrapCard(cardId, content, imgBool){
    // <img src="${content.imgURL}" class="card-img-top" alt="${content.altText}">
    // ${renderHeaders(introContent.h1Text, 1)}
    if(imgBool === true){
        return `
            <div id="#${cardId}" class="card" style="width: 18rem;">
                <img src="${content.imgURL}" class="card-img-top" alt="${content.altText}">
                <div class="card-body">
                    <p class="card-text">${content.pText}</p>
                </div>
                ${renderBootstrapButton(content)}
            </div>`;
    } else {
        return `
            <div id="#${cardId}" class="card" style="width: 18rem;">
                <div class="card-body">
                    <p class="card-text">${content.pText}</p>
                </div>
                ${renderBootstrapButton(content)}
            </div>`;
    }
}

function renderBootstrapButton(content){
    let {btnType, btnId, btnText, btnValue, addCustomClassBool, customBtnClass} = content;
    if(addCustomClassBool === true){
        switch(btnType){
            case "primary":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-primary ${customBtnClass}">${btnText}</button>`           
            case "secondary":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-secondary ${customBtnClass}">${btnText}</button>`           
            case "success":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-success ${customBtnClass}">${btnText}</button>`           
            case "danger":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-danger ${customBtnClass}">${btnText}</button>`           
            case "warning":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-warning ${customBtnClass}">${btnText}</button>`           
            case "info":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-info ${customBtnClass}">${btnText}</button>`           
            case "light":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-light ${customBtnClass}">${btnText}</button>`           
            case "dark":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-dark ${customBtnClass}">${btnText}</button>`           
            case "link":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-link ${customBtnClass}">${btnText}</button>`           
            default:
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-primary">${btnText}</button>`
        }
    } else {
        switch(btnType){
            case "primary":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-primary">${btnText}</button>`           
            case "secondary":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-secondary">${btnText}</button>`           
            case "success":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-success">${btnText}</button>`           
            case "danger":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-danger">${btnText}</button>`           
            case "warning":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-warning">${btnText}</button>`           
            case "info":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-info">${btnText}</button>`           
            case "light":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-light">${btnText}</button>`           
            case "dark":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-dark">${btnText}</button>`           
            case "link":
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-link">${btnText}</button>`           
            default:
                return `<button type="button" id="${btnId}" value="${btnValue}" class="btn btn-primary">${btnText}</button>`
        }
    }
}


function renderHeaders(content, headerLevel){
    for(let i = 1; i <= headerLevel; i++){
        return `<h${headerLevel}>${content}</h${headerLevel}>`
    }
}

function renderLists(contentArr, orderedBool){
    let listContentStr = "";
    contentArr.forEach(el => listContentStr += `<li>${el}</li>`);
    return orderedBool === true ? `<ol>${listContentStr}</ol>` : `<ul>${listContentStr}</ul>`;
}

function renderParagraphs(contentArr){
    let paraContentStr = "";
    contentArr.forEach(el => paraContentStr += `<p>${el}</p>`);
    return paraContentStr;
}

function renderParagraphEls(contentArr){
    let paragraphs = [];
    contentArr.forEach(el => {
        let p = document.createElement("p");
        p.textContent = el;
        paragraphs.push(p);
    });
    return paragraphs;
}

function renderBootstrapImage(content){
    const {imgURL, altText, imgId} = content
    return `<img src="${imgURL}" class="img-fluid" alt="${altText}">`
}

function renderWelcome(){

}

function renderIntro(target, introContent){
    target.innerHTML = 
    `
    <section id="intro">
       ${renderBootstrapCard("intro-card", introContent)}
    </section>
    `
}

function renderHowToPlay(target, howToPlayContent){
    target.innerHTML =
    `
    <section id="how-to-play">
       ${renderHeaders(howToPlayContent.h1Text, 1)}
       ${renderLists(howToPlayContent.instructions, true)}
       ${renderParagraphs(howToPlayContent.victoryConditions)}
       ${renderBootstrapButton(howToPlayContent)}
    </section>
    `
}

function renderPickTeams(target, pickTeamsContent){
    // ${renderHeaders(raptors.h2Text, 2)}
    // ${renderHeaders(scientists.h2Text, 2)}
    let raptors = pickTeamsContent.raptors;
    let scientists = pickTeamsContent.scientists;
    target.innerHTML = 
    `
    <section id="pick-teams">
        ${renderHeaders(pickTeamsContent.h1Text, 1)}
        ${renderBootstrapCard("pick-raptors-card", raptors, true)}
        ${renderBootstrapCard("pick-scientists-card", scientists, true)}
    </section>
    `
}

function renderTeamChoices(target, players){
    const player1 = players[0];
    const player2 = players[1];
    let play = {
        btnType: "success", btnId: "play-btn", btnText: "Play!", btnValue: "Play!", addCustomClassBool: false, customBtnClass: null
    }
    let player1ChoiceText = `${player1.name} is the ${player1.team}.`
    let player2ChoiceText = `${player2.name} is the ${player2.team}.`
    target.innerHTML = `
    <section id="team-choices">
        ${renderHeaders(player1ChoiceText, 1)}
        ${renderHeaders(player2ChoiceText, 1)}
        ${renderBootstrapButton(play)}
    </section>
    `
}

function renderBoard(target, boardContent){
    // SERIOUSLY NEED TO REFACTOR THIS CODE
    // The current advantage of using this render function though instead of hard coding the HTML and then using some sort of hide and show logic is that I at least can get randomly picked mountains to show up every time there's a new board. That's pretty cool! It means every game at least has a little bit of a different experience with the terrain which does have an effect on the strategy.
    
    let topBoard = "";
    let middleBoard = "";
    let bottomBoard = "";
    
    let lTile1ExitContent = "";
    let lTile2ExitContent = "";
    let lTile3ExitContent = "";
    let lTile4ExitContent = "";

    let lTile1NormalContent = "";
    let lTile2NormalContent = "";
    let lTile3NormalContent = "";
    let lTile4NormalContent = "";

    let normalSpacesContent1 = "";
    let normalSpacesContent2 = "";
    let normalSpacesContent3 = "";
    let normalSpacesContent4 = "";
    let normalSpacesContent5 = "";
    let normalSpacesContent6 = "";
    
    // boardContent is an array
    // array contains objects
    // lShaped: true
    // tile: 4
    // type: Exit or Normal (or Mountain in some tiles)
    
    boardContent.forEach(space => {
        if(space.lShaped === true && space.tile === 9 && space.type === "Exit"){
            lTile1ExitContent += `<div class="space exit1" id="${space.id}"></div>`
        } 
        else if (space.lShaped === true && space.tile === 10 && space.type === "Exit"){
            lTile2ExitContent += `<div class="space exit2" id="${space.id}"></div>`
        } else if(space.lShaped === true && space.tile === 9 && space.type === "Normal"){
            lTile1NormalContent += `<div class="space top-left" id="${space.id}"></div>`
        } else if(space.lShaped === true && space.tile === 10 && space.type === "Normal"){
            lTile2NormalContent += `<div class="space top-right" id="${space.id}"></div>`
        } else if(space.lShaped === false && space.tile === 1){
            if(space.type === "Mountain"){
                normalSpacesContent1 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent1 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === false && space.tile === 2){
            if(space.type === "Mountain"){
                normalSpacesContent2 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent2 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === false && space.tile === 3){
            if(space.type === "Mountain"){
                normalSpacesContent3 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent3 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === false && space.tile === 4){
            if(space.type === "Mountain"){
                normalSpacesContent4 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent4 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === false && space.tile === 5){
            if(space.type === "Mountain"){
                normalSpacesContent5 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent5 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === false && space.tile === 6){
            if(space.type === "Mountain"){
                normalSpacesContent6 += `<div class="space mountain" id="${space.id}"></div>`
            } else {
                normalSpacesContent6 += `<div class="space" id="${space.id}"></div>`
            }
        } else if(space.lShaped === true && space.tile === 7 && space.type === "Normal"){
            lTile3NormalContent += `<div class="space bottom-left" id="${space.id}"></div>`
        } else if(space.lShaped === true && space.tile === 8 && space.type === "Normal"){
            lTile4NormalContent += `<div class="space bottom-right" id="${space.id}"></div>`
        } else if(space.lShaped === true && space.tile === 7 && space.type === "Exit"){
            lTile3ExitContent += `<div class="space exit3" id="${space.id}"></div>`
        } else if (space.lShaped === true && space.tile === 8 && space.type === "Exit"){
            lTile4ExitContent += `<div class="space exit4" id="${space.id}"></div>`
        }
    })

    let lTile1Exit = `<section class="l-tile">${lTile1ExitContent}</section>`;
    let lTile2Exit = `<section class="l-tile">${lTile2ExitContent}</section>`;
    let lTile3Exit = `<section class="l-tile">${lTile3ExitContent}</section>`;
    let lTile4Exit = `<section class="l-tile">${lTile4ExitContent}</section>`;

    let lTile1Normal = `<section class="l-tile">${lTile1NormalContent}</section>`;
    let lTile2Normal = `<section class="l-tile">${lTile2NormalContent}</section>`;
    let lTile3Normal = `<section class="l-tile">${lTile3NormalContent}</section>`;
    let lTile4Normal = `<section class="l-tile">${lTile4NormalContent}</section>`;

    let normalSpaces1 = `<section class="tile">${normalSpacesContent1}</section>`;
    let normalSpaces2 = `<section class="tile">${normalSpacesContent2}</section>`;
    let normalSpaces3 = `<section class="tile">${normalSpacesContent3}</section>`;
    let normalSpaces4 = `<section class="tile">${normalSpacesContent4}</section>`;
    let normalSpaces5 = `<section class="tile">${normalSpacesContent5}</section>`;
    let normalSpaces6 = `<section class="tile">${normalSpacesContent6}</section>`;

    topBoard += lTile1Exit;
    topBoard += lTile2Exit;
    topBoard += lTile1Normal;
    topBoard += lTile2Normal;

    middleBoard += normalSpaces1;
    middleBoard += normalSpaces2;
    middleBoard += normalSpaces3;
    middleBoard += normalSpaces4;
    middleBoard += normalSpaces5;
    middleBoard += normalSpaces6;
    
    bottomBoard += lTile3Normal;
    bottomBoard += lTile4Normal;
    bottomBoard += lTile3Exit;
    bottomBoard += lTile4Exit;
    
    target.innerHTML = `
    <section class="board">
        <section class="top">${topBoard}</section>
        <section class="middle">${middleBoard}</section>
        <section class="bottom">${bottomBoard}</section>
    </section>
    `
}


function renderSetupInfo(content, i){
    let team = content[i];
    let teamArr = [];
    let header = document.createElement("h4");
    let description = document.createElement("p");
    if(team.team === "raptors"){
        header.textContent = team.hText;
        description.textContent = team.pText;
        header.setAttribute("id", team.hTextId);
        description.setAttribute("id", team.pTextId);
        let motherImg = document.createElement("img");
        motherImg.setAttribute("id", "mother-raptor-1");
        motherImg.setAttribute("class", "pieces");
        motherImg.setAttribute("src", team.icons[0]);
        motherImg.setAttribute("draggable", true);
        motherImg.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
        teamArr.push(motherImg);
        for(let i = 1; i <= team.numBabies; i++){
            let babyImg = document.createElement("img");
            babyImg.setAttribute("id", `baby-raptor-${i}`);
            babyImg.setAttribute("class", "pieces");
            babyImg.setAttribute("src", team.icons[1]);
            babyImg.setAttribute("draggable", true);
            babyImg.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
            teamArr.push(babyImg);
        }
    } 
    if (team.team === "scientists"){
        header.textContent = team.hText;
        description.textContent = team.pText;
        header.setAttribute("id", team.hTextId);
        description.setAttribute("id", team.pTextId);
        for(let i = 1; i <= team.numScientists; i++){
            let scientistImg = document.createElement("img");
            scientistImg.setAttribute("id", `scientist-${i}`);
            scientistImg.setAttribute("class", "pieces");
            scientistImg.setAttribute("src", team.icons[0]);
            scientistImg.setAttribute("draggable", true);
            scientistImg.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
            teamArr.push(scientistImg);
        }
    }

    return [header, description, teamArr];
}

function renderButton(parent, content){
    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "button-div");
    buttonDiv.setAttribute("class", "button-box");
    let button = document.createElement("button");
    button.setAttribute("id", content.btnId);
    button.setAttribute("value", content.btnValue);
    button.setAttribute("class", `btn btn-${content.btnType}`);
    button.textContent = content.btnText;
    buttonDiv.appendChild(button)
    parent.appendChild(buttonDiv);
} // confirm, back, etc.


function renderBulkButtons(parent, content, actionPanelId){
    let actionPanel = document.createElement("section");
    actionPanel.setAttribute("id", actionPanelId);
    content.forEach((obj, i) => {
        let buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", `button-div${i}`);
        buttonDiv.setAttribute("class", "button-box");
        let button = document.createElement("button");
        button.setAttribute("id", obj.btnId);
        button.setAttribute("value", obj.btnValue);
        button.setAttribute("class", `btn btn-${obj.btnType}`);
        button.textContent = obj.btnText;
        buttonDiv.appendChild(button)
        actionPanel.appendChild(buttonDiv);
    })
    parent.appendChild(actionPanel);
} // confirm, back, etc.


function renderOffcanvasEl(parent){
    let div1 = document.createElement("div");
    div1.setAttribute("class", "offcanvas offcanvas-start");
    div1.setAttribute("tabindex", "-1");
    div1.setAttribute("id","offcanvasWithBackdrop-1");
    div1.setAttribute("aria-labelledby", "offcanvasWithBackdropLabel");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "offcanvas-header");
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "offcanvas-title");
    h5.setAttribute("id", "offcanvasWithBackdropLabel");
    h5.textContent = "Select Cards";
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn-close text-reset");
    btn.setAttribute("data-bs-dismiss", "offcanvas");
    btn.setAttribute("aria-label", "Close");
    div2.appendChild(h5);
    div2.appendChild(btn);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "playingCard-tray");
    let div4 = document.createElement("div");
    div4.setAttribute("class", "offcanvas-body");
    div4.setAttribute("id", "card-display");
    let div5 = document.createElement("div");
    div5.setAttribute("id", "card-display-instructions");
    div3.appendChild(div4);
    div3.appendChild(div5);
    div1.appendChild(div2);
    div1.appendChild(div3);
    parent.appendChild(div1);

    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("type", "button");
    button.setAttribute("id", "show-cards-btn");
    button.setAttribute("data-bs-toggle", "offcanvas");
    button.setAttribute("data-bs-target", "#offcanvasWithBackdrop-1");
    button.setAttribute("aria-controls", "offcanvasWithBackdrop-1");
    button.textContent = "Show Cards";
    parent.appendChild(button);
}


function renderCards(parent, hand){
    // hand should be an array
    hand.forEach(card => {
        let div = document.createElement("div");
        div.setAttribute("id", card.id);
        div.setAttribute("class", "playingCard");
        let h2 = document.createElement("h2");
        h2.textContent = card.value;
        let h3 = document.createElement("h3");
        h3.textContent = card.name; 
        let cardNotes = [card.actions, card.notes];
        let paragraphEls = renderParagraphEls(cardNotes);
        paragraphEls.forEach(p => div.appendChild(p));
        parent.appendChild(h2);
        parent.appendChild(h3);
        parent.appendChild(div);
    })
}

function renderCardSelectionOnOff(cardId){
    let card = document.querySelector(`#${cardId}`);
    card.classList.toggle("outline");
}

function renderCardChoiceInstructions(parent, content, i){
    let team = content[i];
    let header = document.createElement("h4");
    let description = document.createElement("p");
    if(team.team === "raptors"){
        header.textContent = team.hText;
        description.textContent = team.pText;
        header.setAttribute("id", team.hTextId);
        description.setAttribute("id", team.pTextId);
    } 
    if (team.team === "scientists"){
        header.textContent = team.hText;
        description.textContent = team.pText;
        header.setAttribute("id", team.hTextId);
        description.setAttribute("id", team.pTextId);
    }
    parent.appendChild(header);
    parent.appendChild(description);
    renderButton(parent, team);
    
}

function renderShowHideOffcanvas(){
    const offcanvasEl = document.querySelector("#offcanvasWithBackdrop-1");
    offcanvasEl.classList.toggle("show");
}

function renderPieces(){}

function renderReinforcements(){} // may incorporate this into renderPieces
function renderFire(){}
function renderJeepMovement(){}
function renderMotherRaptorDisappears(){}
function renderMotherRaptorReappears(){}

function renderKill(piece){
    piece.classList.add("killed");
    piece.classList.add("animate__animated");
    piece.classList.add("animate__hinge");
}

function renderCapture(piece){
    piece.classList.add("captured");
    piece.classList.add("animate__animated");
    piece.classList.add("animate__swing");
}

function renderRemoveAfterAnimation(selected, animationEvent){
    selected.addEventListener(animationEvent, () => {
        selected.parentElement.removeChild(selected);
    });
    selected.removeEventListener(animationEvent,() => {
        selected.parentElement.removeChild(selected);
    });
}

export {renderRemove, renderIntro, renderHowToPlay, renderPickTeams, renderTeamChoices, renderBoard, renderSetupInfo, renderButton, renderOffcanvasEl, renderCards, renderCardSelectionOnOff, renderCardChoiceInstructions, renderShowHideOffcanvas, renderBulkButtons, renderAddClass, renderRemoveClass, renderKill, renderCapture, renderRemoveAfterAnimation};
