<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="css/leaflet.css">
        <link rel="stylesheet" href="css/L.Control.Layers.Tree.css">
        <link rel="stylesheet" href="css/qgis2web.css">
        <link rel="stylesheet" href="css/fontawesome-all.min.css">
        <link rel="stylesheet" href="css/leaflet.photon.css">
        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
        </div>
        <script src="js/qgis2web_expressions.js"></script>
        <script src="js/leaflet.js"></script>
        <script src="js/L.Control.Layers.Tree.min.js"></script>
        <script src="js/leaflet.rotatedMarker.js"></script>
        <script src="js/leaflet.pattern.js"></script>
        <script src="js/leaflet-hash.js"></script>
        <script src="js/Autolinker.min.js"></script>
        <script src="js/rbush.min.js"></script>
        <script src="js/labelgun.min.js"></script>
        <script src="js/labels.js"></script>
        <script src="js/leaflet.photon.js"></script>
        <script src="data/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2.js"></script>
        <script src="data/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3.js"></script>
        <script src="data/BatasNegara_4.js"></script>
        <script src="data/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5.js"></script>
        <script src="data/BatasZEE_6.js"></script>
        <script src="data/TitikDasarBatasNegara_7.js"></script>
        <script src="data/BatasLandasKontinenperluKesepakatan_8.js"></script>
        <script src="data/BatasZEEkesepakatanbelumdiratifikasi_9.js"></script>
        <script src="data/BatasZEEdanLandasKontinenIndonesia200millaut_10.js"></script>
        <script src="data/BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11.js"></script>
        <script src="data/BatasZEEperlukesepakatan_12.js"></script>
        <script src="data/BatasLandasKontinen_13.js"></script>
        <script src="data/BatasLautTeritorial_14.js"></script>
        <script src="data/BatasLautTeritorialperlukesepakatan_15.js"></script>
        <script src="data/BatasZonaTambahan_16.js"></script>
        <script src="data/BatasLandasKontinenKesepakatanbelumdiratifikasi_17.js"></script>
        <script src="data/BatasLandasKontinenperlukesepakatan_18.js"></script>
        <script src="data/BatasLandasKontinenperluKesepakatan_19.js"></script>
        <script src="data/GarisPangkal_20.js"></script>
        <script>
        var map = L.map('map', {
            zoomControl:false, maxZoom:28, minZoom:1
        }).fitBounds([[-49.378250552590686,94.5347291877909],[34.30334280052048,141.53589078778833]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        // remove popup's row if "visible-with-data"
        function removeEmptyRowsFromPopupContent(content, feature) {
         var tempDiv = document.createElement('div');
         tempDiv.innerHTML = content;
         var rows = tempDiv.querySelectorAll('tr');
         for (var i = 0; i < rows.length; i++) {
             var td = rows[i].querySelector('td.visible-with-data');
             var key = td ? td.id : '';
             if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                 rows[i].parentNode.removeChild(rows[i]);
             }
         }
         return tempDiv.innerHTML;
        }
        // add class to format popup if it contains media
		function addClassToPopupIfMedia(content, popup) {
			var tempDiv = document.createElement('div');
			tempDiv.innerHTML = content;
			if (tempDiv.querySelector('td img')) {
				popup._contentNode.classList.add('media');
					// Delay to force the redraw
					setTimeout(function() {
						popup.update();
					}, 10);
			} else {
				popup._contentNode.classList.remove('media');
			}
		}
        var zoomControl = L.control.zoom({
            position: 'topleft'
        }).addTo(map);
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_OSMStandard_0');
        map.getPane('pane_OSMStandard_0').style.zIndex = 400;
        var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OSMStandard_0',
            opacity: 1.0,
            attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_OSMStandard_0;
        map.addLayer(layer_OSMStandard_0);
        map.createPane('pane_PetaIndonesiaGeoreferencing_1');
        map.getPane('pane_PetaIndonesiaGeoreferencing_1').style.zIndex = 401;
        var img_PetaIndonesiaGeoreferencing_1 = 'data/PetaIndonesiaGeoreferencing_1.png';
        var img_bounds_PetaIndonesiaGeoreferencing_1 = [[-24.321534445111052,87.88433579678784],[14.304773789408838,144.0345219819494]];
        var layer_PetaIndonesiaGeoreferencing_1 = new L.imageOverlay(img_PetaIndonesiaGeoreferencing_1,
                                              img_bounds_PetaIndonesiaGeoreferencing_1,
                                              {pane: 'pane_PetaIndonesiaGeoreferencing_1'});
        bounds_group.addLayer(layer_PetaIndonesiaGeoreferencing_1);
        map.addLayer(layer_PetaIndonesiaGeoreferencing_1);
        function pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2_0() {
            return {
                pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2',
                opacity: 1,
                color: 'rgba(255,219,119,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2');
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2').style.zIndex = 402;
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2').style['mix-blend-mode'] = 'normal';
        var layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2 = new L.geoJson(json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2',
            layerName: 'layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2',
            pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2',
            onEachFeature: pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2,
            style: style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2_0,
        });
        bounds_group.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2);
        map.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2);
        function pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3_0() {
            return {
                pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3',
                opacity: 1,
                color: 'rgba(190,99,38,1.0)',
                dashArray: '12.0,6.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3');
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3').style.zIndex = 403;
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3').style['mix-blend-mode'] = 'normal';
        var layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3 = new L.geoJson(json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3',
            layerName: 'layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3',
            pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3',
            onEachFeature: pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3,
            style: style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3_0,
        });
        bounds_group.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3);
        map.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3);
        function pop_BatasNegara_4(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasNegara_4_0() {
            return {
                pane: 'pane_BatasNegara_4',
                opacity: 1,
                color: 'rgba(109,109,109,1.0)',
                dashArray: '12.0,6.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasNegara_4');
        map.getPane('pane_BatasNegara_4').style.zIndex = 404;
        map.getPane('pane_BatasNegara_4').style['mix-blend-mode'] = 'normal';
        var layer_BatasNegara_4 = new L.geoJson(json_BatasNegara_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasNegara_4',
            layerName: 'layer_BatasNegara_4',
            pane: 'pane_BatasNegara_4',
            onEachFeature: pop_BatasNegara_4,
            style: style_BatasNegara_4_0,
        });
        bounds_group.addLayer(layer_BatasNegara_4);
        map.addLayer(layer_BatasNegara_4);
        function pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5_0() {
            return {
                pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5',
                opacity: 1,
                color: 'rgba(160,92,14,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5');
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5').style.zIndex = 405;
        map.getPane('pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5').style['mix-blend-mode'] = 'normal';
        var layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5 = new L.geoJson(json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5',
            layerName: 'layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5',
            pane: 'pane_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5',
            onEachFeature: pop_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5,
            style: style_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5_0,
        });
        bounds_group.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5);
        map.addLayer(layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5);
        function pop_BatasZEE_6(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZEE_6_0() {
            return {
                pane: 'pane_BatasZEE_6',
                opacity: 1,
                color: 'rgba(255,105,225,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZEE_6');
        map.getPane('pane_BatasZEE_6').style.zIndex = 406;
        map.getPane('pane_BatasZEE_6').style['mix-blend-mode'] = 'normal';
        var layer_BatasZEE_6 = new L.geoJson(json_BatasZEE_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZEE_6',
            layerName: 'layer_BatasZEE_6',
            pane: 'pane_BatasZEE_6',
            onEachFeature: pop_BatasZEE_6,
            style: style_BatasZEE_6_0,
        });
        bounds_group.addLayer(layer_BatasZEE_6);
        map.addLayer(layer_BatasZEE_6);
        function pop_TitikDasarBatasNegara_7(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['No'] !== null ? autolinker.link(String(feature.properties['No']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Lokasi'] !== null ? autolinker.link(String(feature.properties['Lokasi']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Garis Lint'] !== null ? autolinker.link(String(feature.properties['Garis Lint']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Garis Buju'] !== null ? autolinker.link(String(feature.properties['Garis Buju']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Titik Dasa'] !== null ? autolinker.link(String(feature.properties['Titik Dasa']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Pilar Pend'] !== null ? autolinker.link(String(feature.properties['Pilar Pend']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Jarak (m)'] !== null ? autolinker.link(String(feature.properties['Jarak (m)']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nomor Peta'] !== null ? autolinker.link(String(feature.properties['Nomor Peta']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Skala'] !== null ? autolinker.link(String(feature.properties['Skala']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Referensi'] !== null ? autolinker.link(String(feature.properties['Referensi']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Garis Li_1'] !== null ? autolinker.link(String(feature.properties['Garis Li_1']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Garis Bu_1'] !== null ? autolinker.link(String(feature.properties['Garis Bu_1']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_TitikDasarBatasNegara_7_0() {
            return {
                pane: 'pane_TitikDasarBatasNegara_7',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(125,139,143,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_TitikDasarBatasNegara_7');
        map.getPane('pane_TitikDasarBatasNegara_7').style.zIndex = 407;
        map.getPane('pane_TitikDasarBatasNegara_7').style['mix-blend-mode'] = 'normal';
        var layer_TitikDasarBatasNegara_7 = new L.geoJson(json_TitikDasarBatasNegara_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_TitikDasarBatasNegara_7',
            layerName: 'layer_TitikDasarBatasNegara_7',
            pane: 'pane_TitikDasarBatasNegara_7',
            onEachFeature: pop_TitikDasarBatasNegara_7,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_TitikDasarBatasNegara_7_0(feature));
            },
        });
        bounds_group.addLayer(layer_TitikDasarBatasNegara_7);
        map.addLayer(layer_TitikDasarBatasNegara_7);
        function pop_BatasLandasKontinenperluKesepakatan_8(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLandasKontinenperluKesepakatan_8_0() {
            return {
                pane: 'pane_BatasLandasKontinenperluKesepakatan_8',
                opacity: 1,
                color: 'rgba(31,120,180,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLandasKontinenperluKesepakatan_8');
        map.getPane('pane_BatasLandasKontinenperluKesepakatan_8').style.zIndex = 408;
        map.getPane('pane_BatasLandasKontinenperluKesepakatan_8').style['mix-blend-mode'] = 'normal';
        var layer_BatasLandasKontinenperluKesepakatan_8 = new L.geoJson(json_BatasLandasKontinenperluKesepakatan_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLandasKontinenperluKesepakatan_8',
            layerName: 'layer_BatasLandasKontinenperluKesepakatan_8',
            pane: 'pane_BatasLandasKontinenperluKesepakatan_8',
            onEachFeature: pop_BatasLandasKontinenperluKesepakatan_8,
            style: style_BatasLandasKontinenperluKesepakatan_8_0,
        });
        bounds_group.addLayer(layer_BatasLandasKontinenperluKesepakatan_8);
        map.addLayer(layer_BatasLandasKontinenperluKesepakatan_8);
        function pop_BatasZEEkesepakatanbelumdiratifikasi_9(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZEEkesepakatanbelumdiratifikasi_9_0() {
            return {
                pane: 'pane_BatasZEEkesepakatanbelumdiratifikasi_9',
                opacity: 1,
                color: 'rgba(255,173,228,1.0)',
                dashArray: '16.0,8.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZEEkesepakatanbelumdiratifikasi_9');
        map.getPane('pane_BatasZEEkesepakatanbelumdiratifikasi_9').style.zIndex = 409;
        map.getPane('pane_BatasZEEkesepakatanbelumdiratifikasi_9').style['mix-blend-mode'] = 'normal';
        var layer_BatasZEEkesepakatanbelumdiratifikasi_9 = new L.geoJson(json_BatasZEEkesepakatanbelumdiratifikasi_9, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZEEkesepakatanbelumdiratifikasi_9',
            layerName: 'layer_BatasZEEkesepakatanbelumdiratifikasi_9',
            pane: 'pane_BatasZEEkesepakatanbelumdiratifikasi_9',
            onEachFeature: pop_BatasZEEkesepakatanbelumdiratifikasi_9,
            style: style_BatasZEEkesepakatanbelumdiratifikasi_9_0,
        });
        bounds_group.addLayer(layer_BatasZEEkesepakatanbelumdiratifikasi_9);
        map.addLayer(layer_BatasZEEkesepakatanbelumdiratifikasi_9);
        function pop_BatasZEEdanLandasKontinenIndonesia200millaut_10(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZEEdanLandasKontinenIndonesia200millaut_10_0() {
            return {
                pane: 'pane_BatasZEEdanLandasKontinenIndonesia200millaut_10',
                opacity: 1,
                color: 'rgba(192,46,26,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZEEdanLandasKontinenIndonesia200millaut_10');
        map.getPane('pane_BatasZEEdanLandasKontinenIndonesia200millaut_10').style.zIndex = 410;
        map.getPane('pane_BatasZEEdanLandasKontinenIndonesia200millaut_10').style['mix-blend-mode'] = 'normal';
        var layer_BatasZEEdanLandasKontinenIndonesia200millaut_10 = new L.geoJson(json_BatasZEEdanLandasKontinenIndonesia200millaut_10, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZEEdanLandasKontinenIndonesia200millaut_10',
            layerName: 'layer_BatasZEEdanLandasKontinenIndonesia200millaut_10',
            pane: 'pane_BatasZEEdanLandasKontinenIndonesia200millaut_10',
            onEachFeature: pop_BatasZEEdanLandasKontinenIndonesia200millaut_10,
            style: style_BatasZEEdanLandasKontinenIndonesia200millaut_10_0,
        });
        bounds_group.addLayer(layer_BatasZEEdanLandasKontinenIndonesia200millaut_10);
        map.addLayer(layer_BatasZEEdanLandasKontinenIndonesia200millaut_10);
        function pop_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11_0() {
            return {
                pane: 'pane_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11',
                opacity: 1,
                color: 'rgba(167,29,52,1.0)',
                dashArray: '12.0,6.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11');
        map.getPane('pane_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11').style.zIndex = 411;
        map.getPane('pane_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11').style['mix-blend-mode'] = 'normal';
        var layer_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11 = new L.geoJson(json_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11',
            layerName: 'layer_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11',
            pane: 'pane_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11',
            onEachFeature: pop_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11,
            style: style_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11_0,
        });
        bounds_group.addLayer(layer_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11);
        map.addLayer(layer_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11);
        function pop_BatasZEEperlukesepakatan_12(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZEEperlukesepakatan_12_0() {
            return {
                pane: 'pane_BatasZEEperlukesepakatan_12',
                opacity: 1,
                color: 'rgba(255,131,238,1.0)',
                dashArray: '8.0,4.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZEEperlukesepakatan_12');
        map.getPane('pane_BatasZEEperlukesepakatan_12').style.zIndex = 412;
        map.getPane('pane_BatasZEEperlukesepakatan_12').style['mix-blend-mode'] = 'normal';
        var layer_BatasZEEperlukesepakatan_12 = new L.geoJson(json_BatasZEEperlukesepakatan_12, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZEEperlukesepakatan_12',
            layerName: 'layer_BatasZEEperlukesepakatan_12',
            pane: 'pane_BatasZEEperlukesepakatan_12',
            onEachFeature: pop_BatasZEEperlukesepakatan_12,
            style: style_BatasZEEperlukesepakatan_12_0,
        });
        bounds_group.addLayer(layer_BatasZEEperlukesepakatan_12);
        map.addLayer(layer_BatasZEEperlukesepakatan_12);
        function pop_BatasLandasKontinen_13(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLandasKontinen_13_0() {
            return {
                pane: 'pane_BatasLandasKontinen_13',
                opacity: 1,
                color: 'rgba(1,179,255,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLandasKontinen_13');
        map.getPane('pane_BatasLandasKontinen_13').style.zIndex = 413;
        map.getPane('pane_BatasLandasKontinen_13').style['mix-blend-mode'] = 'normal';
        var layer_BatasLandasKontinen_13 = new L.geoJson(json_BatasLandasKontinen_13, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLandasKontinen_13',
            layerName: 'layer_BatasLandasKontinen_13',
            pane: 'pane_BatasLandasKontinen_13',
            onEachFeature: pop_BatasLandasKontinen_13,
            style: style_BatasLandasKontinen_13_0,
        });
        bounds_group.addLayer(layer_BatasLandasKontinen_13);
        map.addLayer(layer_BatasLandasKontinen_13);
        function pop_BatasLautTeritorial_14(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLautTeritorial_14_0() {
            return {
                pane: 'pane_BatasLautTeritorial_14',
                opacity: 1,
                color: 'rgba(232,113,141,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLautTeritorial_14');
        map.getPane('pane_BatasLautTeritorial_14').style.zIndex = 414;
        map.getPane('pane_BatasLautTeritorial_14').style['mix-blend-mode'] = 'normal';
        var layer_BatasLautTeritorial_14 = new L.geoJson(json_BatasLautTeritorial_14, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLautTeritorial_14',
            layerName: 'layer_BatasLautTeritorial_14',
            pane: 'pane_BatasLautTeritorial_14',
            onEachFeature: pop_BatasLautTeritorial_14,
            style: style_BatasLautTeritorial_14_0,
        });
        bounds_group.addLayer(layer_BatasLautTeritorial_14);
        map.addLayer(layer_BatasLautTeritorial_14);
        function pop_BatasLautTeritorialperlukesepakatan_15(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLautTeritorialperlukesepakatan_15_0() {
            return {
                pane: 'pane_BatasLautTeritorialperlukesepakatan_15',
                opacity: 1,
                color: 'rgba(183,72,75,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLautTeritorialperlukesepakatan_15');
        map.getPane('pane_BatasLautTeritorialperlukesepakatan_15').style.zIndex = 415;
        map.getPane('pane_BatasLautTeritorialperlukesepakatan_15').style['mix-blend-mode'] = 'normal';
        var layer_BatasLautTeritorialperlukesepakatan_15 = new L.geoJson(json_BatasLautTeritorialperlukesepakatan_15, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLautTeritorialperlukesepakatan_15',
            layerName: 'layer_BatasLautTeritorialperlukesepakatan_15',
            pane: 'pane_BatasLautTeritorialperlukesepakatan_15',
            onEachFeature: pop_BatasLautTeritorialperlukesepakatan_15,
            style: style_BatasLautTeritorialperlukesepakatan_15_0,
        });
        bounds_group.addLayer(layer_BatasLautTeritorialperlukesepakatan_15);
        map.addLayer(layer_BatasLautTeritorialperlukesepakatan_15);
        function pop_BatasZonaTambahan_16(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasZonaTambahan_16_0() {
            return {
                pane: 'pane_BatasZonaTambahan_16',
                opacity: 1,
                color: 'rgba(152,125,183,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasZonaTambahan_16');
        map.getPane('pane_BatasZonaTambahan_16').style.zIndex = 416;
        map.getPane('pane_BatasZonaTambahan_16').style['mix-blend-mode'] = 'normal';
        var layer_BatasZonaTambahan_16 = new L.geoJson(json_BatasZonaTambahan_16, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasZonaTambahan_16',
            layerName: 'layer_BatasZonaTambahan_16',
            pane: 'pane_BatasZonaTambahan_16',
            onEachFeature: pop_BatasZonaTambahan_16,
            style: style_BatasZonaTambahan_16_0,
        });
        bounds_group.addLayer(layer_BatasZonaTambahan_16);
        map.addLayer(layer_BatasZonaTambahan_16);
        function pop_BatasLandasKontinenKesepakatanbelumdiratifikasi_17(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLandasKontinenKesepakatanbelumdiratifikasi_17_0() {
            return {
                pane: 'pane_BatasLandasKontinenKesepakatanbelumdiratifikasi_17',
                opacity: 1,
                color: 'rgba(1,183,255,1.0)',
                dashArray: '16.0,8.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLandasKontinenKesepakatanbelumdiratifikasi_17');
        map.getPane('pane_BatasLandasKontinenKesepakatanbelumdiratifikasi_17').style.zIndex = 417;
        map.getPane('pane_BatasLandasKontinenKesepakatanbelumdiratifikasi_17').style['mix-blend-mode'] = 'normal';
        var layer_BatasLandasKontinenKesepakatanbelumdiratifikasi_17 = new L.geoJson(json_BatasLandasKontinenKesepakatanbelumdiratifikasi_17, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLandasKontinenKesepakatanbelumdiratifikasi_17',
            layerName: 'layer_BatasLandasKontinenKesepakatanbelumdiratifikasi_17',
            pane: 'pane_BatasLandasKontinenKesepakatanbelumdiratifikasi_17',
            onEachFeature: pop_BatasLandasKontinenKesepakatanbelumdiratifikasi_17,
            style: style_BatasLandasKontinenKesepakatanbelumdiratifikasi_17_0,
        });
        bounds_group.addLayer(layer_BatasLandasKontinenKesepakatanbelumdiratifikasi_17);
        map.addLayer(layer_BatasLandasKontinenKesepakatanbelumdiratifikasi_17);
        function pop_BatasLandasKontinenperlukesepakatan_18(feature, layer) {
        }

        function style_BatasLandasKontinenperlukesepakatan_18_0() {
            return {
                pane: 'pane_BatasLandasKontinenperlukesepakatan_18',
                opacity: 1,
                color: 'rgba(0,169,236,1.0)',
                dashArray: '8.0,4.0',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLandasKontinenperlukesepakatan_18');
        map.getPane('pane_BatasLandasKontinenperlukesepakatan_18').style.zIndex = 418;
        map.getPane('pane_BatasLandasKontinenperlukesepakatan_18').style['mix-blend-mode'] = 'normal';
        var layer_BatasLandasKontinenperlukesepakatan_18 = new L.geoJson(json_BatasLandasKontinenperlukesepakatan_18, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLandasKontinenperlukesepakatan_18',
            layerName: 'layer_BatasLandasKontinenperlukesepakatan_18',
            pane: 'pane_BatasLandasKontinenperlukesepakatan_18',
            onEachFeature: pop_BatasLandasKontinenperlukesepakatan_18,
            style: style_BatasLandasKontinenperlukesepakatan_18_0,
        });
        bounds_group.addLayer(layer_BatasLandasKontinenperlukesepakatan_18);
        map.addLayer(layer_BatasLandasKontinenperlukesepakatan_18);
        function pop_BatasLandasKontinenperluKesepakatan_19(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_BatasLandasKontinenperluKesepakatan_19_0() {
            return {
                pane: 'pane_BatasLandasKontinenperluKesepakatan_19',
                opacity: 1,
                color: 'rgba(232,113,141,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_BatasLandasKontinenperluKesepakatan_19');
        map.getPane('pane_BatasLandasKontinenperluKesepakatan_19').style.zIndex = 419;
        map.getPane('pane_BatasLandasKontinenperluKesepakatan_19').style['mix-blend-mode'] = 'normal';
        var layer_BatasLandasKontinenperluKesepakatan_19 = new L.geoJson(json_BatasLandasKontinenperluKesepakatan_19, {
            attribution: '',
            interactive: true,
            dataVar: 'json_BatasLandasKontinenperluKesepakatan_19',
            layerName: 'layer_BatasLandasKontinenperluKesepakatan_19',
            pane: 'pane_BatasLandasKontinenperluKesepakatan_19',
            onEachFeature: pop_BatasLandasKontinenperluKesepakatan_19,
            style: style_BatasLandasKontinenperluKesepakatan_19_0,
        });
        bounds_group.addLayer(layer_BatasLandasKontinenperluKesepakatan_19);
        map.addLayer(layer_BatasLandasKontinenperluKesepakatan_19);
        function pop_GarisPangkal_20(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(String(feature.properties['id']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_GarisPangkal_20_0() {
            return {
                pane: 'pane_GarisPangkal_20',
                opacity: 1,
                color: 'rgba(229,182,54,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_GarisPangkal_20');
        map.getPane('pane_GarisPangkal_20').style.zIndex = 420;
        map.getPane('pane_GarisPangkal_20').style['mix-blend-mode'] = 'normal';
        var layer_GarisPangkal_20 = new L.geoJson(json_GarisPangkal_20, {
            attribution: '',
            interactive: true,
            dataVar: 'json_GarisPangkal_20',
            layerName: 'layer_GarisPangkal_20',
            pane: 'pane_GarisPangkal_20',
            onEachFeature: pop_GarisPangkal_20,
            style: style_GarisPangkal_20_0,
        });
        bounds_group.addLayer(layer_GarisPangkal_20);
        map.addLayer(layer_GarisPangkal_20);
        var overlaysTree = [
            {label: '<img src="legend/GarisPangkal_20.png" /> Garis Pangkal', layer: layer_GarisPangkal_20},
            {label: '<img src="legend/BatasLandasKontinenperluKesepakatan_19.png" /> Batas Landas Kontinen perlu Kesepakatan', layer: layer_BatasLandasKontinenperluKesepakatan_19},
            {label: '<img src="legend/BatasLandasKontinenperlukesepakatan_18.png" /> Batas Landas Kontinen perlu kesepakatan', layer: layer_BatasLandasKontinenperlukesepakatan_18},
            {label: '<img src="legend/BatasLandasKontinenKesepakatanbelumdiratifikasi_17.png" /> Batas Landas Kontinen Kesepakatan belum diratifikasi', layer: layer_BatasLandasKontinenKesepakatanbelumdiratifikasi_17},
            {label: '<img src="legend/BatasZonaTambahan_16.png" /> Batas Zona Tambahan', layer: layer_BatasZonaTambahan_16},
            {label: '<img src="legend/BatasLautTeritorialperlukesepakatan_15.png" /> Batas Laut Teritorial perlu kesepakatan', layer: layer_BatasLautTeritorialperlukesepakatan_15},
            {label: '<img src="legend/BatasLautTeritorial_14.png" /> Batas Laut Teritorial', layer: layer_BatasLautTeritorial_14},
            {label: '<img src="legend/BatasLandasKontinen_13.png" /> Batas Landas Kontinen', layer: layer_BatasLandasKontinen_13},
            {label: '<img src="legend/BatasZEEperlukesepakatan_12.png" /> Batas ZEE perlu kesepakatan', layer: layer_BatasZEEperlukesepakatan_12},
            {label: '<img src="legend/BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11.png" /> Batas ZEE dan Landas Kontinen Indonesia belum diratifikasi', layer: layer_BatasZEEdanLandasKontinenIndonesiabelumdiratifikasi_11},
            {label: '<img src="legend/BatasZEEdanLandasKontinenIndonesia200millaut_10.png" /> Batas ZEE dan Landas Kontinen Indonesia (200 mil laut)', layer: layer_BatasZEEdanLandasKontinenIndonesia200millaut_10},
            {label: '<img src="legend/BatasZEEkesepakatanbelumdiratifikasi_9.png" /> Batas ZEE kesepakatan belum diratifikasi', layer: layer_BatasZEEkesepakatanbelumdiratifikasi_9},
            {label: '<img src="legend/BatasLandasKontinenperluKesepakatan_8.png" /> Batas Landas Kontinen perlu Kesepakatan', layer: layer_BatasLandasKontinenperluKesepakatan_8},
            {label: '<img src="legend/TitikDasarBatasNegara_7.png" /> Titik Dasar Batas Negara', layer: layer_TitikDasarBatasNegara_7},
            {label: '<img src="legend/BatasZEE_6.png" /> Batas ZEE', layer: layer_BatasZEE_6},
            {label: '<img src="legend/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5.png" /> Batas Maritim Indonesia - Australia terkait Pengelola Perikanan, ZEE, dan Landas Kontinen', layer: layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikananZEEdanLandasKontinen_5},
            {label: '<img src="legend/BatasNegara_4.png" /> Batas Negara', layer: layer_BatasNegara_4},
            {label: '<img src="legend/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3.png" /> Batas Maritim Indonesia - Australia terkait Pengelola Perikanan', layer: layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanan_3},
            {label: '<img src="legend/BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2.png" /> Batas Maritim Indonesia - Australia terkait Pengelola Perikanan dan ZEE', layer: layer_BatasMaritimIndonesiaAustraliaterkaitPengelolaPerikanandanZEE_2},
            {label: "Peta Indonesia Georeferencing", layer: layer_PetaIndonesiaGeoreferencing_1},
            {label: "OSM Standard", layer: layer_OSMStandard_0},]
        var lay = L.control.layers.tree(null, overlaysTree,{
            //namedToggle: true,
            //selectorBack: false,
            //closedSymbol: '&#8862; &#x1f5c0;',
            //openedSymbol: '&#8863; &#x1f5c1;',
            //collapseAll: 'Collapse all',
            //expandAll: 'Expand all',
            collapsed: false, 
        });
        lay.addTo(map);
		document.addEventListener("DOMContentLoaded", function() {
            // set new Layers List height which considers toggle icon
            function newLayersListHeight() {
                var layerScrollbarElement = document.querySelector('.leaflet-control-layers-scrollbar');
                if (layerScrollbarElement) {
                    var layersListElement = document.querySelector('.leaflet-control-layers-list');
                    var originalHeight = layersListElement.style.height 
                        || window.getComputedStyle(layersListElement).height;
                    var newHeight = parseFloat(originalHeight) - 50;
                    layersListElement.style.height = newHeight + 'px';
                }
            }
            var isLayersListExpanded = true;
            var controlLayersElement = document.querySelector('.leaflet-control-layers');
            var toggleLayerControl = document.querySelector('.leaflet-control-layers-toggle');
            // toggle Collapsed/Expanded and apply new Layers List height
            toggleLayerControl.addEventListener('click', function() {
                if (isLayersListExpanded) {
                    controlLayersElement.classList.remove('leaflet-control-layers-expanded');
                } else {
                    controlLayersElement.classList.add('leaflet-control-layers-expanded');
                }
                isLayersListExpanded = !isLayersListExpanded;
                newLayersListHeight()
            });	
			// apply new Layers List height if toggle layerstree
			if (controlLayersElement) {
				controlLayersElement.addEventListener('click', function(event) {
					var toggleLayerHeaderPointer = event.target.closest('.leaflet-layerstree-header-pointer span');
					if (toggleLayerHeaderPointer) {
						newLayersListHeight();
					}
				});
			}
            // Collapsed/Expanded at Start to apply new height
            setTimeout(function() {
                toggleLayerControl.click();
            }, 10);
            setTimeout(function() {
                toggleLayerControl.click();
            }, 10);
            // Collapsed touch/small screen
            var isSmallScreen = window.innerWidth < 650;
            if (isSmallScreen) {
                setTimeout(function() {
                    controlLayersElement.classList.remove('leaflet-control-layers-expanded');
                    isLayersListExpanded = !isLayersListExpanded;
                }, 500);
            }  
        });       
        setBounds();
        L.ImageOverlay.include({
            getBounds: function () {
                return this._bounds;
            }
        });
        </script>
    </body>
</html>
