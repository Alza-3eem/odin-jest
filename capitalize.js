export default function capitalize(str) {
    let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr
}