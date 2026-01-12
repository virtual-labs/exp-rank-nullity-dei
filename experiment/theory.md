<span style="font-family: 'Times New Roman'; font-size: 22px;">This experiment helps students in learning two important ideas in linear algebra: rank and nullity. Through this experiment, students will explore subspaces of vector spaces such as null space and range. Simple examples are given to make students understand what these mean and why these matter. Relation between rank and nullity has also been given to find one with the help of the other.</span>
**<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Row and column vector:</span>**
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>A</i> be a matrix of order <i>m</i>×<i>n</i>. Then there are <i>m</i> rows and <i>n</i> columns. Each row gives a matrix of order 1×<i>n</i> and is known as a row vector. Similarly, each column gives a <i>n</i>×1 matrix and is known as a column vector. A row vector can be considered as an element of <i>R</i><sup><i>n</i></sup> and column vector can be considered as an element of <i>R</i><sup><i>m</i></sup>. Conversely, an element of <i>R</i><sup><i>n</i></sup> can be considered as a column matrix (or column vector)/ row matrix (or row vector) of order <i>n</i>×1/1×<i>n</i>.</span>
![Row and column vector](images/exp6finalimaage.PNG "Row and column vector")
**<span style="font-family: 'Times New Roman'; font-size: 22px;">2. Null space </span>**	
**<span style="font-family: 'Times New Roman'; font-size: 22px;">2.1. Null space of a linear transformation: </span>**
Let <i>V</i> and <i>W</i> be vector spaces over the field <i>R</i> and let <i>T</i>:<i>V→W</i> be a linear transformation. Then the null space of <i>T</i> is defined as the set of vectors <i>x</i>&isin;<i>V</i> such that <i>T</i>(<i>x</i>)=0 and is also known as kernel of <i>T</i>. It is denoted by <i>N</i>(<i>T</i>) or ker(<i>T</i>). Thus <i>N</i>(<i>T</i>)={ <i>x</i>&isin;<i>V</i>|<i>T</i>(<i>x</i>)=0}. By definition, <i>N</i>(<i>T</i>) is a subspace of <i>V</i>.
**2.2. Null space of a matrix:**
Let <i>A</i> be a matrix of order <i>m</i>×<i>n</i>. Then the null space of a matrix <i>A</i> is the set of all <i>x</i> in <i>R</i><sup><i>n</i></sup> (expressed as columns vectors) that satisfy the equation <i>Ax</i>=0, where 0 is the zero vector of <i>R</i><sup><i>n</i></sup>.
**2.3. Nullity:** 
Let <i>V</i> and <i>W</i> be finite dimensional vector spaces over <i>R</i> and let <i>T</i>:<i>V→W</i> be a linear transformation. Then dimension of its null space (a subspace of <i>V</i>) is called the nullity of <i>T</i>. It is denoted by <i>η</i>(<i>T</i>).
Let <i>A</i> be a matrix of order <i>m</i>×<i>n</i>. Then dimension of its null space is called the nullity of <i>A</i>. It is denoted by <i>η</i>(<i>A</i>).
**2.3.1. Examples:**
(i). Consider the linear transformation <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>x, -y</i>), where <i>x, y</i>&isin;<i>R</i>. Then nullity of <i>T</i> is zero because its null space is {(0, 0)}. <br>
(ii). Consider the linear transformation <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>x</i>, 0), where <i>x, y</i>&isin;<i>R</i>. Then nullity of <i>T</i> is one because its null space is {(0, <i>α</i>): <i>α</i>&isin;<i>R</i>}, where <i>α</i>&isin;<i>R</i>. <br>
(iii). Nullity of the zero transformation is 0. <br>
(iv). Let <i>A</i>= be a matrix of order 2×2. Then nullity of <i>A</i> is zero because its null space is {(0, 0 <br>
(v). Let <i>A</i>=, where <i>a, b</i> are non-zero real numbers, be a matrix of order 2×2. Then nullity of <i>A</i> is two because its null space is {(<i>a, b</i>): <i>a, b</i>&isin;<i>R</i>}. <br>
**3. Range:** 
Let <i>V</i> and <i>W</i> be vector spaces over a field <i>R</i>. Let <i>T</i>:<i>V→W</i> be a linear transformation. Then the range of <i>T</i> is defined as set of vectors <i>α</i>&isin;<i>W</i> such that <i>α</i>=<i>T</i>(<i>x</i>), for some <i>x</i>&isin;<i>V</i> which is denoted by <i>R</i>(<i>T</i>). Thus <i>R</i>(<i>T</i>)={<i>T</i>(<i>x</i>)&isin;<i>V</i> : <i>x</i>&isin;<i>V</i>}. By definition, <i>R</i>(<i>T</i>) is a subspace of <i>V</i>.
**3.1. Rank:** 
Let <i>V</i> and <i>W</i> be finite dimensional vector spaces over <i>R</i> and let <i>T</i>:<i>V→W</i> be a linear transformation. Then dimension of its range(a subspace of <i>V</i>) is called the rank of <i>T</i>. It is denoted by <i>ρ</i>(<i>T</i>). 
Let <i>A</i> be matrix of order <i>m</i>×<i>n</i>. Then rank of a matrix <i>A</i> is the maximal number of linearly independent row or column vectors. It is denoted by <i>ρ</i>(<i>A</i>).
**3.2. Remark:** 
Let <i>A</i> be a matrix of order <i>m</i>×<i>n</i> and <i>T</i>:<i>V→W</i> be an associated linear transformation with respect to a given pair of bases. Then by definition it is immediate that rank of <i>A</i> is same as the rank of <i>T</i>. Hence change of basis does not affect rank. Same holds for nullity.
**3.2.1 Example:**
(i). Consider the linear transformation <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>x, -y</i>), where <i>x, y</i>&isin;<i>R</i>. Then rank of <i>T</i> is 2 because its range is {(<i>α, β</i>): <i>α, β</i>&isin;<i>R</i>}. <br>
(ii). Consider the linear transformation <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>x</i>, 0), where <i>x, y</i>&isin;<i>R</i>. Then rank of <i>T</i> is one because its range is {(<i>α</i>, 0): <i>α</i>&isin;<i>R</i>}.<br>
(iii). Rank of the zero transformation is 0. <br>
(iv). Let A= 

