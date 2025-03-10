import  { useState, useRef, useEffect } from 'react';
// import React, { useState, useRef, useEffect } from 'react';
// import { Editor, EditorState, Modifier, CompositeDecorator, ContentState, convertToRaw, convertFromRaw } from 'draft-js'; 
// import 'draft-js/dist/Draft.css';



// import React, { useState, useRef, useEffect  } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier, SelectionState, ContentState  } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// import React, { useRef } from 'react';
// import './Home.css';

// const ResizableTextarea = () => {
// //   const textareaRef = useRef(null);



//   return (
//     <div className="container">
//       <textarea  rows="4" cols="50" className="custom-textarea"></textarea>
//       <div className="extra-line-container">
//         <div className="extra-line"></div>
//       </div>
//     </div>
//     // <div className="gradient-textarea">
//     //     <textarea placeholder="Type something..."></textarea>
//     //   </div>
//   );
// };

// export default ResizableTextarea;




{/* <div class="resizable">
<textarea id="w3review" name="w3review">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
<div class="resize-handle"></div> 
</div> */}




// const HighlightTextArea = () => {
//   const [text, setText] = useState('');
//   const [highlightedText, setHighlightedText] = useState('');

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     const lastAtIndex = inputText.lastIndexOf('@');

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex !== -1) {
//         setHighlightedText(beforeAt + '@' + afterAt.slice(0, firstSpaceIndex) + afterAt.slice(firstSpaceIndex));
//       } else {
//         setHighlightedText(beforeAt + '@' + afterAt);
//       }
//     } else {
//       setHighlightedText(inputText);
//     }

//     setText(inputText);
//   };

//   const renderHighlightedText = () => {
//     const parts = highlightedText.split(/(@[^\s]+)/g);

//     return parts.map((part, index) => (
//       <React.Fragment key={index}>
//         {part.startsWith('@') ? <span style={{ backgroundColor: 'yellow' }}>{part}</span> : part}
//       </React.Fragment>
//     ));
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         rows="10"
//         cols="50"
//         style={{ position: 'absolute', opacity: 0, zIndex: 1 }}
//       />
//       <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '500px', height: '200px', border: '1px solid black', padding: '5px' }}>
//         {renderHighlightedText()}
//       </div>
//     </div>
//   );
// };

// export default HighlightTextArea;


// import React, { useState } from 'react';

// const HighlightTextArea = () => {
//   const [text, setText] = useState('');
//   const [highlightedText, setHighlightedText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dropdownOptions] = useState(['Alice kam', 'Bob MAr', 'Charlie cas']);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     const cursorPosition = e.target.selectionStart;
//     const lastAtIndex = inputText.lastIndexOf('@', cursorPosition - 1);

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1, cursorPosition);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex === -1) {
//         setShowDropdown(true);
//         const textareaRect = e.target.getBoundingClientRect();
//         const caretCoordinates = getCaretCoordinates(e.target, cursorPosition);
//         setDropdownPosition({
//           top: textareaRect.top + caretCoordinates.top + 20,
//           left: textareaRect.left + caretCoordinates.left,
//         });
//       } else {
//         setShowDropdown(false);
//       }
//     } else {
//       setShowDropdown(false);
//     }

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex !== -1) {
//         setHighlightedText(beforeAt + '@' + afterAt.slice(0, firstSpaceIndex) + afterAt.slice(firstSpaceIndex));
//       } else {
//         setHighlightedText(beforeAt + '@' + afterAt);
//       }
//     } else {
//       setHighlightedText(inputText);
//     }

//     setText(inputText);
//   };

//   const handleOptionClick = (option) => {
//     const lastAtIndex = text.lastIndexOf('@');
//     const beforeAt = text.slice(0, lastAtIndex + 1);
//     const afterAt = text.slice(lastAtIndex + 1);
//     const firstSpaceIndex = afterAt.indexOf(' ');

//     const updatedText = firstSpaceIndex === -1 ? beforeAt + option + ' ' : beforeAt + option + afterAt.slice(firstSpaceIndex);
//     setText(updatedText);
//     setHighlightedText(updatedText);
//     setShowDropdown(false);
//   };

//   const renderHighlightedText = () => {
//     const parts = highlightedText.split(/(@[^\s]+)/g);

//     return parts.map((part, index) => (
//       <React.Fragment key={index}>
//         {part.startsWith('@') ? <span style={{ backgroundColor: 'yellow' }}>{part}</span> : part}
//       </React.Fragment>
//     ));
//   };

//   const getCaretCoordinates = (element, position) => {
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const style = getComputedStyle(element);

//     [].forEach.call(style, (prop) => {
//       div.style[prop] = style[prop];
//     });

//     div.style.position = 'absolute';
//     document.body.appendChild(div);
//     div.textContent = element.value.substr(0, position);
//     span.textContent = element.value.substr(position) || '.';
//     div.appendChild(span);

//     const coordinates = {
//       top: span.offsetTop + parseInt(style.lineHeight) - element.scrollTop,
//       left: span.offsetLeft,
//     };

//     document.body.removeChild(div);
//     return coordinates;
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         rows="10"
//         cols="50"
//         style={{ position: 'absolute', opacity: 0, zIndex: 1 }}
//       />
//       <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '500px', height: '200px', border: '1px solid black', padding: '5px' }}>
//         {renderHighlightedText()}
//       </div>
//       {showDropdown && (
//         <ul style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, backgroundColor: 'white', border: '1px solid black', listStyle: 'none', padding: '5px' }}>
//           {dropdownOptions.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer', padding: '5px' }}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HighlightTextArea;


// import React, { useState } from 'react';

// const HighlightTextArea = () => {
//   const [text, setText] = useState('');
//   const [highlightedText, setHighlightedText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dropdownOptions] = useState(['Alice Kam', 'Bob Mar', 'Charlie Cas']);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     const cursorPosition = e.target.selectionStart;
//     const lastAtIndex = inputText.lastIndexOf('@', cursorPosition - 1);

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1, cursorPosition);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex === -1) {
//         setShowDropdown(true);
//         const textareaRect = e.target.getBoundingClientRect();
//         const caretCoordinates = getCaretCoordinates(e.target, cursorPosition);
//         setDropdownPosition({
//           top: textareaRect.top + caretCoordinates.top + 20,
//           left: textareaRect.left + caretCoordinates.left,
//         });
//       } else {
//         setShowDropdown(false);
//       }
//     } else {
//       setShowDropdown(false);
//     }

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex !== -1) {
//         setHighlightedText(beforeAt + '@' + afterAt.slice(0, firstSpaceIndex) + afterAt.slice(firstSpaceIndex));
//       } else {
//         setHighlightedText(beforeAt + '@' + afterAt);
//       }
//     } else {
//       setHighlightedText(inputText);
//     }

//     setText(inputText);
//   };

//   const handleOptionClick = (option) => {
//     const lastAtIndex = text.lastIndexOf('@');
//     const beforeAt = text.slice(0, lastAtIndex + 1);
//     const afterAt = text.slice(lastAtIndex + 1);
//     const firstSpaceIndex = afterAt.indexOf(' ');

//     const updatedText = firstSpaceIndex === -1 ? beforeAt + option + ' ' : beforeAt + option + afterAt.slice(firstSpaceIndex);
//     setText(updatedText);
//     setHighlightedText(updatedText);
//     setShowDropdown(false);
//   };

//   const renderHighlightedText = () => {
//     const parts = highlightedText.split(/(@[^\s]+[\s][^\s]+)/g);

//     return parts.map((part, index) => (
//       <React.Fragment key={index}>
//         {part.match(/@[^\s]+[\s][^\s]+/) ? <span style={{ color: 'blue' }}>{part.slice(1)}</span> : part}
//       </React.Fragment>
//     ));
//   };

//   const getCaretCoordinates = (element, position) => {
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const style = getComputedStyle(element);

//     [].forEach.call(style, (prop) => {
//       div.style[prop] = style[prop];
//     });

//     div.style.position = 'absolute';
//     document.body.appendChild(div);
//     div.textContent = element.value.substr(0, position);
//     span.textContent = element.value.substr(position) || '.';
//     div.appendChild(span);

//     const coordinates = {
//       top: span.offsetTop + parseInt(style.lineHeight) - element.scrollTop,
//       left: span.offsetLeft,
//     };

//     document.body.removeChild(div);
//     return coordinates;
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         rows="10"
//         cols="50"
//         style={{ position: 'absolute', opacity: 0, zIndex: 1 }}
//       />
//       <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '500px', height: '200px', border: '1px solid black', padding: '5px' }}>
//         {renderHighlightedText()}
//       </div>
//       {showDropdown && (
//         <ul style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, backgroundColor: 'white', border: '1px solid black', listStyle: 'none', padding: '5px' }}>
//           {dropdownOptions.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer', padding: '5px' }}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HighlightTextArea;


// import React, { useState } from 'react';

// const HighlightTextArea = () => {
//   const [text, setText] = useState('');
//   const [highlightedText, setHighlightedText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dropdownOptions] = useState(['Alice Kam', 'Bob Mar', 'Charlie Cas']);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     const cursorPosition = e.target.selectionStart;
//     const lastAtIndex = inputText.lastIndexOf('@', cursorPosition - 1);

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1, cursorPosition);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex === -1) {
//         setShowDropdown(true);
//         const textareaRect = e.target.getBoundingClientRect();
//         const caretCoordinates = getCaretCoordinates(e.target, cursorPosition);
//         setDropdownPosition({
//           top: textareaRect.top + caretCoordinates.top + 20,
//           left: textareaRect.left + caretCoordinates.left,
//         });
//       } else {
//         setShowDropdown(false);
//       }
//     } else {
//       setShowDropdown(false);
//     }

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex !== -1) {
//         setHighlightedText(beforeAt + '@' + afterAt.slice(0, firstSpaceIndex) + afterAt.slice(firstSpaceIndex));
//       } else {
//         setHighlightedText(beforeAt + '@' + afterAt);
//       }
//     } else {
//       setHighlightedText(inputText);
//     }

//     setText(inputText);
//   };

//   const handleOptionClick = (option) => {
//     const lastAtIndex = text.lastIndexOf('@');
//     const beforeAt = text.slice(0, lastAtIndex + 1);
//     const afterAt = text.slice(lastAtIndex + 1);
//     const firstSpaceIndex = afterAt.indexOf(' ');

//     const updatedText = firstSpaceIndex === -1 ? beforeAt + option + ' ' : beforeAt + option + afterAt.slice(firstSpaceIndex);
//     setText(updatedText);
//     setHighlightedText(updatedText);
//     setShowDropdown(false);
//   };

//   const renderHighlightedText = () => {
//     const parts = highlightedText.split(/(@[^\s]+[\s][^\s]+)/g);

//     return parts.map((part, index) => (
//       <React.Fragment key={index}>
//         {part.match(/@[^\s]+[\s][^\s]+/) ? <span style={{ color: 'blue' }}>{part}</span> : part}
//       </React.Fragment>
//     ));
//   };

//   const getCaretCoordinates = (element, position) => {
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const style = getComputedStyle(element);

//     [].forEach.call(style, (prop) => {
//       div.style[prop] = style[prop];
//     });

//     div.style.position = 'absolute';
//     document.body.appendChild(div);
//     div.textContent = element.value.substr(0, position);
//     span.textContent = element.value.substr(position) || '.';
//     div.appendChild(span);

//     const coordinates = {
//       top: span.offsetTop + parseInt(style.lineHeight) - element.scrollTop,
//       left: span.offsetLeft,
//     };

//     document.body.removeChild(div);
//     return coordinates;
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         rows="10"
//         cols="50"
//         style={{ position: 'absolute', opacity: 0, zIndex: 1 }}
//       />
//       <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '500px', height: '200px', border: '1px solid black', padding: '5px' }}>
//         {renderHighlightedText()}
//       </div>
//       {showDropdown && (
//         <ul style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, backgroundColor: 'white', border: '1px solid black', listStyle: 'none', padding: '5px' }}>
//           {dropdownOptions.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer', padding: '5px' }}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HighlightTextArea;


// import React, { useState, useRef, useEffect } from 'react';

// const HighlightTextArea = () => {
//   const [text, setText] = useState('');
//   const [highlightedText, setHighlightedText] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dropdownOptions] = useState(['Alice Kam', 'Bob Mar', 'Charlie Cas']);
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
//   const textareaRef = useRef(null);

//   const handleChange = (e) => {
//     const inputText = e.target.value;
//     const cursorPosition = e.target.selectionStart;
//     const lastAtIndex = inputText.lastIndexOf('@', cursorPosition - 1);

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1, cursorPosition);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex === -1) {
//         setShowDropdown(true);
//         const textareaRect = e.target.getBoundingClientRect();
//         const caretCoordinates = getCaretCoordinates(e.target, cursorPosition);
//         setDropdownPosition({
//           top: textareaRect.top + caretCoordinates.top + 20,
//           left: textareaRect.left + caretCoordinates.left,
//         });
//       } else {
//         setShowDropdown(false);
//       }
//     } else {
//       setShowDropdown(false);
//     }

//     if (lastAtIndex !== -1) {
//       const beforeAt = inputText.slice(0, lastAtIndex);
//       const afterAt = inputText.slice(lastAtIndex + 1);
//       const firstSpaceIndex = afterAt.indexOf(' ');

//       if (firstSpaceIndex !== -1) {
//         setHighlightedText(beforeAt + '@' + afterAt.slice(0, firstSpaceIndex) + afterAt.slice(firstSpaceIndex));
//       } else {
//         setHighlightedText(beforeAt + '@' + afterAt);
//       }
//     } else {
//       setHighlightedText(inputText);
//     }

//     setText(inputText);
//   };

//   const handleOptionClick = (option) => {
//     const lastAtIndex = text.lastIndexOf('@');
//     const beforeAt = text.slice(0, lastAtIndex + 1);
//     const afterAt = text.slice(lastAtIndex + 1);
//     const firstSpaceIndex = afterAt.indexOf(' ');

//     const updatedText = firstSpaceIndex === -1 ? beforeAt + option + ' ' : beforeAt + option + afterAt.slice(firstSpaceIndex);
//     setText(updatedText);
//     setHighlightedText(updatedText);
//     setShowDropdown(false);
//     textareaRef.current.focus();
//   };

//   const renderHighlightedText = () => {
//     const parts = highlightedText.split(/(@[^\s]+[\s][^\s]+)/g);

//     return parts.map((part, index) => (
//       <React.Fragment key={index}>
//         {part.match(/@[^\s]+[\s][^\s]+/) ? <span style={{ color: 'blue' }}>{part}</span> : part}
//       </React.Fragment>
//     ));
//   };

//   const getCaretCoordinates = (element, position) => {
//     const div = document.createElement('div');
//     const span = document.createElement('span');
//     const style = getComputedStyle(element);

//     [].forEach.call(style, (prop) => {
//       div.style[prop] = style[prop];
//     });

//     div.style.position = 'absolute';
//     document.body.appendChild(div);
//     div.textContent = element.value.substr(0, position);
//     span.textContent = element.value.substr(position) || '.';
//     div.appendChild(span);

//     const coordinates = {
//       top: span.offsetTop + parseInt(style.lineHeight) - element.scrollTop,
//       left: span.offsetLeft,
//     };

//     document.body.removeChild(div);
//     return coordinates;
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       <textarea
//         ref={textareaRef}
//         value={text}
//         onChange={handleChange}
//         rows="10"
//         cols="50"
//         style={{ position: 'relative', zIndex: 2, background: 'transparent', color: 'transparent', caretColor: 'black' }}
//       />
//       <div style={{ position: 'absolute', top: 0, left: 0, whiteSpace: 'pre-wrap', wordWrap: 'break-word', width: '500px', height: '200px', border: '1px solid black', padding: '5px', pointerEvents: 'none', zIndex: 1 }}>
//         {renderHighlightedText()}
//       </div>
//       {showDropdown && (
//         <ul style={{ position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, backgroundColor: 'white', border: '1px solid black', listStyle: 'none', padding: '5px' }}>
//           {dropdownOptions.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)} style={{ cursor: 'pointer', padding: '5px' }}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HighlightTextArea;


// import React, { useState } from 'react';

// const MentionComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [mentionSuggestions, setMentionSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     // Detect if @ is typed and start fetching suggestions
//     const mentionIndex = value.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       setMentionStartIndex(mentionIndex);
//       const query = value.substring(mentionIndex + 1).toLowerCase();
//       fetchMentionSuggestions(query);
//     } else {
//       setMentionStartIndex(-1);
//       setShowSuggestions(false);
//     }
//   };

//   const fetchMentionSuggestions = (query) => {
//     // Simulate fetching suggestions based on the query
//     const suggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas']
//                           .filter(suggestion => suggestion.toLowerCase().includes(query));
//     setMentionSuggestions(suggestions);
//     setShowSuggestions(true);
//   };

//   const handleSuggestionClick = (mention) => {
//     const newValue = inputValue.slice(0, mentionStartIndex) + mention + ' ' + inputValue.slice(mentionStartIndex);
//     setInputValue(newValue);
//     setShowSuggestions(false);
//     setMentionStartIndex(-1);
//   };

//   return (
//     <div>
//       <textarea
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type @ to mention someone..."
//       />
//       {showSuggestions && (
//         <ul>
//           {mentionSuggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(mention)}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MentionComponent;


// import React, { useState } from 'react';


// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     const newContentState = Modifier.replaceText(
//       contentState,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       mention + ' ',
//       null
//     );

//     setEditorState(
//       EditorState.push(editorState, newContentState, 'insert-characters')
//     );
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MentionComponent;


// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;


// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;



// import React, { useState } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [messages, setMessages] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentText = contentState.getPlainText();

//     if (editIndex >= 0) {
//       const updatedMessages = messages.map((msg, index) =>
//         index === editIndex ? contentText : msg
//       );
//       setMessages(updatedMessages);
//       setEditIndex(-1);
//     } else {
//       setMessages([...messages, contentText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const contentState = editorState.getCurrentContent();
//     const newContentState = Modifier.replaceText(contentState, editorState.getSelection(), messages[index]);
//     setEditorState(EditorState.push(editorState, newContentState, 'change-block-data'));
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
//             <span>{msg}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;


// import React, { useState } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier, ContentState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [messages, setMessages] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentText = contentState.getPlainText();

//     if (editIndex >= 0) {
//       const updatedMessages = messages.map((msg, index) =>
//         index === editIndex ? contentText : msg
//       );
//       setMessages(updatedMessages);
//       setEditIndex(-1);
//     } else {
//       setMessages([...messages, contentText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const message = messages[index];

//     // Create a new content state with the message text
//     const contentState = ContentState.createFromText(message);

//     // Convert the plain text to Draft.js content state with entities
//     const decorator = createDecorator();
//     const decoratedContent = decorator(contentState);

//     // Set the new editor state with the decorated content
//     const newEditorState = EditorState.createWithContent(decoratedContent);
//     setEditorState(newEditorState);

//     // Set the edit index to indicate which message is being edited
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
//             <span>{msg}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;



// import React, { useState } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [messages, setMessages] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentText = contentState.getPlainText();

//     if (editIndex >= 0) {
//       const updatedMessages = messages.map((msg, index) =>
//         index === editIndex ? contentText : msg
//       );
//       setMessages(updatedMessages);
//       setEditIndex(-1);
//     } else {
//       setMessages([...messages, contentText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const message = messages[index];

//     // Find mentions in the message
//     const mentions = mentionSuggestions.filter((mention) =>
//       message.includes('@' + mention)
//     );

//     // Create a new EditorState with mentions highlighted
//     let newEditorState = EditorState.createEmpty(createDecorator());
//     mentions.forEach((mention) => {
//       const contentState = newEditorState.getCurrentContent();
//       const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//       const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//       const newContentState = Modifier.replaceText(
//         contentStateWithEntity,
//         contentState.getSelectionAfter(),
//         '@' + mention + ' ',
//         null,
//         entityKey
//       );

//       newEditorState = EditorState.push(newEditorState, newContentState, 'insert-characters');
//     });

//     setEditorState(newEditorState);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
//             <span>{msg}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;


// import React, { useState, useEffect } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier, convertFromRaw, convertToRaw } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [messages, setMessages] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

  

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentText = contentState.getPlainText();

//     if (editIndex >= 0) {
//       const updatedMessages = messages.map((msg, index) =>
//         index === editIndex ? contentText : msg
//       );
//       setMessages(updatedMessages);
//       setEditIndex(-1);
//     } else {
//       setMessages([...messages, contentText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const message = messages[index];

//     // Create a new EditorState with mentions highlighted
//     let newEditorState = EditorState.createEmpty(createDecorator());

//     // Find and apply mentions in the message
//     mentionSuggestions.forEach((mention) => {
//       const mentionIndex = message.indexOf('@' + mention);
//       if (mentionIndex !== -1) {
//         const contentState = newEditorState.getCurrentContent();
//         const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//         const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//         const newContentState = Modifier.replaceText(
//           contentStateWithEntity,
//           contentState.getSelectionAfter(),
//           '@' + mention + ' ',
//           null,
//           entityKey
//         );

//         newEditorState = EditorState.push(newEditorState, newContentState, 'insert-characters');
//       }
//     });

//     // Apply remaining text as plain text
//     const remainingText = message.replace(/@\w+\s?/g, '');
//     const contentState = newEditorState.getCurrentContent();
//     const selectionState = newEditorState.getSelection();
//     const newContentState = Modifier.replaceText(
//       contentState,
//       selectionState,
//       remainingText,
//     );
//     newEditorState = EditorState.push(newEditorState, newContentState, 'insert-characters');

//     setEditorState(newEditorState);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
//             <span>{msg}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;



// import React, { useState } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier } from 'draft-js';

// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [messages, setMessages] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();
//     const startOffset = mentionStartIndex + 1; // Adjusted to start after '@'

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: selectionState.getStartOffset(),
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentText = contentState.getPlainText();

//     if (editIndex >= 0) {
//       const updatedMessages = messages.map((msg, index) =>
//         index === editIndex ? contentText : msg
//       );
//       setMessages(updatedMessages);
//       setEditIndex(-1);
//     } else {
//       setMessages([...messages, contentText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const message = messages[index];

//     // Create a new EditorState with mentions highlighted
//     let newEditorState = EditorState.createEmpty(createDecorator());

//     // Find and apply mentions in the message
//     mentionSuggestions.forEach((mention) => {
//       const mentionIndex = message.indexOf('@' + mention);
//       if (mentionIndex !== -1) {
//         const contentState = newEditorState.getCurrentContent();
//         const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//         const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//         const newContentState = Modifier.replaceText(
//           contentStateWithEntity,
//           contentState.getSelectionAfter(),
//           '@' + mention + ' ',
//           null,
//           entityKey
//         );

//         newEditorState = EditorState.push(newEditorState, newContentState, 'insert-characters');
//       }
//     });

//     // Apply remaining text as plain text
//     const remainingText = message.replace(/@\w+\s?/g, '');
//     const contentState = newEditorState.getCurrentContent();
//     const selectionState = newEditorState.getSelection();
//     const newContentState = Modifier.replaceText(
//       contentState,
//       selectionState,
//       remainingText,
//     );
//     newEditorState = EditorState.push(newEditorState, newContentState, 'insert-characters');

//     setEditorState(newEditorState);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px 0' }}>
//             <span>{msg}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   const { entityKey, contentState } = props;
//   const { mention } = contentState.getEntity(entityKey).getData();
//   return <span style={{ color: 'blue' }}>{'@' + mention}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;



// import React, { useState } from 'react';
// import { Editor, EditorState, CompositeDecorator, Modifier, SelectionState, ContentState } from 'draft-js';


// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [mentions, setMentions] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const plainText = contentState.getPlainText();

//     if (editIndex !== null) {
//       const updatedMentions = [...mentions];
//       updatedMentions[editIndex] = plainText;
//       setMentions(updatedMentions);
//       setEditIndex(null);
//     } else {
//       setMentions([...mentions, plainText]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   const handleEdit = (index) => {
//     const mentionText = mentions[index];
//     const contentState = ContentState.createFromText(mentionText);
//     const newEditorState = EditorState.createWithContent(contentState, createDecorator());
//     setEditorState(newEditorState);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {mentions.map((mention, index) => (
//           <div key={index} style={{ margin: '10px 0' }}>
//             <span>{mention}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;



// const mentionSuggestions = ['Alice Kam', 'Bob Mar', 'Charlie Cas'];

// const MentionComponent = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty(createDecorator()));
//   const [suggestions, setSuggestions] = useState([]);
//   const [mentionStartIndex, setMentionStartIndex] = useState(-1);
//   const [mentions, setMentions] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleChange = (newState) => {
//     const selection = newState.getSelection();
//     const startKey = selection.getStartKey();
//     const startOffset = selection.getStartOffset();
//     const block = newState.getCurrentContent().getBlockForKey(startKey);
//     const text = block.getText().slice(0, startOffset);

//     const mentionIndex = text.lastIndexOf('@');
//     if (mentionIndex !== -1) {
//       const query = text.slice(mentionIndex + 1).toLowerCase();
//       setMentionStartIndex(mentionIndex);
//       setSuggestions(
//         mentionSuggestions.filter((suggestion) =>
//           suggestion.toLowerCase().includes(query)
//         )
//       );
//     } else {
//       setMentionStartIndex(-1);
//       setSuggestions([]);
//     }

//     setEditorState(newState);
//   };

//   const handleMentionClick = (mention) => {
//     const contentState = editorState.getCurrentContent();
//     const selectionState = editorState.getSelection();

//     const startKey = selectionState.getStartKey();
//     const startOffset = mentionStartIndex;
//     const endOffset = selectionState.getStartOffset();

//     // Create the mention entity
//     const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', { mention });
//     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

//     // Apply the mention entity to the selected text
//     const newContentState = Modifier.replaceText(
//       contentStateWithEntity,
//       selectionState.merge({
//         anchorOffset: startOffset,
//         focusOffset: endOffset,
//       }),
//       '@' + mention + ' ',
//       null,
//       entityKey
//     );

//     const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//     setEditorState(EditorState.forceSelection(newEditorState, newContentState.getSelectionAfter()));
//     setSuggestions([]);
//     setMentionStartIndex(-1);
//   };

//   const handleSend = () => {
//     const contentState = editorState.getCurrentContent();
//     const contentStateRaw = convertToRaw(contentState);

//     if (editIndex !== null) {
//       const updatedMentions = [...mentions];
//       updatedMentions[editIndex] = contentStateRaw;
//       setMentions(updatedMentions);
//       setEditIndex(null);
//     } else {
//       setMentions([...mentions, contentStateRaw]);
//     }

//     setEditorState(EditorState.createEmpty(createDecorator()));
//   };

//   console.log(mentions)

//   const handleEdit = (index) => {
//     const contentStateRaw = mentions[index];
//     const contentState = convertFromRaw(contentStateRaw);
//     const newEditorState = EditorState.createWithContent(contentState, createDecorator());
//     setEditorState(newEditorState);
//     setEditIndex(index);
//   };

//   return (
//     <div>
//       <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}>
//         <Editor editorState={editorState} onChange={handleChange} placeholder="Type @ to mention someone..." />
//       </div>
//       {suggestions.length > 0 && (
//         <ul style={{ border: '1px solid #ccc', padding: '10px', listStyleType: 'none', margin: 0 }}>
//           {suggestions.map((mention, index) => (
//             <li key={index} onClick={() => handleMentionClick(mention)} style={{ cursor: 'pointer' }}>
//               {mention}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleSend}>Send</button>
//       <div>
//         {mentions.map((mention, index) => (
//           <div key={index} style={{ margin: '10px 0' }}>
//             <span>{mention.blocks.map(block => block.text).join(' ')}</span>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Decorator function to highlight mentions
// const mentionStrategy = (contentBlock, callback, contentState) => {
//   contentBlock.findEntityRanges(
//     (character) => {
//       const entityKey = character.getEntity();
//       return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
//     },
//     callback
//   );
// };

// const Mention = (props) => {
//   return <span style={{ color: 'blue' }}>{props.children}</span>;
// };

// const createDecorator = () => new CompositeDecorator([
//   {
//     strategy: mentionStrategy,
//     component: Mention,
//   },
// ]);

// export default MentionComponent;


// const LimitedTextDiv = () => {
//   const [warning, setWarning] = useState('');
//   const [lastValidText, setLastValidText] = useState(''); 
//   const divRef = useRef(null);

//   const handleInput = (e) => {
//     const div = divRef.current;
//     const isOverflowing = div.scrollHeight > div.clientHeight || div.scrollWidth > div.clientWidth;

//     if (isOverflowing) {
//       div.innerText = lastValidText;
//       setWarning('You cannot add more text.');
//     } else {
//       setLastValidText(div.innerText);
//       setWarning('');
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         contentEditable="true"
//         onInput={handleInput}
//         style={{
//           width: '300px',
//           height: '150px',
//           border: '1px solid black',
//           overflow: 'hidden',
//           whiteSpace: 'pre-wrap',
//           wordBreak: 'break-word',
//         }}
//       />
      
       
//       {warning && (
//         <p style={{ color: 'red', marginTop: '10px' }}>
//           {warning}
//         </p>
//       )}
//     </div>
//   );
// };

// export default LimitedTextDiv;

// const dummyData = {
//   text: "This is some initial text from the API."
// };

// const LimitedTextDiv = () => {
//   const [warning, setWarning] = useState('');
//   const [lastValidText, setLastValidText] = useState('');
//   const divRef = useRef(null);

//   // useEffect(() => {
//   //   const initialText = dummyData.text;
//   //   setLastValidText(initialText);
//   //   if (divRef.current) {
//   //     divRef.current.innerText = initialText;
//   //   }
//   // }, []);

//   const handleInput = (e) => {
//     const div = divRef.current;
//     const currentText = div.innerText;
//     const isOverflowing = div.scrollHeight > div.clientHeight || div.scrollWidth > div.clientWidth;
//     if (isOverflowing) {
//       div.innerText = lastValidText; 
//       setWarning('You cannot add more text.');
//     } else {
//       setLastValidText(currentText); 
//       setWarning('');
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         contentEditable="true"
//         onInput={handleInput}
//         style={{
//           width: '300px',
//           height: '150px',
//           border: '1px solid black',
//           overflow: 'hidden',
//           // whiteSpace: 'pre-wrap',
//           wordBreak: 'break-word',
//         }}
//         data-gramm="false" // Disable Grammarly
//   data-gramm_editor="false"
//         // suppressContentEditableWarning={true}
//       />
      
//       {warning && (
//         <p style={{ color: 'red', marginTop: '10px' }}>
//           {warning}
//         </p>
//       )}
//     </div>
//   );
// };

// export default LimitedTextDiv;

// import React, { useRef, useState, useEffect } from "react";

// interface LimitedTextDivProps {
//   initialText: string;
//   width: number;
//   height: number;
//   onTextUpdate: (newText: string) => void;
// }

const LimitedTextDiv  = ({ initialText, width, height, onTextUpdate }) => {
  const [warning, setWarning] = useState('');
  const [lastValidText, setLastValidText] = useState(initialText);
  const divRef = useRef(null);

  // Set the initial text when the component mounts
  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerText = initialText;
    }
  }, [initialText]);

  const handleInput = () => {
    const div = divRef.current;
    if (div) {
      const currentText = div.innerText;
      const isOverflowing = div.scrollHeight > div.clientHeight || div.scrollWidth > div.clientWidth;

      if (isOverflowing) {
        div.innerText = lastValidText; 
        setWarning('You cannot add more text.');
      } else {
        setLastValidText(currentText); 
        setWarning('');
        onTextUpdate(currentText);
      }
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        contentEditable="true"
        onInput={handleInput}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: '1px solid black',
          overflow: 'hidden',
          wordBreak: 'break-word',
        }}
        data-gramm="false" // Disable Grammarly
        data-gramm_editor="false"
      />
      
      {warning && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          {warning}
        </p>
      )}
    </div>
  );
};

export default LimitedTextDiv;
































