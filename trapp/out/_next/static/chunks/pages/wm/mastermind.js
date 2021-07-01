(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/wm/mastermind"],{

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  _s();

  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const RouterContext = /*#__PURE__*/_react.default.createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route, ext = '') {
  const path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? `/index${route}` : `${route}`;
  return path + ext;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( false ? 0 : (0, _utils.getLocationOrigin)());
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/wi/showinfo.js":
/*!******************************!*\
  !*** ./pages/wi/showinfo.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Showinfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wi\\showinfo.js",
    _s = $RefreshSig$();


function Showinfo(props) {
  _s();

  const {
    0: info,
    1: setInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loaded,
    1: setLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // console.log("NODE_ENV=" + process.env.NODE_ENV)

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const apiCall = async () => {
      let url =  true ? 'http://localhost:3000/api/words?word=' : 0; //  'https://words-scrabble.herokuapp.com/api/info/'
      // let response = await fetch('https://words-scrabble.herokuapp.com/api/info/' + props.word)

      let response = await fetch(url + props.word);
      let data = await response.text(); // console.log("data=" + data)

      let jdata = JSON.parse(data);
      setInfo(jdata);
      setLoaded(true);
    };

    apiCall();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wibody",
    children: loaded ?
    /*#__PURE__*/
    // <table>
    // <tr>
    //     <td>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [props.showInserts === "Y" ? displayInsertsRow(info.inserts) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), props.showSwaps === "Y" ? displaySwapsRow() : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), displayWordRow(), props.showDrops === "Y" ? displayDropsRow(info.drops) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          className: "divider",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            colSpan: props.word.length + props.word.length + 3,
            children: "\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 28
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }, this) //     </td>
    // </tr>
    // </table>
    :
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading ..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);

  function displayInsertsRow(inserts) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: inserts.map(i => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [i === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "insertCount",
          "data-toggle": "tooltip",
          title: i,
          children: i.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `inserts.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this);
  }

  function displaySwapsRow() {
    const swaps2 = [...info.swaps, ''];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: swaps2 === null || swaps2 === void 0 ? void 0 : swaps2.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [props.showInserts === 'N' || info.inserts[index] === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "insertCountSpacer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "balloonstring",
          children: "\u27BB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, this), s === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "swapCount",
          "data-toggle": "tooltip",
          title: s,
          children: s.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, this)]
      }, void 0, true))
    }, `swaps.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this);
  }

  function displayWordRow() {
    var _props$word;

    const key1 = props.word;
    const key2 = props.word + '2';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "displayWordRow",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        className: "insertCountSpacer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this), (_props$word = props.word) === null || _props$word === void 0 ? void 0 : _props$word.split("").map((l, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: info.valid === "Y" ? "letter" : "letterInvalidWord",
          children: l
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "facevalue",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
            children: letterValue(l)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this)]
      }, void 0, true)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: props.showAnagrams === "Y" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: info.anagrams.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "anagramCount",
            "data-toggle": "tooltip",
            title: info.anagrams,
            children: info.anagrams.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 17
          }, this)
        }, info.anagrams, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, this)
      }, key1, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: info.valid === 'Y' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsValid",
          children: "Valid word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "wordIsNotValid",
          children: "Not a recognized word"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)
      }, key2, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, this)]
    }, `word.${props.word}`, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this);
  }

  function displayDropsRow(drops) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      className: "dropRow",
      children: drops.map(d => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, this), d === "Y" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
          className: "dropIndicator",
          "data-toggle": "tooltip",
          title: "You can drop this letter",
          children: "\u2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)]
      }, void 0, true))
    }, `drops.${props.word}`, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, this);
  }

  function letterValue(letter) {
    switch (letter) {
      case 'D':
        return 2;

      case 'G':
        return 2;

      case 'B':
        return 3;

      case 'C':
        return 3;

      case 'M':
        return 3;

      case 'P':
        return 3;

      case 'F':
        return 4;

      case 'H':
        return 4;

      case 'V':
        return 4;

      case 'W':
        return 4;

      case 'Y':
        return 4;

      case 'K':
        return 5;

      case 'J':
        return 8;

      case 'X':
        return 8;

      case 'Q':
        return 10;

      case 'Z':
        return 10;
    }

    return 1;
  }
}

_s(Showinfo, "ePQZhHBb6If+/U6XHS5UTnWfhHM=");

_c = Showinfo;

var _c;

