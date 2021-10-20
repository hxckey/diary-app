const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Entry {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.title = data.title
        this.entry = data.entry
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const entryData = await db.collection('diaries').find().toArray()
                // console.log(entryData.length)
                const entries = entryData.map(d => new Entry({ ...d, id: d._id }))
                resolve(entries);
            } catch (err) {
                console.log(err);
                reject("Error retrieving entries")
            }
        })
    }

    static create(name, title ,entry){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let entryData = await db.collection('diaries').insertOne({ name, title, entry })
                console.log(entryData);
                let newEntry = new Entry(entryData.ops[0]);
                resolve (newEntry);
            } catch (err) {
                reject('Error creating entry');
            }
        });
    }

}

module.exports = Entry;