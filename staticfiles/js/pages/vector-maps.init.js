!function(a){"use strict";function n(){}n.prototype.init=function(){a("#world-map-markers").vectorMap({map:"world_mill_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,regionStyle:{initial:{fill:"#e3eaef"}},markerStyle:{initial:{r:9,fill:"#02c0ce","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},backgroundColor:"transparent",markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[.33,6.73],name:"SÃ£o TomÃ© and PrÃ­ncipe"}]}),a("#usa-vectormap").vectorMap({map:"us_merc_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#02c0ce"}}}),a("#india-vectormap").vectorMap({map:"in_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#f9bc0b"}}}),a("#uk-vectormap").vectorMap({map:"uk_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#0acf97"}}}),a("#chicago-vectormap").vectorMap({map:"us-il-chicago_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#4eb7eb"}}}),a("#australia-vectormap").vectorMap({map:"au_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#2d7bf4"}}}),a("#canada-vectormap").vectorMap({map:"ca_lcc_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#f1556c"}}})},a.VectorMap=new n,a.VectorMap.Constructor=n}(window.jQuery),function(){"use strict";window.jQuery.VectorMap.init()}();