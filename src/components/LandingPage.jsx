// import React, { useEffect } from 'react';
// import { Pane } from 'https://cdn.skypack.dev/tweakpane';

// const LandingPage = ({ onClick }) => {
//   // Tweakpane initialization
//   useEffect(() => {
//     const CONFIG = {
//       radius: 35,
//       hue: true,
//       lightness: 0.5,
//       chroma: 2,
//       hueBase: 180,
//       hueDestination: 320,
//       speed: 2.5,
//       distance: 10,
//       scale: false,
//       alternate: false,
//     };

//     const CTRL = new Pane({ title: 'Config', expanded: false });

//     const root = document.documentElement;
//     const rootStyle = root.style;

//     const updateRootStyles = () => {
//       const { radius, hueBase, chroma, lightness, hue, hueDestination, speed, distance } = CONFIG;
//       rootStyle.setProperty('--radius', radius);
//       rootStyle.setProperty('--base', hueBase);
//       rootStyle.setProperty('--chroma', chroma);
//       rootStyle.setProperty('--lightness', lightness);
//       rootStyle.setProperty('--limit', hueDestination);
//       rootStyle.setProperty('--speed', speed);
//       rootStyle.setProperty('--distance', distance);
//     };

//     const updateRootDataset = () => {
//       root.dataset.hue = CONFIG.hue;
//       root.dataset.scale = CONFIG.scale;
//       root.dataset.alternate = CONFIG.alternate;
//     };

//     const updateLIMIT = () => {
//       LIMIT.disabled = !CONFIG.hue;
//     };

//     CTRL.addBinding(CONFIG, 'radius', { min: 0, max: 50, step: 1, label: 'Radius' });
//     CTRL.addBinding(CONFIG, 'distance', { min: 5, max: 50, step: 1, label: 'Distance (vmin)' });
//     CTRL.addBinding(CONFIG, 'speed', { min: 0.1, max: 10, step: 0.1, label: 'Speed (s)' });
//     CTRL.addBinding(CONFIG, 'alternate', { label: 'Alternate' });
//     CTRL.addBinding(CONFIG, 'scale', { label: 'Animate Scale' });

//     const COLOR = CTRL.addFolder({ title: 'Color' });
//     COLOR.addBinding(CONFIG, 'hue', { label: 'Animate Hue' });
//     COLOR.addBinding(CONFIG, 'lightness', { min: 0, max: 1, step: 0.01, label: 'Lightness' });
//     COLOR.addBinding(CONFIG, 'chroma', { min: 0, max: 3, step: 0.1, label: 'Chroma' });
//     COLOR.addBinding(CONFIG, 'hueBase', { min: 0, max: 360, step: 1, label: 'Hue Base' });
//     const LIMIT = COLOR.addBinding(CONFIG, 'hueDestination', { min: 0, max: 360, step: 1, label: 'Hue Limit' });
//     updateLIMIT();

//     CTRL.on('change', () => {
//       updateRootStyles();
//       updateRootDataset();
//       updateLIMIT();
//     });

//     updateRootStyles();
//     updateRootDataset();
//   }, []); // Ensure that the effect runs only once

//   return (
//     <main id='landingPage'>
//       <div className="left-side">
//         <div className="rings" style={{'--count': 20}}>
//           {[...Array(20)].map((_, index) => (
//             <div key={index} className="ring" style={{'--index': index + 1}}></div>
//           ))}
//         </div>
//       </div>
//       <div className="right-side-content">
//         <h1>Welcome to Shikai-mini</h1>
//         <br />
//         <h2>Join today</h2>
//         <br />
//         <button onClick={onClick}>Go to Shikai-mini</button>
//         <p>
//             Enjoy free anime with high quality
//         </p>
//       </div>
//     </main>
//   );
// }

// export default LandingPage;
