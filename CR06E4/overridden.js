let map = {one: 1, two: 2, hasOwnProperty: 3};

/* example for calling overridden hasOwnProperty method */
Object.hasOwnProperty.call(map, 'one');
