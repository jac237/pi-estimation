# PI ESTIMATION (Visualization) with P5.JS

## Preview
<!-- ![Pi Visualization](./assets/images/pi-visualization.png) -->
<img src="./assets/images/pi-visualization.png" alt="Pi Estimation Visual" width="300"/>

See the live preview with the [p5.js Web Editor](https://editor.p5js.org/jac237/sketches/3tiMjKd3U)!

## Background
The image above describes a **unit circle**, a circle with radius 1, enclosed by a **square** with unit length 2.

We know from alegbra that the **area of a circle** can be found using the equation:

> <img src="https://latex.codecogs.com/gif.latex?\pi&space;\times&space;r&space;^&space;2" />

Since the unit circle has radius 1, the area of the unit circle is $\pi$. The area of the enclosing square is 4. This computation gives us a **ratio**:

> <img src="https://latex.codecogs.com/gif.latex?\frac{\text{area&space;of&space;circle}}{\text{area&space;of&space;square}}&space;=&space;\frac{\pi}{4}" />

From the equation above, we can derive the following:

> <img src="https://latex.codecogs.com/gif.latex?\frac{\text{ratio&space;of&space;circle}}{\text{ratio&space;of&space;square}}&space;\times&space;4&space;=&space;\pi" />

We can interpret this information as the **ratio** of **red dots** (inside the circle) to the **total number of dots** (red + blue dots) *multiplied* by 4.

> <img src="https://latex.codecogs.com/gif.latex?\frac{\text{\&hash;&space;of&space;red&space;dots}}{\text{total&space;\&hash;&space;of&space;dots}}&space;\times&space;4&space;=&space;\pi" />

## Sample Console Output

```javascript
3.2
3.3333333333333335
3.4285714285714284
3.5
3.5555555555555554
3.6
....
3.1384615384615384
3.1406649616368285
3.142857142857143
3.145038167938931
```

## Reference
* https://www.codecogs.com/latex/eqneditor.php

## License
[MIT License](./LICENSE.md)
