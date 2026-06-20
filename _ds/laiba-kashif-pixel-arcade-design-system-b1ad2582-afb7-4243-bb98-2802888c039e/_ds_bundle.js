/* @ds-bundle: {"format":3,"namespace":"LaibaKashifPixelArcadeDesignSystem_b1ad25","components":[{"name":"PlayerCard","sourcePath":"components/brand/PlayerCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Marquee","sourcePath":"components/data/Marquee.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"Checklist","sourcePath":"components/forms/Checklist.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StickyNote","sourcePath":"components/surfaces/StickyNote.jsx"},{"name":"Window","sourcePath":"components/surfaces/Window.jsx"}],"sourceHashes":{"components/brand/PlayerCard.jsx":"678b68ef3d0b","components/core/Badge.jsx":"dccb01bd116e","components/core/Button.jsx":"93378875b34f","components/core/StatusPill.jsx":"fca2385d3c38","components/core/Tag.jsx":"8b1bc6535f69","components/data/Marquee.jsx":"c325e146b256","components/data/StatBar.jsx":"cd16249095b6","components/forms/Checklist.jsx":"05d752a49188","components/forms/Input.jsx":"911ca30e534a","components/surfaces/Card.jsx":"9adbdf72dcf6","components/surfaces/StickyNote.jsx":"37c3af1d5696","components/surfaces/Window.jsx":"f86779962105","ui_kits/portfolio/About.jsx":"bc4b1ed9ad6f","ui_kits/portfolio/Hero.jsx":"23131f5693c8","ui_kits/portfolio/StartScreen.jsx":"2c1a0123e502","ui_kits/portfolio/Works.jsx":"9a6a575389fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LaibaKashifPixelArcadeDesignSystem_b1ad25 = window.LaibaKashifPixelArcadeDesignSystem_b1ad25 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pixel label that sits on covers / corners.
 * Solid card chip with ink outline + tiny hard shadow.
 */
function Badge({
  color = 'card',
  children,
  style,
  ...props
}) {
  const bg = {
    card: 'var(--card)',
    orange: 'var(--orange)',
    yellow: 'var(--yellow)',
    teal: 'var(--teal)',
    purple: 'var(--purple)',
    rose: 'var(--rose)'
  }[color] || color;
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-pixel)',
      fontSize: 12,
      padding: '4px 9px',
      background: bg,
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 7,
      boxShadow: 'var(--sh-sm)',
      color: 'var(--ink)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the chunky arcade button. Ink outline + hard offset shadow,
 * lifts on hover, presses down on active.
 */
function Button({
  variant = 'solid',
  // solid | start | ghost | plain
  size = 'md',
  // sm | md | lg
  as = 'button',
  children,
  style,
  ...props
}) {
  const Tag = as;
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '8px 14px'
    },
    md: {
      fontSize: 17,
      padding: '12px 20px'
    },
    lg: {
      fontSize: 20,
      padding: '15px 26px'
    }
  };
  const bg = {
    solid: 'var(--orange)',
    start: 'var(--yellow)',
    ghost: 'var(--card)',
    plain: 'var(--card)'
  }[variant];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--font-pixel)',
    fontWeight: 600,
    color: 'var(--ink)',
    border: 'var(--bw) solid var(--ink)',
    borderRadius: 'var(--r-md)',
    background: bg,
    boxShadow: 'var(--sh)',
    cursor: 'pointer',
    transition: 'transform var(--dur-press), box-shadow var(--dur-press), background var(--dur-hover)',
    ...sizes[size],
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: `ds-btn ds-btn--${variant} ${props.className || ''}`,
    style: base,
    onMouseDown: e => {
      e.currentTarget.style.transform = 'var(--press)';
      e.currentTarget.style.boxShadow = 'var(--sh-sm)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'var(--lift)';
      e.currentTarget.style.boxShadow = 'var(--sh-lg)';
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--lift)';
      e.currentTarget.style.boxShadow = 'var(--sh-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--sh)';
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — "online / open to work" indicator.
 * Dark pill, pulsing green dot, mono label.
 */
