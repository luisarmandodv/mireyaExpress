export default function (state = {}, action) {
  switch (action.type) {
    case 'FAKE_ACTION':
      return action.fakeAction;
    default:
      return state;
  }
}
