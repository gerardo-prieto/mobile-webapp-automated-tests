var webdriverjs = require('../index'),
    chai        = require('chai'),
    assert      = chai.assert,
    expect      = chai.expect,
    assert      = require('assert');

describe('my webdriverjs tests', function(){

    this.timeout(99999999);
    var client = {};

    before(function(done){
            client = webdriverjs.remote({ desiredCapabilities: {
                browserName: 'chrome',
                name: 'MyFirstTest'
            } });
            client.init(done);
    });

    it('Make a global',function(done) {
        client
            .setCookie('forcedPlatform','html4')
            .setCookie('downloadApp' , '1')
            .url('http://m.olx.com.py')
            .title(function(err, res) {
                console.log('Title was: ' + res.value);
            })
            .setValue('*[name="search"]','casa')
            .click('*[type="submit"]')
            .getSource(function(err, res) {
                expect(res).to.contain('resultados para casa')
             }) 
            .call(done);
    });



    after(function(done) {
        client.end(done);
    });
});
