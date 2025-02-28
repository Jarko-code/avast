// Adjust content based on country - CONDITIONS code for frequent refactor, according to the ticket conditions.
//<#inc("JS_country-codes-for-ios-and-android")#>
const placeholders = avm.require("avast.ipm.placeholders");
const icl = placeholders
  .parsePlaceholder("<#IsoCountryLocation#>", "string", "0")
  .value.toLowerCase();
const target1 = document.querySelector(".js-target-1");
const target2 = document.querySelector(".js-target-2");
const target3 = document.querySelector(".js-target-3");
const target4 = document.querySelector(".js-target-4");
const target5 = document.querySelector(".js-target-5");
const target6 = document.querySelector(".js-target-6");
const target7 = document.querySelector(".js-target-7");
const oms = document.querySelector(".only-mobile-security");
const multiple_products = document.getElementById("multiple-products");
const number_5 = document.querySelector(".number-5");
const number_3 = document.querySelector(".number-3");

const showElements = (...elements) => {
  elements.forEach((element) => element.classList.remove("hide"));
};

const hideElements = (...elements) => {
  elements.forEach((element) => element.classList.add("hide"));
};

const group1 = [iOS.japan];
const group2 = [iOS.unitedKingdom];
const group3 = [iOS.australia, iOS.newZeland];
const group4 = [
  iOS.germany,
  iOS.france,
  iOS.italy,
  iOS.spain,
  iOS.netherlands,
  iOS.belgium,
  iOS.denmark,
  iOS.norway,
  iOS.finland,
  iOS.sweden,
  iOS.ireland,
  iOS.switzerland,
  iOS.austria,
  iOS.poland,
  iOS.singapore,
  iOS.malaysia,
  iOS.hongKong,
];
const group5 = [
  iOS.china,
  iOS.russia,
  iOS.iraq,
  iOS.belarus,
  iOS.iran,
  iOS.northKorea,
  iOS.oman,
  iOS.turkey,
  iOS.turkmenistan,
  iOS.korea,
  iOS.thailand,
  iOS.vietnam,
  iOS.philippines,
  iOS.indonesia,
  iOS.cambodia,
];
const group6 = [iOS.usa];

if (
  icl == iOS.australia ||
  icl == iOS.canada ||
  icl == iOS.usas ||
  icl == iOS.unitedKingdom
) {
  document.querySelector(".offer1").setAttribute("data-price", "offer4.price");
  document.getElementById("data-offer-1").setAttribute("data-offer", "4");
}

switch (true) {
  case group1.includes(icl):
    showElements(number_3);
    hideElements(oms, target2, target3, target6, number_5);
    break;

  case group2.includes(icl):
    hideElements(oms, target3, number_3);
    break;

  case group3.includes(icl):
    showElements(number_3);
    hideElements(oms, target3, number_5);
    break;

  case group4.includes(icl):
    hideElements(target2, target3, oms, number_3);
    break;

  case group5.includes(icl):
    hideElements(multiple_products);
    showElements(oms);
    break;

  case group6.includes(icl):
    showElements(target1, target2, target3, target4, target5, target6, target7);
    hideElements(oms, number_3);
    break;

  default:
    hideElements(oms, target2, target3, target6, number_3);
}
