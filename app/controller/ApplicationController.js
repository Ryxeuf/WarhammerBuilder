Ext.define('WarhammerBuilder.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    requires:[
        "WarhammerBuilder.view.Main",
        "WarhammerBuilder.view.Army.ArmyList",
        "WarhammerBuilder.view.Army.ComposeArmy",
        "WarhammerBuilder.view.Army.ComposeArmy.LordsComposition",
        "WarhammerBuilder.view.Army.ComposeArmy.HeroesComposition",
        "WarhammerBuilder.view.Army.ComposeArmy.CoresComposition",
        "WarhammerBuilder.view.Army.ComposeArmy.SpecialsComposition",
        "WarhammerBuilder.view.Army.ComposeArmy.RaresComposition"
    ],

    config: {
        refs: {
            mainView: 'main',
            armyList: "armylist"
        },

        control: {
            armyList: { itemtap: "displayArmyList" }
        }
    },

    displayArmyList: function(view, index, target, record){
        console.log("displayArmyList");
        var points = Ext.getCmp("armyPts").getValue();
        var reg = new RegExp(/^[0-9]*$/);
        if(points == ""){
            Ext.Msg.alert(null, "Veuillez saisir un nombre de points");
            return;
        }else if(!reg.test(points)){
            Ext.Msg.alert(null, "Les points doivent être un nombre");
            return;
        }
        var commposeView = Ext.create("widget.composearmy");
        Ext.Viewport.add([commposeView]);
        Ext.Viewport.setActiveItem(commposeView);
        commposeView.getAt(0).setTitle(record.get('name')+" ("+points+"pts)");

    }
});