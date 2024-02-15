let phone = prompt("Telefon raqam kiriting...");

function validatePhone(phone) {

    if (phone.substring(0, 4) != '+998') {
        alert('telefon raqam formati notogri')
        return true
    }

    

    if (!Number(phone.substring(1))) {
        alert("Telefon raqam notogri kiritildi")
        return false
    }
}

function validateAge(age) {
    if (age <= 0 || age > 200) {
        alert("Yosh notogri kiritildi")
        return false
    }

    return true;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


let age;
let email;
if (validatePhone(phone)) {
    age = +prompt("Yoshingizni kiriting")

    if (validateAge(age)) {
        email = prompt("Emailni kiriting")
        if (validateEmail(email)) {
            let objact = {
                phone: phone,
                age: age,
                email: email
            }

            let copiedAge = age;
            let ageInterval = setInterval(() => {
                console.log(copiedAge);
                copiedAge--;


                if (copiedAge == 0 ) {
                    clearInterval(ageInterval)
                    console.log(objact);
                }
            }, 1000)
        }
    }
}

