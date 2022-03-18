var APP_DATA = {
  "scenes": [
    {
      "id": "0-terraza",
      "name": "Terraza",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3105389472312652,
          "pitch": 0.08523383160766151,
          "rotation": 0,
          "target": "3-alberca"
        },
        {
          "yaw": 1.0082127447863645,
          "pitch": 0.030854825472257374,
          "rotation": 0,
          "target": "1-grill"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-grill",
      "name": "Grill",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.3126214239830176,
        "pitch": 0.06556978687194714,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.3202520566288012,
          "pitch": 0.10084107611407234,
          "rotation": 0,
          "target": "0-terraza"
        },
        {
          "yaw": 0.2430538167035472,
          "pitch": 0.10541440857436868,
          "rotation": 0,
          "target": "3-alberca"
        },
        {
          "yaw": 1.3523144149452069,
          "pitch": 0.11989518568477209,
          "rotation": 0,
          "target": "2-sala-de-juegos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-de-juegos",
      "name": "Sala de Juegos",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.20763171864379792,
        "pitch": 0.04280372423112411,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.619888320878079,
          "pitch": 0.07672527248177552,
          "rotation": 0,
          "target": "1-grill"
        },
        {
          "yaw": -1.5898971475057593,
          "pitch": 0.04198760059183826,
          "rotation": 0,
          "target": "0-terraza"
        },
        {
          "yaw": -0.8277894667591674,
          "pitch": 0.04643141976131737,
          "rotation": 18.84955592153877,
          "target": "3-alberca"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4925570648237887,
          "pitch": 0.04988924749898693,
          "title": "Alberca",
          "text": "La Alberca es de 4 x 4 metros, el espacio ideal para poder disfrutar con amigos y familia."
        }
      ]
    },
    {
      "id": "3-alberca",
      "name": "Alberca",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2121246321654695,
        "pitch": 0.13957736162323542,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.0641687957885946,
          "pitch": 0.05600794359359895,
          "rotation": 0,
          "target": "0-terraza"
        },
        {
          "yaw": 0.1611361617103455,
          "pitch": 0.05344459589788286,
          "rotation": 0,
          "target": "1-grill"
        },
        {
          "yaw": -0.5195350162348031,
          "pitch": 0.05456159909956071,
          "rotation": 0,
          "target": "2-sala-de-juegos"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Terraza Rancho",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
