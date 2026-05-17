import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Shield, Usb, Zap, CheckCircle2 } from 'lucide-react';
import './index.css';
import HeroSequence from './HeroSequence';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <div className="app-container">
      
      {/* HERO SECTION */}
      <HeroSequence />

      {/* DETAILS & PRICING SECTION */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <motion.h2 variants={fadeUp}>Pro-grade illumination. <br/>Pocket-sized footprint.</motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.5rem', marginBottom: '4rem' }}>
              A compact, impact-resistant 600-lumen torch that doubles as an emergency backup phone charger. 
              Designed for those who demand reliability when it matters most.
            </motion.p>
            
            <motion.div variants={fadeUp} className="pricing-box">
              <div className="price">$48.00 SGD</div>
              <span className="gst-note">(before GST)</span>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#86868b' }}>
                  <CheckCircle2 size={18} /> CE Certified
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#86868b' }}>
                  <CheckCircle2 size={18} /> ROHS Compliant
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <select style={{ padding: '1rem', borderRadius: '8px', background: '#000', color: '#fff', border: '1px solid #333', fontSize: '1.1rem' }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button className="btn">Add to Cart</button>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="#bulk" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>Request Bulk Discount</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section-padding" style={{ background: '#050505' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
            style={{ marginBottom: '5rem' }}
          >
            <motion.h2 variants={fadeUp}>Built for Every Situation</motion.h2>
          </motion.div>

          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="feature-card">
              <Sun size={48} className="feature-icon" />
              <h3>600-Lumen Power</h3>
              <p>Adjustable twistable lens system to seamlessly transition from a wide floodlight to a focused spotlight.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="feature-card">
              <Battery size={48} className="feature-icon" />
              <h3>Emergency Power Bank</h3>
              <p>Built-in 2200mAh capacity to give your smartphone one full charge when you're off the grid.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="feature-card">
              <Shield size={48} className="feature-icon" />
              <h3>Tactical Durability</h3>
              <p>Impact-resistant and water-resistant aerospace-grade black aluminum body (L15cm x D3.5cm).</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DUAL-FUEL FLEXIBILITY */}
      <section className="section-padding">
        <div className="container">
          <motion.div 
            className="grid-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <img src="/assets/dual-fuel.png" alt="Dual Fuel System" className="feature-img" />
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp}>Dual-Fuel Flexibility</motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
                Never be left in the dark. The PA75 adapts to your available resources, ensuring you always have light and power.
              </motion.p>
              
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <Usb size={40} className="feature-icon" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Primary Power (Included)</h3>
                  <p>USB Rechargeable Li-ion battery. Fully recharges in just 3 hours via USB for a 4-hour continuous runtime.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem' }}>
                <Zap size={40} className="feature-icon" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>The Backup Plan</h3>
                  <p>Out of juice with no USB port in sight? Pop in 3x AAA batteries and keep moving.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="section-padding" style={{ background: '#050505', paddingBottom: '12rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-center" style={{ marginBottom: '4rem' }}>Technical Specifications</motion.h2>
            
            <motion.table variants={fadeUp} className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">Brightness</td>
                  <td className="spec-value">600 Lumens</td>
                </tr>
                <tr>
                  <td className="spec-label">Runtime</td>
                  <td className="spec-value">4 Hours</td>
                </tr>
                <tr>
                  <td className="spec-label">Recharge Time</td>
                  <td className="spec-value">3 Hours</td>
                </tr>
                <tr>
                  <td className="spec-label">Lighting Modes</td>
                  <td className="spec-value">High | Medium | Low | SOS | Flash</td>
                </tr>
                <tr>
                  <td className="spec-label">Material</td>
                  <td className="spec-value">Premium Aluminum</td>
                </tr>
                <tr>
                  <td className="spec-label">Color / Size</td>
                  <td className="spec-value">Black | One Size (L15cm x D3.5cm)</td>
                </tr>
                <tr>
                  <td className="spec-label">Certifications</td>
                  <td className="spec-value">CE & ROHS Certified</td>
                </tr>
              </tbody>
            </motion.table>
          </motion.div>
        </div>
      </section>

      {/* STICKY FOOTER */}
      <footer className="sticky-footer">
        <div className="container footer-content">
          <div className="footer-meta">
            SKU: PA75 &nbsp;|&nbsp; UPC: PA75
          </div>
          <div className="footer-actions">
            <div className="footer-links">
              <a href="#">Email a Friend</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>Print Page</a>
              <a href="#">Back to List</a>
            </div>
            <div className="footer-buy">
              <span className="price-small">$48.00 SGD</span>
              <button className="btn btn-small" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Buy Now</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
