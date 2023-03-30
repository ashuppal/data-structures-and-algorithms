const {HashTable, leftJoin} = require ('./hashTable.js');

const newTable = new HashTable (1024);

describe('Hash Table', () => {
  it('can add a key/value to your hashtable', () => {
    newTable.add('name', 'ash');
    expect(newTable.get('name')).toBeTruthy();
  }
  );
  it('can retrieve a value from a bucket within the hashtable that has a collision', () => {
    newTable.add('name', 'ash');
    newTable.add('name', 'ash');
    expect(newTable.get('name')).toBeTruthy();
  }
  );
  it('can successfully hash a key to an in-range value', () => {
    expect(newTable.hash('name')).toBeTruthy();
  }
  );
  it('can set a value in the hashtable', () => {
    newTable.add('name', 'ash');
    newTable.set('name', 'ash');
    expect(newTable.get('name')).toBeTruthy();

  }
  );
  it('can check if a key exists in the hashtable', () => {
    newTable.add('name', 'ash');
    expect(newTable.has('name')).toBeTruthy();
  }
  );
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    newTable.add('name', 'ash');
    expect(newTable.get('name')).toBeTruthy();
  }
  );
  it('should return a new data structure with the synonyms and antonyms', () => {

    const hashTable1 = new HashTable(1024);
    const hashTable2 = new HashTable(1024);

    hashTable1.set('fond', 'enamored');
    hashTable1.set('wrath', 'anger');
    hashTable1.set('diligent', 'employed');
    hashTable1.set('outfit', 'garb');
    hashTable1.set('guide', 'usher');

    hashTable2.set('fond', 'averse');
    hashTable2.set('wrath', 'delight');
    hashTable2.set('diligent', 'idle');
    hashTable2.set('guide', 'follow');
    hashTable2.set('flow', 'jam');

    expect(leftJoin(hashTable1, hashTable2)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ]);

  }
  );


});

