const nameInput=document.getElementById("name");
const titleInput=document.getElementById("title");
const entryInput=document.getElementById("entry");
const form=document.querySelector("form");

form.addEventListener('submit',submitDiary);



function submitDiary(e){
    e.preventDefault();

    const diaryData={
        nameInput:e.target.name.value,
        titleInput:e.target.title.value,
        entryInput:e.target.entry.value
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

    console.log(diaryData);

};

function appendEntry(){

}

