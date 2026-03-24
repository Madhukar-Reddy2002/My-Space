<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Madhukar Reddy · Data Engineer & CRO Analyst</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/@studio-freight/lenis@1.0.29/dist/lenis.min.js"></script>
<script src="https://unpkg.com/split-type@0.3.4/umd/index.min.js"></script>
<style>
/* ════════════════════════════════════════════════
   VARIABLES & RESET
════════════════════════════════════════════════ */
:root {
  --bg:#040609; --surface:#0c0e15; --surface2:#11141e;
  --text:#e8edf5; --muted:#52637a;
  --accent:#0ff; --accent-dim:rgba(0,255,255,.12);
  --amber:#f59e0b; --rose:#f43f5e;
  --border:rgba(255,255,255,.055);
  --glass:rgba(12,14,21,.72);
  --radius:16px; --radius-sm:10px;
  --display:'Syne',sans-serif; --mono:'DM Mono',monospace; --body:'Outfit',sans-serif;
}
[data-theme="light"]{
  --bg:#f0f3fa; --surface:#ffffff; --surface2:#f7f9ff;
  --text:#0d1526; --muted:#7080a0;
  --accent:#0077cc; --accent-dim:rgba(0,119,204,.1);
  --border:rgba(0,0,0,.07); --glass:rgba(255,255,255,.78);
}
[data-theme="terminal"]{
  --bg:#000; --surface:#080808; --surface2:#0d0d0d;
  --text:#00ff41; --muted:#1a5c25;
  --accent:#00ff41; --accent-dim:rgba(0,255,65,.08);
  --border:rgba(0,255,65,.12); --glass:rgba(0,0,0,.92);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:auto;-webkit-font-smoothing:antialiased}
body{
  background:var(--bg); color:var(--text);
  font-family:var(--body); line-height:1.6;
  overflow-x:hidden; transition:background .35s,color .35s;
}
a{color:inherit;text-decoration:none}
img{max-width:100%}

/* ════════ NOISE GRAIN ════════ */
body::after{
  content:''; position:fixed; inset:0; pointer-events:none; z-index:9980; opacity:.25;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");
}

/* ════════ SCROLL PROGRESS ════════ */
#sp{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--amber));z-index:9999;width:0;transition:width .08s linear}

/* ════════ CURSOR ════════ */
.cur,.cur-ring{position:fixed;pointer-events:none;border-radius:50%;z-index:9990}
.cur{width:8px;height:8px;background:var(--accent);transform:translate(-50%,-50%)}
.cur-ring{width:34px;height:34px;border:1.5px solid var(--accent);transform:translate(-50%,-50%);transition:width .2s,height .2s,opacity .2s}
body.hovering .cur-ring{width:52px;height:52px;opacity:.4}
@media(hover:none){.cur,.cur-ring{display:none}}

/* ════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════ */
#nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  display:flex;justify-content:space-between;align-items:center;
  padding:1.25rem 5%;
  background:var(--glass);
  backdrop-filter:blur(20px) saturate(1.6);
  -webkit-backdrop-filter:blur(20px) saturate(1.6);
  border-bottom:1px solid var(--border);
  transition:padding .3s;
}
#nav.compact{padding:.8rem 5%}
.nav-logo{font-family:var(--display);font-weight:800;font-size:1.35rem;color:var(--accent);cursor:pointer}
.nav-logo span{color:var(--text)}
.nav-links{display:flex;gap:2.2rem;list-style:none}
.nav-links a{
  font-family:var(--mono);font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;
  color:var(--muted);transition:color .2s;position:relative
}
.nav-links a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:var(--accent);transition:width .3s}
.nav-links a:hover{color:var(--accent)}
.nav-links a:hover::after{width:100%}

