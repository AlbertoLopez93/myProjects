"use strict";

var MyDate = require("../MyDate");

var Calendar = new MyDate(2016,10,6);

describe("Validating gets and sets. ", function() {
  it("getYear is function", function() {
    expect(typeof Calendar.getYear).toBe('function');
  });
  it("getYear works", function() {
    expect(Calendar.getYear()).toBe(2016);
  });
  it("getMonth is function", function() {
    expect(typeof Calendar.getMonth).toBe('function');
  });
  it("getMonth works", function() {
    expect(Calendar.getMonth()).toBe(10);
  });
  it("getDay is function", function() {
    expect(typeof Calendar.getDay).toBe('function');
  });
  it("getDay works", function() {
    expect(Calendar.getDay()).toBe(6);
  });
  it("setYear works is void", function() {
    expect(Calendar.setYear(2010)).toBeUndefined();
  });
  it("setMonth works is void", function() {
    expect(Calendar.setMonth(1)).toBeUndefined();
  });
  it("setDay works is void", function() {
    expect(Calendar.setDay(31)).toBeUndefined();
  });
  it("sets operates", function() {
    expect(Calendar.toString()).toBe('Sunday 31 Jan 2010');
  });
});

describe("Testing prototype. ", function(){
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2014)).toBe(false);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2004)).toBe(true);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2000)).toBe(true);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(1900)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2008,4,31)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2009,2,30)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2008,4,25)).toBe(true);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(1900,2,29)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2004,2,29)).toBe(true);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2005,5,29)).toBe(true);
  });
  it('setDate', function() {
    expect(Calendar.setDate(2005,5,30)).toBeUndefined();
  });
  it('setDate', function() {
    expect(Calendar.setDate(2025,2,30)).toBeUndefined();
  });
  it('Test Day of week on October 2016', function() {
    expect(Calendar.getDayOfWeek(2016,10,6)).toBe(4);
  });
  it('Test Day of week when I borned', function() {
    expect(Calendar.getDayOfWeek(1993,3,26)).toBe(5);
  });
  it('Test Day of week on March 2016(leap)', function() {
    expect(Calendar.getDayOfWeek(2016,3,1)).toBe(2);
  });
  it('Test Day of week on February 2016(leap)', function() {
    expect(Calendar.getDayOfWeek(2016,2,28)).toBe(0);
  });
  it('Test Day of week on March 1996(leap)', function() {
    expect(Calendar.getDayOfWeek(1996,3,1)).toBe(5);
  });
  it('Test Day of week on February 1996(leap)', function() {
    expect(Calendar.getDayOfWeek(1996,2,28)).toBe(3);
  });
  it('Test Day of week on March 2017(not-leap)', function() {
    expect(Calendar.getDayOfWeek(2017,3,1)).toBe(3);
  });
  it('Test Day of week on February 2017(not-leap)', function() {
    expect(Calendar.getDayOfWeek(2017,2,28)).toBe(2);
  });
  it('Test Day of week on January 2003', function() {
    expect(Calendar.getDayOfWeek(2003,1,30)).toBe(4);
  });
  it('Test Day of week on September 2003', function() {
    expect(Calendar.getDayOfWeek(2003,9,16)).toBe(2);
  });
  it('Test setDate with toString', function() {
    expect(Calendar.toString()).toBe('Monday 30 May 2005');
  });
});

var OneDay = new MyDate(2012,2,28);
var DayTwo = new MyDate(2015,2,28);
var DayThree = new MyDate(1995,12,30);
var DayFour = new MyDate(1996,3,1);
var DayFive = new MyDate(1996,5,1);
describe('Testing nexts and previous, ', function() {
  it('nextDay with leap year', function() {
    expect(OneDay.nextDay().toString()).toBe('Wednesday 29 Feb 2012');
  });
  it('nextDay without leap year', function() {
    expect(DayTwo.nextDay().toString()).toBe('Sunday 1 Mar 2015');
  });
  it('nextDay where month has 31 days', function() {
    expect(DayThree.nextDay().toString()).toBe('Sunday 31 Dec 1995');
  });
  it('nextDay at yearend', function() {
    expect(DayThree.nextDay().toString()).toBe('Monday 1 Jan 1996');
  });

  it('previousDay with leap year', function() {
    expect(DayFour.previousDay().toString()).toBe('Thursday 29 Feb 1996');
  });
  it('previousDay without leap year', function() {
    expect(DayTwo.previousDay().toString()).toBe('Saturday 28 Feb 2015');
  });
  it('previousDay at New Year', function() {
    expect(DayThree.previousDay().toString()).toBe('Sunday 31 Dec 1995');
  });
  it('previousDay where before month has 30 days', function() {
    expect(DayFive.previousDay().toString()).toBe('Tuesday 30 Apr 1996');
  });
});
