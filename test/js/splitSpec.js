// Generated by CoffeeScript 1.6.2
describe("Split", function() {
  beforeEach(function() {
    var StringSplitter, module, splitter;

    module = require('../../src/js/split.js');
    splitter = require('../../src/js/StringSplitter.js');
    StringSplitter = new splitter.StringSplitter();
    spyOn(process.stdout, 'write');
    spyOn(StringSplitter, 'stringsOf').andCallFake(function(text) {
      return ['x', 'y'];
    });
    spyOn(StringSplitter, 'nextPositionIn');
    return this.split = new module.Split(StringSplitter);
  });
  it("should print the splitted strings", function() {
    var text;

    text = ' blah blah blah. ';
    this.split.run(text);
    expect(process.stdout.write).toHaveBeenCalledWith('x\n');
    return expect(process.stdout.write).toHaveBeenCalledWith('y\n');
  });
  return it("should print the splitted strings with prefix ...- if french", function() {
    var text;

    text = '...-blah blah blah. ';
    this.split.run(text);
    expect(process.stdout.write).toHaveBeenCalledWith('...-x\n');
    return expect(process.stdout.write).toHaveBeenCalledWith('...-y\n');
  });
});