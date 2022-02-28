$(document).ready(function () {
	// Set the date we're counting down to
	var countDownDate;
	var x;

	var alarmSound = document.createElement('audio');
	alarmSound.setAttribute('src', 'https://www.soundjay.com/buttons/sounds/beep-24.mp3');

	// Update the count down every 1 second
	$("#startButton").click(function () {
		document.getElementById("startButton").innerHTML = "Stop";
		x = setInterval(function () {
			// Get today's date and time
			var now = new Date().getTime();
			// Find the distance between now and the count down date
			var distance = countDownDate - now;
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			var milliSecond = Math.floor(distance % 1000); // stepbystep ppt solution
			$("#daysTxtBox").val(days); 		//inputting time calculations from above
			$("#hoursTxtBox").val(hours);
			$("#minutesTxtBox").val(minutes);
			$("#secondsTxtBox").val(seconds);
			$("#milSecondsTxtBox").val(milliSecond);
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(x);
				$("#daysTxtBox").val(0); 		//inputting time calculations from above
				$("#hoursTxtBox").val(0);
				$("#minutesTxtBox").val(0);
				$("#secondsTxtBox").val(0);
				$("#milSecondsTxtBox").val(0);
				document.getElementById("startButton").innerHTML = "Start";
				alarmSound.play();

			}
		}, 100);
	})
	// Set Event button Click
	$("#setEventBtn").click(function () {
		var inputDate;
		var inputTime;

		inputDate = $("#eventDateSelector").val();
		inputTime = $("#eventTimeSelector").val();
		countDownDate = new Date(inputDate + " " + inputTime);

		alert("Time = [" + inputTime + "]");
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;
		console.log("User Date[" + inputDate + "]");
		console.log("User Time[" + inputTime + "]");
		console.log("User Date/Time [" + countDownDate + "]");
		console.log("now [" + now + "]");
		console.log("Distance [" + distance + "]");

		// Calculate the days, hours, min and sec for the countDownDate
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		var milliSecond = Math.floor(distance % 1000); // stepbystep ppt solution		
		// display on txtBoxes for year,day,hour,minute,second,milliSecond		
		$("#daysTxtBox").val(days); 					//inputting time calculations from above
		$("#hoursTxtBox").val(hours);
		$("#minutesTxtBox").val(minutes);
		$("#secondsTxtBox").val(seconds);
		$("#milSecondsTxtBox").val(milliSecond);
	})


	// Snooze button Click
	$("#snoozeButton").click(function () {



		var distance = 10000;		//10 seconds
		clearInterval(x);

		var y = setInterval(function () {

			if (distance < 1) {		// if you get to 1 ms
				clearInterval(y);		//clearInterval
				$("#secondsTxtBox").val(seconds);
				$("#milSecondsTxtBox").val(milliSecond);
				alarmSound.play();	// play the sound
			}
			$("#daysTxtBox").val(0);
			$("#hoursTxtBox").val(0);
			$("#minutesTxtBox").val(0);
			$("#secondsTxtBox").val(Math.floor((distance % (1000 * 60)) / 1000)); 	//otherwise  display seconds and milliseconds (because you only added 10 seconds, everything else stays same)
			$("#milSecondsTxtBox").val(Math.floor(distance % 1000));
			distance--;
		});


		// Calculate the days, hours, min and sec for the countDownDate
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		var milliSecond = Math.floor(distance % 1000); // stepbystep ppt solution		
		// display on txtBoxes for year,day,hour,minute,second,milliSecond		
		$("#daysTxtBox").val(days); 					//inputting time calculations from above
		$("#hoursTxtBox").val(hours);
		$("#minutesTxtBox").val(minutes);
		$("#secondsTxtBox").val(seconds);
		$("#milSecondsTxtBox").val(milliSecond);
	})


	// Reset button Click
	$("#resetButton").click(function () {
		location.reload();		// just reloads the page because idk how to clear date and time pickers
	})
})