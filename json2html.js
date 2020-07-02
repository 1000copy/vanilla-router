export class JSON2HTML {
  static get selfCloseTags() {
    return [
      'area', 'base', 'br', 'col', 'embed', 'hr',
      'img', 'input', 'link', 'meta', 'param', 'source',
      'track', 'wbr', 'command', 'keygen', 'menuitem',
    ];
  }

  static build(json) {
    if (!json || !json.tag) return '';
    const attributes = JSON2HTMLBuilder.attributes(json);
    if (JSON2HTMLBuilder.isSelfCloseTag(json)) {
      return `<${json.tag} ${attributes}/>`;
    }
    const children = JSON2HTMLBuilder.children(json);
    return `<${json.tag} ${attributes}>${children}</${json.tag}>`;
  }
}

class JSON2HTMLBuilder {
  static attributes(json) {
    if (!json.attr) return '';
    let html = '';
    const keys = Object.keys(json.attr);
    for (const index in keys) {
      if ({}.hasOwnProperty.call(keys, index)) {
        html += ` ${keys[index]}="${json.attr[keys[index]]}"`;
      }
    }
    return html;
  }

  static children(json) {
    if (!json.child) return '';
    let html = '';
    for (const index in json.child) {
      if ({}.hasOwnProperty.call(json.child, index)) {
        if (typeof json.child[index] == 'object') {
          html += JSON2HTML.build(json.child[index]);
        } else {
          html +=json.child[index];
        }
      }
    }
    return html;
  }

  static isSelfCloseTag(json) {
    return (JSON2HTML.selfCloseTags.indexOf(json.tag)>-1);
  }
};