const db = connect("mongodb://localhost:27017/diary_db")

// db.diaries.drop()

db.diaries.insertMany([
    {name: "", title: "", entry: ""},
    {name: "", title: "", entry: ""},
    {name: "", title: "", entry: ""}
])