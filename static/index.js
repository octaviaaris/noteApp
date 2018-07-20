var noteId = 0;

function addNote(evt) {
    noteId++;

    let noteContainer = "<div class='noteContainer' id=" + noteId + "></div>";
    let noteContentEditable =
    "<textarea class='noteContent' color='blue' placeholder='New note'></textarea>";
    let noteContentDisplay = "<div class='noteDisplay hidden' color='blue' ></div>";
    let saveBtn = "<button class='saveBtn'>Save</button>";
    let editBtn = "<button class='editBtn hidden'>Edit</button>";
    let deleteBtn = "<button class='deleteBtn'>Delete</button>";
    let colors = "<button class='noteColor' id='blue'>Blue</button> <button class='noteColor' id='red'>Red</button> <button class='noteColor' id='yellow'>Yellow</button>"

    $("#newNotes").append(noteContainer);
    $("#" + noteId).append(noteContentEditable, noteContentDisplay, colors, saveBtn, editBtn, deleteBtn);
}

$("#addNoteBtn").on("click", addNote);

function deleteNote(evt) {
    $(evt.target.parentElement).remove();
}

$("#newNotes").on("click", ".deleteBtn", deleteNote);

function changeColor(evt) {
    let textArea = evt.target.parentElement.firstChild;
    let noteDisplay = evt.target.parentElement.getElementsByClassName("noteDisplay");
    let color = textArea.getAttribute('color');

    $(textArea).attr("color", evt.target.id);
    $(noteDisplay).attr("color", evt.target.id);
}

$("#newNotes").on("click", ".noteColor", changeColor);

function hide(elements) {
    for (var e of elements) {
        $(e).addClass("hidden");
  }
}

function unhide(elements) {
    for (var e of elements) {
        $(e).removeClass("hidden");
  }
}

function saveNote(evt) {
    let noteContent = evt.target.parentElement.firstChild;
    let noteDisplay = evt.target.parentElement.getElementsByClassName("noteDisplay");

    $(noteDisplay).html($(noteContent).val());

    let editBtn = evt.target.parentElement.getElementsByClassName("editBtn");
    let toUnhide = [editBtn, noteDisplay];
    unhide(toUnhide);

    let saveBtn = evt.target;
    let toHide = [saveBtn, noteContent];
    hide(toHide);
  
}

$("#newNotes").on("click", ".saveBtn", saveNote);

function editNote(evt) {

    let noteContent = evt.target.parentElement.firstChild;
    let noteDisplay = evt.target.parentElement.getElementsByClassName("noteDisplay");
    $(noteContent).html($(noteDisplay).val());

    let saveBtn = evt.target.parentElement.getElementsByClassName("saveBtn");
    let toUnhide = [saveBtn, noteContent];
    unhide(toUnhide);

    let editBtn = evt.target;
    let toHide = [editBtn, noteDisplay];
    hide(toHide);
}

$("#newNotes").on("click", ".editBtn", editNote);