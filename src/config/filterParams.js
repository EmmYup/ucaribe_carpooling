function filterParams(params, keys) {
    for (let i = 0; i < keys.length; i++) {
        if (!params[keys[i]]) {
            delete params[keys[i]];
        }
    }
    return { ...params };
}

export default filterParams;
