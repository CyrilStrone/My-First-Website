$(document).ready(function() {
    
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    
    data: {
        
        datasets: [{
            data: [130, 65, 65, 0],
            backgroundColor: ['#FFBA9C', '#66D2EA', '#8BA4F9', '#3D4975 '],
            radius:55,
            borderColor: '#FFFFFF',
            borderRadius: 15,
            cutout:45,
            hoverBorderColor: '#FFFFFF'
        }]
    },
    options: {
        legend: {
          display: false,
            labels: {
              display: false
            }
        }
      }  ,
    });
});
