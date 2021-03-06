var Driver = require('selenium-webdriver');

module.exports = function(){
  this.Given(/^I visit Echoes Player$/,function(){
    this.driver.visit('http://localhost:9001');
    // this.Freeze();
  });

  this.When(/^I search for \"([^\"]*)\"$/, function(value){
    var MediaSearch = this.Widget.extend({
      root: "#media-search",

      setSearchQuery: function (val) {
        return this.fill(val);
      }
    })
    var search = new MediaSearch();
    return this.driver.sleep(10000).then(function(){
      search.sendKeys('', Driver.Key.ENTER).then(function(){
        search.setSearchQuery(value);
        return search.sendKeys(Driver.Key.ENTER);
      }); 
    });
  });

  this.Then(/^I should see 50 results$/, function(expected){
    var results = new this.Widget.List({
      root: "#search-results",
      childSelector: "li"
    })
    // this.Freeze().then(function(){

    return results.items().should.eventually.have.length(50);
    // })
  })
}
