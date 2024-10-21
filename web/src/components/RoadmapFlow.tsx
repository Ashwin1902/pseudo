
import React from 'react';
import ReactFlow, { Node, Edge, MiniMap, Controls, Background } from 'reactflow'; // Import necessary types and components
import '@xyflow/react/dist/style.css';
import { useRouter } from 'next/router';
// Define the node data
const nodes: Node[] = [
    { id: '1', position: { x: 250, y: 0 }, data: { label: 'Arrays & Hashing' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '2', position: { x: 100, y: 100 }, data: { label: 'Two Pointers' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '3', position: { x: 400, y: 100 }, data: { label: 'Stack' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '4', position: { x: 50, y: 200 }, data: { label: 'Binary Search' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '5', position: { x: 250, y: 200 }, data: { label: 'Sliding Window' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '6', position: { x: 400, y: 200 }, data: { label: 'Linked List' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '7', position: { x: 250, y: 300 }, data: { label: 'Trees' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '8', position: { x: 50, y: 400 }, data: { label: 'Tries' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '9', position: { x: 400, y: 400 }, data: { label: 'Backtracking' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '10', position: { x: 50, y: 500 }, data: { label: 'Heap / Priority Queue' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '11', position: { x: 250, y: 600 }, data: { label: 'Intervals' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '12', position: { x: 400, y: 600 }, data: { label: 'Greedy' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '13', position: { x: 100, y: 700 }, data: { label: 'Graphs' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '14', position: { x: 250, y: 700 }, data: { label: 'Advanced Graphs' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '15', position: { x: 400, y: 700 }, data: { label: 'DP (1D)' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '16', position: { x: 250, y: 800 }, data: { label: 'DP (2D)' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '17', position: { x: 100, y: 900 }, data: { label: 'Bit Manipulation' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
    { id: '18', position: { x: 400, y: 900 }, data: { label: 'Math & Geometry' }, style: { background: '#2446bf', color: '#fff', padding: 10 } },
  ];

// Define the edges connecting the nodes
const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true , style: { stroke: '#fff' }},
  { id: 'e1-3', source: '1', target: '3', animated: true , style: { stroke: '#fff' }},
  { id: 'e2-4', source: '2', target: '4', animated: true , style: { stroke: '#fff' }},
  { id: 'e2-5', source: '2', target: '5', animated: true , style: { stroke: '#fff' }},
  { id: 'e3-6', source: '3', target: '6', animated: true , style: { stroke: '#fff' }},
  { id: 'e5-7', source: '5', target: '7', animated: true , style: { stroke: '#fff' }},
  { id: 'e6-7', source: '6', target: '7', animated: true , style: { stroke: '#fff' }},
  { id: 'e7-8', source: '7', target: '8', animated: true , style: { stroke: '#fff' }},
  { id: 'e7-9', source: '7', target: '9', animated: true , style: { stroke: '#fff' }},
  { id: 'e8-10', source: '8', target: '10', animated: true , style: { stroke: '#fff' }},
  { id: 'e9-13', source: '9', target: '13', animated: true , style: { stroke: '#fff' }},
  { id: 'e10-11', source: '10', target: '11', animated: true , style: { stroke: '#fff' }},
  { id: 'e10-12', source: '10', target: '12', animated: true , style: { stroke: '#fff' }},
  { id: 'e13-14', source: '13', target: '14', animated: true , style: { stroke: '#fff' }},
  { id: 'e14-15', source: '14', target: '15', animated: true , style: { stroke: '#fff' }},
  { id: 'e15-16', source: '15', target: '16', animated: true , style: { stroke: '#fff' }},
  { id: 'e16-17', source: '16', target: '17', animated: true , style: { stroke: '#fff' }},
  { id: 'e17-18', source: '17', target: '18', animated: true, style: { stroke: '#fff' } },
];

interface RoadmapFlowProps {
    onNodeClick: (event: React.MouseEvent, node: Node<any>) => void;
  }
  
  const RoadmapFlow: React.FC<RoadmapFlowProps> = ({ onNodeClick }) => {
    return (
      <div style={{ height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          style={{ background: '#000' }}
          onNodeClick={(event, node) => onNodeClick(event, node)} // Pass both event and node to the handler
        >
          <MiniMap />
          <Controls />
          <Background color="#000" />
        </ReactFlow>
      </div>
    );
  };
  
  export default RoadmapFlow;