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
    Patcher,
    Webpack
} = new BdApi(manifest.name);
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

/* @module index.tsx */
class InvisibleTyping {
    start() {
        this.patchTyping();
    }
    stop() {
        Patcher.unpatchAll();
    }
    patchTyping() {
        Patcher.instead(TypingModule, "startTyping", (_, [channelId], originalMethod) => {});
    }
}

/*@end */

module.exports = InvisibleTyping;