/* theme dots */
.theme-bar{display:flex;gap:5px;background:var(--surface2);border:1px solid var(--border);border-radius:999px;padding:5px}
.tdot{
  width:20px;height:20px;border-radius:50%;cursor:pointer;border:none;
  outline:none;transition:transform .2s;position:relative
}
.tdot:hover{transform:scale(1.18)}
.tdot.active::after{content:'';position:absolute;inset:-3px;border-radius:50%;border:2px solid var(--accent)}
.tdot.t-dark{background:#1a2030}
.tdot.t-light{background:#f0f3fa;border:1px solid #dde3ef}
.tdot.t-term{background:#000;border:1px solid #00ff41}

/* hamburger */
.ham{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:9px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm)}
.ham span{display:block;width:22px;height:2px;background:var(--text);border-radius:2px;transition:all .35s cubic-bezier(.4,0,.2,1)}
.ham.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.ham.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.ham.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* mobile overlay */
.mob-overlay{
  position:fixed;inset:0;z-index:990;background:var(--bg);
  display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.8rem;
  opacity:0;pointer-events:none;transition:opacity .4s
}
.mob-overlay.open{opacity:1;pointer-events:all}
.mob-overlay a{
  font-family:var(--display);font-size:clamp(2rem,9vw,3.8rem);font-weight:800;
  color:var(--text);opacity:0;transform:translateY(28px);transition:color .2s
}
.mob-overlay.open a{animation:slideUp .5s forwards}
.mob-overlay.open a:nth-child(1){animation-delay:.05s}
.mob-overlay.open a:nth-child(2){animation-delay:.10s}
.mob-overlay.open a:nth-child(3){animation-delay:.15s}
.mob-overlay.open a:nth-child(4){animation-delay:.20s}
.mob-overlay.open a:nth-child(5){animation-delay:.25s}
.mob-overlay.open a:nth-child(6){animation-delay:.30s}
.mob-overlay a:hover{color:var(--accent)}
@keyframes slideUp{to{opacity:1;transform:translateY(0)}}

/* ════════════════════════════════════════════════
   PAGE SYSTEM (SPA)
════════════════════════════════════════════════ */
.page{display:none}
.page.active{display:block}

/* ════════════════════════════════════════════════
   HERO
════════════════════════════════════════════════ */
#hero{
  min-height:100vh;display:flex;flex-direction:column;
  justify-content:center;padding:11rem 5% 7rem;position:relative;overflow:hidden
}
/* Grid lines */
.h-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:70px 70px;
  -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 40%,#000 20%,transparent 80%);
  mask-image:radial-gradient(ellipse 80% 80% at 50% 40%,#000 20%,transparent 80%)
}
/* glow blob */
.h-glow{
  position:absolute;width:700px;height:700px;
  background:radial-gradient(circle,var(--accent-dim) 0%,transparent 65%);
  top:50%;left:40%;transform:translate(-50%,-50%);pointer-events:none
}
.hero-inner{position:relative;z-index:1;max-width:960px}
.h-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  background:var(--surface2);border:1px solid var(--border);
  border-radius:999px;padding:.38rem 1rem;margin-bottom:2rem;
  font-family:var(--mono);font-size:.73rem;color:var(--accent);letter-spacing:.05em
}
.h-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:blink-dot 2s infinite}
@keyframes blink-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
.h-title{
  font-family:var(--display);font-weight:800;
  font-size:clamp(3rem,7.5vw,6.8rem);line-height:1.0;letter-spacing:-.03em;margin-bottom:1.6rem
}
.h-title .line{display:block;overflow:hidden}
.h-title .ac{color:var(--accent)}
.h-sub{font-size:clamp(1rem,1.8vw,1.2rem);color:var(--muted);max-width:560px;margin-bottom:3rem;line-height:1.75}
.h-ctas{display:flex;gap:1rem;flex-wrap:wrap}

/* Buttons */
.btn-p{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.85rem 2rem;background:var(--accent);color:#000;
  font-family:var(--display);font-weight:700;font-size:.9rem;
  border:none;border-radius:999px;cursor:pointer;position:relative;overflow:hidden;
  transition:transform .25s,box-shadow .25s
}
.btn-p:hover{transform:translateY(-3px);box-shadow:0 10px 32px var(--accent-dim)}
.btn-n{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.85rem 2rem;background:var(--surface2);color:var(--text);
  font-family:var(--display);font-weight:600;font-size:.9rem;
  border:1px solid var(--border);border-radius:999px;cursor:pointer;
  box-shadow:5px 5px 12px rgba(0,0,0,.35),-2px -2px 8px rgba(255,255,255,.02);
  transition:all .25s
}
.btn-n:hover{transform:translateY(-3px);border-color:var(--accent);color:var(--accent);box-shadow:0 10px 28px rgba(0,0,0,.4)}

/* stats */
.h-stats{
  display:flex;gap:3.5rem;flex-wrap:wrap;
  margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)
}
.stat-num{font-family:var(--display);font-size:2.4rem;font-weight:800;color:var(--accent);line-height:1}
.stat-label{font-family:var(--mono);font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:.25rem}

/* scroll cue */
.scroll-cue{
  position:absolute;bottom:3rem;left:5%;
  display:flex;flex-direction:column;align-items:center;gap:.5rem;
  color:var(--muted);font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase
}
.sc-line{width:1px;height:52px;background:linear-gradient(to bottom,var(--accent),transparent);animation:sc 2.2s ease-in-out infinite}
@keyframes sc{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}

/* ════════════════════════════════════════════════
   SKILLS MARQUEE
════════════════════════════════════════════════ */
#skills-bar{
  overflow:hidden;padding:3.5rem 0;
  background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)
}
.mq-track{
  display:flex;gap:1.2rem;width:max-content;
  animation:mq 28s linear infinite
}
.mq-track:hover{animation-play-state:paused}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.spill{
  display:inline-flex;align-items:center;gap:.5rem;white-space:nowrap;
  padding:.55rem 1.3rem;background:var(--surface2);
  border:1px solid var(--border);border-radius:999px;
  font-family:var(--mono);font-size:.78rem;color:var(--muted);
  transition:border-color .2s,color .2s;flex-shrink:0
}
.spill:hover{border-color:var(--accent);color:var(--accent)}
.sd{width:6px;height:6px;border-radius:50%}

/* ════════════════════════════════════════════════
   SHARED SECTION STYLES
════════════════════════════════════════════════ */
.sec{padding:8rem 5%}
.sec-tag{
  display:inline-flex;align-items:center;gap:.4rem;
  font-family:var(--mono);font-size:.73rem;color:var(--accent);
  text-transform:uppercase;letter-spacing:.09em;margin-bottom:.9rem
}
.sec-tag::before{content:'//';color:var(--muted)}
.sec-h{
  font-family:var(--display);font-size:clamp(2rem,4.5vw,3.4rem);
  font-weight:800;letter-spacing:-.025em;line-height:1.1;margin-bottom:.9rem
}
.sec-sub{color:var(--muted);max-width:580px;margin-bottom:3.5rem;line-height:1.75}
.reveal{opacity:0;transform:translateY(44px)}

