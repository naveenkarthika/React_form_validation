<div className="App">
          <Router>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <Link to="/" className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
                <Link to="/about" className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</Link>
                <Link to="/contact" className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</Link>
                <Link to="/login" className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Login</Link>
              </div>
            </nav>
            
              <Switch>
                  <Route path="/">
                    <Home/>
                  </Route>
                  <Route path="/about">
                    <About/>
                  </Route>
                  <Route path="/contact">
                    <Contact/>
                  </Route>  
                  <Route path="/login">
                    <FormValidation/>
                  </Route>
              </Switch>
            
          </Router>
        </div>