function StatusPill({
  children = 'Open to work',
  dotColor = 'var(--green)',
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--dark)',
      color: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-pill)',
      padding: '6px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      boxShadow: 'var(--sh)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 11,
      height: 11,
      background: dotColor,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -5,
      border: `2px solid ${dotColor}`,
      borderRadius: '50%',
      animation: 'dsPing 2.2s infinite',
      opacity: 0
    }
  })), children, /*#__PURE__*/React.createElement("style", null, `@keyframes dsPing{0%{transform:scale(.5);opacity:.8}80%,100%{transform:scale(1.8);opacity:0}}`));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — rounded mono pill for skills / tech stack.
 * VT323 voice, sunken paper fill, thin ink outline.
 */
function Tag({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      lineHeight: 1.3,
      padding: '1px 10px',
      background: 'var(--cream-2)',
      border: '2px solid var(--ink)',
      borderRadius: 20,
      color: 'var(--ink)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marquee — scrolling pixel ticker strip. Orange band, ink rules,
 * star separators. The skills-strip motif.
 */
function Marquee({
  items = [],
  sep = '✦',
  speed = 24,
  style,
  ...props
}) {
  const run = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 22px'
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0',
      color: 'var(--card)'
    }
  }, sep))));
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      borderTop: 'var(--bw) solid var(--ink)',
      borderBottom: 'var(--bw) solid var(--ink)',
      background: 'var(--orange)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '12px 0',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-pixel)',
      fontWeight: 600,
      fontSize: '1.3rem',
      animation: `dsMarquee ${speed}s linear infinite`
    }
  }, run, run), /*#__PURE__*/React.createElement("style", null, `@keyframes dsMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBar — labeled progress bar (the "player stats" motif).
 * Ink-outlined track with a striped fill.
 */
function StatBar({
  label,
  value = 50,
  color = 'orange',
  striped = false,
  style,
  ...props
}) {
  const fill = {
    orange: 'var(--orange)',
    yellow: 'var(--yellow)',
    teal: 'var(--teal)',
    purple: 'var(--purple)',
    rose: 'var(--rose)',
    green: 'var(--green)'
  }[color] || color;
  const bg = striped ? `repeating-linear-gradient(45deg, ${fill} 0 7px, color-mix(in srgb, ${fill} 80%, var(--ink)) 7px 14px)` : fill;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 128px',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 14,
      border: '2px solid var(--ink)',
      borderRadius: 8,
      background: 'var(--cream)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${Math.max(0, Math.min(100, value))}%`,
      background: bg
    }
  })));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/brand/PlayerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PlayerCard — the RPG "character sheet" hero card. A pixel window with
 * an avatar, class line, XP bar and a stat block. The brand signature.
 */
