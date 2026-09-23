/* @ds-bundle: {"format":4,"namespace":"JourneyChurchDesignSystem_84738d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"ArtFrame","sourcePath":"components/graphics/ArtFrame.jsx"},{"name":"ArtScripture","sourcePath":"components/graphics/ArtScripture.jsx"},{"name":"ArtText","sourcePath":"components/graphics/ArtText.jsx"},{"name":"Logistics","sourcePath":"components/graphics/Logistics.jsx"},{"name":"Logo","sourcePath":"components/graphics/Logo.jsx"},{"name":"LowerThird","sourcePath":"components/graphics/LowerThird.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Disclose","sourcePath":"components/structure/Disclose.jsx"},{"name":"Facts","sourcePath":"components/structure/Facts.jsx"},{"name":"Meter","sourcePath":"components/structure/Meter.jsx"},{"name":"Step","sourcePath":"components/structure/Step.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"Headline","sourcePath":"components/typography/Headline.jsx"},{"name":"Scripture","sourcePath":"components/typography/Scripture.jsx"}],"sourceHashes":{"assets/js/frames.js":"df825602f42e","assets/js/journey.js":"afc82c027312","components/actions/Button.jsx":"34f2ae1360cf","components/forms/Field.jsx":"4e225a53c3a4","components/graphics/ArtFrame.jsx":"411a46520d3b","components/graphics/ArtScripture.jsx":"09b8ce51c84c","components/graphics/ArtText.jsx":"35264e3f4b62","components/graphics/Logistics.jsx":"83843adb0e56","components/graphics/Logo.jsx":"cef0e503f439","components/graphics/LowerThird.jsx":"242333377259","components/navigation/Footer.jsx":"b7fc4e5915e8","components/navigation/Nav.jsx":"d3643ddac617","components/structure/Disclose.jsx":"4b04adbb6aa9","components/structure/Facts.jsx":"74280a09efd3","components/structure/Meter.jsx":"bb6c8872e570","components/structure/Step.jsx":"e838468c9bfc","components/typography/Eyebrow.jsx":"9d935f09f51f","components/typography/Headline.jsx":"db59dcdb83d9","components/typography/Scripture.jsx":"ab08e9ad665f","ministries/good-living-food-pantry/graphic.js":"bad0ed659d30","ministries/good-work/gw.js":"72e3d221c6df","ministries/jc-connect-membership-class/connect.js":"b91da984b7ee","ministries/journey-women/women.js":"1c9b80dc539a","ui_kits/journey-command/Command.jsx":"347aab9e00b6","ui_kits/journey-command/EventsScreen.jsx":"b97c076e5a8a","ui_kits/journey-command/OverviewScreen.jsx":"7cbfdc9b2d5e","ui_kits/journey-command/SeriesScreen.jsx":"62af372ae870","ui_kits/journey-command/Sidebar.jsx":"28fddf4686f7","ui_kits/journey-command/fit.jsx":"4c5dfa64980e","ui_kits/journeychurch-org/GiveScreen.jsx":"6b630fc3cdc5","ui_kits/journeychurch-org/HomeScreen.jsx":"c2474a13e841","ui_kits/journeychurch-org/MessagesScreen.jsx":"db4acab37ac5","ui_kits/journeychurch-org/Site.jsx":"7df28484ff62","ui_kits/journeychurch-org/VisitScreen.jsx":"64ed3ca5306c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JourneyChurchDesignSystem_84738d = window.JourneyChurchDesignSystem_84738d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/js/frames.js
try { (() => {
// Scales fixed-pixel .art boards to fit their .fr container. No dependencies.
// Extends Brand Guide brand/js/frames.js with a MutationObserver so boards that
// React inserts after load are fitted too.
(function () {
  function fit(fr) {
    const cs = getComputedStyle(fr);
    const w = parseFloat(cs.getPropertyValue('--w')) || 1080;
    const h = parseFloat(cs.getPropertyValue('--h')) || w;
    if (fr.parentElement === document.body && document.querySelectorAll('body>.fr').length === 1) {
      const vw = document.documentElement.clientWidth,
        vh = window.innerHeight;
      const fw = Math.min(vw, vh * w / h);
      fr.style.width = fw + 'px';
      fr.style.margin = '0';
      fr.style.left = Math.max(0, (vw - fw) / 2) + 'px';
      fr.style.top = Math.max(0, (vh - fw * h / w) / 2) + 'px';
      document.body.style.overflow = 'hidden';
    }
    const s = fr.clientWidth / w;
    fr.querySelectorAll(':scope>.art').forEach(a => {
      a.style.transformOrigin = '0 0';
      a.style.transform = 'scale(' + s + ')';
    });
  }
  function all() {
    document.querySelectorAll('.fr').forEach(fit);
  }
  const ro = 'ResizeObserver' in window ? new ResizeObserver(es => es.forEach(e => fit(e.target))) : null;
  const seen = new WeakSet();
  function observe() {
    document.querySelectorAll('.fr').forEach(f => {
      if (ro && !seen.has(f)) {
        seen.add(f);
        ro.observe(f);
      }
      fit(f);
    });
  }
  window.fitFrames = observe;
  document.addEventListener('DOMContentLoaded', observe);
  window.addEventListener('load', observe);
  window.addEventListener('resize', all);
  if ('MutationObserver' in window) {
    new MutationObserver(() => observe()).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  observe();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/js/frames.js", error: String((e && e.message) || e) }); }

// assets/js/journey.js
try { (() => {
/* Journey Church — the only site-wide behaviour. One curve, staggered reveal.
   Ported verbatim from Brand Guide brand/js/journey.js. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) {
      el.classList.add('in');
    });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var group = e.target.parentElement ? Array.prototype.filter.call(e.target.parentElement.children, function (c) {
          return c.classList.contains('reveal');
        }) : [];
        var i = group.indexOf(e.target);
        e.target.style.transitionDelay = (i > 0 ? i * 0.09 : 0) + 's';
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12
    });
    items.forEach(function (el) {
      io.observe(el);
    });
  }
  document.querySelectorAll('.meter').forEach(function (m) {
    var bar = m.querySelector('span'),
      pct = Math.max(0, Math.min(100, parseFloat(m.dataset.pct || 0)));
    if (!bar) return;
    if (reduce || !('IntersectionObserver' in window)) {
      bar.style.width = pct + '%';
      return;
    }
    new IntersectionObserver(function (es, o) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          bar.style.width = pct + '%';
          o.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.4
    }).observe(m);
  });
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = btn.closest('.nav'),
        open = nav.dataset.open === 'true';
      nav.dataset.open = open ? 'false' : 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.textContent = open ? 'Menu' : 'Close';
    });
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/js/journey.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* All pill. Four variants, two sizes. Renders <a> when href is set, <button> otherwise.
   The arrow, when asked for, is typographic — there is no icon set. */
const VARIANTS = {
  primary: 'btn-primary',
  dark: 'btn-dark',
  ghost: 'btn-ghost',
  outline: 'btn-outline'
};
function Button({
  variant = 'primary',
  size = 'default',
  href,
  arrow = false,
  children,
  className = '',
  ...rest
}) {
  const cls = `${VARIANTS[variant] || VARIANTS.primary} ${size === 'sm' ? 'btn-sm' : ''} ${arrow ? 'arrow' : ''} ${className}`.replace(/\s+/g, ' ').trim();
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two styles, decided by ground. Underline on dark. Boxed, square corners, on cream.
   Ember on focus in both. */
function Field({
  label,
  id,
  style = 'underline',
  as = 'input',
  className = '',
  ...rest
}) {
  const Tag = as === 'textarea' ? 'textarea' : as === 'select' ? 'select' : 'input';
  const base = style === 'box' ? 'field-box' : 'field';
  return /*#__PURE__*/React.createElement("div", {
    className: `stack ${className}`.trim(),
    style: {
      gap: '.2rem'
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "field-label",
    htmlFor: id
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    className: base
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/graphics/ArtFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A fixed-pixel artboard that scales to fit whatever width it is given.
   Everything inside is authored at real output pixels — 1080 square, 1080x1920 story,
   1920x1080 screen — so the type floors in the brand guide stay honest. */
function ArtFrame({
  width = 1080,
  height = 1080,
  ground = 'cream',
  pad,
  photo,
  scrim = 'bottom',
  tooth = false,
  grain = false,
  safe = false,
  children,
  className = '',
  style,
  ...rest
}) {
  const frame = React.useRef(null);
  const board = React.useRef(null);
  React.useEffect(() => {
    const fit = () => {
      if (!frame.current || !board.current) return;
      board.current.style.transform = 'scale(' + frame.current.clientWidth / width + ')';
    };
    fit();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null;
    if (ro && frame.current) ro.observe(frame.current);
    window.addEventListener('resize', fit);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [width]);
  const groundCls = ground === 'dark' ? 'dark' : ground === 'deep' ? 'deep' : '';
  const scrimCls = scrim === 'top' ? 'scrim-top' : scrim === 'left' ? 'scrim-left' : scrim === 'flat' ? 'scrim-flat' : '';
  const safePx = width === height ? 80 : height > width ? 250 : 96;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: frame,
    className: `fr ${className}`.trim(),
    style: {
      '--w': width,
      '--h': height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: board,
    className: `art ${pad ? 'pad' : ''} ${groundCls} ${tooth ? 'tooth' : ''} ${grain ? 'grain' : ''} ${photo ? 'on-photo' : ''}`.replace(/\s+/g, ' ').trim(),
    style: {
      '--pad': pad ? pad + 'px' : undefined,
      color: photo ? 'var(--ink-50)' : undefined
    }
  }, photo ? /*#__PURE__*/React.createElement("div", {
    className: `photo ${scrimCls}`.trim()
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: `url('${photo}')`
    }
  })) : null, children, safe ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "safe",
    style: {
      '--safe': safePx + 'px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "safe-lbl",
    style: {
      '--safe': safePx + 'px'
    }
  }, "Safe ", safePx)) : null));
}
Object.assign(__ds_scope, { ArtFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/ArtFrame.jsx", error: String((e && e.message) || e) }); }

// components/graphics/ArtScripture.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Scripture at artboard scale. Newsreader, reference as the red eyebrow.
   Floor on a 1920 stage screen is 80px. */
function ArtScripture({
  reference,
  size = 72,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: style
  }, rest), reference ? /*#__PURE__*/React.createElement("p", {
    className: "a-eb"
  }, reference) : null, /*#__PURE__*/React.createElement("p", {
    className: "a-scripture",
    style: {
      '--h1': size + 'px',
      marginTop: reference ? 28 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { ArtScripture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/ArtScripture.jsx", error: String((e && e.message) || e) }); }

// components/graphics/ArtText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Eyebrow plus headline at artboard scale. Floors: eyebrow 26px, headline 86px.
   One italic red accent word, same rule as the web. */
function ArtText({
  eyebrow,
  accent,
  size = 120,
  eyebrowSize = 26,
  series = false,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: style
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "a-eb",
    style: {
      '--eb': eyebrowSize + 'px'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("p", {
    className: series ? 'a-series' : 'a-h',
    style: {
      '--h1': size + 'px',
      marginTop: eyebrow ? 24 : 0
    }
  }, children, accent && !series ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("em", null, accent)) : null));
}
Object.assign(__ds_scope, { ArtText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/ArtText.jsx", error: String((e && e.message) || e) }); }

// components/graphics/Logistics.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* When, where, what it costs — at artboard scale. Label 22px, value 36px.
   Two or three cells, never four. Sits directly above the logo, always. */
function Logistics({
  items = [],
  gap = 36,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: `logi ${className}`.trim(),
    style: {
      gap,
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label
  }, /*#__PURE__*/React.createElement("dt", null, it.label), /*#__PURE__*/React.createElement("dd", null, it.value))));
}
Object.assign(__ds_scope, { Logistics });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/Logistics.jsx", error: String((e && e.message) || e) }); }

// components/graphics/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The lockup. Never retyped, never recolored, never ghosted, never cropped.
   On a graphic it sits in the same corner at the same size every time:
   bottom-right 360px on 1920 art, bottom-left 280px on 1080 squares. */
const FILES = {
  horizontal: {
    cream: 'horizontal-ember_ink.png',
    dark: 'horizontal-ember_cream.png',
    photo: 'horizontal-white.png',
    red: 'horizontal-white.png',
    ink: 'horizontal-ink.png'
  },
  stacked: {
    cream: 'stacked-ember_ink.png',
    dark: 'stacked-ember_cream.png',
    photo: 'stacked-white.png',
    red: 'stacked-white.png',
    ink: 'stacked-ink.png'
  },
  mark: {
    cream: 'mark-ink.png',
    dark: 'mark-ember.png',
    photo: 'mark-white.png',
    red: 'mark-white.png',
    ink: 'mark-ink.png'
  },
  wordmark: {
    cream: 'wordmark-ink.png',
    dark: 'wordmark-cream.png',
    photo: 'wordmark-cream.png',
    red: 'wordmark-cream.png',
    ink: 'wordmark-ink.png'
  }
};
function Logo({
  variant = 'horizontal',
  on = 'cream',
  width = 260,
  base = 'assets/logo',
  src,
  corner,
  alt = 'Journey Church',
  className = '',
  style,
  ...rest
}) {
  const file = src || `${base}/${(FILES[variant] || FILES.horizontal)[on] || FILES.horizontal.cream}`;
  const pos = corner ? {
    position: 'absolute',
    zIndex: 4,
    [corner.includes('left') ? 'left' : 'right']: corner.gap ?? 80,
    [corner.includes('top') ? 'top' : 'bottom']: corner.gap ?? 80
  } : null;
  return /*#__PURE__*/React.createElement("img", _extends({
    className: `a-logo ${variant === 'mark' ? 'mk' : ''} ${className}`.replace(/\s+/g, ' ').trim(),
    src: file,
    alt: alt,
    style: {
      width,
      ...pos,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/Logo.jsx", error: String((e && e.message) || e) }); }

// components/graphics/LowerThird.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Stage name plate. Left 96px, bottom 96px, on a 1920x1080 screen.
   A series may restyle the type but never move it. Slides in from the left over 0.6s. */
function LowerThird({
  name,
  role,
  left = 96,
  bottom = 96,
  seriesFace = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lower3 ${className}`.trim(),
    style: {
      left,
      bottom,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "name",
    style: seriesFace ? {
      fontFamily: "'Archivo',sans-serif",
      fontStretch: '125%',
      fontWeight: 900,
      textTransform: 'uppercase',
      fontSize: 44,
      letterSpacing: 0
    } : undefined
  }, name), role ? /*#__PURE__*/React.createElement("p", {
    className: "role"
  }, role) : null));
}
Object.assign(__ds_scope, { LowerThird });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/LowerThird.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Deepest ink field, grain over it, columns of plain links. */
function Footer({
  blurb,
  columns = [],
  base,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: `footer grain ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, blurb ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow ember-dot"
  }, blurb.title), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginTop: '.9rem',
      fontSize: '.92rem',
      maxWidth: '20rem'
    }
  }, blurb.text)) : null, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href + l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label))))))), base ? /*#__PURE__*/React.createElement("div", {
    className: "footer-base"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, base.left), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, base.right)) : null));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sticky cream bar, one hairline, no shadow. The brand is set type by default;
   pass logoSrc to use the horizontal lockup file instead — never retype the logo
   when you have the file. */
