const ctx = document.getElementById('pnorm');
        const pnorm = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [{% for x in dates %}"{{x}}",{% endfor %}],
                datasets: [
                    {
                        label: "{{ tickers[0] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[0]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[0]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(255, 0, 0, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[1] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[1]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[1]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(255, 128, 0, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[2] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[2]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[2]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(255, 255, 0, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[3] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[3]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[3]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(0, 255, 0, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[4] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[4]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[4]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(0, 255, 255, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[5] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[5]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[5]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(0, 128, 255, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[6] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[6]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[6]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(0, 0, 255, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[7] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[7]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[7]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(127, 0, 255, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[8] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[8]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[8]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(255, 0, 127, 1)',
                        lineTension: 0
                        },
                        {
                        label: "{{ tickers[9] }}",
                        data: [{
                            x: "{{ dates[0] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[0]] }}
                        }, {
                            x: "{{ dates[1] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[1]] }}
                        }, {
                            x: "{{ dates[2] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[2]] }}
                        }, {
                            x: "{{ dates[3] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[3]] }}
                        }, {
                            x: "{{ dates[4] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[4]] }}
                        }, {
                            x: "{{ dates[5] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[5]] }}
                        }, {
                            x: "{{ dates[6] }}",
                            y: {{ pnorm_obj[tickers[9]][dates[6]] }}
                        }, {x: "{{ dates[7] }}", y: {{ pnorm_obj[tickers[9]][dates[7]] }}}],
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(127, 127, 127, 127)',
                        lineTension: 0
                    },
                ],
            },
            options: {
                tooltips: {
                    mode: 'index',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'white' //set your desired color
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            autoSkip: false,
                            beginAtZero: true,
                            stepSize: 20,
                            suggestedMax: 100,
                            fontColor: 'white',
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: false,
                            fontColor: 'white',
                        }
                    }]
                },
            }
        });