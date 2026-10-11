/* @ds-bundle: {"format":4,"namespace":"MillbrookeDesignSystem_c9f3d7","components":[{"name":"FeatureItem","sourcePath":"components/content/FeatureItem.jsx"},{"name":"FeatureTile","sourcePath":"components/content/FeatureTile.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"PillarCard","sourcePath":"components/content/PillarCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceTile","sourcePath":"components/content/ServiceTile.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconBadge","sourcePath":"components/core/IconBadge.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"MenuDrawer","sourcePath":"components/navigation/MenuDrawer.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"CtaBand","sourcePath":"components/sections/CtaBand.jsx"},{"name":"PageHero","sourcePath":"components/sections/PageHero.jsx"},{"name":"QuoteBand","sourcePath":"components/sections/QuoteBand.jsx"}],"sourceHashes":{"components/content/FeatureItem.jsx":"9aad985077d3","components/content/FeatureTile.jsx":"d94fa67d305e","components/content/Marquee.jsx":"2d3c8bbfb99a","components/content/PillarCard.jsx":"51dd68483583","components/content/SectionHeading.jsx":"60983b4290c7","components/content/ServiceTile.jsx":"1dec1d0516e8","components/content/StatBlock.jsx":"7fd8aa230694","components/core/Button.jsx":"1e65d52438f0","components/core/Eyebrow.jsx":"7a943e722bd4","components/core/Icon.jsx":"98307d7fc5b8","components/core/IconBadge.jsx":"8b6f879b7b26","components/core/TextLink.jsx":"92b251be8301","components/feedback/Toast.jsx":"0465643995af","components/forms/ContactForm.jsx":"5e2747b99fd4","components/forms/Field.jsx":"aa192e65dbd7","components/navigation/Breadcrumb.jsx":"f8dae2995746","components/navigation/MenuDrawer.jsx":"959761725121","components/navigation/SiteFooter.jsx":"718c70607f3a","components/navigation/SiteHeader.jsx":"e8a98a37e066","components/sections/CtaBand.jsx":"b37c26432c9d","components/sections/PageHero.jsx":"bc9ff32f89b4","components/sections/QuoteBand.jsx":"a95f20dd4984","ui_kits/website/Home.jsx":"64171763b683","ui_kits/website/PillarPage.jsx":"db49dd06900c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MillbrookeDesignSystem_c9f3d7 = window.MillbrookeDesignSystem_c9f3d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Marquee.jsx
try { (() => {
const ITEMS = ['Commercial Cleaning', 'Industrial', 'Healthcare', 'Education', 'Construction', 'Events', 'Maintenance', 'Real Estate'];
function Marquee({
  items = ITEMS,
  animated = true
}) {
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      padding: '20px 0',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: animated ? 'mb-marquee' : undefined,
    style: {
      display: 'flex',
      gap: 40,
      whiteSpace: 'nowrap',
      width: 'max-content',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.32em',
      color: 'rgba(255,255,255,.5)'
    }
  }, row.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.2)'
    }
  }, "\u25C6")))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid rgba(255,255,255,.15)',
      paddingLeft: 24,
      fontFamily: 'var(--font-sans)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: '-0.025em',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      color: 'rgba(255,255,255,.5)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'accent',
  style
}) {
  const color = {
    accent: 'var(--mb-steel)',
    light: 'rgba(255,255,255,.6)',
    'light-strong': 'rgba(255,255,255,.7)',
    muted: 'rgba(255,255,255,.4)'
  }[tone] || tone;
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  body,
  inverse = false,
  size = 'lg',
  rule = false,
  maxWidth = 672,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? 'light' : 'accent'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      maxWidth,
      fontSize: size === 'lg' ? 48 : 36,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
      color: inverse ? '#fff' : 'var(--mb-navy)',
      textWrap: 'pretty'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      height: 1,
      width: 64,
      background: inverse ? 'rgba(255,255,255,.2)' : 'rgba(25,46,71,.2)'
    }
  }), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth,
      fontSize: 16,
      lineHeight: 1.625,
      color: inverse ? 'rgba(255,255,255,.7)' : 'rgba(25,46,71,.7)'
    }
  }, body));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Paths copied verbatim from inline SVGs in sleekermedia/millbrooke (Feather/Lucide outline style).
const ICON_PATHS = {
  'arrow-up-right': 'M7 17L17 7M7 7h10v10',
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  'chevron-right': 'M9 18l6-6-6-6',
  'menu': 'M4 6h16M4 12h16M4 18h16',
  'close': 'M6 6l12 12M6 18L18 6',
  'mail': 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
  'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'shield': 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z',
  'shield-check': 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6zM9 12l2 2 4-4',
  'eye': 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'clipboard-check': 'M8 4h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 4V2h6v2M9 14l2 2 4-4',
  'message': 'M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z',
  'leaf': 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  'recycle': 'M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12m14 16-3 3 3 3M8.293 13.596 7.196 9.5 3.1 10.598m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843m13.378 9.633 4.096 1.098 1.097-4.096',
  'footprints': 'M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0ZM20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0ZM16 17h4M4 13h4',
  'graduation-cap': 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5',
  'trending-up': 'M3 17l6-6 4 4 8-8M14 7h7v7',
  'award': 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.21 13.89L7 22l5-3 5 3-1.21-8.11',
  'users': 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'building': 'M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11',
  'factory': 'M2 20h20M4 20V10l8-6 8 6v10',
  'home': 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  'school': 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5',
  'heart': 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  'wrench': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  'star': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/PillarCard.jsx
try { (() => {
const {
  useState
} = React;
function PillarCard({
  kicker,
  title,
  description,
  image,
  href = '#',
  cta = 'Learn More',
  minHeight = 480,
  onClick
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      minHeight,
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      borderRadius: 16,
      padding: 32,
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: h ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform .7s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, #192e47, rgba(25,46,71,.7), rgba(25,46,71,.1))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      color: 'rgba(255,255,255,.6)'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      maxWidth: 320,
      fontSize: 14,
      lineHeight: 1.625,
      color: 'rgba(255,255,255,.7)'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.28em',
      color: '#fff'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    strokeWidth: 2,
    style: {
      transition: 'transform .3s',
      transform: h ? 'translateX(4px)' : 'none'
    }
  }))));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 12,
  borderRadius: 9999,
  padding: '16px 32px',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.28em',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all .15s cubic-bezier(.4,0,.2,1)',
  whiteSpace: 'nowrap',
  lineHeight: 1.33
};
function Button({
  variant = 'solid',
  icon = 'arrow-up-right',
  href,
  children,
  disabled,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = useState(false);
  const v = variant === 'outline' ? {
    background: 'transparent',
    color: '#fff',
    border: '1px solid ' + (h ? '#fff' : 'rgba(255,255,255,.3)')
  } : variant === 'navy' ? {
    background: 'var(--mb-navy)',
    color: '#fff',
    border: '1px solid var(--mb-navy)',
    boxShadow: h ? 'var(--shadow-2xl)' : 'none'
  } : {
    background: '#fff',
    color: 'var(--mb-navy)',
    border: '1px solid #fff',
    boxShadow: h ? 'var(--shadow-2xl)' : 'none'
  };
  const s = {
    ...base,
    ...v,
    ...(disabled ? {
      opacity: .6,
      pointerEvents: 'none'
    } : null),
    ...style
  };
  const kids = /*#__PURE__*/React.createElement(React.Fragment, null, children, icon && icon !== 'none' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    strokeWidth: 2
  }) : null);
  const ev = {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, ev, rest), kids) : /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: s
  }, ev, rest), kids);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconBadge.jsx