function Nav({
  brand = 'Journey Church',
  logoSrc,
  href = '/',
  links = [],
  cta,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: `nav ${className}`.trim(),
    "data-open": open ? 'true' : 'false'
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container-x nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: href
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand,
    style: {
      display: 'block',
      width: 170
    }
  }) : brand), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href + l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    "aria-current": l.current ? 'page' : undefined
  }, l.label))), cta ? /*#__PURE__*/React.createElement("li", null, cta) : null), /*#__PURE__*/React.createElement("button", {
    className: "nav-toggle",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, open ? 'Close' : 'Menu')));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/structure/Disclose.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FAQ row. Hairline on top, a red chevron built from two borders, nothing else.
   Native <details> so it works without script. */
function Disclose({
  summary,
  defaultOpen = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("details", _extends({
    className: `disclose ${className}`.trim(),
    open: defaultOpen
  }, rest), /*#__PURE__*/React.createElement("summary", null, summary), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", null, children) : children);
}
Object.assign(__ds_scope, { Disclose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Disclose.jsx", error: String((e && e.message) || e) }); }

// components/structure/Facts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The logistics block a visitor actually came for. Two or three cells, never four —
   if it needs four, it needs a web page. Label above, value below. */
function Facts({
  items = [],
  columns,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: `facts ${className}`.trim(),
    style: columns ? {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      gap: '0 2rem'
    } : undefined
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label
  }, /*#__PURE__*/React.createElement("dt", null, it.label), /*#__PURE__*/React.createElement("dd", null, it.value))));
}
Object.assign(__ds_scope, { Facts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Facts.jsx", error: String((e && e.message) || e) }); }

// components/structure/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Campaign progress. Fills from zero on mount over 1.6s on the house curve. */
function Meter({
  pct = 0,
  left,
  right,
  className = '',
  ...rest
}) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setW(pct);
      return;
    }
    const t = setTimeout(() => setW(pct), 60);
    return () => clearTimeout(t);
  }, [pct]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "meter"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${Math.max(0, Math.min(100, w))}%`
    }
  })), left || right ? /*#__PURE__*/React.createElement("div", {
    className: "meter-row"
  }, /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", null, right)) : null);
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Meter.jsx", error: String((e && e.message) || e) }); }

// components/structure/Step.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Numbered step. The red numeral is the only ornament. */
function Step({
  number,
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `step ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, number), title ? /*#__PURE__*/React.createElement("h3", {
    className: "display t-h3"
  }, title) : null, typeof children === 'string' ? /*#__PURE__*/React.createElement("p", null, children) : children);
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/structure/Step.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small caps label above a headline. Names the moment.
   On cream it is --ember-small (accessibility floor for red text under ~26px).
   On dark and deep grounds journey.css flips it to --ember automatically. */
function Eyebrow({
  dot = false,
  line = false,
  tone = 'ember',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: `t-eyebrow ${tone === 'ember' ? 'text-ember' : ''} ${dot ? 'ember-dot' : ''} ${className}`.replace(/\s+/g, ' ').trim()
  }, rest), children, line ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '.8rem'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  })) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/Headline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The church's voice: Inter Tight 800, tracking -0.035em, line-height 0.95.
   Every headline gets exactly ONE italic red word, and it is the emotional beat —
   never "the", "and", or "of". Pass it as `accent`; it is appended to `children`,
   or you can place <em> yourself inside children and leave accent off. */
const SIZES = {
  hero: 't-hero',
  display: 't-display',
  h2: 't-h2',
  h3: 't-h3'
};
function Headline({
  as = 'h2',
  size = 'display',
  accent,
  trailing = '.',
  children,
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `display ${SIZES[size] || SIZES.display} ${className}`.trim(),
    style: style
  }, rest), children, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, accent)) : null, accent && trailing ? trailing : null);
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Headline.jsx", error: String((e && e.message) || e) }); }

// components/typography/Scripture.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Newsreader. Quoted Scripture and pull-quotes ONLY — never a headline, never a title,
   never the church speaking. The italic marks the beat instead of red.
   The reference sits above as a red eyebrow. */
