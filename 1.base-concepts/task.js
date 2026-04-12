"use strict";

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];

	if (d > 0) {
		arr = [
			(-b + Math.sqrt(d)) / (2 * a),
			(-b - Math.sqrt(d)) / (2 * a)
		];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [];
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const s = amount - contribution;
	let r = percent / 100 / 12;
	let payMounts = s * (r + (r / (((1 + r) ** countMonths) - 1)));
	let result = payMounts * countMonths;
	result = +result.toFixed(2);
	return result;
}
