Parallax Design with Interactive Background Elements

Usage:
Insert the following for fullscreen background elements:
<div class="bg-content">
	<div class="bg-wrapper center">
		<div id="interactiveContainer">
			...
		</div>
	</div>
</div>

For each background element insert:
<div class="fg-gap"></div>

Write text in:
<div class="fg-text">
   ...
</div>


Explanation:

These are examples of a parallax effects with images only: https://www.w3schools.com/howto/tryhow_css_parallax_demo.htm + https://codepen.io/silvandiepen/full/NOboze However, as we like to have interactive elements in the background, we cannot use the CSS properties "background-image: url(...); background-attachment: fixed;", which are the basis for the W3 schools example. That is why, we use the CSS property "position: fixed" on divs to prevent them from scrolling. Unfortunately, we cannot place fixed divs as child elements of a relative divs, because the overflow is not hidden when the relative div is scrolled out of the viewport. Therefore, we put the fixed divs as parent containers in the background and introduced gaps (CSS property: "pointer-events: none") additional to the divs containing text in the foreground. The problem is that when we have more than one div in the background that the divs are overlapping. By JavaScript, we adjusted the heights of the fixed divs according to the visibility of gaps, so that they do not overlap. However, this solution requires that the fixed divs are in reversed order (so that the last div appears on top) or that the fixed divs are ordered by z-indices. Btw. divs with negative z-indices do not receive any pointer events. To remain flexible and intuitive, i.e. adding an arbitrary number of fixed divs in the right order, we found an alternative solution: We adjusted the CSS property "top" by JavaScript (see parallax.js) and gave it a negative value according to the "top" value of gaps, so that the fixed divs move out of the viewport. As this would move also the child content of the fixed divs, i.e. the interactive elements, out of the viewport, we put the positive "top" value on the child elements. Now, the background fixed divs are correctly clipped. It is possible to introduce different speeds for the background elements: In our example, the first background element does not move but the others scroll up at half foreground speed. In case we want to have smaller gaps, we reduce the height percentages of both the gaps and the fixed divs. The child containers of the fixed div have the CSS properties "height: 100vh; width: 100vw" so that they cover the full screen but theoretically they could be also made smaller. It makes sense to have only fullscreen elements in the background, because otherwise there are white gaps when scrolling.

Author:
Raimund Schn�rer
ETH Z�rich, 2020