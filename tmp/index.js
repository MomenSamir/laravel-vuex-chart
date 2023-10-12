var fs = require("fs");

 exports.handler = function(event, context) {
   fs.writeFile("/tmp/test.txt", "testing", function (err) {
    if (err) {
        context.fail("writeFile failed: " + err);
    } else {
        context.succeed("writeFile succeeded");
    }
  });
 };