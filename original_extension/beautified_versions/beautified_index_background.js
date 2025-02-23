var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
    __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
        exports: {}
    }).exports, mod), mod.exports
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
        for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    return to
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: !0
}) : target, mod));
var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
        (function(global, factory) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], factory);
            else if (typeof exports < "u") factory(module);
            else {
                var mod = {
                    exports: {}
                };
                factory(mod), global.browser = mod.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports, function(module2) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.",
                    wrapAPIs = extensionAPIs => {
                        let apiMetadata = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class DefaultWeakMap extends WeakMap {
                            constructor(createItem, items = void 0) {
                                super(items), this.createItem = createItem
                            }
                            get(key) {
                                return this.has(key) || this.set(key, this.createItem(key)), super.get(key)
                            }
                        }
                        let isThenable = value => value && typeof value == "object" && typeof value.then == "function",
                            makeCallback = (promise, metadata) => (...callbackArgs) => {
                                extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== !1 ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs)
                            },
                            pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments",
                            wrapAsyncFunction = (name, metadata) => function(target, ...args) {
                                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                                return new Promise((resolve, reject) => {
                                    if (metadata.fallbackToNoCallback) try {
                                        target[name](...args, makeCallback({
                                            resolve,
                                            reject
                                        }, metadata))
                                    } catch (cbError) {
                                        console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError), target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0, resolve()
                                    } else metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
                                        resolve,
                                        reject
                                    }, metadata))
                                })
                            },
                            wrapMethod = (target, method, wrapper) => new Proxy(method, {
                                apply(targetMethod, thisObj, args) {
                                    return wrapper.call(thisObj, target, ...args)
                                }
                            }),
                            hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty),
                            wrapObject = (target, wrappers = {}, metadata = {}) => {
                                let cache = Object.create(null),
                                    handlers = {
                                        has(proxyTarget2, prop) {
                                            return prop in target || prop in cache
                                        },
                                        get(proxyTarget2, prop, receiver) {
                                            if (prop in cache) return cache[prop];
                                            if (!(prop in target)) return;
                                            let value = target[prop];
                                            if (typeof value == "function")
                                                if (typeof wrappers[prop] == "function") value = wrapMethod(target, target[prop], wrappers[prop]);
                                                else if (hasOwnProperty(metadata, prop)) {
                                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                                value = wrapMethod(target, target[prop], wrapper)
                                            } else value = value.bind(target);
                                            else if (typeof value == "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]);
                                            else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]);
                                            else return Object.defineProperty(cache, prop, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return target[prop]
                                                },
                                                set(value2) {
                                                    target[prop] = value2
                                                }
                                            }), value;
                                            return cache[prop] = value, value
                                        },
                                        set(proxyTarget2, prop, value, receiver) {
                                            return prop in cache ? cache[prop] = value : target[prop] = value, !0
                                        },
                                        defineProperty(proxyTarget2, prop, desc) {
                                            return Reflect.defineProperty(cache, prop, desc)
                                        },
                                        deleteProperty(proxyTarget2, prop) {
                                            return Reflect.deleteProperty(cache, prop)
                                        }
                                    },
                                    proxyTarget = Object.create(target);
                                return new Proxy(proxyTarget, handlers)
                            },
                            wrapEvent = wrapperMap => ({
                                addListener(target, listener, ...args) {
                                    target.addListener(wrapperMap.get(listener), ...args)
                                },
                                hasListener(target, listener) {
                                    return target.hasListener(wrapperMap.get(listener))
                                },
                                removeListener(target, listener) {
                                    target.removeListener(wrapperMap.get(listener))
                                }
                            }),
                            onRequestFinishedWrappers = new DefaultWeakMap(listener => typeof listener != "function" ? listener : function(req) {
                                let wrappedReq = wrapObject(req, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                listener(wrappedReq)
                            }),
                            onMessageWrappers = new DefaultWeakMap(listener => typeof listener != "function" ? listener : function(message, sender, sendResponse) {
                                let didCallSendResponse = !1,
                                    wrappedSendResponse, sendResponsePromise = new Promise(resolve => {
                                        wrappedSendResponse = function(response) {
                                            didCallSendResponse = !0, resolve(response)
                                        }
                                    }),
                                    result;
                                try {
                                    result = listener(message, sender, wrappedSendResponse)
                                } catch (err) {
                                    result = Promise.reject(err)
                                }
                                let isResultThenable = result !== !0 && isThenable(result);
                                if (result !== !0 && !isResultThenable && !didCallSendResponse) return !1;
                                let sendPromisedResult = promise => {
                                    promise.then(msg => {
                                        sendResponse(msg)
                                    }, error => {
                                        let message2;
                                        error && (error instanceof Error || typeof error.message == "string") ? message2 = error.message : message2 = "An unexpected error occurred", sendResponse({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: message2
                                        })
                                    }).catch(err => {
                                        console.error("Failed to send onMessage rejected reply", err)
                                    })
                                };
                                return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0
                            }),
                            wrappedSendMessageCallback = ({
                                reject,
                                resolve
                            }, reply) => {
                                extensionAPIs.runtime.lastError ? extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message)) : reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply)
                            },
                            wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
                                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                                return new Promise((resolve, reject) => {
                                    let wrappedCb = wrappedSendMessageCallback.bind(null, {
                                        resolve,
                                        reject
                                    });
                                    args.push(wrappedCb), apiNamespaceObj.sendMessage(...args)
                                })
                            },
                            staticWrappers = {
                                devtools: {
                                    network: {
                                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                                    }
                                },
                                runtime: {
                                    onMessage: wrapEvent(onMessageWrappers),
                                    onMessageExternal: wrapEvent(onMessageWrappers),
                                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            settingMetadata = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return apiMetadata.privacy = {
                            network: {
                                "*": settingMetadata
                            },
                            services: {
                                "*": settingMetadata
                            },
                            websites: {
                                "*": settingMetadata
                            }
                        }, wrapObject(extensionAPIs, staticWrappers, apiMetadata)
                    };
                module2.exports = wrapAPIs(chrome)
            } else module2.exports = globalThis.browser
        })
    }
});
var require_browser_polyfill2 = __commonJS({
    "node_modules/webext-bridge/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
        (function(global, factory) {
            if (typeof define == "function" && define.amd) define("webextension-polyfill", ["module"], factory);
            else if (typeof exports < "u") factory(module);
            else {
                var mod = {
                    exports: {}
                };
                factory(mod), global.browser = mod.exports
            }
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports, function(module2) {
            "use strict";
            if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.",
                    SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    wrapAPIs = extensionAPIs => {
                        let apiMetadata = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class DefaultWeakMap extends WeakMap {
                            constructor(createItem, items = void 0) {
                                super(items), this.createItem = createItem
                            }
                            get(key) {
                                return this.has(key) || this.set(key, this.createItem(key)), super.get(key)
                            }
                        }
                        let isThenable = value => value && typeof value == "object" && typeof value.then == "function",
                            makeCallback = (promise, metadata) => (...callbackArgs) => {
                                extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== !1 ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs)
                            },
                            pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments",
                            wrapAsyncFunction = (name, metadata) => function(target, ...args) {
                                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                                return new Promise((resolve, reject) => {
                                    if (metadata.fallbackToNoCallback) try {
                                        target[name](...args, makeCallback({
                                            resolve,
                                            reject
                                        }, metadata))
                                    } catch (cbError) {
                                        console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError), target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0, resolve()
                                    } else metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
                                        resolve,
                                        reject
                                    }, metadata))
                                })
                            },
                            wrapMethod = (target, method, wrapper) => new Proxy(method, {
                                apply(targetMethod, thisObj, args) {
                                    return wrapper.call(thisObj, target, ...args)
                                }
                            }),
                            hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty),
                            wrapObject = (target, wrappers = {}, metadata = {}) => {
                                let cache = Object.create(null),
                                    handlers = {
                                        has(proxyTarget2, prop) {
                                            return prop in target || prop in cache
                                        },
                                        get(proxyTarget2, prop, receiver) {
                                            if (prop in cache) return cache[prop];
                                            if (!(prop in target)) return;
                                            let value = target[prop];
                                            if (typeof value == "function")
                                                if (typeof wrappers[prop] == "function") value = wrapMethod(target, target[prop], wrappers[prop]);
                                                else if (hasOwnProperty(metadata, prop)) {
                                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                                value = wrapMethod(target, target[prop], wrapper)
                                            } else value = value.bind(target);
                                            else if (typeof value == "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) value = wrapObject(value, wrappers[prop], metadata[prop]);
                                            else if (hasOwnProperty(metadata, "*")) value = wrapObject(value, wrappers[prop], metadata["*"]);
                                            else return Object.defineProperty(cache, prop, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return target[prop]
                                                },
                                                set(value2) {
                                                    target[prop] = value2
                                                }
                                            }), value;
                                            return cache[prop] = value, value
                                        },
                                        set(proxyTarget2, prop, value, receiver) {
                                            return prop in cache ? cache[prop] = value : target[prop] = value, !0
                                        },
                                        defineProperty(proxyTarget2, prop, desc) {
                                            return Reflect.defineProperty(cache, prop, desc)
                                        },
                                        deleteProperty(proxyTarget2, prop) {
                                            return Reflect.deleteProperty(cache, prop)
                                        }
                                    },
                                    proxyTarget = Object.create(target);
                                return new Proxy(proxyTarget, handlers)
                            },
                            wrapEvent = wrapperMap => ({
                                addListener(target, listener, ...args) {
                                    target.addListener(wrapperMap.get(listener), ...args)
                                },
                                hasListener(target, listener) {
                                    return target.hasListener(wrapperMap.get(listener))
                                },
                                removeListener(target, listener) {
                                    target.removeListener(wrapperMap.get(listener))
                                }
                            }),
                            onRequestFinishedWrappers = new DefaultWeakMap(listener => typeof listener != "function" ? listener : function(req) {
                                let wrappedReq = wrapObject(req, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                listener(wrappedReq)
                            }),
                            loggedSendResponseDeprecationWarning = !1,
                            onMessageWrappers = new DefaultWeakMap(listener => typeof listener != "function" ? listener : function(message, sender, sendResponse) {
                                let didCallSendResponse = !1,
                                    wrappedSendResponse, sendResponsePromise = new Promise(resolve => {
                                        wrappedSendResponse = function(response) {
                                            loggedSendResponseDeprecationWarning || (console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack), loggedSendResponseDeprecationWarning = !0), didCallSendResponse = !0, resolve(response)
                                        }
                                    }),
                                    result;
                                try {
                                    result = listener(message, sender, wrappedSendResponse)
                                } catch (err) {
                                    result = Promise.reject(err)
                                }
                                let isResultThenable = result !== !0 && isThenable(result);
                                if (result !== !0 && !isResultThenable && !didCallSendResponse) return !1;
                                let sendPromisedResult = promise => {
                                    promise.then(msg => {
                                        sendResponse(msg)
                                    }, error => {
                                        let message2;
                                        error && (error instanceof Error || typeof error.message == "string") ? message2 = error.message : message2 = "An unexpected error occurred", sendResponse({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: message2
                                        })
                                    }).catch(err => {
                                        console.error("Failed to send onMessage rejected reply", err)
                                    })
                                };
                                return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0
                            }),
                            wrappedSendMessageCallback = ({
                                reject,
                                resolve
                            }, reply) => {
                                extensionAPIs.runtime.lastError ? extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message)) : reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply)
                            },
                            wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
                                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                                return new Promise((resolve, reject) => {
                                    let wrappedCb = wrappedSendMessageCallback.bind(null, {
                                        resolve,
                                        reject
                                    });
                                    args.push(wrappedCb), apiNamespaceObj.sendMessage(...args)
                                })
                            },
                            staticWrappers = {
                                devtools: {
                                    network: {
                                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                                    }
                                },
                                runtime: {
                                    onMessage: wrapEvent(onMessageWrappers),
                                    onMessageExternal: wrapEvent(onMessageWrappers),
                                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            settingMetadata = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return apiMetadata.privacy = {
                            network: {
                                "*": settingMetadata
                            },
                            services: {
                                "*": settingMetadata
                            },
                            websites: {
                                "*": settingMetadata
                            }
                        }, wrapObject(extensionAPIs, staticWrappers, apiMetadata)
                    };
                module2.exports = wrapAPIs(chrome)
            } else module2.exports = globalThis.browser
        })
    }
});
var require_tiny_uid = __commonJS({
    "node_modules/tiny-uid/index.js"(exports, module) {
        var generator = base => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
                let num = crypto.getRandomValues(new Uint8Array(1))[0];
                return (num >= base ? num % base : num).toString(base)
            } : () => Math.floor(Math.random() * base).toString(base),
            uid = (length = 7, hex = !1) => Array.from({
                length
            }, generator(hex ? 16 : 36)).join("");
        module.exports = uid;
        module.exports.default = uid
    }
});
var import_webextension_polyfill3 = __toESM(require_browser_polyfill());
var createNanoEvents = () => ({
    events: {},
    emit(event, ...args) {
        (this.events[event] || []).forEach(i => i(...args))
    },
    on(event, cb) {
        return (this.events[event] = this.events[event] || []).push(cb), () => this.events[event] = (this.events[event] || []).filter(i => i !== cb)
    }
});
var import_webextension_polyfill = __toESM(require_browser_polyfill2(), 1);
var commonProperties = [{
        property: "name",
        enumerable: !1
    }, {
        property: "message",
        enumerable: !1
    }, {
        property: "stack",
        enumerable: !1
    }, {
        property: "code",
        enumerable: !0
    }],
    toJsonWasCalled = Symbol(".toJSON was called"),
    toJSON = from => {
        from[toJsonWasCalled] = !0;
        let json = from.toJSON();
        return delete from[toJsonWasCalled], json
    },
    destroyCircular = ({
        from,
        seen,
        to_,
        forceEnumerable,
        maxDepth,
        depth
    }) => {
        let to = to_ || (Array.isArray(from) ? [] : {});
        if (seen.push(from), depth >= maxDepth) return to;
        if (typeof from.toJSON == "function" && from[toJsonWasCalled] !== !0) return toJSON(from);
        for (let [key, value] of Object.entries(from)) {
            if (typeof Buffer == "function" && Buffer.isBuffer(value)) {
                to[key] = "[object Buffer]";
                continue
            }
            if (value !== null && typeof value == "object" && typeof value.pipe == "function") {
                to[key] = "[object Stream]";
                continue
            }
            if (typeof value != "function") {
                if (!value || typeof value != "object") {
                    to[key] = value;
                    continue
                }
                if (!seen.includes(from[key])) {
                    depth++, to[key] = destroyCircular({
                        from: from[key],
                        seen: [...seen],
                        forceEnumerable,
                        maxDepth,
                        depth
                    });
                    continue
                }
                to[key] = "[Circular]"
            }
        }
        for (let {
                property,
                enumerable
            }
            of commonProperties) typeof from[property] == "string" && Object.defineProperty(to, property, {
            value: from[property],
            enumerable: forceEnumerable ? !0 : enumerable,
            configurable: !0,
            writable: !0
        });
        return to
    };

