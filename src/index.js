import questionData from "./question-data.js"
// import questionData from "./question-data.js"
const area  = document.getElementById("area");
const showButton  = document.getElementById("showButton");
const name  = document.getElementById("name");
const comment  = document.getElementById("comment");
const submitButton = document.getElementById("submitButton");

let db = new Dexie("test_database");
db.version(1).stores({
  tests: '++id, name, comment',
});

console.log(questionData);

submitButton.addEventListener("click",()=>{
  let nameValue = name.value;
  let commentValue = comment.value;
 db.tests.add({
  name: nameValue,
  comment: commentValue,
});
  name.value = null;
  comment.value = null;
})

showButton.addEventListener("click",() => {
  db.tests.get(1)
  .then((res) =>
   {
     area.innerHTML = res.name+'<br>';
     area.innerHTML += res.comment;
    }
  );

  area.innerHTML = db.tests.get(1);
})