function PlayerCard({
  name = 'Laiba Kashif',
  initials = 'LK',
  charClass = 'Data · Product · UX',
  fileName = 'player.dat',
  level = 'LVL 26',
  xp = 78,
  hearts = 4,
  stats = [{
    label: 'Data & SQL',
    value: 90,
    color: 'orange'
  }, {
    label: 'BI / Dashboards',
    value: 82,
    color: 'yellow'
  }, {
    label: 'UX Research',
    value: 76,
    color: 'purple'
  }, {
    label: 'Product Testing',
    value: 84,
    color: 'teal'
  }],
  footer = '◈ 1240 XP · Class of 2026',
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 392,
      background: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh-lg)',
      overflow: 'visible',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--purple)',
      borderBottom: 'var(--bw) solid var(--ink)',
      borderRadius: 'calc(var(--r-lg) - 3px) calc(var(--r-lg) - 3px) 0 0',
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['var(--orange)', 'var(--yellow)', 'var(--teal)'].map((c, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: 12,
      height: 12,
      border: '2px solid var(--ink)',
      borderRadius: '50%',
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 13,
      color: '#fff'
    }
  }, fileName), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-pixel)',
      fontSize: 13,
      color: '#fff'
    }
  }, "\u25A2")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      height: 62,
      flex: 'none',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 11,
      background: 'var(--yellow)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-pixel)',
      fontSize: 24,
      boxShadow: 'var(--sh-sm)'
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: '1.18rem',
      lineHeight: 1
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--ink-2)',
      margin: '5px 0 4px'
    }
  }, charClass), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      letterSpacing: 2,
      color: '#E0496B'
    }
  }, '♥'.repeat(hearts)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      background: 'var(--cream-2)',
      border: '2px solid var(--ink)',
      borderRadius: 6,
      padding: '4px 8px',
      whiteSpace: 'nowrap'
    }
  }, level), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 14,
      border: '2px solid var(--ink)',
      borderRadius: 8,
      background: 'var(--cream)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${xp}%`,
      background: 'repeating-linear-gradient(45deg, var(--teal) 0 7px, #2bbfae 7px 14px)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      marginBottom: 15
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.StatBar, _extends({
    key: i
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      borderTop: 'var(--bw) dashed var(--ink)',
      paddingTop: 12,
      color: 'var(--ink-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { PlayerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PlayerCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checklist — quest-log style task panel. Pixel ✓ boxes,
 * done items get struck through. The "clean data / test flow /
 * dashboard ready" motif.
 */
function Checklist({
  title = 'QUEST LOG',
  items = [],
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      background: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--sh)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--teal)',
      color: 'var(--ink)',
      borderBottom: 'var(--bw) solid var(--ink)',
      padding: '10px 16px',
      fontFamily: 'var(--font-pixel)',
      fontSize: 14,
      letterSpacing: '.08em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2726 ", title), /*#__PURE__*/React.createElement("span", null, items.filter(i => i.done).length, "/", items.length)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '9px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 19,
      borderBottom: i < items.length - 1 ? '2px dashed rgba(22,20,14,.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      border: '3px solid var(--ink)',
      borderRadius: 5,
      background: it.done ? 'var(--green)' : 'var(--card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-pixel)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, it.done ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      color: it.done ? 'var(--ink-2)' : 'var(--ink)',
      textDecoration: it.done ? 'line-through' : 'none'
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — pixel text field. Ink outline, inset focus.
 * Optional pixel label above.
 */
function Input({
  label,
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-pixel)',
      fontSize: 12,
      marginBottom: 7,
      letterSpacing: '.03em',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    onFocus: e => {
      setFocus(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      fontFamily: 'var(--font-mono)',
      fontSize: 19,
      padding: '11px 14px',
      background: 'var(--card)',
      color: 'var(--ink)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-md)',
      boxShadow: focus ? 'inset 3px 3px 0 var(--cream-2)' : 'var(--sh-sm)',
      outline: 'none',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base raised paper surface. Ink outline + hard shadow.
 * Optionally lifts on hover and can be tilted for the scattered look.
 */
function Card({
  tilt = 0,
  hover = false,
  children,
  style,
  ...props
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    onMouseEnter: e => {
      hover && setLift(true);
      props.onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      hover && setLift(false);
      props.onMouseLeave?.(e);
    },
    style: {
      background: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      boxShadow: lift ? 'var(--sh-xl)' : 'var(--sh-lg)',
      padding: 14,
      transform: lift ? `translateY(-8px) rotate(0deg)` : `rotate(${tilt}deg)`,
      transition: 'transform var(--dur-hover), box-shadow var(--dur-hover)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StickyNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickyNote — tilted paper note with tape or a clip pin.
 * Used in the "About / right now" board.
 */
function StickyNote({
  color = 'yellow',
  tilt = -2,
  pin = 'tape',
  // tape | clip | none
  title,
  children,
  style,
  ...props
}) {
  const fill = {
    yellow: 'var(--note-yellow)',
    mint: 'var(--note-mint)',
    pink: 'var(--note-pink)',
    lilac: 'var(--note-lilac)'
  }[color] || color;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      position: 'relative',
      background: fill,
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 6,
      boxShadow: 'var(--sh)',
      padding: '30px 18px 20px',
      minHeight: 150,
      transform: `rotate(${tilt}deg)`,
      ...style
    }
  }), pin === 'tape' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -11,
      left: '50%',
      transform: 'translateX(-50%) rotate(-3deg)',
      width: 64,
      height: 22,
      background: 'rgba(255,255,255,.55)',
      border: '2px solid rgba(22,20,14,.35)'
    }
  }), pin === 'clip' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -18,
      left: 22,
      width: 17,
      height: 38,
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 9,
      transform: 'rotate(-14deg)'
    }
  }), title && /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 14,
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 19,
      lineHeight: 1.25,
      margin: 0,
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { StickyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StickyNote.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Window.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Window — retro desktop window frame with a title bar (traffic-light
 * squares) and a body. The signature "portfolio.exe" container.
 */
function Window({
  title = 'window.exe',
  barColor = 'var(--navy)',
  children,
  style,
  bodyStyle,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      position: 'relative',
      border: 'var(--bw-lg) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      background: 'var(--card)',
      boxShadow: 'var(--sh-lg)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: barColor,
      color: 'var(--card)',
      padding: '9px 12px',
      borderBottom: 'var(--bw-lg) solid var(--ink)',
      fontFamily: 'var(--font-pixel)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['var(--orange)', 'var(--yellow)', 'var(--teal)'].map((c, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: 14,
      height: 14,
      background: c,
      border: '2px solid var(--ink)',
      borderRadius: '50%'
    }
  }))), /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", null, "\u25A2")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* global React */
