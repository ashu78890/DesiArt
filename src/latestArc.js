// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       angleRange: [number, number];
//       shapeType: "arc" | "blockArc"; // Added shapeType
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: { color?: string };
//       arcThicknessRatio?: number;
//       rotation: number;
//     };
//   };
// }

// const Arc: React.FC<any> = ({ element }) => {
  
//   const { getStroke } = useSVG();
//   const { option } = element;
//   const { w, h, angleRange, shapeType, line, fill, arcThicknessRatio, rotation = 0 } = option;
//   console.log(option,"option")

//   const [startAngle, endAngle] = angleRange;
//   const cx = w / 2;
//   const cy = h / 2;
//   const radius = Math.min(w, h) / 2;

//   const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//   const createArcPath = (excludeCenterLines: boolean) => {
//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     return excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
//   };

//   const createBlockArcPath = () => {
//     const innerRadius = radius * (1 - (arcThicknessRatio || 0));
//     const outerStartX = cx + radius * Math.cos(toRadians(90 - startAngle));
//     const outerStartY = cy - radius * Math.sin(toRadians(90 - startAngle));
//     const outerEndX = cx + radius * Math.cos(toRadians(90 - endAngle));
//     const outerEndY = cy - radius * Math.sin(toRadians(90 - endAngle));

//     const innerStartX = cx + innerRadius * Math.cos(toRadians(90 - startAngle));
//     const innerStartY = cy - innerRadius * Math.sin(toRadians(90 - startAngle));
//     const innerEndX = cx + innerRadius * Math.cos(toRadians(90 - endAngle));
//     const innerEndY = cy - innerRadius * Math.sin(toRadians(90 - endAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     return `
//       M${outerStartX},${outerStartY}
//       A${radius},${radius} 0 ${largeArcFlag},1 ${outerEndX},${outerEndY}
//       L${innerEndX},${innerEndY}
//       A${innerRadius},${innerRadius} 0 ${largeArcFlag},0 ${innerStartX},${innerStartY}
//       Z
//     `;
//   };

//   const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
//     const markerPath = {
//       triangle:  <path d="M 0 0 L 10 5 L 0 10 Z" fill={line?.color} />,
//       oval: <circle cx="5" cy="5" r="5" fill={line?.color}  />,
//       arrow: <path d="M0,0 L10,5 L0,10 Z"  fill={line?.color} />,
//     }[type];

//     return (
//       <marker
//         id={id}
//         viewBox="0 0 10 10"
//         refX="5"
//         refY="5"
//         markerWidth="6"
//         markerHeight="6"
//         orient="auto"
//       >
//         {markerPath}
//       </marker>
//     );
//   };

//   const path = shapeType === "blockArc"
//     ? createBlockArcPath()
//     : createArcPath(!!line?.width);

//     console.log(line?.endArrowType,line?.endArrowType,"shjh")

//   return (
//     <DynamicSVG element={element}>
//       <defs>
//         {line?.beginArrowType && createMarker(line.beginArrowType, "begin-marker")}
//         {line?.endArrowType && createMarker(line.endArrowType, "end-marker")}
//       </defs>
//       <path
//         d={path}
//         fill={fill?.color || "none"}
//         stroke={line?.color || "none"}
//         strokeWidth={getStroke(line?.width) || 0 }
//         markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
//         markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
//         transform={`rotate(${rotation}, ${cx}, ${cy})`}
//       />
//     </DynamicSVG>
//   );
// };

// export default Arc;

















// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       angleRange: [number, number];
//       shapeType: "arc" | "blockArc";
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: { color?: string };
//       arcThicknessRatio?: number;
//       rotation: number;
//     };
//   };
// }

// const Arc: React.FC<any> = ({ element }) => {
//   const { getStroke } = useSVG();
//   const { option } = element;
//   const { w, h, angleRange, shapeType, line, fill, arcThicknessRatio, rotation = 0 } = option;

//   const [rawStartAngle, rawEndAngle] = angleRange;
//   const startAngle = Math.min(rawStartAngle, rawEndAngle);
//   const endAngle = Math.max(rawStartAngle, rawEndAngle);
//   const cx = w / 2;
//   const cy = h / 2;
//   const radius = Math.min(w, h) / 2;

//   const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);
//   const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

//   const createArcPath = (excludeCenterLines: boolean) => {
//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     return excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
//   };

//   const createBlockArcPath = () => {
//     const innerRadius = radius * (1 - (arcThicknessRatio || 0));

//     return `
//       M${cx + radius * Math.cos(toRadians(90 - startAngle))},${cy - radius * Math.sin(toRadians(90 - startAngle))}
//       A${radius},${radius} 0 ${largeArcFlag},1 ${cx + radius * Math.cos(toRadians(90 - endAngle))},${cy - radius * Math.sin(toRadians(90 - endAngle))}
//       L${cx + innerRadius * Math.cos(toRadians(90 - endAngle))},${cy - innerRadius * Math.sin(toRadians(90 - endAngle))}
//       A${innerRadius},${innerRadius} 0 ${largeArcFlag},0 ${cx + innerRadius * Math.cos(toRadians(90 - startAngle))},${cy - innerRadius * Math.sin(toRadians(90 - startAngle))}
//       Z
//     `;
//   };

