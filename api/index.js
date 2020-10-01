var request = require('superagent');

module.exports = async (req, res) => {
    const listId = 'eff0a16507';
    const apiKey = '4efd9ef5dcd7c9bda3bae5dc0c9bcbbe-us2';
    const instance = 'us2';

    console.log(req.body)

    request
        .post('https://' + instance + '.api.mailchimp.com/3.0/lists/' + listId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + Buffer.alloc('anystring:' + apiKey).toString('base64'))
        .send({
            'name': req.body[1],
            'email': req.body[0],
            'status': 'subscribed',
        })
        .end(function (err, response) {
            if (response.status < 300 || (response.status === 400)) {
                res.send('Signed Up!');
            } else {
                res.send('Sign Up Failed :(');
            }
        });
} 