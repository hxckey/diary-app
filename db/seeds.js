const db = connect("mongodb://localhost:27017/diaries")

// db.diaries.drop()

db.diaries.insertMany([
    {name: "George", title: "First Entry", entry: "asdfghjkl;"},
    {name: "Golnar", title: "Second Entry", entry: "qwertyuiop"},
    {name: "Romeo", title: "Third Entry", entry: "zxcvbnm"}
])