google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var confirmed = document.getElementById("confirmed").innerHTML
    var deaths = document.getElementById("deaths").innerHTML
    var recovered = document.getElementById("recovered").innerHTML

    confirmed = Number(confirmed)
    deaths = Number(deaths)
    recovered = Number(recovered)

    var data = google.visualization.arrayToDataTable([
        ['Status', 'Quantity'],
        ['Ca nhiễm', confirmed],
        ['Tử Vong', deaths],
        ['Phục hồi', recovered]
    ]);

    var options = {
        title: 'COVID CHART',
        titleTextStyle: {
        fontSize: 25
        },
        pieStartAngle: 270,
        chartArea:{
        left: 200,
        width: 700
    }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_covid'));

    chart.draw(data, options);
    }