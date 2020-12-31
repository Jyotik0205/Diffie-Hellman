var crypto = require("crypto");

// the prime numer shared by everyone                                              
var publicprime = crypto.createDiffieHellman(8);
var prime = publicprime.getPrime();

console.log("Public Prime:"+prime.toString('hex'))
// sharing secret key for Alice and Bob                                                
var alice = crypto.createDiffieHellman(prime);
alice.generateKeys();
var alicePublic = alice.getPublicKey();

var bob = crypto.createDiffieHellman(prime);
bob.generateKeys();
var bobPublic = bob.getPublicKey();
console.log("For BOB and ALICE:")
var bobAliceSecret = bob.computeSecret(alicePublic);
var aliceBobSecret = alice.computeSecret(bobPublic);
console.log("Bob public Key:"+alicePublic.toString('hex'))
console.log("Alic public Key:"+bobPublic.toString('hex'))
console.log("Bob Secret Key:"+bobAliceSecret.toString('hex'))
console.log("Alice Secret Key:"+aliceBobSecret.toString('hex'))

if(bobAliceSecret.toString('hex')===aliceBobSecret.toString('hex')){

    console.log("Secrets are Same")
}

if(alicePublic.toString('hex')!==bobPublic.toString('hex')){

    console.log("Publickeys are different")
}

console.log("For CIRI and ALICE:")
// shared secret with CIRI and ALICE                                               
var ciri = crypto.createDiffieHellman(prime);
ciri.generateKeys();
var ciriPublic = ciri.getPublicKey();
var ciriAliceSecret = ciri.computeSecret(alicePublic);
var aliceCirilSecret = alice.computeSecret(ciriPublic);
console.log("Ciri public Key:"+ciriPublic.toString('hex'))
console.log("Alice public Key:"+alicePublic.toString('hex'))
console.log("Ciri Secret Key:"+ciriAliceSecret.toString('hex'))
console.log("Alice Secret Key:"+aliceCirilSecret.toString('hex'))

if(ciriAliceSecret.toString('hex')===aliceCirilSecret.toString('hex')){

    console.log("Secrets are Same")
}

if(alicePublic.toString('hex')!==ciriPublic.toString('hex')){

    console.log("Publickeys are different")
}

