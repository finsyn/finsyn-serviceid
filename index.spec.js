const t = require('tap')
const { getType, getId, isType } = require('./index')

t.equals(getType('test_123'), 'test')
t.equals(getId('test_123'), '123')
t.ok(isType('test')('test_123'))
t.notOk(isType('not-test')('test_123'))
