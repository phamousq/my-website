// module.exports = {
//   someSidebar: {
//     'Getting Started': ['styleGuide', 'aboutMe', 'doc3'],
//     Features: ['mdx'],
//   }
// };

const { listPaths } = require('./src/components');

let workingDocs = listPaths('working');

module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'startHere',
    },
    {
      type: 'doc',
      id: 'currentlyUsing',
    },
    {
      type: 'doc',
      id: 'styleGuide',
    },
    {
      type: 'category',
      label: 'Working',
      items: workingDocs,
    },
  ],
};

