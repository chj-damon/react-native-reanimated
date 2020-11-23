(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(269)),o={id:"useAnimatedProps",title:"useAnimatedProps",sidebar_label:"useAnimatedProps"},p={id:"version-2.0.0-alpha.8/api/useAnimatedProps",title:"useAnimatedProps",description:"This hook is a counterpart of useAnimatedStyle hook, but works for a non-style view properties.",source:"@site/versioned_docs/version-2.0.0-alpha.8/api/useAnimatedProps.md",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/useAnimatedProps",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha.8/api/useAnimatedProps.md",version:"2.0.0-alpha.8",sidebar_label:"useAnimatedProps",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/useAnimatedReaction"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/withTiming"}},s=[{value:"Example",id:"example",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook is a counterpart of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"api/useAnimatedStyle"}),Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle"))," hook, but works for a non-style view properties.\nIt allows for defining a set of native view properties that can be updated on the UI thread as a response to a Shared Value change.\nSimilarily to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"api/useAnimatedStyle"}),Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),", this hook takes a single worklet (it is not necessary to add ",Object(i.b)("inlineCode",{parentName:"p"},"worklet")," directive here, because the method will be converted to worklet automatically).\nThe provided worklet is responsible for returning a object with view properties."),Object(i.b)("p",null,'Only "native" properties of "native views" can be set via ',Object(i.b)("inlineCode",{parentName:"p"},"useAnimatedProps"),".\nThe most common usecase for this hook is when we want to animate properties of some third-party native component, since most of the properties for the core React Native components are a part of the styles anyways (at least the properties for which it makes sense to be animated)."),Object(i.b)("p",null,"In order to connect the ",Object(i.b)("inlineCode",{parentName:"p"},"useAnimatedProps")," hook result to a view, you need to pass it as ",Object(i.b)("inlineCode",{parentName:"p"},"animatedProps")," property to the ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," version of the component (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.View"),").\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"animatedProps")," property is added when a native component is wrapped with ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.createAnimatedComponent"),"."),Object(i.b)("p",null,"If the animated props worklet uses any shared values, it will be executed upon these values updates and the connected view will be updated."),Object(i.b)("p",null,"In the example below we use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-svg"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-svg"))," package and animate one of the native properties of SVG views:"),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{12-16}","{12-16}":!0}),"import { StyleSheet } from 'react-native';\nimport {\n  Animated,\n  useSharedValue,\n  useAnimatedProps,\n} from 'react-native-reanimated';\nimport Svg, { Path } from 'react-native-svg';\n\nconst AnimatedPath = Animated.createAnimatedComponent(Path);\n\nfunction App() {\n  const radius = useSharedValue(50);\n\n  const animatedProps = useAnimatedProps(() => {\n    // draw a circle\n    const path = `\n    M 100, 100\n    m -${radius}, 0\n    a ${radius},${radius} 0 1,0 ${radius * 2},0\n    a ${radius},${radius} 0 1,0 ${-radius * 2},0\n    `;\n    return {\n      d: path\n    };\n  });\n\n  // attach animated props to an SVG path using animatedProps\n  return <Svg><Path animatedProps={animatedProps}/ fill=\"black\"></Svg>\n}\n")))}d.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,b=l["".concat(o,".").concat(u)]||l[u]||m[u]||i;return n?r.a.createElement(b,p(p({ref:t},c),{},{components:n})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);