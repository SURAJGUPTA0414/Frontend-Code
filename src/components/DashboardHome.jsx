import React from 'react'

function DashboardHome() {
  return (
    <>
        <main className="main-content">
        <section className="dashboard-grid">
        
          <div className="card blood-type">
            <h2>
              A+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>1</p>
          </div>
          <div className="card blood-type">
            <h2>
              B+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>2</p>
          </div>
          <div className="card blood-type">
            <h2>
              O+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>37</p>
          </div>
          <div className="card blood-type">
            <h2>
              AB+ <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>8</p>
          </div>
          <div className="card blood-type">
            <h2>
              A- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>7</p>
          </div>
          <div className="card blood-type">
            <h2>
              B- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>1</p>
          </div>
          <div className="card blood-type">
            <h2>
              O- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>10</p>
          </div>
          <div className="card blood-type">
            <h2>
              AB- <span className="material-icons blood-icon">water_drop</span>
            </h2>
            <p>32</p>
          </div>

         
          <div className="card stats-card">
            <h3>
              Total Donors <span className="material-icons">people_alt</span>
            </h3>
            <p>3</p>
          </div>
          <div className="card stats-card">
            <h3>
              Total Requests <span className="material-icons">autorenew</span>
            </h3>
            <p>3</p>
          </div>
          <div className="card stats-card">
            <h3>
              Approved Requests
              <span className="material-icons">check_circle_outline</span>
            </h3>
            <p>2</p>
          </div>
          <div className="card stats-card">
            <h3>
              Total Blood Units
              <span className="material-icons blood-icon">water_drop</span>
            </h3>
            <p>98</p>
          </div>
        </section>
      </main>
      
      </>
  )
}

export default DashboardHome
