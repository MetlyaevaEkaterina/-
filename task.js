"use strict";

console.log("Домашнее задание к занятию 1. \"Основные понятия\"")

function solveEquation(a, b, c) {
    let dis = b**2 - 4 * a * c;
    let arr = [];

    if (dis === 0) {
        arr.push(-b / (2 * a))
    } else if (dis > 0) {
        arr.push((-b + Math.sqrt(dis)) / (2 * a));
        arr.push((-b - Math.sqrt(dis)) / (2 * a))
    }
    return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return "Есть не числовое выражение, исправьте"
    } else {
        let P = (percent / 100) / 12;
        let n = countMonths;
        let S = amount - contribution;

        let monthPay = S * (P + (P / (((1 + P)**n) - 1)));
        let sum = monthPay * countMonths;
        return sum.toFixed(2)
    }
}