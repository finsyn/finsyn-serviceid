const t = require('tap')
const { getType, getId } = require('./index')

t.equals(getType('test_123'), 'test')
t.equals(getId('test_123'), '123')
