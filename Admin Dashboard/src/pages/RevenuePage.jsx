import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, TrendingUp, CreditCard, Download } from 'lucide-react';
import { revenueChartData, subscriptionStats, paymentHistory } from '../data/adminData';
import { useApp } from '../context/AppContext';

const maxRev = Math.max(...revenueChartData.map(d => d.revenue));

export const RevenuePage = () => {
  const { downloadReport } = useApp();
  const totalRevenue = revenueChartData.reduce((a, c) => a + c.revenue, 0);

  return (
    <div>
      <div className="page-title">
        <h1>Revenue & Billing</h1>
        <p>Track revenue streams, subscription plans, and payment history</p>
      </div>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--primary)' }}>₹{(totalRevenue / 100000).toFixed(1)}L</div>
          <div className="ss-label">YTD Revenue</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--emerald)' }}>₹18.6L</div>
          <div className="ss-label">This Month</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--amber)' }}>+18.7%</div>
          <div className="ss-label">Growth Rate</div>
        </div>
        <div className="summary-stat">
          <div className="ss-value" style={{ color: 'var(--purple)' }}>20,000</div>
          <div className="ss-label">Active Subscribers</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <motion.div className="card" style={{ marginBottom: 20 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-header">
          <h3><TrendingUp size={18} style={{ color: 'var(--primary)' }} /> Revenue Trend</h3>
          <button className="btn btn-outline btn-sm" onClick={() => downloadReport('Revenue_Trend_Statement_2026', 'Excel')}>
            <Download size={13} /> Export Statement
          </button>
        </div>
        <div className="card-body">
          <div className="bar-chart" style={{ paddingBottom: 28, height: 200 }}>
            {revenueChartData.map((d, i) => (
              <div
                key={i}
                className="bar"
                style={{ height: `${(d.revenue / maxRev) * 100}%` }}
              >
                <span className="bar-value">₹{(d.revenue / 100000).toFixed(1)}L</span>
                <span className="bar-label">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="dashboard-grid grid-1-1" style={{ marginBottom: 20 }}>
        {/* Subscription Breakdown */}
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="card-header">
            <h3><CreditCard size={18} style={{ color: 'var(--purple)' }} /> Subscription Plans</h3>
          </div>
          <div className="card-body">
            {subscriptionStats.map((plan, i) => (
              <motion.div 
                key={i}
                style={{ 
                  padding: 16, marginBottom: i < subscriptionStats.length - 1 ? 12 : 0,
                  background: `${plan.color}08`, borderRadius: 12, border: `1px solid ${plan.color}20`
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--slate-900)' }}>{plan.plan}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{plan.count.toLocaleString()} subscribers</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: plan.color }}>{plan.revenue}</div>
                    <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{plan.percentage}% share</div>
                  </div>
                </div>
                <div className="progress-bar" style={{ height: 6 }}>
                  <motion.div 
                    className="progress-fill" 
                    style={{ background: plan.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${plan.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment History */}
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="card-header">
            <h3><IndianRupee size={18} style={{ color: 'var(--amber)' }} /> Recent Payments</h3>
            <button className="btn btn-outline btn-sm" onClick={() => downloadReport('Recent_Payments_Ledger', 'Excel')}>
              <Download size={13} /> Export Ledger
            </button>
          </div>
          <div className="card-body no-padding" style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Parent</th>
                  <th>Amount</th>
                  <th>Plan</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((pay) => (
                  <tr key={pay.id}>
                    <td style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700 }}>{pay.id}</td>
                    <td style={{ fontWeight: 600 }}>{pay.parent}</td>
                    <td style={{ fontWeight: 800, color: 'var(--slate-900)' }}>{pay.amount}</td>
                    <td style={{ fontSize: 12 }}>{pay.plan}</td>
                    <td style={{ fontSize: 12 }}>{pay.method}</td>
                    <td><span className={`badge ${pay.status.toLowerCase()}`}>{pay.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
