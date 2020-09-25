"use strict";

import "../src/index.scss";

$(document).ready( () => {
    
    $(document).on('click', ".arrows", (e) => {
        let upperCarousel = $("#images-upper");
        let lowerCarousel = $("#images-lower");
        let upperItems = $("#images-upper").find(".image-item");
        let lowerItems = $("#images-lower").find(".image-item");
        let elUpper = $(".ref-upper").removeClass("ref-upper");
        let elLower = $(".ref-lower").removeClass("ref-lower");

        let nextImageUpper = getNextItem($(e.currentTarget), elUpper, upperItems, upperCarousel);
        let nextImageLower = getNextItem($(e.currentTarget), elLower, lowerItems, lowerCarousel);

        nextImageUpper.addClass('ref-upper').css('order', 1);
        nextImageLower.addClass('ref-lower').css('order', 1);

        document.documentElement.style.setProperty("--upperTranslate", nextImageUpper.innerWidth() + "px");
        document.documentElement.style.setProperty("--lowerTranslate", nextImageLower.innerWidth() + "px");

        // console.log(document.documentElement.style.getPropertyValue("--upperTranslate"));
        // console.log(document.documentElement.style.getPropertyValue("--lowerTranslate"));

        carouselMove(upperCarousel, nextImageUpper, upperItems);
        carouselMove(lowerCarousel, nextImageLower, lowerItems);

    });
    
    function next(element, items) {
        if (element.next().length > 0) {
            return element.next();
        } else {
            return items.first();
        }
    }

    function previous(element, items) {
        if (element.prev().length > 0) {
            return element.prev();
        } else {
            return items.last();
        }
    }

    function getNextItem(currentArrow, currentElement, items, carousel) {
        let nextItem;

        if (currentArrow.data('toggle') == 'next') {
            nextItem = previous(currentElement, items);
            carousel.addClass('transition-reverse');
        } else {
            nextItem = next(currentElement, items);
            carousel.removeClass('transition-reverse');
        }

        return nextItem;
    }

    function carouselMove(carousel, nextElement, items) {
        for (let i = 2; i <= items.length; i++) {
            nextElement = next(nextElement, items).css('order', i);
        }

        carousel.removeClass('transition');
        setTimeout(() => {
            carousel.addClass('transition');
        }, 5);
    }

});