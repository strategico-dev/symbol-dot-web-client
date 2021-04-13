export default {
    convertBooleans(obj) {
        for(let key in obj) {
            if(obj[key] === 'true') {
                obj[key] = true;
            } else if(obj[key] === 'false') {
                obj[key] = false;
            }
        }

        return obj;
    }
}