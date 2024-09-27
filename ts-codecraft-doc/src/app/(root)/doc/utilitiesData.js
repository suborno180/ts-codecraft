// utilitiesData.js
const utilitiesData = [
    {
      name: "generateRandomString",
      signature: "generateRandomString(length: number): string",
      description: "Generates a random string of specified length with alphanumeric and special characters.",
      example: `import { generateRandomString } from 'string-utilities/generateRandomString';
  
  const randomString = generateRandomString(10);
  console.log(randomString); // Example output: "aB3!zG1@kl"`,
    },
    {
      name: "isEmailValid",
      signature: "isEmailValid(email: string): boolean",
      description: "Validates if the provided string is a valid email address.",
      example: `import { isEmailValid } from 'string-utilities/isEmailValid';
  
  const emailCheck = isEmailValid("test@example.com");
  console.log(emailCheck); // Output: true`,
    },
    {
      name: "isPalindrome",
      signature: "isPalindrome(str: string): boolean",
      description: "Checks if the given string is a palindrome (ignoring case and non-alphanumeric characters).",
      example: `import { isPalindrome } from 'string-utilities/isPalindrome';
  
  const palindromeCheck = isPalindrome("A man, a plan, a canal: Panama");
  console.log(palindromeCheck); // Output: true`,
    },
    {
      name: "isPhoneNumberValid",
      signature: "isPhoneNumberValid(phone: string): boolean",
      description: "Validates a phone number using the E.164 format.",
      example: `import { isPhoneNumberValid } from 'string-utilities/isPhoneNumberValid';
  
  const phoneCheck = isPhoneNumberValid("+123456789012");
  console.log(phoneCheck); // Output: true`,
    },
    {
      name: "isStrongPassword",
      signature: "isStrongPassword(password: string): boolean",
      description: "Checks if a password is strong based on conditions (length, uppercase, lowercase, numbers, symbols).",
      example: `import { isStrongPassword } from 'string-utilities/isStrongPassword';
  
  const passwordCheck = isStrongPassword("Password123!");
  console.log(passwordCheck); // Output: true`,
    },
    {
      name: "isURLValid",
      signature: "isURLValid(url: string): boolean",
      description: "Validates if the provided string is a valid URL.",
      example: `import { isURLValid } from 'string-utilities/isURLValid';
  
  const urlCheck = isURLValid("https://www.example.com");
  console.log(urlCheck); // Output: true`,
    },
  ];
  
  export default utilitiesData;
  