/* ════════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════════ */
#about{background:var(--bg)}
.ab-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:5rem;align-items:center}
.ab-text p{color:var(--muted);line-height:1.8;margin-bottom:1.4rem}
.ab-ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem}

/* terminal card */
.term-card{background:#000;border:1px solid rgba(0,255,255,.2);border-radius:var(--radius);overflow:hidden;box-shadow:0 0 50px rgba(0,255,255,.04)}
.term-bar{
  background:#0a0a10;padding:.7rem 1rem;
  display:flex;align-items:center;gap:.45rem;
  border-bottom:1px solid rgba(255,255,255,.04)
}
.t-r{background:#ff5f57;width:11px;height:11px;border-radius:50%}
.t-y{background:#febc2e;width:11px;height:11px;border-radius:50%}
.t-g{background:#28c840;width:11px;height:11px;border-radius:50%}
.term-path{margin-left:.4rem;font-family:var(--mono);font-size:.72rem;color:#3a4a5a}
.term-body{padding:1.5rem;font-family:var(--mono);font-size:.8rem;line-height:2.1}
.tc{color:#3a4a5a}.tk{color:#22d3ee}.tv{color:#a78bfa}.ts{color:#f59e0b}.tg{color:#4ade80}.tcur{display:inline-block;width:7px;height:.9em;background:var(--accent);vertical-align:text-bottom;animation:blink .9s step-end infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* ════════════════════════════════════════════════
   PIPELINES / FROST CARDS
════════════════════════════════════════════════ */
#pipelines{background:var(--surface)}
.pipe-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.4rem}
.fc{
  background:var(--glass);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border:1px solid var(--border);border-radius:var(--radius);
  padding:2rem;position:relative;overflow:hidden;
  transition:transform .3s,box-shadow .3s,border-color .3s
}
.fc::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--accent-dim) 0%,transparent 55%);pointer-events:none}
.fc:hover{transform:translateY(-6px);box-shadow:0 22px 55px rgba(0,0,0,.35),0 0 0 1px var(--accent);border-color:var(--accent)}
.fc.feat{border-left:3px solid var(--accent)}
.fc-icon{width:46px;height:46px;background:var(--accent-dim);border:1px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1.4rem}
.fc h3{font-family:var(--display);font-weight:700;font-size:1.1rem;margin-bottom:.7rem;letter-spacing:-.01em}
.fc p{color:var(--muted);font-size:.88rem;line-height:1.7}
.fc-tags{display:flex;gap:.45rem;flex-wrap:wrap;margin-top:1.4rem}
.tag{font-family:var(--mono);font-size:.68rem;padding:.22rem .7rem;background:var(--surface2);border:1px solid var(--border);border-radius:4px;color:var(--muted)}
.etl-row{display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;margin-top:1.4rem}
.en{padding:.25rem .7rem;background:var(--surface2);border:1px solid var(--border);border-radius:5px;font-family:var(--mono);font-size:.68rem;color:var(--accent)}
.ea{color:var(--muted);font-size:.75rem}

/* ════════════════════════════════════════════════
   CRO / EXPERIENCE
════════════════════════════════════════════════ */
#cro{background:var(--bg)}
.exp-list{display:grid;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.exp-item{
  background:var(--surface);padding:2.4rem;
  display:grid;grid-template-columns:36px 1fr auto;gap:2rem;align-items:start;
  transition:background .2s;cursor:default
}
.exp-item:hover{background:var(--surface2)}
.exp-n{font-family:var(--mono);font-size:.76rem;color:var(--muted);padding-top:.2rem}
.exp-ttl{font-family:var(--display);font-weight:700;font-size:1.15rem;margin-bottom:.5rem;letter-spacing:-.01em}
.exp-desc{color:var(--muted);font-size:.875rem;line-height:1.65}
.exp-badge{
  font-family:var(--mono);font-size:.68rem;padding:.28rem .8rem;
  border-radius:999px;border:1px solid var(--accent);color:var(--accent);white-space:nowrap;align-self:start
}

/* ════════════════════════════════════════════════
   PROJECTS
════════════════════════════════════════════════ */
#projects{background:var(--surface)}
.proj-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.4rem}
.proj-card{
  background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);
  overflow:hidden;transition:transform .3s,box-shadow .3s,border-color .3s;cursor:pointer
}
.proj-card:hover{transform:translateY(-5px);box-shadow:0 18px 45px rgba(0,0,0,.3);border-color:var(--accent)}
.proj-thumb{height:190px;background:var(--surface);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.proj-em{font-size:3.2rem;transition:transform .5s;z-index:1;position:relative}
.proj-card:hover .proj-em{transform:scale(1.12)}
.proj-overlay{position:absolute;inset:0;background:linear-gradient(to top,var(--surface2) 0%,transparent 60%)}
.proj-body{padding:1.4rem}
.proj-body h3{font-family:var(--display);font-weight:700;font-size:1.05rem;margin-bottom:.5rem}
.proj-body p{color:var(--muted);font-size:.86rem;line-height:1.65;margin-bottom:1rem}
.proj-footer{display:flex;justify-content:space-between;align-items:center;padding:.9rem 1.4rem;border-top:1px solid var(--border)}
.proj-link{font-family:var(--mono);font-size:.73rem;color:var(--accent);display:flex;align-items:center;gap:.3rem;transition:gap .2s}
.proj-link:hover{gap:.6rem}

/* ════════════════════════════════════════════════
   CONTACT
════════════════════════════════════════════════ */
#contact{background:var(--bg)}
.ct-box{max-width:680px;margin:0 auto;text-align:center}
.ct-box .sec-h{margin-bottom:1rem}
.ct-box p{color:var(--muted);margin-bottom:3rem;line-height:1.7}
.ct-links{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.ct-pill{
  display:inline-flex;align-items:center;gap:.75rem;padding:1rem 1.65rem;
  background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);
  font-family:var(--mono);font-size:.82rem;color:var(--text);
  box-shadow:4px 4px 12px rgba(0,0,0,.25),-2px -2px 8px rgba(255,255,255,.02);
  transition:all .3s
}
.ct-pill:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-3px);box-shadow:0 14px 32px rgba(0,0,0,.3)}

