/**
 * @name ShowSessions
 * @version 1.1.0
 * @description Shows your current sessions with a chat command '/sessions' or in the accounts panel.
 * @author Strencher
 * @source https://github.com/Strencher/BetterDiscordStuff/tree/master/ShowSessions
 * @updateUrl https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/ShowSessions/ShowSessions.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	"info": {
		"name": "ShowSessions",
		"version": "1.1.0",
		"description": "Shows your current sessions with a chat command '/sessions' or in the accounts panel.",
		"authors": [{
			"name": "Strencher",
			"discord_id": "415849376598982656",
			"github_username": "Strencher"
		}],
		"github": "https://github.com/Strencher/BetterDiscordStuff/tree/master/ShowSessions",
		"github_raw": "https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/ShowSessions/ShowSessions.plugin.js"
	},
	"changelog": [{
			"type": "fixed",
			"title": "Fixes, Fixes, Fixes...",
			"items": [
				"Fixed avatar resolution being low res",
				"Fixed some styling issues",
				"Fixed chat commands. (Thanks to JadeMin!)"
			]
		},
		{
			"type": "added",
			"title": "What's new?",
			"items": [
				"Added notifications for when a session is being added/removed/updated. You can adjust that in the settings."
			]
		}
	],
	"build": {
		"zlibrary": true,
		"copy": true,
		"production": false,
		"scssHash": false,
		"alias": {
			"components": "components/index.js"
		},
		"release": {
			"source": true,
			"readme": true,
			"contributors": null,
			"public": true,
			"previews": [{
				"name": "Preview",
				"src": "assets/preview.png"
			}]
		}
	}
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	(() => {
		"use strict";
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(Object.assign(document.createElement("style"), {
					id: name,
					textContent: this.styles
				}));
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true
			});
			return value;
		};
		const Modules = {
			get 'react-spring'() {
				return ___createMemoize___(this, 'react-spring', () => BdApi.findModuleByProps('useSpring'))
			},
			'@discord/utils': {
				get 'joinClassNames'() {
					return ___createMemoize___(this, 'joinClassNames', () => BdApi.findModule(e => e.toString().indexOf('return e.join(" ")') > 200))
				},
				get 'useForceUpdate'() {
					return ___createMemoize___(this, 'useForceUpdate', () => BdApi.findModuleByProps('useForceUpdate')?.useForceUpdate)
				},
				get 'Logger'() {
					return ___createMemoize___(this, 'Logger', () => BdApi.findModuleByProps('setLogFn')?.default)
				},
				get 'Navigation'() {
					return ___createMemoize___(this, 'Navigation', () => BdApi.findModuleByProps('replaceWith', 'currentRouteIsPeekView'))
				}
			},
			'@discord/components': {
				get 'Tooltip'() {
					return ___createMemoize___(this, 'Tooltip', () => BdApi.findModuleByDisplayName('Tooltip'))
				},
				get 'TooltipContainer'() {
					return ___createMemoize___(this, 'TooltipContainer', () => BdApi.findModuleByProps('TooltipContainer')?.TooltipContainer)
				},
				get 'TextInput'() {
					return ___createMemoize___(this, 'TextInput', () => BdApi.findModuleByDisplayName('TextInput'))
				},
				get 'SlideIn'() {
					return ___createMemoize___(this, 'SlideIn', () => BdApi.findModuleByDisplayName('SlideIn'))
				},
				get 'SettingsNotice'() {
					return ___createMemoize___(this, 'SettingsNotice', () => BdApi.findModuleByDisplayName('SettingsNotice'))
				},
				get 'TransitionGroup'() {
					return ___createMemoize___(this, 'TransitionGroup', () => BdApi.findModuleByDisplayName('TransitionGroup'))
				},
				get 'Button'() {
					return ___createMemoize___(this, 'Button', () => BdApi.findModule(m => 'DropdownSizes' in m && typeof(m) === 'function'))
				},
				get 'Popout'() {
					return ___createMemoize___(this, 'Popout', () => BdApi.findModuleByDisplayName('Popout'))
				},
				get 'Flex'() {
					return ___createMemoize___(this, 'Flex', () => BdApi.findModuleByDisplayName('Flex'))
				},
				get 'Text'() {
					return ___createMemoize___(this, 'Text', () => BdApi.findModuleByDisplayName('Text'))
				},
				get 'Card'() {
					return ___createMemoize___(this, 'Card', () => BdApi.findModuleByDisplayName('Card'))
				}
			},
			'@discord/modules': {
				get 'Dispatcher'() {
					return ___createMemoize___(this, 'Dispatcher', () => BdApi.findModuleByProps('dirtyDispatch', 'subscribe'))
				},
				get 'ComponentDispatcher'() {
					return ___createMemoize___(this, 'ComponentDispatcher', () => BdApi.findModuleByProps('ComponentDispatch')?.ComponentDispatch)
				},
				get 'EmojiUtils'() {
					return ___createMemoize___(this, 'EmojiUtils', () => BdApi.findModuleByProps('uploadEmoji'))
				},
				get 'PermissionUtils'() {
					return ___createMemoize___(this, 'PermissionUtils', () => BdApi.findModuleByProps('computePermissions', 'canManageUser'))
				},
				get 'DMUtils'() {
					return ___createMemoize___(this, 'DMUtils', () => BdApi.findModuleByProps('openPrivateChannel'))
				}
			},
			'@discord/stores': {
				get 'Messages'() {
					return ___createMemoize___(this, 'Messages', () => BdApi.findModuleByProps('getMessage', 'getMessages'))
				},
				get 'Channels'() {
					return ___createMemoize___(this, 'Channels', () => BdApi.findModuleByProps('getChannel', 'getDMFromUserId'))
				},
				get 'Guilds'() {
					return ___createMemoize___(this, 'Guilds', () => BdApi.findModuleByProps('getGuild'))
				},
				get 'SelectedGuilds'() {
					return ___createMemoize___(this, 'SelectedGuilds', () => BdApi.findModuleByProps('getGuildId', 'getLastSelectedGuildId'))
				},
				get 'SelectedChannels'() {
					return ___createMemoize___(this, 'SelectedChannels', () => BdApi.findModuleByProps('getChannelId', 'getLastSelectedChannelId'))
				},
				get 'Info'() {
					return ___createMemoize___(this, 'Info', () => BdApi.findModuleByProps('getSessionId'))
				},
				get 'Status'() {
					return ___createMemoize___(this, 'Status', () => BdApi.findModuleByProps('getStatus', 'getActivities', 'getState'))
				},
				get 'Users'() {
					return ___createMemoize___(this, 'Users', () => BdApi.findModuleByProps('getUser', 'getCurrentUser'))
				},
				get 'SettingsStore'() {
					return ___createMemoize___(this, 'SettingsStore', () => BdApi.findModuleByProps('afkTimeout', 'status'))
				},
				get 'UserProfile'() {
					return ___createMemoize___(this, 'UserProfile', () => BdApi.findModuleByProps('getUserProfile'))
				},
				get 'Members'() {
					return ___createMemoize___(this, 'Members', () => BdApi.findModuleByProps('getMember'))
				},
				get 'Activities'() {
					return ___createMemoize___(this, 'Activities', () => BdApi.findModuleByProps('getActivities'))
				},
				get 'Games'() {
					return ___createMemoize___(this, 'Games', () => BdApi.findModuleByProps('getGame', 'games'))
				},
				get 'Auth'() {
					return ___createMemoize___(this, 'Auth', () => BdApi.findModuleByProps('getId', 'isGuest'))
				},
				get 'TypingUsers'() {
					return ___createMemoize___(this, 'TypingUsers', () => BdApi.findModuleByProps('isTyping'))
				}
			},
			'@discord/actions': {
				get 'ProfileActions'() {
					return ___createMemoize___(this, 'ProfileActions', () => BdApi.findModuleByProps('fetchProfile'))
				},
				get 'GuildActions'() {
					return ___createMemoize___(this, 'GuildActions', () => BdApi.findModuleByProps('requestMembersById'))
				}
			},
			get '@discord/i18n'() {
				return ___createMemoize___(this, '@discord/i18n', () => BdApi.findModule(m => m.Messages?.CLOSE && typeof(m.getLocale) === 'function'))
			},
			get '@discord/constants'() {
				return ___createMemoize___(this, '@discord/constants', () => BdApi.findModuleByProps('API_HOST'))
			},
			get '@discord/contextmenu'() {
				return ___createMemoize___(this, '@discord/contextmenu', () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps('openContextMenu'), BdApi.findModuleByProps('MenuItem'));
					ctx.Menu = ctx.default;
					return ctx;
				})
			},
			get '@discord/forms'() {
				return ___createMemoize___(this, '@discord/forms', () => BdApi.findModuleByProps('FormItem'))
			},
			get '@discord/scrollbars'() {
				return ___createMemoize___(this, '@discord/scrollbars', () => BdApi.findModuleByProps('ScrollerAuto'))
			},
			get '@discord/native'() {
				return ___createMemoize___(this, '@discord/native', () => BdApi.findModuleByProps('requireModule'))
			},
			get '@discord/flux'() {
				return ___createMemoize___(this, '@discord/flux', () => Object.assign({}, BdApi.findModuleByProps('useStateFromStores').default, BdApi.findModuleByProps('useStateFromStores')))
			},
			get '@discord/modal'() {
				return ___createMemoize___(this, '@discord/modal', () => Object.assign({}, BdApi.findModuleByProps('ModalRoot'), BdApi.findModuleByProps('openModal', 'closeAllModals')))
			},
			get '@discord/connections'() {
				return ___createMemoize___(this, '@discord/connections', () => BdApi.findModuleByProps('get', 'isSupported', 'map'))
			},
			get '@discord/sanitize'() {
				return ___createMemoize___(this, '@discord/sanitize', () => BdApi.findModuleByProps('stringify', 'parse', 'encode'))
			},
			get '@discord/icons'() {
				return ___createMemoize___(this, '@discord/icons', () => BdApi.findAllModules(m => m.displayName && ~m.toString().indexOf('currentColor')).reduce((icons, icon) => (icons[icon.displayName] = icon, icons), {}))
			},
			'@discord/classes': {
				get 'Timestamp'() {
					return ___createMemoize___(this, 'Timestamp', () => BdApi.findModuleByPrototypes('toDate', 'month'))
				},
				get 'Message'() {
					return ___createMemoize___(this, 'Message', () => BdApi.findModuleByPrototypes('getReaction', 'isSystemDM'))
				},
				get 'User'() {
					return ___createMemoize___(this, 'User', () => BdApi.findModuleByPrototypes('tag'))
				},
				get 'Channel'() {
					return ___createMemoize___(this, 'Channel', () => BdApi.findModuleByPrototypes('isOwner', 'isCategory'))
				}
			}
		};
		var __webpack_modules__ = {
			700: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".ShowSessions-list-sessionsList{display:flex;flex-wrap:wrap;color:#fff}.ShowSessions-list-item{margin:10px;padding:16px;width:300px;background:var(--background-secondary);border-radius:8px;display:flex;flex-direction:column}.ShowSessions-list-headerContainer{display:flex;align-items:center;margin-bottom:5px}.ShowSessions-list-headerContainer .ShowSessions-list-avatarWrapper{margin-left:auto}.ShowSessions-list-activities{display:block}.ShowSessions-list-activities>section{margin-bottom:5px}.ShowSessions-list-activities .ShowSessions-list-noActivity{font-weight:600;color:var(--interactive-normal)}.ShowSessions-list-divider{margin:16px 0}.ShowSessions-list-sessionInfo{margin:10px 0;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:270px}.ShowSessions-list-sessionInfo code{background:var(--background-tertiary);padding:2px}.ShowSessions-list-sessionInfo code,.ShowSessions-list-sessionInfo span{margin-left:3px;color:var(--interactive-normal)}.ShowSessions-list-body{display:block}.ShowSessions-list-footer{margin-top:auto;align-items:flex-end}.ShowSessions-list-listDivider{margin:40px 0}.ShowSessions-list-badgesContainer{padding-left:8px;display:flex;justify-content:space-evenly}.ShowSessions-list-badgesContainer div{margin-right:3px}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					sessionsList: "ShowSessions-list-sessionsList",
					item: "ShowSessions-list-item",
					headerContainer: "ShowSessions-list-headerContainer",
					avatarWrapper: "ShowSessions-list-avatarWrapper",
					activities: "ShowSessions-list-activities",
					noActivity: "ShowSessions-list-noActivity",
					divider: "ShowSessions-list-divider",
					sessionInfo: "ShowSessions-list-sessionInfo",
					body: "ShowSessions-list-body",
					footer: "ShowSessions-list-footer",
					listDivider: "ShowSessions-list-listDivider",
					badgesContainer: "ShowSessions-list-badgesContainer"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			602: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".ShowSessions-modal-sessionsList{display:flex;flex-wrap:wrap;color:#fff}.ShowSessions-modal-item{color:#ddd;margin:10px;padding:16px;flex-shrink:0;background:var(--background-secondary);border-radius:8px;display:flex;flex-direction:column}.ShowSessions-modal-item code{background:var(--background-tertiary);padding:2px}.ShowSessions-modal-item code,.ShowSessions-modal-item span{margin-left:3px;color:var(--interactive-normal)}.ShowSessions-modal-headerContainer{display:flex;align-items:center;margin-bottom:5px}.ShowSessions-modal-headerContainer .ShowSessions-modal-avatarWrapper{margin-left:auto}.ShowSessions-modal-activities{display:block}.ShowSessions-modal-activities>section{margin-bottom:5px}.ShowSessions-modal-activities .ShowSessions-modal-noActivity{font-weight:600;color:var(--interactive-normal)}.ShowSessions-modal-divider{margin:16px 0}.ShowSessions-modal-sessionInfo{margin:10px 0;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ShowSessions-modal-body{display:block}.ShowSessions-modal-footer{margin-top:auto;align-items:flex-end}.ShowSessions-modal-listDivider{margin:40px 0}.ShowSessions-modal-badgesContainer{padding-left:8px;display:flex;justify-content:space-evenly}.ShowSessions-modal-badgesContainer div{margin-right:3px}.ShowSessions-modal-message{margin:5px 0}.ShowSessions-modal-closeButton{margin-left:auto}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					sessionsList: "ShowSessions-modal-sessionsList",
					item: "ShowSessions-modal-item",
					headerContainer: "ShowSessions-modal-headerContainer",
					avatarWrapper: "ShowSessions-modal-avatarWrapper",
					activities: "ShowSessions-modal-activities",
					noActivity: "ShowSessions-modal-noActivity",
					divider: "ShowSessions-modal-divider",
					sessionInfo: "ShowSessions-modal-sessionInfo",
					body: "ShowSessions-modal-body",
					footer: "ShowSessions-modal-footer",
					listDivider: "ShowSessions-modal-listDivider",
					badgesContainer: "ShowSessions-modal-badgesContainer",
					message: "ShowSessions-modal-message",
					closeButton: "ShowSessions-modal-closeButton"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			911: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
				var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".ShowSessions-category-category.ShowSessions-category-compact{position:inherit}.ShowSessions-category-category.ShowSessions-category-compact .ShowSessions-category-header{display:flex;align-items:center;justify-content:space-between;padding:2px;padding-left:10px;text-transform:uppercase;font-weight:600;font-size:.9rem}.ShowSessions-category-category.ShowSessions-category-compact .ShowSessions-category-header .ShowSessions-category-caret{float:right;display:inline-flex;color:var(--interactive-normal)}.ShowSessions-category-category.ShowSessions-category-compact .ShowSessions-category-header .ShowSessions-category-stroke{background-color:var(--background-modifier-accent);height:2px;flex:1;margin:0 5px 0 10px}.ShowSessions-category-category.ShowSessions-category-compact .ShowSessions-category-header .ShowSessions-category-label{color:var(--interactive-normal)}.ShowSessions-category-category.ShowSessions-category-compact .ShowSessions-category-content{padding-left:20px;width:calc(100% - 40px)}.ShowSessions-category-category.ShowSessions-category-default{background:rgba(32,34,37,.3);border:1px solid #202225;margin:5px;cursor:pointer;border-radius:3px;--color: var(--interactive-normal)}.ShowSessions-category-category.ShowSessions-category-default:hover{--color: var(--interactive-hover)}.ShowSessions-category-category.ShowSessions-category-default .ShowSessions-category-header{padding-right:5px;padding:10px 15px;padding-bottom:0;display:flex;align-items:center;justify-content:space-between}.ShowSessions-category-category.ShowSessions-category-default .ShowSessions-category-header .ShowSessions-category-stroke{display:none}.ShowSessions-category-category.ShowSessions-category-default .ShowSessions-category-header .ShowSessions-category-divider{position:relative}.ShowSessions-category-category.ShowSessions-category-default .ShowSessions-category-header .ShowSessions-category-label{font-size:1rem;font-weight:600;color:#fff;text-transform:uppercase}.ShowSessions-category-category.ShowSessions-category-default .ShowSessions-category-header .ShowSessions-category-caret{color:var(--color);transition:color .3s}.ShowSessions-category-category.ShowSessions-category-default.ShowSessions-category-opened .ShowSessions-category-content{padding:8px}.ShowSessions-category-category.ShowSessions-category-default.ShowSessions-category-opened .ShowSessions-category-header{background:rgba(32,34,37,.6)}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					category: "ShowSessions-category-category",
					compact: "ShowSessions-category-compact",
					header: "ShowSessions-category-header",
					caret: "ShowSessions-category-caret",
					stroke: "ShowSessions-category-stroke",
					label: "ShowSessions-category-label",
					content: "ShowSessions-category-content",
					default: "ShowSessions-category-default",
					divider: "ShowSessions-category-divider",
					opened: "ShowSessions-category-opened"
				};
				StyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString());
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals);
			},
			11: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				__webpack_require__.d(__webpack_exports__, {
					default: () => ShowSessions
				});
				const external_PluginApi_namespaceObject = PluginApi;
				const external_BasePlugin_namespaceObject = BasePlugin;
				var external_BasePlugin_default = __webpack_require__.n(external_BasePlugin_namespaceObject);
				const DefaultMessage = {
					state: "SENT",
					author: {
						avatar: "betterdiscord",
						id: "81388395867156480",
						bot: true,
						discriminator: "5000",
						username: "BetterDiscord"
					},
					content: "Hello <:zere_zoom:477825238172958730>"
				};
				const MessageCreators = BdApi.findModuleByProps("createBotMessage");
				const MessageActions = BdApi.findModuleByProps("receiveMessage");
				const AvatarDefaults = BdApi.findModuleByProps("BOT_AVATARS");
				if (AvatarDefaults?.BOT_AVATARS && !AvatarDefaults.BOT_AVATARS.betterdiscord) AvatarDefaults.BOT_AVATARS.betterdiscord = "https://github.com/BetterDiscord.png";
				function sendMessage(channelId, message) {
					MessageActions.receiveMessage(channelId, Object.assign({}, MessageCreators.createBotMessage(channelId, message?.content), DefaultMessage, message));
				}
				const Clyde = {
					sendMessage,
					DefaultMessage
				};
				const clyde = Clyde;
				const DiscordCommands = BdApi.findModuleByProps("BUILT_IN_COMMANDS");
				const DiscordCommandTypes = BdApi.findModuleByProps("ApplicationCommandType");
				const Types = DiscordCommandTypes.ApplicationCommandType;
				const OptionTypes = DiscordCommandTypes.ApplicationCommandOptionType;
				const PermissionTypes = DiscordCommandTypes.ApplicationCommandPermissionType;
				if (!DiscordCommands.BUILT_IN_SECTIONS["betterdiscord"]) DiscordCommands.BUILT_IN_SECTIONS["betterdiscord"] = {
					icon: "https://github.com/BetterDiscord.png",
					id: "betterdiscord",
					name: "BetterDiscord",
					type: 0
				};
				function registerCommand(caller, options) {
					const cmd = Object.assign({}, options, {
						__registerId: caller,
						applicationId: "betterdiscord",
						type: Types.BOT,
						target: 1
					});
					DiscordCommands.BUILT_IN_COMMANDS.push(cmd);
					return () => {
						const index = DiscordCommands.BUILT_IN_COMMANDS.indexOf(cmd);
						if (index < 0) return false;
						DiscordCommands.BUILT_IN_COMMANDS.splice(index, 1);
					};
				}
				function unregisterAllCommands(caller) {
					let index = DiscordCommands.BUILT_IN_COMMANDS.findIndex((cmd => cmd.__registerId === caller));
					while (index > -1) {
						DiscordCommands.BUILT_IN_COMMANDS.splice(index, 1);
						index = DiscordCommands.BUILT_IN_COMMANDS.findIndex((cmd => cmd.__registerId === caller));
					}
				}
				const Commands = {
					registerCommand,
					unregisterAllCommands
				};
				const commands = Commands;
				var external_BdApi_React_ = __webpack_require__(113);
				var external_BdApi_React_default = __webpack_require__.n(external_BdApi_React_);
				var list = __webpack_require__(700);
				const forms_namespaceObject = Modules["@discord/forms"];
				const external_window_namespaceObject = window._;
				var external_window_default = __webpack_require__.n(external_window_namespaceObject);
				const constants_namespaceObject = Modules["@discord/constants"];
				const stores_namespaceObject = Modules["@discord/stores"];
				const flux_namespaceObject = Modules["@discord/flux"];
				const components_namespaceObject = Modules["@discord/components"];
				const native_namespaceObject = Modules["@discord/native"];
				const modal_namespaceObject = Modules["@discord/modal"];
				const SessionsStore = external_PluginApi_namespaceObject.WebpackModules.getByProps("getActiveSession");
				const {
					TextBadge
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("TextBadge");
				const {
					AnimatedAvatar,
					Sizes: AvatarSizes
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("AnimatedAvatar");
				const AssetUtils = external_PluginApi_namespaceObject.WebpackModules.getByProps("getAssetImage");
				const ChangePasswordModal = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("ChangePasswordModal");
				const {
					RichPresenceSection
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("RichPresenceSection");
				const StatusModule = external_PluginApi_namespaceObject.WebpackModules.getByProps("humanizeStatus");
				function CopyButton({
					copyText,
					copiedText,
					onClick
				}) {
					const [copied, setCopied] = (0, external_BdApi_React_.useState)(false);
					return external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						onClick: e => {
							setCopied(true);
							setTimeout((() => setCopied(false)), 1e3);
							onClick(e);
						},
						color: copied ? components_namespaceObject.Button.Colors.GREEN : components_namespaceObject.Button.Colors.BRAND,
						size: components_namespaceObject.Button.Sizes.SMALL,
						look: components_namespaceObject.Button.Looks.FILLED
					}, copied ? copiedText : copyText);
				}
				function Item({
					session
				}) {
					const {
						active,
						activities,
						clientInfo,
						sessionId,
						status
					} = (0, flux_namespaceObject.useStateFromStores)([SessionsStore], (() => SessionsStore.getSessionById(session)));
					return external_BdApi_React_default().createElement("div", {
						className: list.Z.item
					}, external_BdApi_React_default().createElement("div", {
						className: list.Z.headerContainer
					}, external_BdApi_React_default().createElement("b", null, external_window_default().upperFirst(clientInfo.os)), external_BdApi_React_default().createElement("div", {
						className: list.Z.badgesContainer
					}, active && external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
						position: "top",
						text: "The session is marked as an active session."
					}, external_BdApi_React_default().createElement(TextBadge, {
						color: constants_namespaceObject.Colors.BRAND_NEW_500,
						text: "ACTIVE"
					})), stores_namespaceObject.Info.getSessionId() === sessionId && external_BdApi_React_default().createElement(components_namespaceObject.TooltipContainer, {
						position: "top",
						text: "This is the current session."
					}, external_BdApi_React_default().createElement(TextBadge, {
						color: constants_namespaceObject.Colors.STATUS_GREEN_500,
						text: "CURRENT"
					}))), external_BdApi_React_default().createElement("div", {
						className: list.Z.avatarWrapper
					}, external_BdApi_React_default().createElement(AnimatedAvatar, {
						isMobile: "mobile" === clientInfo.client,
						status,
						isTyping: false,
						src: stores_namespaceObject.Users.getCurrentUser().getAvatarURL(null, 32, true),
						size: AvatarSizes.SIZE_32,
						statusTooltip: true
					}))), external_BdApi_React_default().createElement("div", {
						className: list.Z.body
					}, external_BdApi_React_default().createElement("div", {
						className: list.Z.activities
					}, activities.length ? activities.map((ac => external_BdApi_React_default().createElement(RichPresenceSection, {
						activity: ac,
						getAssetImage: AssetUtils.getAssetImage
					}))) : external_BdApi_React_default().createElement("span", {
						className: list.Z.noActivity
					}, "No activities running.")), external_BdApi_React_default().createElement(forms_namespaceObject.FormDivider, {
						className: list.Z.divider
					}), external_BdApi_React_default().createElement("div", {
						className: list.Z.sessionInfo,
						key: "sessionId"
					}, external_BdApi_React_default().createElement("b", null, "ID:"), external_BdApi_React_default().createElement("code", {
						className: "inline"
					}, sessionId)), external_BdApi_React_default().createElement("div", {
						className: list.Z.sessionInfo,
						key: "sessionClient"
					}, external_BdApi_React_default().createElement("b", null, "Client:"), external_BdApi_React_default().createElement("span", null, external_window_default().upperFirst(clientInfo.client))), external_BdApi_React_default().createElement("div", {
						className: list.Z.sessionInfo,
						key: "sessionOs"
					}, external_BdApi_React_default().createElement("b", null, "OS:"), external_BdApi_React_default().createElement("span", null, external_window_default().upperFirst(clientInfo.os))), external_BdApi_React_default().createElement("div", {
						className: list.Z.sessionInfo,
						key: "sessionStatus"
					}, external_BdApi_React_default().createElement("b", null, "Status:"), external_BdApi_React_default().createElement("span", null, StatusModule.humanizeStatus(status)))), external_BdApi_React_default().createElement(components_namespaceObject.Flex, {
						className: list.Z.footer,
						justify: components_namespaceObject.Flex.Justify.END
					}, external_BdApi_React_default().createElement(components_namespaceObject.Button, {
						look: components_namespaceObject.Button.Looks.LINK,
						color: components_namespaceObject.Button.Colors.RED,
						size: components_namespaceObject.Button.Sizes.SMALL,
						onClick: () => {
							(0, modal_namespaceObject.openModal)((props => external_BdApi_React_default().createElement(ChangePasswordModal, props)));
						}
					}, "Not you?"), external_BdApi_React_default().createElement(CopyButton, {
						copiedText: "Copied!",
						copyText: "Copy JSON",
						onClick: () => {
							(0, native_namespaceObject.copy)(JSON.stringify(SessionsStore.getSessionById(session), null, "\t"));
						}
					})));
				}
				function SessionsList() {
					const sessions = (0, flux_namespaceObject.useStateFromStores)([SessionsStore], (() => SessionsStore.getSessions()));
					const keys = Object.keys(sessions).filter((e => "all" !== e));
					return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, external_BdApi_React_default().createElement(forms_namespaceObject.FormDivider, {
						className: list.Z.listDivider
					}), external_BdApi_React_default().createElement(forms_namespaceObject.FormTitle, {
						tag: "h1"
					}, keys.length ? `Active Sessions [${keys.length}]` : "No active Sessions"), external_BdApi_React_default().createElement("div", {
						className: list.Z.sessionsList
					}, keys.map((s => external_BdApi_React_default().createElement(Item, {
						session: s
					})))));
				}
				const external_StyleLoader_namespaceObject = StyleLoader;
				var external_StyleLoader_default = __webpack_require__.n(external_StyleLoader_namespaceObject);
				function switchCase(caze, cases, defaultValue) {
					for (const caseTest of cases)
						if (Array.isArray(caseTest)) {
							const [tester, value] = caseTest;
							if ("function" === typeof tester) {
								if (tester(caze)) {
									if ("function" === typeof value) return value(caze);
									return value;
								}
							} else if (Object.is(caze, tester)) {
								if ("function" === typeof value) return value(caze);
								return value;
							}
						} else if ("object" === typeof caseTest)
						if ("function" === typeof caseTest.test) {
							if (caseTest.test(caze)) return caseTest.value;
						} else if (Object.is(caze, caseTest.test)) return caseTest.value;
					return defaultValue;
				}
				function createStore(state) {
					const listeners = new Set;
					const api = {
						getState() {
							return state;
						},
						setState(partial) {
							const partialState = "function" === typeof partial ? partial(state) : partial;
							state = Object.assign({}, state, partialState);
							listeners.forEach((listener => {
								listener(state);
							}));
						},
						get listeners() {
							return listeners;
						},
						on(listener) {
							if (listeners.has(listener)) return;
							listeners.add(listener);
							return () => listeners.delete(listener);
						},
						off(listener) {
							return listeners.delete(listener);
						}
					};
					return [function(collector = (_ => _)) {
						const forceUpdate = (0, external_BdApi_React_.useReducer)((e => e + 1), 0)[1];
						(0, external_BdApi_React_.useEffect)((() => {
							const handler = () => forceUpdate();
							listeners.add(handler);
							return () => listeners.delete(handler);
						}), []);
						return collector(api.getState());
					}, api];
				}
				var modal = __webpack_require__(602);
				var React = __webpack_require__(113);
				function _extends() {
					_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return _extends.apply(this, arguments);
				}
				const [useStore, Api] = createStore({
					recent: []
				});
				const Header = external_PluginApi_namespaceObject.WebpackModules.getModule((m => "Header" === m.displayName && m.Tags));
				const {
					TextBadge: notification_TextBadge
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("TextBadge");
				const {
					AnimatedAvatar: notification_AnimatedAvatar,
					Sizes: notification_AvatarSizes
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("AnimatedAvatar");
				const notification_StatusModule = external_PluginApi_namespaceObject.WebpackModules.getByProps("humanizeStatus");
				function CardItem({
					session,
					type,
					timestamp,
					props
				}) {
					if (!session) return null;
					const {
						active,
						activities,
						clientInfo,
						status
					} = session;
					return React.createElement("div", {
						className: modal.Z.item
					}, React.createElement("div", {
						className: modal.Z.headerContainer
					}, React.createElement("b", null, external_window_default().upperFirst(clientInfo.os)), React.createElement("div", {
						className: modal.Z.badgesContainer
					}, active && React.createElement(components_namespaceObject.TooltipContainer, {
						position: "top",
						text: "The session is marked as an active session."
					}, React.createElement(notification_TextBadge, {
						color: constants_namespaceObject.Colors.BRAND_NEW_500,
						text: "ACTIVE"
					})), stores_namespaceObject.Info.getSessionId() === session.sessionId && React.createElement(components_namespaceObject.TooltipContainer, {
						position: "top",
						text: "This is the current session."
					}, React.createElement(notification_TextBadge, {
						color: constants_namespaceObject.Colors.STATUS_GREEN_500,
						text: "CURRENT"
					}))), React.createElement("div", {
						className: modal.Z.avatarWrapper
					}, React.createElement(notification_AnimatedAvatar, {
						isMobile: "mobile" === clientInfo.client,
						status,
						isTyping: false,
						src: stores_namespaceObject.Users.getCurrentUser().getAvatarURL(null, 32, true),
						size: notification_AvatarSizes.SIZE_32,
						statusTooltip: true
					}))), React.createElement("div", {
						className: modal.Z.message
					}, (() => {
						switch (type) {
							case "added":
								return `This session was added.`;
							case "removed":
								return `This session was removed.`;
							case "changed":
								return React.createElement("span", null, "The ", React.createElement("code", {
									className: "inline"
								}, props.property), " about this session was changed: ", props.from, " -", ">", " ", props.to);
						}
					})()), React.createElement("div", {
						className: modal.Z.body
					}, React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "timestamp"
					}, React.createElement("b", null, "Timestamp:"), React.createElement("span", null, new Date(timestamp).toLocaleString())), React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "activities"
					}, React.createElement("b", null, "Actvities:"), React.createElement("span", null, activities.length)), React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "sessionId"
					}, React.createElement("b", null, "ID:"), React.createElement("code", {
						className: "inline"
					}, session.sessionId)), React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "sessionClient"
					}, React.createElement("b", null, "Client:"), React.createElement("span", null, external_window_default().upperFirst(clientInfo.client))), React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "sessionOs"
					}, React.createElement("b", null, "OS:"), React.createElement("span", null, external_window_default().upperFirst(clientInfo.os))), React.createElement("div", {
						className: modal.Z.sessionInfo,
						key: "sessionStatus"
					}, React.createElement("b", null, "Status:"), React.createElement("span", null, notification_StatusModule.humanizeStatus(status)))));
				}
				function Modal(props) {
					const entries = [...useStore((s => s.recent))].reverse();
					const newest = entries.shift();
					(0, external_BdApi_React_.useEffect)((() => {
						Api.setState({
							opened: true
						});
						return () => {
							Api.setState({
								opened: false
							});
						};
					}), []);
					return React.createElement(modal_namespaceObject.ModalRoot, _extends({}, props, {
						size: "medium"
					}), React.createElement(modal_namespaceObject.ModalHeader, {
						separator: false
					}, React.createElement(Header, {
						tag: Header.Tags.H1,
						size: Header.Sizes.SIZE_20
					}, "Sessions detected"), React.createElement(modal_namespaceObject.ModalCloseButton, {
						onClick: props.onClose,
						className: modal.Z.closeButton
					})), React.createElement(modal_namespaceObject.ModalContent, null, React.createElement(CardItem, _extends({}, newest, {
						key: newest.session.sessionId
					})), entries.length > 0 && React.createElement(forms_namespaceObject.FormDivider, {
						className: modal.Z.newDivider
					}), entries.map((props => React.createElement(CardItem, _extends({}, props, {
						key: props.session.sessionId
					}))))), React.createElement(modal_namespaceObject.ModalFooter, null, React.createElement(components_namespaceObject.Flex, {
						align: components_namespaceObject.Flex.Align.END
					}, React.createElement(components_namespaceObject.Button, {
						onClick: props.onClose
					}, "Okay"))));
				}
				const modules_namespaceObject = Modules["@discord/modules"];
				function _defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				class SettingsManager extends flux_namespaceObject.Store {
					constructor(pluginName, defaultSettings = {}) {
						super(modules_namespaceObject.Dispatcher, {});
						_defineProperty(this, "settings", void 0);
						_defineProperty(this, "pluginName", void 0);
						_defineProperty(this, "get", ((key, defaultValue) => this.settings[key] ?? defaultValue));
						_defineProperty(this, "set", ((key, value) => {
							this.settings[key] = value;
							external_PluginApi_namespaceObject.PluginUtilities.saveSettings(this.pluginName, this.settings);
							this.emitChange();
							return value;
						}));
						this.pluginName = pluginName;
						this.settings = external_PluginApi_namespaceObject.PluginUtilities.loadSettings(pluginName, defaultSettings);
					}
				}
				const package_namespaceObject = JSON.parse('{"um":{"u2":"ShowSessions"}}');
				const Settings = new SettingsManager(package_namespaceObject.um.u2);
				const settings = Settings;
				const icons_namespaceObject = Modules["@discord/icons"];
				const utils_namespaceObject = Modules["@discord/utils"];
				var category = __webpack_require__(911);
				function Category({
					label,
					children,
					className,
					look = Category.Looks.DEFAULT
				}) {
					const [opened, toggle] = (0, external_BdApi_React_.useState)(false);
					const isCompact = look === category.Z.compact;
					return external_BdApi_React_default().createElement("div", {
						className: (0, utils_namespaceObject.joinClassNames)(className, look, category.Z.category, {
							[category.Z.opened]: opened
						})
					}, external_BdApi_React_default().createElement("div", {
						className: category.Z.header,
						onClick: () => toggle(!opened)
					}, external_BdApi_React_default().createElement("div", {
						className: category.Z.label
					}, label), isCompact ? external_BdApi_React_default().createElement("div", {
						className: category.Z.stroke
					}) : null, external_BdApi_React_default().createElement(icons_namespaceObject.Caret, {
						direction: opened ? icons_namespaceObject.Caret.Directions.DOWN : isCompact ? icons_namespaceObject.Caret.Directions.LEFT : icons_namespaceObject.Caret.Directions.RIGHT,
						className: category.Z.caret
					})), !isCompact ? external_BdApi_React_default().createElement("div", {
						className: category.Z.divider
					}) : null, external_BdApi_React_default().createElement("div", {
						className: category.Z.content
					}, opened ? children : null));
				}
				Category.Looks = {
					COMPACT: category.Z.compact,
					DEFAULT: category.Z["default"]
				};
				function Settings_extends() {
					Settings_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return Settings_extends.apply(this, arguments);
				}
				const SwitchItem = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("SwitchItem");
				const SettingsOptions = [{
					type: "switch",
					name: "Show Updates",
					note: "Shows updates about sessions.",
					id: "showUpdates",
					value: true
				}, {
					type: "category",
					name: "Updates",
					items: [{
						id: "showActivityUpdate",
						name: "Activity Update",
						note: "Shows a notice when the activity of a session has updated.",
						type: "switch",
						value: true,
						requires: ["showUpdates"]
					}, {
						id: "showAdd",
						name: "Session Add",
						note: "Shows a notice when a session was added.",
						type: "switch",
						value: true,
						requires: ["showUpdates"]
					}, {
						id: "showRemove",
						name: "Session Remove",
						note: "Shows a notice when a session was removed/closed.",
						type: "switch",
						value: true,
						requires: ["showUpdates"]
					}]
				}];
				function renderSetting(setting, forceUpdate) {
					switch (setting.type) {
						case "switch":
							return external_BdApi_React_default().createElement(SwitchItem, Settings_extends({}, setting, {
								children: setting.name,
								value: settings.get(setting.id, setting.value),
								disabled: setting.requires ? !setting.requires.every((id => settings.get(id, true))) : false,
								onChange: value => {
									settings.set(setting.id, value);
									forceUpdate();
								}
							}));
						case "category":
							return external_BdApi_React_default().createElement(Category, {
								look: Category.Looks.COMPACT,
								label: setting.name,
								key: setting.name
							}, setting.items.map((item => renderSetting(item, forceUpdate))));
					}
				}
				function SettingsPanel() {
					const [, forceUpdate] = (0, external_BdApi_React_.useReducer)((n => !n), true);
					return external_BdApi_React_default().createElement(external_BdApi_React_default().Fragment, null, SettingsOptions.map((setting => renderSetting(setting, forceUpdate))));
				}
				function ShowSessions_defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				const UserSettings = external_PluginApi_namespaceObject.WebpackModules.getByProps("updateAccount");
				const ShowSessions_SessionsStore = external_PluginApi_namespaceObject.WebpackModules.getByProps("getActiveSession");
				class ShowSessions extends(external_BasePlugin_default()) {
					constructor(...args) {
						super(...args);
						ShowSessions_defineProperty(this, "_changeListener", void 0);
						ShowSessions_defineProperty(this, "_originalSessions", void 0);
						ShowSessions_defineProperty(this, "_wasInitial", false);
						ShowSessions_defineProperty(this, "promises", {
							cancelled: false,
							cancel() {
								this.cancelled = true;
							}
						});
						ShowSessions_defineProperty(this, "openSettings", (() => {
							UserSettings.setSection("My Account");
						}));
					}
					getSettingsPanel() {
						return external_BdApi_React_default().createElement(SettingsPanel, null);
					}
					onStart() {
						const DiscordCommands = external_PluginApi_namespaceObject.WebpackModules.getByProps("BUILT_IN_COMMANDS");
						DiscordCommands.BUILT_IN_COMMANDS.push({
							__registerId: this.getName(),
							applicationId: "betterdiscord",
							name: "sessions",
							description: "Shows your account's active sessions.",
							id: "get-sessions",
							type: 1,
							target: 1,
							predicate: () => true,
							execute: (_, {
								channel
							}) => {
								try {
									clyde.sendMessage(channel.id, {
										content: switchCase(Object.entries(ShowSessions_SessionsStore.getSessions()), [
											[e => e.length, sessions => "**__I found these clients are currently active:__**\n\n" + sessions.filter((([id]) => "all" !== id)).map((([id, info]) => `> **Id:** \`${id}\`\n\t\t\t\t\t\t\t\t\t> **Active:** \`${info.active}\`\n\t\t\t\t\t\t\t\t\t> **Status:** \`${info.status}\`\n\t\t\t\t\t\t\t\t\t> **Activities: [${info.activities.length}]**${(info.activities.length ? "\n>" : "") + info.activities.map((ac => `  **•** ${ac.name}: \`${ac.state}\``)).join("\n")}\n\t\t\t\t\t\t\t\t\t> **Client:**\n\t\t\t\t\t\t\t\t\t>  **•** os: \`${info.clientInfo.os}\`\n\t\t\t\t\t\t\t\t\t>  **•** client: \`${info.clientInfo.client}\`\n\t\t\t\t\t\t\t\t\t`)).join("\n")],
											[e => !e.length, "I didn't find any active clients. Maybe discord didn't told me about them? :thinking:"]
										])
									});
								} catch (error) {
									console.error(error);
								}
							},
							options: []
						});
						external_StyleLoader_default().inject();
						external_PluginApi_namespaceObject.Utilities.suppressErrors(this.patchAccountSection.bind(this), "AccountSection patch")();
						ShowSessions_SessionsStore.addChangeListener(this._changeListener = external_PluginApi_namespaceObject.Utilities.suppressErrors((() => {
							const data = ShowSessions_SessionsStore.getSessions();
							this.handleChangeSessions(data);
							this._originalSessions = data;
						}), "ShowSessions.onChange"));
						this._originalSessions = ShowSessions_SessionsStore.getSessions();
					}
					maybeOpenModal() {
						if (Api.getState().opened) return;
						(0, modal_namespaceObject.openModal)((props => external_BdApi_React_default().createElement(Modal, props)));
					}
					handleChangeSessions(data) {
						if (!settings.get("showUpdates", true)) return;
						const filter = e => "all" !== e;
						const sessionFilter = (session1, session2, key) => {
							if ("activities" === key) return session1[key].length !== session2[key].length;
							if ("clientInfo" === key) return !external_window_default().isEqual(session1[key], session2[key]);
							return session1[key] !== session2[key];
						};
						const compareSessions = function(session1, session2) {
							const keys = Object.keys(session1).slice(1);
							const changes = keys.filter(sessionFilter.bind(null, session1, session2));
							if (!changes.length) return [];
							return changes.map((key => ({
								property: key,
								from: "activities" === key ? session1[key].length : JSON.stringify(session1[key]),
								to: "activities" === key ? session2[key].length : JSON.stringify(session2[key]),
								id: session1.sessionId
							})));
						};
						const oldKeys = Object.keys(this._originalSessions).filter(filter);
						const newKeys = Object.keys(data).filter(filter);
						if (0 === oldKeys.length && !this._wasInitial) {
							this._wasInitial = true;
							return;
						}
						if (oldKeys.length > newKeys.length && settings.get("showAdd", true)) {
							const removed = oldKeys.filter((e => newKeys.indexOf(e) < 0));
							external_PluginApi_namespaceObject.Logger.log("Detected closed session", removed);
							Api.setState((state => ({
								...state,
								recent: state.recent.concat(removed.map((removed => ({
									type: "removed",
									timestamp: new Date,
									session: this._originalSessions[removed]
								}))).filter((e => e.session))).slice(0, 30)
							})));
							this.maybeOpenModal();
						} else if (oldKeys.length < newKeys.length && settings.get("showRemove", true)) {
							const added = newKeys.filter((e => oldKeys.indexOf(e) < 0));
							external_PluginApi_namespaceObject.Logger.log("Detected new session", added);
							Api.setState((state => ({
								...state,
								recent: state.recent.concat(added.map((added => ({
									type: "added",
									timestamp: new Date,
									session: ShowSessions_SessionsStore.getSessionById(added)
								}))).filter((e => e.session))).slice(0, 30)
							})));
							this.maybeOpenModal();
						} else if (settings.get("showActivityUpdate", true)) {
							const changes = newKeys.map((key => compareSessions(this._originalSessions[key], data[key]))).filter(Boolean);
							if (!changes.length) return;
							external_PluginApi_namespaceObject.Logger.log("Detected session change");
							Api.setState((state => ({
								...state,
								recent: state.recent.concat(changes.flatMap((changes => changes.map((change => ({
									props: change,
									type: "changed",
									timestamp: new Date,
									session: ShowSessions_SessionsStore.getSessionById(change.id)
								})))))).slice(0, 30)
							})));
							this.maybeOpenModal();
						}
					}
					async patchAccountSection() {
						const UserSettingsAccount = await external_PluginApi_namespaceObject.ReactComponents.getComponentByName("UserSettingsAccount", "." + external_PluginApi_namespaceObject.WebpackModules.getByProps("contentColumnDefault").contentColumnDefault + " > div");
						external_PluginApi_namespaceObject.Patcher.after(UserSettingsAccount.component.prototype, "render", ((_this, _, res) => {
							if (!Array.isArray(res?.props?.children)) return;
							res.props.children.push(external_BdApi_React_default().createElement(SessionsList, null));
						}));
						UserSettingsAccount.forceUpdateAll();
					}
					onStop() {
						commands.unregisterAllCommands(this.getName());
						external_PluginApi_namespaceObject.Patcher.unpatchAll();
						this.promises.cancel();
						external_StyleLoader_default().remove();
						ShowSessions_SessionsStore.removeChangeListener(this._changeListener);
					}
				}
			},
			645: module => {
				module.exports = function(cssWithMappingToString) {
					var list = [];
					list.toString = function toString() {
						return this.map((function(item) {
							var content = cssWithMappingToString(item);
							if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
							return content;
						})).join("");
					};
					list.i = function(modules, mediaQuery, dedupe) {
						if ("string" === typeof modules) modules = [
							[null, modules, ""]
						];
						var alreadyImportedModules = {};
						if (dedupe)
							for (var i = 0; i < this.length; i++) {
								var id = this[i][0];
								if (null != id) alreadyImportedModules[id] = true;
							}
						for (var _i = 0; _i < modules.length; _i++) {
							var item = [].concat(modules[_i]);
							if (dedupe && alreadyImportedModules[item[0]]) continue;
							if (mediaQuery)
								if (!item[2]) item[2] = mediaQuery;
								else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
							list.push(item);
						}
					};
					return list;
				};
			},
			113: module => {
				module.exports = BdApi.React;
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = __webpack_module_cache__[moduleId] = {
				id: moduleId,
				exports: {}
			};
			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = module => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = exports => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
			};
		})();
		var __webpack_exports__ = __webpack_require__(11);
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary") ?
	buildPlugin(window.ZeresPluginLibrary.buildPlugin(config)) :
	class {
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
		}
		getVersion() {
			return config.info.version;
		}
		load() {
			BdApi.showConfirmationModal(
				"Library plugin is needed",
				[`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	};
/*@end@*/