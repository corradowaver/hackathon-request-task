const fs = require("fs");

module.exports = {
  getCoins: async (req, res, next) => {
    fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    res.send(JSON.parse(jsonString))
})
},
  saveCoins: async (req, res, next) => {
    console.log('kek');
    let ws = fs.createWriteStream("data.json");
    ws.write(JSON.stringify({ coins: req.body.coins }));
    ws.end();
  }
}
