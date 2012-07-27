test('assertions', function() {
    equal(hello(), 'hello world', 'test return value');
    equal(hello('saga'), 'hello saga', 'test argument');
});
