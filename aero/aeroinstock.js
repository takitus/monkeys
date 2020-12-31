// ==UserScript==
// @name         Aero In Stock
// @namespace    http://takitus.net/
// @version      0.11
// @updateURL    https://github.com/takitus/monkeys/blob/main/aero/aeroinstock.js
// @description  Displays only in stock items when choosing the 'show all' count on the page
// @author       takitus
// @match        https://www.aeroprecisionusa.com/*?product_list_limit=all
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $ = window.jQuery;
    $('.unavailable').closest('.item').hide();
})();
