var json = require("./bus.json");
var today = new Date();
var day = today.getDay(); //6,0
var hours = today.getHours();
var minutes = today.getMinutes();

function Bus(codeArray) {
  var codeArray = codeArray.split(" ");
  codeArray.forEach(function (code) {
    try {
      var CheckCode = json.find(function (n) {
        return n.number == code;
      });
      if (CheckCode) {
        var { number, timetable } = CheckCode;
        if (day == 0 || day == 6) {
          console.log(day);
          console.log(`'${number}'번 버스는 운행하지 않습니다.`);
        } else {
          var TimeFind = timetable.weekday.find(function (n) {
            var time = `${hours}:${minutes}`;
            return n.arrive <= time == 0;
          });
          if (!TimeFind) {
            console.log(`'${number}'번 버스는 운행이 종료되었습니다`);
          } else {
            console.log(
              `'${number}'번 버스는 ${TimeFind.name}를 향해 운행하고 있습니다.`
            );
          }
        }
      } else {
        console.log(`'${code}'번 버스는 버스는 존재하지 않습니다.`);
      }
    } catch (error) {
      return;
    }
  });
}
