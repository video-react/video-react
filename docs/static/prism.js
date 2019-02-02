/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+bash+jsx */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function() {
    var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = (_self.Prism = {
        util: {
          encode: function(e) {
            return e instanceof a
              ? new a(e.type, n.util.encode(e.content), e.alias)
              : 'Array' === n.util.type(e)
              ? e.map(n.util.encode)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function(e) {
            return Object.prototype.toString
              .call(e)
              .match(/\[object (\w+)\]/)[1];
          },
          objId: function(e) {
            return (
              e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id
            );
          },
          clone: function(e) {
            var t = n.util.type(e);
            switch (t) {
              case 'Object':
                var a = {};
                for (var r in e)
                  e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
                return a;
              case 'Array':
                return (
                  e.map &&
                  e.map(function(e) {
                    return n.util.clone(e);
                  })
                );
            }
            return e;
          }
        },
        languages: {
          extend: function(e, t) {
            var a = n.util.clone(n.languages[e]);
            for (var r in t) a[r] = t[r];
            return a;
          },
          insertBefore: function(e, t, a, r) {
            r = r || n.languages;
            var l = r[e];
            if (2 == arguments.length) {
              a = arguments[1];
              for (var i in a) a.hasOwnProperty(i) && (l[i] = a[i]);
              return l;
            }
            var o = {};
            for (var s in l)
              if (l.hasOwnProperty(s)) {
                if (s == t)
                  for (var i in a) a.hasOwnProperty(i) && (o[i] = a[i]);
                o[s] = l[s];
              }
            return (
              n.languages.DFS(n.languages, function(t, n) {
                n === r[e] && t != e && (this[t] = o);
              }),
              (r[e] = o)
            );
          },
          DFS: function(e, t, a, r) {
            r = r || {};
            for (var l in e)
              e.hasOwnProperty(l) &&
                (t.call(e, l, e[l], a || l),
                'Object' !== n.util.type(e[l]) || r[n.util.objId(e[l])]
                  ? 'Array' !== n.util.type(e[l]) ||
                    r[n.util.objId(e[l])] ||
                    ((r[n.util.objId(e[l])] = !0),
                    n.languages.DFS(e[l], t, l, r))
                  : ((r[n.util.objId(e[l])] = !0),
                    n.languages.DFS(e[l], t, null, r)));
          }
        },
        plugins: {},
        highlightAll: function(e, t) {
          var a = {
            callback: t,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run('before-highlightall', a);
          for (
            var r,
              l = a.elements || document.querySelectorAll(a.selector),
              i = 0;
            (r = l[i++]);

          )
            n.highlightElement(r, e === !0, a.callback);
        },
        highlightElement: function(t, a, r) {
          for (var l, i, o = t; o && !e.test(o.className); ) o = o.parentNode;
          o &&
            ((l = (o.className.match(e) || [, ''])[1]), (i = n.languages[l])),
            (t.className =
              t.className.replace(e, '').replace(/\s+/g, ' ') +
              ' language-' +
              l),
            (o = t.parentNode),
            /pre/i.test(o.nodeName) &&
              (o.className =
                o.className.replace(e, '').replace(/\s+/g, ' ') +
                ' language-' +
                l);
          var s = t.textContent,
            u = { element: t, language: l, grammar: i, code: s };
          if (!s || !i) return n.hooks.run('complete', u), void 0;
          if ((n.hooks.run('before-highlight', u), a && _self.Worker)) {
            var c = new Worker(n.filename);
            (c.onmessage = function(e) {
              (u.highlightedCode = e.data),
                n.hooks.run('before-insert', u),
                (u.element.innerHTML = u.highlightedCode),
                r && r.call(u.element),
                n.hooks.run('after-highlight', u),
                n.hooks.run('complete', u);
            }),
              c.postMessage(
                JSON.stringify({
                  language: u.language,
                  code: u.code,
                  immediateClose: !0
                })
              );
          } else
            (u.highlightedCode = n.highlight(u.code, u.grammar, u.language)),
              n.hooks.run('before-insert', u),
              (u.element.innerHTML = u.highlightedCode),
              r && r.call(t),
              n.hooks.run('after-highlight', u),
              n.hooks.run('complete', u);
        },
        highlight: function(e, t, r) {
          var l = n.tokenize(e, t);
          return a.stringify(n.util.encode(l), r);
        },
        tokenize: function(e, t) {
          var a = n.Token,
            r = [e],
            l = t.rest;
          if (l) {
            for (var i in l) t[i] = l[i];
            delete t.rest;
          }
          e: for (var i in t)
            if (t.hasOwnProperty(i) && t[i]) {
              var o = t[i];
              o = 'Array' === n.util.type(o) ? o : [o];
              for (var s = 0; s < o.length; ++s) {
                var u = o[s],
                  c = u.inside,
                  g = !!u.lookbehind,
                  h = !!u.greedy,
                  f = 0,
                  d = u.alias;
                u = u.pattern || u;
                for (var p = 0; p < r.length; p++) {
                  var m = r[p];
                  if (r.length > e.length) break e;
                  if (!(m instanceof a)) {
                    u.lastIndex = 0;
                    var y = u.exec(m),
                      v = 1;
                    if (!y && h && p != r.length - 1) {
                      var b = r[p + 1].matchedStr || r[p + 1],
                        k = m + b;
                      if (
                        (p < r.length - 2 &&
                          (k += r[p + 2].matchedStr || r[p + 2]),
                        (u.lastIndex = 0),
                        (y = u.exec(k)),
                        !y)
                      )
                        continue;
                      var w = y.index + (g ? y[1].length : 0);
                      if (w >= m.length) continue;
                      var _ = y.index + y[0].length,
                        P = m.length + b.length;
                      if (((v = 3), P >= _)) {
                        if (r[p + 1].greedy) continue;
                        (v = 2), (k = k.slice(0, P));
                      }
                      m = k;
                    }
                    if (y) {
                      g && (f = y[1].length);
                      var w = y.index + f,
                        y = y[0].slice(f),
                        _ = w + y.length,
                        S = m.slice(0, w),
                        O = m.slice(_),
                        j = [p, v];
                      S && j.push(S);
                      var A = new a(i, c ? n.tokenize(y, c) : y, d, y, h);
                      j.push(A),
                        O && j.push(O),
                        Array.prototype.splice.apply(r, j);
                    }
                  }
                }
              }
            }
          return r;
        },
        hooks: {
          all: {},
          add: function(e, t) {
            var a = n.hooks.all;
            (a[e] = a[e] || []), a[e].push(t);
          },
          run: function(e, t) {
            var a = n.hooks.all[e];
            if (a && a.length) for (var r, l = 0; (r = a[l++]); ) r(t);
          }
        }
      }),
      a = (n.Token = function(e, t, n, a, r) {
        (this.type = e),
          (this.content = t),
          (this.alias = n),
          (this.matchedStr = a || null),
          (this.greedy = !!r);
      });
    if (
      ((a.stringify = function(e, t, r) {
        if ('string' == typeof e) return e;
        if ('Array' === n.util.type(e))
          return e
            .map(function(n) {
              return a.stringify(n, t, e);
            })
            .join('');
        var l = {
          type: e.type,
          content: a.stringify(e.content, t, r),
          tag: 'span',
          classes: ['token', e.type],
          attributes: {},
          language: t,
          parent: r
        };
        if (
          ('comment' == l.type && (l.attributes.spellcheck = 'true'), e.alias)
        ) {
          var i = 'Array' === n.util.type(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(l.classes, i);
        }
        n.hooks.run('wrap', l);
        var o = '';
        for (var s in l.attributes)
          o += (o ? ' ' : '') + s + '="' + (l.attributes[s] || '') + '"';
        return (
          '<' +
          l.tag +
          ' class="' +
          l.classes.join(' ') +
          '" ' +
          o +
          '>' +
          l.content +
          '</' +
          l.tag +
          '>'
        );
      }),
      !_self.document)
    )
      return _self.addEventListener
        ? (_self.addEventListener(
            'message',
            function(e) {
              var t = JSON.parse(e.data),
                a = t.language,
                r = t.code,
                l = t.immediateClose;
              _self.postMessage(n.highlight(r, n.languages[a], a)),
                l && _self.close();
            },
            !1
          ),
          _self.Prism)
        : _self.Prism;
    var r =
      document.currentScript ||
      [].slice.call(document.getElementsByTagName('script')).pop();
    return (
      r &&
        ((n.filename = r.src),
        document.addEventListener &&
          !r.hasAttribute('data-manual') &&
          document.addEventListener('DOMContentLoaded', n.highlightAll)),
      _self.Prism
    );
  })();
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\w\W]*?-->/,
  prolog: /<\?[\w\W]+?\?>/,
  doctype: /<!DOCTYPE[\w\W]+?>/,
  cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
      },
      'attr-value': {
        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
        inside: { punctuation: /[=>"']/ }
      },
      punctuation: /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}),
  Prism.hooks.add('wrap', function(a) {
    'entity' === a.type &&
      (a.attributes.title = a.content.replace(/&amp;/, '&'));
  }),
  (Prism.languages.xml = Prism.languages.markup),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup);