function serializeError(value, options = {}) {
    let {
        maxDepth = Number.POSITIVE_INFINITY
    } = options;
    return typeof value == "object" && value !== null ? destroyCircular({
        from: value,
        seen: [],
        forceEnumerable: !0,
        maxDepth,
        depth: 0
    }) : typeof value == "function" ? `[Function: ${value.name||"anonymous"}]` : value
}
var import_tiny_uid = __toESM(require_tiny_uid(), 1),
    import_webextension_polyfill2 = __toESM(require_browser_polyfill2(), 1),
    import_tiny_uid2 = __toESM(require_tiny_uid(), 1),
    import_tiny_uid3 = __toESM(require_tiny_uid(), 1);
var ENDPOINT_RE = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/,
    parseEndpoint = endpoint => {
        let [, context2, tabId, frameId] = endpoint.match(ENDPOINT_RE) || [];
        return {
            context: context2,
            tabId: +tabId,
            frameId: frameId ? +frameId : void 0
        }
    };
var hasAPI = nsps => import_webextension_polyfill2.default[nsps],
    getBackgroundPageType = () => {
        var _a, _b, _c;
        let manifest = import_webextension_polyfill2.default.runtime.getManifest();
        if (typeof window > "u") return "background";
        let popupPage = ((_a = manifest.browser_action) == null ? void 0 : _a.default_popup) || ((_b = manifest.action) == null ? void 0 : _b.default_popup);
        return popupPage && new URL(import_webextension_polyfill2.default.runtime.getURL(popupPage)).pathname === window.location.pathname ? "popup" : (_c = manifest.options_ui) != null && _c.page && new URL(import_webextension_polyfill2.default.runtime.getURL(manifest.options_ui.page)).pathname === window.location.pathname ? "options" : "background"
    },
    context = hasAPI("devtools") ? "devtools" : hasAPI("tabs") ? getBackgroundPageType() : hasAPI("extension") ? "content-script" : typeof document < "u" ? "window" : null,
    runtimeId = (0, import_tiny_uid.default)(),
    openTransactions = new Map,
    onMessageListeners = new Map,
    messageQueue = new Set,
    portMap = new Map,
    port = null,
    namespace, isWindowMessagingAllowed;
