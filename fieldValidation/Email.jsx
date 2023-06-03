export default function validateEmail(errors, email) {
    if (!email) {
        errors.email = "Email is required.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/g.test(email)) {
        errors.email = "Must be a valid email address.";
    }

    return errors;
}
