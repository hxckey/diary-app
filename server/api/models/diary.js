const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Entry {
    constructor(data){
        this.name = data.name
        this.title = data.title
        this.entry = data.entry
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const entryData = await db.collection('diaries').find().toArray()
                const entries = entryData.map(d => new Entry({ ...d }))
                resolve(entries);
            } catch (err) {
                console.log(err);
                reject("Error retrieving entries")
            }
        })
    }

}

module.exports = Entry;