initIntercoms();

function initIntercoms() {
    if (context === null) throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
    if ((context === "window" || context === "content-script") && window.addEventListener("message", handleWindowOnMessage), context === "content-script" && top === window && (port = import_webextension_polyfill.default.runtime.connect(), port.onMessage.addListener(message => {
            routeMessage(message)
        }), port.onDisconnect.addListener(() => {
            port = null, initIntercoms()
        })), context === "content-script" && top !== window && (port = import_webextension_polyfill.default.runtime.connect(), port.onMessage.addListener(message => {
            routeMessage(message)
        }), port.onDisconnect.addListener(() => {
            port = null, initIntercoms()
        })), context === "devtools") {
        let {
            tabId
        } = import_webextension_polyfill.default.devtools.inspectedWindow, name = `devtools@${tabId}`;
        port = import_webextension_polyfill.default.runtime.connect(void 0, {
            name
        }), port.onMessage.addListener(message => {
            routeMessage(message)
        }), port.onDisconnect.addListener(() => {
            port = null, initIntercoms()
        })
    }
    if (context === "popup" || context === "options") {
        let name = `${context}`;
        port = import_webextension_polyfill.default.runtime.connect(void 0, {
            name
        }), port.onMessage.addListener(message => {
            routeMessage(message)
        }), port.onDisconnect.addListener(() => {
            port = null, initIntercoms()
        })
    }
    context === "background" && import_webextension_polyfill.default.runtime.onConnect.addListener(incomingPort => {
        let portId = incomingPort.name || `content-script@${incomingPort.sender.tab.id}`,
            portFrame = incomingPort.sender.frameId;
        portFrame && (portId = `${portId}.${portFrame}`);
        let {
            context: context2,
            tabId: linkedTabId,
            frameId: linkedFrameId
        } = parseEndpoint(portId);
        !linkedTabId && context2 !== "popup" && context2 !== "options" || (portMap.set(portId, incomingPort), messageQueue.forEach(queuedMsg => {
            queuedMsg.resolvedDestination === portId && (incomingPort.postMessage(queuedMsg.message), messageQueue.delete(queuedMsg))
        }), incomingPort.onDisconnect.addListener(() => {
            portMap.delete(portId)
        }), incomingPort.onMessage.addListener(message => {
            var _a;
            (_a = message?.origin) != null && _a.context && (message.origin.tabId = linkedTabId, message.origin.frameId = linkedFrameId, routeMessage(message))
        }))
    })
}

