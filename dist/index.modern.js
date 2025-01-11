import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DaisyDateReader(_ref) {
  var fecha = _ref.date,
    setFecha = _ref.setDate,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var _useState = useState(false),
    calendar = _useState[0],
    setCalendar = _useState[1];
  var _useState2 = useState(fecha),
    date = _useState2[0],
    setDate = _useState2[1];
  var configDate = function configDate(date) {
    setDate(date);
    if (!date) date = new Date();
    setFecha(date);
  };
  var toggleDate = function toggleDate() {
    setCalendar(!calendar);
  };
  var footer = '';
  try {
    footer = date ? date.toLocaleDateString() : 'Select a date';
  } catch (error) {
    console.log({
      error: error
    });
  }
  return React.createElement("div", {
    className: className
  }, React.createElement("button", {
    onClick: toggleDate,
    type: 'button',
    className: 'btn btn-sm',
    disabled: disabled
  }, footer), React.createElement("div", {
    className: " absolute opacity-100 bg-base-300 z-50 p-2 " + (calendar ? 'block' : 'hidden')
  }, React.createElement(DayPicker, {
    mode: 'single',
    selected: date,
    onSelect: function onSelect(value) {
      configDate(value);
      setCalendar(false);
    }
  }), React.createElement("div", {
    className: 'mb-2 flex justify-between mt-1'
  }, React.createElement("button", {
    type: 'button',
    onClick: function onClick() {
      return configDate(new Date());
    },
    className: 'btn btn-xs mr-1'
  }, "Today"), React.createElement("button", {
    onClick: function onClick() {
      return setCalendar(false);
    },
    className: 'btn btn-xs'
  }, "Close"))));
}

export default DaisyDateReader;
//# sourceMappingURL=index.modern.js.map
