Notice that number only increments once per click!

Setting state only changes it for the next render. During the first render, number was 0.
This is why, in that render’s onClick handler, the value of number is still 0 even after
setNumber(number + 1) was called:

Here is what this button’s click handler tells React to do:

setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.
setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.
setNumber(number + 1): number is 0 so setNumber(0 + 1).
React prepares to change number to 1 on the next render.
Even though you called setNumber(number + 1) three times, in this render’s event handler number is always 0, so you set the state to 1 three times. This is why, after your event handler finishes, React re-renders the component with number equal to 1 rather than 3