function routeMessage(message) {
    let {
        origin,
        destination
    } = message;
    if (!message.hops.includes(runtimeId) && (message.hops.push(runtimeId), !(context === "content-script" && [destination, origin].some(endpoint => endpoint?.context === "window") && !isWindowMessagingAllowed))) {
        if (!destination) return handleInboundMessage(message);
        if (destination.context) {
            if (context === "window") return routeMessageThroughWindow(window, message);
            if (context === "content-script" && destination.context === "window") return message.destination = null, routeMessageThroughWindow(window, message);
            if (["devtools", "content-script", "popup", "options"].includes(context)) return destination.context === "background" && (message.destination = null), port.postMessage(message);
            if (context === "background") {
                let {
                    context: destName,
                    tabId: destTabId,
                    frameId: destFrameId
                } = destination, {
                    tabId: srcTabId
                } = origin;
                destName !== "window" ? message.destination = null : message.destination.tabId = null;
                let resolvedDestination = ["popup", "options"].includes(destName) ? destName : `${destName==="window"?"content-script":destName}@${destTabId||srcTabId}`;
                destFrameId && (resolvedDestination = `${resolvedDestination}.${destFrameId}`);
                let destPort = portMap.get(resolvedDestination);
                destPort ? destPort.postMessage(message) : messageQueue.add({
                    resolvedDestination,
                    message
                })
            }
        }
    }
}
async function handleInboundMessage(message) {
    let {
        transactionId,
        messageID,
        messageType
    } = message, handleReply = () => {
        let transactionP = openTransactions.get(transactionId);
        if (transactionP) {
            let {
                err,
                data
            } = message;
            if (err) {
                let dehydratedErr = err,
                    errCtr = self[dehydratedErr.name],
                    hydratedErr = new(typeof errCtr == "function" ? errCtr : Error)(dehydratedErr.message);
                for (let prop in dehydratedErr) hydratedErr[prop] = dehydratedErr[prop];
                transactionP.reject(hydratedErr)
            } else transactionP.resolve(data);
            openTransactions.delete(transactionId)
        }
    }, handleNewMessage = async () => {
        let reply, err, noHandlerFoundError = !1;
        try {
            let cb = onMessageListeners.get(messageID);
            if (typeof cb == "function") reply = await cb({
                sender: message.origin,
                id: messageID,
                data: message.data,
                timestamp: message.timestamp
            });
            else throw noHandlerFoundError = !0, new Error(`[webext-bridge] No handler registered in '${context}' to accept messages with id '${messageID}'`)
        } catch (error) {
            err = error
        } finally {
            if (err && (message.err = serializeError(err)), routeMessage({
                    ...message,
                    messageType: "reply",
                    data: reply,
                    origin: {
                        context,
                        tabId: null
                    },
                    destination: message.origin,
                    hops: []
                }), err && !noHandlerFoundError) throw reply
        }
    };
    switch (messageType) {
        case "reply":
            return handleReply();
        case "message":
            return handleNewMessage()
    }
}
async function handleWindowOnMessage({
    data,
    ports
}) {
    if (!(context === "content-script" && !isWindowMessagingAllowed)) {
        if (data.cmd === "__crx_bridge_verify_listening" && data.scope === namespace && data.context !== context) ports[0].postMessage(!0);
        else if (data.cmd === "__crx_bridge_route_message" && data.scope === namespace && data.context !== context) {
            let {
                payload
            } = data;
            context === "content-script" && (payload.origin = {
                context: "window",
                tabId: null
            }), routeMessage(payload)
        }
    }
}

