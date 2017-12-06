/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

let score = +gets();

if (score >= 1 && score <= 3) {
    score *= 10;
    print(score);
} else if (score >= 4 && score <= 6) {
    score *= 100;
    print(score);
} else if (score >= 7 && score <= 9) {
    score *= 1000;
    print(score);
} else if (score <= 0 || score > 9) {
    print('invalid score');
}
