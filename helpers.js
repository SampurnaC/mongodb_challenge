// names of all celebrities in database

db = connect('localhost:27017/celebrity_db');

function getNames() {
  db.celebrities.find().forEach(function (document) {
    print(document.name);
  });
}

function getChildrenCount() {
  return db.celebrities.count({ children: { $exists: true } });
}

function getTotalAwards() {
  return db.celebrities.aggregate({
    $group: { _id: '$birthplace', total: { $sum: '$awards' } },
  });
}
