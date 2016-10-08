/****************************************************************************

 Name: abbreviateNumber.js
 Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1}
 Target: Exercises/$1/Arrays
 Function: abbreviateNumber

 ****************************************************************************/
"use strict";

const abbreviateNumber = require("../abbreviateNumber");
const ary = [
	[999999e6,"999999M"],
	[999e7, "9990M"],
	[101e7, "1010M"],
	[999e5, "99.90M"],
	[101e5, "10.10M"],
	[101e4, "1.01M"],
	[1230000, "1.23M"],
	[1001e3, "1.00M"],
	[1000500, "1.00M"],
	[1e6, "1.00M"],
	[999999, "1.00M"],
	[999500, "1.00M"],
	[999499, "999K"],
	[999001, "999K"],
	[12345, "12.3K"],
	[1e4, "10.0K"],
	[9999, "9,999"],
	[1299, "1,299"],
	[888, "888"],
	[0, "0"],
	[-999e7, "-9990M"],
	[-101e7, "-1010M"],
	[-999e5, "-99.90M"],
	[-101e5, "-10.10M"],
	[-101e4, "-1.01M"],
	[-1230000, "-1.23M"],
	[-1001e3, "-1.00M"],
	[-1000500, "-1.00M"],
	[-1e6, "-1.00M"],
	[-999999, "-1.00M"],
	[-999500, "-1.00M"],
	[-999499, "-999K"],
	[-999001, "-999K"],
	[-12345, "-12.3K"],
	[-1e4, "-10.0K"],
	[-9999, "-9,999"],
	[-1234, "-1,234"],
	[10100, "10.1K"],
	[10053, "10.0K"],
	[10049, "10.0K"],
	[9948, "9,948"]];

describe("Testing Large numbers exercise", function() {
	ary.forEach(function(element) {
		it("The number is " + element[0], function() {
			expect(abbreviateNumber(element[0])).toBe(element[1]);
		});
	});
});