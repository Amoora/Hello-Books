export const dummyData = {
    books: { 
        1: {
            "id": 1,
            "title": "the girl on the train",
            "description":'novel ful of suspence',
            "author": "Paula Hawking",
            "publisher": 'tk publishers',
            "Year": 2001,
            "borrowed": 105,
            
        
           
        },
        2: {
           "id": 2,
            "title": "the woods",
            "decription":'novel ful of suspence and thrills',
            "author": "timothy james",
            "publisher": 'jth bros publishers',
            "Year": 2012,
            "borrowed": 60,
            
        }
    },
   
};
  
export const getObjectId = (objectType) => {
    const DataTypes = ['books'];
    if (dummyDataTypes.indexOf(objectType) !== -1 ){
      let id =  Object.keys(dummyData[objectType]).length + 1;
      return id;
    } else throw new Error (`dummyData type: ${objectType} not yet created`);
};

