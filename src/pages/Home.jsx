import React from 'react';

export default function Home({ goToPage, scrollToSection }) {
  return (
    <div id="page-home" className="page active">
      <section className="hero">
        <div className="h-grid"></div>
        <div className="h-orb o1"></div>
        <div className="h-cnt">
          <div className="h-badge"><div className="live"></div>Now live across all 10 Canadian provinces</div>
          <h1>Your legal team, compliance dept.,<br/>and grants advisor — <span className="gt">for a fraction<br/>of the cost.</span></h1>
          <p className="h-sub">Canada has 4.2 million small businesses. Fewer than 10% can afford a lawyer. CommonCounsel gives every business owner the roadmap, documents, and funding they need.</p>
          <div className="h-inp">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn-hero" onClick={() => goToPage('ob')}><span>Build my roadmap →</span></button>
          </div>
        </div>
      </section>

      <div className="mq-wrap">
        <div className="mq-inner">
          <div className="mqp"><span className="mn">4.2M</span><span className="ml">Small businesses in Canada</span></div>
          <div className="mqp"><span className="mn">$30B+</span><span className="ml">Annual funding unclaimed</span></div>
          <div className="mqp"><span className="mn">$400/hr</span><span className="ml">Average Canadian lawyer rate</span></div>
        </div>
      </div>

      <section className="sec" id="pricing">
        <div className="ey ey-b">Pricing</div>
        <h2 className="st">Less than a coffee a day.</h2>
        <div className="price-grid">
          <div className="pc">
            <p className="pc-name">Starter</p>
            <div className="pc-price"><span className="pc-big">Free</span></div>
            <button className="btn-pc" onClick={() => goToPage('ob')}>Start for free →</button>
          </div>
          <div className="pc feat">
            <div className="feat-badge">Most Popular</div>
            <p className="pc-name">Growth</p>
            <div className="pc-price"><span className="pc-big">$7</span><span className="pc-per">.99/mo</span></div>
            <button className="btn-pc pf" onClick={() => goToPage('ob')}>Start Growth →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
