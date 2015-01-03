{"filter":false,"title":"print-dependencies.js","tooltip":"/print-dependencies.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":28,"column":7},"action":"insert","lines":["var fs = require(\"fs\");","","function main() {","  fs.readdir(\"./node_modules\", function (err, dirs) {","    if (err) {","      console.log(err);","      return;","    }","    dirs.forEach(function(dir){","      if (dir.indexOf(\".\") !== 0) {","        var packageJsonFile = \"./node_modules/\" + dir + \"/package.json\";","        if (fs.existsSync(packageJsonFile)) {","          fs.readFile(packageJsonFile, function (err, data) {","            if (err) {","              console.log(err);","            }","            else {","              var json = JSON.parse(data);","              console.log('\"'+json.name+'\": \"' + json.version + '\",');","            }","          });","        }","      }","    });","","  });","}","","main();"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":23},"end":{"row":5,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1420147022662,"hash":"7943e7f401f2aac2004bfec2c838b758d3043157"}