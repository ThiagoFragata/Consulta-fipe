export function updateData(currentObject: any, newDataObject: any) {
  Object.keys(currentObject).forEach((keyCurrentObject) => {
    Object.keys(newDataObject).forEach((keyNewDataObject) => {
      if (keyCurrentObject === keyNewDataObject) {
        currentObject[keyCurrentObject] = newDataObject[keyNewDataObject];
      }
    });
  });

  return currentObject;
}

const dataUpdate = updateData(
  { name: 'Rafael', country: 'Chile', age: 42 },
  { name: 'Camiseta Polo', price: 59.9, amount: 30 }
);
console.log(dataUpdate);
