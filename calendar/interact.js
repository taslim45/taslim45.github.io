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
    let srcs = [ 'img/EVENT 3_Default.png', 'img/EVENT 4_Default.png' ];
    for(let i = 0; i<srcs.length; i++) {
        let image = document.createElement('img');
        image.src = srcs[i];
        image.id = 3 + i;
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
    events.style.marginTop = "5%";
    events.style.width = "75%";
    events.style.marginRight = "5%";
}

function deleteEventsWhenCollapsed() {
    let eventList = document.getElementById("events_list");
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