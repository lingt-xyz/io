---
title: COMP 352
---

2017 Winter


## Outline

### Instructor
* Instructor: Dr. Dhrubajyoti Goswami
* Office: EV 003.145
* Email: goswami@cs.concordia.ca

### Textbook
Michael T. Goodrich, Roberto Tamassia, and Michael H. Goldwasser. Data Structures and Algorithms in Java (Sixth Edition). John Wiley and Sons (2014).

---

## Ch04: Analysis

### Experimental Studies

* Limitations of Experiments

### Theoretical Analysis

* Pseudocode
    * High-level description of an algorithm.
    * More structured than English prose.
    * Less detailed than a program.
    * Preferred notation for describing algorithms
    * Hides program design issues.

    e.g.:

    {% raw %}$$

    \begin{align}
    &\text{Algorithm }arrayMax(A, n)\\\\
    &\text{Input: array }A\text{ of }n\text{ integers}\\
    &\text{Output: maximum element of }A\\\\
    &currentMax ← A[0]\\
    &\text{for }i ← 1\text{ to }n − 1\text{ do}\\
    &    \qquad\text{if }A[i] > currentMax\text{ then }\\
    &        \qquad\qquad currentMax ← A[i]\\
    &\text{return }currentMax\\
    &\end{align}

    $${% endraw %}

* Seven Important Functions
    * Constant ≈ {% raw %}$$ 1$${% endraw %}
    * Logarithmic ≈ {% raw %}$$ \log n$${% endraw %}
    * Linear ≈ {% raw %}$$ n$${% endraw %}
    * N-Log-N ≈ {% raw %}$$ n\times \log n$${% endraw %}
    * Quadratic ≈ {% raw %}$$ n^2$${% endraw %}
    * Cubic ≈ {% raw %}$$ n^3$${% endraw %}
    * Exponential ≈ {% raw %}$$ 2^n$${% endraw %}

<svg id="chart" width="800" height="500" xmlns="http://www.w3.org/2000/svg">
    <!-- horrible region -->
    <path d="M50 450 L 50 0 L 800 0 L 800 450 Z" fill="#ff8989"></path>
    <!-- bad region -->
    <path d="M50 450 L 800 0 L 800 450 Z" fill="#FFC543"></path>
    <!-- fair region -->
    <path d="M50 450 L 800 450 L 800 330 Z" fill="yellow"></path>
    <!-- good region -->
    <path d="M50 450 L 800 450 L 800 410 Z" fill="#C8EA00"></path>
    <!-- excellent region -->
    <path d="M50 450 L 800 450 L 800 440 Z" fill="#53d000"></path>

    <!-- axes -->
    <path d="M50 0 L 50 450 L 800 450" fill="transparent" stroke="black" stroke-width="2"></path>

    <path d="M50 448 L 800 448" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="675" y="438" fill="black">O(log n), O(1)</text>

    <path d="M50 450 L 800 400" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="760" y="390" fill="black">O(n)</text>

    <path d="M50 450 Q 400 350, 800 150" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="630" y="190" fill="black">O(n log n)</text>

    <path d="M50 450 Q 180 380, 250 0" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="260" y="30" fill="black">O(n^2)</text>

    <path d="M50 450 C 100 430, 120 350, 120 0" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="125" y="20" fill="black">O(2^n)</text>

    <path d="M50 450 C 80 450, 80 350, 80 0" fill="transparent" stroke="black" stroke-width="2"></path>
    <text x="80" y="20" fill="black">O(n!)</text>

    <text x="0" y="0" transform="translate(30 230) rotate(-90)" style="dominant-baseline: middle; text-anchor: middle; font-size:20px; color: #555; font-size:20px; color: #555; font-style: italic;" fill="black">Operations</text>
    <text x="0" y="0" transform="translate(420 470)" style="dominant-baseline: middle; text-anchor: middle; font-size:20px; color: #555; font-style: italic;" fill="black">Elements</text>
