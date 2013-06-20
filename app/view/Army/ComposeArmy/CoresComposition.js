Ext.define('WarhammerBuilder.view.Army.ComposeArmy.CoresComposition', {
    extend: 'Ext.Panel',
    alias: 'widget.corescomposition',
    config: {
        title: "Bases",
        styleHtmlContent: true,
        items:[
            {
                xtype: "container",
                layout: "hbox",
                items:[
                    {
                        xtype: "selectfield",
                        id: "coreSelection",
                        displayField: "name",
                        flex: 3,
                        autoSelect: false,
                        usePicker: "auto",
                        listeners:[
                            {
                                event: 'change',
                                fn: function() { this.parent.parent.fireEvent("configureCoreUnit"); }
                            }
                        ]
                    },
                    {
                        xtype: "button",
                        html: "Configurer",
                        fkex: 1,
                        listeners:[
                            {
                                event: 'tap',
                                fn: function() { this.parent.parent.fireEvent("configureCoreUnit"); }
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "unitcomposition",
                id: "unitComposition"
            },
            {
                xtype: "list",
                id: "coresChosen",
                itemTpl: new Ext.XTemplate(
                    "{name} :: "
                )
            }
        ]
    }
});
