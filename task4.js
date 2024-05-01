const P = 400000; // P is the starting balance of the loan, i.e., the money you are loaning from the bank
const r = (4/100)/12; // r is the anual interest rate, I decided to go for a 4% interest rate, which would be (4/100) = 0.04 devided by 12 for the annual rate
const n = (25*12); // this is the total amount of payments you will be making until you are done paying off the loan; total payments

// The formula for mortgage repayments is MP (Monthly Payments) = P*[r(1+r)^n] / [(1+r)^n - 1]

const MP = P *[r (1+r)^n] / [(1+r)^n - 1]; // we carry out the formula
log.console(MP); // we print the result
 