</svg>

  Reference: [Big-O Cheat Sheet](http://bigocheatsheet.com/)

* Primitive Operations
* Counting Primitive Operations

### Big-Oh Notation

Given functions {% raw %}$$f(n)$${% endraw %} and {% raw %}$$g(n)$${% endraw %}, we say that {% raw %}$$f(n)$${% endraw %} is {% raw %}$$O(g(n))$${% endraw %} if there are positive constants {% raw %}$$c$${% endraw %} and {% raw %}$$n_0$${% endraw %} such that

{% raw %}$$
f(n)\leqslant c\times g(n)\text{ for }n\geqslant n_0
$${% endraw %}


* If {% raw %}$$ f(n)$${% endraw %} is {% raw %}$$ O(g(n))$${% endraw %} then it is bounded above (cannot get bigger than) some constant times {% raw %}$$ g(n)$${% endraw %}.
* e.g.: {% raw %}$$ f(n)=2n+10 \in O(n)$${% endraw %}
* e.g.: {% raw %}$$ f(n)=3n^4+6n^3+10n^2+5n+4 \in O(n^4)$${% endraw %}

### Big-Omega

Given functions {% raw %}$$f(n)$${% endraw %} and {% raw %}$$g(n)$${% endraw %}, we say that {% raw %}$$f(n)$${% endraw %} is {% raw %}$$\Omega (g(n))$${% endraw %} if there are positive constants {% raw %}$$c$${% endraw %} and {% raw %}$$n_0$${% endraw %} such that

{% raw %}$$
f(n)\geqslant c\times g(n)\text{ for }n\geqslant n_0
$${% endraw %}

### Big-Theta

Given functions {% raw %}$$f(n)$${% endraw %} and {% raw %}$$g(n)$${% endraw %}, we say that {% raw %}$$f(n)$${% endraw %} is {% raw %}$$\Theta (g(n))$${% endraw %} if there are positive constants {% raw %}$$c$${% endraw %} and {% raw %}$$n_0$${% endraw %} such that

{% raw %}$$
c_1\times g(n) \leqslant f(n)\leqslant c_2\times g(n)\text{ for }n\geqslant n_0
$${% endraw %}

### Common Data Structure Operations

<table class="table table-bordered table-striped table-code">

    <tbody><tr>
      <th>Data Structure</th>
      <th colspan="8">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="4">Average</th>
      <th colspan="4">Worst</th>
      <th>Worst</th>
    </tr>
    <tr>
      <th></th>
      <th>Access</th>
      <th>Search</th>
      <th>Insertion</th>
      <th>Deletion</th>
      <th>Access</th>
      <th>Search</th>
      <th>Insertion</th>
      <th>Deletion</th>
      <th></th>
    </tr>

    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Array_data_structure">Array</a></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack</a></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">Queue</a></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists">Singly-Linked List</a></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Doubly_linked_list">Doubly-Linked List</a></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="yellow">Θ(n)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="green">O(1)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Skip_list">Skip List</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="orange">O(n log(n))</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Hash_table">Hash Table</a></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="green">Θ(1)</code></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Binary_search_tree">Binary Search Tree</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Cartesian_tree">Cartesian Tree</a></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/B_tree">B-Tree</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Red-black_tree">Red-Black Tree</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Splay_tree">Splay Tree</a></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="gray">N/A</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/AVL_tree">AVL Tree</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/K-d_tree">KD Tree</a></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow-green">Θ(log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>

</tbody></table>

### Array Sorting Algorithms

<table class="table table-bordered table-striped table-code">
    <tbody><tr>
      <th>Algorithm</th>
      <th colspan="3">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th></th>
      <th>Best</th>
      <th>Average</th>
      <th>Worst</th>
      <th>Worst</th>
    </tr>

    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Quicksort">Quicksort</a></td>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="yellow-green">O(log(n))</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Merge_sort">Mergesort</a></td>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="orange">O(n log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Timsort">Timsort</a></td>
      <td><code class="yellow">Ω(n)</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="orange">O(n log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Heapsort">Heapsort</a></td>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="orange">O(n log(n))</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a></td>
      <td><code class="yellow">Ω(n)</code></td>
      <td><code class="red">Θ(n^2)</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a></td>
      <td><code class="yellow">Ω(n)</code></td>
      <td><code class="red">Θ(n^2)</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></td>
      <td><code class="red">Ω(n^2)</code></td>
      <td><code class="red">Θ(n^2)</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Tree_sort">Tree Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Shellsort">Shell Sort</a></td>
      <td><code class="orange">Ω(n log(n))</code></td>
      <td><code class="red">Θ(n(log(n))^2)</code></td>
      <td><code class="red">O(n(log(n))^2)</code></td>
      <td><code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Only for integers. k is a number of buckets" href="http://en.wikipedia.org/wiki/Bucket_sort">Bucket Sort</a></td>
      <td><code class="green">Ω(n+k)</code></td>
      <td><code class="green">Θ(n+k)</code></td>
      <td><code class="red">O(n^2)</code></td>
      <td><code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Constant number of digits 'k'" href="http://en.wikipedia.org/wiki/Radix_sort">Radix Sort</a></td>
      <td><code class="green">Ω(nk)</code></td>
      <td><code class="green">Θ(nk)</code></td>
      <td><code class="green">O(nk)</code></td>
      <td><code class="yellow">O(n+k)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Difference between maximum and minimum number 'k'" href="https://en.wikipedia.org/wiki/Counting_sort">Counting Sort</a></td>
      <td><code class="green">Ω(n+k)</code></td>
      <td><code class="green">Θ(n+k)</code></td>
      <td><code class="green">O(n+k)</code></td>
      <td><code class="yellow">O(k)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Cubesort">Cubesort</a></td>
      <td><code class="yellow">Ω(n)</code></td>
      <td><code class="orange">Θ(n log(n))</code></td>
      <td><code class="orange">O(n log(n))</code></td>
      <td><code class="yellow">O(n)</code></td>
   </tr>

</tbody></table>

---

## Ch05: Recursion

### The Recursion Pattern

* When a method calls itself.
* e.g.: the factorial function:

    {% raw %}$$ n!=1\times2\times3\times \dots \times (n-1) \times n$${% endraw %}

    * Recursive definition:

    {% raw %}$$

    f(n) =
    \begin{cases}
    1,  & \text{if }n=0 \\
    n\times f(n-1), & \text{else}
    \end{cases}

    $${% endraw %}

    * As a Java method:

      ``` java
      // recursive factorial function
      public static int recursiveFactorial(int n){
          if (n==0) {
            return 1;     // base case
          } else {
            return n * recursiveFactorial(n-1); // recursive case
          }
      }
      ```


### Linear Recursion

* Simplest form of recursion, where the method makes at most one recursive call each time it is invoked.

### Tail Recursion

* Tail recursion occurs when a linearly recursive method makes its recursive call as its last step; as in the array reversal method.
* Such methods can be easily converted to non-recursive methods (which saves on some resources).

### Binary Recursion

* Binary recursion occurs whenever there are **two**, and exactly two, recursive calls for each non-base case.


### Fibonacci

* Recursive algorithm (first attempt):

{% raw %}$$

\begin{align}
&\text{Algorithm }binaryFib(k)\\\\
&\text{Input: Nonnegative integer }k\\
&\text{Output: The }k^{th}\text{ Fibonacci number }F_k\\\\
&\text{if }k \leqslant 1\text{ then }\\
&   \qquad\text{return }k\\
&\text{else }\\
&   \qquad\text{return }binaryFib(k - 1) + binaryFib(k - 2)\\
&\end{align}

$${% endraw %}

* A Better Fibonacci Algorithm: use linear recursion instead

{% raw %}$$

\begin{align}
&\text{Algorithm }linearFibonacci(k)\\\\
&\text{Input: Nonnegative integer }k\\
&\text{Output: Pair of Fibonacci numbers }(F_k, F_{k-1})\\\\
&\text{if }k=1\text{ then }\\
&   \qquad\text{return }(k,0)\\
&\text{else }\\
&   \qquad(i, j) = linearFibonacci(k - 1)\\
&\text{return }(i+j,i)\\
&\end{align}

$${% endraw %}

### Multiple Recursion

---

## Ch06: Stacks

### Array-based Stack

### Growable Array-based Stack

* Incremental Strategy: the amortized time of a single push() operation is O(n).
* Doubling Strategy: the amortized time of a single push() operation is O(1).

---

## Ch06: Queues

### Array-based Queue

---

## Ch07: Lists

### LinkedLists and Iterators

### ArrayLists and Sequences

### Growable Array-based Array List

* Incremental Strategy: the amortized time of an add() operation is O(n).
* Doubling Strategy: the amortized time of an add() operation is O(1).

### Privacy issue

---

## Ch08: Trees

### Tree Traversal

* Preorder Traversal
* Postorder Traversal
* Inorder Traversal
* Euler Tour Traversal
  * on the left (preorder – root → left → right)
  * from below (inorder – left → root → right)
  * on the right (postorder – left → right → root)

### Binary Trees
* Linked Structure
* Array-Based

---

## Ch09: Priority Queues

### Sequence-based Priority Queue

### Unsorted List Implementation

### Sorted List Implementation

### Selection-Sort

### Insertion-Sort

### In-place Insertion-Sort

---

## Ch09: Heap
A heap is a binary tree storing keys at its nodes and satisfying the following properties:

1. Heap-Order: for every internal node v other than the root, *key(v) ≥ key(parent(v))*

2. Complete Binary Tree: let *h* be the height of the heap
    * for *i = 0, ... , h - 1*, there are 2^i nodes of depth *i*
    * at depth *h - 1*, the internal nodes are to the left of the external nodes

3. The last node of a heap is the rightmost node of maximum depth

---

## Ch10: HashTables

### Hash Functions and Hash Tables

### Hash Codes

### Collision Handling

### Double Hashing

---

## Ch10: Maps

### Ordered Maps and Dictionaries


---

## Ch11: 24 Trees

---

## Ch11: Binary Search Trees


---

## Ch11: AVL Trees

---

## Ch12: Divide And Conquer


---

## Ch12: Merge Sort

![merge sort]({{ site.baseurl }}/assets/COMP 352/mergesort.gif "merge sort")

---

## Ch12: Quick Sort

![quick sort]({{ site.baseurl }}/assets/COMP 352/quicksort.gif "quick sort")


---

## Ch12: Sorting Lower Bound

---

## Ch12: Bucket Sort and Radix Sort


---

## Ch14: Graph

---

## Ch14: DFS


---

## Ch14: BFS


---

## Ch14: Digraphs


---

## Ch14: Shortest Path

