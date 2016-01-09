var win = Ti.UI.createWindow(
{
  backgroundColor: 'white'
})
var label = Ti.UI.createLabel();
win.add(label)
win.open();

var the_module = require('com.gaodemap');

var proxy = the_module.createMap( {
  borderColor: 'green',
  borderWidth: 3,
  width: 400,
  height: 400,
  top: 10,
  left: 20,
  lifecycleContainer: win
});
win.add(proxy);

