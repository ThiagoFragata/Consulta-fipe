// Function for masking the character
export function MaskCharacter(str: string, mask: string, n = 4) {
  // Slice the string and replace with
  // mask then add remaining string
  return ('' + str).slice(0, -n).replace(/./g, mask) + ('' + str).slice(-n);
}

// Number that we want to mask
// var num = 12345678;

// Convert number into string
// var str = num.toString();

// Call function without giving value of n
// console.log(MaskCharacter(str, '#'));

// Call function with value of n
// console.log(MaskCharacter(str, '#', 2));