(Prism.languages.css = {
  comment: /\/\*[\w\W]*?\*\//,
  atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } },
  url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
  string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
  property: /(\b|\B)[\w-]+(?=\s*:)/i,
  important: /\B!important\b/i,
  function: /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/
}),
  (Prism.languages.css.atrule.inside.rest = Prism.util.clone(
    Prism.languages.css
  )),
  Prism.languages.markup &&
    (Prism.languages.insertBefore('markup', 'tag', {
      style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: 'language-css'
      }
    }),
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'style-attr': {
          pattern: /\s*style=("|').*?\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': { pattern: /.+/i, inside: Prism.languages.css }
          },
          alias: 'language-css'
        }
      },
      Prism.languages.markup.tag
    ));
Prism.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
  ],
  string: {
    pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /(\.|\\)/ }
  },
  keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(true|false)\b/,
  function: /[a-z0-9_]+(?=\()/i,
  number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
  keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
  function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
})),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
      greedy: !0
    }
  }),
  Prism.languages.insertBefore('javascript', 'class-name', {
    'template-string': {
      pattern: /`(?:\\\\|\\?[^\\])*?`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }),
  Prism.languages.markup &&
    Prism.languages.insertBefore('markup', 'tag', {
      script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: 'language-javascript'
      }
    }),
  (Prism.languages.js = Prism.languages.javascript);
