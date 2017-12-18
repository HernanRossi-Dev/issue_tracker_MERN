
db = new Mongo().getDB('issuetracker');

db.issues.remove({});

db.issues.insert([
    {
        status: 'Open', owner: 'Tavan',
        created: new Date('2017-06-08'), effort: 12,
        completionDate: new Date('2017-07-9'),
        title: 'Missing bottom border on panel',
    },
    {
        status: 'Assigned', owner: "Edd",
        created: new Date('2017-11-11'), effort: 3,
        completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
]);

db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });