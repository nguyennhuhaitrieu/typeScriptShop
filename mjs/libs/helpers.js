"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    static toCurrency(value, currencyUnit, position = "left") {
        if (position == "left") {
            return currencyUnit + " " + value;
        }
        else if (position == "right") {
            return value + " " + currencyUnit;
        }
    }
}
exports.Helpers = Helpers;
