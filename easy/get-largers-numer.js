/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const GetMax = (param1, ...param2) => {
    let max = 0;
    return Math.max(param1, ...param2);
}

let nums = gets();
nums = nums.split(' ').map(Number);

print(GetMax(nums[0], ...nums));