function routeMessageThroughWindow(win, msg) {
    ensureNamespaceSet();
    let channel = new MessageChannel,
        retry = setTimeout(() => {
            channel.port1.onmessage = null, routeMessageThroughWindow(win, msg)
        }, 300);
    channel.port1.onmessage = () => {
        clearTimeout(retry), win.postMessage({
            cmd: "__crx_bridge_route_message",
            scope: namespace,
            context,
            payload: msg
        }, "*")
    }, win.postMessage({
        cmd: "__crx_bridge_verify_listening",
        scope: namespace,
        context
    }, "*", [channel.port2])
}

function ensureNamespaceSet() {
    if (typeof namespace != "string" || namespace.length === 0) throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``)
}

function onMessage(messageID, callback) {
    onMessageListeners.set(messageID, callback)
}
async function sendMessage(messageID, data, destination = "background") {
    let endpoint = typeof destination == "string" ? parseEndpoint(destination) : destination,
        errFn = "Bridge#sendMessage ->";
    if (!endpoint.context) throw new TypeError(`${errFn} Destination must be any one of known destinations`);
    if (context === "background") {
        let {
            context: dest,
            tabId: destTabId
        } = endpoint;
        if (dest !== "background" && !destTabId) throw new TypeError(`${errFn} When sending messages from background page, use @tabId syntax to target specific tab`)
    }
    return new Promise((resolve, reject) => {
        let payload = {
            messageID,
            data,
            destination: endpoint,
            messageType: "message",
            transactionId: (0, import_tiny_uid2.default)(),
            origin: {
                context,
                tabId: null
            },
            hops: [],
            timestamp: Date.now()
        };
        openTransactions.set(payload.transactionId, {
            resolve,
            reject
        }), routeMessage(payload)
    })
}
var _Stream = class {
        constructor(t) {
            this.handleStreamClose = () => {
                this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {})
            }, this.internalInfo = t, this.emitter = createNanoEvents(), this.isClosed = !1, _Stream.initDone || (onMessage("__crx_bridge_stream_transfer__", msg => {
                let {
                    streamId,
                    streamTransfer,
                    action
                } = msg.data, stream = _Stream.openStreams.get(streamId);
                stream && !stream.isClosed && (action === "transfer" && stream.emitter.emit("message", streamTransfer), action === "close" && (_Stream.openStreams.delete(streamId), stream.handleStreamClose()))
            }), _Stream.initDone = !0), _Stream.openStreams.set(t.streamId, this)
        }
        get info() {
            return this.internalInfo
        }
        send(msg) {
            if (this.isClosed) throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
            sendMessage("__crx_bridge_stream_transfer__", {
                streamId: this.internalInfo.streamId,
                streamTransfer: msg,
                action: "transfer"
            }, this.internalInfo.endpoint)
        }
        close(msg) {
            msg && this.send(msg), this.handleStreamClose(), sendMessage("__crx_bridge_stream_transfer__", {
                streamId: this.internalInfo.streamId,
                streamTransfer: null,
                action: "close"
            }, this.internalInfo.endpoint)
        }
        onMessage(callback) {
            return this.getDisposable("message", callback)
        }
        onClose(callback) {
            return this.getDisposable("closed", callback)
        }
        getDisposable(event, callback) {
            let off = this.emitter.on(event, callback);
            return Object.assign(off, {
                dispose: off,
                close: off
            })
        }
    },
    Stream = _Stream;
