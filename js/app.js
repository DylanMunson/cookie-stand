'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    

    cookiesSoldEachHour: [],

    generateCustomersEachHour: function(){
        var randomNumber =  Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);

        this.customersEachHour.push(randomNumber);
    }
}