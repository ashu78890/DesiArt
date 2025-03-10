import { all, fork } from "redux-saga/effects";
import watchFetchData from "./saga";

export default function* root(){
    yield all([
        fork(watchFetchData)
    ])
}











export enum SHAPE_TYPE {
    rect="rect",
    line="line",
    ellipse="ellipse",
    arc="arc",
    flowChartConnector="flowChartConnector",
    triangle="triangle",
    custGeom="custGeom",
    roundRect="roundRect",
    blockArc = "blockArc"
  }
  
  export enum SVGComponent {
    RECT = "Rect",
    LINE = "Line",
    ELLIPSE = "Ellipse",
    TRIANGLE = "Triangle",
    CUSTOM_GEOMETRY = "CustomGemetory",
    ARC = "Arc"
  }
  
  export const SHAPE_SVG_MAPPING = {
    [SHAPE_TYPE.rect]: SVGComponent.RECT,
    [SHAPE_TYPE.line]: SVGComponent.LINE,
    [SHAPE_TYPE.ellipse]: SVGComponent.ELLIPSE,
    [SHAPE_TYPE.arc]: SVGComponent.ARC,
    [SHAPE_TYPE.flowChartConnector]: SVGComponent.ELLIPSE,
    [SHAPE_TYPE.triangle]: SVGComponent.TRIANGLE,
    [SHAPE_TYPE.custGeom]: SVGComponent.CUSTOM_GEOMETRY,
    [SHAPE_TYPE.roundRect]: SVGComponent.RECT,
    [SHAPE_TYPE.blockArc]:SVGComponent.ARC
  }




















  // function Arc({element}: any) {
//   return <div>ARC</div>
// }
// export default Arc;


import { SHAPE_TYPE } from "../utils";
import DynamicSVG from "./DynamicSVG";
// import DynamicSVG from "./DynamicSVG";
// import React, { useEffect, useRef } from 'react';

// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: {
//         color?: string;
//       };
//       angleRange: [number, number]; 
//     };
//   };
// }


// const Arc: React.FC<ArcProps> = ({ element }) => {
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

//     // Convert angles from PptxGenJS format (0° = top, clockwise) to SVG format
//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     // Draw arc and then fill back to the center
//     // const path = `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} L${cx},${cy} Z`;

//     const path = excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;


//     return {
//       path,
//       startX,
//       startY,
//       endX,
//       endY,
//       cx,
//       cy
//     };
//   };

//   const { option } = element;
//   const { w, h, angleRange, line, fill } = option;

//   const [startAngle, endAngle] = angleRange; 

//   const { path } = createArcPath(
//     w,
//     h,
//     startAngle,
//     endAngle,
//     !!line?.width 
//   );

//   return (
//     <DynamicSVG viewBox={`0 0 ${w} ${h}`}>
//       <path
//         d={path}
//         fill={fill?.color || "none"} 
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || 0}
//       />
//      </DynamicSVG>
  
//   );
// };

// export default Arc;




// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: {
//         color?: string;
//       };
//       angleRange: [number, number]; 
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
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

//     // Convert angles from PptxGenJS format (0° = top, clockwise) to SVG format
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

//     return {
//       path,
//       startX,
//       startY,
//       endX,
//       endY,
//       cx,
//       cy
//     };
//   };

//   const drawArrow = (type: "triangle" | "oval" | "arrow", x: number, y: number) => {
//     switch (type) {
//       case "triangle":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 5},${y - 10} ${x + 5},${y - 10}`}
//             fill="black"
//           />
//         );
//       case "oval":
//         return (
//           <ellipse cx={x} cy={y} rx="6" ry="6" fill="black" />
//         );
//       case "arrow":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 8},${y - 5} ${x - 8},${y + 5}`}
//             fill="black"
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const { option } = element;
//   const { w, h, angleRange, line, fill } = option;

//   const [startAngle, endAngle] = angleRange;

