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
        "Bonds"],//,"Cash","Commodities"],
    datasets: [
        {
            data: [59, 31],//, 6, 4],
            backgroundColor: [iosLtBlue, iosYellow], //, iosOrange, iosPink],
            hoverBackgroundColor: [iosLtBlue, iosYellow], //, iosOrange, iosPink],
            borderWidth: [10, 10], //, 10, 10],
            hoverBorderColor: ["#fff", "#fff"], //, "#fff", "#fff"],
            hoverBorderWidth: [10, 10], //, 10, 10]
        }]

};
var options = {
    tooltips: {enabled: false},
    cutoutPercentage: 33,
    rotation: -.5*Math.PI,
    animation: {
        animateScale: true
    },
    legend: {
        display: true,
        position: "bottom",
        labels: {
            boxWidth: 10
        }
    }
};

var myPieChart = new Chart(ctx, {type: 'doughnut', data: data, options: options});