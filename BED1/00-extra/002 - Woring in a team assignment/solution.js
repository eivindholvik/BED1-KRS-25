import * as readline from "readline";

// const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const users = [{
  firstName: "Eivind",
  lastName: "Holvik",
  dob: "1992-10-21",
  hasDriverLicense: true
}];

function displayMenu() {
  console.log('Menu Options:');
  console.log('1. Create User');
  console.log('2. Show All Users');
  console.log('3. Delete User by ID');
  console.log('0. Exit Program');
}

function createUser() {
  rl.question('Enter first name: ', (firstName) => {
    rl.question('Enter last name: ', (lastName) => {
      rl.question('Enter date of birth (YYYY-MM-DD): ', (dob) => {
        rl.question('Does the user have a driver\'s license? (yes/no): ', (hasLicense) => {
          const user = {
            firstName,
            lastName,
            dob,
            hasDriverLicense: hasLicense === 'yes'
          };
          users.push(user);
          console.log('User created successfully!');
          main();
        });
      });
    });
  });
}

function showAllUsers() {
  if (users.length === 0) {
    console.log('No users found.');
  } else {
    console.log('All Users:');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.firstName} ${user.lastName} (${user.dob}) - Driver's License: ${user.hasDriverLicense ? 'Yes' : 'No'}`);
    });
  }
  main();
}

function deleteUserById() {
  rl.question('Enter user ID to delete: ', (id) => {
    const index = parseInt(id) - 1;
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
      console.log('User deleted successfully!');
    } else {
      console.log('Invalid user ID.');
    }
    main();
  });
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
      createUser();
      break;
    case '2':
      showAllUsers();
      break;
    case '3':
      deleteUserById();
      break;
    case '0':
      console.log('Exiting program...');
      rl.close();
      process.exit();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      main();
  }
}

function main() {
  displayMenu();
  rl.question('Enter your choice: ', (choice) => {
    handleChoice(choice);
  });
}

main();