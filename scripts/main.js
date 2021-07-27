//Task Overview Chart
var ctx = document.getElementById('taskOverview');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Overdue', 'Open', 'Upcoming', 'Complete'],
        datasets: [{
            label: '# of Tasks',
            data: [12, 19, 6, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Task Performance Line Chart
var ctx = document.getElementById('taskPerformance');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['4/21', '5/21', '6/21', '7/21', '8/21'],
        datasets: [{
            label: 'Tasks Completed',
            data: [6, 22, 19, 16, 25],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Doughnut Chart
var ctx = document.getElementById('loggedTime');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Billable', 'Non-Billable'],
        datasets: [{
            label: 'Logged Time',
            data: [26, 16],
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                '#cccccc'
            ]
        }]
    }
});