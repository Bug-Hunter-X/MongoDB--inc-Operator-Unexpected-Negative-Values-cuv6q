```javascript
db.collection('counters').runCommand( { findAndModify: 'counters', query: { _id: 'myCounter' }, update: { $inc: { sequence: -1 } }, new: true } ).sequence;
```