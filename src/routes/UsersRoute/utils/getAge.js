export default (dateOfBirth) => {
    const dateNow = new Date();
    const dateBirth = new Date(dateOfBirth * 1000);
    const age = dateNow.getFullYear() - dateBirth.getFullYear();
    return age;
};