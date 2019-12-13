import React from "react";
import { useStateValue } from "../../context";
import uuid from 'uuid';

// import ResponsiveGrid from "../components/ResponsiveGrid";
// import { ADD_LAYOUT } from "..";
// import { CARD_LIST } from "../constants";

const Dashboard = () => {
  const [{ layout }, dispatchLayouts] = useStateValue();


      console.log(layout.elements)

//   const handleDropping = ev => {
//     const data = ev.evt.dataTransfer.getData("text/plain");
//     CARD_LIST.forEach(item => {
//       if (item.name === data) {
//         dispatchLayouts({
//           type: ADD_LAYOUT,
//           payload: Object.assign({}, layouts, {
//             items: [
//               ...layouts.items,
//               {
//                 i: `${data}-${layouts.newCounter}`,
//                 x: ev.x,
//                 y: ev.y,
//                 w: 1,
//                 h: 1
//               }
//             ],
//             newCounter: layouts.newCounter + 1
//           })
//         });
//       }
//     });
//   };

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="dashboard-main-header">dashboard-main-header</div>
        <div className="dashboard-main-body">
          {
            layout.elements.map(el => (
              <div className='element' key={uuid.v4()}>{el.data}</div>
            ))
          }
        </div>
        <div className="dashboard-main-footer">dashboard-main-footer</div>
      </div>
    </div>
  );
};

export default Dashboard;