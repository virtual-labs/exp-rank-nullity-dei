function smatrix(){
      
    let val1 = matrix_0_0 = parseInt(document.getElementById("matrix_0_0").value);
    let val2 = matrix_0_1 = parseInt(document.getElementById("matrix_0_1").value);
    let val3 = matrix_0_2 = parseInt(document.getElementById("matrix_0_2").value);
    let val4 = matrix_1_0 = parseInt(document.getElementById("matrix_1_0").value); 
    let val5 = matrix_1_2 = parseInt(document.getElementById("matrix_1_2").value);
    let val6 = matrix_1_1 = parseInt(document.getElementById("matrix_1_1").value);
         // Loop through each input field
    var isValid = true;
    var inputs = document.getElementsByClassName("basisinput");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isValid = false;
            break;
        }
    }

    // Display alert if any input is empty
    if (!isValid) {
        alert("Please enter all the values.");
    } else {
      document.getElementById("mat").innerHTML ="\\[ A &equiv; \\begin{pmatrix} a & b & c \\\\ d & e & f \\end{pmatrix} = \\begin{pmatrix} "+matrix_0_0+" & "+matrix_0_2+" &  "+ matrix_0_1 +" \\\\"  + matrix_1_0+"&" + matrix_1_2+"&"+   matrix_1_1 + "\\end{pmatrix} \\]";
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    document.getElementById("calcbtn").style.display="block";
    }
     
     
    
   
}
function calculateRank() {
  // Get matrix values from user input
  let matrix = [];  
  for (let i = 0; i < 2; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
      let inputValue = document.getElementById(`matrix_${i}_${j}`).value;
      matrix[i][j] = parseFloat(inputValue);
      if (inputValue == ""){
        alert("please enter all the values");
        return false;
    }
    }
    
    
  }

  // Apply Gaussian elimination to find the rank
  let { rank, nullity } = gaussianElimination(matrix);
  let matrix_0_0 = parseInt(document.getElementById("matrix_0_0").value);
        matrix_0_1 = parseInt(document.getElementById("matrix_0_1").value);
        matrix_0_2 = parseInt(document.getElementById("matrix_0_2").value);
        matrix_1_0 = parseInt(document.getElementById("matrix_1_0").value); 
        matrix_1_2 = parseInt(document.getElementById("matrix_1_2").value);
        matrix_1_1 = parseInt(document.getElementById("matrix_1_1").value);

  // Display the result
  document.getElementById('result').innerHTML = `Rank of the matrix is: ${rank}`;
  document.getElementById('lrv').innerHTML = `Maximal number of linearly independent row vectors: ${rank}`;
  document.getElementById('lcv').innerHTML = `Maximal number of linearly independent column vectors: ${rank}`;
  
  document.getElementById("colvec").innerHTML = "Column Vectors:  (" + matrix_0_0 + ","+ matrix_1_0 +")" + ", "+ "("+matrix_0_2 + ","+ matrix_1_2 +")"+ ", "+ "("+matrix_0_1 + ","+ matrix_1_1 +")";
  document.getElementById("rowvec").innerHTML = "Row Vectors:  (" + matrix_0_0 + ","+ matrix_0_2 + "," + matrix_0_1 +")" + ", "+ "(" + matrix_1_0 + ","+ matrix_1_2 + "," + matrix_1_1 +")";
      
}


function showexp() {
  // Get matrix values from user input
  let matrix = [];  
  for (let i = 0; i < 2; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
      let inputValue = document.getElementById(`matrix_${i}_${j}`).value;
      matrix[i][j] = parseFloat(inputValue);
      if (inputValue == ""){
        alert("please enter all the values");
        return false;
    }
    }
    
    
  }

  // Apply Gaussian elimination to find the rank
  let { rank, nullity } = gaussianElimination(matrix);
  let matrix_0_0 = parseInt(document.getElementById("matrix_0_0").value);
        matrix_0_1 = parseInt(document.getElementById("matrix_0_1").value);
        matrix_0_2 = parseInt(document.getElementById("matrix_0_2").value);
        matrix_1_0 = parseInt(document.getElementById("matrix_1_0").value); 
        matrix_1_2 = parseInt(document.getElementById("matrix_1_2").value);
        matrix_1_1 = parseInt(document.getElementById("matrix_1_1").value);

  // Display the result
  document.getElementById("calcbtn2").style.display="block";
  document.getElementById('result').innerHTML = `Rank of the matrix is: ${rank}`;
  
}



function gaussianElimination(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rank = 0;

  for (let col = 0; col < cols && rank < rows; col++) {
    // Find the pivot row
    let pivotRow = rank;
    while (pivotRow < rows && matrix[pivotRow][col] === 0) {
      pivotRow++;
    }

    if (pivotRow < rows) {
      // Swap current row with pivot row
      [matrix[rank], matrix[pivotRow]] = [matrix[pivotRow], matrix[rank]];

      // Make the pivot element 1
      let pivotElement = matrix[rank][col];
      for (let j = col; j < cols; j++) {
        matrix[rank][j] /= pivotElement;
      }

      // Eliminate other entries in the column
      for (let i = 0; i < rows; i++) {
        if (i !== rank && matrix[i][col] !== 0) {
          let factor = matrix[i][col];
          for (let j = col; j < cols; j++) {
            matrix[i][j] -= factor * matrix[rank][j];
          }
        }
      }

      rank++;
    }
  }
  let nullity = 3 - rank;

  return { rank, nullity };
  
}