//   const { path, startX, startY, endX, endY, cx, cy } = createArcPath(
//     w,
//     h,
//     startAngle,
//     endAngle,
//     !!line?.width
//   );

//   return (
//     <DynamicSVG viewBox={`0 0 ${w} ${h}`}>
//       {/* Arc */}
//       <path
//         d={path}
//         fill={fill?.color || "none"}
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || 0}
//       />
//       {/* Draw begin arrow if defined */}
//       {line?.beginArrowType && drawArrow(line.beginArrowType, startX, startY)}
//       {/* Draw end arrow if defined */}
//       {line?.endArrowType && drawArrow(line.endArrowType, endX, endY)}
//     </DynamicSVG>
//   );
// };

// export default Arc;



// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: {
//         color?: string;
//       };
//       angleRange: [number, number];
//       arcType?: "blockArc" | "arc";  // Arc or block arc
//       arcThicknessRatio?: number; // Ratio to determine arc thickness for block arc
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const createArcPath = (
//     width: number,
//     height: number,
//     startAngle: number,
//     endAngle: number,
//     arcType: "blockArc" | "arc", // Arc type
//     arcThicknessRatio: number | undefined, // Arc thickness ratio
//     excludeCenterLines: boolean
//   ) => {
//     const cx = width / 2;
//     const cy = height / 2;
//     const radius = Math.min(width, height) / 2;
//     const cornerRadius = 15; // Rounded corner radius for block arc

//     // Default thickness if not provided
//     const arcThickness = arcThicknessRatio ? height * arcThicknessRatio : 0;

//     const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

//     // Convert angles from PptxGenJS format (0° = top, clockwise) to SVG format
//     const adjustedStartAngle = 90 - startAngle;
//     const adjustedEndAngle = 90 - endAngle;

//     const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//     const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//     const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//     const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     // If block arc type, create a rectangle with rounded corners and thickness
//     if (arcType === "blockArc") {
//       // Modify path to account for arc thickness
//       return {
//         path: `M${startX},${startY} L${cx + cornerRadius},${cy - cornerRadius + arcThickness} H${cx + radius - cornerRadius} A${cornerRadius},${cornerRadius} 0 0,1 ${cx + radius},${cy} A${cornerRadius},${cornerRadius} 0 0,1 ${cx + radius - cornerRadius},${cy + radius - cornerRadius - arcThickness} H${startX}`,
//         startX,
//         startY,
//         endX,
//         endY,
//         cx,
//         cy
//       };
//     }

//     // Regular arc path
//     const path = excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

//     return {
//       path,
//       startX,
//       startY,
//       endX,
//       endY,
//       cx,
//       cy
//     };
//   };

//   const drawArrow = (type: "triangle" | "oval" | "arrow", x: number, y: number) => {
//     switch (type) {
//       case "triangle":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 5},${y - 10} ${x + 5},${y - 10}`}
//             fill="black"
//           />
//         );
//       case "oval":
//         return (
//           <ellipse cx={x} cy={y} rx="6" ry="12" fill="black" />
//         );
//       case "arrow":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 8},${y - 5} ${x - 8},${y + 5}`}
//             fill="black"
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcType, arcThicknessRatio } = option;
//   console.log(angleRange,"angleRange")

//   const [startAngle, endAngle] = angleRange;

//   const { path, startX, startY, endX, endY, cx, cy } = createArcPath(
//     w,
//     h,
//     startAngle,
//     endAngle,
//     arcType || "arc",  // Default to "arc" if not specified
//     arcThicknessRatio,
//     !!line?.width
//   );

//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
//       {/* Arc or block arc */}
//       <path
//         d={path}
//         fill={fill?.color || "none"}
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || 0}
//       />

//       {/* Draw begin arrow if defined */}
//       {line?.beginArrowType && drawArrow(line.beginArrowType, startX, startY)}

//       {/* Draw end arrow if defined */}
//       {line?.endArrowType && drawArrow(line.endArrowType, endX, endY)}
//     </svg>
//   );
// };

