

###(1)Answer of First Question:

(i)getElementById:-it catches only one element by its unique id name.
(ii)getElementsByClassName:-it catches all elements having the same specific class name.
(iii)querySelector():-selects the first matching element using CSS selectors.
(iv)querySelectorAll():-it selects all matching elements using CSS selectors.


###(2)Answer of Second Question:

document.createElement() dom Method is used to create a new element.Ex:
const creatingNewElement=document.createElement('section');
For inserting  element property .innerText or .innerHTML is used .Ex:
creatingNewElement.innerHTML=`
<p>This is a paragraph</p>`
Then the created element should be kept in html file's element by using  .appendChild() or .append().Ex:
const findParent=document.getElementById('container');
parent.appendChild(creatingNewElement) ;.

###(3)Answer of Third Question:

Event Bubbling:is a concept of bubbling means event event start from the target element and then propagates to its parent elements,one by one , up to the document. 
Working Method:when a button is clicked it reaches its parent element. Event first happens on button.then it bubbles up to the parent then continues upward . 

###(4)Answer of Forth Question:
Event Delegation:it allows to handle events efficiently on multiple child elements by attaching a single event listener to parent element instead of attaching separate listeners to each child.
Importance:it reduces to one listener on parent instead of many listeners on children.Avoids repetitive code for multiple elements.

###(5)Answer of Fifth Question:

preventDefault() stops the default behavior of an element but can not stop event bubbling.
stopPropagation() stops the event bubbling but it does not stop the default behavior.
