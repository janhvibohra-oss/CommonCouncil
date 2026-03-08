:root {
  --blue: #20407F; --blue-l: #eef2fb; --blue-m: #4a72c4;
  --orange: #DD4B0B; --orange-l: #fdf0eb;
  --purple: #8B2FC9; --purple-l: #f3eafb;
  --grad: linear-gradient(135deg, #20407F 0%, #8B2FC9 50%, #DD4B0B 100%);
  --grad-soft: linear-gradient(135deg, rgba(32,64,127,.07) 0%, rgba(139,47,201,.05) 50%, rgba(221,75,11,.05) 100%);
  --dark: #111; --mid: #555; --light: #999;
  --border: #ebebeb; --white: #fff;
  --green: #15803d; --green-bg: #dcfce7;
  --amber: #92400e; --amber-bg: #fef3c7;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background: #fff; color: var(--dark); overflow-x: hidden; cursor: none; }

/* Custom Cursor */
#cur { width: 6px; height: 6px; background: var(--blue); border-radius: 50%; position: fixed; z-index: 9999; pointer-events: none; transform: translate(-50%,-50%); transition: width .2s, height .2s, background .2s; }
#cur-ring { width: 28px; height: 28px; border: 1.5px solid rgba(32,64,127,.3); border-radius: 50%; position: fixed; z-index: 9998; pointer-events: none; transform: translate(-50%,-50%); transition: border-color .2s, transform .3s; }
body.hovering #cur { width: 10px; height: 10px; background: var(--purple); }
body.hovering #cur-ring { border-color: rgba(139,47,201,.4); transform: translate(-50%,-50%) scale(1.8); }

/* Navigation */
nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 48px; transition: transform .4s cubic-bezier(.23,1,.32,1), background .3s, box-shadow .3s; }
nav.scrolled { background: rgba(255,255,255,.93); backdrop-filter: blur(20px); box-shadow: 0 1px 0 var(--border); }

/* Utilities & Animations */
@keyframes fup { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes orb { 0%, 100% { transform: translate(0,0); } 33% { transform: translate(20px,-20px); } 66% { transform: translate(-15px,15px); } }
@keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s cubic-bezier(.23,1,.32,1), transform .7s cubic-bezier(.23,1,.32,1); }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* Modals & Overlays */
.mod-ov, .dv-ov { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.4); backdrop-filter: blur(8px); z-index: 2000; align-items: center; justify-content: center; padding: 20px; }
.mod-ov.open, .dv-ov.open { display: flex; }

