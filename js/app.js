'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesSoldEachHour: [],

    generateCustomersEachHour: function(){
        for(var i=0; i<hours.length; i++);{
            var randomNumber =  Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
            this.customersEachHour.push(randomNumber);
        }
    },

    generateCookiesSoldEachHour: function(){
        this.generateCustomersEachHour();

        for(var i=0; i<hours.length; i++);{
            var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookiesSoldThisHour;
            this.cookiesSoldEachHour.push(cookiesSoldThisHour);
        }
     }, 
}
    var parentElement = document.getElementById('table');

    function generateHeaderRow(){
        var trElement = document.createElement('tr');

        var headerArray = [hours];

        for(var i=0; i<headerArray.length; i++){
            var thElement = document.createElement('th');
            thElement.textContent = headerArray[i];
            trElement.appendChild(thElement);
        }
    parentElement.appendChild(trElement);
    }
  
generateHeaderRow();
seattle.generateCookiesSoldEachHour();