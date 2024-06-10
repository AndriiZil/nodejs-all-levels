'use strict';

const crypto = require('node:crypto');

// alhoritms: md5, sha1, sha256, sha512 are available
const string = 'password';

const base64 = crypto.createHash('sha512').update(string).digest('hex');

console.log(base64); // b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt); // 0uMWKd0FCyVHH60cdRWaBuCQFdW+0ORhYZzIBJ61MgDQvHurZirg4RjkxThAemTNWHATl4amvYdAkH8rlk78DA== // random
    crypto.pbkdf2(string, salt, 10000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64')); // F2qdg257xtu2y3PsZ0sL0og0qsDKFLbFP/ZF8ORB2a9asMZtMN0rGexMTb34uDodBwJHPZq6yAiPW8VvDPSDBA==
    })
});