$RefreshReg$(_c, "Showinfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/wm/mastermind.js":
/*!********************************!*\
  !*** ./pages/wm/mastermind.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wi_showinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wi/showinfo */ "./pages/wi/showinfo.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\MyCode\\TR\\trcode\\trapp\\pages\\wm\\mastermind.js",
    _s = $RefreshSig$();





function handler(req, res) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

function Game() {
  _s();

  const {
    0: setSolveCounts,
    1: setSetSolveCounts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // how many guesses to solve each set

  const {
    0: setGuessCount,
    1: setSetGuessCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // total guess count for the 2-8 letter set

  const {
    0: secretWord,
    1: setSecretWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: secretDisplay,
    1: setSecretDisplay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: guess,
    1: setGuess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: guesses,
    1: setGuesses
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: solved,
    1: setSolved
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const displayGuesses = showGuessesTable();
  const promptForGuess = showGuessPrompt();
  const promptForPlayAgain = showPlayAgainPrompt();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Mastermind",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-11 wmtitle",
          children: ["Word Mastermind", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "material-icons",
            children: "psychology"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-1 wmhomelink",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "../../",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "material-icons",
                "data-toggle": "tooltip",
                title: "Home",
                children: "home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 32
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-11",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "wmp",
            children: "Cycle through 2-8 letter words per set."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this word: ", guesses.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3 AlignLeft",
                  children: ["Guesses this set: ", setGuessCount]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, this), setSolveCounts.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "AlignLeft",
                  children: "No completed sets yet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 41
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "AlignLeft",
                  children: ["Guesses for completed sets: ", setSolveCounts.map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: [num, " "]
                  }, num.toString(), true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 122
                  }, this))]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "Outertable",
                children: [secretWord === '' ? pickRandomWord() : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: "wmh3",
                  children: ["Secret Word: ", solved ? secretWord : secretDisplay]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this), secretWord === '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  className: "wmh1",
                  children: "Loading ..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, this) : solved ? promptForPlayAgain : promptForGuess, solved ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 41
                }, this) : guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "wmp",
                  children: "Start guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "wmp",
                  children: "Keep guessing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_device_detect__WEBPACK_IMPORTED_MODULE_4__.BrowserView, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-lg-12",
                children: guesses.map((g, gi) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wi_showinfo__WEBPACK_IMPORTED_MODULE_3__.default, {
                  word: g,
                  showInserts: "N",
                  showSwaps: "Y",
                  showAnagrams: "Y",
                  showDrops: "N"
                }, `${gi}.${g}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 41
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "Outertable",
            children: guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "No guesses yet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }, this) : displayGuesses
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);

  function showPlayAgainPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "wmh2",
        children: ["Solved in ", guesses.length, " moves!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "wmbutton",
        onClick: function () {
          pickRandomWord();
          setGuess('');
          setGuesses([]);
          setSolved(false);
        },
        children: secretWord.length === 8 ? "Start Another Set!" : "Start Next Word"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 16
    }, this);
  }

  function showGuessPrompt() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form-group",
      children: [guesses.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "wmlabel",
        children: "First guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "wmlabel",
        children: "Next guess:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "form-control",
        name: "guess",
        value: guess,
        onChange: e => {
          const guessword = e.target.value.toUpperCase().replace(/\W/g, '');

          if (guessword.length === secretWord.length) {
            const newSetGuessCount = setGuessCount + 1;
            setSetGuessCount(newSetGuessCount);
            setGuesses([guessword, ...guesses]);
            setGuess('');

            if (guessword === secretWord) {
              setSolved(true);

              if (secretWord.length === 8) {
                setSetSolveCounts([...setSolveCounts, newSetGuessCount]);
              }
            }
          } else {
            setGuess(guessword);
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 16
    }, this);
  }

  function showGuessesTable() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
      className: "Guesstable",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Guess"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Correct Letter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
            className: "wmth",
            children: "Correct Position"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: guesses.map(g => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd",
            children: g
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectLetterCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            className: "wmtd AlignCenter",
            children: calcCorrectPositionCount(g)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 16
    }, this);
  }

  function pickRandomWord() {
    const newlen = secretWord ? secretWord.length < 2 ? 2 : secretWord.length > 7 ? 2 : secretWord.length + 1 : 2;

    if (newlen === 2 && setGuessCount !== 0) {
      setSetGuessCount(0);
    }

    const baseurl =  true ? 'http://localhost:3000/api/words?random=' : 0;
    const url = baseurl + newlen.toString();
    fetch(url).then(res => res.text()).then(text => {
      console.log(text);
      setSecretWord(text.toUpperCase());
      setSecretDisplay(text.split("").map(element => "*"));
    });
  }

  function calcCorrectLetterCount(guessletters) {
    let n = 0;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let letter of alphabet) {
      let x = secretWord.split(letter).length - 1;
      let y = guessletters.split(letter).length - 1;
      n = n + (x < y ? x : y);
    }

    return n;
  }

  function calcCorrectPositionCount(guessletters) {
    let n = 0;

    for (var i = 0; i < secretWord.length; ++i) {
      n = n + (secretWord[i] === guessletters[i] ? 1 : 0);
    }

    return n;
  }
}

_s(Game, "NabVkXGlhLxVM+JyoD8/3W2c5qA=");

_c = Game;

var _c;

$RefreshReg$(_c, "Game");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwm%2Fmastermind&absolutePagePath=C%3A%5CMyCode%5CTR%5Ctrcode%5Ctrapp%5Cpages%5Cwm%5Cmastermind.js!":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwm%2Fmastermind&absolutePagePath=C%3A%5CMyCode%5CTR%5Ctrcode%5Ctrapp%5Cpages%5Cwm%5Cmastermind.js! ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/wm/mastermind",
      function () {
        return __webpack_require__(/*! ./pages/wm/mastermind.js */ "./pages/wm/mastermind.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-device-detect/main.js":
/*!**************************************************!*\
  !*** ./node_modules/react-device-detect/main.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var UA = new UAParser();
var browser = UA.getBrowser();
var cpu = UA.getCPU();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};
var BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: 'IE',
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium",
  MIUI: "MIUI Browser"
};
var OS_TYPES = {
  IOS: 'iOS',
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: 'Windows',
  MAC_OS: 'Mac OS'
};
var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};
var checkType = function checkType(type) {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return {
        isMobile: true
      };

    case DEVICE_TYPES.TABLET:
      return {
        isTablet: true
      };

    case DEVICE_TYPES.SMART_TV:
      return {
        isSmartTV: true
      };

    case DEVICE_TYPES.CONSOLE:
      return {
        isConsole: true
      };

    case DEVICE_TYPES.WEARABLE:
      return {
        isWearable: true
      };

    case DEVICE_TYPES.BROWSER:
      return {
        isBrowser: true
      };

    default:
      return initialData;
  }
};
var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
}

var isMobileType = function isMobileType() {
  return device.type === DEVICE_TYPES.MOBILE;
};

var isTabletType = function isTabletType() {
  return device.type === DEVICE_TYPES.TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case DEVICE_TYPES.MOBILE:
    case DEVICE_TYPES.TABLET:
      return true;

    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === DEVICE_TYPES.SMART_TV;
};

var isBrowserType = function isBrowserType() {
  return device.type === DEVICE_TYPES.BROWSER;
};

var isWearableType = function isWearableType() {
  return device.type === DEVICE_TYPES.WEARABLE;
};

var isConsoleType = function isConsoleType() {
  return device.type === DEVICE_TYPES.CONSOLE;
};

var isAndroidType = function isAndroidType() {
  return os.name === OS_TYPES.ANDROID;
};

var isWindowsType = function isWindowsType() {
  return os.name === OS_TYPES.WINDOWS;
};

var isMacOsType = function isMacOsType() {
  return os.name === OS_TYPES.MAC_OS;
};

var isWinPhoneType = function isWinPhoneType() {
  return os.name === OS_TYPES.WINDOWS_PHONE;
};

var isIOSType = function isIOSType() {
  return os.name === OS_TYPES.IOS;
};

var isChromeType = function isChromeType() {
  return browser.name === BROWSER_TYPES.CHROME;
};

var isFirefoxType = function isFirefoxType() {
  return browser.name === BROWSER_TYPES.FIREFOX;
};

var isChromiumType = function isChromiumType() {
  return browser.name === BROWSER_TYPES.CHROMIUM;
};

var isEdgeType = function isEdgeType() {
  return browser.name === BROWSER_TYPES.EDGE;
};

var isYandexType = function isYandexType() {
  return browser.name === BROWSER_TYPES.YANDEX;
};

var isSafariType = function isSafariType() {
  return browser.name === BROWSER_TYPES.SAFARI || browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === BROWSER_TYPES.MOBILE_SAFARI;
};

var isOperaType = function isOperaType() {
  return browser.name === BROWSER_TYPES.OPERA;
};

var isIEType = function isIEType() {
  return browser.name === BROWSER_TYPES.INTERNET_EXPLORER || browser.name === BROWSER_TYPES.IE;
};

var isMIUIType = function isMIUIType() {
  return browser.name === BROWSER_TYPES.MIUI;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};

var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};

var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return setDefaults(browser.version);
};

var getBrowserVersion = function getBrowserVersion() {
  return setDefaults(browser.major);
};

var getOsVersion = function getOsVersion() {
  return setDefaults(os.version);
};

var getOsName = function getOsName() {
  return setDefaults(os.name);
};

var getBrowserName = function getBrowserName() {
  return setDefaults(browser.name);
};

var getMobileVendor = function getMobileVendor() {
  return setDefaults(device.vendor);
};

var getMobileModel = function getMobileModel() {
  return setDefaults(device.model);
};

var getEngineName = function getEngineName() {
  return setDefaults(engine.name);
};

var getEngineVersion = function getEngineVersion() {
  return setDefaults(engine.version);
};

var getUseragent = function getUseragent() {
  return setDefaults(ua);
};

var getDeviceType = function getDeviceType() {
  return setDefaults(device.type, 'browser');
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();
var isMIUI = isMIUIType();

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style;
  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style;
  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style;
  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style;
  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style;
  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style;
  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style;
  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style;
  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style;
  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style;
  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style;
  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition;
  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", {
    className: viewClassName,
    style: style
  }, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.isEventListenerAdded = false;
        _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
        _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
        _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
        _this.state = {
          isLandscape: false,
          isPortrait: false
        };
        return _this;
      }

      _createClass(_class, [{
        key: "handleOrientationChange",
        value: function handleOrientationChange() {
          if (!this.isEventListenerAdded) {
            this.isEventListenerAdded = true;
          }

          var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
          this.setState({
            isPortrait: orientation === 0,
            isLandscape: orientation === 90
          });
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange() {
          this.handleOrientationChange();
        }
      }, {
        key: "onPageLoad",
        value: function onPageLoad() {
          this.handleOrientationChange();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
            if (!this.isEventListenerAdded) {
              this.handleOrientationChange();
              window.addEventListener("load", this.onPageLoad, false);
            } else {
              window.removeEventListener("load", this.onPageLoad, false);
            }

            window.addEventListener("resize", this.onOrientationChange, false);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.onOrientationChange, false);
        }
      }, {
        key: "render",
        value: function render() {
          return React__default.createElement(WrappedComponent, _extends({}, this.props, {
            isLandscape: this.state.isLandscape,
            isPortrait: this.state.isPortrait
          }));
        }
      }]);

      return _class;
    }(React__default.Component)
  );
}

exports.AndroidView = AndroidView;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.28",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var util={extend:function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},has:function(str1,str2){return typeof str1===STR_TYPE?str2.toLowerCase().indexOf(str1.toLowerCase())!==-1:false},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str,len){str=str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/\s]+([\w\.]+)/i],[VERSION,[NAME,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[VERSION,[NAME,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure Browser"],VERSION],[/focus\/([\w\.]+)/i],[VERSION,[NAME,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[VERSION,[NAME,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[NAME,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Browser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[NAME],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[NAME,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+)\s.*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,"Chrome WebView"],VERSION],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,"Samsung"],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\s\w]*);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[MODEL,[VENDOR,"Huawei"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/droid.+;\s(pixel\sc)[\s)]/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,"Sony"],[TYPE,TABLET]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[MODEL,"Fire Phone"],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((playbook);[\w\s\),;-]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[MODEL,[VENDOR,"ASUS"],[TYPE,TABLET]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[MODEL,[VENDOR,"ASUS"],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(surface\sduo)\s/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/\s(u304aa)\sbuild/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/[;\/]\s?(rct\w+)\sbuild/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/;\s(nx\d{3}j)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/[;\/]\s?(zur\d{3})\sbuild/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/;\s(ph-1)\s/i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/[;\/]\s?tu_(1491)\sbuild/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w\s]+)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint)\s(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,TABLET]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[345portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[VENDOR,"LG"],[TYPE,SMARTTV]],[/(apple)\s?tv/i],[VENDOR,[MODEL,"Apple TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"],[TYPE,SMARTTV]],[/droid.+aft([\w])(\sbuild\/|\))/i],[MODEL,[VENDOR,"Amazon"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[TYPE,SMARTTV]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[MODEL,[VENDOR,"Zebra"],[TYPE,WEARABLE]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]],[/(phone)/i],[[TYPE,MOBILE]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[NAME,VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua==="object"){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!=="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={name:undefined,version:undefined};mapper.rgx.call(_browser,_ua,_rgxmap.browser);_browser.major=util.major(_browser.version);return _browser};this.getCPU=function(){var _cpu={architecture:undefined};mapper.rgx.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={name:undefined,version:undefined};mapper.rgx.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={name:undefined,version:undefined};mapper.rgx.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?util.trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if("object"!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}}var $=typeof window!=="undefined"&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fwm%2Fmastermind&absolutePagePath=C%3A%5CMyCode%5CTR%5Ctrcode%5Ctrapp%5Cpages%5Cwm%5Cmastermind.js!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dpL3Nob3dpbmZvLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy93bS9tYXN0ZXJtaW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZGV2aWNlLWRldGVjdC9tYWluLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91YS1wYXJzZXItanMvZGlzdC91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovL19OX0UvaWdub3JlZHxDOlxcTXlDb2RlXFxUUlxcdHJjb2RlXFx0cmFwcFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiZXh0IiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiU2hvd2luZm8iLCJpbmZvIiwic2V0SW5mbyIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlRWZmZWN0IiwiYXBpQ2FsbCIsInJlc3BvbnNlIiwid29yZCIsImpkYXRhIiwiSlNPTiIsInBhcnNlIiwic2hvd0luc2VydHMiLCJkaXNwbGF5SW5zZXJ0c1JvdyIsImluc2VydHMiLCJzaG93U3dhcHMiLCJkaXNwbGF5U3dhcHNSb3ciLCJkaXNwbGF5V29yZFJvdyIsInNob3dEcm9wcyIsImRpc3BsYXlEcm9wc1JvdyIsImRyb3BzIiwibGVuZ3RoIiwiaSIsInN3YXBzMiIsInN3YXBzIiwicyIsImluZGV4Iiwia2V5MSIsImtleTIiLCJzcGxpdCIsImwiLCJ2YWxpZCIsImxldHRlclZhbHVlIiwic2hvd0FuYWdyYW1zIiwiYW5hZ3JhbXMiLCJkIiwibGV0dGVyIiwicmVxIiwiR2FtZSIsInNldFNvbHZlQ291bnRzIiwic2V0U2V0U29sdmVDb3VudHMiLCJzZXRHdWVzc0NvdW50Iiwic2V0U2V0R3Vlc3NDb3VudCIsInNlY3JldFdvcmQiLCJzZXRTZWNyZXRXb3JkIiwic2VjcmV0RGlzcGxheSIsInNldFNlY3JldERpc3BsYXkiLCJndWVzcyIsInNldEd1ZXNzIiwiZ3Vlc3NlcyIsInNldEd1ZXNzZXMiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJkaXNwbGF5R3Vlc3NlcyIsInNob3dHdWVzc2VzVGFibGUiLCJwcm9tcHRGb3JHdWVzcyIsInNob3dHdWVzc1Byb21wdCIsInByb21wdEZvclBsYXlBZ2FpbiIsInNob3dQbGF5QWdhaW5Qcm9tcHQiLCJudW0iLCJ0b1N0cmluZyIsInBpY2tSYW5kb21Xb3JkIiwiZ2kiLCJndWVzc3dvcmQiLCJ0b1VwcGVyQ2FzZSIsIm5ld1NldEd1ZXNzQ291bnQiLCJjYWxjQ29ycmVjdExldHRlckNvdW50IiwiY2FsY0NvcnJlY3RQb3NpdGlvbkNvdW50IiwibmV3bGVuIiwiYmFzZXVybCIsInRoZW4iLCJsb2ciLCJlbGVtZW50IiwiZ3Vlc3NsZXR0ZXJzIiwibiIsImFscGhhYmV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBU0E7O0FBQ0E7O0FBdUJBLE1BQU1BLFVBQTJDLEdBQWpEOztBQUVBLDZDQUtRO0FBQ04sTUFBSSxVQUFpQyxDQUFyQyxRQUE4QztBQUM5QyxNQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCLE9BRmpCLENBR047QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLFFBQU0sQ0FBTkEsa0NBQTBDQyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVIO0FBTEREO0FBTUEsUUFBTUUsU0FBUyxHQUNiQyxPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFkLFdBQVhBLGNBQ0lBLE9BQU8sQ0FEWEEsU0FFSUgsTUFBTSxJQUFJQSxNQUFNLENBSHRCLE9BYk0sQ0FrQk47O0FBQ0FELFlBQVUsQ0FBQ0ssSUFBSSxHQUFKQSxZQUFtQkYsU0FBUyxHQUFHLE1BQUgsWUFBdkNILEVBQVdLLENBQUQsQ0FBVkw7QUFHRjs7QUFBQSxnQ0FBMkQ7QUFDekQsUUFBTTtBQUFBO0FBQUEsTUFBYU0sS0FBSyxDQUF4QjtBQUNBLFNBQ0dDLE1BQU0sSUFBSUEsTUFBTSxLQUFqQixPQUFDQSxJQUNERCxLQUFLLENB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O0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7O0FBRUE7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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7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QixhQUFhLDJCQUEyQixnQ0FBZ0MsR0FBRyxRQUFhLCtCQUErQixnQ0FBZ0MsZ0JBQWdCLFVBQVUsS0FBSyxHQUFHLElBQXNDLEVBQUUsbUNBQU8sV0FBVyxnQkFBZ0I7QUFBQSxrR0FBQyxDQUFDLEtBQUssRUFBeUQsQ0FBQyxpRUFBaUUsYUFBYSx3QkFBd0Isd0JBQXdCLG9CQUFvQix1QkFBdUIsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLDJCQUEyQix3Qzs7Ozs7Ozs7OztBQ1Joem1CLGUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy93bS9tYXN0ZXJtaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUm91dGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TmV4dFJvdXRlcj4obnVsbCBhcyBhbnkpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnUm91dGVyQ29udGV4dCdcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIFRyYW5zbGF0ZXMgYSBsb2dpY2FsIHJvdXRlIGludG8gaXRzIHBhZ2VzIGFzc2V0IHBhdGggKHJlbGF0aXZlIGZyb20gYSBjb21tb24gcHJlZml4KVxuLy8gXCJhc3NldCBwYXRoXCIgYmVpbmcgaXRzIGphdmFzY3JpcHQgZmlsZSwgZGF0YSBmaWxlLCBwcmVyZW5kZXJlZCBodG1sLC4uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKFxuICByb3V0ZTogc3RyaW5nLFxuICBleHQ6IHN0cmluZyA9ICcnXG4pOiBzdHJpbmcge1xuICBjb25zdCBwYXRoID1cbiAgICByb3V0ZSA9PT0gJy8nXG4gICAgICA/ICcvaW5kZXgnXG4gICAgICA6IC9eXFwvaW5kZXgoXFwvfCQpLy50ZXN0KHJvdXRlKVxuICAgICAgPyBgL2luZGV4JHtyb3V0ZX1gXG4gICAgICA6IGAke3JvdXRlfWBcbiAgcmV0dXJuIHBhdGggKyBleHRcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dpbmZvKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJOT0RFX0VOVj1cIiArIHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XHJcbiAgICAgICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS93b3Jkcz93b3JkPScgXHJcbiAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAnaHR0cHM6Ly90aWxlcnVubmVyLmhlcm9rdWFwcC5jb20vYXBpL3dvcmRzP3dvcmQ9J1xyXG4gICAgICAgICAgICAvLyAgJ2h0dHBzOi8vd29yZHMtc2NyYWJibGUuaGVyb2t1YXBwLmNvbS9hcGkvaW5mby8nXHJcbiAgICAgICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmRzLXNjcmFiYmxlLmhlcm9rdWFwcC5jb20vYXBpL2luZm8vJyArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArIHByb3BzLndvcmQpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YT1cIiArIGRhdGEpXHJcbiAgICAgICAgICAgIGxldCBqZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcclxuICAgICAgICAgICAgc2V0SW5mbyhqZGF0YSlcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwaUNhbGwoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lib2R5XCI+XHJcbiAgICAgICAgICAgIHtsb2FkZWQgP1xyXG4gICAgICAgICAgICAgICAgLy8gPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgLy8gPHRyPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+PHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0luc2VydHMgPT09IFwiWVwiID8gZGlzcGxheUluc2VydHNSb3coaW5mby5pbnNlcnRzKSA6IDw+PC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd1N3YXBzID09PSBcIllcIiA/IGRpc3BsYXlTd2Fwc1JvdygpIDogPD48Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5V29yZFJvdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Ryb3BzID09PSBcIllcIiA/IGRpc3BsYXlEcm9wc1JvdyhpbmZvLmRyb3BzKSA6IDw+PC8+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48dGQgY29sU3Bhbj17cHJvcHMud29yZC5sZW5ndGggKyBwcm9wcy53b3JkLmxlbmd0aCArIDN9PiZuYnNwOzwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIC8vIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAvLyA8L3RhYmxlPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nIC4uLjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5zZXJ0c1JvdyhpbnNlcnRzKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtgaW5zZXJ0cy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIHtpbnNlcnRzLm1hcChpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2kgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImluc2VydENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2l9PntpLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVN3YXBzUm93KCkge1xyXG4gICAgICAgIGNvbnN0IHN3YXBzMiA9IFsuLi5pbmZvLnN3YXBzLCAnJ11cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Bzd2Fwcy4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIHtzd2FwczI/Lm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dJbnNlcnRzID09PSAnTicgfHwgaW5mby5pbnNlcnRzW2luZGV4XSA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaW5zZXJ0Q291bnRTcGFjZXJcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhbGxvb25zdHJpbmdcIj7inrs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7cyA9PT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic3dhcENvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e3N9PntzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlXb3JkUm93KCkge1xyXG4gICAgICAgIGNvbnN0IGtleTEgPSBwcm9wcy53b3JkO1xyXG4gICAgICAgIGNvbnN0IGtleTIgPSBwcm9wcy53b3JkICsgJzInO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImRpc3BsYXlXb3JkUm93XCIga2V5PXtgd29yZC4ke3Byb3BzLndvcmR9YH0+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbnNlcnRDb3VudFNwYWNlclwiPjwvdGQ+XHJcbiAgICAgICAgICAgIHtwcm9wcy53b3JkPy5zcGxpdChcIlwiKS5tYXAoKGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aW5mby52YWxpZCA9PT0gXCJZXCIgPyBcImxldHRlclwiIDogXCJsZXR0ZXJJbnZhbGlkV29yZFwifT57bH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZhY2V2YWx1ZVwiPjxzdWI+e2xldHRlclZhbHVlKGwpfTwvc3ViPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDx0ZCBrZXk9e2tleTF9PlxyXG4gICAgICAgICAgICB7cHJvcHMuc2hvd0FuYWdyYW1zID09PSBcIllcIiAmJlxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmZvLmFuYWdyYW1zfT5cclxuICAgICAgICAgICAgICAgIHtpbmZvLmFuYWdyYW1zLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5hZ3JhbUNvdW50XCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e2luZm8uYW5hZ3JhbXN9PntpbmZvLmFuYWdyYW1zLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGtleT17a2V5Mn0+XHJcbiAgICAgICAgICAgICAgICB7aW5mby52YWxpZCA9PT0gJ1knID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3b3JkSXNWYWxpZFwiPlZhbGlkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid29yZElzTm90VmFsaWRcIj5Ob3QgYSByZWNvZ25pemVkIHdvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlEcm9wc1Jvdyhkcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGtleT17YGRyb3BzLiR7cHJvcHMud29yZH1gfSBjbGFzc05hbWU9XCJkcm9wUm93XCI+XHJcbiAgICAgICAgICAgIHtkcm9wcy5tYXAoZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICB7ZCA9PT0gXCJZXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkcm9wSW5kaWNhdG9yXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJZb3UgY2FuIGRyb3AgdGhpcyBsZXR0ZXJcIj4mYnVsbDs8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsZXR0ZXJWYWx1ZShsZXR0ZXIpIHtcclxuICAgICAgICBzd2l0Y2gobGV0dGVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDIpO1xyXG4gICAgICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigyKTtcclxuICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDMpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigzKTtcclxuICAgICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMyk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDQpO1xyXG4gICAgICAgICAgICBjYXNlICdZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig0KTtcclxuICAgICAgICAgICAgY2FzZSAnSyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oNSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0onOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKDgpO1xyXG4gICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgIHJldHVybig4KTtcclxuICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oMTApO1xyXG4gICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgIHJldHVybigxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybigxKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBTaG93aW5mbyBmcm9tICcuLi93aS9zaG93aW5mbydcclxuaW1wb3J0IHtCcm93c2VyVmlld30gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpICB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHYW1lIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgY29uc3QgW3NldFNvbHZlQ291bnRzLCBzZXRTZXRTb2x2ZUNvdW50c10gPSB1c2VTdGF0ZShbXSkgLy8gaG93IG1hbnkgZ3Vlc3NlcyB0byBzb2x2ZSBlYWNoIHNldFxyXG4gICAgY29uc3QgW3NldEd1ZXNzQ291bnQsIHNldFNldEd1ZXNzQ291bnRdID0gdXNlU3RhdGUoMCkgLy8gdG90YWwgZ3Vlc3MgY291bnQgZm9yIHRoZSAyLTggbGV0dGVyIHNldFxyXG4gICAgY29uc3QgW3NlY3JldFdvcmQsIHNldFNlY3JldFdvcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2VjcmV0RGlzcGxheSwgc2V0U2VjcmV0RGlzcGxheV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtndWVzcywgc2V0R3Vlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZ3Vlc3Nlcywgc2V0R3Vlc3Nlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzb2x2ZWQsIHNldFNvbHZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRpc3BsYXlHdWVzc2VzID0gc2hvd0d1ZXNzZXNUYWJsZSgpO1xyXG4gICAgY29uc3QgcHJvbXB0Rm9yR3Vlc3MgPSBzaG93R3Vlc3NQcm9tcHQoKTtcclxuICAgIGNvbnN0IHByb21wdEZvclBsYXlBZ2FpbiA9IHNob3dQbGF5QWdhaW5Qcm9tcHQoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXN0ZXJtaW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIHdtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29yZCBNYXN0ZXJtaW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cHN5Y2hvbG9neTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xIHdtaG9tZWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuLi8uLi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiSG9tZVwiPmhvbWU8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid21wXCI+Q3ljbGUgdGhyb3VnaCAyLTggbGV0dGVyIHdvcmRzIHBlciBzZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndtaDMgQWxpZ25MZWZ0XCI+R3Vlc3NlcyB0aGlzIHdvcmQ6IHtndWVzc2VzLmxlbmd0aH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid21oMyBBbGlnbkxlZnRcIj5HdWVzc2VzIHRoaXMgc2V0OiB7c2V0R3Vlc3NDb3VudH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0U29sdmVDb3VudHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkFsaWduTGVmdFwiPk5vIGNvbXBsZXRlZCBzZXRzIHlldDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiQWxpZ25MZWZ0XCI+R3Vlc3NlcyBmb3IgY29tcGxldGVkIHNldHM6IHtzZXRTb2x2ZUNvdW50cy5tYXAobnVtID0+ICg8c3BhbiBrZXk9e251bS50b1N0cmluZygpfT57bnVtfSA8L3NwYW4+KSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID8gcGlja1JhbmRvbVdvcmQoKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid21oM1wiPlNlY3JldCBXb3JkOiB7c29sdmVkID8gc2VjcmV0V29yZCA6IHNlY3JldERpc3BsYXl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3JldFdvcmQgPT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3bWgxXCI+TG9hZGluZyAuLi48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2x2ZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEZvclBsYXlBZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEZvckd1ZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvbHZlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzZXMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3bXBcIj5TdGFydCBndWVzc2luZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid21wXCI+S2VlcCBndWVzc2luZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLm1hcCgoZyxnaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3dpbmZvIGtleT17YCR7Z2l9LiR7Z31gfSB3b3JkPXtnfSBzaG93SW5zZXJ0cz1cIk5cIiBzaG93U3dhcHM9XCJZXCIgc2hvd0FuYWdyYW1zPVwiWVwiIHNob3dEcm9wcz1cIk5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk91dGVydGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gZ3Vlc3NlcyB5ZXQ8L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5R3Vlc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1BsYXlBZ2FpblByb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndtaDJcIj5Tb2x2ZWQgaW4ge2d1ZXNzZXMubGVuZ3RofSBtb3ZlcyE8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndtYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGlja1JhbmRvbVdvcmQoKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEd1ZXNzZXMoW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0U29sdmVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNyZXRXb3JkLmxlbmd0aCA9PT0gOCA/IFwiU3RhcnQgQW5vdGhlciBTZXQhXCIgOiBcIlN0YXJ0IE5leHQgV29yZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHdWVzc1Byb21wdCgpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIHtndWVzc2VzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid21sYWJlbFwiPkZpcnN0IGd1ZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid21sYWJlbFwiPk5leHQgZ3Vlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBndWVzc3dvcmQgPSBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoIC9cXFcvZyAsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkLmxlbmd0aCA9PT0gc2VjcmV0V29yZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2V0R3Vlc3NDb3VudCA9IHNldEd1ZXNzQ291bnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXRHdWVzc0NvdW50KG5ld1NldEd1ZXNzQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzc2VzKFtndWVzc3dvcmQsIC4uLmd1ZXNzZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3Vlc3MoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3Vlc3N3b3JkID09PSBzZWNyZXRXb3JkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb2x2ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VjcmV0V29yZC5sZW5ndGggPT09IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXRTb2x2ZUNvdW50cyhbLi4uc2V0U29sdmVDb3VudHMsIG5ld1NldEd1ZXNzQ291bnRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXNzKGd1ZXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IH0gLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0d1ZXNzZXNUYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cIkd1ZXNzdGFibGVcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+R3Vlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+Q29ycmVjdCBMZXR0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3bXRoXCI+Q29ycmVjdCBQb3NpdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7Z3Vlc3Nlcy5tYXAoKGcpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3bXRkXCI+e2d9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndtdGQgQWxpZ25DZW50ZXJcIj57Y2FsY0NvcnJlY3RMZXR0ZXJDb3VudChnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid210ZCBBbGlnbkNlbnRlclwiPntjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tV29yZCgpIHtcclxuICAgICAgICBjb25zdCBuZXdsZW4gPSBzZWNyZXRXb3JkID8gc2VjcmV0V29yZC5sZW5ndGggPCAyID8gMiA6IHNlY3JldFdvcmQubGVuZ3RoID4gNyA/IDIgOiBzZWNyZXRXb3JkLmxlbmd0aCArIDEgOiAyO1xyXG4gICAgICAgIGlmIChuZXdsZW4gPT09IDIgJiYgc2V0R3Vlc3NDb3VudCAhPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFNldEd1ZXNzQ291bnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2V1cmwgPSAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/XHJcbiAgICAgICAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3dvcmRzP3JhbmRvbT0nIFxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vdGlsZXJ1bm5lci5oZXJva3VhcHAuY29tL2FwaS93b3Jkcz9yYW5kb209JztcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNldXJsICsgbmV3bGVuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMudGV4dCgpKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0V29yZCh0ZXh0LnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICBzZXRTZWNyZXREaXNwbGF5KHRleHQuc3BsaXQoXCJcIikubWFwKGVsZW1lbnQ9PihcIipcIikpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNDb3JyZWN0TGV0dGVyQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXHJcbiAgICAgICAgZm9yKGxldCBsZXR0ZXIgb2YgYWxwaGFiZXQpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBzZWNyZXRXb3JkLnNwbGl0KGxldHRlcikubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBsZXQgeSA9IGd1ZXNzbGV0dGVycy5zcGxpdChsZXR0ZXIpLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgbiA9IG4gKyAoeCA8IHkgPyB4IDogeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQ29ycmVjdFBvc2l0aW9uQ291bnQoZ3Vlc3NsZXR0ZXJzKSB7XHJcbiAgICAgICAgbGV0IG4gPSAwXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2VjcmV0V29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBuID0gbiArIChzZWNyZXRXb3JkW2ldID09PSBndWVzc2xldHRlcnNbaV0gPyAxIDogMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5cclxuICAgIH1cclxufSIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvd20vbWFzdGVybWluZFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXE15Q29kZVxcXFxUUlxcXFx0cmNvZGVcXFxcdHJhcHBcXFxccGFnZXNcXFxcd21cXFxcbWFzdGVybWluZC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG5cbnZhciBVQVBhcnNlciA9IHJlcXVpcmUoJ3VhLXBhcnNlci1qcy9kaXN0L3VhLXBhcnNlci5taW4nKTtcblxudmFyIFVBID0gbmV3IFVBUGFyc2VyKCk7XG52YXIgYnJvd3NlciA9IFVBLmdldEJyb3dzZXIoKTtcbnZhciBjcHUgPSBVQS5nZXRDUFUoKTtcbnZhciBkZXZpY2UgPSBVQS5nZXREZXZpY2UoKTtcbnZhciBlbmdpbmUgPSBVQS5nZXRFbmdpbmUoKTtcbnZhciBvcyA9IFVBLmdldE9TKCk7XG52YXIgdWEgPSBVQS5nZXRVQSgpO1xuXG52YXIgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBzZXREZWZhdWx0cyhwKSB7XG4gIHZhciBkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnbm9uZSc7XG4gIHJldHVybiBwID8gcCA6IGQ7XG59O1xudmFyIGdldE5hdmlnYXRvckluc3RhbmNlID0gZnVuY3Rpb24gZ2V0TmF2aWdhdG9ySW5zdGFuY2UoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yIHx8IG5hdmlnYXRvcikge1xuICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IgfHwgbmF2aWdhdG9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgaXNJT1MxM0NoZWNrID0gZnVuY3Rpb24gaXNJT1MxM0NoZWNrKHR5cGUpIHtcbiAgdmFyIG5hdiA9IGdldE5hdmlnYXRvckluc3RhbmNlKCk7XG4gIHJldHVybiBuYXYgJiYgbmF2LnBsYXRmb3JtICYmIChuYXYucGxhdGZvcm0uaW5kZXhPZih0eXBlKSAhPT0gLTEgfHwgbmF2LnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdi5tYXhUb3VjaFBvaW50cyA+IDEgJiYgIXdpbmRvdy5NU1N0cmVhbSk7XG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG52YXIgREVWSUNFX1RZUEVTID0ge1xuICBNT0JJTEU6ICdtb2JpbGUnLFxuICBUQUJMRVQ6ICd0YWJsZXQnLFxuICBTTUFSVF9UVjogJ3NtYXJ0dHYnLFxuICBDT05TT0xFOiAnY29uc29sZScsXG4gIFdFQVJBQkxFOiAnd2VhcmFibGUnLFxuICBCUk9XU0VSOiB1bmRlZmluZWRcbn07XG52YXIgQlJPV1NFUl9UWVBFUyA9IHtcbiAgQ0hST01FOiAnQ2hyb21lJyxcbiAgRklSRUZPWDogXCJGaXJlZm94XCIsXG4gIE9QRVJBOiBcIk9wZXJhXCIsXG4gIFlBTkRFWDogXCJZYW5kZXhcIixcbiAgU0FGQVJJOiBcIlNhZmFyaVwiLFxuICBJTlRFUk5FVF9FWFBMT1JFUjogXCJJbnRlcm5ldCBFeHBsb3JlclwiLFxuICBFREdFOiBcIkVkZ2VcIixcbiAgQ0hST01JVU06IFwiQ2hyb21pdW1cIixcbiAgSUU6ICdJRScsXG4gIE1PQklMRV9TQUZBUkk6IFwiTW9iaWxlIFNhZmFyaVwiLFxuICBFREdFX0NIUk9NSVVNOiBcIkVkZ2UgQ2hyb21pdW1cIixcbiAgTUlVSTogXCJNSVVJIEJyb3dzZXJcIlxufTtcbnZhciBPU19UWVBFUyA9IHtcbiAgSU9TOiAnaU9TJyxcbiAgQU5EUk9JRDogXCJBbmRyb2lkXCIsXG4gIFdJTkRPV1NfUEhPTkU6IFwiV2luZG93cyBQaG9uZVwiLFxuICBXSU5ET1dTOiAnV2luZG93cycsXG4gIE1BQ19PUzogJ01hYyBPUydcbn07XG52YXIgaW5pdGlhbERhdGEgPSB7XG4gIGlzTW9iaWxlOiBmYWxzZSxcbiAgaXNUYWJsZXQ6IGZhbHNlLFxuICBpc0Jyb3dzZXI6IGZhbHNlLFxuICBpc1NtYXJ0VFY6IGZhbHNlLFxuICBpc0NvbnNvbGU6IGZhbHNlLFxuICBpc1dlYXJhYmxlOiBmYWxzZVxufTtcbnZhciBjaGVja1R5cGUgPSBmdW5jdGlvbiBjaGVja1R5cGUodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIERFVklDRV9UWVBFUy5NT0JJTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01vYmlsZTogdHJ1ZVxuICAgICAgfTtcblxuICAgIGNhc2UgREVWSUNFX1RZUEVTLlRBQkxFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVGFibGV0OiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBERVZJQ0VfVFlQRVMuU01BUlRfVFY6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NtYXJ0VFY6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERFVklDRV9UWVBFUy5DT05TT0xFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb25zb2xlOiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBERVZJQ0VfVFlQRVMuV0VBUkFCTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1dlYXJhYmxlOiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBERVZJQ0VfVFlQRVMuQlJPV1NFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQnJvd3NlcjogdHJ1ZVxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaW5pdGlhbERhdGE7XG4gIH1cbn07XG52YXIgYnJvUGF5bG9hZCA9IGZ1bmN0aW9uIGJyb1BheWxvYWQoaXNCcm93c2VyLCBicm93c2VyLCBlbmdpbmUsIG9zLCB1YSkge1xuICByZXR1cm4ge1xuICAgIGlzQnJvd3NlcjogaXNCcm93c2VyLFxuICAgIGJyb3dzZXJNYWpvclZlcnNpb246IHNldERlZmF1bHRzKGJyb3dzZXIubWFqb3IpLFxuICAgIGJyb3dzZXJGdWxsVmVyc2lvbjogc2V0RGVmYXVsdHMoYnJvd3Nlci52ZXJzaW9uKSxcbiAgICBicm93c2VyTmFtZTogc2V0RGVmYXVsdHMoYnJvd3Nlci5uYW1lKSxcbiAgICBlbmdpbmVOYW1lOiBzZXREZWZhdWx0cyhlbmdpbmUubmFtZSksXG4gICAgZW5naW5lVmVyc2lvbjogc2V0RGVmYXVsdHMoZW5naW5lLnZlcnNpb24pLFxuICAgIG9zTmFtZTogc2V0RGVmYXVsdHMob3MubmFtZSksXG4gICAgb3NWZXJzaW9uOiBzZXREZWZhdWx0cyhvcy52ZXJzaW9uKSxcbiAgICB1c2VyQWdlbnQ6IHNldERlZmF1bHRzKHVhKVxuICB9O1xufTtcbnZhciBtb2JpbGVQYXlsb2FkID0gZnVuY3Rpb24gbW9iaWxlUGF5bG9hZCh0eXBlLCBkZXZpY2UsIG9zLCB1YSkge1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoe30sIHR5cGUsIHtcbiAgICB2ZW5kb3I6IHNldERlZmF1bHRzKGRldmljZS52ZW5kb3IpLFxuICAgIG1vZGVsOiBzZXREZWZhdWx0cyhkZXZpY2UubW9kZWwpLFxuICAgIG9zOiBzZXREZWZhdWx0cyhvcy5uYW1lKSxcbiAgICBvc1ZlcnNpb246IHNldERlZmF1bHRzKG9zLnZlcnNpb24pLFxuICAgIHVhOiBzZXREZWZhdWx0cyh1YSlcbiAgfSk7XG59O1xudmFyIHN0dlBheWxvYWQgPSBmdW5jdGlvbiBzdHZQYXlsb2FkKGlzU21hcnRUViwgZW5naW5lLCBvcywgdWEpIHtcbiAgcmV0dXJuIHtcbiAgICBpc1NtYXJ0VFY6IGlzU21hcnRUVixcbiAgICBlbmdpbmVOYW1lOiBzZXREZWZhdWx0cyhlbmdpbmUubmFtZSksXG4gICAgZW5naW5lVmVyc2lvbjogc2V0RGVmYXVsdHMoZW5naW5lLnZlcnNpb24pLFxuICAgIG9zTmFtZTogc2V0RGVmYXVsdHMob3MubmFtZSksXG4gICAgb3NWZXJzaW9uOiBzZXREZWZhdWx0cyhvcy52ZXJzaW9uKSxcbiAgICB1c2VyQWdlbnQ6IHNldERlZmF1bHRzKHVhKVxuICB9O1xufTtcbnZhciBjb25zb2xlUGF5bG9hZCA9IGZ1bmN0aW9uIGNvbnNvbGVQYXlsb2FkKGlzQ29uc29sZSwgZW5naW5lLCBvcywgdWEpIHtcbiAgcmV0dXJuIHtcbiAgICBpc0NvbnNvbGU6IGlzQ29uc29sZSxcbiAgICBlbmdpbmVOYW1lOiBzZXREZWZhdWx0cyhlbmdpbmUubmFtZSksXG4gICAgZW5naW5lVmVyc2lvbjogc2V0RGVmYXVsdHMoZW5naW5lLnZlcnNpb24pLFxuICAgIG9zTmFtZTogc2V0RGVmYXVsdHMob3MubmFtZSksXG4gICAgb3NWZXJzaW9uOiBzZXREZWZhdWx0cyhvcy52ZXJzaW9uKSxcbiAgICB1c2VyQWdlbnQ6IHNldERlZmF1bHRzKHVhKVxuICB9O1xufTtcbnZhciB3ZWFyUGF5bG9hZCA9IGZ1bmN0aW9uIHdlYXJQYXlsb2FkKGlzV2VhcmFibGUsIGVuZ2luZSwgb3MsIHVhKSB7XG4gIHJldHVybiB7XG4gICAgaXNXZWFyYWJsZTogaXNXZWFyYWJsZSxcbiAgICBlbmdpbmVOYW1lOiBzZXREZWZhdWx0cyhlbmdpbmUubmFtZSksXG4gICAgZW5naW5lVmVyc2lvbjogc2V0RGVmYXVsdHMoZW5naW5lLnZlcnNpb24pLFxuICAgIG9zTmFtZTogc2V0RGVmYXVsdHMob3MubmFtZSksXG4gICAgb3NWZXJzaW9uOiBzZXREZWZhdWx0cyhvcy52ZXJzaW9uKSxcbiAgICB1c2VyQWdlbnQ6IHNldERlZmF1bHRzKHVhKVxuICB9O1xufTtcblxudmFyIHR5cGUgPSBjaGVja1R5cGUoZGV2aWNlLnR5cGUpO1xuXG5mdW5jdGlvbiBkZXZpY2VEZXRlY3QoKSB7XG4gIHZhciBpc0Jyb3dzZXIgPSB0eXBlLmlzQnJvd3NlcixcbiAgICAgIGlzTW9iaWxlID0gdHlwZS5pc01vYmlsZSxcbiAgICAgIGlzVGFibGV0ID0gdHlwZS5pc1RhYmxldCxcbiAgICAgIGlzU21hcnRUViA9IHR5cGUuaXNTbWFydFRWLFxuICAgICAgaXNDb25zb2xlID0gdHlwZS5pc0NvbnNvbGUsXG4gICAgICBpc1dlYXJhYmxlID0gdHlwZS5pc1dlYXJhYmxlO1xuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gYnJvUGF5bG9hZChpc0Jyb3dzZXIsIGJyb3dzZXIsIGVuZ2luZSwgb3MsIHVhKTtcbiAgfVxuXG4gIGlmIChpc1NtYXJ0VFYpIHtcbiAgICByZXR1cm4gc3R2UGF5bG9hZChpc1NtYXJ0VFYsIGVuZ2luZSwgb3MsIHVhKTtcbiAgfVxuXG4gIGlmIChpc0NvbnNvbGUpIHtcbiAgICByZXR1cm4gY29uc29sZVBheWxvYWQoaXNDb25zb2xlLCBlbmdpbmUsIG9zLCB1YSk7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICByZXR1cm4gbW9iaWxlUGF5bG9hZCh0eXBlLCBkZXZpY2UsIG9zLCB1YSk7XG4gIH1cblxuICBpZiAoaXNUYWJsZXQpIHtcbiAgICByZXR1cm4gbW9iaWxlUGF5bG9hZCh0eXBlLCBkZXZpY2UsIG9zLCB1YSk7XG4gIH1cblxuICBpZiAoaXNXZWFyYWJsZSkge1xuICAgIHJldHVybiB3ZWFyUGF5bG9hZChpc1dlYXJhYmxlLCBlbmdpbmUsIG9zLCB1YSk7XG4gIH1cbn1cblxudmFyIGlzTW9iaWxlVHlwZSA9IGZ1bmN0aW9uIGlzTW9iaWxlVHlwZSgpIHtcbiAgcmV0dXJuIGRldmljZS50eXBlID09PSBERVZJQ0VfVFlQRVMuTU9CSUxFO1xufTtcblxudmFyIGlzVGFibGV0VHlwZSA9IGZ1bmN0aW9uIGlzVGFibGV0VHlwZSgpIHtcbiAgcmV0dXJuIGRldmljZS50eXBlID09PSBERVZJQ0VfVFlQRVMuVEFCTEVUO1xufTtcblxudmFyIGlzTW9iaWxlQW5kVGFibGV0VHlwZSA9IGZ1bmN0aW9uIGlzTW9iaWxlQW5kVGFibGV0VHlwZSgpIHtcbiAgc3dpdGNoIChkZXZpY2UudHlwZSkge1xuICAgIGNhc2UgREVWSUNFX1RZUEVTLk1PQklMRTpcbiAgICBjYXNlIERFVklDRV9UWVBFUy5UQUJMRVQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBpc0VkZ2VDaHJvbWl1bVR5cGUgPSBmdW5jdGlvbiBpc0VkZ2VDaHJvbWl1bVR5cGUoKSB7XG4gIHJldHVybiB0eXBlb2YgdWEgPT09ICdzdHJpbmcnICYmIHVhLmluZGV4T2YoJ0VkZy8nKSAhPT0gLTE7XG59O1xuXG52YXIgaXNTbWFydFRWVHlwZSA9IGZ1bmN0aW9uIGlzU21hcnRUVlR5cGUoKSB7XG4gIHJldHVybiBkZXZpY2UudHlwZSA9PT0gREVWSUNFX1RZUEVTLlNNQVJUX1RWO1xufTtcblxudmFyIGlzQnJvd3NlclR5cGUgPSBmdW5jdGlvbiBpc0Jyb3dzZXJUeXBlKCkge1xuICByZXR1cm4gZGV2aWNlLnR5cGUgPT09IERFVklDRV9UWVBFUy5CUk9XU0VSO1xufTtcblxudmFyIGlzV2VhcmFibGVUeXBlID0gZnVuY3Rpb24gaXNXZWFyYWJsZVR5cGUoKSB7XG4gIHJldHVybiBkZXZpY2UudHlwZSA9PT0gREVWSUNFX1RZUEVTLldFQVJBQkxFO1xufTtcblxudmFyIGlzQ29uc29sZVR5cGUgPSBmdW5jdGlvbiBpc0NvbnNvbGVUeXBlKCkge1xuICByZXR1cm4gZGV2aWNlLnR5cGUgPT09IERFVklDRV9UWVBFUy5DT05TT0xFO1xufTtcblxudmFyIGlzQW5kcm9pZFR5cGUgPSBmdW5jdGlvbiBpc0FuZHJvaWRUeXBlKCkge1xuICByZXR1cm4gb3MubmFtZSA9PT0gT1NfVFlQRVMuQU5EUk9JRDtcbn07XG5cbnZhciBpc1dpbmRvd3NUeXBlID0gZnVuY3Rpb24gaXNXaW5kb3dzVHlwZSgpIHtcbiAgcmV0dXJuIG9zLm5hbWUgPT09IE9TX1RZUEVTLldJTkRPV1M7XG59O1xuXG52YXIgaXNNYWNPc1R5cGUgPSBmdW5jdGlvbiBpc01hY09zVHlwZSgpIHtcbiAgcmV0dXJuIG9zLm5hbWUgPT09IE9TX1RZUEVTLk1BQ19PUztcbn07XG5cbnZhciBpc1dpblBob25lVHlwZSA9IGZ1bmN0aW9uIGlzV2luUGhvbmVUeXBlKCkge1xuICByZXR1cm4gb3MubmFtZSA9PT0gT1NfVFlQRVMuV0lORE9XU19QSE9ORTtcbn07XG5cbnZhciBpc0lPU1R5cGUgPSBmdW5jdGlvbiBpc0lPU1R5cGUoKSB7XG4gIHJldHVybiBvcy5uYW1lID09PSBPU19UWVBFUy5JT1M7XG59O1xuXG52YXIgaXNDaHJvbWVUeXBlID0gZnVuY3Rpb24gaXNDaHJvbWVUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLkNIUk9NRTtcbn07XG5cbnZhciBpc0ZpcmVmb3hUeXBlID0gZnVuY3Rpb24gaXNGaXJlZm94VHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5GSVJFRk9YO1xufTtcblxudmFyIGlzQ2hyb21pdW1UeXBlID0gZnVuY3Rpb24gaXNDaHJvbWl1bVR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuQ0hST01JVU07XG59O1xuXG52YXIgaXNFZGdlVHlwZSA9IGZ1bmN0aW9uIGlzRWRnZVR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuRURHRTtcbn07XG5cbnZhciBpc1lhbmRleFR5cGUgPSBmdW5jdGlvbiBpc1lhbmRleFR5cGUoKSB7XG4gIHJldHVybiBicm93c2VyLm5hbWUgPT09IEJST1dTRVJfVFlQRVMuWUFOREVYO1xufTtcblxudmFyIGlzU2FmYXJpVHlwZSA9IGZ1bmN0aW9uIGlzU2FmYXJpVHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5TQUZBUkkgfHwgYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLk1PQklMRV9TQUZBUkk7XG59O1xuXG52YXIgaXNNb2JpbGVTYWZhcmlUeXBlID0gZnVuY3Rpb24gaXNNb2JpbGVTYWZhcmlUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLk1PQklMRV9TQUZBUkk7XG59O1xuXG52YXIgaXNPcGVyYVR5cGUgPSBmdW5jdGlvbiBpc09wZXJhVHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5PUEVSQTtcbn07XG5cbnZhciBpc0lFVHlwZSA9IGZ1bmN0aW9uIGlzSUVUeXBlKCkge1xuICByZXR1cm4gYnJvd3Nlci5uYW1lID09PSBCUk9XU0VSX1RZUEVTLklOVEVSTkVUX0VYUExPUkVSIHx8IGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5JRTtcbn07XG5cbnZhciBpc01JVUlUeXBlID0gZnVuY3Rpb24gaXNNSVVJVHlwZSgpIHtcbiAgcmV0dXJuIGJyb3dzZXIubmFtZSA9PT0gQlJPV1NFUl9UWVBFUy5NSVVJO1xufTtcblxudmFyIGlzRWxlY3Ryb25UeXBlID0gZnVuY3Rpb24gaXNFbGVjdHJvblR5cGUoKSB7XG4gIHZhciBuYXYgPSBnZXROYXZpZ2F0b3JJbnN0YW5jZSgpO1xuICB2YXIgdWEgPSBuYXYgJiYgbmF2LnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gdHlwZW9mIHVhID09PSAnc3RyaW5nJyA/IC9lbGVjdHJvbi8udGVzdCh1YSkgOiBmYWxzZTtcbn07XG5cbnZhciBnZXRJT1MxMyA9IGZ1bmN0aW9uIGdldElPUzEzKCkge1xuICB2YXIgbmF2ID0gZ2V0TmF2aWdhdG9ySW5zdGFuY2UoKTtcbiAgcmV0dXJuIG5hdiAmJiAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2LnBsYXRmb3JtKSB8fCBuYXYucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2Lm1heFRvdWNoUG9pbnRzID4gMSkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbn07XG5cbnZhciBnZXRJUGFkMTMgPSBmdW5jdGlvbiBnZXRJUGFkMTMoKSB7XG4gIHJldHVybiBpc0lPUzEzQ2hlY2soJ2lQYWQnKTtcbn07XG5cbnZhciBnZXRJcGhvbmUxMyA9IGZ1bmN0aW9uIGdldElwaG9uZTEzKCkge1xuICByZXR1cm4gaXNJT1MxM0NoZWNrKCdpUGhvbmUnKTtcbn07XG5cbnZhciBnZXRJUG9kMTMgPSBmdW5jdGlvbiBnZXRJUG9kMTMoKSB7XG4gIHJldHVybiBpc0lPUzEzQ2hlY2soJ2lQb2QnKTtcbn07XG5cbnZhciBnZXRCcm93c2VyRnVsbFZlcnNpb24gPSBmdW5jdGlvbiBnZXRCcm93c2VyRnVsbFZlcnNpb24oKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhicm93c2VyLnZlcnNpb24pO1xufTtcblxudmFyIGdldEJyb3dzZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0QnJvd3NlclZlcnNpb24oKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhicm93c2VyLm1ham9yKTtcbn07XG5cbnZhciBnZXRPc1ZlcnNpb24gPSBmdW5jdGlvbiBnZXRPc1ZlcnNpb24oKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhvcy52ZXJzaW9uKTtcbn07XG5cbnZhciBnZXRPc05hbWUgPSBmdW5jdGlvbiBnZXRPc05hbWUoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhvcy5uYW1lKTtcbn07XG5cbnZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uIGdldEJyb3dzZXJOYW1lKCkge1xuICByZXR1cm4gc2V0RGVmYXVsdHMoYnJvd3Nlci5uYW1lKTtcbn07XG5cbnZhciBnZXRNb2JpbGVWZW5kb3IgPSBmdW5jdGlvbiBnZXRNb2JpbGVWZW5kb3IoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhkZXZpY2UudmVuZG9yKTtcbn07XG5cbnZhciBnZXRNb2JpbGVNb2RlbCA9IGZ1bmN0aW9uIGdldE1vYmlsZU1vZGVsKCkge1xuICByZXR1cm4gc2V0RGVmYXVsdHMoZGV2aWNlLm1vZGVsKTtcbn07XG5cbnZhciBnZXRFbmdpbmVOYW1lID0gZnVuY3Rpb24gZ2V0RW5naW5lTmFtZSgpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGVuZ2luZS5uYW1lKTtcbn07XG5cbnZhciBnZXRFbmdpbmVWZXJzaW9uID0gZnVuY3Rpb24gZ2V0RW5naW5lVmVyc2lvbigpIHtcbiAgcmV0dXJuIHNldERlZmF1bHRzKGVuZ2luZS52ZXJzaW9uKTtcbn07XG5cbnZhciBnZXRVc2VyYWdlbnQgPSBmdW5jdGlvbiBnZXRVc2VyYWdlbnQoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyh1YSk7XG59O1xuXG52YXIgZ2V0RGV2aWNlVHlwZSA9IGZ1bmN0aW9uIGdldERldmljZVR5cGUoKSB7XG4gIHJldHVybiBzZXREZWZhdWx0cyhkZXZpY2UudHlwZSwgJ2Jyb3dzZXInKTtcbn07XG5cbnZhciBpc1NtYXJ0VFYgPSBpc1NtYXJ0VFZUeXBlKCk7XG52YXIgaXNDb25zb2xlID0gaXNDb25zb2xlVHlwZSgpO1xudmFyIGlzV2VhcmFibGUgPSBpc1dlYXJhYmxlVHlwZSgpO1xudmFyIGlzTW9iaWxlU2FmYXJpID0gaXNNb2JpbGVTYWZhcmlUeXBlKCkgfHwgZ2V0SVBhZDEzKCk7XG52YXIgaXNDaHJvbWl1bSA9IGlzQ2hyb21pdW1UeXBlKCk7XG52YXIgaXNNb2JpbGUgPSBpc01vYmlsZUFuZFRhYmxldFR5cGUoKSB8fCBnZXRJUGFkMTMoKTtcbnZhciBpc01vYmlsZU9ubHkgPSBpc01vYmlsZVR5cGUoKTtcbnZhciBpc1RhYmxldCA9IGlzVGFibGV0VHlwZSgpIHx8IGdldElQYWQxMygpO1xudmFyIGlzQnJvd3NlciA9IGlzQnJvd3NlclR5cGUoKTtcbnZhciBpc0FuZHJvaWQgPSBpc0FuZHJvaWRUeXBlKCk7XG52YXIgaXNXaW5QaG9uZSA9IGlzV2luUGhvbmVUeXBlKCk7XG52YXIgaXNJT1MgPSBpc0lPU1R5cGUoKSB8fCBnZXRJUGFkMTMoKTtcbnZhciBpc0Nocm9tZSA9IGlzQ2hyb21lVHlwZSgpO1xudmFyIGlzRmlyZWZveCA9IGlzRmlyZWZveFR5cGUoKTtcbnZhciBpc1NhZmFyaSA9IGlzU2FmYXJpVHlwZSgpO1xudmFyIGlzT3BlcmEgPSBpc09wZXJhVHlwZSgpO1xudmFyIGlzSUUgPSBpc0lFVHlwZSgpO1xudmFyIG9zVmVyc2lvbiA9IGdldE9zVmVyc2lvbigpO1xudmFyIG9zTmFtZSA9IGdldE9zTmFtZSgpO1xudmFyIGZ1bGxCcm93c2VyVmVyc2lvbiA9IGdldEJyb3dzZXJGdWxsVmVyc2lvbigpO1xudmFyIGJyb3dzZXJWZXJzaW9uID0gZ2V0QnJvd3NlclZlcnNpb24oKTtcbnZhciBicm93c2VyTmFtZSA9IGdldEJyb3dzZXJOYW1lKCk7XG52YXIgbW9iaWxlVmVuZG9yID0gZ2V0TW9iaWxlVmVuZG9yKCk7XG52YXIgbW9iaWxlTW9kZWwgPSBnZXRNb2JpbGVNb2RlbCgpO1xudmFyIGVuZ2luZU5hbWUgPSBnZXRFbmdpbmVOYW1lKCk7XG52YXIgZW5naW5lVmVyc2lvbiA9IGdldEVuZ2luZVZlcnNpb24oKTtcbnZhciBnZXRVQSA9IGdldFVzZXJhZ2VudCgpO1xudmFyIGlzRWRnZSA9IGlzRWRnZVR5cGUoKSB8fCBpc0VkZ2VDaHJvbWl1bVR5cGUoKTtcbnZhciBpc1lhbmRleCA9IGlzWWFuZGV4VHlwZSgpO1xudmFyIGRldmljZVR5cGUgPSBnZXREZXZpY2VUeXBlKCk7XG52YXIgaXNJT1MxMyA9IGdldElPUzEzKCk7XG52YXIgaXNJUGFkMTMgPSBnZXRJUGFkMTMoKTtcbnZhciBpc0lQaG9uZTEzID0gZ2V0SXBob25lMTMoKTtcbnZhciBpc0lQb2QxMyA9IGdldElQb2QxMygpO1xudmFyIGlzRWxlY3Ryb24gPSBpc0VsZWN0cm9uVHlwZSgpO1xudmFyIGlzRWRnZUNocm9taXVtID0gaXNFZGdlQ2hyb21pdW1UeXBlKCk7XG52YXIgaXNMZWdhY3lFZGdlID0gaXNFZGdlVHlwZSgpICYmICFpc0VkZ2VDaHJvbWl1bVR5cGUoKTtcbnZhciBpc1dpbmRvd3MgPSBpc1dpbmRvd3NUeXBlKCk7XG52YXIgaXNNYWNPcyA9IGlzTWFjT3NUeXBlKCk7XG52YXIgaXNNSVVJID0gaXNNSVVJVHlwZSgpO1xuXG52YXIgQW5kcm9pZFZpZXcgPSBmdW5jdGlvbiBBbmRyb2lkVmlldyhfcmVmKSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmLnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmLnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHJldHVybiBpc0FuZHJvaWQgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIEJyb3dzZXJWaWV3ID0gZnVuY3Rpb24gQnJvd3NlclZpZXcoX3JlZjIpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWYyLnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjIudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjIuc3R5bGU7XG4gIHJldHVybiBpc0Jyb3dzZXIgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIElFVmlldyA9IGZ1bmN0aW9uIElFVmlldyhfcmVmMykge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjMucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMy5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmMy52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmMy5zdHlsZTtcbiAgcmV0dXJuIGlzSUUgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIElPU1ZpZXcgPSBmdW5jdGlvbiBJT1NWaWV3KF9yZWY0KSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmNC5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWY0LnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWY0LnN0eWxlO1xuICByZXR1cm4gaXNJT1MgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIE1vYmlsZVZpZXcgPSBmdW5jdGlvbiBNb2JpbGVWaWV3KF9yZWY1KSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmNS5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWY1LnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWY1LnN0eWxlO1xuICByZXR1cm4gaXNNb2JpbGUgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIFRhYmxldFZpZXcgPSBmdW5jdGlvbiBUYWJsZXRWaWV3KF9yZWY2KSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmNi5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY2LmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWY2LnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWY2LnN0eWxlO1xuICByZXR1cm4gaXNUYWJsZXQgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIFdpblBob25lVmlldyA9IGZ1bmN0aW9uIFdpblBob25lVmlldyhfcmVmNykge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjcucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmNy5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmNy52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmNy5zdHlsZTtcbiAgcmV0dXJuIGlzV2luUGhvbmUgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIE1vYmlsZU9ubHlWaWV3ID0gZnVuY3Rpb24gTW9iaWxlT25seVZpZXcoX3JlZjgpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWY4LnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjguY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjgudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjguc3R5bGU7XG4gIHJldHVybiBpc01vYmlsZU9ubHkgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIFNtYXJ0VFZWaWV3ID0gZnVuY3Rpb24gU21hcnRUVlZpZXcoX3JlZjkpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWY5LnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjkuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjkudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjkuc3R5bGU7XG4gIHJldHVybiBpc1NtYXJ0VFYgPyByZW5kZXJXaXRoRnJhZ21lbnQgPyBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbikgOiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHZpZXdDbGFzc05hbWUsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNoaWxkcmVuKSA6IG51bGw7XG59O1xudmFyIENvbnNvbGVWaWV3ID0gZnVuY3Rpb24gQ29uc29sZVZpZXcoX3JlZjEwKSB7XG4gIHZhciByZW5kZXJXaXRoRnJhZ21lbnQgPSBfcmVmMTAucmVuZGVyV2l0aEZyYWdtZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMTAuY2hpbGRyZW4sXG4gICAgICB2aWV3Q2xhc3NOYW1lID0gX3JlZjEwLnZpZXdDbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYxMC5zdHlsZTtcbiAgcmV0dXJuIGlzQ29uc29sZSA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG52YXIgV2VhcmFibGVWaWV3ID0gZnVuY3Rpb24gV2VhcmFibGVWaWV3KF9yZWYxMSkge1xuICB2YXIgcmVuZGVyV2l0aEZyYWdtZW50ID0gX3JlZjExLnJlbmRlcldpdGhGcmFnbWVudCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjExLmNoaWxkcmVuLFxuICAgICAgdmlld0NsYXNzTmFtZSA9IF9yZWYxMS52aWV3Q2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmMTEuc3R5bGU7XG4gIHJldHVybiBpc1dlYXJhYmxlID8gcmVuZGVyV2l0aEZyYWdtZW50ID8gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pIDogUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiB2aWV3Q2xhc3NOYW1lLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZHJlbikgOiBudWxsO1xufTtcbnZhciBDdXN0b21WaWV3ID0gZnVuY3Rpb24gQ3VzdG9tVmlldyhfcmVmMTIpIHtcbiAgdmFyIHJlbmRlcldpdGhGcmFnbWVudCA9IF9yZWYxMi5yZW5kZXJXaXRoRnJhZ21lbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYxMi5jaGlsZHJlbixcbiAgICAgIHZpZXdDbGFzc05hbWUgPSBfcmVmMTIudmlld0NsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZjEyLnN0eWxlLFxuICAgICAgY29uZGl0aW9uID0gX3JlZjEyLmNvbmRpdGlvbjtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IHJlbmRlcldpdGhGcmFnbWVudCA/IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdmlld0NsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pIDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHdpdGhPcmllbnRhdGlvbkNoYW5nZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoX2NsYXNzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gX2NsYXNzKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihfY2xhc3MpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICAgICAgX3RoaXMuaXNFdmVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UgPSBfdGhpcy5oYW5kbGVPcmllbnRhdGlvbkNoYW5nZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMub25PcmllbnRhdGlvbkNoYW5nZSA9IF90aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICAgIF90aGlzLm9uUGFnZUxvYWQgPSBfdGhpcy5vblBhZ2VMb2FkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBpc0xhbmRzY2FwZTogZmFsc2UsXG4gICAgICAgICAgaXNQb3J0cmFpdDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICBrZXk6IFwiaGFuZGxlT3JpZW50YXRpb25DaGFuZ2VcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU9yaWVudGF0aW9uQ2hhbmdlKCkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0V2ZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0V2ZW50TGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gd2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQgPyA5MCA6IDA7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1BvcnRyYWl0OiBvcmllbnRhdGlvbiA9PT0gMCxcbiAgICAgICAgICAgIGlzTGFuZHNjYXBlOiBvcmllbnRhdGlvbiA9PT0gOTBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwib25PcmllbnRhdGlvbkNoYW5nZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25PcmllbnRhdGlvbkNoYW5nZSgpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZU9yaWVudGF0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm9uUGFnZUxvYWRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUGFnZUxvYWQoKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVPcmllbnRhdGlvbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgaWYgKCh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgIT09IHVuZGVmaW5lZCAmJiBpc01vYmlsZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRXZlbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlT3JpZW50YXRpb25DaGFuZ2UoKTtcbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMub25QYWdlTG9hZCwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMub25QYWdlTG9hZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgIGlzTGFuZHNjYXBlOiB0aGlzLnN0YXRlLmlzTGFuZHNjYXBlLFxuICAgICAgICAgICAgaXNQb3J0cmFpdDogdGhpcy5zdGF0ZS5pc1BvcnRyYWl0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgfShSZWFjdF9fZGVmYXVsdC5Db21wb25lbnQpXG4gICk7XG59XG5cbmV4cG9ydHMuQW5kcm9pZFZpZXcgPSBBbmRyb2lkVmlldztcbmV4cG9ydHMuQnJvd3NlclZpZXcgPSBCcm93c2VyVmlldztcbmV4cG9ydHMuQ29uc29sZVZpZXcgPSBDb25zb2xlVmlldztcbmV4cG9ydHMuQ3VzdG9tVmlldyA9IEN1c3RvbVZpZXc7XG5leHBvcnRzLklFVmlldyA9IElFVmlldztcbmV4cG9ydHMuSU9TVmlldyA9IElPU1ZpZXc7XG5leHBvcnRzLk1vYmlsZU9ubHlWaWV3ID0gTW9iaWxlT25seVZpZXc7XG5leHBvcnRzLk1vYmlsZVZpZXcgPSBNb2JpbGVWaWV3O1xuZXhwb3J0cy5TbWFydFRWVmlldyA9IFNtYXJ0VFZWaWV3O1xuZXhwb3J0cy5UYWJsZXRWaWV3ID0gVGFibGV0VmlldztcbmV4cG9ydHMuV2VhcmFibGVWaWV3ID0gV2VhcmFibGVWaWV3O1xuZXhwb3J0cy5XaW5QaG9uZVZpZXcgPSBXaW5QaG9uZVZpZXc7XG5leHBvcnRzLmJyb3dzZXJOYW1lID0gYnJvd3Nlck5hbWU7XG5leHBvcnRzLmJyb3dzZXJWZXJzaW9uID0gYnJvd3NlclZlcnNpb247XG5leHBvcnRzLmRldmljZURldGVjdCA9IGRldmljZURldGVjdDtcbmV4cG9ydHMuZGV2aWNlVHlwZSA9IGRldmljZVR5cGU7XG5leHBvcnRzLmVuZ2luZU5hbWUgPSBlbmdpbmVOYW1lO1xuZXhwb3J0cy5lbmdpbmVWZXJzaW9uID0gZW5naW5lVmVyc2lvbjtcbmV4cG9ydHMuZnVsbEJyb3dzZXJWZXJzaW9uID0gZnVsbEJyb3dzZXJWZXJzaW9uO1xuZXhwb3J0cy5nZXRVQSA9IGdldFVBO1xuZXhwb3J0cy5pc0FuZHJvaWQgPSBpc0FuZHJvaWQ7XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMuaXNDaHJvbWUgPSBpc0Nocm9tZTtcbmV4cG9ydHMuaXNDaHJvbWl1bSA9IGlzQ2hyb21pdW07XG5leHBvcnRzLmlzQ29uc29sZSA9IGlzQ29uc29sZTtcbmV4cG9ydHMuaXNFZGdlID0gaXNFZGdlO1xuZXhwb3J0cy5pc0VkZ2VDaHJvbWl1bSA9IGlzRWRnZUNocm9taXVtO1xuZXhwb3J0cy5pc0VsZWN0cm9uID0gaXNFbGVjdHJvbjtcbmV4cG9ydHMuaXNGaXJlZm94ID0gaXNGaXJlZm94O1xuZXhwb3J0cy5pc0lFID0gaXNJRTtcbmV4cG9ydHMuaXNJT1MgPSBpc0lPUztcbmV4cG9ydHMuaXNJT1MxMyA9IGlzSU9TMTM7XG5leHBvcnRzLmlzSVBhZDEzID0gaXNJUGFkMTM7XG5leHBvcnRzLmlzSVBob25lMTMgPSBpc0lQaG9uZTEzO1xuZXhwb3J0cy5pc0lQb2QxMyA9IGlzSVBvZDEzO1xuZXhwb3J0cy5pc0xlZ2FjeUVkZ2UgPSBpc0xlZ2FjeUVkZ2U7XG5leHBvcnRzLmlzTUlVSSA9IGlzTUlVSTtcbmV4cG9ydHMuaXNNYWNPcyA9IGlzTWFjT3M7XG5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGU7XG5leHBvcnRzLmlzTW9iaWxlT25seSA9IGlzTW9iaWxlT25seTtcbmV4cG9ydHMuaXNNb2JpbGVTYWZhcmkgPSBpc01vYmlsZVNhZmFyaTtcbmV4cG9ydHMuaXNPcGVyYSA9IGlzT3BlcmE7XG5leHBvcnRzLmlzU2FmYXJpID0gaXNTYWZhcmk7XG5leHBvcnRzLmlzU21hcnRUViA9IGlzU21hcnRUVjtcbmV4cG9ydHMuaXNUYWJsZXQgPSBpc1RhYmxldDtcbmV4cG9ydHMuaXNXZWFyYWJsZSA9IGlzV2VhcmFibGU7XG5leHBvcnRzLmlzV2luUGhvbmUgPSBpc1dpblBob25lO1xuZXhwb3J0cy5pc1dpbmRvd3MgPSBpc1dpbmRvd3M7XG5leHBvcnRzLmlzWWFuZGV4ID0gaXNZYW5kZXg7XG5leHBvcnRzLm1vYmlsZU1vZGVsID0gbW9iaWxlTW9kZWw7XG5leHBvcnRzLm1vYmlsZVZlbmRvciA9IG1vYmlsZVZlbmRvcjtcbmV4cG9ydHMub3NOYW1lID0gb3NOYW1lO1xuZXhwb3J0cy5vc1ZlcnNpb24gPSBvc1ZlcnNpb247XG5leHBvcnRzLndpdGhPcmllbnRhdGlvbkNoYW5nZSA9IHdpdGhPcmllbnRhdGlvbkNoYW5nZTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMic7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiFAbGljZW5zZVxuICogVUFQYXJzZXIuanMgdjAuNy4yOFxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAyMSBGYWlzYWwgU2FsbWFuIDxmQGZhaXNhbG1hbi5jb20+XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZVxuICovXG4oZnVuY3Rpb24od2luZG93LHVuZGVmaW5lZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIExJQlZFUlNJT049XCIwLjcuMjhcIixFTVBUWT1cIlwiLFVOS05PV049XCI/XCIsRlVOQ19UWVBFPVwiZnVuY3Rpb25cIixVTkRFRl9UWVBFPVwidW5kZWZpbmVkXCIsT0JKX1RZUEU9XCJvYmplY3RcIixTVFJfVFlQRT1cInN0cmluZ1wiLE1BSk9SPVwibWFqb3JcIixNT0RFTD1cIm1vZGVsXCIsTkFNRT1cIm5hbWVcIixUWVBFPVwidHlwZVwiLFZFTkRPUj1cInZlbmRvclwiLFZFUlNJT049XCJ2ZXJzaW9uXCIsQVJDSElURUNUVVJFPVwiYXJjaGl0ZWN0dXJlXCIsQ09OU09MRT1cImNvbnNvbGVcIixNT0JJTEU9XCJtb2JpbGVcIixUQUJMRVQ9XCJ0YWJsZXRcIixTTUFSVFRWPVwic21hcnR0dlwiLFdFQVJBQkxFPVwid2VhcmFibGVcIixFTUJFRERFRD1cImVtYmVkZGVkXCIsVUFfTUFYX0xFTkdUSD0yNTU7dmFyIHV0aWw9e2V4dGVuZDpmdW5jdGlvbihyZWdleGVzLGV4dGVuc2lvbnMpe3ZhciBtZXJnZWRSZWdleGVzPXt9O2Zvcih2YXIgaSBpbiByZWdleGVzKXtpZihleHRlbnNpb25zW2ldJiZleHRlbnNpb25zW2ldLmxlbmd0aCUyPT09MCl7bWVyZ2VkUmVnZXhlc1tpXT1leHRlbnNpb25zW2ldLmNvbmNhdChyZWdleGVzW2ldKX1lbHNle21lcmdlZFJlZ2V4ZXNbaV09cmVnZXhlc1tpXX19cmV0dXJuIG1lcmdlZFJlZ2V4ZXN9LGhhczpmdW5jdGlvbihzdHIxLHN0cjIpe3JldHVybiB0eXBlb2Ygc3RyMT09PVNUUl9UWVBFP3N0cjIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cjEudG9Mb3dlckNhc2UoKSkhPT0tMTpmYWxzZX0sbG93ZXJpemU6ZnVuY3Rpb24oc3RyKXtyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKHZlcnNpb24pe3JldHVybiB0eXBlb2YgdmVyc2lvbj09PVNUUl9UWVBFP3ZlcnNpb24ucmVwbGFjZSgvW15cXGRcXC5dL2csXCJcIikuc3BsaXQoXCIuXCIpWzBdOnVuZGVmaW5lZH0sdHJpbTpmdW5jdGlvbihzdHIsbGVuKXtzdHI9c3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFwiXCIpO3JldHVybiB0eXBlb2YgbGVuPT09VU5ERUZfVFlQRT9zdHI6c3RyLnN1YnN0cmluZygwLFVBX01BWF9MRU5HVEgpfX07dmFyIG1hcHBlcj17cmd4OmZ1bmN0aW9uKHVhLGFycmF5cyl7dmFyIGk9MCxqLGsscCxxLG1hdGNoZXMsbWF0Y2g7d2hpbGUoaTxhcnJheXMubGVuZ3RoJiYhbWF0Y2hlcyl7dmFyIHJlZ2V4PWFycmF5c1tpXSxwcm9wcz1hcnJheXNbaSsxXTtqPWs9MDt3aGlsZShqPHJlZ2V4Lmxlbmd0aCYmIW1hdGNoZXMpe21hdGNoZXM9cmVnZXhbaisrXS5leGVjKHVhKTtpZighIW1hdGNoZXMpe2ZvcihwPTA7cDxwcm9wcy5sZW5ndGg7cCsrKXttYXRjaD1tYXRjaGVzWysra107cT1wcm9wc1twXTtpZih0eXBlb2YgcT09PU9CSl9UWVBFJiZxLmxlbmd0aD4wKXtpZihxLmxlbmd0aD09Mil7aWYodHlwZW9mIHFbMV09PUZVTkNfVFlQRSl7dGhpc1txWzBdXT1xWzFdLmNhbGwodGhpcyxtYXRjaCl9ZWxzZXt0aGlzW3FbMF1dPXFbMV19fWVsc2UgaWYocS5sZW5ndGg9PTMpe2lmKHR5cGVvZiBxWzFdPT09RlVOQ19UWVBFJiYhKHFbMV0uZXhlYyYmcVsxXS50ZXN0KSl7dGhpc1txWzBdXT1tYXRjaD9xWzFdLmNhbGwodGhpcyxtYXRjaCxxWzJdKTp1bmRlZmluZWR9ZWxzZXt0aGlzW3FbMF1dPW1hdGNoP21hdGNoLnJlcGxhY2UocVsxXSxxWzJdKTp1bmRlZmluZWR9fWVsc2UgaWYocS5sZW5ndGg9PTQpe3RoaXNbcVswXV09bWF0Y2g/cVszXS5jYWxsKHRoaXMsbWF0Y2gucmVwbGFjZShxWzFdLHFbMl0pKTp1bmRlZmluZWR9fWVsc2V7dGhpc1txXT1tYXRjaD9tYXRjaDp1bmRlZmluZWR9fX19aSs9Mn19LHN0cjpmdW5jdGlvbihzdHIsbWFwKXtmb3IodmFyIGkgaW4gbWFwKXtpZih0eXBlb2YgbWFwW2ldPT09T0JKX1RZUEUmJm1hcFtpXS5sZW5ndGg+MCl7Zm9yKHZhciBqPTA7ajxtYXBbaV0ubGVuZ3RoO2orKyl7aWYodXRpbC5oYXMobWFwW2ldW2pdLHN0cikpe3JldHVybiBpPT09VU5LTk9XTj91bmRlZmluZWQ6aX19fWVsc2UgaWYodXRpbC5oYXMobWFwW2ldLHN0cikpe3JldHVybiBpPT09VU5LTk9XTj91bmRlZmluZWQ6aX19cmV0dXJuIHN0cn19O3ZhciBtYXBzPXticm93c2VyOntvbGRTYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX0sb2xkRWRnZTp7dmVyc2lvbjp7LjE6XCIxMi5cIiwyMTpcIjEzLlwiLDMxOlwiMTQuXCIsMzk6XCIxNS5cIiw0MTpcIjE2LlwiLDQyOlwiMTcuXCIsNDQ6XCIxOC5cIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyZTM6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19O3ZhciByZWdleGVzPXticm93c2VyOltbL1xcYig/OmNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJDaHJvbWVcIl1dLFsvKD86ZWRnZXxlZGdpb3N8ZWRnYXxlZGcpXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJFZGdlXCJdXSxbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdezMsNn0pXFxiLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkoPzouK3ZlcnNpb25cXC98W1xcL1xcc10rKShbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvb3Bpb3NbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIk9wZXJhIE1pbmlcIl1dLFsvXFxzb3ByXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJPcGVyYVwiXV0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oYmE/aWR1YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanN8Ym93c2VyfHF1YXJrfHF1cHppbGxhfGZhbGtvbilcXC8oW1xcd1xcLi1dKykvaSwvKHJla29ucXxwdWZmaW58YnJhdmV8d2hhbGV8cXFicm93c2VybGl0ZXxxcSlcXC8oW1xcd1xcLl0rKS9pLC8od2VpYm8pX18oW1xcZFxcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyg/OltcXHNcXC9ddWM/XFxzP2Jyb3dzZXJ8KD86anVjLispdWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJVQ0Jyb3dzZXJcIl1dLFsvKD86d2luZG93c3dlY2hhdCk/XFxzcWJjb3JlXFwvKFtcXHdcXC5dKylcXGIuKig/OndpbmRvd3N3ZWNoYXQpPy9pXSxbVkVSU0lPTixbTkFNRSxcIldlQ2hhdChXaW4pIERlc2t0b3BcIl1dLFsvbWljcm9tZXNzZW5nZXJcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIldlQ2hhdFwiXV0sWy9rb25xdWVyb3JcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIktvbnF1ZXJvclwiXV0sWy90cmlkZW50Litydls6XFxzXShbXFx3XFwuXXsxLDl9KVxcYi4rbGlrZVxcc2dlY2tvL2ldLFtWRVJTSU9OLFtOQU1FLFwiSUVcIl1dLFsveWFicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJZYW5kZXhcIl1dLFsvKGF2YXN0fGF2ZylcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsLyguKykvLFwiJDEgU2VjdXJlIEJyb3dzZXJcIl0sVkVSU0lPTl0sWy9mb2N1c1xcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiRmlyZWZveCBGb2N1c1wiXV0sWy9vcHRcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIk9wZXJhIFRvdWNoXCJdXSxbL2NvY19jb2NfYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwiQ29jIENvY1wiXV0sWy9kb2xmaW5cXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkRvbHBoaW5cIl1dLFsvY29hc3RcXC8oW1xcd1xcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIk9wZXJhIENvYXN0XCJdXSxbL3hpYW9taVxcL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJNSVVJIEJyb3dzZXJcIl1dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJGaXJlZm94XCJdXSxbLyhxaWh1fHFoYnJvd3NlcnxxaWhvb2Jyb3dzZXJ8MzYwYnJvd3NlcikvaV0sW1tOQU1FLFwiMzYwIEJyb3dzZXJcIl1dLFsvKG9jdWx1c3xzYW1zdW5nfHNhaWxmaXNoKWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbW05BTUUsLyguKykvLFwiJDEgQnJvd3NlclwiXSxWRVJTSU9OXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbTkFNRSwvXy9nLFwiIFwiXSxWRVJTSU9OXSxbL1xccyhlbGVjdHJvbilcXC8oW1xcd1xcLl0rKVxcc3NhZmFyaS9pLC8odGVzbGEpKD86XFxzcXRjYXJicm93c2VyfFxcLygyMFsxMl1cXGRcXC5bXFx3XFwuLV0rKSkvaSwvbT8ocXFicm93c2VyfGJhaWR1Ym94YXBwfDIzNDVFeHBsb3JlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyhNZXRhU3IpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKExCQlJPV1NFUikvaV0sW05BTUVdLFsvO2ZiYXZcXC8oW1xcd1xcLl0rKTsvaV0sW1ZFUlNJT04sW05BTUUsXCJGYWNlYm9va1wiXV0sWy9GQkFOXFwvRkJJT1N8RkJfSUFCXFwvRkI0QS9pXSxbW05BTUUsXCJGYWNlYm9va1wiXV0sWy9zYWZhcmlcXHMobGluZSlcXC8oW1xcd1xcLl0rKS9pLC9cXGIobGluZSlcXC8oW1xcd1xcLl0rKVxcL2lhYi9pLC8oY2hyb21pdW18aW5zdGFncmFtKVtcXC9cXHNdKFtcXHdcXC4tXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvXFxiZ3NhXFwvKFtcXHdcXC5dKylcXHMuKnNhZmFyaVxcLy9pXSxbVkVSU0lPTixbTkFNRSxcIkdTQVwiXV0sWy9oZWFkbGVzc2Nocm9tZSg/OlxcLyhbXFx3XFwuXSspfFxccykvaV0sW1ZFUlNJT04sW05BTUUsXCJDaHJvbWUgSGVhZGxlc3NcIl1dLFsvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaV0sW1tOQU1FLFwiQ2hyb21lIFdlYlZpZXdcIl0sVkVSU0lPTl0sWy9kcm9pZC4rXFxzdmVyc2lvblxcLyhbXFx3XFwuXSspXFxiLisoPzptb2JpbGVcXHNzYWZhcml8c2FmYXJpKS9pXSxbVkVSU0lPTixbTkFNRSxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMuKm1vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbVkVSU0lPTixbTkFNRSxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzLioobW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtWRVJTSU9OLE5BTUVdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtOQU1FLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5icm93c2VyLm9sZFNhZmFyaS52ZXJzaW9uXV0sWy8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtOQU1FLFZFUlNJT05dLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tOQU1FLFwiTmV0c2NhcGVcIl0sVkVSU0lPTl0sWy9pbGVcXHN2cjtcXHNydjooW1xcd1xcLl0rKVxcKS4rZmlyZWZveC9pXSxbVkVSU0lPTixbTkFNRSxcIkZpcmVmb3ggUmVhbGl0eVwiXV0sWy9la2lvaGYuKyhmbG93KVxcLyhbXFx3XFwuXSspL2ksLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peHxwYWxlbW9vbnxiYXNpbGlza3x3YXRlcmZveClcXC8oW1xcd1xcLi1dKykkL2ksLyhmaXJlZm94KVxcLyhbXFx3XFwuXSspXFxzW1xcd1xcc1xcLV0rXFwvW1xcd1xcLl0rJC9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKVxccy4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmZ8c2xlaXBuaXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSopL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW05BTUUsVkVSU0lPTl1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1tBUkNISVRFQ1RVUkUsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW0FSQ0hJVEVDVFVSRSx1dGlsLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbQVJDSElURUNUVVJFLFwiaWEzMlwiXV0sWy9cXGIoYWFyY2g2NHxhcm12PzhlP2w/KVxcYi9pXSxbW0FSQ0hJVEVDVFVSRSxcImFybTY0XCJdXSxbL1xcYihhcm0oPzp2WzY3XSk/aHQ/bj9bZmxdcD8pXFxiL2ldLFtbQVJDSElURUNUVVJFLFwiYXJtaGZcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1tBUkNISVRFQ1RVUkUsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW0FSQ0hJVEVDVFVSRSwvb3dlci8sXCJcIix1dGlsLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1tBUkNISVRFQ1RVUkUsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfFxcYmFybSg/OjY0fCg/PXYoPzpbMS03XXxbNS03XTEpbD98O3xlYWJpKSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/XFxifHBhLXJpc2MpL2ldLFtbQVJDSElURUNUVVJFLHV0aWwubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcYihzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xzbS1bcHRdXFx3ezIsNH18Z3QtW3BuXVxcZHsyLDR9fHNnaC10OFs1Nl05fG5leHVzXFxzMTApL2ldLFtNT0RFTCxbVkVORE9SLFwiU2Ftc3VuZ1wiXSxbVFlQRSxUQUJMRVRdXSxbL1xcYigoPzpzW2NncF1ofGd0fHNtKS1cXHcrfGdhbGF4eVxcc25leHVzKS9pLC9cXHNzYW1zdW5nW1xccy1dKFtcXHctXSspL2ksL3NlYy0oc2doXFx3KykvaV0sW01PREVMLFtWRU5ET1IsXCJTYW1zdW5nXCJdLFtUWVBFLE1PQklMRV1dLFsvXFwoKGlwKD86aG9uZXxvZClbXFxzXFx3XSopOy9pXSxbTU9ERUwsW1ZFTkRPUixcIkFwcGxlXCJdLFtUWVBFLE1PQklMRV1dLFsvXFwoKGlwYWQpO1tcXHdcXHNcXCksOy1dK2FwcGxlL2ksL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rXFxzXFwoKGlwYWQpL2ksL1xcYihpcGFkKVxcZFxcZD8sXFxkXFxkP1s7XFxdXS4raW9zL2ldLFtNT0RFTCxbVkVORE9SLFwiQXBwbGVcIl0sW1RZUEUsVEFCTEVUXV0sWy9cXGIoKD86YWdyfGFnc1syM118YmFoMj98c2h0PyktYT9bbHddXFxkezJ9KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkh1YXdlaVwiXSxbVFlQRSxUQUJMRVRdXSxbL2RcXC9odWF3ZWkoW1xcd1xccy1dKylbO1xcKV0vaSwvXFxiKG5leHVzXFxzNnB8dm9nLVthdF0/bFxcZFxcZHxhbmUtW2F0XT9sW3hcXGRdXFxkfGVtbC1hP2xcXGRcXGRhP3xseWEtW2F0XT9sXFxkW1xcZGNdfGNsdC1hP2xcXGRcXGRpP3xlbGUtbFxcZFxcZCkvaSwvXFxiKFxcd3syLDR9LVthdHVdW2xuXVswMTI1OV1bMDE5XSlbO1xcKVxcc10vaV0sW01PREVMLFtWRU5ET1IsXCJIdWF3ZWlcIl0sW1RZUEUsTU9CSUxFXV0sWy9cXGIocG9jb1tcXHNcXHddKykoPzpcXHNidWlsZHxcXCkpL2ksL1xcYjtcXHMoXFx3KylcXHNidWlsZFxcL2htXFwxL2ksL1xcYihobVtcXHNcXC1fXT9ub3RlP1tcXHNfXT8oPzpcXGRcXHcpPylcXHNidWlsZC9pLC9cXGIocmVkbWlbXFxzXFwtX10/KD86bm90ZXxrKT9bXFx3XFxzX10rKSg/Olxcc2J1aWxkfFxcKSkvaSwvXFxiKG1pW1xcc1xcLV9dPyg/OmFcXGR8b25lfG9uZVtcXHNfXXBsdXN8bm90ZSBsdGUpP1tcXHNfXT8oPzpcXGQ/XFx3PylbXFxzX10/KD86cGx1cyk/KVxcc2J1aWxkL2ldLFtbTU9ERUwsL18vZyxcIiBcIl0sW1ZFTkRPUixcIlhpYW9taVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xcYihtaVtcXHNcXC1fXT8oPzpwYWQpKD86W1xcd1xcc19dKykpKD86XFxzYnVpbGR8XFwpKS9pXSxbW01PREVMLC9fL2csXCIgXCJdLFtWRU5ET1IsXCJYaWFvbWlcIl0sW1RZUEUsVEFCTEVUXV0sWy87XFxzKFxcdyspXFxzYnVpbGQuK1xcc29wcG8vaSwvXFxzKGNwaFsxMl1cXGR7M318cCg/OmFmfGNbYWxdfGRcXHd8ZVthcl0pW210XVxcZDB8eDkwMDcpXFxiL2ldLFtNT0RFTCxbVkVORE9SLFwiT1BQT1wiXSxbVFlQRSxNT0JJTEVdXSxbL1xcc3Zpdm9cXHMoXFx3KykoPzpcXHNidWlsZHxcXCkpL2ksL1xccyh2WzEyXVxcZHszfVxcdz9bYXRdKSg/Olxcc2J1aWxkfDspL2ldLFtNT0RFTCxbVkVORE9SLFwiVml2b1wiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhybXhbMTJdXFxkezN9KSg/Olxcc2J1aWxkfDspL2ldLFtNT0RFTCxbVkVORE9SLFwiUmVhbG1lXCJdLFtUWVBFLE1PQklMRV1dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT86PyhcXHM0Zyk/KVxcYltcXHdcXHNdK2J1aWxkXFwvL2ksL1xcc21vdCg/Om9yb2xhKT9bXFxzLV0oXFx3KikvaSwvKCg/Om1vdG9bXFxzXFx3XFwoXFwpXSt8eHRcXGR7Myw0fXxuZXh1c1xcczYpKD89XFxzYnVpbGR8XFwpKSkvaV0sW01PREVMLFtWRU5ET1IsXCJNb3Rvcm9sYVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbTU9ERUwsW1ZFTkRPUixcIk1vdG9yb2xhXCJdLFtUWVBFLFRBQkxFVF1dLFsvKCg/PWxnKT9bdmxda1xcLT9cXGR7M30pXFxzYnVpbGR8XFxzM1xcLltcXHNcXHc7LV17MTB9bGc/LShbMDZjdjldezMsNH0pL2ldLFtNT0RFTCxbVkVORE9SLFwiTEdcIl0sW1RZUEUsVEFCTEVUXV0sWy8obG0tP2YxMDBbbnZdP3xuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKCg/IWJyb3dzZXJ8bmV0Y2FzdClcXHcrKS9pLC9cXGJsZyhcXC0/W1xcZFxcd10rKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiTEdcIl0sW1RZUEUsTU9CSUxFXV0sWy8oaWRlYXRhYltcXHdcXC1cXHNdKykvaSwvbGVub3ZvXFxzPyhzKD86NTAwMHw2MDAwKSg/OltcXHctXSspfHRhYig/OltcXHNcXHddKyl8eXRbXFxkXFx3LV17Nn18dGJbXFxkXFx3LV17Nn0pL2ldLFtNT0RFTCxbVkVORE9SLFwiTGVub3ZvXCJdLFtUWVBFLFRBQkxFVF1dLFsvKD86bWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksL25va2lhW1xcc18tXT8oW1xcd1xcLi1dKikvaV0sW1tNT0RFTCwvXy9nLFwiIFwiXSxbVkVORE9SLFwiTm9raWFcIl0sW1RZUEUsTU9CSUxFXV0sWy9kcm9pZC4rO1xccyhwaXhlbFxcc2MpW1xccyldL2ldLFtNT0RFTCxbVkVORE9SLFwiR29vZ2xlXCJdLFtUWVBFLFRBQkxFVF1dLFsvZHJvaWQuKztcXHMocGl4ZWxbXFxzXFxkYXhsXXswLDZ9KSg/Olxcc2J1aWxkfFxcKSkvaV0sW01PREVMLFtWRU5ET1IsXCJHb29nbGVcIl0sW1RZUEUsTU9CSUxFXV0sWy9kcm9pZC4rXFxzKFtjLWddXFxkezR9fHNvWy1sXVxcdyt8eHEtYVxcd1s0LTddWzEyXSkoPz1cXHNidWlsZFxcL3xcXCkuK2Nocm9tZVxcLyg/IVsxLTZdezAsMX1cXGRcXC4pKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNvbnlcIl0sW1RZUEUsTU9CSUxFXV0sWy9zb255XFxzdGFibGV0XFxzW3BzXVxcc2J1aWxkXFwvL2ksLyg/OnNvbnkpP3NncFxcdysoPzpcXHNidWlsZFxcL3xcXCkpL2ldLFtbTU9ERUwsXCJYcGVyaWEgVGFibGV0XCJdLFtWRU5ET1IsXCJTb255XCJdLFtUWVBFLFRBQkxFVF1dLFsvXFxzKGtiMjAwNXxpbjIwWzEyXTV8YmUyMFsxMl1bNTldKVxcYi9pLC9cXGJhMDAwKDEpXFxzYnVpbGQvaSwvXFxib25lcGx1c1xccyhhXFxkezR9KVtcXHMpXS9pXSxbTU9ERUwsW1ZFTkRPUixcIk9uZVBsdXNcIl0sW1RZUEUsTU9CSUxFXV0sWy8oYWxleGEpd2VibS9pLC8oa2ZbYS16XXsyfXdpKShcXHNidWlsZFxcL3xcXCkpL2ksLyhrZlthLXpdKykoXFxzYnVpbGRcXC98XFwpKS4rc2lsa1xcLy9pXSxbTU9ERUwsW1ZFTkRPUixcIkFtYXpvblwiXSxbVFlQRSxUQUJMRVRdXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rKFxcc2J1aWxkXFwvfFxcKSkuK3NpbGtcXC8vaV0sW1tNT0RFTCxcIkZpcmUgUGhvbmVcIl0sW1ZFTkRPUixcIkFtYXpvblwiXSxbVFlQRSxNT0JJTEVdXSxbL1xcKChwbGF5Ym9vayk7W1xcd1xcc1xcKSw7LV0rKHJpbSkvaV0sW01PREVMLFZFTkRPUixbVFlQRSxUQUJMRVRdXSxbLygoPzpiYlthLWZdfHN0W2h2XSkxMDAtXFxkKS9pLC9cXChiYjEwO1xccyhcXHcrKS9pXSxbTU9ERUwsW1ZFTkRPUixcIkJsYWNrQmVycnlcIl0sW1RZUEUsTU9CSUxFXV0sWy8oPzpcXGJ8YXN1c18pKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzXFxzN3xwYWRmb25lfHAwMFtjal0pL2ldLFtNT0RFTCxbVkVORE9SLFwiQVNVU1wiXSxbVFlQRSxUQUJMRVRdXSxbL1xccyh6W2VzXTZbMDI3XVswMV1ba21dW2xzXXx6ZW5mb25lXFxzXFxkXFx3PylcXGIvaV0sW01PREVMLFtWRU5ET1IsXCJBU1VTXCJdLFtUWVBFLE1PQklMRV1dLFsvKG5leHVzXFxzOSkvaV0sW01PREVMLFtWRU5ET1IsXCJIVENcIl0sW1RZUEUsVEFCTEVUXV0sWy8oaHRjKVs7X1xccy1dezEsMn0oW1xcd1xcc10rKD89XFwpfFxcc2J1aWxkKXxcXHcrKS9pLC8oenRlKS0oXFx3KikvaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0qKS9pXSxbVkVORE9SLFtNT0RFTCwvXy9nLFwiIFwiXSxbVFlQRSxNT0JJTEVdXSxbL2Ryb2lkW3hcXGRcXC5cXHM7XStcXHMoW2FiXVsxLTddXFwtP1swMTc4YV1cXGRcXGQ/KS9pXSxbTU9ERUwsW1ZFTkRPUixcIkFjZXJcIl0sW1RZUEUsVEFCTEVUXV0sWy9kcm9pZC4rO1xccyhtWzEtNV1cXHNub3RlKVxcc2J1aWxkL2ksL1xcYm16LShbXFx3LV17Mix9KS9pXSxbTU9ERUwsW1ZFTkRPUixcIk1laXp1XCJdLFtUWVBFLE1PQklMRV1dLFsvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKikvaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ksLyhtaWNyb3NvZnQpO1xccyhsdW1pYVtcXHNcXHddKykvaSwvKGxlbm92bylbX1xccy1dPyhbXFx3LV0rKS9pLC9saW51eDsuKyhqb2xsYSk7L2ksL2Ryb2lkLis7XFxzKG9wcG8pXFxzPyhbXFx3XFxzXSspXFxzYnVpbGQvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxNT0JJTEVdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKD8hLit0YWJsZXQpfHRhYmxldCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pLC9bO1xcL11cXHM/KGxlW1xcc1xcLV0rcGFuKVtcXHNcXC1dKyhcXHd7MSw5fSlcXHNidWlsZC9pLC9bO1xcL11cXHM/KHRyaW5pdHkpW1xcLVxcc10qKHRcXGR7M30pXFxzYnVpbGQvaSwvXFxiKGdpZ2FzZXQpW1xcc1xcLV0rKHFcXHd7MSw5fSlcXHNidWlsZC9pLC9cXGIodm9kYWZvbmUpXFxzKFtcXHdcXHNdKykoPzpcXCl8XFxzYnVpbGQpL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy9cXHMoc3VyZmFjZVxcc2R1bylcXHMvaV0sW01PREVMLFtWRU5ET1IsXCJNaWNyb3NvZnRcIl0sW1RZUEUsVEFCTEVUXV0sWy9kcm9pZFxcc1tcXGRcXC5dKztcXHMoZnBcXGR1PylcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkZhaXJwaG9uZVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyh1MzA0YWEpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJBVCZUXCJdLFtUWVBFLE1PQklMRV1dLFsvc2llLShcXHcqKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNpZW1lbnNcIl0sW1RZUEUsTU9CSUxFXV0sWy9bO1xcL11cXHM/KHJjdFxcdyspXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJSQ0FcIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL1xcc10odmVudWVbXFxkXFxzXXsyLDd9KVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiRGVsbFwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz8ocSg/Om12fHRhKVxcdyspXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJWZXJpem9uXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzKD86YmFybmVzWyZcXHNdK25vYmxlXFxzfGJuW3J0XSkoW1xcd1xcc1xcK10qKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiQmFybmVzICYgTm9ibGVcIl0sW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHModG1cXGR7M31cXHcrKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiTnVWaXNpb25cIl0sW1RZUEUsVEFCTEVUXV0sWy87XFxzKGs4OClcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIlpURVwiXSxbVFlQRSxUQUJMRVRdXSxbLztcXHMobnhcXGR7M31qKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiWlRFXCJdLFtUWVBFLE1PQklMRV1dLFsvWztcXC9dXFxzPyhnZW5cXGR7M30pXFxzYnVpbGQuKjQ5aC9pXSxbTU9ERUwsW1ZFTkRPUixcIlN3aXNzXCJdLFtUWVBFLE1PQklMRV1dLFsvWztcXC9dXFxzPyh6dXJcXGR7M30pXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJTd2lzc1wiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz8oKHpla2kpP3RiLipcXGIpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJaZWtpXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzKFt5cl1cXGR7Mn0pXFxzYnVpbGQvaSwvWztcXC9dXFxzKGRyYWdvbltcXC1cXHNdK3RvdWNoXFxzfGR0KShcXHd7NX0pXFxzYnVpbGQvaV0sW1tWRU5ET1IsXCJEcmFnb24gVG91Y2hcIl0sTU9ERUwsW1RZUEUsVEFCTEVUXV0sWy9bO1xcL11cXHM/KG5zLT9cXHd7MCw5fSlcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkluc2lnbmlhXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzPygobnhhfE5leHQpLT9cXHd7MCw5fSlcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIk5leHRCb29rXCJdLFtUWVBFLFRBQkxFVF1dLFsvWztcXC9dXFxzPyh4dHJlbWVcXF8pPyh2KDFbMDQ1XXwyWzAxNV18WzM0NjldMHw3WzA1XSkpXFxzYnVpbGQvaV0sW1tWRU5ET1IsXCJWb2ljZVwiXSxNT0RFTCxbVFlQRSxNT0JJTEVdXSxbL1s7XFwvXVxccz8obHZ0ZWxcXC0pPyh2MVsxMl0pXFxzYnVpbGQvaV0sW1tWRU5ET1IsXCJMdlRlbFwiXSxNT0RFTCxbVFlQRSxNT0JJTEVdXSxbLztcXHMocGgtMSlcXHMvaV0sW01PREVMLFtWRU5ET1IsXCJFc3NlbnRpYWxcIl0sW1RZUEUsTU9CSUxFXV0sWy9bO1xcL11cXHM/KHYoMTAwbWR8NzAwbmF8NzAxMXw5MTdnKS4qXFxiKVxcc2J1aWxkL2ldLFtNT0RFTCxbVkVORE9SLFwiRW52aXplblwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz8odHJpb1tcXHNcXHdcXC1cXC5dKylcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIk1hY2hTcGVlZFwiXSxbVFlQRSxUQUJMRVRdXSxbL1s7XFwvXVxccz90dV8oMTQ5MSlcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIlJvdG9yXCJdLFtUWVBFLFRBQkxFVF1dLFsvKHNoaWVsZFtcXHdcXHNdKylcXHNidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIk52aWRpYVwiXSxbVFlQRSxUQUJMRVRdXSxbLyhzcHJpbnQpXFxzKFxcdyspL2ldLFtWRU5ET1IsTU9ERUwsW1RZUEUsTU9CSUxFXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tNT0RFTCwvXFwuL2csXCIgXCJdLFtWRU5ET1IsXCJNaWNyb3NvZnRcIl0sW1RZUEUsTU9CSUxFXV0sWy9kcm9pZFxcc1tcXGRcXC5dKztcXHMoY2M2NjY2P3xldDVbMTZdfG1jWzIzOV1bMjNdeD98dmM4WzAzXXg/KVxcKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlplYnJhXCJdLFtUWVBFLFRBQkxFVF1dLFsvZHJvaWRcXHNbXFxkXFwuXSs7XFxzKGVjMzB8cHMyMHx0Y1syLThdXFxkW2t4XSlcXCkvaV0sW01PREVMLFtWRU5ET1IsXCJaZWJyYVwiXSxbVFlQRSxNT0JJTEVdXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3V0Y2hdKykvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxDT05TT0xFXV0sWy9kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW01PREVMLFtWRU5ET1IsXCJOdmlkaWFcIl0sW1RZUEUsQ09OU09MRV1dLFsvKHBsYXlzdGF0aW9uXFxzWzM0NXBvcnRhYmxldmldKykvaV0sW01PREVMLFtWRU5ET1IsXCJTb255XCJdLFtUWVBFLENPTlNPTEVdXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8oPyE7XFxzeGJveCkpW1xcc1xcKTtdL2ldLFtNT0RFTCxbVkVORE9SLFwiTWljcm9zb2Z0XCJdLFtUWVBFLENPTlNPTEVdXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW1ZFTkRPUixbVFlQRSxTTUFSVFRWXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbTU9ERUwsL14vLFwiU21hcnRUVlwiXSxbVkVORE9SLFwiU2Ftc3VuZ1wiXSxbVFlQRSxTTUFSVFRWXV0sWy8oPzpsaW51eDtcXHNuZXRjYXN0LitzbWFydHR2fGxnXFxzbmV0Y2FzdFxcLnR2LTIwMVxcZCkvaV0sW1tWRU5ET1IsXCJMR1wiXSxbVFlQRSxTTUFSVFRWXV0sWy8oYXBwbGUpXFxzP3R2L2ldLFtWRU5ET1IsW01PREVMLFwiQXBwbGUgVFZcIl0sW1RZUEUsU01BUlRUVl1dLFsvY3JrZXkvaV0sW1tNT0RFTCxcIkNocm9tZWNhc3RcIl0sW1ZFTkRPUixcIkdvb2dsZVwiXSxbVFlQRSxTTUFSVFRWXV0sWy9kcm9pZC4rYWZ0KFtcXHddKShcXHNidWlsZFxcL3xcXCkpL2ldLFtNT0RFTCxbVkVORE9SLFwiQW1hem9uXCJdLFtUWVBFLFNNQVJUVFZdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbTU9ERUwsW1ZFTkRPUixcIlNoYXJwXCJdLFtUWVBFLFNNQVJUVFZdXSxbL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrXFxzK1xcKFtcXHdcXHNdKjtcXHMqKFxcd1teO10qKTsoW147XSopL2ldLFtbVkVORE9SLHV0aWwudHJpbV0sW01PREVMLHV0aWwudHJpbV0sW1RZUEUsU01BUlRUVl1dLFsvW1xcc1xcL1xcKF0oYW5kcm9pZFxcc3xzbWFydFstXFxzXT98b3BlcmFcXHMpdHZbO1xcKVxcc10vaV0sW1tUWVBFLFNNQVJUVFZdXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW1ZFTkRPUixNT0RFTCxbVFlQRSxXRUFSQUJMRV1dLFsvZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtNT0RFTCxbVkVORE9SLFwiR29vZ2xlXCJdLFtUWVBFLFdFQVJBQkxFXV0sWy9kcm9pZFxcc1tcXGRcXC5dKztcXHMod3Q2Mz8wezIsM30pXFwpL2ldLFtNT0RFTCxbVkVORE9SLFwiWmVicmFcIl0sW1RZUEUsV0VBUkFCTEVdXSxbLyh0ZXNsYSkoPzpcXHNxdGNhcmJyb3dzZXJ8XFwvMjBbMTJdXFxkXFwuW1xcd1xcLi1dKykvaV0sW1ZFTkRPUixbVFlQRSxFTUJFRERFRF1dLFsvZHJvaWQgLis/OyAoW147XSs/KSg/OiBidWlsZHxcXCkgYXBwbGV3ZWJraXQpLis/IG1vYmlsZSBzYWZhcmkvaV0sW01PREVMLFtUWVBFLE1PQklMRV1dLFsvZHJvaWQgLis/O1xccyhbXjtdKz8pKD86IGJ1aWxkfFxcKSBhcHBsZXdlYmtpdCkuKz8oPyEgbW9iaWxlKSBzYWZhcmkvaV0sW01PREVMLFtUWVBFLFRBQkxFVF1dLFsvXFxzKHRhYmxldHx0YWIpWztcXC9dL2ksL1xccyhtb2JpbGUpKD86WztcXC9dfFxcc3NhZmFyaSkvaV0sW1tUWVBFLHV0aWwubG93ZXJpemVdXSxbLyhhbmRyb2lkW1xcd1xcLlxcc1xcLV17MCw5fSk7LitidWlsZC9pXSxbTU9ERUwsW1ZFTkRPUixcIkdlbmVyaWNcIl1dLFsvKHBob25lKS9pXSxbW1RZUEUsTU9CSUxFXV1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJFZGdlSFRNTFwiXV0sWy93ZWJraXRcXC81MzdcXC4zNi4rY2hyb21lXFwvKD8hMjcpKFtcXHdcXC5dKykvaV0sW1ZFUlNJT04sW05BTUUsXCJCbGlua1wiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtfGdvYW5uYSlcXC8oW1xcd1xcLl0rKS9pLC9la2lvaChmbG93KVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW05BTUUsVkVSU0lPTl0sWy9ydlxcOihbXFx3XFwuXXsxLDl9KVxcYi4rKGdlY2tvKS9pXSxbVkVSU0lPTixOQU1FXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNcXHddKikvaSwvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykoPyEuK3hib3gpL2ldLFtOQU1FLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW05BTUUsXCJXaW5kb3dzXCJdLFtWRVJTSU9OLG1hcHBlci5zdHIsbWFwcy5vcy53aW5kb3dzLnZlcnNpb25dXSxbL2lwW2hvbmVhZF17Miw0fVxcYig/Oi4qb3NcXHMoW1xcd10rKVxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pLC9jZm5ldHdvcmtcXC8uK2Rhcndpbi9pXSxbW1ZFUlNJT04sL18vZyxcIi5cIl0sW05BTUUsXCJpT1NcIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dKikvaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpKD8hLitoYWlrdSkvaV0sW1tOQU1FLFwiTWFjIE9TXCJdLFtWRVJTSU9OLC9fL2csXCIuXCJdXSxbLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xzYWlsZmlzaHxjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0qKS9pLC8oYmxhY2tiZXJyeSlcXHcqXFwvKFtcXHdcXC5dKikvaSwvKHRpemVufGthaW9zKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvXFwoKHNlcmllczQwKTsvaV0sW05BTUUsVkVSU0lPTl0sWy9cXChiYigxMCk7L2ldLFtWRVJTSU9OLFtOQU1FLFwiQmxhY2tCZXJyeVwiXV0sWy8oPzpzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KXxzZXJpZXM2MClbXFwvXFxzLV0/KFtcXHdcXC5dKikvaV0sW1ZFUlNJT04sW05BTUUsXCJTeW1iaWFuXCJdXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbTkFNRSxcIkZpcmVmb3ggT1NcIl1dLFsvd2ViMHM7LitydCh0dikvaSwvXFxiKD86aHApP3dvcyg/OmJyb3dzZXIpP1xcLyhbXFx3XFwuXSspL2ldLFtWRVJTSU9OLFtOQU1FLFwid2ViT1NcIl1dLFsvY3JrZXlcXC8oW1xcZFxcLl0rKS9pXSxbVkVSU0lPTixbTkFNRSxcIkNocm9tZWNhc3RcIl1dLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tOQU1FLFwiQ2hyb21pdW0gT1NcIl0sVkVSU0lPTl0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzQ1cG9ydGFibGV2dWNoXSspL2ksLyh4Ym94KTtcXHMreGJveFxccyhbXlxcKTtdKykvaSwvKG1pbnQpW1xcL1xcc1xcKFxcKV0/KFxcdyopL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufHN1c2V8b3BlbnN1c2V8Z2VudG9vfGFyY2goPz1cXHNsaW51eCl8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1c3xyYXNwYmlhbikoPzpcXHNnbnVcXC9saW51eCk/KD86XFxzbGludXgpP1tcXC9cXHMtXT8oPyFjaHJvbXxwYWNrYWdlKShbXFx3XFwuLV0qKS9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKikvaSwvKGdudSlcXHM/KFtcXHdcXC5dKikvaSwvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oPyFhbWR8W2l4MzQ2XXsxLDJ9ODYpKFtcXHdcXC5dKikvaSwvKGhhaWt1KVxccyhcXHcrKS9pXSxbTkFNRSxWRVJTSU9OXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5cXGRdKikvaV0sW1tOQU1FLFwiU29sYXJpc1wiXSxWRVJTSU9OXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0qKS9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtc3xmdWNoc2lhKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKikvaV0sW05BTUUsVkVSU0lPTl1dfTt2YXIgVUFQYXJzZXI9ZnVuY3Rpb24odWEsZXh0ZW5zaW9ucyl7aWYodHlwZW9mIHVhPT09XCJvYmplY3RcIil7ZXh0ZW5zaW9ucz11YTt1YT11bmRlZmluZWR9aWYoISh0aGlzIGluc3RhbmNlb2YgVUFQYXJzZXIpKXtyZXR1cm4gbmV3IFVBUGFyc2VyKHVhLGV4dGVuc2lvbnMpLmdldFJlc3VsdCgpfXZhciBfdWE9dWF8fCh0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIiYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ/d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ6RU1QVFkpO3ZhciBfcmd4bWFwPWV4dGVuc2lvbnM/dXRpbC5leHRlbmQocmVnZXhlcyxleHRlbnNpb25zKTpyZWdleGVzO3RoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBfYnJvd3Nlcj17bmFtZTp1bmRlZmluZWQsdmVyc2lvbjp1bmRlZmluZWR9O21hcHBlci5yZ3guY2FsbChfYnJvd3NlcixfdWEsX3JneG1hcC5icm93c2VyKTtfYnJvd3Nlci5tYWpvcj11dGlsLm1ham9yKF9icm93c2VyLnZlcnNpb24pO3JldHVybiBfYnJvd3Nlcn07dGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXt2YXIgX2NwdT17YXJjaGl0ZWN0dXJlOnVuZGVmaW5lZH07bWFwcGVyLnJneC5jYWxsKF9jcHUsX3VhLF9yZ3htYXAuY3B1KTtyZXR1cm4gX2NwdX07dGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXt2YXIgX2RldmljZT17dmVuZG9yOnVuZGVmaW5lZCxtb2RlbDp1bmRlZmluZWQsdHlwZTp1bmRlZmluZWR9O21hcHBlci5yZ3guY2FsbChfZGV2aWNlLF91YSxfcmd4bWFwLmRldmljZSk7cmV0dXJuIF9kZXZpY2V9O3RoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7dmFyIF9lbmdpbmU9e25hbWU6dW5kZWZpbmVkLHZlcnNpb246dW5kZWZpbmVkfTttYXBwZXIucmd4LmNhbGwoX2VuZ2luZSxfdWEsX3JneG1hcC5lbmdpbmUpO3JldHVybiBfZW5naW5lfTt0aGlzLmdldE9TPWZ1bmN0aW9uKCl7dmFyIF9vcz17bmFtZTp1bmRlZmluZWQsdmVyc2lvbjp1bmRlZmluZWR9O21hcHBlci5yZ3guY2FsbChfb3MsX3VhLF9yZ3htYXAub3MpO3JldHVybiBfb3N9O3RoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19O3RoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gX3VhfTt0aGlzLnNldFVBPWZ1bmN0aW9uKHVhKXtfdWE9dHlwZW9mIHVhPT09U1RSX1RZUEUmJnVhLmxlbmd0aD5VQV9NQVhfTEVOR1RIP3V0aWwudHJpbSh1YSxVQV9NQVhfTEVOR1RIKTp1YTtyZXR1cm4gdGhpc307dGhpcy5zZXRVQShfdWEpO3JldHVybiB0aGlzfTtVQVBhcnNlci5WRVJTSU9OPUxJQlZFUlNJT047VUFQYXJzZXIuQlJPV1NFUj17TkFNRTpOQU1FLE1BSk9SOk1BSk9SLFZFUlNJT046VkVSU0lPTn07VUFQYXJzZXIuQ1BVPXtBUkNISVRFQ1RVUkU6QVJDSElURUNUVVJFfTtVQVBhcnNlci5ERVZJQ0U9e01PREVMOk1PREVMLFZFTkRPUjpWRU5ET1IsVFlQRTpUWVBFLENPTlNPTEU6Q09OU09MRSxNT0JJTEU6TU9CSUxFLFNNQVJUVFY6U01BUlRUVixUQUJMRVQ6VEFCTEVULFdFQVJBQkxFOldFQVJBQkxFLEVNQkVEREVEOkVNQkVEREVEfTtVQVBhcnNlci5FTkdJTkU9e05BTUU6TkFNRSxWRVJTSU9OOlZFUlNJT059O1VBUGFyc2VyLk9TPXtOQU1FOk5BTUUsVkVSU0lPTjpWRVJTSU9OfTtpZih0eXBlb2YgZXhwb3J0cyE9PVVOREVGX1RZUEUpe2lmKHR5cGVvZiBtb2R1bGUhPT1VTkRFRl9UWVBFJiZtb2R1bGUuZXhwb3J0cyl7ZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1VQVBhcnNlcn1leHBvcnRzLlVBUGFyc2VyPVVBUGFyc2VyfWVsc2V7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFVBUGFyc2VyfSl9ZWxzZSBpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7d2luZG93LlVBUGFyc2VyPVVBUGFyc2VyfX12YXIgJD10eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIiYmKHdpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0byk7aWYoJCYmISQudWEpe3ZhciBwYXJzZXI9bmV3IFVBUGFyc2VyOyQudWE9cGFyc2VyLmdldFJlc3VsdCgpOyQudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlci5nZXRVQSgpfTskLnVhLnNldD1mdW5jdGlvbih1YXN0cmluZyl7cGFyc2VyLnNldFVBKHVhc3RyaW5nKTt2YXIgcmVzdWx0PXBhcnNlci5nZXRSZXN1bHQoKTtmb3IodmFyIHByb3AgaW4gcmVzdWx0KXskLnVhW3Byb3BdPXJlc3VsdFtwcm9wXX19fX0pKHR5cGVvZiB3aW5kb3c9PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9