// About — profile window + sticky-note board + a quest-log checklist.

function About() {
  const DS = window.LaibaKashifPixelArcadeDesignSystem_b1ad25 || {};
  const {
    Window,
    StickyNote,
    Checklist,
    StatBar
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--band)',
      borderTop: 'var(--bw) solid var(--ink)',
      borderBottom: 'var(--bw) solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 36px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,6vw,4rem)',
      textShadow: '4px 4px 0 var(--orange)',
      margin: '0 0 6px'
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      color: 'var(--ink-2)',
      margin: '0 0 46px'
    }
  }, "A little about me \u21A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "Laiba Kashif \u2014 Profile.exe",
    barColor: "var(--navy)",
    bodyStyle: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: 'var(--purple)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    className: "ds-scanlines"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: '7rem',
      color: 'rgba(251,248,238,.92)',
      textShadow: '5px 5px 0 var(--ink)'
    }
  }, "LK"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      background: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 8,
      padding: '5px 12px'
    }
  }, "Add portrait \u2192"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 600,
      fontSize: 'clamp(1.4rem,2.4vw,2rem)',
      lineHeight: 1.25,
      margin: '0 0 16px'
    }
  }, "I'm Laiba \u2014 a final-year ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple)'
    }
  }, "B.Sc. Information Technology"), " student working where ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple)'
    }
  }, "data, product and UX"), " meet."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      color: 'var(--ink-2)',
      maxWidth: '56ch',
      margin: '0 0 22px'
    }
  }, "I clean datasets, build dashboards, spot trends, test product flows and communicate insight clearly \u2014 turning messy information into decision-ready work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(StatBar, {
    label: "Data & SQL",
    value: 90,
    color: "orange"
  }), /*#__PURE__*/React.createElement(StatBar, {
    label: "BI / Dashboards",
    value: 82,
    color: "yellow",
    striped: true
  }), /*#__PURE__*/React.createElement(StatBar, {
    label: "UX Research",
    value: 76,
    color: "purple"
  }), /*#__PURE__*/React.createElement(StatBar, {
    label: "Product Testing",
    value: 84,
    color: "teal",
    striped: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(StickyNote, {
    color: "yellow",
    tilt: -2.5,
    pin: "clip",
    title: "RIGHT NOW I'M\u2026"
  }, "Final-year B.Sc. IT student at Curtin University Dubai (Class of '26)."), /*#__PURE__*/React.createElement(StickyNote, {
    color: "mint",
    tilt: 1.8,
    title: "MY GO-TO TOOLS"
  }, "Python, pandas, SQL, Power BI & Figma \u2014 analysis to interface."), /*#__PURE__*/React.createElement(StickyNote, {
    color: "pink",
    tilt: -1.5,
    title: "WHAT I FOCUS ON"
  }, "Data & product analytics, dashboards, UX research and testing."), /*#__PURE__*/React.createElement(StickyNote, {
    color: "lilac",
    tilt: 2.4,
    title: "THIS YEAR'S GOAL"
  }, "Land a junior data / BI / UX internship.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Checklist, {
    title: "DATA \u2192 INSIGHT",
    items: [{
      label: 'Clean & reconcile data',
      done: true
    }, {
      label: 'Build the dashboard',
      done: true
    }, {
      label: 'Test the product flow',
      done: true
    }, {
      label: 'Ship decision-ready insight',
      done: false
    }]
  }))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* global React */
