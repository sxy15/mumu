const doc = document;

export const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },

  createElement: (tag): Element => {
    const el = doc.createElement(tag);

    return el;
  },

  setElementText: (el, text) => {
    el.textContent = text;
  },

  remove: (child) => {
    const parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },

  createText: (text) => {
    return doc.createTextNode(text);
  },

  setText: (node, text) => {
    node.nodeValue = text;
  },

  createComment: (text) => {
    return doc.createComment(text);
  }
}