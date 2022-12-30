// ==UserScript==
// @name         §§§§§§§§§
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  §§§§§§§§§
// @author       §§§§§§§§§
// @match        https://zichenstudio.netlify.app/*
// @match        http://zichenstudio.netlify.app/*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant GM_log
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.min.js
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==

(function () {
        // Start
        function start() {
            var goto = "fULLJgZW3muInAHiMtKh6Hx7zOELTikXMbRCfvyUJh6dRqXDwb4kuEvblunqsIECsqk1109D7Sr85CC_W07S6oE88sqmkzuPl4nanOGyAoc931LFWKsp3tmzb-Yb7APpo5T6PeY7kPSCuNDGR981TRHc3IqJQizr5tJhRds6HuQeXGwMq5P9GSZ2J45OSEyXMYMzMJtRL-n5oVrIS-Qr05SStLxmJWGm4eDevQUEIbroW9d_-bgxfI-zGOGyTTrEpR45MBhJuAsG5cPMXC7cWT7H18zUKXQl8z5Ps2iXZSmpd7E0xAcKd4_JL8dNy4ilXlxrg-ib1GKGz52W1OJZ385I_EjHAI_9jSbHtxdG7GDokNGa3u_ij-yBghXow03lgictVxktl0ExipmFzMN9-6Pn4PId17d8EMYSen9w4xGkvTF31ZoxDEsHlmdtQu6aVIwA6YiSI1IFuVZ2nNegj71E0oQR5Q95hXYis4tibWXRJDl13HOLxCPQqPrHz8zQ";
            $('#goto').attr("value",goto);
        }
        start();
    })();