const HashTable = require ('./hashTable.js');

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
});
