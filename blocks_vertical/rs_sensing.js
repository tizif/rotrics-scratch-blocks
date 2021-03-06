'use strict';

goog.provide('Blockly.Blocks.rs_sensing');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['RS_SENSING_CURRENT_POSITION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_POSITION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_X, 'x'],
            [Blockly.Msg.RS_OPTION_Y, 'y'],
            [Blockly.Msg.RS_OPTION_Z, 'z'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['RS_SENSING_CURRENT_ACCELERATION'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_ACCELERATION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE1",
          "options": [
            [Blockly.Msg.RS_OPTION_PRINTING, 'printing'],
            [Blockly.Msg.RS_OPTION_RETRACT, 'retract'],
            [Blockly.Msg.RS_OPTION_TRAVEL, 'travel'],
          ]
        }
      ],
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['RS_SENSING_CURRENT_SPEED'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.RS_SENSING_CURRENT_SPEED,
      "category": Blockly.Categories.rs_sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
