
	function sameresult(){
		document.getElementById('sameres').innerHTML="Correct!<br>The rank of a linear transformation is same as the rank of the matrix associated with the linear transformation w.r.t. a pair of basis.";
		document.getElementById('differentres').innerHTML="";
		document.getElementById('same').style.backgroundColor="green";
		document.getElementById('same').style.color="white";
		document.getElementById('different').style.backgroundColor="grey";
		document.getElementById('sameres').style.border="2px solid green";
		document.getElementById('differentres').style.border="none";

	}
	function differentresult(){
		document.getElementById('sameres').innerHTML="";
		document.getElementById('differentres').innerHTML="Incorrect!<br>The rank of a linear transformation is same as the rank of the matrix associated with the linear transformation w.r.t. a pair of basis.";
		document.getElementById('different').style.backgroundColor="red";
		document.getElementById('different').style.color="white";
		document.getElementById('same').style.backgroundColor="grey";
		document.getElementById('differentres').style.border="2px solid red";
		document.getElementById('sameres').style.border="none";
	}
	function checkSelection() {
		let selectBox = document.getElementById("cars");
		let selectedValue = selectBox.value;
		let result = document.getElementById("result");
		
		if(selectedValue === "null")
		{
			alert("Please select the answer");
		}
		else if (selectedValue === "blR") {
			document.getElementById("result").innerHTML = "Answer is Correct. <br> Null Space = {(x, y)&isin;R<sup>2</sup>: x=0} = y-axis";
			result.style.color = "green";
		} else {
			document.getElementById("result").innerHTML = "Answer is Incorrect. <br> Correct answer is Null Space = {(x, y)&isin;R<sup>2</sup>: x=0} = y-axis";
			result.style.color = "red";
		}
	}

	function checkSelection2() {
		let selectBox = document.getElementById("nullity");
		let selectedValue = selectBox.value;
		let result = document.getElementById("result2");

		if(selectedValue === "null")
		{
			alert("Please select the answer");
		}
		else if (selectedValue === "2" || selectedValue === "1" || selectedValue === "0") {
			document.getElementById("result2").innerHTML = "Answer is Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result2").innerHTML = "Answer is Incorrect.";
			result.style.color = "red";
		}
	}

	
	function selectRank() {
		let selectBox = document.getElementById("rank");
		let selectedValue = selectBox.value;
		let result = document.getElementById("result3");

		if(selectedValue === "null")
		{
			alert("Please select the answer");
		}
		else if (selectedValue === "1") {
			document.getElementById("result3").innerHTML = "Answer is Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result3").innerHTML = "Answer is Incorrect.";
			result.style.color = "red";
		}
	}

	function selectRange() {
		let selectBox = document.getElementById("range");
		let selectedValue = selectBox.value;
		let result = document.getElementById("result4");

		if(selectedValue === "null")
		{
			alert("Please select the answer");
		}
		else if (selectedValue === "2x") {
			document.getElementById("result4").innerHTML = "Answer is Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result4").innerHTML = "Answer is Incorrect.";
			result.style.color = "red";
		}
	}
