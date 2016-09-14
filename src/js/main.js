//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js
//= ../../bower_components/wow/dist/wow.js
//= ../../bower_components/circliful/js/jquery.circliful.js

$( document ).ready(function() {
	$("#web-circle").circliful({
        animationStep: 3,
        backgroundBorderWidth: 15,
        percent: 90,
        halfCircle: 1,
        foregroundColor: '#fff',
        backgroundColor: 'rgba(0,0,0,0.26)',
        replacePercentageByText: 'Web Design',
        percentageTextSize: '14',
        fontColor: '#fff',
        animateInView: true
    });
    $("#print-circle").circliful({
        animationStep: 3,
        backgroundBorderWidth: 15,
        percent: 75,
        halfCircle: 1,
        foregroundColor: '#fff',
        backgroundColor: 'rgba(0,0,0,0.26)',
        replacePercentageByText: 'Print Design',
        percentageTextSize: '14',
        fontColor: '#fff',
        animateInView: true
    });
    $("#brand-circle").circliful({
        animationStep: 3,
        backgroundBorderWidth: 15,
        percent: 50,
        halfCircle: 1,
        foregroundColor: '#fff',
        backgroundColor: 'rgba(0,0,0,0.26)',
        replacePercentageByText: 'Branding',
        percentageTextSize: '14',
        fontColor: '#fff',
        animateInView: true
    });
    $("#motion-circle").circliful({
        animationStep: 3,
        backgroundBorderWidth: 15,
        percent: 25,
        halfCircle: 1,
        foregroundColor: '#fff',
        backgroundColor: 'rgba(0,0,0,0.26)',
        replacePercentageByText: 'Motion',
        percentageTextSize: '14',
        fontColor: '#fff',
        animateInView: true
    });
});
