let eventsListDefaultSrc = [ 'img/Todo1_Default.png', 'img/Todo2_Default.png', 'img/Todo3_Default.png', 'img/Todo4_Default.png', 'img/Todo5_Default.png' ];
let eventsListHoverSrc = [ 'img/Todo1_inFocus.png', 'img/Todo2_inFocus.png', 'img/Todo3_inFocus.png', 'img/Todo4_inFocus.png', 'img/Todo5_inFocus.png' ];
let eventsListClickSrc = [ 'img/EVENT 1_Selected.png', 'img/EVENT 2_Selected.png' ];

function changeToExpandedBackground() {
    let backgroundElm = document.getElementById("coll-back");
    backgroundElm.src = "img/Todo_Expanded_Background.png";
}

function repositionEventsListExpanded() {
    let events = document.getElementById("events");
    events.style.marginTop = "23%";
    events.style.width = "78%";
    events.style.marginRight = "10%";
}

function addEventsWhenExpanded() {
    let eventList = document.getElementById("events_list");

    let image1 = document.createElement('img');
    image1.src = 'img/Todo1_Default.png';
    image1.id = '1';
    image1.style.width = '100%';
    let lItem = document.createElement('li');
    lItem.appendChild(image1);
    eventList.insertBefore(lItem, eventList.firstChild);

    let image5 = document.createElement('img');
    image5.src = 'img/Todo5_Default.png';
    image5.id = '5';
    image5.style.width = '100%';
    let lItem5 = document.createElement('li');
    lItem5.appendChild(image5);
    eventList.appendChild(lItem5);
}

function changeToCollapsedBackground() {
    let backgroundElm = document.getElementById("coll-back");
    backgroundElm.src = "img/Todo_Collapse_Background.png";
}

function repositionEventsListCollapsed() {
    let events = document.getElementById("events");
    events.style.marginTop = "5%";
    events.style.width = "75%";
    events.style.marginRight = "5%";
}

function deleteEventsWhenCollapsed() {
    let eventList = document.getElementById("events_list");
    eventList.removeChild(eventList.firstChild);
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
    changeItemToHoverState(document.getElementById('1', 0));
}

function hoverSecondItem() {
    changeItemToHoverState(document.getElementById('2', 1));
}

function hoverThirdItem() {
    changeItemToHoverState(document.getElementById('3', 2));
}

function hoverFourthItem() {
    changeItemToHoverState(document.getElementById('4', 3));
}

function hoverFifthItem() {
    changeItemToHoverState(document.getElementById('5', 4));
}

function defaultFirstItem() {
    changeItemToDefaultState(document.getElementById('1', 0));
}

function defaultSecondItem() {
    changeItemToDefaultState(document.getElementById('2', 1));
}

function defaultThirdItem() {
    changeItemToDefaultState(document.getElementById('3', 2));
}

function defaultFourthItem() {
    changeItemToDefaultState(document.getElementById('4', 3));
}

function defaultFifthItem() {
    changeItemToDefaultState(document.getElementById('5', 4));
}

function selectFirstItem() {
    changeItemToSelectState(document.getElementById('1', 0));
}

function selectSecondItem() {
    changeItemToSelectState(document.getElementById('2', 1));
}