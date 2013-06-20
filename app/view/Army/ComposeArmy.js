Ext.define('WarhammerBuilder.view.Army.ComposeArmy', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.composearmy',
    config: {
        title: "Construction de l'armée",
        layout: "fit",
        tabBar:{
            width: "100%"
        },
        items:[
            {
                docked: 'top',
                xtype: 'titlebar',
                title: "Construction de l'armée"
            },
            {
                xtype: "lordscomposition"
            },
            {
                xtype: "heroescomposition"
            },
            {
                xtype: "corescomposition"
            },
            {
                xtype: "specialscomposition"
            },
            {
                xtype: "rarescomposition"
            }
        ]
    }
});
