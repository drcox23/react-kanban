let cardInfo = [{
    id: 1,
    title: "UI Fix",
    details: "Fixing the UI",
    priority: "Low",
    status: "In Queue",
    createdBy: "Doug",
    assignedTo: "Doug"
  },
  {
    id: 2,
    title: "Database Updates",
    details: "Upgrade the database",
    priority: "High",
    status: "In Progress",
    createdBy: "Doug",
    assignedTo: "Bob"
  },
  {
    id: 3,
    title: "Wireframe - Home Page",
    details: "Create wireframes for home page",
    priority: "High",
    status: "Done",
    createdBy: "Doug",
    assignedTo: "Joe"
  }
];

let newId = 4;

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cardInfo.slice())
  }, 500)
})

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
  setTimeout(() => {
    item.id = newId;
    newId++;
    cardInfo.push(item);
    console.log('cardInfo', cardInfo)
    resolve(cardInfo)
  }, 500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const itemResponse = cardInfo.find(item => item.id === itemId);
    if (itemResponse) resolve(itemResponse);
    else reject({
      status: 404,
      message: 'item not found'
    })
  }, 500)
})

export const deleteItemByIdFromFakeXHR = (itemId) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const itemIdx = cardInfo.findIndex(item => item.id === itemId);
    if (itemIdx === -1) {
      reject({
        status: 500,
        message: 'item not found'
      })
    } else {
      cardInfo = cardInfo.filter(item => {
        return item.id !== itemId
      })
      console.log('cardInfo', cardInfo)
      console.log('itemIdx', itemIdx)
      resolve({
        status: 'ok'
      })
    }
  })
})