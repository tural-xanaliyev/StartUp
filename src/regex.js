const regexObject = {
  passwordDataTesder: (paramsPassword) => {
    const strongPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const mediumPassword = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    let isTrue = false;
    let isStrong = false;
    if (strongPassword.test(paramsPassword)) {
      isTrue = true;
      isStrong = "strong";
    } else if (mediumPassword.test(paramsPassword)) {
      isTrue = true;
      isStrong = "meduim";
    }
    return isTrue;
  },
  emailDataTesder: (paramsEmail) => {
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    let isTrue = false;
    if (emailRegex.test(paramsEmail)) {
      isTrue = true;
    }
    return isTrue;
  },
};

export default regexObject;