// export default Arc;



// import React from "react";

// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: {
//         color?: string;
//       };
//       angleRange: [number, number];
//       arcThicknessRatio?: number; // Ratio for block arc thickness (0 to 1)
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const createArcPath = (
//         width: number,
//         height: number,
//         startAngle: number,
//         endAngle: number,
//         excludeCenterLines: boolean
//       ) => {
//         const cx = width / 2;
//         const cy = height / 2;
//         const radius = Math.min(width, height) / 2;
    
//         const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);
    
//         // Convert angles from PptxGenJS format (0° = top, clockwise) to SVG format
//         const adjustedStartAngle = 90 - startAngle;
//         const adjustedEndAngle = 90 - endAngle;
    
//         const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
//         const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
//         const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
//         const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));
    
//         const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
//         const path = excludeCenterLines
//           ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//           : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
    
//         return {
//           path,
//           startX,
//           startY,
//           endX,
//           endY,
//           cx,
//           cy
//         };
//       };
    
//       const drawArrow = (type: "triangle" | "oval" | "arrow", x: number, y: number) => {
//         switch (type) {
//           case "triangle":
//             return (
//               <polygon
//                 points={`${x},${y} ${x - 5},${y - 10} ${x + 5},${y - 10}`}
//                 fill="black"
//               />
//             );
//           case "oval":
//             return (
//               <ellipse cx={x} cy={y} rx="6" ry="6" fill="black" />
//             );
//           case "arrow":
//             return (
//               <polygon
//                 points={`${x},${y} ${x - 8},${y - 5} ${x - 8},${y + 5}`}
//                 fill="black"
//               />
//             );
//           default:
//             return null;
//         }
//       };

//   const createBlockArcPath = (
//     width: number,
//     height: number,
//     startAngle: number,
//     endAngle: number,
//     thicknessRatio: number
//   ) => {
//     const toRadians = (angle: number): number => (angle * Math.PI) / 180;

//     const outerRadiusX = width / 2;
//     const outerRadiusY = height / 2;
//     const innerRadiusX = outerRadiusX * (1 - thicknessRatio);
//     const innerRadiusY = outerRadiusY * (1 - thicknessRatio);

//     const startXOuter =
//       outerRadiusX + outerRadiusX * Math.cos(toRadians(startAngle));
//     const startYOuter =
//       outerRadiusY - outerRadiusY * Math.sin(toRadians(startAngle));
//     const endXOuter =
//       outerRadiusX + outerRadiusX * Math.cos(toRadians(endAngle));
//     const endYOuter =
//       outerRadiusY - outerRadiusY * Math.sin(toRadians(endAngle));

//     const startXInner =
//       outerRadiusX + innerRadiusX * Math.cos(toRadians(endAngle));
//     const startYInner =
//       outerRadiusY - innerRadiusY * Math.sin(toRadians(endAngle));
//     const endXInner =
//       outerRadiusX + innerRadiusX * Math.cos(toRadians(startAngle));
//     const endYInner =
//       outerRadiusY - innerRadiusY * Math.sin(toRadians(startAngle));

//     const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

//     const path = `
//       M ${startXOuter},${startYOuter}
//       A ${outerRadiusX},${outerRadiusY} 0 ${largeArcFlag} 1 ${endXOuter},${endYOuter}
//       L ${startXInner},${startYInner}
//       A ${innerRadiusX},${innerRadiusY} 0 ${largeArcFlag} 0 ${endXInner},${endYInner}
//       Z
//     `;
//     return path.trim();
//   };

//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio } = option;

//   const [startAngle, endAngle] = angleRange;

//   const path = arcThicknessRatio
//     ? createBlockArcPath(w, h, startAngle, endAngle, arcThicknessRatio)
//     : createArcPath(w, h, startAngle, endAngle,!!line?.width).path;

//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
//       <path
//         d={path}
//         fill={fill?.color || (arcThicknessRatio ? "#000" : "none")} // Default fill for block arcs is black
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || 0}
//       />
//       {line?.beginArrowType && drawArrow(line.beginArrowType, startX, startY)}
//      {/* Draw end arrow if defined */}
//      {line?.endArrowType && drawArrow(line.endArrowType, endX, endY)}
//     </svg>
//   );
// };

