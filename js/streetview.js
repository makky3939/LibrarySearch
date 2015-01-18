
var streetView;
var Gpano;



function initialize() {

	var streetViewOptions = { panoProvider : getCustomPanorama,pano : "a_1" }
	var streetViewDiv = document.getElementById('view');

	streetView = new google.maps.StreetViewPanorama(streetViewDiv, streetViewOptions);
	google.maps.event.addListener(streetView, "links_changed", createCustomLink);

}


function getCustomPanoramaTileUrl(panoID, zoom, tileX, tileY) {
	return 'http://app.makky.io/streetview/assets/panorama/mth-library/' + panoID + '/'  + tileX + '-' +tileY + '.jpg';
}


function getCustomPanorama(panoID) {

var streetViewPanoramaData;

switch(panoID) {


	case "a_1":
	return {
 		location: {pano: "a_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 40,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "a_2":
	return {
 		location: {pano: "a_2",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 210,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "b_2":
	return {
 		location: {pano: "b_2",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 0,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "b_4":
	return {
 		location: {pano: "b_4",latLng: new google.maps.LatLng( 36.205146, 140.28404)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 225,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "c_1":
	return {
 		location: {pano: "c_1",latLng: new google.maps.LatLng(  36.205152, 140.28395)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "c_2":
	return {
 		location: {pano: "c_2",latLng: new google.maps.LatLng(  36.205152, 140.28395)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 45,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "c_3":
	return {
 		location: {pano: "c_3",latLng: new google.maps.LatLng(  36.205152, 140.28395)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 355,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "c_4":
	return {
 		location: {pano: "c_4",latLng: new google.maps.LatLng(  36.205152, 140.28395)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 105,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "d_1":
	return {
 		location: {pano: "d_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 25,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "d_2":
	return {
 		location: {pano: "d_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 310,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "d_3":
	return {
 		location: {pano: "d_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 320,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "d_4":
	return {
 		location: {pano: "d_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 65,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "e_1":
	return {
 		location: {pano: "e_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 60,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "e_2":
	return {
 		location: {pano: "e_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 355,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "e_3":
	return {
 		location: {pano: "e_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 25,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "e_4":
	return {
 		location: {pano: "e_4",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 110,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "f_1":
	return {
 		location: {pano: "f_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 15,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "f_2":
	return {
 		location: {pano: "f_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 260,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "f_3":
	return {
 		location: {pano: "f_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "f_4":
	return {
 		location: {pano: "f_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 325,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "g_1":
	return {
 		location: {pano: "g_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 70,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "g_2":
	return {
 		location: {pano: "g_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 320,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "g_3":
	return {
 		location: {pano: "g_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 330,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "g_4":
	return {
 		location: {pano: "g_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "g_5":
	return {
 		location: {pano: "g_5",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 45,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "g_6":
	return {
 		location: {pano: "g_6",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 85,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_1":
	return {
 		location: {pano: "h_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 35,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_2":
	return {
 		location: {pano: "h_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 337,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_3":
	return {
 		location: {pano: "h_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 325,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_4":
	return {
 		location: {pano: "h_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 25,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_5":
	return {
 		location: {pano: "h_5",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 75,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "h_6":
	return {
 		location: {pano: "h_6",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 140,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_1":
	return {
 		location: {pano: "i_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 10,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_2":
	return {
 		location: {pano: "i_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 20,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_3":
	return {
 		location: {pano: "i_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_4":
	return {
 		location: {pano: "i_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 140,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_5":
	return {
 		location: {pano: "i_5",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 310,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "i_6":
	return {
 		location: {pano: "i_6",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 320,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_1":
	return {
 		location: {pano: "j_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_2":
	return {
 		location: {pano: "j_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 30,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_3":
	return {
 		location: {pano: "j_3",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 110,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_4":
	return {
 		location: {pano: "j_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 325,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_5":
	return {
 		location: {pano: "j_5",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 65,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "j_6":
	return {
 		location: {pano: "j_6",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 140,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_1":
	return {
 		location: {pano: "k_1",latLng: new google.maps.LatLng(0, 0)},
		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 245,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_2":
	return {
 		location: {pano: "k_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 325,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_3":
	return {
 		location: {pano: "k_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 350,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_4":
	return {
 		location: {pano: "k_4",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 45,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_5":
	return {
 		location: {pano: "k_5",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 105,getTileUrl: getCustomPanoramaTileUrl}
	};


	case "k_6":
	return {
 		location: {pano: "k_6",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 150,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "m_2":
	return {
 		location: {pano: "m_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 200,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "m_3":
	return {
 		location: {pano: "m_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 90,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "n_3":
	return {
 		location: {pano: "n_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 235,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "l_2":
	return {
 		location: {pano: "l_2",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 240,getTileUrl: getCustomPanoramaTileUrl}
	};

	case "l_3":
	return {
 		location: {pano: "l_3",latLng: new google.maps.LatLng(0, 0)},
   		copyright: 'Imagery(c)@_Makky_',
		tiles: {tileSize: new google.maps.Size(256, 256),worldSize: new google.maps.Size(4096, 2048),centerHeading: 10,getTileUrl: getCustomPanoramaTileUrl}
	};

	}
	


}


function createCustomLink() {

var links = streetView.getLinks();
var panoID = streetView.getPano();
  Gpano = panoID;
clock();
  
switch(panoID) {
	
	case "a_1":
		links.push({
		description : "b_2",
		pano : "b_2",
		heading : 300
		})
		break;

	case "a_2":
		links.push({
		description : "m_2",
		pano : "m_2",
		heading : 180
		})
		links.push({
		description : "b_2",
		pano : "b_2",
		heading : 0
		})
		break;

	case "b_2":
		links.push({
		description : "c_2",
		pano : "c_2",
		heading : 300
		});
		links.push({
		description : "a_2",
		pano : "a_2",
		heading : 180
		});
		links.push({
		description : "a_1",
		pano : "a_1",
		heading : 120
		})
		break;

	case "b_4":
		links.push({
		description : "c_4",
		pano : "c_4",
		heading : 300
		});
		links.push({
		description : "c_3",
		pano : "c_3",
		heading : 60
		})
		break;

	case "c_1":
		links.push({
		description : "c_2",
		pano : "c_2",
		heading : 270
		});
		links.push({
		description : "d_1",
		pano : "d_1",
		heading : 0
		})
		break;

	case "c_2":
		links.push({
        	description : "c_3",
        	pano : "c_3",
        	heading : 270
		});
		links.push({
        	description : "d_2",
        	pano : "d_2",
        	heading : 0
		});
		links.push({
        	description : "c_1",
        	pano : "c_1",
        	heading : 90
		});
		links.push({
        	description : "b_2",
        	pano : "b_2",
        	heading : 180
		});
		break;

	case "c_3":
		links.push({
        	description : "c_4",
        	pano : "c_4",
        	heading : 270
		});
		links.push({
        	description : "d_3",
        	pano : "d_3",
        	heading : 0
		});
		links.push({
        	description : "c_2",
        	pano : "c_2",
        	heading : 90
		});
		links.push({
        	description : "b_4",
        	pano : "b_4",
        	heading : 200
		});
		break;

	case "c_4":
		links.push({
        	description : "d_4",
        	pano : "d_4",
        	heading : 0
		});
		links.push({
        	description : "c_3",
        	pano : "c_3",
        	heading : 90
		});
		links.push({
        	description : "b_4",
        	pano : "b_4",
        	heading : 160
		});
		break;

	case "d_1":
		links.push({
		description : "d_2",
		pano : "d_2",
		heading : 270
		});
		links.push({
		description : "c_1",
		pano : "c_1",
		heading : 180
		});
		links.push({
		description : "e_1",
		pano : "e_1",
		heading : 0
		})
		break;

	case "d_2":
		links.push({
        	description : "d_3",
        	pano : "d_3",
        	heading : 270
		});
		links.push({
		description : "c_2",
		pano : "c_2",
		heading : 180
		});
		links.push({
        	description : "e_2",
        	pano : "e_2",
        	heading : 0
		});
		links.push({
        	description : "d_1",
        	pano : "d_1",
        	heading : 90
		})
		break;

	case "d_3":
		links.push({
        	description : "d_4",
        	pano : "d_4",
        	heading : 270
		});
		links.push({
		description : "c_3",
		pano : "c_3",
		heading : 180
		});
		links.push({
        	description : "e_3",
        	pano : "e_3",
		heading : 0
		});
		links.push({
        	description : "d_2",
		pano : "d_2",
        	heading : 90
		})
		break;

	case "d_4":
		links.push({
        	description : "e_4",
        	pano : "e_4",
        	heading : 0
		});
		links.push({
		description : "c_4",
		pano : "c_4",
		heading : 180
		});
		links.push({
        	description : "d_3",
        	pano : "d_3",
        	heading : 90
		})
		break;
		
	case "e_1":
		links.push({
		description : "e_2",
		pano : "e_2",
		heading : 270
		});
		links.push({
		description : "d_1",
		pano : "d_1",
		heading : 180
		});
		links.push({
		description : "f_1",
		pano : "f_1",
		heading : 0
		})
		break;

	case "e_2":
		links.push({
        	description : "e_3",
        	pano : "e_3",
        	heading : 270
		});
		links.push({
		description : "d_2",
		pano : "d_2",
		heading : 180
		});
		links.push({
        	description : "f_2",
        	pano : "f_2",
        	heading : 0
		});
		links.push({
        	description : "e_1",
        	pano : "e_1",
        	heading : 90
		})
		break;

	case "e_3":
		links.push({
        	description : "e_4",
        	pano : "e_4",
        	heading : 270
		});
		links.push({
		description : "d_3",
		pano : "d_3",
		heading : 180
		});
		links.push({
        	description : "f_3",
        	pano : "f_3",
        	heading : 0
		});
		links.push({
        	description : "e_2",
        	pano : "e_2",
        	heading : 90
		})
		break;

	case "e_4":
		links.push({
        	description : "f_4",
        	pano : "f_4",
        	heading : 0
		});
		links.push({
		description : "d_4",
		pano : "d_4",
		heading : 180
		});
		links.push({
        	description : "e_3",
        	pano : "e_3",
        	heading : 90
		})
		break;

	case "f_1":
		links.push({
		description : "f_2",
		pano : "f_2",
		heading : 270
		});
		links.push({
		description : "g_1",
		pano : "g_1",
		heading : 0
		});
		links.push({
		description : "e_1",
		pano : "e_1",
		heading : 180
		})
		break;

	case "f_2":
		links.push({
 		description : "f_3",
        	pano : "f_3",
        	heading : 270
		});
		links.push({
		description : "g_2",
		pano : "g_2",
		heading : 0
		});
		links.push({
		description : "e_2",
		pano : "e_2",
		heading : 180
		});
		links.push({
        	description : "f_1",
        	pano : "f_1",
        	heading : 90
		})
		break;

	case "f_3":
		links.push({
        	description : "f_4",
        	pano : "f_4",
        	heading : 270
		});
		links.push({
		description : "g_4",
		pano : "g_4",
		heading : 0
		});
		links.push({
		description : "e_3",
		pano : "e_3",
		heading : 180
		});
		links.push({
        	description : "f_2",
        	pano : "f_2",
        	heading : 90
		})
		break;

	case "f_4":
		links.push({
		description : "e_4",
		pano : "e_4",
		heading : 180
		});
		links.push({
        	description : "f_3",
        	pano : "f_3",
        	heading : 90
		})
		break;
	

	case "g_1":
		links.push({
		description : "h_1",
		pano : "h_1",
		heading : 0
		});
		links.push({
		description : "f_1",
		pano : "f_1",
		heading : 180
		})
		break;

	case "g_2":
		links.push({
		description : "h_2",
		pano : "h_2",
		heading : 0
		});
		links.push({
		description : "f_2",
		pano : "f_2",
		heading : 180
		})
		break;

	case "g_3":
		links.push({
        	description : "g_4",
        	pano : "g_4",
        	heading : 270
		});
		links.push({
		description : "h_3",
		pano : "h_3",
		heading : 0
		})
		break;

	case "g_4":
		links.push({
        	description : "g_5",
        	pano : "g_5",
        	heading : 270
		});
		links.push({
        	description : "f_3",
        	pano : "f_3",
        	heading : 180
		});
		links.push({
		description : "h_4",
		pano : "h_4",
		heading : 0
		});
		links.push({
        	description : "g_3",
        	pano : "g_3",
        	heading : 90
		})
		break;

	case "g_5":
		links.push({
        	description : "g_6",
        	pano : "g_6",
        	heading : 270
		});
		links.push({
		description : "h_5",
		pano : "h_5",
		heading : 0
		});
		links.push({
        	description : "g_4",
        	pano : "g_4",
        	heading : 90
		})
		break;

	case "g_6":
		links.push({
		description : "h_6",
		pano : "h_6",
		heading : 0
		});
		links.push({
        	description : "g_5",
        	pano : "g_5",
        	heading : 90
		})
		break;

	case "h_1":
		links.push({
		description : "i_1",
		pano : "i_1",
		heading : 0
		});
		links.push({
		description : "g_1",
		pano : "g_1",
		heading : 180
		})
		break;

	case "h_2":
		links.push({
		description : "i_2",
		pano : "i_2",
		heading : 0
		});
		links.push({
		description : "g_2",
		pano : "g_2",
		heading : 180
		})
		break;

    case "h_3":
		links.push({
		description : "i_3",
		pano : "i_3",
		heading : 0
		});
		links.push({
		description : "g_3",
		pano : "g_3",
		heading : 180
		})
		break;

	case "h_4":

		links.push({
		description : "g_4",
		pano : "g_4",
		heading : 180
		});
		links.push({
		description : "i_4",
		pano : "i_4",
		heading : 0
		})
		break;

	case "h_5":
		links.push({
		description : "g_5",
		pano : "g_5",
		heading : 180
		});
		links.push({
		description : "i_5",
		pano : "i_5",
		heading : 0
		})
		break;

	case "h_6":
		links.push({
		description : "g_5",
		pano : "g_5",
		heading : 180
		});
		links.push({
		description : "i_6",
		pano : "i_6",
		heading : 0
		});
		break;

	case "i_1":
		links.push({
		description : "i_2",
		pano : "i_2",
		heading : 270
		});
		links.push({
		description : "j_1",
		pano : "j_1",
		heading : 0
		});
		links.push({
		description : "h_1",
		pano : "h_1",
		heading : 180
		})
		break;

	case "i_2":
		links.push({
 		description : "i_3",
        	pano : "i_3",
        	heading : 270
		});
		links.push({
		description : "j_2",
		pano : "j_2",
		heading : 0
		});
		links.push({
		description : "h_2",
		pano : "h_2",
		heading : 180
		});
		links.push({
        	description : "i_1",
        	pano : "i_1",
        	heading : 90
		})
		break;

	case "i_3":
		links.push({
        	description : "i_4",
        	pano : "i_4",
        	heading : 270
		});
		links.push({
		description : "j_3",
		pano : "j_3",
		heading : 0
		});
		links.push({
		description : "h_3",
		pano : "h_3",
		heading : 180
		});
		links.push({
        	description : "i_2",
        	pano : "i_2",
        	heading : 90
		})
		break;

	case "i_4":
	
		links.push({
		description : "g_4",
		pano : "g_4",
		heading : 180
		});
		links.push({
		description : "j_4",
		pano : "j_4",
		heading : 0
		});
		links.push({
		description : "i_5",
		pano : "i_5",
		heading : 270
		});
		links.push({
        	description : "i_3",
        	pano : "i_3",
        	heading : 90
		})
		break;

	case "i_5":
	
		links.push({
		description : "h_5",
		pano : "h_5",
		heading : 180
		});
		links.push({
		description : "i_6",
		pano : "i_6",
		heading : 270
		});
		links.push({
		description : "j_5",
		pano : "j_5",
		heading : 0
		});
		links.push({
        	description : "i_4",
        	pano : "i_4",
        	heading : 90
		})
		break;

	case "i_6":
	
		links.push({
		description : "g_6",
		pano : "g_6",
		heading : 180
		});
		links.push({
		description : "j_6",
		pano : "j_6",
		heading : 0
		});
		links.push({
        	description : "i_5",
        	pano : "i_5",
        	heading : 90
		})
		break;

	case "j_1":
		links.push({
		description : "k_1",
		pano : "k_1",
		heading : 0
		});
		links.push({
		description : "i_1",
		pano : "i_1",
		heading : 180
		})
		break;

	case "j_2":
		links.push({
		description : "k_2",
		pano : "k_2",
		heading : 0
		});
		links.push({
		description : "i_2",
		pano : "i_2",
		heading : 180
		})
		break;

    case "j_3":
		links.push({
		description : "k_3",
		pano : "k_3",
		heading : 0
		});
		links.push({
		description : "i_3",
		pano : "i_3",
		heading : 180
		})
		break;

	case "j_4":
		links.push({
		description : "i_4",
		pano : "i_4",
		heading : 180
		});
		links.push({
		description : "k_4",
		pano : "k_4",
		heading : 0
		})
		break;

	case "j_5":
		links.push({
		description : "i_5",
		pano : "i_5",
		heading : 180
		});
		links.push({
		description : "k_5",
		pano : "k_5",
		heading : 0
		})
		break;

	case "j_6":
		links.push({
		description : "i_6",
		pano : "i_6",
		heading : 180
		});
		links.push({
		description : "k_6",
		pano : "k_6",
		heading : 0
		})
		break;

	case "k_1":
		links.push({
		description : "k_2",
		pano : "k_2",
		heading : 270
		});
		links.push({
		description : "j_1",
		pano : "j_1",
		heading : 180
		})
		break;

	case "k_2":
		links.push({
 		description : "k_3",
        	pano : "k_3",
        	heading : 270
		});
		links.push({
		description : "j_2",
		pano : "j_2",
		heading : 180
		});
		links.push({
        	description : "k_1",
        	pano : "k_1",
        	heading : 90
		})
		break;

	case "k_3":
		links.push({
        	description : "k_4",
        	pano : "k_4",
        	heading : 270
		});
		links.push({
		description : "j_3",
		pano : "j_3",
		heading : 180
		});
		links.push({
        	description : "k_2",
        	pano : "k_2",
        	heading : 90
		})
		break;

	case "k_4":
		links.push({
		description : "j_4",
		pano : "j_4",
		heading : 180
		});
		links.push({
        	description : "k_5",
        	pano : "k_5",
        	heading : 270
		});
		links.push({
        	description : "k_3",
        	pano : "k_3",
        	heading : 90
		})
		break;

	case "k_5":
		links.push({
		description : "j_5",
		pano : "j_5",
		heading : 180
		});
		links.push({
		description : "k_6",
		pano : "k_6",
		heading : 270
		});
		links.push({
        	description : "k_4",
        	pano : "k_4",
        	heading : 90
		})
		break;

	case "k_6":
		links.push({
		description : "j_6",
		pano : "j_6",
		heading : 180
		});

		links.push({
        	description : "k_5",
        	pano : "k_5",
        	heading : 90
		})
		break;

	case "m_2":
		links.push({
		description : "a_2",
		pano : "a_2",
		heading : 0
		});

		links.push({
		description : "l_2",
		pano : "l_2",
		heading : 180
		});

		links.push({
        	description : "m_3",
        	pano : "m_3",
        	heading : 270
		})
		break;

	case "m_3":
		links.push({
		description : "n_3",
		pano : "n_3",
		heading : 180
		});

		links.push({
        	description : "m_2",
        	pano : "m_2",
        	heading : 90
		})
		break;

	case "n_3":
		links.push({
		description : "l_3",
		pano : "l_3",
		heading : 180
		});

		links.push({
        	description : "m_3",
        	pano : "m_3",
        	heading : 0
		})
		break;

	case "l_3":
		links.push({
		description : "l_2",
		pano : "l_2",
		heading : 90
		});

		links.push({
        	description : "n_3",
        	pano : "n_3",
        	heading : 0
		})
		break;

	case "l_2":
		links.push({
		description : "l_3",
		pano : "l_3",
		heading : 270
		});

		links.push({
        	description : "m_2",
        	pano : "m_2",
        	heading : 0
		})
		break;
  
  }

}



function clock() {
	document.getElementById('m').value= Gpano;
	//document.getElementById('m').innerHTML= '<a href="result_street.php?key=' + Gpano + '" target="_top">この付近の図書を検索します</a>';
	//document.getElementById('m').innerHTML= '<a href="result_street.php?key=' + Gpano + '" target="_top">' + Gpano +　</a>';
}

google.maps.event.addDomListener(window, 'load', initialize);
