# naca

generate a [symmetric naca airfoil](http://www.boat-links.com/foils.html)
of interest to boat or aircraft designers.

example output: the NACA0015 foil.
![output.png](./output.ping)

## example

output a table of x, y

```
var naca = require('naca')
var t = 0.15 //ratio of thickest part to centerline.
for(var i = 0; i <= 100;i ++)
  console.log(i/100, naca(t, i/100))
```

## License

MIT