function Scripture({
  reference,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className
  }, rest), reference ? /*#__PURE__*/React.createElement("p", {
    className: "scripture-ref"
  }, reference) : null, /*#__PURE__*/React.createElement("p", {
    className: "scripture",
    style: style
  }, children));
}
Object.assign(__ds_scope, { Scripture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Scripture.jsx", error: String((e && e.message) || e) }); }

// ministries/good-living-food-pantry/graphic.js
try { (() => {
// Good Living Food Pantry — shared logo + event graphic builder.
(function () {
  const LOGO = `<div class="mk"><p class="w" style="letter-spacing:.1em;justify-content:flex-start;align-items:baseline">G<svg class="apple" viewBox="0 0 74 130" aria-label="O"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" style="fill:var(--apple)"></path><path d="M37 67C36 52 32 40 25 31" style="stroke:var(--leaf)" stroke-width="5" stroke-linecap="round" fill="none"></path><path d="M39 50C42 30 56 20 74 22 71 41 57 52 39 50z" style="fill:var(--leaf)"></path></svg>OD</p><p class="w" style="letter-spacing:.06em">LIVING</p><p class="fp" style="font-size:47px">FOOD PANTRY</p></div>`;
  const CSS = `.gl{--bg:#f8efe2;--ink:#2b5e2f;--fp:#9a6b3c;--apple:#6fae3d;--leaf:#2b5e2f;--dot:rgba(43,94,47,.05);position:absolute;inset:0;background:var(--bg);font-family:'Figtree',sans-serif;color:var(--ink);overflow:hidden}
.gl.gingham{background-color:#f8efe2;background-image:linear-gradient(90deg,rgba(111,174,61,.38) 50%,transparent 50%),linear-gradient(0deg,rgba(111,174,61,.38) 50%,transparent 50%);background-size:72px 72px}
.gl.gingham.wide .h{font-size:116px!important;width:auto!important;white-space:nowrap;text-wrap:nowrap}.gl.gingham.wide .k,.gl.gingham.wide .t{width:auto!important}.gl.gingham .panel{position:absolute;inset:56px;background:#f8efe2;border-radius:6px;box-shadow:0 0 0 6px #f8efe2,0 0 0 10px #2b5e2f}
.gl.green{--bg:#22482a;--ink:#f8efe2;--fp:#e3b27a;--apple:#86c24f;--leaf:#f8efe2;--dot:rgba(248,239,226,.06)}
.gl.green .wm{position:absolute;opacity:.07}
.gl.kraft{--bg:#cfae82;--ink:#1f4524;--fp:#6a4220;--apple:#5f9e34;--leaf:#1f4524;--dot:rgba(60,35,15,.12)}
.gl.kraft .fib{position:absolute;inset:0;background-image:radial-gradient(rgba(255,245,225,.35) 1px,transparent 1.5px),radial-gradient(rgba(70,40,15,.25) 1px,transparent 1.5px);background-size:37px 41px,23px 29px;background-position:0 0,11px 7px}
.gl .tooth{position:absolute;inset:0;background-image:radial-gradient(var(--dot) 1px,transparent 1px);background-size:4px 4px}
.gl .mk{display:flex;flex-direction:column;align-items:center}
.gl .w{font-weight:800;font-size:112px;line-height:.86;color:var(--ink);display:flex;align-items:baseline;margin:0}
.gl .apple{width:92px;height:162px;margin:0 .03em 0 .01em;display:block;transform:translateY(6px)}
.gl .fp{margin:4px 0 0;line-height:1;white-space:nowrap;font-weight:800;letter-spacing:.14em;margin-right:-.14em;color:var(--fp)}
.gl .lw{position:absolute;display:grid;place-items:center}
.gl p{margin:0;white-space:nowrap}
.gl .k{font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:var(--fp)}
.gl .h{font-weight:800;text-transform:uppercase;line-height:.92;letter-spacing:.01em;color:var(--ink);text-wrap:balance}
.gl .t{font-weight:700;color:var(--ink)}
.gl .rule{background:var(--apple);border-radius:3px}
.gl .jc{position:absolute;display:block}`;
  const VAR = {
    monthly: {
      k: 'Every month',
      h: ['Third', 'Saturday'],
      t: '10 AM – 1 PM'
    },
    oct17: {
      k: 'Saturday',
      h: ['October', '17'],
      t: '10 AM – 1 PM',
      wideOne: true
    }
  };
  window.buildGL = function (el, fmt, v, theme) {
    const d = VAR[v];
    const A = el.dataset.assets;
    theme = theme || 'cream';
    const W = fmt === 'wide';
    const deco = {
      cream: '<span class="tooth"></span>',
      gingham: '<span class="panel"></span>',
      green: '<span class="tooth"></span>' + (W ? '<svg class="wm" viewBox="0 0 74 130" style="right:-260px;top:-80px;width:900px;height:1580px"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" fill="#f8efe2"></path></svg>' : '<svg class="wm" viewBox="0 0 74 130" style="left:180px;bottom:-674px;width:1200px;height:2100px"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" fill="#f8efe2"></path></svg>'),
      kraft: '<span class="tooth"></span><span class="fib"></span>'
    }[theme];
    const JL = theme === 'green' ? 'horizontal-white' : 'horizontal-ink';
    if (!document.getElementById('gl-css')) {
      const st = document.createElement('style');
      st.id = 'gl-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (fmt === 'wide') {
      el.innerHTML = `<div class="gl ${theme} ${fmt}">${deco}
    <div class="lw" style="left:0;top:0;width:960px;height:1080px"><div style="transform:translateY(-24px) scale(1.65)">${LOGO}</div></div>
    <span class="rule" style="position:absolute;left:960px;top:300px;width:6px;height:480px"></span>
    <div style="position:absolute;left:1060px;top:0;height:1080px;display:flex;flex-direction:column;justify-content:center;gap:34px">
      <p class="k" style="font-size:40px">${d.k}</p>
      ${d.wideOne ? `<p class="h" style="font-size:132px;width:824px;height:121px">${d.h[0]} ${d.h[1]}</p>
      <p class="t" style="font-size:60px;margin-top:-21px;width:829px;height:93px">${d.t}</p>` : `<p class="h" style="font-size:132px">${d.h[0]}<br>${d.h[1]}</p>
      <p class="t" style="font-size:60px;margin-top:6px">${d.t}</p>`}
    </div>
    <img class="jc" src="${A}/logo/${JL}.png" alt="Journey Church" style="right:${theme === 'gingham' ? 120 : 80}px;bottom:${theme === 'gingham' ? 110 : 64}px;width:260px">
    </div>`;
    } else {
      el.innerHTML = `<div class="gl ${theme} ${fmt}">${deco}
    <div class="lw" style="left:0;right:0;top:230px;height:560px"><div style="transform:scale(1.75)">${LOGO}</div></div>
    <span class="rule" style="position:absolute;left:390px;top:860px;width:300px;height:6px"></span>
    <div style="position:absolute;left:0;right:0;top:930px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:34px">
      <p class="k" style="font-size:40px;margin-right:-.16em">${d.k}</p>
      ${d.wideOne ? `<p class="t" style="font-size:64px;margin-top:6px">${d.t}</p>
      <p class="h" style="font-size:135px;width:885px;height:129px">${d.h[0]} ${d.h[1]}</p>` : `<p class="h" style="font-size:150px">${d.h[0]}<br>${d.h[1]}</p>
      <p class="t" style="font-size:64px;margin-top:6px">${d.t}</p>`}
    </div>
    <img class="jc" src="${A}/logo/${JL}.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);top:1500px;width:280px">
    </div>`;
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ministries/good-living-food-pantry/graphic.js", error: String((e && e.message) || e) }); }

// ministries/good-work/gw.js
try { (() => {
// Good Work — Job Placement Ministry. Lockups for direction 1g (serif wordmark + handshake in Journey red).
(function () {
  const R = '#ff3a3a',
    K = '#0a0a0a',
    C = '#f7f4f0';
  const hand = (c, w) => `<svg viewBox="0 0 24 24" style="width:${w}px;height:${w}px;display:block" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.47 6.47a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>`;
  const icon = (s, bg = R, c) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:${bg};display:grid;place-items:center;flex:none">${hand(c || (bg === K ? C : K), s * .66)}</div>`;
  const tone = t => t === 'dark' ? {
    ink: C,
    sub: '#d8d1c5',
    ic: K
  } : {
    ink: K,
    sub: '#2a2824',
    ic: C
  };
  const word = (k, t, align) => {
    const o = tone(t);
    return `<div style="display:flex;flex-direction:column;align-items:${align};gap:${24 * k}px"><p style="margin:0;white-space:nowrap;font:italic 500 ${124 * k}px/0.9 'Newsreader',serif;color:${o.ink};letter-spacing:-.02em">Good Work<span style="color:${R}">.</span></p><div style="display:flex;align-items:center;gap:${20 * k}px;padding-left:${6 * k}px"><span style="width:${56 * k}px;height:${2 * k}px;background:${o.ink}"></span><p style="margin:0;white-space:nowrap;font:600 ${20 * k}px/1 'Inter Tight',sans-serif;letter-spacing:.3em;color:${o.sub}">JOB PLACEMENT MINISTRY</p>${align === 'center' ? `<span style="width:${56 * k}px;height:${2 * k}px;background:${o.ink}"></span>` : ''}</div></div>`;
  };
  window.gwIcon = icon;
  window.gwHorizontal = (k = 1, t = 'light') => `<div style="display:flex;align-items:center;gap:${40 * k}px">${icon(170 * k, R, tone(t).ic)}${word(k, t, 'flex-start')}</div>`;
  window.gwStacked = (k = 1, t = 'light') => `<div style="display:flex;flex-direction:column;align-items:center;gap:${40 * k}px">${icon(200 * k, R, tone(t).ic)}${word(k, t, 'center')}</div>`;
  window.gwWordmark = (k = 1, t = 'light') => word(k, t, 'flex-start');
  window.GW = {
    red: R,
    ink: K,
    cream: C
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ministries/good-work/gw.js", error: String((e && e.message) || e) }); }

// ministries/jc-connect-membership-class/connect.js
try { (() => {
// JC Connect — Membership Class. Shared lockup + asset builder.
(function () {
  const CSS = `.jcx{--red:#9e1413;--ink:#fff;position:absolute;inset:0;background:var(--red);font-family:'Montserrat',sans-serif;color:var(--ink);overflow:hidden}
.jcx p{margin:0;white-space:nowrap}
.jcl{position:relative;display:inline-flex;flex-direction:column;align-items:center;border:.017em solid var(--ink,#fff);color:var(--ink,#fff);padding:.2em .36em .06em;font-family:'Montserrat',sans-serif;line-height:1}
.jcl .row{display:flex;align-items:baseline;gap:.13em}
.jcl .jc{font-weight:300;font-size:.844em;letter-spacing:-.04em;line-height:.8;width:1.019em;height:.762em;padding-right:0;margin-right:.146em}
.jcl .cn{font-weight:900;font-style:italic;font-size:.86em;letter-spacing:-.045em;line-height:.8;transform:skewX(-4deg)}
.jcl .mc{font-weight:700;font-size:.142em;letter-spacing:.16em;margin:.05em -.16em 0 0;padding-left:1.45em}
.jcx .tag{font-weight:700;text-transform:uppercase;letter-spacing:.04em;display:flex;align-items:center;justify-content:center;gap:.7em}
.jcx .tag i{font-style:normal;font-weight:400}
.jcx .k{font-weight:700;text-transform:uppercase;letter-spacing:.2em}
.jcx .h{font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-.02em;line-height:.92}
.jcx .t{font-weight:600;letter-spacing:.02em}
.jcx .jc-mark{position:absolute;display:block}
.jcx.bigmc .jcl .mc{font-size:.21em;letter-spacing:.14em;margin:.12em -.14em 0 0;padding-left:1em}
.jcx .q{font-weight:600;font-style:italic;text-align:center;line-height:1.2;white-space:normal;text-wrap:balance}`;
  const LOCK = size => `<div class="jcl" style="font-size:${size}px"><div class="row"><span class="jc">JC</span><span class="cn">CONNECT</span></div><p class="mc">MEMBERSHIP CLASS</p></div>`;
  const TAG = `<span>Connect to the church</span><i>|</i><span>Connect with God</span><i>|</i><span>Connect through serving</span>`;
  window.jcConnectLogo = LOCK;
  window.buildJC = function (el, fmt, opt) {
    opt = opt || {};
    const A = el.dataset.assets || '../../assets';
    if (!document.getElementById('jcx-css')) {
      const s = document.createElement('style');
      s.id = 'jcx-css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }
    const when = opt.date ? `<p class="k" style="font-size:${fmt === 'wide' ? 34 : 40}px">${opt.day || ''}</p><p class="h" style="${fmt === 'wide' ? opt.hStyle || 'font-size:112px' : 'font-size:128px'}">${opt.date}</p><p class="t" style="font-size:${fmt === 'wide' ? 44 : 52}px">${opt.time || ''}</p>` : '';
    if (fmt === 'wide') {
      el.innerHTML = `<div class="jcx"><div style="position:absolute;left:0;right:0;top:${opt.date ? 250 : 376}px;display:flex;flex-direction:column;align-items:center;gap:${opt.date ? 48 : 58}px">
      ${LOCK(244)}
      <p class="tag" style="font-size:31px;letter-spacing:.02em">${TAG}</p>
      ${opt.date ? `<div style="display:flex;flex-direction:column;align-items:center;gap:18px;margin-top:22px">${when}</div>` : ''}
      ${opt.extra || ''}
    </div></div>`;
    } else if (opt.layout === 'a') {
      el.innerHTML = `<div class="jcx">
    <div style="position:absolute;left:0;right:0;top:560px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(146)}
      <div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>
    </div>
    <div style="position:absolute;left:0;right:0;top:1300px;display:flex;flex-direction:column;align-items:center;gap:16px">
      <span style="width:120px;height:6px;border-radius:6px;background:#fff;margin-bottom:26px"></span>
      <p class="k" style="font-size:32px;margin-right:-.2em">${opt.day}</p>
      <p class="h" style="font-size:84px">${opt.date}</p>
      <p class="t" style="font-size:40px">${opt.time}</p>
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);bottom:110px;width:260px"></div>`;
    } else if (opt.layout === 'b') {
      el.innerHTML = `<div class="jcx bigmc">
    ${opt.q ? `<p class="q" style="position:absolute;left:150px;right:150px;top:300px;font-size:50px">${opt.q}</p>` : ''}
    <div style="position:absolute;left:0;right:0;top:${opt.lockTop || (opt.q ? 560 : 520)}px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(146)}
      ${opt.tagRow ? `<p class="tag" style="font-size:${opt.tagSize || 19}px;letter-spacing:.02em;gap:.6em">${TAG}</p>` : `<div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>`}
    </div>
    <div style="position:absolute;${opt.bandPos || 'left:90px;right:90px;top:1330px'};border-top:3px solid #fff;border-bottom:3px solid #fff;padding:34px 0 30px;display:flex;flex-direction:column;align-items:center;gap:14px">
      <p class="h" style="font-size:64px">${opt.day} · ${opt.date}</p>
      <p class="t" style="font-size:40px;letter-spacing:.12em;margin-right:-.12em">${opt.time}</p>
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);bottom:110px;width:260px"></div>`;
    } else {
      el.innerHTML = `<div class="jcx"><div style="position:absolute;left:0;right:0;top:${opt.date ? 430 : 620}px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(150)}
      <div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>
      ${opt.date ? `<div style="display:flex;flex-direction:column;align-items:center;gap:22px;margin-top:40px">${when}</div>` : ''}
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);top:1500px;width:280px"></div>`;
    }
  };
  window.buildJCStoryV = function (el, v, opt) {
    opt = opt || {};
    const A = el.dataset.assets || '../../assets';
    buildJC(document.createElement('div'), 'wide');
    const tags = opt.stack ? '<div class="tag" style="font-size:34px;flex-direction:column;gap:16px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>' : '<p class="tag" style="font-size:19px;letter-spacing:.02em;gap:.6em">' + TAG + '</p>';
    const band = '<div style="width:900px;border-top:3px solid #fff;border-bottom:3px solid #fff;padding:34px 0 30px;display:flex;flex-direction:column;align-items:center;gap:14px"><p class="h" style="font-size:64px">' + opt.day + ' · ' + opt.date + '</p><p class="t" style="font-size:40px;letter-spacing:.12em;margin-right:-.12em">' + opt.time + '</p></div>';
    const group = (top, gap) => '<div style="position:absolute;left:0;right:0;top:' + top + 'px;display:flex;flex-direction:column;align-items:center;gap:' + gap + 'px;z-index:3">' + LOCK(150) + tags + '<span style="height:' + gap * .6 + 'px"></span>' + band + '</div>';
    const logo = '<img class="jc-mark" src="' + A + '/logo/horizontal-white.png" alt="Journey Church" style="z-index:4;left:50%;transform:translateX(-50%);bottom:110px;width:260px">';
    const col = '<div style="position:absolute;inset:0;background:#0b0a09 url(\'' + A + '/series/collage-a-story.png\') center/cover;z-index:0"></div>';
    let bg = '',
      g = '';
    if (v === 'tight') {
      g = group(640, 52);
    } else if (v === 'collage') {
      bg = col + '<div style="position:absolute;inset:0;background:#9e1413;mix-blend-mode:multiply;opacity:.9;z-index:1"></div><div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 42% at 50% 52%,rgba(120,12,12,.75),rgba(120,12,12,0) 100%);z-index:2"></div>';
      g = group(640, 52);
    } else if (v === 'split') {
      bg = col + '<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(158,20,19,.25) 0%,rgba(158,20,19,.45) 30%,#9e1413 52%,#9e1413 100%);z-index:1"></div>';
      g = group(1010, 48);
    }
    el.innerHTML = '<div class="jcx bigmc">' + bg + g + logo + '</div>';
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ministries/jc-connect-membership-class/connect.js", error: String((e && e.message) || e) }); }

// ministries/journey-women/women.js
try { (() => {
// Journey Women — shared lockup. Florals are lifted from the supplied logo file; rules and type are live.
(function () {
  const CSS = `.jw{position:relative;width:960px;height:540px;transform-origin:0 0}
.jw img.fl{position:absolute;left:0;top:0;width:960px;height:540px;display:block}
.jw .rl{position:absolute;left:216px;width:555px;height:3px;background:#1a1616}
.jw .jn{position:absolute;left:0;right:0;top:231px;margin:0;text-align:center;font:300 58px/1 'Montserrat',sans-serif;letter-spacing:.36em;padding-left:.36em;color:#1a1616;white-space:nowrap}
.jw .wm{position:absolute;left:0;right:0;top:286px;margin:0;text-align:center;font:400 84px/1 'Style Script',cursive;color:#1a1616;white-space:nowrap;transform:rotate(-3deg);transform-origin:50% 50%}`;
  window.jwLogo = function (base) {
    if (!document.getElementById('jw-css')) {
      const s = document.createElement('style');
      s.id = 'jw-css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }
    return `<div class="jw"><img class="fl" src="${base || '.'}/florals-full.png" alt=""><span class="rl" style="top:215px"></span><p class="jn">JOURNEY</p><span class="rl" style="top:376px"></span></div>`;
  };
  window.jwSlide = function (el, bg) {
    jwLogo('.');
    const ink = bg === 'rose';
    const B = {
      blush: 'background:#f7cdc1',
      wash: "background:#f8e6de;background-image:radial-gradient(ellipse 55% 60% at 18% 22%,rgba(236,170,158,.55),transparent 70%),radial-gradient(ellipse 50% 55% at 85% 80%,rgba(232,160,150,.5),transparent 70%),radial-gradient(ellipse 40% 45% at 78% 15%,rgba(214,196,176,.45),transparent 70%),radial-gradient(ellipse 45% 40% at 12% 88%,rgba(240,196,184,.6),transparent 70%)",
      cream: 'background:#f8f1e7',
      blushfl: 'background:#f7cdc1',
      rose: 'background:#5e2f36;background-image:radial-gradient(ellipse 70% 70% at 50% 45%,#74404a,#5e2f36 70%,#4a232a)'
    }[bg];
    const grain = '<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>';
    const deco = bg === 'cream' || bg === 'blushfl' ? '<span style="position:absolute;inset:44px;border:2px solid ' + (bg === 'blushfl' ? '#d9998b' : '#e7b3a6') + ';pointer-events:none"></span><img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-560px;top:-420px;opacity:.2;transform:rotate(18deg)"><img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-560px;bottom:-440px;opacity:.2;transform:rotate(-160deg)">' : '';
    el.style.cssText += ';padding:0;' + B;
    el.innerHTML = deco + grain + '<div style="position:absolute;left:192px;top:54px;transform:scale(1.6);transform-origin:0 0;' + (ink ? 'filter:invert(93%) sepia(12%) saturate(300%) hue-rotate(-20deg) brightness(1.02)' : '') + '">' + jwLogo('.') + '</div><img src="../../assets/logo/' + (ink ? 'horizontal-white' : 'horizontal-ink') + '.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:56px;width:220px;opacity:.85">';
  };
  window.jwStory = function (el, opt) {
    jwLogo('.');
    opt = opt || {};
    const K = '#1a1616';
    el.style.cssText += ';padding:0;background:#f8f1e7';
    el.innerHTML = '<span style="position:absolute;inset:44px;border:2px solid #e7b3a6;pointer-events:none"></span>' + '<img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-640px;top:-470px;opacity:.2;transform:rotate(18deg)">' + '<img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-640px;bottom:-470px;opacity:.2;transform:rotate(-160deg)">' + '<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>' + '<div style="position:absolute;left:60px;top:380px;transform:scale(1);transform-origin:0 0">' + jwLogo('.') + '</div>' + (opt.title ? '<div style="position:absolute;left:0;right:0;top:1040px;display:flex;flex-direction:column;align-items:center;gap:30px;font-family:Montserrat,sans-serif;color:' + K + '">' + '<span style="width:90px;height:2px;background:#d9998b"></span>' + '<p style="margin:0;font-weight:600;font-size:62px;letter-spacing:.18em;padding-left:.18em;white-space:nowrap">' + opt.title + '</p>' + '<p style="margin:0;font-weight:300;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">' + opt.date + '</p>' + '<p style="margin:0;font-weight:600;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">' + opt.time + '</p>' + '</div>' : '') + '<img src="../../assets/logo/horizontal-ink.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:190px;width:260px;opacity:.85">';
  };
  window.jwSlideEvent = function (el, opt) {
    jwLogo('.');
    opt = opt || {};
    const K = '#1a1616';
    el.style.cssText += ';padding:0;background:#f8f1e7';
    el.innerHTML = '<span style="position:absolute;inset:44px;border:2px solid #e7b3a6;pointer-events:none"></span>' + '<img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-560px;top:-420px;opacity:.2;transform:rotate(18deg)">' + '<img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-560px;bottom:-440px;opacity:.2;transform:rotate(-160deg)">' + '<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>' + '<div style="position:absolute;left:40px;top:270px">' + jwLogo('.') + '</div>' + '<span style="position:absolute;left:1010px;top:290px;width:2px;height:500px;background:#d9998b"></span>' + '<div style="position:absolute;left:1040px;right:100px;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;font-family:Montserrat,sans-serif;color:' + K + '">' + '<p style="margin:0;font-weight:600;font-size:84px;line-height:1.05;letter-spacing:.14em;padding-left:.14em;text-align:center;white-space:nowrap">' + opt.title.replace(' ', '<br>') + '</p>' + '<span style="width:90px;height:2px;background:#d9998b;margin:6px 0"></span>' + '<p style="margin:0;font-weight:300;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">' + opt.date + '</p>' + '<p style="margin:0;font-weight:600;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">' + opt.time + '</p>' + '</div>' + '<img src="../../assets/logo/horizontal-ink.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:84px;width:230px;opacity:.85">';
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ministries/journey-women/women.js", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/Command.jsx
try { (() => {
const CMD_SCREENS = {
  overview: OverviewScreen,
  series: SeriesScreen,
  events: EventsScreen
};
const CMD_TOCS = {
  overview: [{
    id: 'logo',
    label: 'Logo'
  }, {
    id: 'color',
    label: 'Color'
  }, {
    id: 'type',
    label: 'Type'
  }, {
    id: 'photo',
    label: 'Photography'
  }, {
    id: 'social',
    label: 'Social'
  }, {
    id: 'series',
    label: 'Sermon series'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'stage',
    label: 'Stage & screen'
  }, {
    id: 'voice',
    label: 'Voice'
  }, {
    id: 'never',
    label: 'Never'
  }, {
    id: 'download',
    label: 'Download'
  }],
  series: [{
    id: 'rule',
    label: 'The rule'
  }, {
    id: 'example',
    label: 'Worked example'
  }, {
    id: 'package',
    label: 'The package'
  }, {
    id: 'download',
    label: 'Download'
  }],
  events: [{
    id: 'block',
    label: 'The block'
  }, {
    id: 'kinds',
    label: 'Five kinds'
  }, {
    id: 'sizes',
    label: 'Sizes & rules'
  }, {
    id: 'download',
    label: 'Download'
  }]
};
function Command() {
  const [page, setPage] = React.useState('overview');
  const Screen = CMD_SCREENS[page] || OverviewScreen;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar, {
    page: page,
    setPage: setPage,
    toc: CMD_TOCS[page] || []
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Screen, {
    setPage: setPage
  })), /*#__PURE__*/React.createElement("footer", {
    className: "footer grain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow ember-dot"
  }, "Journey Brand"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginTop: '.9rem',
      fontSize: '.92rem',
      maxWidth: '20rem'
    }
  }, "Internal reference for staff and volunteers. Not a public page.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "This guide"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#overview",
    onClick: e => {
      e.preventDefault();
      setPage('overview');
    }
  }, "Overview")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#series",
    onClick: e => {
      e.preventDefault();
      setPage('series');
    }
  }, "Sermon series")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#events",
    onClick: e => {
      e.preventDefault();
      setPage('events');
    }
  }, "Events")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Command"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#overview",
    onClick: e => e.preventDefault()
  }, "Dashboard")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Church office"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#overview",
    onClick: e => e.preventDefault()
  }, "Contact us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#overview",
    onClick: e => e.preventDefault()
  }, "6225 Lake Gray Blvd Ste 2", /*#__PURE__*/React.createElement("br", null), "Jacksonville, FL 32244"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-base"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Journey Command \xB7 internal"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\xA9 2026 Journey Church")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Command, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/Command.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/EventsScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  ArtFrame,
  ArtText,
  Logistics,
  Logo
} = window.JourneyChurchDesignSystem_84738d;
const EV_A = '../../assets';
const EL = EV_A + '/logo';
function EventsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Brand \xB7 Events"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "block",
    style: {
      marginTop: '1rem',
      maxWidth: '18ch'
    }
  }, "Five kinds of event, one logistics"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted measure",
    style: {
      marginTop: '2rem'
    }
  }, "The look flexes by what kind of event it is. What never changes is the block that tells a person when, where, and what it costs \u2014 set the same way every time. That block is what makes it an event graphic instead of a mood board."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Request a graphic"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#download"
  }, "Download")))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "01"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "The block"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "When, where, what it ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "costs"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1200,
    height: 620,
    pad: 80,
    ground: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0'
    }
  }, /*#__PURE__*/React.createElement(Logistics, {
    gap: 56,
    items: [{
      label: 'When',
      value: 'Sun Oct 12 · 6 PM'
    }, {
      label: 'Where',
      value: 'The Chapel'
    }, {
      label: 'Cost',
      value: 'Nothing'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "How it's set"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Label in Inter 600, 22px, tracked 0.18em, uppercase, muted."), /*#__PURE__*/React.createElement("li", null, "Value in Inter Tight 600, 36px."), /*#__PURE__*/React.createElement("li", null, "Two or three cells. Never four \u2014 if it needs four, it needs a web page."), /*#__PURE__*/React.createElement("li", null, "Dates as ", /*#__PURE__*/React.createElement("b", null, "Sun Oct 12 \xB7 6 PM"), ". Times with the ampersand: ", /*#__PURE__*/React.createElement("b", null, "9:00 & 11:00 AM"), "."), /*#__PURE__*/React.createElement("li", null, "It sits directly above the logo, always, so the eye finishes on when and where."), /*#__PURE__*/React.createElement("li", null, "Confirm every date, room, and figure against a live system \u2014 never a document, never memory."))))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "kinds"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "02"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "Five kinds"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "The look flexes. The ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "block"), " doesn't."))), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    tooth: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 760,
      right: -40,
      top: -140
    }
  }, "HR"), /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Healing Room \xB7 Quarterly",
    size: 108,
    accent: "prayed"
  }, "Come and be"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'When',
      value: 'Sun Oct 12 · 6 PM'
    }, {
      label: 'Where',
      value: 'The Chapel'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: EL,
    on: "cream",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Recurring rhythm"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Healing Room, prayer nights, baptism Sundays. Type on cream, paper tooth, a ghosted initial. Calm, because it comes back.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    photo: EV_A + '/photo/congregation-hands-raised.jpg'
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Christmas at Journey",
    size: 180,
    series: true
  }, "Light Has Come"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'Services',
      value: 'Dec 23 & 24 · 5 PM'
    }, {
      label: 'Kids',
      value: 'Every service'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: EL,
    on: "photo",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Big event"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Christmas, Easter, conferences, outreach. Photo plus the series face \u2014 the only event kind that borrows the wide grotesque.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "on-photo",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo scrim-top"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: `url('${EV_A}/photo/student-praying.jpg')`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field-cream tooth",
    style: {
      padding: '72px 80px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Journey Students \xB7 Wednesdays",
    size: 86,
    accent: "friend"
  }, "Bring a"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'When',
      value: '7 PM · Room 200'
    }],
    style: {
      gridTemplateColumns: '1fr'
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    base: EL,
    on: "cream",
    width: 250
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Ministry-specific"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Kids, students, women, men. Photo above, cream below. The ministry is named in the eyebrow \u2014 there are no sub-logos and no ministry colors.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    ground: "dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 520,
      right: -50,
      top: -60,
      fontStyle: 'italic',
      fontWeight: 700
    }
  }, "groups"), /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Discipleship Groups \xB7 Launching January",
    size: 112,
    accent: "renamed"
  }, "Small groups,"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'Sign-ups open',
      value: 'Jan 4 · Lobby'
    }, {
      label: 'Groups start',
      value: 'Week of Jan 18'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: EL,
    on: "dark",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Discipleship Groups launch"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Ink field with the key word ghosted. The rename is the whole message, so the word is the graphic.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    tooth: true
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Arise & Build",
    size: 112,
    accent: "way"
  }, "Two-thirds of the"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-meter"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '66%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 26,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Raised \xB7 $660,000"), /*#__PURE__*/React.createElement("span", null, "Goal \xB7 figure TBC"))), /*#__PURE__*/React.createElement(Logo, {
    base: EL,
    on: "cream",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Giving & building"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "The progress meter is the graphic. Both figures must come from a live source before this runs \u2014 never from a document.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Which kind is it?"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Does it come back?"), " Recurring rhythm. Keep it calm \u2014 you'll post it monthly."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Is it once a year and big?"), " Big event. It earns the wide grotesque and a photo."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Is it for one group?"), " Ministry-specific. Name the ministry in the eyebrow."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Is it a change?"), " Launch. Ghost the word that names the change."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Is it about money?"), " Giving. Show progress, or don't post it."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "None of these?"), " It's probably not an event graphic. Ask the office.")))))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "sizes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "03"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "Sizes & rules"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "Build the square ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "first"), "."))), /*#__PURE__*/React.createElement("dl", {
    className: "spec",
    style: {
      borderTop: 0,
      paddingTop: 0,
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("dt", null, "Formats"), /*#__PURE__*/React.createElement("dd", null, "Every event ships as square (1080 \xD7 1080), story (1080 \xD7 1920), and screen (1920 \xD7 1080). Build the square first \u2014 the other two follow its decisions."), /*#__PURE__*/React.createElement("dt", null, "Safe zones"), /*#__PURE__*/React.createElement("dd", null, "Square 80px all sides. Story 250px top and bottom, 80px sides. Screen 96px action-safe."), /*#__PURE__*/React.createElement("dt", null, "Type floor"), /*#__PURE__*/React.createElement("dd", null, "Eyebrow 26px \xB7 Headline 86px \xB7 Logistics label 22px, value 36px \xB7 Body 34px."), /*#__PURE__*/React.createElement("dt", null, "The series face"), /*#__PURE__*/React.createElement("dd", null, "Only big events borrow Archivo. Everything recurring stays in Inter Tight, so the calendar doesn't shout every week."), /*#__PURE__*/React.createElement("dt", null, "One device"), /*#__PURE__*/React.createElement("dd", null, "A ghosted numeral, a ghosted word, or a progress meter. One per graphic, never on a photo. The logo is never the device."), /*#__PURE__*/React.createElement("dt", null, "Red budget"), /*#__PURE__*/React.createElement("dd", null, "One red thing per graphic. On cream that's the italic word; on dark or photo it's the eyebrow."), /*#__PURE__*/React.createElement("dt", null, "Copy"), /*#__PURE__*/React.createElement("dd", null, "The eyebrow names the moment. The headline says it in a human sentence. No exclamation points. Copy decisions are Adam's.")), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "The three mistakes we keep making"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Four logistics cells."), " If the event needs that much explaining, the graphic points at a page."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "A calendar or clock icon."), " There is no icon set. The label says \"When.\""), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "A number nobody checked."), " Every figure comes from a live system. A wrong dollar amount on a giving graphic is worse than no graphic.")))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "download"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "04"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "Download"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "Photos and the ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "logo"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Logo, for the corner"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Pick by what's behind it."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['On cream', 'On dark', 'On photo'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Photographs"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Our own, cleared for use. Apply the photo treatment before type goes on."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Congregation', 'Kneeling', 'Student', 'Two bowed', 'Hands open', 'At the stage'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Need something else?"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "A new event kind, a size that isn't here, or a photo we don't have \u2014 that's a system decision, not a page decision."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#download",
    onClick: e => e.preventDefault()
  }, "Contact the office \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      marginTop: '2rem',
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Before you post"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Dates and rooms confirmed"), " against Planning Center or the live site."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Faces cleared."), " Anyone who hasn't agreed to appear comes out. Children need a parent's yes."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Copy approved."), " Every headline on this page is a placeholder shape, not approved copy."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Alt text written"), " \u2014 describe what is happening, not just what is pictured.")))));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/OverviewScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  ArtFrame,
  ArtText,
  ArtScripture,
  Logistics,
  Logo,
  LowerThird,
  Meter
} = window.JourneyChurchDesignSystem_84738d;
const OV_A = '../../assets';
const L = OV_A + '/logo';
function Sect({
  id,
  n,
  eyebrow,
  title,
  accent,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, accent), "."))), children);
}
function OverviewScreen({
  setPage
}) {
  useFitSeriesType();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Journey Command \xB7 Brand"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "looks",
    style: {
      marginTop: '1rem',
      maxWidth: '14ch'
    }
  }, "How Journey"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted measure",
    style: {
      marginTop: '2rem'
    }
  }, "One red, four typefaces with four jobs, and a short list of things we do and don't do. If you are making a graphic, a slide, a flier, or a shirt for Journey, everything you need is on this page."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#request"
  }, "Request a graphic"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#download"
  }, "Download assets")))), /*#__PURE__*/React.createElement(Sect, {
    id: "logo",
    n: "01",
    eyebrow: "Logo",
    title: "Three lockups. Same",
    accent: "corner, every time"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "Horizontal is the default. Stacked is for square formats. The mark alone is for favicons, app icons, and anywhere the name is already in the copy."), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, [['horizontal-ember_ink.png', 'on-cream', 'Horizontal · on cream', 'The default. Red mark, ink wordmark.', '80%'], ['horizontal-ember_cream.png', 'on-ink', 'Horizontal · on dark', 'Mark stays red, wordmark goes cream.', '80%'], ['horizontal-white.png', 'on-red', 'Reversed · one color', 'On red, on photos, and any busy ground.', '80%'], ['stacked-ember_ink.png', 'on-cream', 'Stacked', 'Profile pictures, stickers, apparel, anything near square.', '52%'], ['mark-ember.png', 'on-ink', 'Mark', 'Favicons, app icons, and when the name is already written.', '32%'], ['wordmark-ink.png', 'on-cream', 'Wordmark', 'Only when the mark already appears nearby.', '80%']].map(([f, g, label, note, mw]) => /*#__PURE__*/React.createElement("div", {
    className: "ex",
    key: f
  }, /*#__PURE__*/React.createElement("div", {
    className: 'logo-cell ' + g
  }, /*#__PURE__*/React.createElement("img", {
    src: L + '/' + f,
    alt: label,
    style: {
      maxWidth: mw
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, note)))), /*#__PURE__*/React.createElement("dl", {
    className: "spec"
  }, /*#__PURE__*/React.createElement("dt", null, "Clear space"), /*#__PURE__*/React.createElement("dd", null, "The height of the J-circle on all four sides. Nothing enters it \u2014 not a caption, not a page edge."), /*#__PURE__*/React.createElement("dt", null, "Minimum"), /*#__PURE__*/React.createElement("dd", null, "Horizontal 120px on screen, 1.25in in print. Mark 24px / 0.25in."), /*#__PURE__*/React.createElement("dt", null, "Placement"), /*#__PURE__*/React.createElement("dd", null, "On a graphic, the logo sits in the same corner at the same size every time: bottom-right at 360px on 1920-wide art, bottom-left at 280px on 1080 squares."), /*#__PURE__*/React.createElement("dt", null, "Never"), /*#__PURE__*/React.createElement("dd", null, "Stretch it, rotate it, outline it, add a shadow, recolor the wordmark, crop it, ghost it, or use it as a background texture."), /*#__PURE__*/React.createElement("dt", null, "Files"), /*#__PURE__*/React.createElement("dd", null, "PNG with transparency, in ", /*#__PURE__*/React.createElement("code", null, "/brand/img/logo/"), ". Print and apparel need the vector \u2014 ask the office."))), /*#__PURE__*/React.createElement(Sect, {
    id: "color",
    n: "02",
    eyebrow: "Color",
    title: "Cream, ink, and one",
    accent: "red"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g4",
    style: {
      marginTop: '2rem'
    }
  }, [['#ff3a3a', 'Journey red · #ff3a3a', 'The accent. One per view — if two things are red, one is probably wrong.'], ['#9a1818', 'Small red · #9a1818', 'Red text under about 26px on cream. An accessibility fallback, not a second color.'], ['#f7f4f0', 'Cream · #f7f4f0', 'The default ground, and text on dark.'], ['#0a0a0a', 'Ink · #0a0a0a', 'Body text and the dark ground. #050505 for the deepest field.']].map(([c, b, s]) => /*#__PURE__*/React.createElement("div", {
    className: "sw",
    key: c
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: c,
      border: c === '#f7f4f0' ? '1px solid #d8d1c5' : undefined
    }
  }), /*#__PURE__*/React.createElement("b", null, b), /*#__PURE__*/React.createElement("span", null, s)))), /*#__PURE__*/React.createElement("div", {
    className: "g4",
    style: {
      marginTop: '1.25rem'
    }
  }, [['#ece7df', 'Alternate field'], ['#d8d1c5', 'Borders, dividers'], ['#9a948a', 'Muted on dark'], ['#5a574f', 'Muted on cream']].map(([c, s]) => /*#__PURE__*/React.createElement("div", {
    className: "sw",
    key: c
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: c
    }
  }), /*#__PURE__*/React.createElement("b", null, c), /*#__PURE__*/React.createElement("span", null, s)))), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "The rules"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Red is never a background \u2014 only a button, a pull-quote, or a thin rule."), /*#__PURE__*/React.createElement("li", null, "There is no second color. No success-green, no warning-amber, no ministry colors. If something needs to stand apart, use the ink ramp or a dark section."), /*#__PURE__*/React.createElement("li", null, "Red text smaller than about 26px on cream must use #9a1818. #ff3a3a at small sizes fails contrast."), /*#__PURE__*/React.createElement("li", null, "On dark grounds and photos, the accent word turns white and the red shows up in the eyebrow or the mark \u2014 one, not both.")))), /*#__PURE__*/React.createElement(Sect, {
    id: "type",
    n: "03",
    eyebrow: "Type",
    title: "Four faces, four",
    accent: "jobs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)',
      minHeight: '9rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "display",
    style: {
      fontSize: 'clamp(1.9rem,4vw,2.8rem)'
    }
  }, "Come as you ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "are"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Inter Tight 800 \u2014 the church's voice"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Headlines, titles, numbers. Tracking \u22120.035em, line-height 0.95. Every headline gets exactly one italic red word, and it is the emotional beat \u2014 never \"the,\" \"and,\" or \"of.\"")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)',
      minHeight: '9rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '1.05rem',
      lineHeight: 1.65,
      maxWidth: '34ch'
    }
  }, "Sundays 9:00 & 11:00 AM. Kids have their own space from birth through fifth grade. Come early, coffee's on.")), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Inter 400 \u2014 the plain speech"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Body, logistics, captions, buttons. Never below 1rem on the web, never below 26px on a 1080 graphic.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box on-deep",
    style: {
      minHeight: '9rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "scripture-ref"
  }, "Ephesians 2:22"), /*#__PURE__*/React.createElement("p", {
    className: "scripture",
    style: {
      color: 'var(--ink-50)'
    }
  }, "In him you also are being built together into a dwelling place for God by the ", /*#__PURE__*/React.createElement("em", null, "Spirit"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Newsreader \u2014 Scripture only"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Quoted Scripture and pull-quotes. Never a headline, never a title, never the church speaking. The italic marks the beat instead of red.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: '#0b0a09',
      minHeight: '9rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "big",
    style: {
      fontSize: 'clamp(2rem,5vw,3.2rem)',
      whiteSpace: 'normal'
    }
  }, "Series Titles")), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Archivo Expanded Black \u2014 series & stage"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Sermon series titles and stage graphics, where it has to read from row twenty. Never on the website body, never for logistics.")))), /*#__PURE__*/React.createElement(Sect, {
    id: "photo",
    n: "04",
    eyebrow: "Photography",
    title: "Our room, our",
    accent: "people"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1200,
    height: 700,
    pad: 70,
    photo: OV_A + '/photo/praying-in-the-crowd.jpg'
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Photo treatment",
    eyebrowSize: 24,
    size: 86,
    accent: "slightly"
  }, "Natural color, pulled")), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "How a photo gets treated"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Saturation to about 85%, contrast up a touch. Never a duotone, never a color wash, never a blur."), /*#__PURE__*/React.createElement("li", null, "A scrim from transparent down to 88% ink, so type always sits on darkness rather than on a face."), /*#__PURE__*/React.createElement("li", null, "Grain over the top of large dark areas."), /*#__PURE__*/React.createElement("li", null, "Crops favor hands, posture, and the room over faces in focus. Real moments, never posed."), /*#__PURE__*/React.createElement("li", null, "Every photo needs alt text describing what is happening, not just what is pictured."), /*#__PURE__*/React.createElement("li", null, "Anyone who has not agreed to appear comes out before it runs. Children need a parent's yes."))))), /*#__PURE__*/React.createElement(Sect, {
    id: "social",
    n: "05",
    eyebrow: "Social",
    title: "Four cards. That's the whole",
    accent: "deck"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "Every feed post is one of these four. If a post doesn't fit one, it probably needs a page instead of a graphic."), /*#__PURE__*/React.createElement("div", {
    className: "g4",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    tooth: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 900,
      right: -60,
      bottom: -230
    }
  }, "72"), /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Monday \xB7 72 Hours of Prayer",
    size: 126,
    accent: "Saturday"
  }, "Don't stop until"), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "cream",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Type on cream"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Paper tooth, one ghosted numeral, logo bottom-left.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    photo: OV_A + '/photo/kneeling-by-the-chairs.jpg'
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Prayer Night \xB7 Wednesday 7 PM",
    size: 126,
    accent: "boldly"
  }, "Pray"), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "photo",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Type on photo"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Reversed logo. Never the red mark on a photo.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-cream tooth",
    style: {
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "a-eb"
  }, "Fasting tips \xB7 03"), /*#__PURE__*/React.createElement("p", {
    className: "a-h",
    style: {
      '--h1': '94px'
    }
  }, "Fasting is not about not ", /*#__PURE__*/React.createElement("em", null, "eating"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "field-ink",
    style: {
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 640,
      right: -40,
      top: -120
    }
  }, "03"), /*#__PURE__*/React.createElement("p", {
    className: "a-body",
    style: {
      '--body': '34px',
      maxWidth: '22ch'
    }
  }, "It's about making room. Skip the meal, keep the appointment."), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "dark",
    width: 280
  })))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Two-field editorial"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Cream over ink, hard seam at the middle.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    ground: "deep",
    grain: true
  }, /*#__PURE__*/React.createElement(ArtScripture, {
    reference: "Psalm 27:4",
    size: 68
  }, "One thing I have asked of the Lord, that will I seek after: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to ", /*#__PURE__*/React.createElement("em", null, "inquire in his temple"), "."), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    variant: "mark",
    on: "dark",
    width: 96
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Scripture"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Newsreader, reference as the red eyebrow, mark only."))), /*#__PURE__*/React.createElement("dl", {
    className: "spec"
  }, /*#__PURE__*/React.createElement("dt", null, "Sizes"), /*#__PURE__*/React.createElement("dd", null, "Feed 1080 \xD7 1080, safe zone 80px. Story 1080 \xD7 1920, safe zone 250px top and bottom."), /*#__PURE__*/React.createElement("dt", null, "Type floor"), /*#__PURE__*/React.createElement("dd", null, "Eyebrow 26px \xB7 Headline 96px \xB7 Body 34px. Nothing smaller, ever."), /*#__PURE__*/React.createElement("dt", null, "One idea"), /*#__PURE__*/React.createElement("dd", null, "The eyebrow names the moment, the headline says it, the body adds a fact only if there is one. No exclamation points."), /*#__PURE__*/React.createElement("dt", null, "One device"), /*#__PURE__*/React.createElement("dd", null, "A ghosted numeral or a ghosted word \u2014 never both, never on a photo. The logo is never used as a device."))), /*#__PURE__*/React.createElement(Sect, {
    id: "series",
    n: "06",
    eyebrow: "Sermon series",
    title: "A series can look like",
    accent: "itself"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "Series art is the one place the system steps back. Each series gets its own type, color, and imagery. The only rule is the logo \u2014 same corner, same size \u2014 plus Scripture staying in Newsreader."), /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1920,
      '--h': 1080,
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${OV_A}/series/collage-a.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine"
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      right: -140,
      bottom: -70,
      fontSize: 560
    }
  }, "Presence"), /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb"
  }, "Our Culture, Vision, & Values"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "A House Built"), /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rl"
  }), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-size": "0"
  }, "For His")), /*#__PURE__*/React.createElement("p", {
    className: "big",
    "data-fit": true
  }, "Presence")), /*#__PURE__*/React.createElement("img", {
    className: "lgc",
    src: L + '/horizontal-ember_cream.png',
    alt: "Journey Church",
    style: {
      right: 120,
      bottom: 100,
      width: 360
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "What made this a Journey series"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "The collage is built from our own photographs \u2014 twenty-two of them, cut rough and layered."), /*#__PURE__*/React.createElement("li", null, "A red rule, a red spine down the left edge, a red eyebrow, and the red J in the logo. Four small places, no red backgrounds."), /*#__PURE__*/React.createElement("li", null, "The key word ghosted off the edge, outlined \u2014 the same device the feed cards use with numerals."), /*#__PURE__*/React.createElement("li", null, "The logo in the locked corner at the locked size. That is the whole contract with the system."), /*#__PURE__*/React.createElement("li", null, "Scripture slides stay in Newsreader, because that never changes.")), /*#__PURE__*/React.createElement("div", {
    className: "dl",
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#series",
    onClick: e => {
      e.preventDefault();
      setPage('series');
      window.scrollTo(0, 0);
    }
  }, "Full series page and downloads \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    tooth: true
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 760,
      right: -40,
      top: -140
    }
  }, "HR"), /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Healing Room \xB7 Quarterly",
    size: 108,
    accent: "prayed"
  }, "Come and be"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'When',
      value: 'Sun Oct 12 · 6 PM'
    }, {
      label: 'Where',
      value: 'The Chapel'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "cream",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "And the house look, for comparison"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Everything that is not a series stays in Inter Tight.")))), /*#__PURE__*/React.createElement(Sect, {
    id: "events",
    n: "07",
    eyebrow: "Events",
    title: "Five kinds of event, one logistics",
    accent: "block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "The look flexes by what kind of event it is. The block that tells a person when and where is set identically every time \u2014 that is what makes it an event graphic and not a mood board."), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    ground: "dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ghost",
    style: {
      fontSize: 520,
      right: -50,
      top: -60,
      fontStyle: 'italic',
      fontWeight: 700
    }
  }, "groups"), /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Discipleship Groups \xB7 Launching January",
    size: 112,
    accent: "renamed"
  }, "Small groups,"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'Sign-ups open',
      value: 'Jan 4 · Lobby'
    }, {
      label: 'Groups start',
      value: 'Week of Jan 18'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "dark",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Launch")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    photo: OV_A + '/photo/congregation-hands-raised.jpg'
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Christmas at Journey",
    size: 180,
    series: true
  }, "Light Has Come"), /*#__PURE__*/React.createElement(Logistics, {
    items: [{
      label: 'Services',
      value: 'Dec 23 & 24 · 5 PM'
    }, {
      label: 'Kids',
      value: 'Every service'
    }]
  }), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "photo",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Big event")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1080,
    height: 1080,
    pad: 80,
    tooth: true
  }, /*#__PURE__*/React.createElement(ArtText, {
    eyebrow: "Arise & Build",
    size: 112,
    accent: "way"
  }, "Two-thirds of the"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "a-meter"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '66%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 26,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Raised \xB7 $660,000"), /*#__PURE__*/React.createElement("span", null, "Goal \xB7 figure TBC"))), /*#__PURE__*/React.createElement(Logo, {
    base: L,
    on: "cream",
    width: 280
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Giving & building"))), /*#__PURE__*/React.createElement("div", {
    className: "dl",
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#events",
    onClick: e => {
      e.preventDefault();
      setPage('events');
      window.scrollTo(0, 0);
    }
  }, "All five kinds, sizes, and downloads \u2192"))), /*#__PURE__*/React.createElement(Sect, {
    id: "stage",
    n: "08",
    eyebrow: "Stage & screen",
    title: "Built to be read from row",
    accent: "twenty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1920,
    height: 1080,
    photo: OV_A + '/photo/bowed-at-the-stage.jpg',
    scrim: "flat"
  }, /*#__PURE__*/React.createElement(LowerThird, {
    name: "Adam Hardegree",
    role: "Lead Pastor"
  })), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Lower third"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Left 96px, bottom 96px. A series may restyle it but not move it.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement(ArtFrame, {
    width: 1920,
    height: 1080,
    pad: 140,
    ground: "dark"
  }, /*#__PURE__*/React.createElement("p", {
    className: "a-h",
    style: {
      '--h1': '110px',
      textAlign: 'center',
      maxWidth: 'none',
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      margin: 'auto 0'
    }
  }, "Great is Thy faithfulness", /*#__PURE__*/React.createElement("br", null), "Great is Thy faithfulness", /*#__PURE__*/React.createElement("br", null), "Morning by morning", /*#__PURE__*/React.createElement("br", null), "new mercies I see")), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Lyric slide"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Centered, 110px, four lines max. No logo, no red \u2014 lyrics are the one screen where the system gets out of the way."))), /*#__PURE__*/React.createElement("dl", {
    className: "spec"
  }, /*#__PURE__*/React.createElement("dt", null, "Size"), /*#__PURE__*/React.createElement("dd", null, "1920 \xD7 1080. Action-safe 96px, title-safe 120px. Build at 3840 \xD7 2160 for a 4K wall."), /*#__PURE__*/React.createElement("dt", null, "Minimums"), /*#__PURE__*/React.createElement("dd", null, "Lyrics 100px \xB7 Scripture 80px \xB7 Labels 30px. Type sits on a scrim or on ink, never on raw photo."), /*#__PURE__*/React.createElement("dt", null, "Motion"), /*#__PURE__*/React.createElement("dd", null, "Cuts and half-second dissolves. Lower thirds slide in from the left over 0.6s. Nothing bounces, scales, or spins."))), /*#__PURE__*/React.createElement(Sect, {
    id: "voice",
    n: "09",
    eyebrow: "Voice",
    title: "Like a friend over",
    accent: "coffee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "How we write"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Warm, clear, honest. Short and human over clever."), /*#__PURE__*/React.createElement("li", null, "Written to one real person considering a visit, not to an audience."), /*#__PURE__*/React.createElement("li", null, "Say Jesus."), /*#__PURE__*/React.createElement("li", null, "Keep the concrete logistics \u2014 times, places, what actually happens."), /*#__PURE__*/React.createElement("li", null, "Service times use an ampersand: Sundays 9:00 & 11:00 AM."), /*#__PURE__*/React.createElement("li", null, "No exclamation points. Anywhere."))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "Words we don't use"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Blessed, anointed, season of, powerful, breakthrough, intercede."), /*#__PURE__*/React.createElement("li", null, "\"Encounter\" as filler, \"pursue God's presence,\" \"stand in unity,\" \"come ready to respond.\""), /*#__PURE__*/React.createElement("li", null, "Denominational shorthand generally."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "The test:"), " if the sentence could be lifted from any church email in the country, rewrite it."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Never invent"), " a statistic, a quote, a testimonial, or a Scripture reference. Confirm every date and number against a live system, not a document."))))), /*#__PURE__*/React.createElement(Sect, {
    id: "never",
    n: "10",
    eyebrow: "Never",
    title: "The short list of",
    accent: "no"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "Graphics"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No icon set. Arrows are typographic. A clock or map-pin icon on a Journey graphic is the tell it wasn't made here."), /*#__PURE__*/React.createElement("li", null, "No gradients, no drop shadows on type, no glows, no outlined-and-shadowed text."), /*#__PURE__*/React.createElement("li", null, "No stock photography of people. Our photos or none."), /*#__PURE__*/React.createElement("li", null, "No color bar, accent stripe, or rule under a heading as decoration."), /*#__PURE__*/React.createElement("li", null, "No second accent color, no ministry sub-logos, no ministry palettes."), /*#__PURE__*/React.createElement("li", null, "No emoji."))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "The logo"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Never stretched, rotated, outlined, or shadowed."), /*#__PURE__*/React.createElement("li", null, "Never recolored beyond the versions on this page."), /*#__PURE__*/React.createElement("li", null, "Never cropped, ghosted, or used as a watermark or texture."), /*#__PURE__*/React.createElement("li", null, "Never the red mark on a photograph \u2014 reverse the whole lockup."), /*#__PURE__*/React.createElement("li", null, "Never retyped. If you are setting the words \"Journey Church\" by hand, use the file.")))), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      marginTop: '1.5rem',
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Still open"), /*#__PURE__*/React.createElement("p", null, "The vector logo has not been located. Everything here is a PNG rebuilt from the one file we have, which is fine on a screen and not fine on a banner, a shirt, or a sign. Anything printed larger than a flier is waiting on that file. Archivo also needs self-hosting into ", /*#__PURE__*/React.createElement("code", null, "/fonts"), " before this page is truly production-safe."))), /*#__PURE__*/React.createElement(Sect, {
    id: "download",
    n: "11",
    eyebrow: "Download",
    title: "Take the",
    accent: "files"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "PNG with transparency. Print, apparel, and signage need the vector \u2014 ask the office."), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Horizontal"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "The default lockup."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['On cream', 'On dark', 'All white', 'All ink', 'All red'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Stacked"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Square formats, apparel, stickers."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['On cream', 'On dark', 'All white', 'All ink', 'All red'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Mark & wordmark"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Favicons, app icons, and when the name is already written."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Mark, red', 'Mark, white', 'Mark, ink', 'Wordmark, ink', 'Wordmark, cream'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Photographs"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Our own, cleared for use."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Congregation', 'Kneeling', 'Student', 'Two bowed', 'Hands open', 'At the stage', 'In the crowd', 'Kneeling, man'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Current series"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "A House Built for His Presence \u2014 finished artwork."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Title 1920 × 1080', 'Square 1080', 'Story 1080 × 1920'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Color, to copy"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Paste these into anything."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['#ff3a3a', '#9a1818', '#f7f4f0', '#0a0a0a'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#color",
    onClick: e => e.preventDefault()
  }, t))), /*#__PURE__*/React.createElement("p", {
    className: "ex-n",
    style: {
      marginTop: '.5rem'
    }
  }, "Print: Journey red is C0 M85 Y75 K0. Proof it once and keep that swatch.")))), /*#__PURE__*/React.createElement("section", {
    className: "on-dark grain b-sect",
    id: "request",
    style: {
      borderTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Need something made"), /*#__PURE__*/React.createElement(Headline, {
    size: "display",
    accent: "guess",
    style: {
      marginTop: '.8rem'
    }
  }, "Ask before you")), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead"
  }, "If a project needs something that isn't on this page, that's a system decision, not a page decision. Send it to staff rather than inventing it \u2014 that's how a brand stays one brand."), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted"
  }, "Include the date, the audience, where it will run, and any photos you want used. If you need it for a specific Sunday, say which one."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Request a graphic"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Contact the office")))))));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/SeriesScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  ArtFrame,
  ArtScripture,
  LowerThird
} = window.JourneyChurchDesignSystem_84738d;
const SR_A = '../../assets';
const SL = SR_A + '/logo';
function SeriesBlock({
  lines,
  eyebrowSize = 34,
  blkStyle,
  gap = 22
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "blk",
    style: {
      gap,
      ...blkStyle
    }
  }, lines);
}
function SeriesScreen() {
  useFitSeriesType();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Brand \xB7 Sermon series"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "itself",
    style: {
      marginTop: '1rem',
      maxWidth: '16ch'
    }
  }, "A series can look like"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted measure",
    style: {
      marginTop: '2rem'
    }
  }, "Series art is the one place the system steps back. Each series brings its own type, color, and imagery. One rule holds it to Journey, and it is short."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Request a graphic"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#download"
  }, "Download")))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "rule"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "01"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "The rule"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "One rule. Three strong ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "suggestions"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: 'var(--ink-800)',
      color: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff'
    }
  }, "The rule"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.85)'
    }
  }, "The reversed horizontal logo sits ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "bottom-right at 360px"), " on 1920-wide art, and ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "bottom-left at 280px"), " on 1080 squares. Same corner, same size, every series, no exceptions. Scripture always stays in Newsreader."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontSize: '.875rem'
    }
  }, "That is the entire contract. Everything else is yours.")), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "Three suggestions"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A series identity is ", /*#__PURE__*/React.createElement("b", null, "one typeface, one palette, one image idea"), ". Write those three down before you open the design tool."), /*#__PURE__*/React.createElement("li", null, "The package is ", /*#__PURE__*/React.createElement("b", null, "title (16:9), square, story, and a lower-third skin"), ". Don't design more than that up front."), /*#__PURE__*/React.createElement("li", null, "A free look is not free copy. The voice rules still apply \u2014 no exclamation points, no invented Scripture.")))), /*#__PURE__*/React.createElement("dl", {
    className: "spec"
  }, /*#__PURE__*/React.createElement("dt", null, "Sizes"), /*#__PURE__*/React.createElement("dd", null, "Title 1920 \xD7 1080 \xB7 Square 1080 \xD7 1080 \xB7 Story 1080 \xD7 1920 \xB7 4K wall 3840 \xD7 2160."), /*#__PURE__*/React.createElement("dt", null, "How many"), /*#__PURE__*/React.createElement("dd", null, "Four to six series a year. That volume is what makes a bespoke look per series workable."), /*#__PURE__*/React.createElement("dt", null, "Outside designers"), /*#__PURE__*/React.createElement("dd", null, "Send a flattened PNG at full size. The office builds the rest of the package around it."))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "example"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "02"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "Worked example"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "A House Built for His ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "Presence"), "."))), /*#__PURE__*/React.createElement("p", {
    className: "t-lead measure muted"
  }, "Our Culture, Vision, & Values. A collage built from twenty-two of our own photographs, a wide grotesque, outline over solid, and red in four small places."), /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1920,
      '--h': 1080,
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine"
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      right: -140,
      bottom: -70,
      fontSize: 560
    }
  }, "Presence"), /*#__PURE__*/React.createElement("div", {
    className: "blk"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb"
  }, "Our Culture, Vision, & Values"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "A House Built"), /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rl"
  }), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-size": "0"
  }, "For His")), /*#__PURE__*/React.createElement("p", {
    className: "big",
    "data-fit": true
  }, "Presence")), /*#__PURE__*/React.createElement("img", {
    className: "lgc",
    src: SL + '/horizontal-ember_cream.png',
    alt: "Journey Church",
    style: {
      right: 120,
      bottom: 100,
      width: 360
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "What this series brought"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Archivo Expanded Black"), " \u2014 a wide, heavy grotesque. Not the website's face."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "A photo collage"), " \u2014 twenty-two frames cut rough, layered, desaturated, grained."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Outline over solid"), " \u2014 the first lines stroked, only the key word filled."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "The ghost word"), " \u2014 \"Presence\" repeated huge and outlined, bleeding off two edges."))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h4", null, "Where the red lives"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "The rule that fills the short line."), /*#__PURE__*/React.createElement("li", null, "A thin spine down the left edge, on every piece."), /*#__PURE__*/React.createElement("li", null, "The eyebrow \u2014 which also carries the series' subtitle."), /*#__PURE__*/React.createElement("li", null, "The J in the logo. Four small places, no red fields."))))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "package"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "03"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "The package"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "Seven pieces, one ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "decision"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1080,
      '--h': 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 80px 0 102px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a-sq.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine",
    style: {
      width: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      right: -110,
      bottom: -40,
      fontSize: 330
    }
  }, "Presence"), /*#__PURE__*/React.createElement("div", {
    className: "blk",
    style: {
      width: 920,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb",
    style: {
      fontSize: 30,
      marginBottom: 18
    }
  }, "Our Culture, Vision, & Values"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "A House"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "Built For"), /*#__PURE__*/React.createElement("div", {
    className: "ln",
    style: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rl",
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-size": "0"
  }, "His")), /*#__PURE__*/React.createElement("p", {
    className: "big",
    "data-fit": true
  }, "Presence")), /*#__PURE__*/React.createElement("img", {
    className: "lgc",
    src: SL + '/horizontal-ember_cream.png',
    alt: "Journey Church",
    style: {
      left: 80,
      bottom: 80,
      width: 280
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Square \xB7 1080"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Feed. Four lines instead of three, logo bottom-left.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1080,
      '--h': 1920
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 80px 0 102px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a-story.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine",
    style: {
      width: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      right: -110,
      bottom: -40,
      fontSize: 330
    }
  }, "Presence"), /*#__PURE__*/React.createElement("div", {
    className: "blk",
    style: {
      width: 920,
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eb",
    style: {
      fontSize: 30,
      marginBottom: 22
    }
  }, "Our Culture, Vision, & Values"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "A House"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "Built For"), /*#__PURE__*/React.createElement("div", {
    className: "ln",
    style: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rl",
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-size": "0"
  }, "His")), /*#__PURE__*/React.createElement("p", {
    className: "big",
    "data-fit": true
  }, "Presence")), /*#__PURE__*/React.createElement("img", {
    className: "lgc",
    src: SL + '/horizontal-ember_cream.png',
    alt: "Journey Church",
    style: {
      left: 80,
      bottom: 250,
      width: 300
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Story \xB7 1080 \xD7 1920"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Inside the 250px safe zone top and bottom."))), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1920,
      '--h': 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      padding: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sbg",
    style: {
      background: 'rgba(0,0,0,.62)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine"
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      left: -80,
      top: -140,
      fontSize: 700,
      WebkitTextStrokeColor: 'rgba(255,255,255,.14)'
    }
  }, "02"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "800 30px/1 'Inter Tight',sans-serif",
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#ff3a3a'
    }
  }, "Week two"), /*#__PURE__*/React.createElement("p", {
    className: "big",
    style: {
      fontSize: 150,
      whiteSpace: 'normal',
      maxWidth: 1500
    }
  }, "Rooms He Hasn't", /*#__PURE__*/React.createElement("br", null), "Been Given"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 220,
      height: 14,
      background: '#ff3a3a',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Sermon title slide"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Collage dimmed, week number ghosted, short red rule as the full stop. Title is a placeholder.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1920,
      '--h': 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'center',
      padding: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sbg",
    style: {
      background: 'rgba(0,0,0,.62)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "600 28px/1 'Inter',sans-serif",
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: '#ff3a3a'
    }
  }, "Ephesians 2:22"), /*#__PURE__*/React.createElement("p", {
    className: "a-scripture",
    style: {
      '--h1': '92px',
      color: '#fff',
      maxWidth: '30ch'
    }
  }, "In him you also are being built together into a dwelling place for God by the ", /*#__PURE__*/React.createElement("em", null, "Spirit"), ".")))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Scripture slide"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Newsreader, always \u2014 this is the one thing a series never changes.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1920,
      '--h': 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      padding: 0,
      background: '#222'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a.png')`,
      filter: 'blur(6px) brightness(.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine"
  }), /*#__PURE__*/React.createElement(LowerThird, {
    name: "Adam Hardegree",
    role: "Lead Pastor",
    left: 120,
    bottom: 110,
    seriesFace: true
  }))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Lower third"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Name in the series face. The red bar and the position stay house.")), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr",
    style: {
      '--w': 1080,
      '--h': 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "art",
    style: {
      justifyContent: 'space-between',
      padding: '80px 80px 80px 102px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbg",
    style: {
      backgroundImage: `url('${SR_A}/series/collage-a-sq.png')`
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sbg",
    style: {
      background: 'rgba(0,0,0,.62)',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "spine",
    style: {
      width: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big gw",
    style: {
      right: -110,
      top: -60,
      fontSize: 330
    }
  }, "Presence"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "800 30px/1 'Inter Tight',sans-serif",
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#ff3a3a'
    }
  }, "Our Culture, Vision, & Values"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: "600 24px/1 'Inter',sans-serif",
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.75)'
    }
  }, "New series \xB7 Begins Sunday Oct 18")), /*#__PURE__*/React.createElement("div", {
    className: "blk",
    style: {
      width: 880,
      gap: 14,
      filter: 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "A House"), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-fit": true
  }, "Built For"), /*#__PURE__*/React.createElement("div", {
    className: "ln",
    style: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rl",
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "big out",
    "data-size": "0"
  }, "His")), /*#__PURE__*/React.createElement("p", {
    className: "big",
    "data-fit": true
  }, "Presence")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SL + '/horizontal-ember_cream.png',
    alt: "Journey Church",
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 30px/1.4 'Inter',sans-serif",
      color: 'rgba(255,255,255,.85)',
      textAlign: 'right'
    }
  }, "Sundays", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "9:00 & 11:00 AM"))))), /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Announce card"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "The feed post that launches the series. Date and times bottom-right.")))), /*#__PURE__*/React.createElement("section", {
    className: "container-x b-sect",
    id: "download"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-n"
  }, "04"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow text-ember"
  }, "Download"), /*#__PURE__*/React.createElement("h2", {
    className: "display t-h2",
    style: {
      margin: '.3rem 0 0'
    }
  }, "Take the ", /*#__PURE__*/React.createElement("span", {
    className: "display-italic"
  }, "files"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "A House Built for His Presence"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Finished artwork, flattened PNG."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Title 1920 × 1080', 'Square 1080', 'Story 1080 × 1920'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "The collage, clean"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "Background only, no type. Build your own layouts on it."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['1920 × 1080', '1080 square', '1080 × 1920'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ex-l"
  }, "Logo, for the corner"), /*#__PURE__*/React.createElement("p", {
    className: "ex-n"
  }, "The reversed lockup this series uses."), /*#__PURE__*/React.createElement("div", {
    className: "dl"
  }, ['Red mark, cream type', 'All white'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#download",
    onClick: e => e.preventDefault()
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      marginTop: '2rem',
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Before you use these"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Real people are in the collage."), " Twenty-two of them. Anyone who hasn't agreed to appear on a screen or a feed comes out first."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Sermon titles and dates above are placeholders."), " Copy is Adam's."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Archivo Expanded"), " is standing in for a licensed wide grotesque. If the series goes to print at size, check with the office first.")))));
}
window.SeriesScreen = SeriesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/SeriesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/Sidebar.jsx
try { (() => {
const CMD_A = '../../assets';
const CMD_NAV = [{
  id: 'overview',
  label: 'Overview'
}, {
  id: 'series',
  label: 'Sermon series'
}, {
  id: 'events',
  label: 'Events'
}];
function Sidebar({
  page,
  setPage,
  toc = []
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "cmd-side"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cmd-brand",
    href: "#overview",
    onClick: e => {
      e.preventDefault();
      setPage('overview');
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk",
    src: CMD_A + '/logo/mark-ember.png',
    alt: ""
  }), /*#__PURE__*/React.createElement("b", null, "Journey Command"), /*#__PURE__*/React.createElement("span", null, "Brand")), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Brand guide"
  }, /*#__PURE__*/React.createElement("h5", null, "Guide"), /*#__PURE__*/React.createElement("ul", null, CMD_NAV.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + n.id,
    "aria-current": page === n.id ? 'page' : undefined,
    onClick: e => {
      e.preventDefault();
      setPage(n.id);
      window.scrollTo(0, 0);
    }
  }, n.label))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#download",
    onClick: e => {
      e.preventDefault();
      setPage('overview');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) window.scrollTo(0, el.offsetTop - 24);
      }, 60);
    }
  }, "Downloads"))), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginTop: '1.4rem'
    }
  }, "On this page"), /*#__PURE__*/React.createElement("ul", {
    className: "sub"
  }, toc.map(t => /*#__PURE__*/React.createElement("li", {
    key: t.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + t.id,
    onClick: e => {
      e.preventDefault();
      const el = document.getElementById(t.id);
      if (el) window.scrollTo(0, el.offsetTop - 24);
    }
  }, t.label))))), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("a", {
    className: "req",
    href: "#request"
  }, "Request a graphic"), /*#__PURE__*/React.createElement("a", {
    className: "back",
    href: "#overview",
    onClick: e => e.preventDefault()
  }, "journeychurch.org \u2192"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journey-command/fit.jsx
try { (() => {
/* Fits the .big[data-fit] lines in a series block to the block width.
   Ported from the inline script on brand/index.html and brand/sermon-series/index.html. */
function fitSeriesType() {
  document.querySelectorAll('.blk').forEach(b => {
    const W = b.clientWidth,
      a = b.closest('.art');
    if (!a) return;
    const sc = parseFloat(getComputedStyle(a).transform.split(',')[0].replace('matrix(', '')) || 1;
    const fits = b.querySelectorAll('[data-fit]');
    fits.forEach(p => {
      p.style.fontSize = '100px';
      const w = p.getBoundingClientRect().width / sc;
      p.style.fontSize = (100 * W / w).toFixed(1) + 'px';
    });
    b.querySelectorAll('[data-size]').forEach(p => {
      const s = fits[+p.dataset.size];
      if (s) p.style.fontSize = s.style.fontSize;
    });
  });
}
function useFitSeriesType() {
  React.useEffect(() => {
    const run = () => {
      if (window.fitFrames) window.fitFrames();
      fitSeriesType();
      setTimeout(() => {
        if (window.fitFrames) window.fitFrames();
        fitSeriesType();
      }, 300);
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);else run();
    const onR = () => {
      if (window.fitFrames) window.fitFrames();
      fitSeriesType();
    };
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
}
Object.assign(window, {
  fitSeriesType,
  useFitSeriesType
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journey-command/fit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journeychurch-org/GiveScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  Meter,
  Facts,
  Disclose,
  Field
} = window.JourneyChurchDesignSystem_84738d;
const GIVE_A = '../../assets';
const AMOUNTS = ['$25', '$50', '$100', '$250'];
function GiveScreen() {
  const [amount, setAmount] = React.useState('$50');
  const [freq, setFreq] = React.useState('One time');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo scrim-left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: `url('${GIVE_A}/photo/hands-open-dark.jpg')`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container-x",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Arise & Build"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "way",
    style: {
      marginTop: '1rem',
      maxWidth: '15ch'
    }
  }, "Two-thirds of the"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted",
    style: {
      marginTop: '2rem',
      maxWidth: '32rem'
    }
  }, "Everything given here goes to the building we are growing into, and to the work that happens in it every week."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '34rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    pct: 66,
    left: "Raised \xB7 $660,000",
    right: "Goal \xB7 figure TBC"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h2",
    accent: "give"
  }, "How to"), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "field-label",
    style: {
      color: 'var(--ink-400)'
    }
  }, "Amount"), /*#__PURE__*/React.createElement("div", {
    className: "btn-row"
  }, AMOUNTS.map(a => /*#__PURE__*/React.createElement(Button, {
    key: a,
    size: "sm",
    variant: amount === a ? 'primary' : 'outline',
    onClick: () => setAmount(a)
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "field-label",
    style: {
      color: 'var(--ink-400)'
    }
  }, "How often"), /*#__PURE__*/React.createElement("div", {
    className: "btn-row"
  }, ['One time', 'Every week', 'Every month'].map(f => /*#__PURE__*/React.createElement(Button, {
    key: f,
    size: "sm",
    variant: freq === f ? 'dark' : 'outline',
    onClick: () => setFreq(f)
  }, f)))), /*#__PURE__*/React.createElement(Field, {
    id: "g-email",
    label: "Email for the receipt",
    style: "box",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement("div", {
    className: "btn-row"
  }, /*#__PURE__*/React.createElement(Button, null, "Give ", amount, " ", freq === 'One time' ? 'once' : freq.toLowerCase())), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0,
      fontSize: '.875rem',
      maxWidth: '34rem'
    }
  }, "This screen is a mock. It does not take a real gift, and no processor was named in the brand handoff.")), /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Other ways"), /*#__PURE__*/React.createElement(Facts, {
    items: [{
      label: 'In person',
      value: 'Either service, Sundays 9:00 & 11:00 AM'
    }, {
      label: 'By mail',
      value: /*#__PURE__*/React.createElement(React.Fragment, null, "6225 Lake Gray Blvd Ste 2", /*#__PURE__*/React.createElement("br", null), "Jacksonville, FL 32244")
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '44rem'
    }
  }, /*#__PURE__*/React.createElement(Disclose, {
    summary: "Where does it go?",
    defaultOpen: true
  }, "Two-thirds of Arise & Build is raised. The figures on this page come from a live source before they run anywhere."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "Can I give to one thing?"
  }, "Yes. Note it with the gift and the office will route it."))))));
}
window.GiveScreen = GiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journeychurch-org/GiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journeychurch-org/HomeScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  Facts,
  Step,
  Scripture,
  Disclose
} = window.JourneyChurchDesignSystem_84738d;
const HOME_A = '../../assets';
function HomeScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo scrim-left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: `url('${HOME_A}/photo/congregation-hands-raised.jpg')`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container-x",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Sundays 9:00 & 11:00 AM"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "are",
    style: {
      marginTop: '1rem',
      maxWidth: '14ch'
    }
  }, "Come as you"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted",
    style: {
      marginTop: '2rem',
      maxWidth: '32rem'
    }
  }, "We are one church in Jacksonville, learning to make room for God and for each other. If you are new, the first step is just showing up. We will take it from there."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#visit"
  }, "Plan a visit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#messages"
  }, "Watch a message")))), /*#__PURE__*/React.createElement("section", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "This Sunday"), /*#__PURE__*/React.createElement(Facts, {
    items: [{
      label: 'When',
      value: 'Sundays 9:00 & 11:00 AM'
    }, {
      label: 'Where',
      value: /*#__PURE__*/React.createElement(React.Fragment, null, "6225 Lake Gray Blvd Ste 2", /*#__PURE__*/React.createElement("br", null), "Jacksonville, FL 32244")
    }, {
      label: 'Kids',
      value: 'Birth through fifth grade, every service'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h2",
    accent: "room"
  }, "There is"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead"
  }, "Park anywhere. Someone in a red shirt will point you at a door. Check your kids in at the first desk inside, then find a seat. The service runs about seventy-five minutes."), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, /*#__PURE__*/React.createElement(Step, {
    number: "01",
    title: "Park anywhere"
  }, "Someone will meet you before you reach the door."), /*#__PURE__*/React.createElement(Step, {
    number: "02",
    title: "Check kids in"
  }, "The desk is the first thing inside."), /*#__PURE__*/React.createElement(Step, {
    number: "03",
    title: "Find a seat"
  }, "Coffee's on. Nobody will single you out."))))), /*#__PURE__*/React.createElement("section", {
    className: "on-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Current series"), /*#__PURE__*/React.createElement("div", {
    className: "split",
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("img", {
    src: HOME_A + '/series/series-a-house-built-title-1920x1080.png',
    alt: "A House Built for His Presence series artwork",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h2",
    accent: "Presence"
  }, "A House Built for His"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted"
  }, "Our culture, vision, and values. Six weeks on what it means to be a people God is willing to live in."), /*#__PURE__*/React.createElement(Scripture, {
    reference: "Ephesians 2:22"
  }, "In him you also are being built together into a dwelling place for God by the ", /*#__PURE__*/React.createElement("em", null, "Spirit"), "."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#messages",
    arrow: true
  }, "All messages")))))), /*#__PURE__*/React.createElement("section", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions people actually ask"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      maxWidth: '56rem'
    }
  }, /*#__PURE__*/React.createElement(Disclose, {
    summary: "What should I wear?"
  }, "Whatever you already own. Most people are in jeans."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "Where do my kids go?"
  }, "Kids have their own space from birth through fifth grade, in both services. Check in at the desk inside the front doors."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "How long is a service?"
  }, "About seventy-five minutes."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "Will anyone put me on the spot?"
  }, "No. You will not be asked to stand, introduce yourself, or give."))), /*#__PURE__*/React.createElement("section", {
    className: "on-dark grain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Next steps"), /*#__PURE__*/React.createElement(Headline, {
    size: "display",
    accent: "table",
    style: {
      marginTop: '.8rem'
    }
  }, "Come find a")), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-lead"
  }, "Discipleship Groups launch in January. Sign-ups open Jan 4 in the lobby, and groups start the week of Jan 18."), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted"
  }, "Journey Students meet Wednesdays at 7 PM in Room 200. The Healing Room is quarterly, in the Chapel."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#visit"
  }, "Plan a visit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#give"
  }, "Give"))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journeychurch-org/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journeychurch-org/MessagesScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  Scripture
} = window.JourneyChurchDesignSystem_84738d;
const MSG_A = '../../assets';
const WEEKS = [{
  n: '01',
  title: 'A House Built For His Presence',
  date: 'Sun Oct 18',
  ref: 'Ephesians 2:22'
}, {
  n: '02',
  title: 'Rooms He Hasn\u2019t Been Given',
  date: 'Sun Oct 25',
  ref: 'Psalm 27:4'
}, {
  n: '03',
  title: 'Making Room',
  date: 'Sun Nov 1',
  ref: ''
}];
function MessagesScreen() {
  const [active, setActive] = React.useState(0);
  const w = WEEKS[active];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep",
    style: {
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Messages"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "display",
    accent: "week",
    style: {
      marginTop: '1rem'
    }
  }, "Catch up on last"))), /*#__PURE__*/React.createElement("section", {
    className: "on-deep",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MSG_A + '/series/series-a-house-built-title-1920x1080.png',
    alt: "A House Built for His Presence",
    style: {
      width: '100%',
      display: 'block',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Play",
    style: {
      width: 96,
      height: 96,
      borderRadius: 999,
      border: 0,
      background: 'var(--ember)',
      color: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '1rem',
      letterSpacing: '.02em'
    }
  }, "Play"))), /*#__PURE__*/React.createElement("div", {
    className: "split",
    style: {
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Week ", w.n, " \xB7 ", w.date), /*#__PURE__*/React.createElement(Headline, {
    size: "h2"
  }, w.title), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted"
  }, "Adam Hardegree \xB7 Lead Pastor"), /*#__PURE__*/React.createElement("div", {
    className: "btn-row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Watch"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Listen"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Notes"))), /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, w.ref ? /*#__PURE__*/React.createElement(Scripture, {
    reference: w.ref
  }, "In him you also are being built together into a dwelling place for God by the ", /*#__PURE__*/React.createElement("em", null, "Spirit"), ".") : null, /*#__PURE__*/React.createElement("hr", {
    className: "rule-dark"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow",
    style: {
      color: 'var(--ink-300)'
    }
  }, "All weeks"), WEEKS.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: it.n,
    onClick: () => setActive(i),
    style: {
      textAlign: 'left',
      background: 'none',
      border: 0,
      borderTop: '1px solid rgba(247,244,240,.16)',
      padding: '1rem 0',
      cursor: 'pointer',
      display: 'flex',
      gap: '1.25rem',
      alignItems: 'baseline',
      color: i === active ? 'var(--ember)' : 'var(--ink-50)',
      font: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      color: i === active ? 'var(--ember)' : 'var(--ink-300)',
      fontSize: '1.1rem'
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.05rem',
      letterSpacing: '-.01em'
    }
  }, it.title), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      marginLeft: 'auto',
      fontSize: '.8rem',
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, it.date)))))))), /*#__PURE__*/React.createElement("section", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Past series"), /*#__PURE__*/React.createElement("div", {
    className: "grid3",
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MSG_A + '/series/series-a-house-built-square-1080.png',
    alt: "A House Built for His Presence, square",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0,
      fontSize: '.875rem'
    }
  }, "Earlier series artwork was not part of the brand handoff. This slot stays blank on purpose.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      aspectRatio: '1/1'
    }
  }))));
}
window.MessagesScreen = MessagesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journeychurch-org/MessagesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journeychurch-org/Site.jsx
try { (() => {
const {
  Nav,
  Footer,
  Button
} = window.JourneyChurchDesignSystem_84738d;
const A = '../../assets';
function Site() {
  const [page, setPage] = React.useState('home');
  const go = p => e => {
    if (e) e.preventDefault();
    setPage(p);
    window.scrollTo(0, 0);
  };
  const links = [{
    label: 'Visit',
    href: '#visit',
    current: page === 'visit'
  }, {
    label: 'Messages',
    href: '#messages',
    current: page === 'messages'
  }, {
    label: 'Groups',
    href: '#messages'
  }, {
    label: 'Give',
    href: '#give',
    current: page === 'give'
  }].map(l => ({
    ...l,
    onSelect: l.label
  }));
  const Screens = {
    home: HomeScreen,
    visit: VisitScreen,
    messages: MessagesScreen,
    give: GiveScreen
  };
  const Screen = Screens[page] || HomeScreen;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const t = a.getAttribute('href').slice(1);
      if (Screens[t]) {
        e.preventDefault();
        setPage(t);
        window.scrollTo(0, 0);
      }
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    logoSrc: A + '/logo/horizontal-ember_ink.png',
    href: "#home",
    links: links,
    cta: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      href: "#visit"
    }, "Plan a visit")
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Screen, {
    go: go
  })), /*#__PURE__*/React.createElement(Footer, {
    blurb: {
      title: 'Journey Church',
      text: 'Sundays 9:00 & 11:00 AM. Kids have their own space from birth through fifth grade. Come early, coffee\u2019s on.'
    },
    columns: [{
      title: 'Visit',
      links: [{
        label: 'Plan a visit',
        href: '#visit'
      }, {
        label: 'What to expect',
        href: '#visit'
      }, {
        label: 'Kids',
        href: '#visit'
      }]
    }, {
      title: 'Next steps',
      links: [{
        label: 'Messages',
        href: '#messages'
      }, {
        label: 'Discipleship Groups',
        href: '#messages'
      }, {
        label: 'Baptism',
        href: '#visit'
      }]
    }, {
      title: 'Church office',
      links: [{
        label: 'Contact us',
        href: '#visit'
      }, {
        label: '6225 Lake Gray Blvd Ste 2',
        href: '#visit'
      }, {
        label: 'Jacksonville, FL 32244',
        href: '#visit'
      }]
    }],
    base: {
      left: 'Journey Church · Jacksonville, Florida',
      right: '\u00a9 2026 Journey Church'
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journeychurch-org/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/journeychurch-org/VisitScreen.jsx
try { (() => {
const {
  Headline,
  Eyebrow,
  Button,
  Facts,
  Disclose,
  Field,
  Step
} = window.JourneyChurchDesignSystem_84738d;
const VISIT_A = '../../assets';
function VisitScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "on-deep grain",
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(4rem,8vw,7rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo scrim-left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: `url('${VISIT_A}/photo/two-bowed-together.jpg')`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container-x",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Plan your visit"), /*#__PURE__*/React.createElement(Headline, {
    as: "h1",
    size: "hero",
    accent: "Sunday",
    style: {
      marginTop: '1rem',
      maxWidth: '16ch'
    }
  }, "Everything you need for"), /*#__PURE__*/React.createElement("p", {
    className: "t-lead muted",
    style: {
      marginTop: '2rem',
      maxWidth: '32rem'
    }
  }, "Tell us you are coming and someone will meet you at the door. You do not have to, but it makes the first Sunday easier."))), /*#__PURE__*/React.createElement("section", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The details"), /*#__PURE__*/React.createElement(Facts, {
    items: [{
      label: 'When',
      value: 'Sundays 9:00 & 11:00 AM'
    }, {
      label: 'Where',
      value: /*#__PURE__*/React.createElement(React.Fragment, null, "6225 Lake Gray Blvd Ste 2", /*#__PURE__*/React.createElement("br", null), "Jacksonville, FL 32244")
    }, {
      label: 'Cost',
      value: 'Nothing'
    }]
  }), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Step, {
    number: "01",
    title: "Park anywhere"
  }, "There is no visitor lot to find."), /*#__PURE__*/React.createElement(Step, {
    number: "02",
    title: "Check kids in"
  }, "Birth through fifth grade, both services."))), /*#__PURE__*/React.createElement("div", {
    className: "stack-lg"
  }, /*#__PURE__*/React.createElement(Headline, {
    size: "h2",
    accent: "coming"
  }, "Tell us you're"), sent ? /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: {
      background: 'var(--ink-100)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.6rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.1rem',
      letterSpacing: '-.02em'
    }
  }, "We have it. See you Sunday."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0,
      fontSize: '.9375rem'
    }
  }, "Someone will be near the front doors at both services.")) : /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Field, {
    id: "v-name",
    label: "Name",
    style: "box",
    placeholder: "First and last"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "v-email",
    label: "Email",
    style: "box",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "v-when",
    label: "Which Sunday",
    style: "box",
    placeholder: "Oct 18"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "v-kids",
    label: "Kids coming with you",
    style: "box",
    as: "select"
  }, /*#__PURE__*/React.createElement("option", null, "No kids this time"), /*#__PURE__*/React.createElement("option", null, "Nursery, birth to two"), /*#__PURE__*/React.createElement("option", null, "Preschool, three to five"), /*#__PURE__*/React.createElement("option", null, "Elementary, K through fifth")), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, "Let them know"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#messages"
  }, "Watch first instead")))))), /*#__PURE__*/React.createElement("section", {
    className: "on-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-x"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Before you come"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      maxWidth: '56rem'
    }
  }, /*#__PURE__*/React.createElement(Disclose, {
    summary: "What should I wear?",
    defaultOpen: true
  }, "Whatever you already own. Most people are in jeans."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "Do I have to sign anything?"
  }, "No. Kids check-in takes a name and a phone number, and that is the whole ask."), /*#__PURE__*/React.createElement(Disclose, {
    summary: "Is there somewhere to be prayed for?"
  }, "The Healing Room meets quarterly in the Chapel. Anyone can come and be prayed for.")))));
}
window.VisitScreen = VisitScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/journeychurch-org/VisitScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.ArtFrame = __ds_scope.ArtFrame;

__ds_ns.ArtScripture = __ds_scope.ArtScripture;

__ds_ns.ArtText = __ds_scope.ArtText;

__ds_ns.Logistics = __ds_scope.Logistics;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LowerThird = __ds_scope.LowerThird;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Disclose = __ds_scope.Disclose;

__ds_ns.Facts = __ds_scope.Facts;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.Scripture = __ds_scope.Scripture;

})();
