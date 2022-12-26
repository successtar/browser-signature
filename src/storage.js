

const storageKeyName = "device-unique-signature"

/**
 * Generate Browser Unique Signature (fingerprint) using random string persisted in local storage
 * @param {_} _ 
 * @returns {string}
 */  
const browserSignature = _ => {

    // Retrieve previously saved signature
    let signature = localStorage.getItem(storageKeyName) || "";
    if (signature){
        return signature;
    }

    // Generate Random String
    for (let i = 0; i < 5; i++){
        signature += Math.random().toString(36).slice(2);
    }
    // Persist Signature
    localStorage.setItem(storageKeyName, signature);
    return signature;
};

export default browserSignature;