import elementResizeDetectorMaker from 'element-resize-detector';
import _ from 'lodash';
import store from '@/store';

const elementResizeDetector = elementResizeDetectorMaker();

const resizeHandler = itemId => _.throttle((element) => {
  const props = {
    id: itemId,
    height: element.offsetHeight,
  };

  store.commit('desktop/updateItemHeight', props);
}, 500);

export function setTileResizeListener(target, itemId) {
  elementResizeDetector.listenTo(target, resizeHandler(itemId));
}

export function removeTileResizeListener(target) {
  elementResizeDetector.removeAllListeners(target);
}
