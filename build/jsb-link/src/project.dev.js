require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!"
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
        var myObj = new le.agora();
        myObj.foo();
        cc.log("le.agora.getSdkVersion: " + le.agora.getSdkVersion());
        cc.log("le.agora.getMediaEnginVersion: " + le.agora.getMediaEnginVersion());
        cc.log("le.agora.static_val: " + le.agora.static_val);
        cc.log("Old myObj.xxx:" + myObj.xxx);
        myObj.xxx = 1234;
        cc.log("New myObj.xxx:" + myObj.xxx);
        cc.log("myObj.yyy: " + myObj.yyy);
        var delegateObj = {
          onCallback: function onCallback(counter) {
            cc.log("Delegate obj, onCallback: " + counter + ", this.myVar: " + this.myVar);
            this.setVar();
          },
          setVar: function setVar() {
            this.myVar++;
          },
          myVar: 100
        };
        myObj.setCallback(delegateObj.onCallback, delegateObj);
        setTimeout(function() {
          myObj.setCallback(null);
        }, 6e3);
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld" ]);