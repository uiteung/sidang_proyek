Chart.defaults.global.defaultFontColor = 'white';
let ctxLine,
    ctxBar,
    ctxPie,
    optionsLine,
    optionsBar,
    optionsPie,
    configLine,
    configBar,
    configPie,
    lineChart;
// DOM is ready
$(function () {
    drawLineChart(); // Line Chart
    drawBarChart(); // Bar Chart
    drawPieChart(); // Pie Chart

    $(window).resize(function () {
        updateLineChart();
        updateBarChart();                
    });
})