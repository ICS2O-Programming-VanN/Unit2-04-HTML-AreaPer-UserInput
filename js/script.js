// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input
  const height = parseFloat(document.getElementById('height-of-triangle').value)
  const base = parseFloat(document.getElementById('base-of-triangle').value)

  // process
  const area = (height * base) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}