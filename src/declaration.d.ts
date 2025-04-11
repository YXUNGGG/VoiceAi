declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}