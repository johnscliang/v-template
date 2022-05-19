import html2canvas from "html2canvas";

export default function initSnapshotPlugin(vconsole, VConsolePlugin) {
  let plugin = new VConsolePlugin('snapshot', 'Snapshot');
  plugin.on('renderTab', function(callback) {
    let html = `
    <div>env: ${import.meta.env.MODE}</div>
    <div style='font-size: 20px;'>Group Name</div>
    <input style='width: 90%;font-size: 20px;' />
    <div style='margin-top: 2em;text-align:center'>
      <button id='vconsole_bt_snapshot' style='font-size: 32px;'>
        开始截图
      </button>
    </div>
    `
    callback(html);
  });
  plugin.on('ready', function() {
    document.querySelector('#vconsole_bt_snapshot').addEventListener('click', function() {
      console.log('开始截图');
      vconsole.hide();
      html2canvas(document.querySelector("html")).then(canvas => {
        console.log(canvas.toDataURL('image/jpg', 1));
      });
    });
  });
  return plugin;
}
