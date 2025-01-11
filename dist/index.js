function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactDayPicker = require('react-day-picker');
require('react-day-picker/dist/style.css');

function DaisyDateReader(_ref) {
  var fecha = _ref.date,
    setFecha = _ref.setDate,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var _useState = React.useState(false),
    calendar = _useState[0],
    setCalendar = _useState[1];
  var _useState2 = React.useState(fecha),
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
  return React__default.createElement("div", {
    className: className
  }, React__default.createElement("button", {
    onClick: toggleDate,
    type: 'button',
    className: 'btn btn-sm',
    disabled: disabled
  }, footer), React__default.createElement("div", {
    className: " absolute opacity-100 bg-base-300 z-50 p-2 " + (calendar ? 'block' : 'hidden')
  }, React__default.createElement(reactDayPicker.DayPicker, {
    mode: 'single',
    selected: date,
    onSelect: function onSelect(value) {
      configDate(value);
      setCalendar(false);
    }
  }), React__default.createElement("div", {
    className: 'mb-2 flex justify-between mt-1'
  }, React__default.createElement("button", {
    type: 'button',
    onClick: function onClick() {
      return configDate(new Date());
    },
    className: 'btn btn-xs mr-1'
  }, "Today"), React__default.createElement("button", {
    onClick: function onClick() {
      return setCalendar(false);
    },
    className: 'btn btn-xs'
  }, "Close"))));
}

module.exports = DaisyDateReader;
//# sourceMappingURL=index.js.map
