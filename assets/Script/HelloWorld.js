cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
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
            onCallback: function(counter) {
                cc.log("Delegate obj, onCallback: " + counter + ", this.myVar: " + this.myVar);
                this.setVar();
            },
       
            setVar: function() {
                this.myVar++;
            },
       
            myVar: 100
        };
       
        myObj.setCallback(delegateObj.onCallback, delegateObj);
       
        setTimeout(function(){
           myObj.setCallback(null);
        }, 6000); // 6秒后清空callback
    },

    // called every frame
    update: function (dt) {

    },
});
