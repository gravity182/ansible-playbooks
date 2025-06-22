/** Most of these settings taken from https://github.com/yokoffing/Betterfox */

/** PRIVACY ***/

/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "standard");

/** Encrypted Client Hello ***/
user_pref("network.dns.echconfig.enabled", true);

/** MOZILLA PERMISSIONS ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** UI ***/

/** MOZILLA UI ***/
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);

// PREF: preferred color scheme for websites and sub-pages
// Dark (0), Light (1), System (2), Browser (3)
user_pref("layout.css.prefers-color-scheme.content-override", 0);

// find the selected work immediately
user_pref("accessibility.typeaheadfind", true);
user_pref("accessibility.typeaheadfind.flashBar", 0);

// disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref(
  "browser.newtabpage.activity-stream.section.highlights.includePocket",
  false
);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/** SCROLLING */
// based on the 'OPTION: SMOOTH SCROLLING'
// if you have a 120+ Hz display, use the 'OPTION: NATURAL SMOOTH SCROLLING V3 [MODIFIED]'
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
// this settings was set at 250 in Betterfox, but it made touchpad scrolling too fast
// I like the default value of 100, so just set it explicitly
user_pref("mousewheel.default.delta_multiplier_y", 100); // Adjust this settings to your liking
// msdPhysics makes scrolling so much better and more pleasant
// default scrolling feels too abrupt after this
user_pref("general.smoothScroll.msdPhysics.enabled", true); // default is false
