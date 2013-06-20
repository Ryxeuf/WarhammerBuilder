Ext.define('WarhammerBuilder.view.Army.ComposeArmy.UnitComposition', {
    extend: 'Ext.Panel',
    alias: 'widget.unitcomposition',
    config: {
        title: "Unité",
        styleHtmlContent: true
    },

    updateData: function(datas){
        this.callParent(arguments);
        console.log("UnitComposition :: updateData");
        console.log(datas);
        this.removeAll();
        var items = [];

        var tpl = {
            xtype: "container",
            html: "<h3 style='float: left;'>"+datas.name+"</h3><div style='float: right;'>"+datas.cost+"pts</div>"
        };
        items.push(tpl);

        this.setItems(items);
    }
});
