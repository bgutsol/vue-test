const defaultItemHeight = 100;

const defaultList = [
  { id: 1, height: defaultItemHeight },
  { id: 2, height: defaultItemHeight },
  { id: 3, height: defaultItemHeight },
];

// mutations
const mutations = {
  updateItemHeight(state, { id, height } = {}) {
    const listItem = state.list.find(item => item.id === id);
    listItem.height = height;
  },
  updateList(state, value) {
    state.list = value;
  },
  removeListItem(state, item) {
    const itemIndex = state.list.indexOf(item);
    state.list.splice(itemIndex, 1);
  },
  addListItem(state) {
    state.currentId += 1;

    state.list.push({
      id: state.currentId,
      height: defaultItemHeight,
    });
  },
};

export default {
  namespaced: true,
  state: {
    list: [...defaultList],
    currentId: defaultList.length,
  },
  mutations,
  strict: process.env.NODE_ENV !== 'production',
};
