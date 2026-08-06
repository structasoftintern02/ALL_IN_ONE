import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Building2, GraduationCap, ClipboardCheck, IndianRupee,
  Baby, TrendingUp, ArrowUpRight, ArrowDownRight, Eye, FileText,
  ChevronRight, Zap, Clock, HardDrive, Activity, Plus
} from 'lucide-react';
import {
  revenueChartData, ageGroupDistribution,
  assessmentCategories, topSchools, subscriptionStats, systemHealth
} from '../data/adminData';
import { useApp } from '../context/AppContext';

const iconMap = {
  indigo: Baby,
  blue: Building2,
  purple: GraduationCap,
  emerald: ClipboardCheck,
  amber: IndianRupee,
  pink: Users
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const maxRevenue = Math.max(...revenueChartData.map(d => d.revenue));

export const DashboardPage = ({ setActivePage }) => {
  const { 
    approvedTeachersCount, 
    accreditedSchoolsCount, 
    childrenList, 
    parentsList, 
    activities, 
    showToast,
    openModal 
  } = useApp();

  const dynamicStats = {
    totalChildren: { value: `${(childrenList.length + 28400).toLocaleString()}`, trend: '+12.5%', direction: 'up', label: 'Total Children', color: 'indigo', page: 'children' },
    activeSchools: { value: `${accreditedSchoolsCount}`, trend: '+8.2%', direction: 'up', label: 'Active Schools', color: 'blue', page: 'verify-schools' },
    certifiedTeachers: { value: `${approvedTeachersCount.toLocaleString()}`, trend: '+15.3%', direction: 'up', label: 'Certified Teachers', color: 'purple', page: 'verify-teachers' },
    assessmentsDone: { value: '4,280', trend: '+22.1%', direction: 'up', label: 'Assessments Done', color: 'emerald', page: 'analytics' },
    monthlyRevenue: { value: '₹18.6L', trend: '+18.7%', direction: 'up', label: 'Monthly Revenue', color: 'amber', page: 'revenue' },
    activeParents: { value: `${(parentsList.length + 12830).toLocaleString()}`, trend: '+9.4%', direction: 'up', label: 'Active Parents', color: 'pink', page: 'parents' }
  };

  return (
    <div>
      {/* Top Banner Quick Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)' }}>Platform Governance Overview</h2>
          <p style={{ fontSize: 12, color: 'var(--slate-500)' }}>Real-time telemetry and management controls</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-outline" onClick={() => openModal('ADD_CHILD')}>
            <Plus size={14} /> Enroll Child
          </button>
          <button className="btn btn-primary" onClick={() => openModal('ADD_CATEGORY')}>
            <Plus size={14} /> Add Skill Category
          </button>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <motion.div 
        className="stats-grid" 
        variants={container} 
        initial="hidden" 
        animate="show"
      >
        {Object.entries(dynamicStats).map(([key, stat]) => {
          const Icon = iconMap[stat.color];
          return (
            <motion.div 
              key={key} 
              className={`stat-card ${stat.color}`} 
              variants={item}
              whileHover={{ y: -4 }}
              onClick={() => setActivePage(stat.page)}
            >
              <div className="stat-icon">
                <Icon size={22} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <span className={`stat-trend ${stat.direction}`}>
                {stat.direction === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.trend}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Revenue Chart + Age Distribution */}
      <div className="dashboard-grid grid-2-1" style={{ marginBottom: 20 }}>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="card-header">
            <h3>
              <TrendingUp size={18} style={{ color: 'var(--primary)' }} />
              Revenue & Enrollment Growth
            </h3>
            <button className="filter-btn active" onClick={() => setActivePage('revenue')}>
              View Billing <ChevronRight size={12} />
            </button>
          </div>
          <div className="card-body">
            <div className="bar-chart" style={{ paddingBottom: 28 }}>
              {revenueChartData.map((d, i) => (
                <div
                  key={i}
                  className="bar"
                  onClick={() => showToast(`${d.month} Revenue: ₹${(d.revenue / 100000).toFixed(1)}L (${d.enrollments} enrollments)`, 'info')}
                  style={{ 
                    height: `${(d.revenue / maxRevenue) * 100}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <span className="bar-value">₹{(d.revenue / 100000).toFixed(1)}L</span>
                  <span className="bar-label">{d.month}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, gap: 16 }}>
              <div 
                style={{ textAlign: 'center', flex: 1, padding: '12px', background: 'var(--slate-50)', borderRadius: 10, cursor: 'pointer' }}
                onClick={() => setActivePage('revenue')}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)' }}>₹18.6L</div>
                <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>This Month</div>
              </div>
              <div 
                style={{ textAlign: 'center', flex: 1, padding: '12px', background: 'var(--slate-50)', borderRadius: 10, cursor: 'pointer' }}
                onClick={() => setActivePage('analytics')}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--emerald)' }}>+18.7%</div>
                <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>Growth Rate</div>
              </div>
              <div 
                style={{ textAlign: 'center', flex: 1, padding: '12px', background: 'var(--slate-50)', borderRadius: 10, cursor: 'pointer' }}
                onClick={() => setActivePage('revenue')}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--slate-900)' }}>₹92.3L</div>
                <div style={{ fontSize: 11, color: 'var(--slate-500)', fontWeight: 600 }}>YTD Revenue</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="card-header">
            <h3>
              <Baby size={18} style={{ color: 'var(--pink)' }} />
              Age Distribution
            </h3>
            <button className="filter-btn" onClick={() => setActivePage('children')}>Details</button>
          </div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* CSS Donut Chart */}
            <div className="donut-chart" style={{ cursor: 'pointer' }} onClick={() => setActivePage('children')}>
              <svg viewBox="0 0 36 36">
                {(() => {
                  let offset = 0;
                  return ageGroupDistribution.map((g, i) => {
                    const dash = g.percentage;
                    const gap = 100 - dash;
                    const el = (
                      <circle
                        key={i}
                        cx="18" cy="18" r="14"
                        fill="none"
                        stroke={g.color}
                        strokeWidth="4"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={-offset}
                        strokeLinecap="round"
                      />
                    );
                    offset += dash;
                    return el;
                  });
                })()}
              </svg>
              <div className="donut-center">
                <div className="donut-value">28.4K</div>
                <div className="donut-label">Total</div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              {ageGroupDistribution.map((g, i) => (
                <div 
                  key={i} 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < ageGroupDistribution.length - 1 ? '1px solid var(--slate-100)' : 'none', cursor: 'pointer' }}
                  onClick={() => setActivePage('children')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: g.color }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--slate-700)' }}>{g.group}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--slate-900)' }}>{g.percentage}%</span>
                    <span style={{ fontSize: 11, color: 'var(--slate-500)' }}>{g.count.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Assessment Categories + Top Schools */}
      <div className="dashboard-grid grid-1-1" style={{ marginBottom: 20 }}>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="card-header">
            <h3>
              <ClipboardCheck size={18} style={{ color: 'var(--emerald)' }} />
              Assessment Performance
            </h3>
            <button className="btn btn-outline btn-sm" onClick={() => setActivePage('analytics')}>
              View Analytics <ChevronRight size={14} />
            </button>
          </div>
          <div className="card-body">
            {assessmentCategories.map((cat, i) => (
              <div 
                key={i} 
                style={{ marginBottom: i < assessmentCategories.length - 1 ? 16 : 0, cursor: 'pointer' }}
                onClick={() => setActivePage('analytics')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 16 }}>{cat.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--slate-800)' }}>{cat.name}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: cat.color }}>{cat.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill" 
                    style={{ background: cat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 10, color: 'var(--slate-400)' }}>{cat.completed.toLocaleString()} completed</span>
                  <span style={{ fontSize: 10, color: 'var(--slate-400)' }}>{cat.total.toLocaleString()} total</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="card-header">
            <h3>
              <Building2 size={18} style={{ color: 'var(--blue)' }} />
              Top Performing Schools
            </h3>
            <button className="btn btn-outline btn-sm" onClick={() => setActivePage('verify-schools')}>
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="card-body no-padding">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>School</th>
                  <th>Enrollments</th>
                  <th>Growth</th>
                </tr>
              </thead>
              <tbody>
                {topSchools.map((school, i) => (
                  <tr 
                    key={i} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      showToast(`Viewing details for ${school.name}`, 'info');
                      setActivePage('verify-schools');
                    }}
                  >
                    <td>
                      <span style={{ 
                        width: 24, height: 24, borderRadius: 6, 
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 800,
                        background: i === 0 ? 'rgba(245,158,11,0.15)' : i === 1 ? 'rgba(148,163,184,0.15)' : i === 2 ? 'rgba(180,83,9,0.15)' : 'var(--slate-50)',
                        color: i === 0 ? 'var(--amber)' : i === 1 ? 'var(--slate-500)' : i === 2 ? '#B45309' : 'var(--slate-400)'
                      }}>
                        {school.rank}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: 12 }}>{school.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--slate-500)' }}>{school.city}</div>
                    </td>
                    <td style={{ fontWeight: 700 }}>{school.enrollments}</td>
                    <td>
                      <span className="stat-trend up" style={{ fontSize: 11 }}>
                        <ArrowUpRight size={11} /> {school.growth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Recent Enrollments + Activity Feed */}
      <div className="dashboard-grid grid-2-1" style={{ marginBottom: 20 }}>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="card-header">
            <h3>
              <Baby size={18} style={{ color: 'var(--primary)' }} />
              Recent Enrollments
            </h3>
            <button className="btn btn-outline btn-sm" onClick={() => setActivePage('children')}>
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="card-body no-padding" style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Child</th>
                  <th>Age Group</th>
                  <th>School</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {childrenList.slice(0, 5).map((enr) => (
                  <tr key={enr.id}>
                    <td>
                      <div className="table-name">
                        <div className="table-avatar" style={{ background: `linear-gradient(135deg, var(--primary), var(--purple))` }}>
                          {enr.avatar}
                        </div>
                        <div>
                          <div className="table-name-text">{enr.name}</div>
                          <div className="table-sub">{enr.parent}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge" style={{ 
                        background: enr.ageGroup === '3–5' ? 'rgba(236,72,153,0.1)' : enr.ageGroup === '5–7' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)',
                        color: enr.ageGroup === '3–5' ? 'var(--pink)' : enr.ageGroup === '5–7' ? '#D97706' : 'var(--emerald)'
                      }}>
                        {enr.ageGroup} yrs
                      </span>
                    </td>
                    <td style={{ fontSize: 12 }}>{enr.school}</td>
                    <td>
                      <span className={`badge ${enr.status.toLowerCase()}`}>{enr.status}</span>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-sm" onClick={() => openModal('VIEW_CHILD', enr)}>
                        <Eye size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div className="card-header">
            <h3>
              <Activity size={18} style={{ color: 'var(--amber)' }} />
              Activity Feed
            </h3>
          </div>
          <div className="card-body" style={{ maxHeight: 420, overflowY: 'auto' }}>
            {activities.map((act) => (
              <div key={act.id} className="activity-item">
                <div className="activity-icon">{act.icon}</div>
                <div>
                  <div className="activity-text">{act.message}</div>
                  <div className="activity-time">
                    <Clock size={10} style={{ display: 'inline', marginRight: 4 }} />
                    {act.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subscription Stats + System Health */}
      <div className="dashboard-grid grid-1-1">
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <div className="card-header">
            <h3>
              <IndianRupee size={18} style={{ color: 'var(--amber)' }} />
              Subscription Plans
            </h3>
            <button className="btn btn-outline btn-sm" onClick={() => setActivePage('revenue')}>
              View Billing
            </button>
          </div>
          <div className="card-body">
            {subscriptionStats.map((plan, i) => (
              <div 
                key={i} 
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: i < subscriptionStats.length - 1 ? '1px solid var(--slate-100)' : 'none', cursor: 'pointer' }}
                onClick={() => setActivePage('revenue')}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${plan.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 4, background: plan.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--slate-900)' }}>{plan.plan}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: plan.color }}>{plan.revenue}</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill" 
                      style={{ background: plan.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${plan.percentage}%` }}
                      transition={{ duration: 1, delay: 1 + i * 0.15 }}
                    />
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--slate-400)', marginTop: 4 }}>
                    {plan.count.toLocaleString()} subscribers • {plan.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <div className="card-header">
            <h3>
              <Zap size={18} style={{ color: 'var(--emerald)' }} />
              System Health
            </h3>
            <button className="badge active" style={{ cursor: 'pointer' }} onClick={() => showToast('All platform microservices operational', 'success')}>
              ● Operational
            </button>
          </div>
          <div className="card-body">
            {[
              { label: 'Platform Uptime', value: systemHealth.uptime, icon: <Activity size={16} />, color: 'var(--emerald)' },
              { label: 'API Response Time', value: systemHealth.apiResponseTime, icon: <Zap size={16} />, color: 'var(--blue)' },
              { label: 'Active Sessions', value: systemHealth.activeSessions.toLocaleString(), icon: <Users size={16} />, color: 'var(--purple)' },
              { label: 'Storage Used', value: systemHealth.storageUsed, icon: <HardDrive size={16} />, color: 'var(--amber)' },
              { label: 'Last Backup', value: systemHealth.lastBackup, icon: <Clock size={16} />, color: 'var(--slate-500)' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 4 ? '1px solid var(--slate-100)' : 'none', cursor: 'pointer' }}
                onClick={() => showToast(`${item.label}: ${item.value}`, 'info')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--slate-700)' }}>{item.label}</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--slate-900)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
