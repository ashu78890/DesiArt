

// const LimitedTextDiv  = ({ initialText, width, height, onTextUpdate }) => {
//   const [warning, setWarning] = useState('');
//   const [lastValidText, setLastValidText] = useState(initialText);
//   const divRef = useRef(null);

//   // Set the initial text when the component mounts
//   useEffect(() => {
//     if (divRef.current) {
//       divRef.current.innerText = initialText;
//     }
//   }, [initialText]);

//   const handleInput = () => {
//     const div = divRef.current;
//     if (div) {
//       const currentText = div.innerText;
//       const isOverflowing = div.scrollHeight > div.clientHeight || div.scrollWidth > div.clientWidth;

//       if (isOverflowing) {
//         div.innerText = lastValidText; 
//         setWarning('You cannot add more text.');
//       } else {
//         setLastValidText(currentText); 
//         setWarning('');
//         onTextUpdate(currentText);
//       }
//     }
//   };

//   return (
//     <div>
//       <div
//         ref={divRef}
//         contentEditable="true"
//         onInput={handleInput}
//         style={{
//           width: `${width}px`,
//           height: `${height}px`,
//           border: '1px solid black',
//           overflow: 'hidden',
//           wordBreak: 'break-word',
//         }}
//         data-gramm="false" // Disable Grammarly
//         data-gramm_editor="false"
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