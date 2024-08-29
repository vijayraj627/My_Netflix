const formHandling = (email,password) => {
    
    const checkEmail = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

    const checkPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!checkEmail){
        return "Please enter Valid Email"
    }

    if(!checkPassword){
        return "Please enter Valid Password"
    }

    return null;
}

export default formHandling;