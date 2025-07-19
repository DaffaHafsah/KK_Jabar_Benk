var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KK_Tipe_SinglePart_1 = new ol.format.GeoJSON();
var features_KK_Tipe_SinglePart_1 = format_KK_Tipe_SinglePart_1.readFeatures(json_KK_Tipe_SinglePart_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KK_Tipe_SinglePart_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KK_Tipe_SinglePart_1.addFeatures(features_KK_Tipe_SinglePart_1);
var lyr_KK_Tipe_SinglePart_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KK_Tipe_SinglePart_1, 
                style: style_KK_Tipe_SinglePart_1,
                popuplayertitle: 'KK_Tipe_SinglePart',
                interactive: true,
                title: '<img src="styles/legend/KK_Tipe_SinglePart_1.png" /> KK_Tipe_SinglePart'
            });
var format_DATA_FIX_SEBARAN_20202024_2 = new ol.format.GeoJSON();
var features_DATA_FIX_SEBARAN_20202024_2 = format_DATA_FIX_SEBARAN_20202024_2.readFeatures(json_DATA_FIX_SEBARAN_20202024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATA_FIX_SEBARAN_20202024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATA_FIX_SEBARAN_20202024_2.addFeatures(features_DATA_FIX_SEBARAN_20202024_2);
var lyr_DATA_FIX_SEBARAN_20202024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATA_FIX_SEBARAN_20202024_2, 
                style: style_DATA_FIX_SEBARAN_20202024_2,
                popuplayertitle: 'DATA_FIX_SEBARAN_2020-2024',
                interactive: true,
                title: '<img src="styles/legend/DATA_FIX_SEBARAN_20202024_2.png" /> DATA_FIX_SEBARAN_2020-2024'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_KK_Tipe_SinglePart_1.setVisible(true);lyr_DATA_FIX_SEBARAN_20202024_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KK_Tipe_SinglePart_1,lyr_DATA_FIX_SEBARAN_20202024_2];
lyr_KK_Tipe_SinglePart_1.set('fieldAliases', {'N_KWS': 'N_KWS', 'PNJK_PROV': 'PNJK_PROV', 'PNJK_PARS': 'PNJK_PARS', 'TGL_PARS': 'TGL_PARS', 'BATB': 'BATB', 'SK_TAP': 'SK_TAP', 'TGL_TAP': 'TGL_TAP', 'LS_TAP': 'LS_TAP', 'VER_PL': 'VER_PL', 'LUAS_HA': 'LUAS_HA', });
lyr_DATA_FIX_SEBARAN_20202024_2.set('fieldAliases', {'NAMIL': 'NAMIL', 'NAMLOK': 'NAMLOK', 'X': 'X', 'Y': 'Y', });
lyr_KK_Tipe_SinglePart_1.set('fieldImages', {'N_KWS': 'TextEdit', 'PNJK_PROV': 'TextEdit', 'PNJK_PARS': 'TextEdit', 'TGL_PARS': 'TextEdit', 'BATB': 'TextEdit', 'SK_TAP': 'TextEdit', 'TGL_TAP': 'DateTime', 'LS_TAP': 'TextEdit', 'VER_PL': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_DATA_FIX_SEBARAN_20202024_2.set('fieldImages', {'NAMIL': 'TextEdit', 'NAMLOK': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_KK_Tipe_SinglePart_1.set('fieldLabels', {'N_KWS': 'no label', 'PNJK_PROV': 'hidden field', 'PNJK_PARS': 'hidden field', 'TGL_PARS': 'hidden field', 'BATB': 'hidden field', 'SK_TAP': 'no label', 'TGL_TAP': 'no label', 'LS_TAP': 'no label', 'VER_PL': 'no label', 'LUAS_HA': 'no label', });
lyr_DATA_FIX_SEBARAN_20202024_2.set('fieldLabels', {'NAMIL': 'no label', 'NAMLOK': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_DATA_FIX_SEBARAN_20202024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});