/* footer */
footer{padding:1.8rem 5%;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
footer p{font-family:var(--mono);font-size:.73rem;color:var(--muted)}
footer a{color:var(--accent)}

/* ════════════════════════════════════════════════
   GITHUB PAGE
════════════════════════════════════════════════ */
#github-page{min-height:100vh;padding:8rem 5% 5rem;background:var(--bg)}
.gh-back{
  display:inline-flex;align-items:center;gap:.5rem;margin-bottom:2.5rem;
  font-family:var(--mono);font-size:.78rem;color:var(--muted);cursor:pointer;transition:color .2s
}
.gh-back:hover{color:var(--accent)}
.gh-stats{
  display:flex;gap:0;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  overflow:hidden;margin-bottom:3rem;flex-wrap:wrap
}
.gh-stat{padding:1.8rem 2.5rem;border-right:1px solid var(--border);flex:1;min-width:120px}
.gh-stat:last-child{border-right:none}
.gh-stat-n{font-family:var(--display);font-size:2rem;font-weight:800;color:var(--accent);line-height:1}
.gh-stat-l{font-family:var(--mono);font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:.3rem}
.repo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.4rem}
.repo-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  padding:1.6rem;display:flex;flex-direction:column;gap:.9rem;
  transition:all .3s;color:var(--text)
}
.repo-card:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,0,0,.25)}
.repo-name{font-family:var(--display);font-weight:700;color:var(--accent);font-size:1rem}
.repo-desc{color:var(--muted);font-size:.85rem;line-height:1.6;flex:1}
.repo-meta{display:flex;gap:1.4rem}
.rs{display:flex;align-items:center;gap:.35rem;font-family:var(--mono);font-size:.73rem;color:var(--muted)}
.ld{width:10px;height:10px;border-radius:50%}
.gh-cta{margin-top:3rem;text-align:center}

/* ════════════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════════════ */
@media(max-width:960px){
  .nav-links,.theme-bar{display:none}
  .ham{display:flex}
  .ab-grid{grid-template-columns:1fr;gap:3rem}
  .exp-item{grid-template-columns:28px 1fr}
  .exp-badge{display:none}
}
@media(max-width:600px){
  .sec{padding:5rem 5%}
  #hero{padding:9rem 5% 5rem}
  .h-stats{gap:2rem}
  .h-ctas{flex-direction:column}
  .btn-p,.btn-n{justify-content:center}
}
</style>
</head>
<body>

<div id="sp"></div>
<div class="cur" id="cur"></div>
<div class="cur-ring" id="curRing"></div>

<!-- ═══ NAV ═══ -->
<nav id="nav">
  <div class="nav-logo" onclick="showPage('main')">DMR<span>.data</span></div>
  <ul class="nav-links">
    <li><a href="#about" onclick="scrollTo('about')">About</a></li>
    <li><a href="#pipelines" onclick="scrollTo('pipelines')">Pipelines</a></li>
    <li><a href="#cro" onclick="scrollTo('cro')">CRO</a></li>
    <li><a href="#projects" onclick="scrollTo('projects')">Work</a></li>
    <li><a href="#" onclick="showPage('github');return false">GitHub ↗</a></li>
    <li><a href="#contact" onclick="scrollTo('contact')">Contact</a></li>
  </ul>
  <div style="display:flex;align-items:center;gap:.9rem">
    <div class="theme-bar">
      <button class="tdot t-dark active" onclick="setTheme('dark')" title="Dark"></button>
      <button class="tdot t-light" onclick="setTheme('light')" title="Light"></button>
      <button class="tdot t-term" onclick="setTheme('terminal')" title="Terminal"></button>
    </div>
    <div class="ham" id="ham" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>

<!-- ═══ MOBILE OVERLAY ═══ -->
<div class="mob-overlay" id="mob">
  <a href="#about" onclick="closeMenu()">About</a>
  <a href="#pipelines" onclick="closeMenu()">Pipelines</a>
  <a href="#cro" onclick="closeMenu()">CRO</a>
  <a href="#projects" onclick="closeMenu()">Work</a>
  <a href="#" onclick="showPage('github');closeMenu();return false">GitHub</a>
  <a href="#contact" onclick="closeMenu()">Contact</a>
</div>

<!-- ════════════════════════════════════════════════
     MAIN PAGE
════════════════════════════════════════════════ -->
<div id="main-page" class="page active">

