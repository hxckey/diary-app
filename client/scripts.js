const nameInput=document.getElementById("name");
const titleInput=document.getElementById("title");
const entryInput=document.getElementById("entry");
const form=document.querySelector("form");
const entiesList = document.querySelector('table');

form.addEventListener('submit',submitDiary);

// Fetch all entries as soon as app is loaded
getAllEntries();

// ********************************************

// Entires FLOW
function getAllEntries(){
    fetch('http://localhost:3000/entries')
        .then(r => r.json())
        .then(appendEntries)
        .catch(console.warn)
};

function submitDiary(e){
    e.preventDefault();

    const diaryData={
        name:e.target.name.value,
        title:e.target.title.value,
        entry:e.target.entry.value
    }
    const options = { 
        method: 'POST',
        body: JSON.stringify(diaryData),
        headers: { "Content-Type": "application/json" }
    };

   
        fetch('http://localhost:3000/entries', options)
        .then(r => r.json())
        .then(appendEntry)
        .then(() => e.target.reset())
        .catch(console.warn)

};

// helpers
function appendEntries(data){
    data.entries.forEach(appendEntry);
};

function appendEntry(diaryData){
    const newRow = document.createElement('tr');
    const entryLi = formatEntryTr(diaryData, newRow)
    entiesList.append(entryLi);
};

function formatEntryTr(entry, tr){
    const nameTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const entryTd = document.createElement('td');


    nameTd.textContent = entry.name;
    titleTd.textContent = entry.title;
    entryTd.textContent = entry.entry;

    tr.append(nameTd);
    tr.append(titleTd);
    tr.append(entryTd);

    return tr;
}

