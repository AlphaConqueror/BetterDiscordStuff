/**
 * @name InvisibleTyping
 * @version 1.3.5
 * @author Strencher
 * @authorId 415849376598982656
 * @description Enhanced version of silent typing.
 * @source https://github.com/Strencher/BetterDiscordStuff/blob/master/InvisibleTyping/InvisibleTyping.plugin.js
 * @invite gvA2ree
 * @changelogDate 2024-08-29
 */

'use strict';

/* @module react */
const React = BdApi.React;
/*@end */

/* @module @manifest */
var manifest = {
    "name": "InvisibleTyping",
    "version": "1.3.5",
    "author": "Strencher",
    "authorId": "415849376598982656",
    "description": "Enhanced version of silent typing.",
    "source": "https://github.com/Strencher/BetterDiscordStuff/blob/master/InvisibleTyping/InvisibleTyping.plugin.js",
    "invite": "gvA2ree",
    "changelog": [{
        "title": "Fixed",
        "type": "fixed",
        "items": [
            "The Plugin works again",
            "Fixed some logic issues",
            "Fixed sticky button"
        ]
    }],
    "changelogDate": "2024-08-29"
};
/*@end */

/* @module @api */
const {
    DOM,
    Patcher,
    UI,
    Webpack
} = new BdApi(manifest.name);
/*@end */

/* @module @styles */

var Styles = {
    sheets: [],
    _element: null,
    load() {
        DOM.addStyle(this.sheets.join("\n"));
    },
    unload() {
        DOM.removeStyle();
    }
};
/*@end */

/* @module typingButton.scss */
Styles.sheets.push("/* typingButton.scss */", `.invisibleTypingButton svg {
  color: var(--interactive-normal);
  overflow: visible;
  margin-top: 2.5px;
}

.invisibleTypingButton .disabledStrokeThrough {
  position: absolute;
  transform: translateX(-15px) translateY(530px) rotate(-45deg);
}

.invisibleTypingButton {
  background: transparent;
}
.invisibleTypingButton:hover:not(.disabled) svg {
  color: var(--interactive-hover);
}

.invisibleTypingTooltip {
  display: inline-flex;
}`);
/*@end */

/* @module shared.js */
const TypingModule = Webpack.getByKeys("startTyping");
const buildClassName = (...args) => {
    return args.reduce((classNames, arg) => {
        if (!arg) return classNames;
        if (typeof arg === "string" || typeof arg === "number") {
            classNames.push(arg);
        } else if (Array.isArray(arg)) {
            const nestedClassNames = buildClassName(...arg);
            if (nestedClassNames) classNames.push(nestedClassNames);
        } else if (typeof arg === "object") {
            Object.keys(arg).forEach((key) => {
                if (arg[key]) classNames.push(key);
            });
        }
        return classNames;
    }, []).join(" ");
};

/*@end */

/* @module changelog.scss */
Styles.sheets.push("/* changelog.scss */", `.Changelog-Title-Wrapper {
  font-size: 20px;
  font-weight: 600;
  font-family: var(--font-display);
  color: var(--header-primary);
  line-height: 1.2;
}
.Changelog-Title-Wrapper div {
  font-size: 12px;
  font-weight: 400;
  font-family: var(--font-primary);
  color: var(--primary-300);
  line-height: 1.3333333333;
}

.Changelog-Banner {
  width: 405px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.Changelog-Item {
  color: #c4c9ce;
}
.Changelog-Item .Changelog-Header {
  display: flex;
  text-transform: uppercase;
  font-weight: 700;
  align-items: center;
  margin-bottom: 10px;
}
.Changelog-Item .Changelog-Header.added {
  color: #45BA6A;
}
.Changelog-Item .Changelog-Header.fixed {
  color: #EC4245;
}
.Changelog-Item .Changelog-Header.improved {
  color: #5865F2;
}
.Changelog-Item .Changelog-Header::after {
  content: "";
  flex-grow: 1;
  height: 1px;
  margin-left: 7px;
  background: currentColor;
}
.Changelog-Item span {
  display: list-item;
  list-style: inside;
  margin-left: 5px;
}
.Changelog-Item span::marker {
  color: var(--background-accent);
}`);

/*@end */

/* @module index.tsx */
class InvisibleTyping {
    start() {
        Styles.load();
        this.showChangelog();
        this.patchTyping();
    }
    stop() {
        Styles.unload();
        Patcher.unpatchAll();
    }
    showChangelog() {
        const i18n = Webpack.getByKeys("getLocale");
        const formatter = new Intl.DateTimeFormat(i18n.getLocale(), {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
        const title = React.createElement("div", {
            className: "Changelog-Title-Wrapper"
        }, React.createElement("h1", null, "What's New - ", manifest.name), React.createElement("div", null, formatter.format(new Date(manifest.changelogDate)), " - v", manifest.version));
        const items = manifest?.changelog?.map((item) => React.createElement("div", {
            className: "Changelog-Item"
        }, React.createElement("h4", {
            className: `Changelog-Header ${item.type}`
        }, item.title), item.items.map((item2) => React.createElement("span", null, item2))));
        "changelogImage" in manifest && items.unshift(
            React.createElement("img", {
                className: "Changelog-Banner",
                src: manifest.changelogImage
            })
        );
        UI.alert(title, items);
    }
    patchTyping() {
        Patcher.instead(TypingModule, "startTyping", (_, [channelId], originalMethod) => {});
    }
}

/*@end */

module.exports = InvisibleTyping;