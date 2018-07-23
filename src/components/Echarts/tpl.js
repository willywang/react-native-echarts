export const html = function (sourceUrl) {

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
    <script src="${sourceUrl}"></script>
  </head>
  
  <body>
    <div id="main"></div>
  <body>
<html>
`;

}