$$\begin{pmatrix}a & b \\\ c & d\end{pmatrix}$$

where a, b are non-zero real numbers, be a matrix of order 2×2. Then rank of A is 2. <br>
(v). Let A=

$$\begin{pmatrix}0 & 0 \\\ 0 & 0\end{pmatrix}$$

be a matrix of order 2×2. Then nullity of <i>A</i> is 2.

**4. Rank-Nullity theorem:** 
Let <i>V</i> and <i>W</i> be finite dimensional vector spaces over <i>R</i> and let <i>T</i>:<i>V→W</i> be a linear transformation. Then <i>ρ</i>(<i>T</i>)+<i>η</i>(<i>T</i>)=Dim <i>V</i>.
**4.1. Example:** 
Let <i>T</i>:<i>R</i><sup>2</sup>→<i>R</i><sup>3</sup> be a map defined as <i>T</i>(<i>x, y</i>)=(<i>x, y, x+y</i>). We find the rank and nullity of <i>T</i>. One can easily verify that <i>T</i> is a linear transformation. Now, consider the standard basis of <i>R</i><sup>2</sup>. Then <i>T</i>(1, 0)=(1, 0, 1) and <i>T</i>(0, 1)=(0, 1, 1). Thus the range(<i>T</i>) is a subspace of <i>R</i><sup>3</sup> spanned by the vectors (1, 0, 1) and (0, 1, 1). These vectors are linearly independent which implies that rank(<i>T</i>)=2. By rank-nullity theorem, <i>ρ</i>(<i>T</i>) + <i>η</i>(<i>T</i>) =Dim(<i>R</i><sup>2</sup>). This implies that <i>η</i>(<i>T</i>)=2-2=0. Thus nullity of <i>T</i> is zero. Alternatively, to find the nullity, notice that null space <i>T</i>= {(0, 0)}.