Stream.initDone = !1;
Stream.openStreams = new Map;
var onOpenStreamCallbacks = new Map,
    streamyEmitter = createNanoEvents();
onMessage("__crx_bridge_stream_open__", message => new Promise(resolve => {
    let {
        sender,
        data
    } = message, {
        channel
    } = data, watching = !1, off = () => {}, readyup = () => {
        let callback = onOpenStreamCallbacks.get(channel);
        typeof callback == "function" ? (callback(new Stream({
            ...data,
            endpoint: sender
        })), watching && off(), resolve(!0)) : watching || (watching = !0, off = streamyEmitter.on("did-change-stream-callbacks", readyup))
    };
    readyup()
}));
var config = {
        InsGrow: {
            id: "hplclbeljhejdedfgejofghcipfpfgbf",
            version: "4.7.2",
            name: "InsGrow",
            displayName: "InsGrow - IG automation tool",
            description: "Engage with Instagram followers & unfollow fake followers automatically",
            description_mini: "Instagram Automation",
            mixpanel_token: "4e37054557ad2029bcab23a3facc84b6"
        },
        InsFo: {
            id: "bckleejkdhlponanidmjfjdigpahlado",
            version: "4.7.4",
            name: "InsFo",
            displayName: "InsFo - IG follower export & analysis tool",
            description: "Export Instagram Follower/Following/Comment/Tag/Location and Analyze.",
            description_mini: "Export Followers",
            mixpanel_token: "f4ffe3078005100e7250bd60204616e3"
        },
        InsC: {
            id: "hdfhpnjnlgekgjmniifdieiflhfdkmlk",
            version: "4.7.2",
            name: "InsC",
            displayName: "InsC - Instagram comment picker & exporter",
            description: "Instagram giveaway picker & IG Comments to Excel Exporter",
            description_mini: "Export Comments",
            youtube: "https://www.youtube.com/watch?v=QotwABRip24",
            mixpanel_token: "75d30a30fada7cfaebf3f1d50ed1066a"
        },
        InsL: {
            id: "iiblfonkagipdojommmomopjldpibdbb",
            version: "4.7.2",
            name: "InsL",
            displayName: "InsL - Instagram like picker & exporter",
            description: "Instagram giveaway picker & IG likes to Excel Exporter",
            description_mini: "Export Likes",
            youtube: "https://www.youtube.com/watch?v=4PVs-61H-KM",
            mixpanel_token: "74db5e7805bcdab479f2218223211467"
        },
        InsE: {
            id: "hboikjnbkhkjmllgdcflmbcojbpklcca",
            version: "4.7.2",
            name: "InsE",
            displayName: "InsE - Instagram email finder & exporter",
            description: "Scrape pubilc email and phone of instagram followers and export to csv/excel",
            description_mini: "Export Emails/Phones",
            mixpanel_token: "9b46566a4dd8261190f59265b08a8ab3"
        },
        InsTF: {
            id: "deppcpikimfefmjmdpalknbdfmhdlein",
            version: "2.3.2",
            name: "InsTF",
            displayName: "InsTF - Instagram follower & unfollower tracker",
            description: "Analyze your IG followers to identify and unfollow those who do not follow you back.",
            description_mini: "Track Followers/Unfollowers",
            youtube: "",
            mixpanel_token: "8f728f9dda62790d6831ca89119dee88"
        },
        InsTest: {
            id: "lbljibhfekjjjkgophmibhddjmdkkdfp",
            version: "4.1.5",
            name: "InsFo",
            displayName: "InsTest - All in one IG export tool",
            description: "Export Instagram Follower/Following/Comment/Likes/Tag/Location to CSV/Excel.",
            description_mini: "Export Followers",
            mixpanel_token: "f4ffe3078005100e7250bd60204616e3"
        }
    },
    ext = config.InsFo,
    exts = Object.values(config).filter(i => i.id != config.InsTest.id);