try { (() => {
function IconBadge({
  name,
  variant = 'ring',
  inverse = false,
  style
}) {
  const v = {
    ring: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      border: '1px solid ' + (inverse ? 'rgba(255,255,255,.3)' : 'rgba(25,46,71,.2)'),
      color: inverse ? '#fff' : 'var(--mb-navy)',
      size: 18
    },
    'ring-sm': {
      width: 40,
      height: 40,
      borderRadius: 9999,
      border: '1px solid rgba(255,255,255,.2)',
      color: 'inherit',
      size: 16
    },
    solid: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      background: 'var(--mb-navy)',
      color: '#fff',
      size: 20
    },
    square: {
      width: 44,
      height: 44,
      borderRadius: 2,
      background: 'var(--mb-navy)',
      color: '#fff',
      size: 20
    }
  }[variant];
  const {
    size,
    ...box
  } = v;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all .3s',
      ...box,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size
  }));
}
Object.assign(__ds_scope, { IconBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconBadge.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureItem.jsx
try { (() => {
const {
  useState
} = React;
function FeatureItem({
  icon,
  title,
  description
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: '100%',
      borderTop: '1px solid rgba(25,46,71,.2)',
      paddingTop: 24,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconBadge, {
    name: icon,
    variant: "solid",
    style: {
      transform: h ? 'translateY(-4px)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '24px 0 0',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: 'var(--mb-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: 'rgba(25,46,71,.7)'
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureTile.jsx
try { (() => {
function FeatureTile({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,
      borderRadius: 2,
      border: '1px solid var(--mb-line)',
      background: 'var(--mb-mist)',
      padding: 24,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconBadge, {
    name: icon,
    variant: "square"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: 'var(--mb-steel)'
    }
  }, label));
}
Object.assign(__ds_scope, { FeatureTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceTile.jsx
try { (() => {
const {
  useState
} = React;
function ServiceTile({
  index,
  title,
  description,
  icon = 'building',
  image
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(25,46,71,.1)',
      borderRight: '1px solid rgba(25,46,71,.1)',
      background: 'var(--mb-mist)',
      padding: 32,
      minHeight: 200,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      cursor: 'default'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: h ? 1 : 0,
      transition: 'opacity .5s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(25,46,71,.8)',
      opacity: h ? 1 : 0,
      transition: 'opacity .5s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconBadge, {
    name: icon,
    inverse: h
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.3em',
      color: h ? 'rgba(255,255,255,.3)' : 'rgba(25,46,71,.3)',
      transition: 'color .15s'
    }
  }, index)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '32px 0 0',
      fontSize: 16,
      fontWeight: 600,
      color: h ? '#fff' : 'var(--mb-navy)',
      transition: 'color .3s'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: h ? 'rgba(255,255,255,.7)' : 'rgba(25,46,71,.6)',
      transition: 'color .3s'
    }
  }, description)));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function TextLink({
  href,
  children = 'Learn More',
  tone = 'light',
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.28em',
      color: tone === 'dark' ? 'var(--mb-navy)' : '#fff',
      textDecoration: 'none',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    strokeWidth: 2,
    style: {
      transition: 'transform .3s',
      transform: h ? 'translateX(4px)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  show = true,
  position = 'fixed'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position,
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%) translateY(' + (show ? 0 : 20) + 'px)',
      background: '#fff',
      color: 'var(--mb-navy)',
      padding: '14px 22px',
      borderRadius: 9999,
      boxShadow: '0 10px 30px rgba(0,0,0,.15)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      opacity: show ? 1 : 0,
      transition: 'opacity .3s, transform .3s',
      zIndex: 100,
      pointerEvents: 'none',
      whiteSpace: 'nowrap'
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Field({
  label,
  as = 'input',
  type = 'text',
  name,
  options = [],
  placeholder,
  rows = 5,
  required,
  value,
  onChange
}) {
  const [f, setF] = useState(false);
  const s = {
    width: '100%',
    marginTop: 12,
    border: 0,
    borderBottom: '1px solid ' + (f ? '#fff' : 'rgba(255,255,255,.25)'),
    background: 'transparent',
    padding: '12px 0',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color .2s',
    borderRadius: 0,
    boxSizing: 'border-box',
    resize: 'vertical'
  };
  const ev = {
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    name,
    required,
    value,
    onChange
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.32em',
      color: 'rgba(255,255,255,.7)'
    }
  }, label), as === 'select' ? /*#__PURE__*/React.createElement("select", _extends({
    className: "mb-field",
    style: {
      ...s,
      appearance: 'none',
      colorScheme: 'dark'
    },
    defaultValue: ""
  }, ev), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder || 'Select a service'), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    className: "mb-field",
    rows: rows,
    placeholder: placeholder,
    style: s
  }, ev)) : /*#__PURE__*/React.createElement("input", _extends({
    className: "mb-field",
    type: type,
    placeholder: placeholder,
    style: s
  }, ev)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
const SERVICES = ['Commercial Cleaning', 'Compliance & Standards', 'Green Cleaning & Management', 'People & Culture', 'Facility Management', 'Other'];
function ContactForm({
  onSubmit,
  sending = false
}) {
  const row = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    gap: 24
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    },
    style: {
      borderRadius: 2,
      border: '1px solid rgba(255,255,255,.15)',
      background: 'rgba(255,255,255,.05)',
      backdropFilter: 'blur(8px)',
      padding: 40,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    name: "name"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Email Address",
    type: "email",
    name: "email"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Phone",
    type: "tel",
    name: "phone"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Company",
    name: "company"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Service",
    as: "select",
    name: "service",
    options: SERVICES
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Message",
    as: "textarea",
    name: "message"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    disabled: sending,
    icon: sending ? 'none' : 'arrow-up-right',
    style: {
      marginTop: 40
    }
  }, sending ? 'Sending…' : 'Send Enquiry'));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [{
    label: 'Home',
    href: '#'
  }],
  current,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.32em',
      color: 'rgba(255,255,255,.7)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href,
    onClick: e => onNavigate && onNavigate(it, e),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, it.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 12,
    strokeWidth: 2
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, current));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MenuDrawer.jsx
try { (() => {
const {
  useState
} = React;
const DEFAULT_ITEMS = [{
  label: 'Compliance & Standards',
  href: '#compliance'
}, {
  label: 'Green Cleaning & Management',
  href: '#green'
}, {
  label: 'People & Culture',
  href: '#people'
}, {
  label: 'Contact',
  href: '#contact'
}];
function DrawerLink({
  item,
  i,
  onNavigate
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onClick: e => onNavigate && onNavigate(item, e),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'block',
      borderBottom: '1px solid rgba(255,255,255,.1)',
      padding: '20px 0',
      paddingLeft: h ? 8 : 0,
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.025em',
      color: h ? '#fff' : 'rgba(255,255,255,.9)',
      textDecoration: 'none',
      transition: 'all .5s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      color: 'rgba(255,255,255,.3)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, item.label)));
}
function MenuDrawer({
  open = false,
  items = DEFAULT_ITEMS,
  email = 'admin@millbrooke.com.au',
  onClose,
  onNavigate,
  position = 'fixed'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position,
      inset: 0,
      zIndex: 40,
      background: 'rgba(25,46,71,.6)',
      backdropFilter: 'blur(4px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position,
      right: 0,
      top: 0,
      zIndex: 40,
      height: '100%',
      width: '100%',
      maxWidth: 448,
      background: 'var(--mb-navy)',
      color: '#fff',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,.25)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform .5s cubic-bezier(0.22,1,0.36,1)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      padding: '112px 40px 48px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.4)'
    }
  }, "Navigate"), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(DrawerLink, {
    key: it.label,
    item: it,
    i: i,
    onNavigate: onNavigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.4)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: 'rgba(255,255,255,.85)',
      textDecoration: 'none'
    }
  }, email)))));
}
Object.assign(__ds_scope, { MenuDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MenuDrawer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const LINKS = ['Compliance & Standards', 'Green Cleaning & Management', 'People & Culture', 'Contact'];
function SiteFooter({
  logoSrc = 'assets/logo/millbrooke-logo.png',
  links = LINKS,
  email = 'admin@millbrooke.com.au',
  year = 2026,
  onNavigate
}) {
  const a = {
    color: 'rgba(255,255,255,.7)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--mb-navy)',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 40,
      padding: '56px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Millbrooke",
    style: {
      height: 48,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '0.22em',
      color: 'rgba(255,255,255,.7)'
    }
  }, "Compliance. Sustainability. People.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 14
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => onNavigate && onNavigate(l, e),
    style: a
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: '#fff',
      textDecoration: 'none'
    }
  }, email))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 40px',
      fontSize: 12,
      color: 'rgba(255,255,255,.6)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Millbrooke"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", null, "Website by Sleeker Media")))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState
} = React;
function SiteHeader({
  logoSrc = 'assets/logo/millbrooke-logo.png',
  scrolled = false,
  menuOpen = false,
  onMenuClick,
  position = 'fixed',
  style
}) {
  const [h, setH] = useState(false);
  const solid = scrolled || menuOpen;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 50,
      color: '#fff',
      transition: 'all .3s',
      background: solid ? 'rgba(25,46,71,.95)' : 'linear-gradient(to bottom, rgba(25,46,71,.8), rgba(25,46,71,.5), transparent)',
      backdropFilter: solid ? 'blur(8px)' : 'none',
      boxShadow: solid ? '0 10px 30px rgba(0,0,0,.2)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Millbrooke",
    style: {
      height: 44,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenuClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-label": "Open menu",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.24em',
      color: h ? '#fff' : 'rgba(255,255,255,.85)',
      transition: 'color .15s'
    }
  }, /*#__PURE__*/React.createElement("span", null, menuOpen ? 'Close' : 'Menu'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: menuOpen ? 'close' : 'menu',
    size: 22
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/sections/CtaBand.jsx
try { (() => {
function CtaBand({
  eyebrow = 'Get in touch',
  title,
  cta = 'Contact Us',
  href = '#',
  onClick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-grid-overlay",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -128,
      top: '50%',
      width: 500,
      height: 500,
      transform: 'translateY(-50%)',
      borderRadius: 9999,
      opacity: .3,
      filter: 'blur(64px)',
      background: 'radial-gradient(circle, rgba(74,111,165,0.7), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      padding: '96px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.6)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: 672,
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
      textWrap: 'pretty'
    }
  }, title)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: href,
    onClick: onClick
  }, cta)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/sections/PageHero.jsx
