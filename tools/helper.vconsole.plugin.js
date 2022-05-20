export default function initHelperPlugin(vconsole, VConsolePlugin) {
  let plugin = new VConsolePlugin('helper', 'Helper');
  plugin.on('renderTab', function(callback) {
    let html = `
    <div>env: ${import.meta.env.MODE}</div>
    <div style='margin-top: 2em;text-align:center'>
      <button id='vconsole_bt_close_vconsole' style='font-size: 32px;'>
      关闭VConsole
      </button>
    </div>
    `
    callback(html);
  });
  plugin.on('ready', function() {
    document.querySelector('#vconsole_bt_close_vconsole').addEventListener('click', function() {
      vconsole.destroy();
    });
  });
  return plugin;
}
