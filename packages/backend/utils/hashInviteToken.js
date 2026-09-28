const crypto = require('crypto');

function hashInviteToken(token){
    return crypto.createHash('sha256').update(token).digest('hex');
}

module.exports = hashInviteToken; 