try { (() => {
function PageHero({
  image,
  eyebrow,
  title,
  crumb,
  kenburns = true,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: kenburns ? 'mb-kenburns' : undefined,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom right, rgba(25,46,71,.9), rgba(25,46,71,.75), rgba(25,46,71,.4))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-grid-overlay",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '192px 40px 128px',
      boxSizing: 'border-box'
    }
  }, crumb && /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    current: crumb,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.7)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 0',
      maxWidth: 896,
      fontSize: 72,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.025em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      height: 1,
      width: 96,
      background: 'rgba(255,255,255,.4)'
    }
  })));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/sections/QuoteBand.jsx
try { (() => {
function QuoteBand({
  eyebrow = 'In practice',
  quote,
  image,
  height = 480
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height,
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(25,46,71,.7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1024,
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.7)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 36,
      fontWeight: 300,
      fontStyle: 'italic',
      lineHeight: 1.625
    }
  }, "\u201C", quote, "\u201D")));
}
Object.assign(__ds_scope, { QuoteBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/QuoteBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  ServiceTile,
  PillarCard,
  StatBlock,
  Marquee,
  ContactForm,
  IconBadge,
  Eyebrow
} = window.MillbrookeDesignSystem_c9f3d7;
const IMG = n => '../../assets/images/' + n;
const SERVICES = [['01', 'Facility Services Management', 'Integrated management of every facility touchpoint.', 'facility-services-management.jpg', 'building'], ['02', 'Commercial Cleaning', 'Daily, scheduled, and one-off office cleaning programs.', 'commercial-cleaning.jpg', 'shield'], ['03', 'Industrial Cleaning', 'Heavy-duty cleaning for warehouses, plants, and depots.', 'industrial-cleaning.jpg', 'factory'], ['04', 'Real Estate', 'Make-ready, periodic, and tenancy-end cleaning services.', 'real-estate.jpg', 'home'], ['05', 'Education', 'Safe, hygienic environments for schools and campuses.', 'education.jpg', 'school'], ['06', 'Health & Aged Care', 'Infection-control cleaning to clinical standards.', 'health-aged-care.jpg', 'heart'], ['07', 'Construction Sites', 'Builders cleans, handover details, and site maintenance.', 'construction-sites.jpg', 'wrench'], ['08', 'Specialised Event Cleaning', 'Pre, post, and live-event presentation services.', 'specialised-event-cleaning.jpg', 'star'], ['09', 'Waste Management', 'Responsible waste streams, recycling, and reporting.', 'waste-management.jpg', 'map-pin']];
const wrap = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};
function HomeHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-kenburns",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + IMG('millbrooke-home.jpg') + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-grid-overlay",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '128px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.42em',
      color: 'rgba(255,255,255,.7)'
    }
  }, "Millbrooke \u2014 Commercial Cleaning & Facility Management"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 768,
      fontSize: 'clamp(2.75rem,8vw,88px)',
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.025em'
    }
  }, "Built ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.5)'
    }
  }, "around"), " your business."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 576,
      fontSize: 16,
      lineHeight: 1.625,
      color: 'rgba(255,255,255,.75)'
    }
  }, "Tailored commercial cleaning and facility management for Australian businesses that need a partner they can rely on."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: e => {
      e.preventDefault();
      go('contact');
    },
    href: "#"
  }, "Start a Conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "none",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('compliance');
    }
  }, "Explore Our Approach"))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid rgba(255,255,255,.1)',
      paddingTop: 16,
      paddingBottom: 16,
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.32em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.4)'
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      color: 'rgba(255,255,255,.5)'
    }
  }, [['Compliance', 'compliance'], ['Sustainability', 'green'], ['People', 'people']].map(([l, k]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      color: 'inherit'
    }
  }, l))))));
}
function About() {
  const tile = (f, h, span) => /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 2,
      background: 'url(' + IMG(f) + ') center/cover',
      gridColumn: span ? 'span 2' : undefined
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--mb-mist)',
      padding: '128px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About Millbrooke",
    title: "A real partner \u2014 there when you need us most.",
    rule: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontSize: 16,
      lineHeight: 1.625,
      color: 'rgba(25,46,71,.8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Millbrooke helps Australian businesses keep their workplaces clean, compliant, and running smoothly. We work alongside facility managers, building owners, and operations teams as a genuine extension of their business."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "From daily commercial cleaning to specialist facility services, every site is led by people who take pride in the detail \u2014 and backed by systems built for accountability, safety, and consistency."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, tile('compliance-facility.jpg', 320), tile('green-facility.jpg', 320), tile('facility-services-management.jpg', 256, true))));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '112px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    eyebrow: "Services",
    title: "Specialists across every facility discipline.",
    body: "Millbrooke has an attention to detail that sets every service apart. Across all ten disciplines, our teams bring the same standards of care, safety, and consistency to your site \u2014 backed by management systems built to keep you informed and your facility running without interruption."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      borderTop: '1px solid rgba(25,46,71,.1)',
      borderLeft: '1px solid rgba(25,46,71,.1)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceTile, {
    key: s[0],
    index: s[0],
    title: s[1],
    description: s[2],
    image: IMG(s[3]),
    icon: s[4]
  })))));
}
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--mb-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "10+",
    label: "Service Disciplines"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "WHS Compliant"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "24/7",
    label: "Operational Support"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "AU",
    label: "Locally Owned"
  })));
}
function Pillars({
  go
}) {
  const P = [['Pillar 01', 'Compliance & Standards', 'WHS-compliant cleaning with transparent audit reporting and continual improvement.', 'compliance-facility.jpg', 'compliance'], ['Pillar 02', 'Green Cleaning & Management', 'Eco-conscious programs that protect your people and reduce your footprint.', 'green-facility.jpg', 'green'], ['Pillar 03', 'People & Culture', 'A diverse, supported workforce — because employee satisfaction is the strategy.', 'construction-sites.jpg', 'people']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--mb-mist)',
      padding: '128px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Three Pillars",
    title: "How we deliver work you can trust."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, P.map(p => /*#__PURE__*/React.createElement(PillarCard, {
    key: p[4],
    kicker: p[0],
    title: p[1],
    description: p[2],
    image: IMG(p[3]),
    onClick: e => {
      e.preventDefault();
      go(p[4]);
    }
  })))));
}
function ContactBlock({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'linear-gradient(rgba(25,46,71,.95),rgba(25,46,71,.95)),url(' + IMG('facility-services-management.jpg') + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '128px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(ContactIntro, null), /*#__PURE__*/React.createElement(ContactForm, {
    onSubmit: onSubmit
  })));
}
function ContactIntro({
  as = 'h2'
}) {
  const H = as;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Contact"), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: '16px 0 0',
      maxWidth: 448,
      fontSize: as === 'h1' ? 60 : 48,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.025em'
    }
  }, "Let's tailor a programme to your facility."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 448,
      fontSize: 16,
      lineHeight: 1.625,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Tell us about your business and we'll be in touch to design a cleaning and facility management plan that fits."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      height: 1,
      width: 64,
      background: 'rgba(255,255,255,.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      fontSize: 14,
      color: 'rgba(255,255,255,.8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:admin@millbrooke.com.au",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(IconBadge, {
    name: "mail",
    variant: "ring-sm"
  }), "admin@millbrooke.com.au"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconBadge, {
    name: "map-pin",
    variant: "ring-sm"
  }), "Sydney, Australia \u2014 servicing facilities Sydney-wide")));
}
function HomeScreen({
  go,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HomeHero, {
    go: go
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Pillars, {
    go: go
  }), /*#__PURE__*/React.createElement(ContactBlock, {
    onSubmit: onSubmit
  }));
}
Object.assign(window, {
  HomeScreen,
  ContactIntro
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PillarPage.jsx
try { (() => {
const {
  PageHero,
  SectionHeading: PSectionHeading,
  FeatureItem,
  FeatureTile,
  QuoteBand,
  CtaBand
} = window.MillbrookeDesignSystem_c9f3d7;
const PIMG = n => '../../assets/images/' + n;
const body = {
  fontSize: 16,
  lineHeight: 1.625,
  color: 'rgba(25,46,71,.85)',
  display: 'flex',
  flexDirection: 'column',
  gap: 24
};
const pwrap = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};
function CompliancePage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    image: PIMG('compliance-facility.jpg'),
    crumb: "Compliance & Standards",
    eyebrow: "Pillar 01 \u2014 Trust",
    title: "Compliance & Standards",
    onNavigate: (i, e) => {
      e.preventDefault();
      go('home');
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--mb-mist)',
      padding: '128px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pwrap,
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(PSectionHeading, {
    size: "md",
    eyebrow: "Our approach",
    title: "Unwavering commitment to systemic benchmarks."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...body,
      color: 'rgba(25,46,71,.8)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Our approach to work, health, and safety requires an unwavering commitment to providing our workforce with the skills and tools necessary to meet systemic benchmarks; these guiding principles ensure full compliance and the highest standards of cleanliness. Millbrooke's personnel and partners play vital roles in daily workplace operations, effectively mitigating risks and delivering solutions whilst promoting safe working behaviour and quality assurance."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Individualised processes and procedures from site inspections, to reporting and audit assessments, every aspect is tailored to your business's needs to measure and continually improve performance. Millbrooke promotes a culture of transparency, with feedback encouraged and flowing all ways, generating more meaningful engagement between both management and staff in order to uphold high standards and accountability.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '112px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pwrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "shield-check",
    title: "WHS Compliant",
    description: "Workforce equipped with skills and tools to meet systemic benchmarks."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "eye",
    title: "Risk Mitigation",
    description: "Promoting safe working behaviour across every site we touch."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "clipboard-check",
    title: "Quality Assurance",
    description: "Individualised inspections, reporting and audit assessments."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "message",
    title: "Transparent Culture",
    description: "Feedback flows all ways \u2014 accountability you can measure."
  }))), /*#__PURE__*/React.createElement(QuoteBand, {
    image: PIMG('people-culture.jpg'),
    quote: "Every aspect is tailored to your business's needs \u2014 to measure and continually improve performance."
  }), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Ready to work with a compliance-driven cleaning partner?",
    onClick: e => {
      e.preventDefault();
      go('contact');
    }
  }));
}
function SplitPage({
  go,
  image,
  crumb,
  eyebrow,
  title,
  photo,
  photoFirst,
  paras,
  tiles,
  cols,
  max,
  cta
}) {
  const ph = /*#__PURE__*/React.createElement("div", {
    style: {
      height: 520,
      borderRadius: 2,
      background: 'url(' + PIMG(photo) + ') center/cover'
    }
  });
  const tx = /*#__PURE__*/React.createElement("div", {
    style: body
  }, paras.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0
    }
  }, p)));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    image: PIMG(image),
    crumb: crumb,
    eyebrow: eyebrow,
    title: title,
    onNavigate: (i, e) => {
      e.preventDefault();
      go('home');
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: '0 auto',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, photoFirst ? /*#__PURE__*/React.createElement(React.Fragment, null, ph, tx) : /*#__PURE__*/React.createElement(React.Fragment, null, tx, ph)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      margin: '64px auto 0',
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',1fr)',
      gap: 20
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement(FeatureTile, {
    key: t[1],
    icon: t[0],
    label: t[1]
  })))), /*#__PURE__*/React.createElement(CtaBand, {
    title: cta,
    onClick: e => {
      e.preventDefault();
      go('contact');
    }
  }));
}
function GreenPage({
  go
}) {
  return /*#__PURE__*/React.createElement(SplitPage, {
    go: go,
    image: "green-facility.jpg",
    crumb: "Green Cleaning & Management",
    eyebrow: "Pillar 02 \u2014 Sustainability",
    title: "Green Cleaning & Management",
    photo: "green-cleaning-management.avif",
    photoFirst: true,
    cols: 4,
    max: 1152,
    paras: ["At Millbrooke, we believe an eco-conscious approach to our business has a direct impact on your business. Green cleaning practices have become more effective and resources more accessible than ever before, with businesses recognising the direct link to the health and wellbeing of their employees and customers. From no-phosphate detergents and scrubs to recycled paper products, our customers can have a positive impact on the environment without Millbrooke compromising on its high standards.", "Millbrooke will customise a 'green cleaning' plan to suit your business's needs, centred around reducing your carbon footprint and waste. We always seek to educate our workforce about better ways to achieve results while doing our part to remain environmentally-friendly — safe work environments are green work environments."],
    tiles: [['leaf', 'No-Phosphate Products'], ['recycle', 'Waste Reduction'], ['footprints', 'Carbon Footprint Focus'], ['graduation-cap', 'Eco-Educated Workforce']],
    cta: "Want a greener approach for your facility?"
  });
}
function PeoplePage({
  go
}) {
  return /*#__PURE__*/React.createElement(SplitPage, {
    go: go,
    image: "millbrooke-home.jpg",
    crumb: "People & Culture",
    eyebrow: "Pillar 03 \u2014 People",
    title: "People & Culture",
    photo: "people-culture.jpg",
    cols: 3,
    max: 1024,
    paras: ["Millbrooke is powered by a diverse workforce and supplier network, all of whom share a commitment to achieving excellence. A direct representation of Millbrooke, our cleaners and industry specialists are supported and nurtured with professional development and knowledge enhancement opportunities, with a significant emphasis placed on internal promotion.", "Employee retention has little to do with Millbrooke's bottom line and everything to do with our position that employee satisfaction is the most effective strategy for success. Our staff are provided with the resources necessary to achieve professional growth and development through on-site training and support; progression planning; guidance and workplace feedback."],
    tiles: [['trending-up', 'Professional Development'], ['award', 'Internal Promotion'], ['users', 'Workforce Retention']],
    cta: "Interested in joining the Millbrooke team?"
  });
}
function ContactPage({
  go,
  onSubmit
}) {
  const {
    Breadcrumb,
    ContactForm
  } = window.MillbrookeDesignSystem_c9f3d7;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      isolation: 'isolate',
      overflow: 'hidden',
      background: 'var(--mb-navy)',
      color: '#fff',
      padding: '192px 0 160px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'url(' + PIMG('people-culture.jpg') + ') center/cover',
      opacity: .2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'linear-gradient(to bottom right, #192e47, rgba(25,46,71,.95), rgba(25,46,71,.8))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: pwrap
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    current: "Contact",
    onNavigate: (i, e) => {
      e.preventDefault();
      go('home');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(window.ContactIntro, {
    as: "h1"
  }), /*#__PURE__*/React.createElement(ContactForm, {
    onSubmit: onSubmit
  })))));
}
Object.assign(window, {
  CompliancePage,
  GreenPage,
  PeoplePage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PillarPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.FeatureTile = __ds_scope.FeatureTile;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconBadge = __ds_scope.IconBadge;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.MenuDrawer = __ds_scope.MenuDrawer;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.QuoteBand = __ds_scope.QuoteBand;

})();
