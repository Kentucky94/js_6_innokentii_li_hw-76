const fs = require('fs');

const nanoid = require('nanoid');

const fileName = './db.json';

let data = [];

module.exports = {
  init() {
    try{
      const fileContents = fs.readFileSync(fileName);
      data = JSON.parse(fileContents.toString())
    }catch(e){
      console.log(`Could not read file ${fileName}`, e);
      data = [];
    }
  },
  getMessages() {
    return data;
  },
  addMessage(item){
    item.id = nanoid();
    item.date = new Date().toISOString();
    data.push(item);
    this.save();
  },
  save(){
    const fileContents = JSON.stringify(data, null, 2);
    fs.writeFileSync(fileName, fileContents);
  }
}
;