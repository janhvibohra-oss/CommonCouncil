import React, { useState } from 'react';

const documentTemplates = {
  inc: { title: 'Articles of Incorporation', html: `...` },
  ont: { title: 'Ontario Business Name Registration', html: `...` },
  licence: { title: 'Toronto Business Licence Application', html: `...` },
  gst: { title: 'GST/HST Registration', html: `...` },
  emp: { title: 'Employment Agreement', html: `...` },
  nda: { title: 'Non-Disclosure Agreement', html: `...` },
  sha: { title: 'Shareholder Agreement', html: `...` },
  vendor: { title: 'Vendor / Supplier Agreement', html: `...` },
  privacy: { title: 'PIPEDA Privacy Policy', html: `...` },
  cipo: { title: 'CIPO Trademark Application', html: `...` },
  food: { title: 'Food Handler Certificate Application', html: `...` },
  wsib: { title: 'WSIB Registration', html: `...` }
};

export default function DocumentVault({ isOpen, closeVault, activeDocId }) {
  const downloadPDF = (title, htmlContent) => {
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html><html><head><title>${title}</title>
      <style>body{font-family:Arial;margin:40px;}</style>
      </head><body>${htmlContent}
      <script>window.onload=function(){window.print();}</script>
      </body></html>
    `);
    win.document.close();
  };

  if (!isOpen || !activeDocId) return null;
  const doc = documentTemplates[activeDocId];

  return (
    <div className="dv-ov open" onClick={closeVault}>
      <div className="dv" onClick={e => e.stopPropagation()}>
        <div className="dv-hdr">
          <h3>{doc.title}</h3>
          <div className="dv-acts">
            <button className="btn-dv pr" onClick={() => downloadPDF(doc.title, doc.html)}>⬇ Download PDF</button>
            <button className="dv-x" onClick={closeVault}>✕</button>
          </div>
        </div>
        <div className="dv-body" dangerouslySetInnerHTML={{ __html: doc.html }}></div>
      </div>
    </div>
  );
}