!(function(e) {
  var t = {
    variable: [
      {
        pattern: /\$?\(\([\w\W]+?\)\)/,
        inside: {
          variable: [
            { pattern: /(^\$\(\([\w\W]+)\)\)/, lookbehind: !0 },
            /^\$\(\(/
          ],
          number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
          operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      {
        pattern: /\$\([^)]+\)|`[^`]+`/,
        inside: { variable: /^\$\(|^`|\)$|`$/ }
      },
      /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i
    ]
  };
  e.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
      alias: 'important'
    },
    comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
    string: [
      {
        pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
        lookbehind: !0,
        inside: t
      },
      { pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g, inside: t }
    ],
    variable: t.variable,
    function: {
      pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
      lookbehind: !0
    },
    boolean: {
      pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
      lookbehind: !0
    },
    operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
  };
  var a = t.variable[1].inside;
  (a['function'] = e.languages.bash['function']),
    (a.keyword = e.languages.bash.keyword),
    (a.boolean = e.languages.bash.boolean),
    (a.operator = e.languages.bash.operator),
    (a.punctuation = e.languages.bash.punctuation);
})(Prism);
!(function(a) {
  var e = a.util.clone(a.languages.javascript);
  (a.languages.jsx = a.languages.extend('markup', e)),
    (a.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i),
    (a.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i);
  var s = a.util.clone(a.languages.jsx);
  delete s.punctuation,
    (s = a.languages.insertBefore(
      'jsx',
      'operator',
      { punctuation: /=(?={)|[{}[\];(),.:]/ },
      { jsx: s }
    )),
    a.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
          inside: s,
          alias: 'language-javascript'
        }
      },
      a.languages.jsx.tag
    );
})(Prism);
