!function(){function e(e,n){for(var t in n)e[t]=n[t];return e}window.jasmine=jasmineRequire.core(jasmineRequire),jasmineRequire.html(jasmine);var n=jasmine.getEnv(),t=jasmineRequire.interface(jasmine,n);e(window,t);var i=new jasmine.QueryString({getWindowLocation:function(){return window.location}}),r=i.getParam("catch");n.catchExceptions("undefined"==typeof r?!0:r);var a=i.getParam("throwFailures");n.throwOnExpectationFailure(a);var o=new jasmine.HtmlReporter({env:n,onRaiseExceptionsClick:function(){i.navigateWithNewParam("catch",!n.catchingExceptions())},onThrowExpectationsClick:function(){i.navigateWithNewParam("throwFailures",!n.throwingExpectationFailures())},addToExistingQueryString:function(e,n){return i.fullStringWithNewParam(e,n)},getContainer:function(){return document.body},createElement:function(){return document.createElement.apply(document,arguments)},createTextNode:function(){return document.createTextNode.apply(document,arguments)},timer:new jasmine.Timer});n.addReporter(t.jsApiReporter),n.addReporter(o);var c=new jasmine.HtmlSpecFilter({filterString:function(){return i.getParam("spec")}});n.specFilter=function(e){return c.matches(e.getFullName())},window.setTimeout=window.setTimeout,window.setInterval=window.setInterval,window.clearTimeout=window.clearTimeout,window.clearInterval=window.clearInterval;var u=window.onload;window.onload=function(){u&&u(),o.initialize(),n.execute()}}();