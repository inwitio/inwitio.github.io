var ctx = document.getElementById("myChart2").getContext("2d");

var iosLtBlue = "#54C7FC";
var iosYellow = "#FFCD00";
var iosOrange = "#FF9600";
var iosPink = "#FF2851";
var iosBlue = "#0076FF";
var iosGreen = "#44DB5E";
var iosRed = "#FF3824";

var data = {
    labels: [
        "Equity",
        "Bonds",
        "Cash",
        "Commodities"
    ],
    datasets: [
        {
            data: [59, 31, 6, 4],
            backgroundColor: [iosLtBlue, iosYellow, iosOrange, iosPink],
            hoverBackgroundColor: [iosLtBlue, iosYellow, iosOrange, iosPink]
        }],
    borderColor: ["#fff", "#fff", "#fff", "#fff"],
    borderWidth: [20, 20, 20, 20],
};
var options = {
    tooltips: {enabled: false},
    legend: {
        display: true,
        position: "bottom",
        labels: {
            boxWidth: 10
        }
    }
};

var myPieChart = new Chart(ctx, {type: 'pie', data: data, options: options});