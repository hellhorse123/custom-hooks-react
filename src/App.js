import React from "react";
import "./App.sass";
import { Routes, Route, Link } from "react-router-dom";
import UseLocalStorageHook from "./customHooks/localStorageHook/UseLocalStorageHook";
import UseToggleHook from "./customHooks/toggle/UseToggleHook";
import UseTimeoutHook from "./customHooks/timeout/UseTimeoutHook";
import UseDebounceHook from "./customHooks/debounce/UseDebounceHook";
import UseUpdateEffectHook from "./customHooks/updateEffect/UseUpdateEffectHook";
import UseArrayHook from "./customHooks/array/UseArrayHook";
import UsePreviousHook from "./customHooks/previous/UsePreviousHook";
import UseStateWithHistoryHook from "./customHooks/stateWithHistory/UseStateWithHistoryHook";
import UseStorageHook from "./customHooks/storage/UseStorageHook";
import UseAsyncHook from "./customHooks/async/UseAsyncHook";
import UseFetchHook from "./customHooks/fetch/UseFetchHook";
import UseScriptHook from "./customHooks/script/UseScriptHook";
import UseDeepCompareEffectHook from "./customHooks/deepCompareEffect/UseDeepCompareEffectHook";
import UseEventListenerHook from "./customHooks/eventListener/UseEventListenerHook";
import UseOnScreenHook from "./customHooks/onScreen/UseOnScreenHook";
import UseWindowSizeHook from "./customHooks/windowSize/UseWindowSizeHook";
import UseMediaQueryHook from "./customHooks/mediaQuery/UseMediaQueryHook";
import UseGeolocationHook from "./customHooks/geolocation/UseGeolocationHook";
import UseStateWithValidationHook from "./customHooks/stateWithValidation/UseStateWithValidationHook";
import UseSizeHook from "./customHooks/size/UseSizeHook";
import UseEffectOnceHook from "./customHooks/effectOnly/UseEffectOnceHook";
import UseClickOutsideHook from "./customHooks/clickOutside/UseClickOutsideHook";
import UseDarkModeHook from "./customHooks/darkMode/UseDarkModeHook";
import UseCopyToClipboardHook from "./customHooks/copyToClipboard/UseCopyToClipboardHook";
import UseCookiesHook from "./customHooks/cookies/UseCookiesHook";
import UseTranslationHook from "./customHooks/translation/UseTranslationHook";
import UseOnlineStatusHook from "./customHooks/onlineStatus/UseOnlineStatusHook";
import UseRenderCountHook from "./customHooks/renderCount/UseRenderCountHook";
import UseDebugInformationHook from "./customHooks/debugInformation/UseDebugInformationHook";
import UseHoverHook from "./customHooks/hover/UseHoverHook";
import UseLongPressHook from "./customHooks/longPress/UseLongPressHook";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link activeClassName="current" to="/localStorage">UseLocalStorageHook</Link>
          </li>
          <li>
            <Link to="/toggle">UseToggleHook</Link>
          </li>
          <li>
            <Link to="/timeout">UseTimeoutHook</Link>
          </li>
          <li>
            <Link to="/debounce">UseDebounceHook</Link>
          </li>
          <li>
            <Link to="/updateEffect">UseUpdateEffectHook</Link>
          </li>
          <li>
            <Link to="/array">UseArrayHook</Link>
          </li>
          <li>
            <Link to="/previous">UsePreviousHook</Link>
          </li>
          <li>
            <Link to="/stateWithHistory">UseStateWithHistoryHook</Link>
          </li>
          <li>
            <Link to="/storage">UseStorageHook</Link>
          </li>
          <li>
            <Link to="/async">UseAsyncHook</Link>
          </li>
          <li>
            <Link to="/fetch">UseFetchHook</Link>
          </li>
          <li>
            <Link to="/script">UseScriptHook</Link>
          </li>
          <li>
            <Link to="/deepCompareEffect">UseDeepCompareEffectHook</Link>
          </li>
          <li>
            <Link to="/eventListener">UseEventListenerHook</Link>
          </li>
          <li>
            <Link to="/onScreen">UseOnScreenHook</Link>
          </li>
          <li>
            <Link to="/windowSize">UseWindowSizeHook</Link>
          </li>
          <li>
            <Link to="/mediaQuery">UseMediaQueryHook</Link>
          </li>
          <li>
            <Link to="/geolocation">UseGeolocationHook</Link>
          </li>
          <li>
            <Link to="/stateWithValidation">UseStateWithValidationHook</Link>
          </li>
          <li>
            <Link to="/size">UseSizeHook</Link>
          </li>
          <li>
            <Link to="/effectOnce">UseEffectOnceHook</Link>
          </li>
          <li>
            <Link to="/clickOutside">UseClickOutsideHook</Link>
          </li>
          <li>
            <Link to="/darkMode">UseDarkModeHook</Link>
          </li>
          <li>
            <Link to="/copyToClipboard">UseCopyToClipboardHook</Link>
          </li>
          <li>
            <Link to="/cookies">UseCookiesHook</Link>
          </li>
          <li>
            <Link to="/translation">UseTranslationHook</Link>
          </li>
          <li>
            <Link to="/onlineStatus">UseOnlineStatusHook</Link>
          </li>
          <li>
            <Link to="/renderCount">UseRenderCountHook</Link>
          </li>
          <li>
            <Link to="/debugInfo">UseDebugInformationHook</Link>
          </li>
          <li>
            <Link to="/hover">UseHoverHook</Link>
          </li>
          <li>
            <Link to="/longPress">UseLongPressHook</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/localStorage" element={<UseLocalStorageHook />} />
          <Route path="/toggle" element={<UseToggleHook />} />
          <Route path="/timeout" element={<UseTimeoutHook />} />
          <Route path="/debounce" element={<UseDebounceHook />} />
          <Route path="/updateEffect" element={<UseUpdateEffectHook />} />
          <Route path="/array" element={<UseArrayHook />} />
          <Route path="/previous" element={<UsePreviousHook />} />
          <Route
            path="/stateWithHistory"
            element={<UseStateWithHistoryHook />}
          />
          <Route path="/storage" element={<UseStorageHook />} />
          <Route path="/async" element={<UseAsyncHook />} />
          <Route path="/fetch" element={<UseFetchHook />} />
          <Route path="/script" element={<UseScriptHook />} />
          <Route
            path="/deepCompareEffect"
            element={<UseDeepCompareEffectHook />}
          />
          <Route path="/eventListener" element={<UseEventListenerHook />} />
          <Route path="/onScreen" element={<UseOnScreenHook />} />
          <Route path="/windowSize" element={<UseWindowSizeHook />} />
          <Route path="/mediaQuery" element={<UseMediaQueryHook />} />
          <Route path="/geolocation" element={<UseGeolocationHook />} />
          <Route
            path="/stateWithValidation"
            element={<UseStateWithValidationHook />}
          />
          <Route path="/size" element={<UseSizeHook />} />
          <Route path="/effectOnce" element={<UseEffectOnceHook />} />
          <Route path="/clickOutside" element={<UseClickOutsideHook />} />
          <Route path="/darkMode" element={<UseDarkModeHook />} />
          <Route path="/copyToClipboard" element={<UseCopyToClipboardHook />} />
          <Route path="/cookies" element={<UseCookiesHook />} />
          <Route path="/translation" element={<UseTranslationHook />} />
          <Route path="/onlineStatus" element={<UseOnlineStatusHook />} />
          <Route path="/renderCount" element={<UseRenderCountHook />} />
          <Route path="/debugInfo" element={<UseDebugInformationHook />} />
          <Route path="/hover" element={<UseHoverHook />} />
          <Route path="/longPress" element={<UseLongPressHook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