// Hero — redesigned pixel-arcade START SCREEN with a cursor "data scanner".
// A circular spotlight follows the cursor and reveals a hidden INSIGHT layer
// (dashboards, SQL tables, UX wireframes, sticky notes, a product flow) over a
// dark CRT field — symbolizing pulling clean insight out of messy data.

function ScanBlock({
  title,
  accent,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--screen-2)',
      border: '2px solid var(--neon)',
      borderRadius: 8,
      padding: '8px 10px',
      boxShadow: '3px 3px 0 rgba(0,0,0,.5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: accent || 'var(--neon)',
      marginBottom: 6
    }
  }, title), children);
}
function MiniBars({
  vals,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      height: 42
    }
  }, vals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${v}%`,
      background: color,
      border: '1px solid var(--ink)'
    }
  })));
}
function Hero() {
  const DS = window.LaibaKashifPixelArcadeDesignSystem_b1ad25 || {};
  const {
    Button,
    PlayerCard
  } = DS;
  const layerRef = React.useRef(null);
  const lensRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const [scanning, setScanning] = React.useState(false);
  React.useEffect(() => {
    const wrap = wrapRef.current;
    const move = (clientX, clientY) => {
      const r = wrap.getBoundingClientRect();
      const x = clientX - r.left,
        y = clientY - r.top;
      if (layerRef.current) {
        layerRef.current.style.setProperty('--mx', x + 'px');
        layerRef.current.style.setProperty('--my', y + 'px');
      }
      if (lensRef.current) {
        lensRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      }
    };
    const onMove = e => {
      setScanning(true);
      move(e.clientX, e.clientY);
    };
    const onLeave = () => setScanning(false);
    const onTouch = e => {
      if (e.touches[0]) {
        setScanning(true);
        move(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);
    wrap.addEventListener('touchmove', onTouch, {
      passive: true
    });

    // gentle auto-scan demo before first interaction
    let raf,
      t = 0,
      auto = true;
    const stop = () => {
      auto = false;
    };
    wrap.addEventListener('mousemove', stop, {
      once: true
    });
    wrap.addEventListener('touchstart', stop, {
      once: true
    });
    const tick = () => {
      if (auto && wrap) {
        t += 0.012;
        const r = wrap.getBoundingClientRect();
        const x = r.width * (0.5 + 0.32 * Math.cos(t));
        const y = r.height * (0.5 + 0.26 * Math.sin(t * 1.3));
        if (layerRef.current) {
          layerRef.current.style.setProperty('--mx', x + 'px');
          layerRef.current.style.setProperty('--my', y + 'px');
        }
        if (lensRef.current) lensRef.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
        setScanning(true);
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
      wrap.removeEventListener('touchmove', onTouch);
      cancelAnimationFrame(raf);
    };
  }, []);
  const A = '../../assets';
  return /*#__PURE__*/React.createElement("section", {
    ref: wrapRef,
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 620,
      background: 'var(--cream)',
      borderBottom: 'var(--bw-lg) solid var(--ink)',
      cursor: 'crosshair'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/cloud-lg.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '7%',
      left: '4%',
      width: 130,
      imageRendering: 'pixelated',
      animation: 'heroFloat 8s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/cloud-md.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '12%',
      right: '8%',
      width: 110,
      imageRendering: 'pixelated',
      animation: 'heroFloat 9s ease-in-out -2s infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/cloud-sm.svg`,
    alt: "",
    style: {
      position: 'absolute',
      bottom: '26%',
      left: '9%',
      width: 78,
      imageRendering: 'pixelated',
      animation: 'heroFloat 7s ease-in-out -3s infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/star.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '20%',
      left: '30%',
      width: 30,
      imageRendering: 'pixelated',
      animation: 'heroTwk 2.6s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/spark.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '30%',
      right: '26%',
      width: 26,
      imageRendering: 'pixelated',
      animation: 'heroTwk 2.2s ease-in-out -1s infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: layerRef,
    className: "scan-layer",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 4,
      pointerEvents: 'none',
      background: 'var(--screen)',
      WebkitMaskImage: 'radial-gradient(circle at var(--mx,-200px) var(--my,-200px), #000 0 104px, transparent 128px)',
      maskImage: 'radial-gradient(circle at var(--mx,-200px) var(--my,-200px), #000 0 104px, transparent 128px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(0deg, rgba(91,229,132,.08) 0 2px, transparent 2px 4px)'
    }
  }), /*#__PURE__*/React.createElement(ScanBlock, {
    title: "\u25E4 DASHBOARD",
    style: {
      position: 'absolute',
      top: 64,
      left: '8%',
      width: 190
    }
  }, /*#__PURE__*/React.createElement(MiniBars, {
    vals: [40, 70, 55, 90, 65, 80],
    color: "var(--cyan)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--neon)',
      marginTop: 6
    }
  }, "+23% conversion")), /*#__PURE__*/React.createElement(ScanBlock, {
    title: "\u25E4 SQL \xB7 users",
    accent: "var(--yellow)",
    style: {
      position: 'absolute',
      top: 92,
      right: '9%',
      width: 210,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--neon)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 2,
      color: 'var(--cyan)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "id"), /*#__PURE__*/React.createElement("span", null, "region"), /*#__PURE__*/React.createElement("span", null, "score"), /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("span", null, "UAE"), /*#__PURE__*/React.createElement("span", null, "92"), /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("span", null, "CAN"), /*#__PURE__*/React.createElement("span", null, "88"), /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("span", null, "UAE"), /*#__PURE__*/React.createElement("span", null, "74"))), /*#__PURE__*/React.createElement(ScanBlock, {
    title: "\u25E4 WIREFRAME",
    accent: "var(--rose)",
    style: {
      position: 'absolute',
      bottom: 70,
      left: '12%',
      width: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--screen)',
      border: '1px solid var(--rose)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      border: '1px solid var(--rose)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: '#3a3658'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: '#3a3658'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      width: '60%',
      background: '#3a3658'
    }
  }))))), /*#__PURE__*/React.createElement(ScanBlock, {
    title: "\u25E4 PRODUCT FLOW",
    accent: "var(--purple)",
    style: {
      position: 'absolute',
      bottom: 96,
      right: '11%',
      width: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--neon)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--purple)',
      padding: '3px 6px'
    }
  }, "Raw"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--purple)',
      padding: '3px 6px'
    }
  }, "Clean"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--purple)',
      padding: '3px 6px'
    }
  }, "Test"), "\u2192", /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--neon)',
      padding: '3px 6px',
      color: 'var(--neon)'
    }
  }, "Ship"))), [{
    t: 'clean data',
    x: '40%',
    y: 56
  }, {
    t: 'test flow',
    x: '46%',
    y: '74%'
  }, {
    t: 'dashboard ready',
    x: '60%',
    y: '50%'
  }].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: l.x,
      top: l.y,
      fontFamily: 'var(--font-pixel)',
      fontSize: 13,
      color: 'var(--neon)',
      border: '2px solid var(--neon)',
      borderRadius: 6,
      padding: '3px 8px',
      background: 'rgba(20,19,31,.7)',
      whiteSpace: 'nowrap'
    }
  }, "\u2713 ", l.t))), /*#__PURE__*/React.createElement("div", {
    ref: lensRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 6,
      pointerEvents: 'none',
      width: 224,
      height: 224,
      marginLeft: 0,
      opacity: scanning ? 1 : 0,
      transition: 'opacity .25s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '3px solid var(--neon)',
      borderRadius: '50%',
      boxShadow: '0 0 0 3px var(--ink), inset 0 0 24px rgba(91,229,132,.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: -10,
      right: -10,
      height: 2,
      background: 'rgba(91,229,132,.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: -10,
      bottom: -10,
      width: 2,
      background: 'rgba(91,229,132,.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -26,
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--ink)',
      background: 'var(--neon)',
      border: '2px solid var(--ink)',
      borderRadius: 5,
      padding: '2px 7px',
      whiteSpace: 'nowrap'
    }
  }, "SCANNING\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1120,
      margin: '0 auto',
      padding: '54px 36px 60px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
      gap: 44,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-pixel)',
      fontSize: 12,
      letterSpacing: '.14em',
      background: 'var(--card)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-pill)',
      padding: '6px 14px',
      boxShadow: 'var(--sh-sm)',
      marginBottom: 20
    }
  }, "\u2605 PORTFOLIO \xB7 2026 \u2605"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: 'clamp(2.6rem,5vw,4.4rem)',
      lineHeight: .98,
      letterSpacing: '-.01em',
      textShadow: '5px 5px 0 var(--orange)',
      margin: 0
    }
  }, "Data, design &", /*#__PURE__*/React.createElement("br", null), "products that ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal)'
    }
  }, "click.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 21,
      color: 'var(--ink-2)',
      maxWidth: '46ch',
      margin: '20px 0 0'
    }
  }, "Final-year IT student in Dubai turning messy data into tested, decision-ready products. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)',
      fontFamily: 'var(--font-pixel)',
      fontSize: 16
    }
  }, "Move your cursor to scan \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, Button && /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    as: "a",
    href: "#work"
  }, "\u25B6 VIEW MY WORK"), Button && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    as: "a",
    href: "#contact"
  }, "\u2709 EMAIL ME"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, PlayerCard && /*#__PURE__*/React.createElement(PlayerCard, null))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes heroFloat{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-16px) rotate(4deg)}}
        @keyframes heroTwk{0%,100%{transform:scale(.85);opacity:.6}50%{transform:scale(1.05);opacity:1}}
        @media(max-width:900px){ section .scan-layer{} }
      `));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/StartScreen.jsx
try { (() => {
/* global React */
// StartScreen — arcade "press start" boot overlay that dismisses to the site.

function StartScreen({
  onStart
}) {
  const [gone, setGone] = React.useState(false);
  const go = () => {
    setGone(true);
    setTimeout(() => onStart && onStart(), 560);
  };
  const A = '../../assets';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'radial-gradient(120% 120% at 50% 18%, #9C78E6 0%, var(--purple) 55%, #5E40A8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      opacity: gone ? 0 : 1,
      visibility: gone ? 'hidden' : 'visible',
      transition: 'opacity .55s ease, visibility .55s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 18px, transparent 18px 36px)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/cloud-lg.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '10%',
      left: '6%',
      width: 130,
      imageRendering: 'pixelated',
      animation: 'bootFloat 8s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/cloud-md.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '14%',
      right: '9%',
      width: 110,
      imageRendering: 'pixelated',
      animation: 'bootFloat 9s ease-in-out -2s infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/spark.svg`,
    alt: "",
    style: {
      position: 'absolute',
      top: '22%',
      left: '20%',
      width: 36,
      imageRendering: 'pixelated',
      animation: 'bootTwk 1.8s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/star.svg`,
    alt: "",
    style: {
      position: 'absolute',
      bottom: '20%',
      right: '20%',
      width: 34,
      imageRendering: 'pixelated',
      animation: 'bootTwk 2.2s ease-in-out -.5s infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/ground-hills.svg`,
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      imageRendering: 'pixelated'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      width: 'min(940px,92vw)',
      background: 'var(--rose)',
      border: '7px solid var(--ink)',
      borderRadius: 34,
      boxShadow: '12px 12px 0 var(--ink)',
      padding: '32px 38px',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      transform: gone ? 'scale(5) rotateX(26deg)' : 'none',
      opacity: gone ? 0 : 1,
      transition: 'transform .6s cubic-bezier(.55,.1,.3,1), opacity .55s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      position: 'relative',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      left: 0,
      top: 19,
      width: 56,
      height: 18,
      background: 'var(--card)',
      border: '3px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      left: 19,
      top: 0,
      width: 18,
      height: 56,
      background: 'var(--card)',
      border: '3px solid var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-scanlines",
    style: {
      flex: 1,
      background: 'var(--cyan)',
      border: '6px solid var(--ink)',
      borderRadius: 18,
      padding: '34px 22px 70px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 15,
      letterSpacing: '.12em',
      marginBottom: 12
    }
  }, "\u2605 LEVEL 01 \u2014 PRESS START \u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,7vw,4.2rem)',
      color: 'var(--rose)',
      lineHeight: .92,
      textShadow: '3px 3px 0 var(--card), 7px 7px 0 var(--ink)'
    }
  }, "THIS IS MY", /*#__PURE__*/React.createElement("br", null), "PORTFOLIO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 21,
      marginTop: 16
    }
  }, "by Laiba Kashif \xB7 2026"), /*#__PURE__*/React.createElement("button", {
    onClick: go,
    style: {
      position: 'absolute',
      bottom: 18,
      right: 22,
      fontFamily: 'var(--font-pixel)',
      fontSize: 21,
      color: 'var(--card)',
      background: 'var(--ink)',
      border: '4px solid var(--ink)',
      borderRadius: 12,
      padding: '10px 24px',
      cursor: 'pointer',
      animation: 'bootBlink 1.1s steps(1) infinite'
    }
  }, "START \u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '3px solid var(--ink)',
      background: 'var(--orange)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '3px solid var(--ink)',
      background: 'var(--teal)'
    }
  }))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes bootFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes bootTwk{0%,100%{transform:scale(.8) rotate(0);opacity:.7}50%{transform:scale(1.1) rotate(16deg);opacity:1}}
        @keyframes bootBlink{50%{opacity:.45}}
      `));
}
window.StartScreen = StartScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/StartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Works.jsx
try { (() => {
/* global React */
// Works — scattered pixel project cards using the project motifs.

const WORKS_DATA = [{
  key: 'skillmap',
  title: 'SkillMap',
  cat: '01 — Data Analytics / BI',
  badge: 'Data / BI',
  bg: 'var(--teal)',
  motif: 'motif-skillmap',
  tags: ['Python', 'SQL', 'Power BI'],
  tilt: -1.5,
  mt: 0
}, {
  key: 'codequest',
  title: 'CodeQuest',
  cat: '02 — Product / Web App',
  badge: 'Product / Web App',
  bg: 'var(--navy)',
  motif: 'motif-codequest',
  tags: ['React', 'Firebase', 'UI/UX'],
  tilt: 1.5,
  mt: 48
}, {
  key: 'skinmatch',
  title: 'SkinMatch',
  cat: '03 — UX Case Study',
  badge: 'UX Case Study',
  bg: 'var(--rose)',
  motif: 'motif-skinmatch',
  tags: ['Figma', 'UX Research', 'Prototype'],
  tilt: 1,
  mt: -14
}, {
  key: 'nimbus',
  title: 'Nimbus Systems',
  cat: '04 — Cloud / Systems',
  badge: 'Cloud / AWS',
  bg: 'var(--purple)',
  motif: 'motif-nimbus',
  tags: ['AWS', 'EC2', 'Python'],
  tilt: -1,
  mt: 36
}, {
  key: 'solar',
  title: 'Solcellespesialisten',
  cat: '05 — Product Team',
  badge: 'Product Team',
  bg: 'var(--orange)',
  motif: 'motif-solar',
  tags: ['Figma', 'UAT', 'Docs'],
  tilt: 1.5,
  mt: -8
}];
function WorkCard({
  d
}) {
  const DS = window.LaibaKashifPixelArcadeDesignSystem_b1ad25 || {};
  const {
    Card,
    Badge,
    Tag
  } = DS;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'calc(50% - 18px)',
      marginTop: d.mt
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tilt: d.tilt,
    hover: true,
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      aspectRatio: '16/10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: d.bg
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      zIndex: 2
    }
  }, d.badge), /*#__PURE__*/React.createElement(Badge, {
    color: "yellow",
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      zIndex: 2,
      opacity: hover ? 1 : 0,
      transform: hover ? 'translateY(0)' : 'translateY(-6px)',
      transition: '.25s'
    }
  }, "Open \u2197"), /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${d.motif}.svg`,
    alt: "",
    style: {
      width: '56%',
      imageRendering: 'pixelated',
      filter: 'drop-shadow(3px 3px 0 rgba(22,20,14,.35))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 6px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      color: 'var(--ink-2)'
    }
  }, d.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: '1.7rem',
      lineHeight: 1.05,
      margin: '2px 0 10px'
    }
  }, d.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, d.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))));
}
function Works() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '88px 36px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,6vw,4rem)',
      textShadow: '4px 4px 0 var(--orange)',
      margin: '0 0 6px'
    }
  }, "Works"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      color: 'var(--ink-2)',
      margin: '0 0 46px'
    }
  }, "Five featured projects \xB7 hover any cover \u21A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px 36px',
      alignItems: 'flex-start'
    }
  }, WORKS_DATA.map(d => /*#__PURE__*/React.createElement(WorkCard, {
    key: d.key,
    d: d
  }))));
}
window.Works = Works;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Works.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PlayerCard = __ds_scope.PlayerCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StickyNote = __ds_scope.StickyNote;

__ds_ns.Window = __ds_scope.Window;

})();
