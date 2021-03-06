let eventsListDefaultSrc = [ 'img/EVENT 1_Default.png', 'img/EVENT 2_Default.png', 'img/EVENT 3_Default.png', 'img/EVENT 4_Default.png' ];
let eventsListHoverSrc = [ 'img/EVENT 1_in Focus.png', 'img/EVENT 2_in Focus.png', 'img/EVENT 3_in Focus.png', 'img/EVENT 4_in Focus.png' ];
let eventsListClickSrc = [ 'img/EVENT 1_Selected.png', 'img/EVENT 2_Selected.png' ];

function changeToExpandedBackground() {
    let backgroundElm = document.getElementById("coll-back");
    backgroundElm.src = "img/Calendar_Expanded_Background.png";
}

function repositionEventsListExpanded() {
    let events = document.getElementById("events");
    events.style.marginTop = "24%";
    events.style.width = "77%";
    events.style.marginRight = "10%";
}

function addEventsWhenExpanded() {
    let eventList = document.getElementById("events_list");
    // let srcs = [ 'img/EVENT 3_Default.png', 'img/EVENT 4_Default.png' ];
    for(let i = 1; i<eventsListDefaultSrc.length; i++) {
        let image = document.createElement('img');
        image.src = eventsListDefaultSrc[i];
        image.id = 1 + i;
        image.style.width = '100%';

        let lItem = document.createElement('li');
        lItem.appendChild(image);
        eventList.appendChild(lItem);
    }
}

function changeToCollapsedBackground() {
    let backgroundElm = document.getElementById("coll-back");
    backgroundElm.src = "img/Calendar_Collapse_Background.png";
}

function repositionEventsListCollapsed() {
    let events = document.getElementById("events");
    events.style.marginTop = "4%";
    events.style.width = "80%";
    events.style.marginRight = "3%";
}

function deleteEventsWhenCollapsed() {
    let eventList = document.getElementById("events_list");
    eventList.removeChild(eventList.lastChild);
    eventList.removeChild(eventList.lastChild);
    eventList.removeChild(eventList.lastChild);
}

function changeItemToHoverState(elm, index) {
    elm.src = eventsListHoverSrc[index];
}

function changeItemToDefaultState(elm, index) {
    elm.src = eventsListDefaultSrc[index];
}

function changeItemToSelectState(elm, index) {
    elm.src = eventsListClickSrc[index];
}

// new changes

function hoverFirstItem() {
    changeItemToHoverState(document.getElementById('1'), 0);
}

function hoverSecondItem() {
    changeItemToHoverState(document.getElementById('2'), 1);
}

function hoverThirdItem() {
    changeItemToHoverState(document.getElementById('3'), 2);
}

function hoverFourthItem() {
    changeItemToHoverState(document.getElementById('4'), 3);
}

function defaultFirstItem() {
    changeItemToDefaultState(document.getElementById('1'), 0);
}

function defaultSecondItem() {
    changeItemToDefaultState(document.getElementById('2'), 1);
}

function defaultThirdItem() {
    changeItemToDefaultState(document.getElementById('3'), 2);
}

function defaultFourthItem() {
    changeItemToDefaultState(document.getElementById('4'), 3);
}

function selectFirstItem() {
    changeItemToSelectState(document.getElementById('1'), 0);
}

function selectSecondItem() {
    changeItemToSelectState(document.getElementById('2'), 1);
}