// export default Arc;





// import React from "react";

// interface ArcProps {
//   element: {
//     option: {
//       w: number;
//       h: number;
//       line?: {
//         color?: string;
//         width?: number;
//         beginArrowType?: "triangle" | "oval" | "arrow";
//         endArrowType?: "triangle" | "oval" | "arrow";
//       };
//       fill?: {
//         color?: string;
//       };
//       angleRange: [number, number];
//       arcThicknessRatio?: number; // Ratio for block arc thickness (0 to 1)
//     };
//   };
// }

// const Arc: React.FC<ArcProps> = ({ element }) => {
//   const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

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

//     const startX = cx + radius * Math.cos(toRadians(startAngle));
//     const startY = cy + radius * Math.sin(toRadians(startAngle));
//     const endX = cx + radius * Math.cos(toRadians(endAngle));
//     const endY = cy + radius * Math.sin(toRadians(endAngle));

//     const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

//     const path = excludeCenterLines
//       ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
//       : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

//     return {
//       path,
//       startX,
//       startY,
//       endX,
//       endY,
//     };
//   };

//   const createBlockArcPath = (
//     width: number,
//     height: number,
//     startAngle: number,
//     endAngle: number,
//     thicknessRatio: number
//   ) => {
//     const outerRadiusX = width / 2;
//     const outerRadiusY = height / 2;
//     const innerRadiusX = outerRadiusX * (1 - thicknessRatio);
//     const innerRadiusY = outerRadiusY * (1 - thicknessRatio);

//     const startXOuter =
//       outerRadiusX + outerRadiusX * Math.cos(toRadians(startAngle));
//     const startYOuter =
//       outerRadiusY + outerRadiusY * Math.sin(toRadians(startAngle));
//     const endXOuter =
//       outerRadiusX + outerRadiusX * Math.cos(toRadians(endAngle));
//     const endYOuter =
//       outerRadiusY + outerRadiusY * Math.sin(toRadians(endAngle));

//     const startXInner =
//       outerRadiusX + innerRadiusX * Math.cos(toRadians(endAngle));
//     const startYInner =
//       outerRadiusY + innerRadiusY * Math.sin(toRadians(endAngle));
//     const endXInner =
//       outerRadiusX + innerRadiusX * Math.cos(toRadians(startAngle));
//     const endYInner =
//       outerRadiusY + innerRadiusY * Math.sin(toRadians(startAngle));

//     const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

//     const path = `
//       M ${startXOuter},${startYOuter}
//       A ${outerRadiusX},${outerRadiusY} 0 ${largeArcFlag} 1 ${endXOuter},${endYOuter}
//       L ${startXInner},${startYInner}
//       A ${innerRadiusX},${innerRadiusY} 0 ${largeArcFlag} 0 ${endXInner},${endYInner}
//       Z
//     `;
//     return path.trim();
//   };

//   const drawArrow = (
//     type: "triangle" | "oval" | "arrow",
//     x: number,
//     y: number
//   ) => {
//     switch (type) {
//       case "triangle":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 5},${y - 10} ${x + 5},${y - 10}`}
//             fill="black"
//           />
//         );
//       case "oval":
//         return <ellipse cx={x} cy={y} rx="6" ry="6" fill="black" />;
//       case "arrow":
//         return (
//           <polygon
//             points={`${x},${y} ${x - 8},${y - 5} ${x - 8},${y + 5}`}
//             fill="black"
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const { option } = element;
//   const { w, h, angleRange, line, fill, arcThicknessRatio } = option;