<!-- HERO -->
<section id="hero">
  <div class="h-grid"></div>
  <div class="h-glow"></div>
  <div class="hero-inner">
    <div class="h-eyebrow"><span class="h-dot"></span>Open to Data & Analytics Roles — 2025</div>
    <h1 class="h-title">
      <span class="line">Turning Raw Data</span>
      <span class="line">Into <span class="ac">Conversions.</span></span>
    </h1>
    <p class="h-sub">CRO Analyst & Data Engineer at iQuanti — building ETL pipelines, A/B testing frameworks, and Power BI dashboards that drive measurable growth for BFSI clients.</p>
    <div class="h-ctas">
      <button class="btn-p" onclick="document.getElementById('pipelines').scrollIntoView({behavior:'smooth'})">Explore My Work ↗</button>
      <button class="btn-n" onclick="showPage('github')">GitHub Portfolio</button>
    </div>
    <div class="h-stats">
      <div><div class="stat-num" id="c1">0</div><div class="stat-label">Years in CRO</div></div>
      <div><div class="stat-num" id="c2">0</div><div class="stat-label">A/B Tests Run</div></div>
      <div><div class="stat-num" id="c3">0</div><div class="stat-label">Hours Saved / Week</div></div>
      <div><div class="stat-num" id="c4">0</div><div class="stat-label">Enterprise Clients</div></div>
    </div>
  </div>
  <div class="scroll-cue"><div class="sc-line"></div><span>Scroll</span></div>
</section>

<!-- SKILLS MARQUEE -->
<section id="skills-bar">
  <div class="mq-track" id="mq">
    <!-- pills duplicated for infinite loop -->
    <div class="spill"><span class="sd" style="background:#4ade80"></span>Python</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>Snowflake</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Power BI Service</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>SQL</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>VWO</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>GA4</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Adobe Analytics</div>
    <div class="spill"><span class="sd" style="background:#4ade80"></span>ETL Automation</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>A/B Testing</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>Power Automate</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>DAX</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Streamlit</div>
    <div class="spill"><span class="sd" style="background:#4ade80"></span>Pandas</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>GitHub Actions</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>Statistical Testing</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>Funnel Analysis</div>
    <!-- duplicate for seamless loop -->
    <div class="spill"><span class="sd" style="background:#4ade80"></span>Python</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>Snowflake</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Power BI Service</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>SQL</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>VWO</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>GA4</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Adobe Analytics</div>
    <div class="spill"><span class="sd" style="background:#4ade80"></span>ETL Automation</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>A/B Testing</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>Power Automate</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>DAX</div>
    <div class="spill"><span class="sd" style="background:#f59e0b"></span>Streamlit</div>
    <div class="spill"><span class="sd" style="background:#4ade80"></span>Pandas</div>
    <div class="spill"><span class="sd" style="background:#818cf8"></span>GitHub Actions</div>
    <div class="spill"><span class="sd" style="background:#f43f5e"></span>Statistical Testing</div>
    <div class="spill"><span class="sd" style="background:#22d3ee"></span>Funnel Analysis</div>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="sec" style="background:var(--bg)">
  <div class="reveal">
    <span class="sec-tag">Who I Am</span>
    <div class="ab-grid">
      <div class="ab-text">
        <h2 class="sec-h">Data Engineer &amp;<br>CRO Strategist.</h2>
        <p>I work at the intersection of data engineering and conversion optimization — building the pipelines that make analytics possible, then using those analytics to drive measurable business outcomes.</p>
        <p>At iQuanti I support BFSI clients including Kapitus with end-to-end analytics: raw data ingestion into Snowflake, A/B testing dashboards in Power BI Service, and automation workflows that cut manual effort by 4+ hours a week.</p>
        <p>Currently deepening Python pipeline work — building daily-scheduled ETL jobs with GitHub Actions as part of a broader data management skillset.</p>
        <div class="ab-ctas">
          <button class="btn-p" onclick="document.getElementById('pipelines').scrollIntoView({behavior:'smooth'})">See Pipelines</button>
          <button class="btn-n" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Let's Talk</button>
        </div>
      </div>
      <div>
        <div class="term-card">
          <div class="term-bar">
            <div class="t-r"></div><div class="t-y"></div><div class="t-g"></div>
            <span class="term-path">~/madhukar/profile.py</span>
          </div>
          <div class="term-body">
            <span class="tc"># Madhukar Reddy — Data Profile</span><br><br>
            <span class="tk">role</span> <span class="tc">= </span><span class="ts">"CRO Analyst &amp; Data Engineer"</span><br>
            <span class="tk">company</span> <span class="tc">= </span><span class="ts">"iQuanti"</span><br>
            <span class="tk">client</span> <span class="tc">= </span><span class="ts">"Kapitus (BFSI)"</span><br><br>
            <span class="tk">stack</span> <span class="tc">= [</span><br>
            &nbsp;&nbsp;<span class="tg">"Snowflake"</span><span class="tc">,</span><br>
            &nbsp;&nbsp;<span class="tg">"Python"</span><span class="tc">,</span><br>
            &nbsp;&nbsp;<span class="tg">"Power BI Service"</span><span class="tc">,</span><br>
            &nbsp;&nbsp;<span class="tg">"GitHub Actions"</span><br>
            <span class="tc">]</span><br><br>
            <span class="tk">print</span><span class="tc">(</span><span class="ts">"Ready to build."</span><span class="tc">)</span><br>
            <span class="tg">Ready to build.</span><br>
            <span class="tc">$ </span><span class="tcur"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PIPELINES -->
<section id="pipelines" class="sec" style="background:var(--surface)">
  <div class="reveal">
    <span class="sec-tag">Data Engineering</span>
    <h2 class="sec-h">Pipelines &amp;<br>Automation.</h2>
    <p class="sec-sub">End-to-end data workflows — from raw experiment data to stakeholder-ready dashboards, automated and scheduled.</p>
  </div>
  <div class="pipe-grid">
    <div class="fc feat reveal">
      <div class="fc-icon">⚡</div>
      <h3>VWO → Snowflake → Power BI</h3>
      <p>Automated the complete data journey for A/B experiment results. Python scripts fetch raw VWO data, transform and load into Snowflake, feeding real-time Power BI dashboards for stakeholders.</p>
      <div class="etl-row">
        <div class="en">VWO API</div><span class="ea">→</span>
        <div class="en">Python</div><span class="ea">→</span>
        <div class="en">Snowflake</div><span class="ea">→</span>
        <div class="en">Power BI</div>
      </div>
      <div class="fc-tags"><span class="tag">ETL</span><span class="tag">Python</span><span class="tag">Automation</span><span class="tag">Snowflake</span></div>
    </div>
    <div class="fc reveal">
      <div class="fc-icon">📊</div>
      <h3>BFSI Funnel Analytics</h3>
      <p>GA4 and Adobe Analytics used to pinpoint high-dropoff moments in credit card and loan application journeys. Findings translated directly into A/B test hypotheses with quantified revenue impact.</p>
      <div class="fc-tags"><span class="tag">GA4</span><span class="tag">Adobe Analytics</span><span class="tag">Funnel Analysis</span></div>
    </div>
    <div class="fc reveal">
      <div class="fc-icon">🤖</div>
      <h3>RPA Reporting Automation</h3>
      <p>Power Automate workflows handle bi-weekly experiment reporting cycles end-to-end. Saves 4+ hours of manual data entry per week across client reporting pipelines.</p>
      <div class="fc-tags"><span class="tag">Power Automate</span><span class="tag">RPA</span><span class="tag">Scheduling</span></div>
    </div>
    <div class="fc reveal">
      <div class="fc-icon">🔄</div>
      <h3>GitHub Actions Daily Pipeline</h3>
      <p>Python-based data pipeline with daily automation via GitHub Actions — fetching from public APIs, transforming with Pandas, and loading clean data into Snowflake on a schedule.</p>
      <div class="etl-row">
        <div class="en">API</div><span class="ea">→</span>
        <div class="en">Pandas</div><span class="ea">→</span>
        <div class="en">Snowflake</div>
      </div>
      <div class="fc-tags"><span class="tag">GitHub Actions</span><span class="tag">CI/CD</span><span class="tag">Python</span></div>
    </div>
  </div>
</section>

<!-- CRO -->
<section id="cro" class="sec" style="background:var(--bg)">
  <div class="reveal">
    <span class="sec-tag">CRO Strategy</span>
    <h2 class="sec-h">Experimentation<br>&amp; Optimization.</h2>
    <p class="sec-sub">Structuring A/B tests across BFSI funnels that produce statistically significant, revenue-moving results.</p>
  </div>
  <div class="exp-list reveal">
    <div class="exp-item">
      <span class="exp-n">01</span>
      <div>
        <div class="exp-ttl">LEAP TEST 4 — Form Funnel Optimization</div>
        <div class="exp-desc">Built the complete Power BI Service dashboard analyzing Control vs. Variant across Short Form and Long Form funnels using Snowflake-sourced DAX measures. Produced significant net long form submit rate uplift.</div>
      </div>
      <span class="exp-badge">Kapitus</span>
    </div>
    <div class="exp-item">
      <span class="exp-n">02</span>
      <div>
        <div class="exp-ttl">CRO Audit — Landing Page Deep Dive</div>
        <div class="exp-desc">Full audit identifying critical friction: lengthy multi-step form, missing social proof above the fold, TCPA consent friction. Delivered prioritized action table with estimated conversion impact per fix.</div>
      </div>
      <span class="exp-badge">CRO Audit</span>
    </div>
    <div class="exp-item">
      <span class="exp-n">03</span>
      <div>
        <div class="exp-ttl">A/B Test Roadmap — Tests 7–9</div>
        <div class="exp-desc">Designed the spring test roadmap — hypothesis-backed experiments spanning social proof, form UX, and CTA placement, prioritized on prior test learnings and expected uplift.</div>
      </div>
      <span class="exp-badge">Strategy</span>
    </div>
    <div class="exp-item">
      <span class="exp-n">04</span>
      <div>
        <div class="exp-ttl">Dark Neon Glassmorphic Power BI Dashboard</div>
        <div class="exp-desc">Designed and built a dark neon glassmorphic dashboard in Power BI Service (not Desktop) using Kapitus brand colors, DAX measures, and Snowflake as the live data source.</div>
      </div>
      <span class="exp-badge">Power BI</span>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="sec" style="background:var(--surface)">
  <div class="reveal">
    <span class="sec-tag">Open Source & Personal Projects</span>
    <h2 class="sec-h">Code &amp;<br>Case Studies.</h2>
    <p class="sec-sub">Personal data projects that demonstrate technical depth beyond client work.</p>
  </div>
  <div class="proj-grid">
    <div class="proj-card reveal" onclick="showPage('github')">
      <div class="proj-thumb"><div class="proj-em">📊</div><div class="proj-overlay"></div></div>
      <div class="proj-body">
        <h3>Data Genie</h3>
        <p>Automated EDA tool built with Streamlit. Upload any CSV and get instant statistical insights, correlation matrices, and Plotly visualizations — no code required.</p>
        <div class="fc-tags"><span class="tag">Python</span><span class="tag">Streamlit</span><span class="tag">Pandas</span><span class="tag">Plotly</span></div>
      </div>
      <div class="proj-footer">
        <span class="proj-link">View on GitHub →</span>
        <span class="tag">EDA Tool</span>
      </div>
    </div>
    <div class="proj-card reveal" onclick="showPage('github')">
      <div class="proj-thumb"><div class="proj-em">🔄</div><div class="proj-overlay"></div></div>
      <div class="proj-body">
        <h3>Snowflake ETL Pipeline</h3>
        <p>Daily-scheduled Python pipeline via GitHub Actions. Fetches public APIs, transforms with Pandas, and loads clean data into Snowflake automatically every 24 hours.</p>
        <div class="fc-tags"><span class="tag">Python</span><span class="tag">Snowflake</span><span class="tag">GitHub Actions</span></div>
      </div>
      <div class="proj-footer">
        <span class="proj-link">View on GitHub →</span>
        <span class="tag">ETL</span>
      </div>
    </div>
    <div class="proj-card reveal" onclick="showPage('github')">
      <div class="proj-thumb"><div class="proj-em">📈</div><div class="proj-overlay"></div></div>
      <div class="proj-body">
        <h3>A/B Test Statistical Engine</h3>
        <p>Python module for frequentist significance testing. Calculates p-values, confidence intervals, and minimum detectable effect sizes from raw experiment data.</p>
        <div class="fc-tags"><span class="tag">Python</span><span class="tag">SciPy</span><span class="tag">Stats</span></div>
      </div>
      <div class="proj-footer">
        <span class="proj-link">View on GitHub →</span>
        <span class="tag">Stats</span>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="sec" style="background:var(--bg)">
  <div class="ct-box reveal">
    <span class="sec-tag">Get In Touch</span>
    <h2 class="sec-h">Let's Build<br>Something.</h2>
    <p>Open to Data Analyst, Data Engineer, or CRO Specialist roles. Always happy to discuss pipelines, A/B frameworks, or analytics strategy over a call.</p>
    <div class="ct-links">
      <a class="ct-pill" href="mailto:madhukar@email.com"><span>✉️</span>madhukar@email.com</a>
      <a class="ct-pill" href="https://linkedin.com/in/madhukar-reddy" target="_blank"><span>💼</span>LinkedIn</a>
      <a class="ct-pill" href="https://github.com/Madhukar-Reddy2002" target="_blank"><span>⬡</span>GitHub</a>
    </div>
  </div>
</section>

<footer>
  <p>© 2025 Madhukar Reddy. Built with precision.</p>
  <p><a href="https://github.com/Madhukar-Reddy2002" target="_blank">github.com/Madhukar-Reddy2002</a></p>
</footer>
</div><!-- /main-page -->

<!-- ════════════════════════════════════════════════
     GITHUB PAGE
════════════════════════════════════════════════ -->
<div id="github-page" class="page">
<section style="min-height:100vh;padding:8rem 5% 5rem;background:var(--bg)">
  <div class="gh-back" onclick="showPage('main')">← Back to Portfolio</div>
  <span class="sec-tag">GitHub Profile</span>
  <h2 class="sec-h" style="margin-bottom:.4rem">Madhukar-Reddy2002</h2>
  <p style="color:var(--muted);font-family:var(--mono);font-size:.82rem;margin-bottom:2.5rem">CRO Analyst · Data Engineer · Open Source Builder · Bengaluru, IN</p>
  
  <div class="gh-stats">
    <div class="gh-stat"><div class="gh-stat-n">12</div><div class="gh-stat-l">Repositories</div></div>
    <div class="gh-stat"><div class="gh-stat-n">847</div><div class="gh-stat-l">Contributions</div></div>
    <div class="gh-stat"><div class="gh-stat-n">24</div><div class="gh-stat-l">Stars Earned</div></div>
    <div class="gh-stat"><div class="gh-stat-n">6</div><div class="gh-stat-l">Following</div></div>
  </div>
  
  <div class="repo-grid">
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">📊 data-genie</div>
      <div class="repo-desc">Automated EDA tool using Streamlit. Upload CSV, get instant statistical insights, correlation matrices, and interactive Plotly visualizations.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#3572a5"></span>Python</span>
        <span class="rs">⭐ 8</span><span class="rs">🍴 3</span>
      </div>
    </a>
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">🔄 snowflake-etl-pipeline</div>
      <div class="repo-desc">Daily automated data pipeline: public API → Pandas transform → Snowflake load. Scheduled via GitHub Actions. Zero manual intervention required.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#3572a5"></span>Python</span>
        <span class="rs">⭐ 5</span><span class="rs">🍴 1</span>
      </div>
    </a>
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">📈 ab-test-engine</div>
      <div class="repo-desc">Statistical A/B test analysis module. Chi-square, t-tests, confidence intervals, and MDE calculations from raw experiment data tables.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#3572a5"></span>Python</span>
        <span class="rs">⭐ 6</span><span class="rs">🍴 2</span>
      </div>
    </a>
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">🌐 portfolio-v2</div>
      <div class="repo-desc">This portfolio site — vanilla HTML/CSS/JS with GSAP ScrollTrigger, Lenis smooth scroll, and SplitType animations. Zero frameworks, full creative control.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#e34c26"></span>HTML</span>
        <span class="rs">⭐ 5</span>
      </div>
    </a>
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">📉 funnel-analyzer</div>
      <div class="repo-desc">BFSI conversion funnel analysis toolkit. Identifies dropout breakpoints and generates hypothesis-ready reports from GA4 / Adobe export data.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#3572a5"></span>Python</span>
        <span class="rs">⭐ 4</span>
      </div>
    </a>
    <a class="repo-card" href="https://github.com/Madhukar-Reddy2002" target="_blank">
      <div class="repo-name">🤖 power-automate-templates</div>
      <div class="repo-desc">Documented Power Automate flow templates for bi-weekly experiment reporting cycles. Reduces manual reporting effort by 4+ hours per week.</div>
      <div class="repo-meta">
        <span class="rs"><span class="ld" style="background:#4ec9b0"></span>Power FX</span>
        <span class="rs">⭐ 2</span>
      </div>
    </a>
  </div>
  
  <div class="gh-cta">
    <a class="btn-p" href="https://github.com/Madhukar-Reddy2002" target="_blank">View Full Profile on GitHub ↗</a>
  </div>
