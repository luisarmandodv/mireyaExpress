
const fakeAction = {
  id: 0,
  title: "Fake Action",
}

export function fakeActionPost(){
  return {
    type: 'FAKE_ACTION',
    fakeObject: fakeAction
  }
}