//   const [startAngle, endAngle] = angleRange;

//   const arcPathData = arcThicknessRatio
//     ? createBlockArcPath(w, h, startAngle, endAngle, arcThicknessRatio)
//     : createArcPath(w, h, startAngle, endAngle, !!line?.width);

//   // const { path, startX, startY, endX, endY } = arcThicknessRatio
//   //   ? { path: arcPathData, startX: 0, startY: 0, endX: 0, endY: 0 }
//   //   : arcPathData;

//   return (
//     <svg
//       width={w}
//       height={h}
//       viewBox={`0 0 ${w} ${h}`}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d={path}
//         fill={fill?.color || (arcThicknessRatio ? "#000" : "none")}
//         stroke={line?.color || "black"}
//         strokeWidth={line?.width || 1}
//       />
//       {line?.beginArrowType && drawArrow(line.beginArrowType, startX, startY)}
//       {line?.endArrowType && drawArrow(line.endArrowType, endX, endY)}
//     </svg>
//   );
// };

// export default Arc;


// {properArc}


import React from "react";

interface ArcProps {
  element: {
    option: {
      w: number;
      h: number;
      angleRange: [number, number];
      line?: {
        color?: string;
        width?: number;
        beginArrowType?: "triangle" | "oval" | "arrow";
        endArrowType?: "triangle" | "oval" | "arrow";
      };
      fill?: { color?: string };
      arcThicknessRatio?: number;
    };
  };
}

const Arc: React.FC<ArcProps> = ({ element }) => {
  const createArcPath = (
    width: number,
    height: number,
    startAngle: number,
    endAngle: number,
    excludeCenterLines: boolean
  ) => {
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) / 2;

    const toRadians = (angle: number): number => (angle - 90) * (Math.PI / 180);

    const adjustedStartAngle = 90 - startAngle;
    const adjustedEndAngle = 90 - endAngle;

    const startX = cx + radius * Math.cos(toRadians(adjustedStartAngle));
    const startY = cy - radius * Math.sin(toRadians(adjustedStartAngle));
    const endX = cx + radius * Math.cos(toRadians(adjustedEndAngle));
    const endY = cy - radius * Math.sin(toRadians(adjustedEndAngle));

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const path = excludeCenterLines
      ? `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`
      : `M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;

    return { path, startX, startY, endX, endY, cx, cy };
  };

  const { option } = element;
  const { w, h, angleRange, line, fill, arcThicknessRatio } = option;

  const [startAngle, endAngle] = angleRange;

  const { path, startX, startY, endX, endY } = createArcPath(
    w,
    h,
    startAngle,
    endAngle,
    !!line?.width
  );

  // Marker creation for different arrow types
  const createMarker = (type: "triangle" | "oval" | "arrow", id: string) => {
    switch (type) {
      case "triangle":
        return (
          <marker
            id={id}
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <polygon points="0,0 10,5 0,10" fill="black" />
          </marker>
        );
      case "oval":
        return (
          <marker
            id={id}
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <circle cx="5" cy="5" r="3" fill="black" />
          </marker>
        );
      case "arrow":
        return (
          <marker
            id={id}
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="black" />
          </marker>
        );
      default:
        return null;
    }
  };

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {line?.beginArrowType &&
          createMarker(line.beginArrowType, "begin-marker")}
        {line?.endArrowType && createMarker(line.endArrowType, "end-marker")}
      </defs>
      <path
        d={path}
        fill={fill?.color || "none"}
        stroke={line?.color || "black"}
        strokeWidth={line?.width || 0}
        markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
        markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
      />
    </svg>
  );
};

export default Arc;



// import React from "react";

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
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
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
//           strokeWidth={line?.width || 0}
//           markerStart={line?.beginArrowType ? "url(#begin-marker)" : undefined}
//           markerEnd={line?.endArrowType ? "url(#end-marker)" : undefined}
//         />
//       )}
//     </svg>
//   );
// };

// export default Arc;























