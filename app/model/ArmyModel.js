Ext.define('WarhammerBuilder.model.ArmyModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'image', type: 'string' },
            { name: 'description', type: 'string' }
        ],

        hasOne: [
            {
                model: 'WarhammerBuilder.model.CoreUnitModel',
                associationKey:'cores'
            }
        ]
    }
});