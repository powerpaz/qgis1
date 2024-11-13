ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9856942.641108, -675533.081458, -7587165.945807, 219730.747040]);
var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.format.GeoJSON();
var features_ORGANIZACINTERRITORIALPROVINCIAL_1 = format_ORGANIZACINTERRITORIALPROVINCIAL_1.readFeatures(json_ORGANIZACINTERRITORIALPROVINCIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1.addFeatures(features_ORGANIZACINTERRITORIALPROVINCIAL_1);
var lyr_ORGANIZACINTERRITORIALPROVINCIAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORGANIZACINTERRITORIALPROVINCIAL_1, 
                style: style_ORGANIZACINTERRITORIALPROVINCIAL_1,
                popuplayertitle: "ORGANIZACIÓN TERRITORIAL PROVINCIAL",
                interactive: true,
                title: '<img src="styles/legend/ORGANIZACINTERRITORIALPROVINCIAL_1.png" /> ORGANIZACIÓN TERRITORIAL PROVINCIAL'
            });
var format_COD_AMIE_2024_2 = new ol.format.GeoJSON();
var features_COD_AMIE_2024_2 = format_COD_AMIE_2024_2.readFeatures(json_COD_AMIE_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COD_AMIE_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COD_AMIE_2024_2.addFeatures(features_COD_AMIE_2024_2);
var lyr_COD_AMIE_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COD_AMIE_2024_2, 
                style: style_COD_AMIE_2024_2,
                popuplayertitle: "COD_AMIE_2024",
                interactive: true,
                title: '<img src="styles/legend/COD_AMIE_2024_2.png" /> COD_AMIE_2024'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.setVisible(true);lyr_COD_AMIE_2024_2.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_ORGANIZACINTERRITORIALPROVINCIAL_1,lyr_COD_AMIE_2024_2];
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldAliases', {'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'fcode': 'fcode', 'DPA_ANIO': 'DPA_ANIO', });
lyr_COD_AMIE_2024_2.set('fieldAliases', {'COD_AMIE': 'COD_AMIE', 'NOM_INSTIT': 'NOM_INSTIT', 'MATRIZ_O_E': 'MATRIZ_O_E', 'AMIE_MATRI': 'AMIE_MATRI', 'X': 'X', 'Y': 'Y', 'Zona': 'Zona', 'NOM_ESTADO': 'NOM_ESTADO', 'NOM_SOSTEN': 'NOM_SOSTEN', 'REGIMEN': 'REGIMEN', 'NOM_DISTRI': 'NOM_DISTRI', 'COD_AD_DIS': 'COD_AD_DIS', 'COD_AD_D_1': 'COD_AD_D_1', 'COD_AD_D_2': 'COD_AD_D_2', 'COD_AD_CIR': 'COD_AD_CIR', 'NOM_PARROQ': 'NOM_PARROQ', 'NOM_PROVIN': 'NOM_PROVIN', 'COD_DPA_CA': 'COD_DPA_CA', 'NOM_CANTON': 'NOM_CANTON', 'COD_DPA_PA': 'COD_DPA_PA', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldImages', {'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'fcode': 'TextEdit', 'DPA_ANIO': 'TextEdit', });
lyr_COD_AMIE_2024_2.set('fieldImages', {'COD_AMIE': 'TextEdit', 'NOM_INSTIT': 'TextEdit', 'MATRIZ_O_E': 'TextEdit', 'AMIE_MATRI': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Zona': 'TextEdit', 'NOM_ESTADO': 'TextEdit', 'NOM_SOSTEN': 'TextEdit', 'REGIMEN': 'TextEdit', 'NOM_DISTRI': 'TextEdit', 'COD_AD_DIS': 'TextEdit', 'COD_AD_D_1': 'TextEdit', 'COD_AD_D_2': 'TextEdit', 'COD_AD_CIR': 'TextEdit', 'NOM_PARROQ': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'COD_DPA_CA': 'TextEdit', 'NOM_CANTON': 'TextEdit', 'COD_DPA_PA': 'TextEdit', });
lyr_ORGANIZACINTERRITORIALPROVINCIAL_1.set('fieldLabels', {'DPA_PROVIN': 'hidden field', 'DPA_DESPRO': 'inline label - always visible', 'fcode': 'hidden field', 'DPA_ANIO': 'hidden field', });
lyr_COD_AMIE_2024_2.set('fieldLabels', {'COD_AMIE': 'inline label - always visible', 'NOM_INSTIT': 'inline label - always visible', 'MATRIZ_O_E': 'hidden field', 'AMIE_MATRI': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Zona': 'inline label - always visible', 'NOM_ESTADO': 'hidden field', 'NOM_SOSTEN': 'hidden field', 'REGIMEN': 'hidden field', 'NOM_DISTRI': 'hidden field', 'COD_AD_DIS': 'hidden field', 'COD_AD_D_1': 'hidden field', 'COD_AD_D_2': 'hidden field', 'COD_AD_CIR': 'hidden field', 'NOM_PARROQ': 'hidden field', 'NOM_PROVIN': 'no label', 'COD_DPA_CA': 'hidden field', 'NOM_CANTON': 'hidden field', 'COD_DPA_PA': 'hidden field', });
lyr_COD_AMIE_2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});