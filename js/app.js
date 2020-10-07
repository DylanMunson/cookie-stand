'use strict';

var parentElement = document.getElementById('sales');
var cookieLocations = [];
var headerArrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function SalesLocation(name, minimumHourlyCustomers, maximumHourlyCustomers, averageCookiePerCustomer) {
  this.name = name;
  this.min = minimumHourlyCustomers;
  this.max = maximumHourlyCustomers;
  this.average = averageCookiePerCustomer;
  this.totalCookiesPerHour = [];
  this.customersEachHour = [];
  this.totalCookiesPerDay = 0;

  cookieLocations.push(this);
};

SalesLocation.prototype.generateHourlyCookies = function () {
  for(var i=0; i<headerArrayHours.length; i++){
    var customersForTheHour = generateRandomNumber(this.min, this.max);
    this.customersEachHour.push(customersForTheHour);
  }
  for(var i=0; i<this.customersEachHour.length; i++){
    var cookiesForTheHour = Math.ceil(this.customersEachHour[i] * this.average);
    this.totalCookiesPerHour.push(cookiesForTheHour);

    this.totalCookiesPerDay += cookiesForTheHour;
  }
}

SalesLocation.prototype.render = function(){
  var tableRowElement = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRowElement.appendChild(tableHeader);

  for(var i=0; i<this.totalCookiesPerHour.length; i++){
    var totalCookiesData = document.createElement('td');
    totalCookiesData.textContent = this.totalCookiesPerHour[i];
    tableRowElement.appendChild(totalCookiesData);
  }
  parentElement.appendChild(tableRowElement);
}


new SalesLocation('seattle', 23, 65, 6.3);
new SalesLocation('Tokyo', 3, 24, 1.2);
new SalesLocation('Dubai', 11, 38, 3.7);
new SalesLocation('Paris', 20, 38, 2.3);
new SalesLocation('Lima', 2, 16, 4.6);

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function headerRow() {
  var trElement = document.createElement('tr');
  for (var i = 0; i < headerArrayHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = headerArrayHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}

headerRow();
for(var i=0; i<cookieLocations.length; i++){
  cookieLocations[i].generateHourlyCookies();
  cookieLocations[i].render();
}

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//  var seattle = {
//     minCustomersPerHour: 23,
//     maxCustomersPerHour: 65,
//     averageCookiesPerCustomer: 6.3,
//     customersEachHour: [],
//     cookiesSoldEachHour: [],

//     generateCustomersEachHour: function(){
//         for(var i=0; i<hours.length; i++);{
//             var randomNumber =  Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
//             this.customersEachHour.push(randomNumber);
//         }
//     },

//     generateCookiesSoldEachHour: function(){
//         this.generateCustomersEachHour();

//         for(var i=0; i<hours.length; i++);{
//             var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//             this.totalCookiesForTheDay += cookiesSoldThisHour;
//             this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//         }
//      }, 
// }
//     var parentElement = document.getElementById('table');

//     function generateHeaderRow(){
//         var trElement = document.createElement('tr');

//         var headerArray = [hours];

//         for(var i=0; i<headerArray.length; i++){
//             var thElement = document.createElement('th');
//             thElement.textContent = headerArray[i];
//             trElement.appendChild(thElement);
//         }
//     parentElement.appendChild(trElement);
//     }
  
// generateHeaderRow();
// seattle.generateCookiesSoldEachHour();