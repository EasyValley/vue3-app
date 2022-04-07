let _ = require('lodash');

function fn(data) {
  //
  let obj = {};
  _.forEach(data, (element) => {
    obj[element['id']] = element;
  });

  return obj;
}

let data = [
  {
    id: 1,
    next: {
      2: {},
      5: {},
      6: {},
    },
  },
  {
    id: 2,
    next: {
      3: {},
    },
  },
  {
    id: 3,
    next: {
      4: {},
    },
  },
  {
    id: 4,
    next: {
      8: {},
    },
  },
  {
    id: 5,
    next: {
      8: {},
    },
  },
  {
    id: 6,
    next: {
      7: {},
    },
  },
  {
    id: 7,
    next: {
      8: {},
    },
  },
  {
    id: 8,
    next: {
      9: {},
    },
  },
  {
    id: 9,
    next: {},
  },
];
let obj = fn(data);

let res = {};

function gen(root, obj) {
  //
  let keys = _.keys(root.next);
  _.forEach(keys, (key, i) => {
    if (!res[key]) {
      res[key] = {
        id: key,
        x: root.x + 100,
        y: root.y + i * 30,
        next: obj[key].next,
      };
      // console.log(key, 'key');
      gen(res[key], obj);
    }
  });
}

gen(
  {
    id: '1',
    x: 10,
    y: 12,
    next: { 2: {}, 5: {}, 6: {} },
  },
  obj,
);

console.log(res, 'res');
