jQuery("#simulation")
  .on("click", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Seta1_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-O_Instituto_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Seta1_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_servicos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Alto_contraste_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Aumentar_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Aum_fonte_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Aum_fonte_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Normalizar_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Norm_fonte_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Norm_fonte_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Diminuir_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Dim_fonte"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Dim_fonte"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_2"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_3"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_3"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_3"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_4"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_4"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_4"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_5"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_6"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_7"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_7"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_7"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_8"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_8"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_9"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_9"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_9"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_10"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_10"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_10"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_11"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Alto_contraste_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Aumentar_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Aumentar_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Aumentar_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Aum_fonte_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Aum_fonte_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Normalizar_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Normalizar_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Normalizar_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Norm_fonte_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Norm_fonte_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Diminuir_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Diminuir_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Diminuir_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Dim_fonte"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Dim_fonte"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_1"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_1") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_1").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_1") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_2"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_2") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_2").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_2") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_3").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_3") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_3"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_3"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_3") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_3").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_3") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_3"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_4"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_4"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_4"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_5").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_5") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_5"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_5") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_5").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_5") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_6").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_6") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_6"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_6 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_6") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_6").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_6") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_6"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_7").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_7") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_7"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_7"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_7 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_7") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_7").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_7") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_7"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_8"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_8 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_8"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_9"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_9"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_9 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_9"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_10"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_10"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_10 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_10"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_11").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_11") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_11"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_11 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button_11") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_11").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button_11") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont_11"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_12").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_12") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_12 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_13").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_13") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_13 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_14").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_14") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_menu_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Texto_botao_14 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Botao_mouse_over_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_7": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Apresentacao": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Apresentacao .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Apresentacao span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_24") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_24": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_24": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_24": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Localizacao": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Localizacao .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Localizacao span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_6": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Administracao": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Administracao .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Administracao span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_10": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Pessoal": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Pessoal .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Pessoal span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_8": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Formularios": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Formularios .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Formularios span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_9": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Informes_Internos": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Informes_Internos .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Informes_Internos span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Politicas_Uso": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Politicas_Uso .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Politicas_Uso span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Marca_INF": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Marca_INF .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Marca_INF span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_13": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Resolucao": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Resolucao .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Resolucao span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_14": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_14": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_14": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Links_Ext": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Links_Ext .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Links_Ext span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_25": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_25": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_25": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Fale_Conosco": {
                      "attributes": {
                        "font-size": "12pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Fale_Conosco .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Fale_Conosco span": {
                      "attributes": {
                        "color": "#005CA1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12pt"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Seta1_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_20": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_20": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_20": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_21": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_21": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_21": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_22": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-O_Instituto_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Seta1_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_23": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Icone_busca") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Botao_mouse_over_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Seta1_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-O_Instituto_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Seta1_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Icone_busca")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ccfeab79-4ab0-4f3e-95dd-0bf5f78d46d8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"1366" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b83cda5c-53b8-4f6f-b3ae-0eccbb12aedf"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"64" ]
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_5",
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"64" ]
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });