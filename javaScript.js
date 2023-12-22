javascript: (function () {
    var bodyWidth = document.body.offsetHeight;
    for (var c = 0, d = Date.now(), g = location.href, f = function (p, w) {
        var div = document.createElement("DIV");
        if ("fb_stories" == w.playerOrigin) {
            var r = p.childNodes;
            for (var y = 0, B = r.length; y < B; y++) {
                var z = r[y], A = z.getAttribute("data-sigil");
                if (A && /m-video-play-button/i.test(A)) {
                    z.style.marginLeft = "30px";
                    break
                }
            }
            r = "bottom:50%;top:50%;left:50%;margin:auto 0px auto -60px;"
        } else r = "top:0px;bottom:0px;right:0px;left:0px;";
        var sw = 100;
        if (isNaN(w.width)) {
            if (isNaN(bodyWidth)) {
                bodyWidth = document.body.offsetHeight;
            }
            sw = bodyWidth * 0.07;
        } else {
            sw = Math.round(w.width * 0.14);
        }
        div.setAttribute("style", "position:absolute;top:15px;bottom:0px;left:15px;right:0px;height:50px;width:50px;background-color:red;opacity:1;z-index:999999; border-radius: 100px 100px 100px 100px;");
        div.innerHTML = '<img style="position:absolute;top:0px;bottom:0px;left:0px;right:0px;padding:20%;height:30px;width:30px; filter: hue-rotate(0deg) saturate(0%); " src="data:image/png;base64,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Y0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAABclpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDIsIDIwMjIvMTIvMDItMTk6MTI6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTItMDFUMTI6MTY6NTkrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEyLTAxVDEyOjE4OjI5KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEyLTAxVDEyOjE4OjI5KzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZGM2ZmQ1Ni03NDU5LTdiNDQtYWZkYy0yNTBmMTE3M2ZlODgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4YTgwNWUyMS03MTY0LTcyNDgtOTU4Ni0xZDVmMWY5YTdjOTYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNTY0YjI4YS01NjE0LWYyNDgtODYwNC1kODk2M2NmNzJiZWMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NjRiMjhhLTU2MTQtZjI0OC04NjA0LWQ4OTYzY2Y3MmJlYyIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0wMVQxMjoxNjo1OSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZGM2ZmQ1Ni03NDU5LTdiNDQtYWZkYy0yNTBmMTE3M2ZlODgiIHN0RXZ0OndoZW49IjIwMjMtMTItMDFUMTI6MTg6MjkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6iD+/ZAAAC9UlEQVR4nO2bv0scQRSAvztTBQMWaa62sEuhZf6DkFSBGFIZAiFglSJ2EVIESwtDCDbpNAhWEUGCRRDL8zDdFUdKmwM1HCeIdy/Fm00up3fe7b7ZXCbzwSKuO7PvY3+8NzNrQUTwgFWnBaN+flG07nDUicKhE4VDJwqHThQOnSgcOlE4dKJw6ETh0InCoROFQycKh04UDp0oHDpROHSicOhE4dCJwqEThUMnCodOFA6dKBw6/6XwEnCGfhBqtVlhGdMZsJQIfwTODQMdNc5Rx6WC+3z4tttx/29G5ZEt4ClQL3R8Lz0ObAN3CefZbgP7wD2gAX+KNYA54Ks78F+njbrM4WQBCl1fxBeAO8AmMJljcD6oAQ+Bb3S8SLuFE2aAz0Apl9DsOQIeAOXuP/R6VsvorVDzF5M3amjsl2Sh/8tpF3gNnJiH5I8TNObdXgf0E24B68AboGkalh+aaKzraOxXIyLXbUURWRCRUxldTkVjLMo1PoPk2zawArxnNKuxczS2FQZIp73e0lcxDqwCj4CxtNEZ0wI2gOd05Np+DFNRNYB54BP9npH8aKGxzDOgLAx3hRNKwAc0z5n/q9yACFonvEBz7sCkEQaYAtaA6TSNDTgAngDVYRumHSRUgWdAJWX7LFTcuYeWhfRXOGEavdJTWToZgip6ZQ/SdpB1GFgBFhjyOUrJkTtXprsqq7Cgg+tXwHHGvvpx7M6xRcYppKy3dMIYmp9X0XxtSQPNsxsYpEOrmY0WOoZ+i23d3XR9bmKU+y2ncpIS7x02MyZt15dtSXtdsZ1iuykiywYDgmXXl2l8PoQRkQkRWRORixSiF67thI/YfAkjIpMispNCeMe19RKX1Vu6FyW05p0Z8PgyWqN7y+u+55+PgFngkP75U9wxs3guYvKYcP8OvHQ/sxxjgu9bOqGIrmhsc7kwaaArA/vksACQ15JKG9gDHgP1jv11t2+PnFY78l5D+gIsAj/ctuj25caNPE/G72XLW+733JdpfwJfQ/H9/p7i3AAAAABJRU5ErkJggg==" />';
        (function (C, D) {
            C.onclick = function () {
                event.stopPropagation();
                var E = JSON.stringify({ js_cb_tag: "dl_click", data: [D] });
                FaceVidDownloader.onDataReceived(E)
            }
        })(div, w);
        p.insertBefore(div, p.firstChild);
        r = p.getBoundingClientRect();
        r = Math.round(r.width);
        150 > r && (70 > r ? (div.style.height = "100%", div.style.width = "100%", div.style.marginTop = "0px", div.style.marginLeft = "0px") : (div.style.height =
            "46px", div.style.width = "46px"))
    }, m = [], n = document.querySelectorAll("div[data-type='video']"), h = 0, a = n.length; h < a; h++) {
        var e = n[h];
        if (!e.getAttribute("leo_attr")) {
            var b = null;
            try {
                b = {
                    videoID: e.getAttribute("data-video-id"),
                    src: e.getAttribute("data-video-url"),
                    playbackIsLiveStreaming: e.getAttribute("data-is-live-streaming"),
                    width: e.offsetWidth
                }
            } catch (p) {
                console.log(p)
            }
            m.push({ elm: e, obj: b })
        }
    }
    for (n = document.querySelectorAll("div[data-sigil='inlineVideo']"), h = 0, a = n.length; h < a; h++) {
        var e = n[h];
        if (!e.getAttribute("leo_attr")) {
            var b = null;
            try {
                b = JSON.parse(e.getAttribute("data-store"))
            } catch (p) {
                console.log(p)
            }
            if (b && b.videoID) {
                if (!b.src) {
                    var k = e.href;
                    k && (k = /video_redirect.+?src=(.+)/i.exec(k)) && (b.src = decodeURIComponent(k[1]))
                }
                b.width = isNaN(e.offsetWidth) ? 432 : e.offsetWidth;
                b.src && m.push({ elm: e, obj: b })
            }
        }
    }

    n = m.length;
    for (h = 0; h < n; h++) {
        b = m[h];
        e = b.elm;
        b = b.obj;
        k = a = null;
        e.setAttribute("leo_attr", !0);
        var l =
            e.getElementsByTagName("i")[0];
        if (l && (l = l.getAttribute("style")) && ((l = /url.+?['"](.+?)['"]/i.exec(l)) && (a = l[1]), a)) {
            a = a.replace(/\\/g, "%").replace(/\s/g, "");
            try {
                a = decodeURIComponent(a)
            } catch (p) {
                console.log(p)
            }
        }
        !a && (l = e.getElementsByTagName("img")[0]) && (a = l.src);
        l = e.childNodes;
        for (var t = 0, x = l.length; t < x; t++) {
            var u = l[t], v = u.nodeName;
            if (v && "SPAN" == v.toUpperCase()) {
                k = u.textContent;
                break
            }
        }
        b = {
            name: "FBD_1V_" + d + ++c + ".mp4",
            from: g,
            videoID: b.videoID,
            videoURL: b.src,
            playerOrigin: b.playerOrigin,
            isLive: b.playbackIsLiveStreaming,
            width: b.width,
            dashManifest: b.dashManifest
        };
        a && (b.thumb =
            a);
        k && (b.duration = k);
        f(e, b)
    }
    if (n <= 0) {
        FaceVidDownloader.startDetectVideo(document.location.href);
        m = document.getElementsByTagName("VIDEO");
        e = 0;
        for (h = m.length; e < h; e++)
            if (a = m[e], !a.getAttribute("leo_attr"))
                if (a.parentNode.getAttribute("leo_attr"))
                    a.setAttribute("leo_attr", !0);
                else if (b = a.src) {
                    n += 1;
                    a.setAttribute("leo_attr", !0);
                    b = {
                        name: "FBD_2V_" + d + ++c + ".mp4",
                        from: g,
                        videoID: video.videoID +" BR_testing",
                        videoURL: b
                    };
                    b.width = isNaN(e.offsetWidth) ? 432 : e.offsetWidth;
                    if (k = a.poster)
                        b.thumb = k;
                    a = a.parentNode;
                    k = /story_fbid=(\d+)/i.exec(a.innerHTML);
                    null != k && (b.videoID = k[1]);
                    f(a, b)
                }
        FaceVidDownloader.finishDetectVideo(document.location.href, n);
        0 == n ? FaceVidDownloader.warningNoVideoDetect() :
            (80 < n, c = JSON.stringify({ js_cb_tag: "new_video_detect" }), FaceVidDownloader.onDataReceived(c))
    }

}());