//   const arcId = `arc-${Math.random().toString(36).substr(2, 9)}`;
//   const beginMarkerId = line?.beginArrowType ? `${arcId}-begin` : undefined;
//   const endMarkerId = line?.endArrowType ? `${arcId}-end` : undefined;

//   const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
//     const markerPath = {
//       triangle: <path d="M 0 0 L 10 5 L 0 10 Z" fill={line?.color} />, 
//       oval: <circle cx="5" cy="5" r="5" fill={line?.color} />,
//       arrow: <path d="M0,0 L10,5 L0,10 Z" fill={line?.color} />,
//     }[type];

//     return (
//       <marker
//         id={id}
//         viewBox="0 0 10 10"
//         refX="5"
//         refY="5"
//         markerWidth="6"
//         markerHeight="6"
//         orient="auto"
//       >
//         {markerPath}
//       </marker>
//     );
//   };

//   const path = shapeType === "blockArc" ? createBlockArcPath() : createArcPath(!!line?.width);

//   return (
//     <DynamicSVG element={element}>
//       <defs>
//         {beginMarkerId && createMarker(line!.beginArrowType!, beginMarkerId)}
//         {endMarkerId && createMarker(line!.endArrowType!, endMarkerId)}
//       </defs>
//       <path
//         d={path}
//         fill={fill?.color || "none"}
//         stroke={line?.color || "none"}
//         strokeWidth={getStroke(line?.width) || 0}
//         markerStart={beginMarkerId ? `url(#${beginMarkerId})` : undefined}
//         markerEnd={endMarkerId ? `url(#${endMarkerId})` : undefined}
//         transform={`rotate(${rotation}, ${cx}, ${cy})`}
//       />
//     </DynamicSVG>
//   );
// };

// export default Arc;












// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       angleRange: [number, number];
//       shapeType: "arc" | "blockArc";
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: { color?: string };
//       arcThicknessRatio?: number;
//       rotation: number;
//     };
//   };
// }

// const Arc: React.FC<any> = ({ element }) => {
//   const { getStroke } = useSVG();
//   const { option } = element;
//   const { w, h, angleRange, shapeType, line, fill, arcThicknessRatio, rotation = 0 } = option;

//   const [rawStartAngle, rawEndAngle] = angleRange;
//   const startAngle = Math.min(rawStartAngle, rawEndAngle);
//   const endAngle = Math.max(rawStartAngle, rawEndAngle);
//   const cx = w / 2;
//   const cy = h / 2;
//   const radius = Math.min(w, h) / 2;

//   const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);
//   const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

//   const createArcPath = (excludeCenterLines: boolean) => {
//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     return excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
//   };

//   const createBlockArcPath = () => {
//     const innerRadius = radius * (1 - (arcThicknessRatio || 0));

//     return `
//       M${cx + radius * Math.cos(toRadians(90 - startAngle))},${cy - radius * Math.sin(toRadians(90 - startAngle))}
//       A${radius},${radius} 0 ${largeArcFlag},1 ${cx + radius * Math.cos(toRadians(90 - endAngle))},${cy - radius * Math.sin(toRadians(90 - endAngle))}
//       L${cx + innerRadius * Math.cos(toRadians(90 - endAngle))},${cy - innerRadius * Math.sin(toRadians(90 - endAngle))}
//       A${innerRadius},${innerRadius} 0 ${largeArcFlag},0 ${cx + innerRadius * Math.cos(toRadians(90 - startAngle))},${cy - innerRadius * Math.sin(toRadians(90 - startAngle))}
//       Z
//     `;
//   };

//   const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
//     const markerPath = {
//       triangle: <polygon points="0,0 10,5 0,10" />,
//       oval: <circle cx="5" cy="5" r="3" />,
//       arrow: <path d="M0,0 L10,5 L0,10 Z" />,
//     }[type];

//     return (
//       <marker
//         id={id}
//         viewBox="0 0 10 10"
//         refX="5"
//         refY="5"
//         markerWidth="6"
//         markerHeight="6"
//         orient="auto"
//       >
//         {markerPath}
//       </marker>
//     );
//   };

//   const path = shapeType === "blockArc" ? createBlockArcPath() : createArcPath(!!line?.width);

//   return (
//     <DynamicSVG element={element}>
//       <defs>
//         {line?.beginArrowType && createMarker(line.beginArrowType, "begin-marker")}
//         {line?.endArrowType && createMarker(line.endArrowType, "end-marker")}
//       </defs>
//       <path
//         d={path}
//         fill={fill?.color || "none"}
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || getStroke(0)}
//         markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
//         markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
//         transform={`rotate(${rotation}, ${cx}, ${cy})`} 
//       />
//     </DynamicSVG>
//   );
// };

// export default Arc;