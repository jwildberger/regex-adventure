var verify = require('adventure-verify')
var fs = require('fs')
var path = require('path')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.plan(4)
  var f = require(path.resolve(args[0]))
  t.ok(f("LITERALLY CAN'T EVEN"))
  t.notOk(f("FIGURATIVELY can't even"))
  t.ok(f('I am LITERALLY on a roll down a hill right now'))
  t.notOk(f('literaturely'))
})
