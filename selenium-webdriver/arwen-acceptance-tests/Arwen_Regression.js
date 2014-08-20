var assert = require('assert'),
    fs = require('fs');

var chai = require("chai");
var expect = chai.expect;

var webdriver = require('../node_modules/selenium-webdriver'),
    test = require('../node_modules/selenium-webdriver/testing'),
    remote = require('../node_modules/selenium-webdriver/remote');

var baseURL = 'http://m.olx.com.py:3030';


test.describe('ARWEN Test Suite', function() {
  var driver;

  var capabilities = {
    'browserName' : 'opera', 
    'logLevel': 'silent',
  }


  test.before(function() {
    driver = new webdriver.Builder().   
    withCapabilities(capabilities). 
    build();
    driver.manage().timeouts().implicitlyWait(30000, 1000);
    driver.manage().deleteAllCookies();
  });


 

test.it('SEARCH - Search and open an Ad', function() {
    driver.get('http://m.olx.com.py:3030');
    driver.manage().addCookie('forcedPlatform', 'html4');
    driver.navigate().refresh(); 
    driver.findElement(webdriver.By.css("[data-qa=search-input]")).clear();
    driver.findElement(webdriver.By.css("[data-qa=search-input]")).sendKeys("a");
    driver.findElement(webdriver.By.css("[data-qa=search-submit]")).click();
    driver.findElement(webdriver.By.css("[data-qa=list-item]:first-child")).click();
    driver.wait(function() {
      return driver.findElement(webdriver.By.css("[data-qa]=item")).then(function(res) {
        return driver.findElement(webdriver.By.css("[data-qa]=item"));
      });
    }, 8000);
  });




  test.after(function() { driver.quit(); });
});


