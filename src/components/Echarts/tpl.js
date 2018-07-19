export const html = function (url) {

  return `
<!DOCTYPE html>
<html>
  <head>
    <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"> 
    <title>echarts</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <style type="text/css">
      html,body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        /* overflow: hidden;*/

      }
      #main {
        height: 100%;
      }
    </style>
    <script>
    window.onerror = function (msg, url, line, col, error) {
      if (typeof msg === 'object') {
        msg = JSON.stringify(msg);
      }
      if (error) {
        error = error.stack.toString();
      }
      var data = [msg, error, url, line, col].join('|');
      var image = new Image();
      image.src = 'https://store.gf.com.cn/super/api/report/info?xxx=' + data;
    }
    </script>
    <script src="${url}"></script>
  </head>
  
  <body>
    <div id="main" >
    </div>
  <body>
<html>
`;

}
