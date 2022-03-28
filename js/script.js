// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input makes value a float
  let height = parseFloat(document.getElementById('height-of-triangle').value)
  let base = parseFloat(document.getElementById('base-of-triangle').value)

  // process (formula for area)
  let area = (height * base) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}