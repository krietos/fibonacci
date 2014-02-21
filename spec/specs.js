describe('fiboncci', function() {

  it('should return the value of the fibonacci sequence inputted.', function() {
    fibonacci(9).should.equal(21);
  });

  it('should return the value of the fibonacci sequence inputted.', function() {
    fibonacci(1).should.equal(0);
  });

});
