//    y = (t / 0.20) * ( 0.29690 * SQR(x) - 0.12600 * x - 0.35160 * x^2 + 0.28430 * x^3 - 0.10150 * x^4 ) 

// x is position along chord 0 - 1
// t is the maximum thickness as fraction of chord

module.exports = function (t, x) {
  return (
    t*5 * (
    (0.2969 * Math.sqrt(x)) -
    (0.1260 * x) -
    (0.3516 * Math.pow(x, 2)) +
    (0.2843 * Math.pow(x, 3)) -
    (0.1015 * Math.pow(x, 4))
  ))
}

if(!module.parent) {
  var t = +process.argv[2] || 0.5
  for(var i = 0; i < 100; i++)
    console.log(i/100, module.exports(t, i/100))
}
