db = connect('localhost:27017/celebrity_db');

db.celebrities.drop();

db.celebrities.insertMany([
  {
    name: 'Tom Hanks',
    age: 66,
    birthplace: 'California',
    awards: 50,
  },
  {
    name: 'Tom Hardy',
    age: 44,
    birthplace: 'California',
    awards: 3,
    relationship_status: 'Married',
  },
  { name: 'Daniel Craig', age: 54, birthplace: 'Chester', children: 2 },
  { name: 'Léa Seydoux', age: 37, birthplace: 'Paris', awards: 5 },
  { name: 'Johnny Depp', age: 59, birthplace: 'Kentucky', children: 2 },
  {
    name: 'Gal Gadot',
    age: 37,
    birthplace: 'Petah Tikva',
    relationship_status: 'Married',
  },
  { name: 'Lena Headey', age: 48, birthplace: 'Hamilton', children: 2 },
]);
