
	function sameresult(){
		document.getElementById('sameres').innerHTML="✅ Correct!<br>The rank of a linear transformation is same as the rank of the matrix associated with the linear transformation w.r.t. a pair of bases.";
		document.getElementById('differentres').innerHTML="";
		document.getElementById('same').style.backgroundColor="green";
		document.getElementById('same').style.color="white";
		document.getElementById('different').style.backgroundColor="grey";
		document.getElementById('sameres').style.border="2px solid green";
		document.getElementById('differentres').style.border="none";

	}
	function differentresult(){
		document.getElementById('sameres').innerHTML="";
		document.getElementById('differentres').innerHTML="❌ Incorrect!<br>The rank of a linear transformation is same as the rank of the matrix associated with the linear transformation w.r.t. a pair of bases.";
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
			document.getElementById("result").innerHTML = "Answer: ✅ Correct!";
			result.style.color = "green";
		} else {
			document.getElementById("result").innerHTML = "Answer: ❌ Incorrect. Correct Answer:&isin;<i>R</i>";
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
			document.getElementById("result2").innerHTML = "Answer: ✅ Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result2").innerHTML = "Answer: ❌ Incorrect.";
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
			document.getElementById("result3").innerHTML = "Answer: ✅ Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result3").innerHTML = "Answer: ❌ Incorrect.";
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
			document.getElementById("result4").innerHTML = "Answer: ✅ Correct.";
			result.style.color = "green";
		} else {
			document.getElementById("result4").innerHTML = "Answer: ❌ Incorrect.";
			result.style.color = "red";
		}
	}



	function checkAnswer1() {
  const ans = document.getElementById("answerEx1").value;
  const result = document.getElementById("resultRT");
  const img = document.getElementById("nslt");

  if (ans === "N") {
    result.textContent = "Answer: ✅ Correct!";
    result.style.color = "green";
    img.src = "images/nullspace2.PNG";
    img.style.height = "19rem";
  } else if (ans === "") {
    result.textContent = "⚠️ Please select an option.";
    result.style.color = "orange";
   
  } else {
    result.innerHTML = "Answer: ❌ Incorrect! Correct Answer: Nullspace N(<i>T</i>)";
    result.style.color = "red";
    img.src = "images/nullspace2.PNG";
    img.style.height = "19rem";
  }
}

function checkAnswer2() {
  const ans = document.getElementById("answerEx2").value;
  const result = document.getElementById("resultNS");
   const img = document.getElementById("rglt");

  if (ans === "RT") {
    result.textContent = "Answer: ✅ Correct!";
    result.style.color = "green";
    img.src = "images/range2.png";
  } else if (ans === "") {
    result.textContent = "⚠️ Please select an option.";
    result.style.color = "orange";
  } else {
    result.innerHTML = "Answer: ❌ Incorrect! Correct Answer: Range R(<i>T</i>)";
    result.style.color = "red";
    img.src = "images/range2.png";
  }
}

function checkAnswer3() {
  const ans = document.getElementById("answerEx3").value;
  const result = document.getElementById("rTresult");
  const img = document.getElementById("rglt");

  if (ans === "V") {
    result.textContent = "Answer: ✅ Correct!";
    result.style.color = "green";
    img.src = "images/range2.png";
  } else if (ans === "") {
    result.textContent = "⚠️ Please select an option.";
    result.style.color = "orange";
  } else {
    result.innerHTML = "Answer: ❌ Incorrect! Correct Answer: <i>V</i>";
    result.style.color = "red";
    img.src = "images/range2.png";
  }
}