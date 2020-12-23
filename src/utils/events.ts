import { SyntheticEvent } from 'react';

export const executeEventCallback = (
    e: SyntheticEvent<any>,
    callback: (e: SyntheticEvent<any>) => void,
) => {
    if (typeof callback === 'function') {
        callback(e);
    }
};

export const executeEvent = (e: SyntheticEvent<any>, props: any) => {
    if (e.type === 'mousedown') {
        executeEventCallback(e, props.onMouseDown);
    } else if (e.type === 'mouseup') {
        executeEventCallback(e, props.onMouseUp);
    } else if (e.type === 'mouseenter') {
        executeEventCallback(e, props.onMouseEnter);
    } else if (e.type === 'mouseleave') {
        executeEventCallback(e, props.onMouseLeave);
    } else if (e.type === 'click') {
        executeEventCallback(e, props.onClick);
    } else if (e.type === 'touchstart') {
        executeEventCallback(e, props.onTouchStart);
    } else if (e.type === 'touchend') {
        executeEventCallback(e, props.onTouchEnd);
    }
};
