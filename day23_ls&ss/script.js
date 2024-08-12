function validateForm() {
  let name = document.forms["RegForm"]["Name"];
  let email = document.forms["RegForm"]["EMail"];
  let password = document.forms["RegForm"]["Password"];
  let confirm_password = document.forms["RegForm"]["Confirm"];

  // console.log(name.value);

  if (name.value === "") {
    alert("Please enter your name");
    return false;
  }

  if (email.value === "") {
    alert("Please enter your email");
    return false;
  }

  if (password.value === "") {
    alert("Please enter your password");
    return false;
  }

  if (confirm_password.value === "") {
    alert("Please enter your confirm Password");
    return false;
  }

  if (password.value === confirm_password.value) {
    if (stroedInLocalStorage()) {
      alert("Registered Succesfully");
      return true;
    } else {
      return false;
    }
  } else {
    alert("Password and Confirm Password do not match");
    return false;
  }
  return true;
}

let arr = [];

function stroedInLocalStorage(){
    console.log("Stored in local storage!!!");
    let name = document.forms["RegForm"]["Name"].value;
    let email = document.forms["RegForm"]["EMail"].value;
    let password = document.forms["RegForm"]["Password"].value;
    let confirm_password = document.forms["RegForm"]["Confirm"].value;

    let userObj = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password
    }

    arr.push(userObj);

    let userArrString = JSON.stringify(arr);
    localStorage.setItem("users", userArrString);
    // return true;
}




// sessionStorage.setItem("name", "Akhil");
// sessionStorage.setItem("age", "25");

// let data = sessionStorage.getItem("age");
// let data1 = sessionStorage.getItem("name");

// console.log(data, data1);

// // let a = 10;
// let obj = {
//     name:"Akhil",
//     age:25,
//     city:"Hyderabad"
// }

// let arr = [1,2,3,4,56,7,78, obj];
// arr[4]=60000

// localStorage.setItem("object", JSON.stringify(obj));
// let data = JSON.parse(localStorage.getItem("object"));

// localStorage.setItem("array", JSON.stringify(arr));

// let data1 = JSON.parse(localStorage.getItem("array"));

// // localStorage.removeItem("object")
// // localStorage.clear()

// console.log(data);
// console.log(data1);