var isFirefox = navigator.userAgent.includes("Firefox"),
    domain = "https://insfo.listmore.info",
    linkParams = `ext_name=${ext.name}&ext_version=${ext.version}`;
var getRandomValues, rnds8 = new Uint8Array(16);

function rng() {
    if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !getRandomValues)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return getRandomValues(rnds8)
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));

function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase()
}
var randomUUID = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    native_default = {
        randomUUID
    };

function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) return native_default.randomUUID();
    options = options || {};
    let rnds = options.random || (options.rng || rng)();
    if (rnds[6] = rnds[6] & 15 | 64, rnds[8] = rnds[8] & 63 | 128, buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
        return buf
    }
    return unsafeStringify(rnds)
}
var v4_default = v4;
import_webextension_polyfill3.default.runtime.onInstalled.addListener(async details => {
    if (details.reason == "update" && console.log("Extension updated"), details.reason == "install") {
        console.log("Extension installed");
        let anonymousId = v4_default();
        import_webextension_polyfill3.default.storage.local.set({
            anonymousId
        }), import_webextension_polyfill3.default.tabs.create({
            url: `${domain}/welcome?${linkParams}&distinct_id=${anonymousId}`
        })
    }
    import_webextension_polyfill3.default.runtime.setUninstallURL(`${domain}/uninstall?${linkParams}`)
});
onMessage("get-supabase-token", async ({
    sender
}) => {
    let accessToken = await import_webextension_polyfill3.default.cookies.get({
            name: "sb-access-token",
            url: domain
        }) || {},
        refreshToken = await import_webextension_polyfill3.default.cookies.get({
            name: "sb-refresh-token",
            url: domain
        }) || {};
    if (console.log("get-supabase-token", accessToken.value, refreshToken.value), !accessToken.value || !refreshToken.value) {
        let {
            syncWebSession
        } = await import_webextension_polyfill3.default.storage.local.get("syncWebSession");
        if (syncWebSession) return console.log("get syncWebSession", syncWebSession), syncWebSession
    }
    return {
        access_token: accessToken.value,
        refresh_token: refreshToken.value
    }
});