jQuery("#simulation")
  .on("click", ".s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Graduacao")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-SubmenuGraduacao"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Seta2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-SubmenuGraduacao"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Graduacao_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-MenuPrincipal"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Seta2_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-MenuPrincipal"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isMenuOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": -568,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": 568,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
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
    } else if(jFirer.is("#s-Botao_pressionado")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isMenuOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": -568,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": 568,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
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
    } else if(jFirer.is("#s-Icone_Menu_Hamburger")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isMenuOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "1"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": -568,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isMenuOpened",
                    "value": "0"
                  }
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Painel_Inferior",
                    "type": "movebyoffset",
                    "containment": false,
                    "top": 0,
                    "left": 568,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Botao_pressionado",
                    "effect": {
                      "type": "fade",
                      "duration": 500
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
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
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
                      "direction": "right"
                    }
                  }
                }
              ]
            },
            {
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
                      "direction": "right"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
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
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
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
                      "direction": "right"
                    }
                  }
                }
              ]
            },
            {
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
                      "direction": "right"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 #s-Botao_mouse_over_15": {
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
  .on("windowresize", ".s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-992dc2eb-d6c6-4ee8-aa67-bdd15c987018")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"1366" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70fdc401-98db-44f6-9f24-5d0d17ad00f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-MenuPrincipal")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-MenuPrincipal",
                    "width": {
                      "type": "exprvalue",
                      "value": "569"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"125" ]
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
    } else if(jFirer.is("#s-SubmenuGraduacao")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-SubmenuGraduacao",
                    "width": {
                      "type": "exprvalue",
                      "value": "569"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"125" ]
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
                      "type": "exprvalue",
                      "value": "768"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"125" ]
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