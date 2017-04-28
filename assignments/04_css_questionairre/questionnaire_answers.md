1. Explain CSS “cascade” including: importance, specificity and inheritance. Use code examples to illustrate each of these concepts.

  CSS "cascade" refers to the hierarchy and interaction of rules that apply to html elements. Styles cascade down from general rules to very  specific rules. This enables authors to combine several style sheets and resolve conflicts between them. Rules "cascade" through the html content unless iterrupted by a following rule in a stylesheet or in an embedded tag.

      h1 {
        color: red;
      }

      h1 {
        color: blue;
      }

  Importance: Because browsers and authors apply multiple style sheets to html, the concept of importance establishes a hierarchy to distinguish between conflicting rules. This is the ascending order of importance:

      1. User agent declarations,
      2. User declarations,
      3. Author declarations,
      4. Author !important declarations,
      5. User !important declarations.


  Specificity: The principle of specificty determines which properties will be applied when two rules conflict. "Once importance is established, cascade applies a specificity to it. If one rule is more important than another, it overrides it." 

    body{
      color: green;
    }

    p {
      color: blue;
    }

    <p style="color:red">

  In the example above, the paragraph stled inline will be red, because this rule overrides the style for all paragraphs and the style for all text in the html body.



  Inheritance: "Inheritance is a way of propagating property values from parent elements to their children." CSS determines which properties are inherited. Some children inherit properties from parent elements by default, while others do not. If an element by default does not inherit properties, you can force them to by using the "inherit" value. Example from Mozilla Developer that would make all H2s green, except those in the sidebar, which would inherit their attirbutes from their parent in the container:

    h2 {
      color: green;
    }

    #sidebar h2 {
      color: inherit;
    }
  

2. What is the CSS float property and what is it used for?

    The float property specifies whether or not a box (an element) should float. Elements around the element will flow around it instead of stack, as they do unless otherwise indicated. According to W3Schools, this can be avoided by using the clearfix hack. The basic css looks like this:

      img {
        float: none|left|right|initial|inherit;
      }

    Here's how it can be used to float a dropcap, so the rest of the paragraph flows around it (from W3Schools):

      [CSS]
      span {
        float: left;
        width: 0.7em;
        font-size: 300%
        line-height: 80%
        font-family: Helvetica;
      }

      [HTML]
      <p><span>A</span>fox jumped over the lazy dog. Text text text text. Text text text text text text text.</p>

    Here's how it can be used to float a navigation menu:
      
    [CSS]
    /*This rule defines the style of the unordered list, most importantly that list items float to the left, or in other words, they do not stack on top of each other and intead flow around eachother.*/
      ul {
        float: left;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

    /*This rule gives a background to all the navigation links and further determines their properties like color and spacing */
      a {
        float: left; 
        width: 6em;
        text-decoration: none;
        color: white;
        background-color: purple;
        padding: 0.2em 0.6em;
        border-right: 1px solid white;     
      }

      a:hover {
        background-color: #ff9933;
      }

    /*li elements will be diaplyed as inline elements, so there wil be no line break before or after the element*/

      li {
        display: inline;
      }


    [HTML]
      <ul>
        <li><a href="#">Link one</a></li>
        <li><a href="#">Link two</a></li>
        <li><a href="#">Link three</a></li>
        <li><a href="#">Link four</a></li>
      </ul>

  

3. What is CSS Flexbox and what can it be used for?

  Flexbox layout is most appropriate for the components of an application, and other small-scale layouts. It is "direction-agnostic" as oppsed to the block layout (vertically-biased) or inline layout (horizontally-biased). The CSS Flexbox model more cleanly defines elements that change orientation, resize, shrink, or stretch as the device (user agent) changes or the oreintation of the sceen changes from verticl to horizontal. The flex container allows elements to predicatably expand to fill available free space or shrinks them to prevent overflow. Flexbox margins do not collapse with the margins of its contents. 

  To create a Flex container, the parent element in which flex items are contained:
    display: inline-flex
    display: flex

  Every flex box layout is structred by two axis: 
    1. Main Axis. Axis along which flex items follow eachother.
    2. Corss Axis. Axis that is perpendicular to the main axis. 

  Here's how to define them:
    Flex-direction: Establishes the main axis.
    justify-content: Defines ho felx items are laid out along the main axis of the current line.
    align-items: defines the default for how flex items are laid out along the cross axis on the current line.
    align-self: defines how a single flex item is aligned on the cross axis, and overrides the default established by align-items. 

  Here's an example of basic flex style and html, pulled from Mozilla Developer:
    [CSS]
      
      .flex {
    /*Basic styling*/
        width: 350px;
        height: 200px;
        border: 1px solid #000;
        font: 12px Helvetica;
    /*flexbox setup*/
        display: flex;
        flex-direction: row;
      }

      .flex > div {
        flex: 1 1 auto;
        width: 30px; 
    /*To make the transition work smoothly. (Transitions to/from "width:auto" are buggy in Gecko and Webkit, at least. See http://bugzil.la/731886 for more info.) */
      }

    /*colors*/
      .flex > div:nth-child(1) {background: #000}
      .flex > div:nth-child(1) {background: #fff}
      .flex > div:nth-child(1) {background: #666}
      
      .flex > div:hover {
        width: 200px;
      }


    [HTML]
      <p>Flexbox nuovo</p>
        <div class="flex">
        <div>uno</div>
        <div>due</div>
        <div>tre</div>
      </div>

  Really useful article and examples: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes




