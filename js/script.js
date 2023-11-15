// use these elements to render the chart, legend and controls
const $legendEl = document.querySelector(`.js-legend`);
const $chartEl = document.querySelector(`.js-chart`);
const $controlsEl = document.querySelector(`.js-controls`);
const $toggleEl = document.querySelector(`.js-theme-toggle`);
// empty object to store the data
let data;

// SVG drawing functions

const cos = Math.cos;
const sin = Math.sin;
const π = Math.PI;

const f_matrix_times = (([[a, b], [c, d]], [x, y]) => [a * x + b * y, c * x + d * y]);
const f_rotate_matrix = (x => [[cos(x), -sin(x)], [sin(x), cos(x)]]);
const f_vec_add = (([a1, a2], [b1, b2]) => [a1 + b1, a2 + b2]);

const drawArc = (([cx, cy], [rx, ry], [t1, Δ], φ,) => {
    /* [
    returns a SVG path element that represent a ellipse.
    cx,cy → center of ellipse
    rx,ry → major minor radius
    t1 → start angle, in degrees.
    Δ → angle to sweep, in degrees. positive.
    φ → rotation on the whole, in radian
    Based on:
    URL: SVG Circle Arc http://xahlee.info/js/svg_circle_arc.html
    Version 2019-06-19
     ] */
    // convert t1 from degree to radian
    t1 = t1 / 360 * 2 * π;
    // convert Δ from degree to radian
    Δ = Δ / 360 * 2 * π;
    Δ = Δ % (2 * π);
    // convert φ from degree to radian
    φ = φ / 360 * 2 * π;
    const rotMatrix = f_rotate_matrix(φ);
    const [sX, sY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1), ry * sin(t1)]), [cx, cy]));
    const [eX, eY] = (f_vec_add(f_matrix_times(rotMatrix, [rx * cos(t1 + Δ), ry * sin(t1 + Δ)]), [cx, cy]));
    const fA = ((Δ > π) ? 1 : 0);
    const fS = ((Δ > 0) ? 1 : 0);
    const d = `M ${sX} ${sY} A ${[rx, ry, φ / (2 * π) * 360, fA, fS, eX, eY].join(" ")}`;
    return d;
});

// get the data with async and start the chain of functions
// pass the data to the next function in the chain

// render the controls (radio buttons) and make them listen to changes to update the chart and legend

// render the legend for the first party and then update it with new data
// make a list and add a list item per key and pass a color in the form of a css variable

// render the chart for the first party and then update it with new data
// make a new svg of 400x200
// for each key in the keys object, draw an arc with a stroke width of 50
// use the drawArc([cx, cy], [rx, ry], [start angle, angle to sweep], rotation in the whole)

// update the arcs with new data
// change the stroke-dasharray to the new values

// theme toggle
// the theme toggle should remember your choice in localStorage
// and it should sync with system changes

// init function

const init = () => {

};

init();
