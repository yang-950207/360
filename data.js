var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view-360",
      "name": "Street View 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "yaw": -0.021281130155568206,
        "pitch": -0.2813884977974439,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5525845112914745,
          "pitch": -0.005526266858659312,
          "rotation": 6.283185307179586,
          "target": "1-street-view-360-2"
        },
        {
          "yaw": 1.5201077001713683,
          "pitch": -0.05779662028271915,
          "rotation": 0,
          "target": "2-street-view-360-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-street-view-360-2",
      "name": "Street View 360-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -1.4540012838112233,
        "pitch": -0.050570480596309864,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9806978124778425,
          "pitch": -0.016628494528594828,
          "rotation": 0,
          "target": "2-street-view-360-5"
        },
        {
          "yaw": 0.17492737996894547,
          "pitch": -0.13054537668595145,
          "rotation": 0,
          "target": "0-street-view-360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street-view-360-5",
      "name": "Street View 360-5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 392.5,
      "initialViewParameters": {
        "yaw": 0.24624379193967272,
        "pitch": 0.21816080330242826,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 2.127691861504011,
          "pitch": -0.03799633310212691,
          "rotation": 0,
          "target": "0-street-view-360"
        },
        {
          "yaw": -1.3273613442532177,
          "pitch": 0.13695210889949294,
          "rotation": 0,
          "target": "2-street-view-360-5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
