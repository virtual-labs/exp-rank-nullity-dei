
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
