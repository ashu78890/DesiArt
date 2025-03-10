// import React from "react";
// import DynamicSVG from "./DynamicSVG";
// import { useSVG } from "../UseSvg";

// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       angleRange: [number, number];
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: { color?: string };
//       arcThicknessRatio?: number; 
//       rotation: number,
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const { getStroke } = useSVG();
//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio } = option;

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

//   const path = arcThicknessRatio
//     ? createBlockArcPath()
//     : createArcPath(!!line?.width);

//   return (
//     <DynamicSVG width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
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
//       />
//     </DynamicSVG>
//   );
// };

// export default Arc;



// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const { getStroke } = useSVG();
//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio, rotation = 0 } = option; // Added rotation property

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

//   const path = arcThicknessRatio
//     ? createBlockArcPath()
//     : createArcPath(!!line?.width);

//   return (
//     <DynamicSVG width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
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
//         transform={`rotate(${rotation}, ${cx}, ${cy})`} // Apply rotation
//       />
//     </DynamicSVG>
//   );
// };

// export default Arc;




// import React from "react";
// import DynamicSVG from "./DynamicSVG";
// import { useSVG } from "../UseSvg";

// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       angleRange: [number, number];
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: { color?: string };

//       arcThicknessRatio?: number; // Determines the thickness of block arcs
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const { getStroke } = useSVG();
//   const createArcPath = (
//     width: number,
//     height: number,
//     startAngle: number,
//     endAngle: number,
//     excludeCenterLines: boolean
//   ) => {
//     const cx = width / 2;
//     const cy = height / 2;
//     const radius = Math.min(width, height) / 2;

//     const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     const path = excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

//     return { path, startX, startY, endX, endY, cx, cy, radius };
//   };

//   const createBlockArcPath = (
//     cx: number,
//     cy: number,
//     radius: number,
//     thickness: number,
//     startAngle: number,
//     endAngle: number
//   ) => {
//     const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//     const outerStartX = cx + radius * Math.cos(toRadians(90 - startAngle));
//     const outerStartY = cy - radius * Math.sin(toRadians(90 - startAngle));
//     const outerEndX = cx + radius * Math.cos(toRadians(90 - endAngle));
//     const outerEndY = cy - radius * Math.sin(toRadians(90 - endAngle));

//     const innerRadius = radius * (1 - thickness);

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

//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio } = option;
//   console.log(option,"option")

//   const [startAngle, endAngle] = angleRange;

//   const { path, startX, startY, endX, endY, cx, cy, radius } = createArcPath(
//     w,
//     h,
//     startAngle,
//     endAngle,
//     !!line?.width
//   );

//   // Marker creation for different arrow types
//   const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
//     switch (type) {
//       case "triangle":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <polygon points="0,0 10,5 0,10" fill="black" />
//           </marker>
//         );
//       case "oval":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <circle cx="5" cy="5" r="3" fill="black" />
//           </marker>
//         );
//       case "arrow":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <path d="M0,0 L10,5 L0,10 Z" fill="black" />
//           </marker>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <DynamicSVG  viewBox={`0 0 ${w} ${h}`}>
//       <defs>
//         {line?.beginArrowType &&
//           createMarker(line.beginArrowType, "begin-marker")}
//         {line?.endArrowType && createMarker(line.endArrowType, "end-marker")}
//       </defs>
//       {arcThicknessRatio ? (
//         <path
//           d={createBlockArcPath(
//             cx,
//             cy,
//             radius,
//             arcThicknessRatio,
//             startAngle,
//             endAngle
//           )}
//           fill={fill?.color || "none"}
//           stroke={line?.color || "black"}
//           strokeWidth={line?.width || 0}
//         />
//       ) : (
//         <path
//           d={path}
//           fill={fill?.color || "none"}
//           stroke={line?.color || "black"}
//           strokeWidth={getStroke(line?.width || 0)}
//           markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
//           markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
//         />
//       )}
//     </DynamicSVG>
//   );
// };

// export default Arc;




// import React from "react";
// import DynamicSVG from "./DynamicSVG";
// import { useSVG } from "../UseSvg";

// interface ArcProps {
//   element: {
//      // Define the shape type
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
//       arcThicknessRatio?: number; // Determines the thickness of block arcs
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const { getStroke } = useSVG();

//   const createArcPath = (
//     width: number,
//     height: number,
//     startAngle: number,
//     endAngle: number,
//     excludeCenterLines: boolean
//   ) => {
//     const cx = width / 2;
//     const cy = height / 2;
//     const radius = Math.min(width, height) / 2;

//     const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     const path = excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

//     return { path, cx, cy, radius };
//   };

//   const createBlockArcPath = (
//     cx: number,
//     cy: number,
//     radius: number,
//     thickness: number,
//     startAngle: number,
//     endAngle: number
//   ) => {
//     const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//     const outerStartX = cx + radius * Math.cos(toRadians(90 - startAngle));
//     const outerStartY = cy - radius * Math.sin(toRadians(90 - startAngle));
//     const outerEndX = cx + radius * Math.cos(toRadians(90 - endAngle));
//     const outerEndY = cy - radius * Math.sin(toRadians(90 - endAngle));

//     const innerRadius = radius * (1 - thickness);

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

//   const {  option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio,shapeType } = option;
//   console.log(option.shapeType, "option");

//   const [startAngle, endAngle] = angleRange;

//   const { path, cx, cy, radius } = createArcPath(
//     w,
//     h,
//     startAngle,
//     endAngle,
//     !!line?.width
//   );

//   // Marker creation for different arrow types
//   const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
//     switch (type) {
//       case "triangle":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <polygon points="0,0 10,5 0,10" fill="black" />
//           </marker>
//         );
//       case "oval":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <circle cx="5" cy="5" r="3" fill="black" />
//           </marker>
//         );
//       case "arrow":
//         return (
//           <marker
//             id={id}
//             viewBox="0 0 10 10"
//             refX="5"
//             refY="5"
//             markerWidth="6"
//             markerHeight="6"
//             orient="auto"
//           >
//             <path d="M0,0 L10,5 L0,10 Z" fill="black" />
//           </marker>
//         );
//       default:
//         return null;
//     }
//   };

//   console.log("ck", shapeType)

//   return (
//     <DynamicSVG element={element}>
//       {/* <defs>
//         {line?.beginArrowType &&
//           createMarker(line.beginArrowType, "begin-marker")}
//         {line?.endArrowType && createMarker(line.endArrowType, "end-marker")}
//       </defs> */}
//       {shapeType === "blockArc" && arcThicknessRatio ? (
//         <path
//           d={createBlockArcPath(
//             cx,
//             cy,
//             radius,
//             arcThicknessRatio,
//             startAngle,
//             endAngle
//           )}
//           fill={fill?.color || "none"}
//           stroke={line?.color || "black"}
//           strokeWidth={line?.width || 0}
//         />
//       ) : shapeType === "arc" ? (
//         <path
//           d={path}
//           fill={fill?.color || "none"}
//           stroke={line?.color || "black"}
//           strokeWidth={getStroke(line?.width || 0)}
//           markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
//           markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
//         />
//       ) : null}
//     </DynamicSVG>
//   );
// };

// export default Arc;