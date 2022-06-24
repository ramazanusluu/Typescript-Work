var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["bule"] = 1] = "bule";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
//red=0
//bule=1
//green=2
console.log(Color.green);
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wendesday"] = 3] = "wendesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 25] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
console.log(Days.friday);
