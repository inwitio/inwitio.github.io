var ctx = document.getElementById("myChart").getContext("2d");

var iosLtBlue = "#54C7FC";
var iosYellow = "#FFCD00";
var iosOrange = "#FF9600";
var iosPink = "#FF2851";
var iosBlue = "#0076FF";
var iosGreen = "#44DB5E";
var iosRed = "#FF3824";

var data = {
        datasets: [
            {
                label: "Kyle",
                fill: false,
                backgroundColor: iosLtBlue,
                borderColor: iosLtBlue,
                pointBorderColor: iosLtBlue,
                pointBackgroundColor: iosLtBlue,
                pointHoverBackgroundColor: iosLtBlue,
                pointHoverBorderColor: iosLtBlue,
                
                /* backgroundColor: "rgba(46, 188, 209, 1)",
                borderColor: "rgba(46, 188, 209, 1)",
                pointBorderColor: "rgba(46, 188, 209, 1)",
                pointBackgroundColor: "rgba(46, 188, 209, 1)",
                pointHoverBackgroundColor: "rgba(46, 188, 209, 1)",
                pointHoverBorderColor: "rgba(46, 188, 209, 1)",
                */
                data: [{ x: 1950, y: 332}, {x: 1960, y: 417}, {x: 1970, y: 513}, {x: 1980, y: 614}, {x: 1990, y: 721}, {x: 2000, y: 836}, {x: 2010, y: 935}, {x: 2020, y: 1027}, {x: 2030, y: 1110}, {x: 2040, y: 1178}, {x: 2050, y: 1231}]
            },
            {
                label: "Gregory",
                fill: false,
                
                backgroundColor: iosYellow,
                borderColor: iosYellow,
                pointBorderColor: iosYellow,
                pointBackgroundColor: iosYellow,
                pointHoverBackgroundColor: iosYellow,
                pointHoverBorderColor: iosYellow,
                
                /*
                backgroundColor: "rgba(239, 66, 111,1)",
                borderColor: "rgba(239, 66, 111,1)",
                pointBorderColor: "rgba(239, 66, 111,1)",
                pointBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBorderColor: "rgba(239, 66, 111,1)",
                */
                data: [{ x: 1950, y: 227}, {x: 1960, y: 283}, {x: 1970, y: 361}, {x: 1980, y: 471}, {x: 1990, y: 623}, {x: 2000, y: 797}, {x: 2010, y: 982}, {x: 2020, y: 1189}, {x: 2030, y: 1416}, {x: 2040, y: 1665}, {x: 2050, y: 1937}]
            },
            {
                label: "Butch",
                fill: false,
                
                backgroundColor: iosOrange,
                borderColor: iosOrange,
                pointBorderColor: iosOrange,
                pointBackgroundColor: iosOrange,
                pointHoverBackgroundColor: iosOrange,
                pointHoverBorderColor: iosOrange,
                
                /*
                backgroundColor: "rgba(239, 66, 111,1)",
                borderColor: "rgba(239, 66, 111,1)",
                pointBorderColor: "rgba(239, 66, 111,1)",
                pointBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBorderColor: "rgba(239, 66, 111,1)",
                */
                data: [{ x: 1950, y: 460}, {x: 1960, y: 425}, {x: 1970, y: 386}, {x: 1980, y: 354}, {x: 1990, y: 320}, {x: 2000, y: 300}, {x: 2010, y: 288}, {x: 2020, y: 312}, {x: 2030, y: 360}, {x: 2040, y: 422}, {x: 2050, y: 488}]
            },
            {
                label: "Sundance",
                fill: false,
                
                backgroundColor: iosPink,
                borderColor: iosPink,
                pointBorderColor: iosPink,
                pointBackgroundColor: iosPink,
                pointHoverBackgroundColor: iosPink,
                pointHoverBorderColor: iosPink,
                
                /*
                backgroundColor: "rgba(239, 66, 111,1)",
                borderColor: "rgba(239, 66, 111,1)",
                pointBorderColor: "rgba(239, 66, 111,1)",
                pointBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBackgroundColor: "rgba(239, 66, 111,1)",
                pointHoverBorderColor: "rgba(239, 66, 111,1)",
                */
                data: [{ x: 1950, y: 999}, {x: 1960, y: 860}, {x: 1970, y: 700}, {x: 1980, y: 530}, {x: 1990, y: 420}, {x: 2000, y: 340}, {x: 2010, y: 288}, {x: 2020, y: 312}, {x: 2030, y: 420}, {x: 2040, y: 600}, {x: 2050, y: 860}]
            }
        ]
    };
var options = {
    tooltips: {enabled: false},
    legend: {
        display: true,
        position: "bottom",
        labels: {
            boxWidth: 10
        }
    },
    scales: {
        yAxes: [{
            display: false,
            gridLines : {
                display: false
            },
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            type: 'linear',
            position: 'bottom',
            gridLines: {
                color: "#eaeaea",
                borderDash: [10],
                borderDashOffset: 5,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                max: 2060,
                min: 1940,
                fixedStepSize: 10
            }
        }]
    }
};


Chart.defaults.global.animation.easing = "easeOutQuad";

Chart.defaults.global.elements.line.fill = false;
Chart.defaults.global.elements.line.lineTension = 0.35;
Chart.defaults.global.elements.line.borderCapStyle = 'round';
Chart.defaults.global.elements.line.borderDash = [];
Chart.defaults.global.elements.line.borderDashOffset = 0.0;
Chart.defaults.global.elements.line.borderJoinStyle = 'round';
Chart.defaults.global.elements.point.borderWidth = 1;
Chart.defaults.global.elements.point.hoverBorderWidth = 1;
Chart.defaults.global.elements.point.radius = 6;
Chart.defaults.global.elements.point.hitRadius = 1;
Chart.defaults.global.elements.point.hoverRadius = 9;


var myLineChart = new Chart(ctx, {type: 'line', data: data, options: options});