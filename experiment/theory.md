#### 1. Row and column vector:
Let A be a matrix of order m×n. Then there are m rows and n columns. Each row gives a matrix of order 1×n and is known as a row vector. Similarly, each column gives a n×1 matrix and is known as a column vector. A row vector can be considered as an element of R<sup>n</sup> and column vector can be considered as an element of R<sup>m</sup>.
#### 2. Null space	
##### 2.1. Null space of a linear transformation: 
Let V and W be vector spaces over the field R and let T:V→W be a linear transformation. Then the null space of T is defined as the set of vectors x&isin;V such that T(x)=0 and is also known as kernel of T. It is denoted by N(T) or ker(T). Thus N(T)={ x&isin;V|T(x)=0}.
##### 2.2. Null space of a matrix: 
Null space of a matrix A of order m×n consists of all the column vectors X such that AX=0. 
##### 2.3. Nullity: 
Dimension of the null space of a linear transformation T (or a matrix A) is called the nullity, which is denoted by η(T) (or η(A)).
##### 2.4. Examples:
(i). Consider the linear transformation T:R<sup>2</sup>→R<sup>2</sup> such that T(x, y)=(x, -y), where x, y&isin;R. Then nullity of T is zero because its null space is {(0, 0)}. <br>
(ii). Consider the linear transformation T:R<sup>2</sup>→R<sup>2</sup> such that T(x, y)=(x, 0), where x, y&isin;R. Then nullity of T is one because its null space is {(0, α): α&isin;R}, where α&isin;R. <br>
(iii). Nullity of the zero transformation is 0. <br>
(iv). Let A= be a matrix of order 2×2. Then nullity of A is zero because its null space is {(0, 0 <br>
(v). Let A=, where a, b are non-zero real numbers, be a matrix of order 2×2. Then nullity of A is two because its null space is {(a, b): a, b&isin;R}. <br>
#### 3. Range: 
Let V and W be vector spaces over a field R. Let T:V→W be a linear transformation. Then the range of T is defined as set of vectors α&isin;W such that α=T(x), for some x&isin;V which is denoted by R(T). Thus R(T)={T(x)&isin;V : x&isin;V}. 
##### 3.1. Rank: 
Dimension of range of a linear transformation T is called the rank, which is denoted by ρ(T). Rank of a matrix A is the maximal number of linearly independent row or column vectors which is denoted by ρ(A).
##### 3.2. Remark: 
Rank (or nullity) of a matrix is same as the rank (or nullity) of the linear transformation associated with the matrix and vice-versa.
##### 3.3. Examples:
(i). Consider the linear transformation T:R<sup>2</sup>→R<sup>2</sup> such that T(x, y)=(x, -y), where x, y&isin;R. Then rank of T is 2 because its range is {(α, β): α, β&isin;R}. <br>
(ii). Consider the linear transformation T:R<sup>2</sup>→R<sup>2</sup> such that T(x, y)=(x, 0), where x, y&isin;R. Then rank of T is one because its range is {(α, 0): α&isin;R}.<br>
(iii). Rank of the zero transformation is 0. <br>
(iv). Let A= 

$$\begin{pmatrix}a & b \\\ c & d\end{pmatrix}$$

be a matrix of order 2×2. Then rank of A is 0 because set of row vectors is {(0, 0)} which is linearly dependent. <br>
(v). Let A=

$$\begin{pmatrix}0 & 0 \\\ 0 & 0\end{pmatrix}$$

where a, b are non-zero real numbers, be a matrix of order 2×2. Then nullity of A is two because its null space is {(a, b): a, b&isin;R}.

#### 4. Rank-Nullity theorem: 
Let V and W be finite dimensional vector spaces over R and let T:V→W be a linear transformation. Then ρ(T)+η(T)=Dim V.
##### 4.1. Example: 
Let T:R<sup>2</sup>→R<sup>3</sup> be a map defined as T(x, y)=(x, y, x+y). We find the rank and nullity of T. One can easily verify that T is a linear transformation. Now, consider the standard basis of R<sup>2</sup>. Then T(1, 0)=(1, 0, 1) and T(0, 1)=(0, 1, 1). Thus the range(T) is a subspace of R<sup>3</sup> spanned by the vectors (1, 0, 1) and (0, 1, 1). These vectors are linearly independent which implies that rank(T)=2. By rank-nullity theorem, ρ(T) + η(T) =Dim(R<sup>2</sup>). This implies that η(T)=2-2=0. Thus nullity of T is zero. Alternatively, to find the nullity, notice that null space T= {(0, 0)}.
