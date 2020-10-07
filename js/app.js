'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesSoldEachHour: [],

    generateCustomersEachHour: function(){
        for(var i=0; i<hours.length; i++){
            var randomNumber =  Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
            this.customersEachHour.push(randomNumber);
    }
},

    generateCookiesSoldEachHour: function(){
         this.generateCustomersEachHour();

         for(var i=0; i<hours.length; i++){
            var cookiesSoldThisHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookiesSoldThisHour;
            this.cookiesSoldEachHour.push(cookiesSoldThisHour);
        }
     },

     render: function(){
         var parentSection = document.getElementById('seattle');

         var headingSeattle = document.createElement('h2');

         headingSeattle.textContent = this.name;

         parentSection.appendChild(headingSeattle);

         var salesList = document.getElementById('seattle-sales');

         for(var i=0; i<this.cookiesSoldEachHour.length; i++){
             var liElement = document.createElement('li');
             liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
             salesList.appendChild(liElement);
         }
     }
}

seattle.generateCookiesSoldEachHour();
seattle.render();