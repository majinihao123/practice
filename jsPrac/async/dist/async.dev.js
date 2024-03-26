"use strict";

function test() {
  return regeneratorRuntime.async(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", 'hello');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

var t = test();
console.log(t().then());