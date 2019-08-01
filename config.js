const dbName = 'org';
const userName = 'jayand017';
const password = 'Jsoft1989';
const uri = `mongodb+srv://${userName}:${password}@cluster001-hdeor.mongodb.net/${dbName}?retryWrites=true`;

const colEmp = 'employee';

module.exports = {uri, dbName, colEmp};