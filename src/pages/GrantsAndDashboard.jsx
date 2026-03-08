import React, { useState } from 'react';

const grantsDatabase = [
  { name: 'Canada Small Business Financing Program', amount: 'Up to $1,150,000', type: 'federal', match: 85 },
  { name: 'Canada Digital Adoption Program (CDAP)', amount: 'Up to $15,000', type: 'federal tech', match: 92 },
  { name: 'CanExport SMEs', amount: 'Up to $50,000', type: 'federal', match: 70 },
  { name: 'BDC Small Business Loans', amount: 'Up to $100,000', type: 'federal', match: 88 },
  { name: 'NRC IRAP', amount: 'Up to $500,000', type: 'federal tech', match: 65 },
  { name: 'FedDev Ontario', amount: 'Up to $100,000', type: 'regional', match: 87 },
  { name: 'PacifiCan', amount: 'Up to $200,000', type: 'regional', match: 75 },
  { name: 'ACOA Atlantic Fund', amount: 'Up to $75,000', type: 'regional', match: 72 },
  { name: 'Women Entrepreneurship Strategy', amount: 'Up to $100,000', type: 'women', match: 90 },
  { name: 'BDC Women in Tech', amount: 'Up to $250,000', type: 'women tech', match: 80 },
  { name: 'Black Entrepreneurship Program', amount: 'Up to $250,000', type: 'indigenous', match: 85 },
  { name: 'NACCA Indigenous Capital', amount: 'Up to $150,000', type: 'indigenous', match: 88 },
  { name: 'Ontario Newcomer Entrepreneur Fund', amount: 'Up to $22,000', type: 'newcomer', match: 95 },
  { name: 'Futurpreneur Canada', amount: 'Up to $15,000', type: 'youth', match: 82 },
  { name: 'Rural Economic Development Fund', amount: 'Up to $50,000', type: 'regional', match: 78 }
];

export default function Grants() {
  const [filter, setFilter] = useState('all');

  const filteredGrants = filter === 'all' 
    ? grantsDatabase 
    : grantsDatabase.filter(g => g.type.includes(filter));

  return (
    <div id="page-funding" className="page active">
      <div className="fund-filter">
        {['all', 'federal', 'regional', 'women', 'indigenous', 'newcomer'].map(f => (
          <button 
            key={f} 
            className={`ff-pill ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <div className="fund-grid">
        {filteredGrants.map((grant, i) => (
          <div key={i} className="grant-card">
            <div className="gc-amount">{grant.amount}</div>
            <div className="gc-name">{grant.name}</div>
            <div className="match-bar"><div className="match-fill" style={{ width: `${grant.match}%` }}></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