</section>
</div><!-- /github-page -->

<!-- ════════════════════════════════════════════════
     SCRIPTS
════════════════════════════════════════════════ -->
<script>
/* ── SPA ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const p = document.getElementById(id + '-page');
  if (p) { p.classList.add('active'); window.scrollTo(0,0); }
}
function scrollTo(id) {
  showPage('main');
  setTimeout(() => { const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }, 50);
}

/* ── THEME ── */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.tdot').forEach(d => d.classList.remove('active'));
  const m = {dark:'t-dark',light:'t-light',terminal:'t-term'};
  document.querySelector('.' + m[t])?.classList.add('active');
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  const h = document.getElementById('ham'), m = document.getElementById('mob');
  h.classList.toggle('open'); m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── CURSOR ── */
const cur = document.getElementById('cur'), ring = document.getElementById('curRing');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx+'px'; cur.style.top = my+'px';
});
(function loop() {
  rx += (mx - rx) * .11; ry += (my - ry) * .11;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.proj-card,.exp-item,.repo-card,.fc,.ct-pill').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

/* ── SCROLL PROGRESS ── */
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  document.getElementById('sp').style.width = (pct * 100) + '%';
  document.getElementById('nav').classList.toggle('compact', window.scrollY > 80);
});

/* ── LENIS + GSAP ── */
gsap.registerPlugin(ScrollTrigger);
let lenis;
try {
  lenis = new Lenis({ lerp: 0.085, smooth: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
} catch(e) { /* Lenis unavailable, fallback */ }

/* ── HERO ENTRANCE ── */
const tl = gsap.timeline({ delay: .1 });
tl.from('.h-eyebrow', { opacity:0, y:20, duration:.7, ease:'power3.out' })
  .from('.h-title .line', { opacity:0, y:70, duration:1, stagger:.18, ease:'power4.out' }, '-=.3')
  .from('.h-sub', { opacity:0, y:30, duration:.8, ease:'power3.out' }, '-=.4')
  .from('.h-ctas', { opacity:0, y:24, duration:.7, ease:'power3.out' }, '-=.4')
  .from('#c1,#c2,#c3,#c4', { opacity:0, y:20, duration:.5, stagger:.08 }, '-=.3');

/* ── COUNTERS ── */
const counters = [[document.getElementById('c1'),3,''],[document.getElementById('c2'),20,'+'],[document.getElementById('c3'),4,'+'],[document.getElementById('c4'),5,'']];
counters.forEach(([el,target,suf]) => {
  gsap.to({v:0}, {
    v:target, duration:2, delay:1.4, ease:'power2.out',
    onUpdate: function() { el.textContent = Math.floor(this.targets()[0].v) + suf; }
  });
});

/* ── SCROLL REVEALS ── */
document.querySelectorAll('.reveal').forEach(el => {
  gsap.fromTo(el, { opacity:0, y:48 }, {
    opacity:1, y:0, duration:.9, ease:'power3.out',
    scrollTrigger:{ trigger:el, start:'top 86%', toggleActions:'play none none none' }
  });
});

/* ── STAGGER: PIPE CARDS ── */
document.querySelectorAll('.fc').forEach((c,i) => {
  gsap.fromTo(c, { opacity:0, y:60, scale:.96 }, {
    opacity:1, y:0, scale:1, duration:.75, ease:'power3.out', delay:i*.07,
    scrollTrigger:{ trigger:c, start:'top 88%', toggleActions:'play none none none' }
  });
});

/* ── STAGGER: EXP ITEMS ── */
document.querySelectorAll('.exp-item').forEach((el,i) => {
  gsap.fromTo(el, { opacity:0, x:-36 }, {
    opacity:1, x:0, duration:.65, ease:'power3.out', delay:i*.09,
    scrollTrigger:{ trigger:el, start:'top 88%', toggleActions:'play none none none' }
  });
});

/* ── STAGGER: PROJ CARDS ── */
document.querySelectorAll('.proj-card').forEach((c,i) => {
  gsap.fromTo(c, { opacity:0, y:44 }, {
    opacity:1, y:0, duration:.65, ease:'power3.out', delay:i*.1,
    scrollTrigger:{ trigger:c, start:'top 88%', toggleActions:'play none none none' }
  });
});

/* ── SPLIT TYPE: SECTION HEADINGS ── */
setTimeout(() => {
  document.querySelectorAll('.sec-h').forEach(el => {
    try {
      const split = new SplitType(el, { types:'words' });
      gsap.from(split.words, {
        opacity:0, y:32, stagger:.06, duration:.7, ease:'power3.out',
        scrollTrigger:{ trigger:el, start:'top 85%', toggleActions:'play none none none' }
      });
    } catch(e){}
  });
}, 200);
</script>
</body>
</html>
