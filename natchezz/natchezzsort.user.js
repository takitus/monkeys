// ==UserScript==
// @name         Natchezz List Sort
// @namespace    http://takitus.net/
// @version      0.11
// @downloadURL  https://github.com/takitus/monkeys/raw/main/natchez/natchezsort.user.js
// @updateURL    https://github.com/takitus/monkeys/raw/main/natchez/natchezsort.user.js
// @description  Moves all in stock items to the top of the list, hides extra info for out of stock
// @author       takitus
// @match        https://www.natchezss.com/wishlist/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // init jquery
    var $ = window.jQuery;

    // move in stock to top of list
    $('.add-to-cart-alt button.btn-cart').closest('tr').each(function(){
      $(this).prependTo("#wishlist-table"); 
    });

    // minimize not in stock
    $('p.out-of-stock').closest('.last').hide();
})();
