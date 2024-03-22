import { readFileSync } from "fs";
import { CronJob } from "cron";
import cmd from "node-cmd";

let stxt = readFileSync("scrips.txt", "utf-8");
let aScripts = stxt.split("\r\n");

aScripts.forEach((scriptLine) => {
  let [sDireccion, sPeriodicidad] = scriptLine.split(";");

  new CronJob(
    sPeriodicidad,
    function () {
      console.log(sDireccion);
      cmd.run(sDireccion, (err, data, stderr) => {
        if (err) {
          console.error(`${sDireccion}: ${stderr}`);
        } else {
          console.log(`${sDireccion}: ${data}`);
        }
      });
    },
    null,
    true,
    "America/Caracas"
  );
});
